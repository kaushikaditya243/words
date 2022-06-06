player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

player1score = 0;
player2score = 0;

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("player_question").innerHTML = "Question Turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn-" + player2_name;

function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    console.log("Word=" + word);

    charat1 = word.charAt(1);
    console.log("charat1=" + charat1);

    lengthDividedBy2 = Math.floor(word.length / 2);
    charat2 = word.charAt(lengthDividedBy2);
    console.log("charat2=" + charat2);

    lengthMinus1 = word.length - 1;
    charat3 = word.charAt(lengthMinus1);
    console.log("charat3" + charat3);

    removecharat1 = word.replace(charat1, "_");
    removecharat2 = removecharat1.replace(charat2, "_");
    removecharat3 = removecharat2.replace(charat3, "_");
    console.log(removecharat3);

    questionword = "<h4 id='word' >Q. " + removecharat3 + "</h4>";
    inputbox = "<br> answer.<input id='inputcheckbox'>";
    button = "<br><br> <button onclick='check()'class='btn btn-info'> Check </button>";
    row = questionword + inputbox + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
    get_answer = document.getElementById("inputcheckbox").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case -" + answer);
    if (answer == word) {
        if (answerTurn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;




        } else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;

        }

    }
    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name;

    } else {
        questionTurn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;

    }

    if (answerTurn == "player1") {
        answerTurn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;

    } else {
        answerTurn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name;


    }
    document.getElementById("output").innerHTML = "";



}