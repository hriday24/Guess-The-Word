var Player1Username, Player2Username, Player1Score, Player2Score, answer, question;

Player1Username = localStorage.getItem("Player1Username");
Player2Username = localStorage.getItem("Player2Username");

document.getElementById("Player1Username").innerHTML = Player1Username;
document.getElementById("Player2Username").innerHTML = Player2Username;

Player1Score = 0;
Player2Score = 0;

document.getElementById("Player1Score").innerHTML = Player1Score;
document.getElementById("Player2Score").innerHTML = Player2Score;

var r = Math.round(Math.random());

var questioner, answerer;

if (r == 0) {
    document.getElementById("Questioner").innerHTML = "The question player is " + Player1Username;
    document.getElementById("Answerer").innerHTML = "The answer player is " + Player2Username;
    questioner = Player1Username;
    answerer = Player2Username;
} else if (r == 1) {
    document.getElementById("Questioner").innerHTML = "The question player is " + Player2Username;
    document.getElementById("Answerer").innerHTML = "The answer player is " + Player1Username;
    questioner = Player2Username;
    answerer = Player1Username;
}

function Send() {
    document.getElementById("QuestionWord").readOnly = true;
    question = (document.getElementById("QuestionWord").value).toUpperCase();
    console.log(question);
    var c1 = question.charAt(0);
    var c2 = question.charAt(Math.round(question.length / 2));
    var c3 = question.charAt(question.length - 1);
    var newword = question.replace(c1, "_");
    var newword2 = newword.replace(c2, "_");
    var newword3 = newword2.replace(c3, "_");
    console.log(newword3);

    /*Creating new elemnts*/
    var id = "word_display";
    var elements = "<h3 id =" + id + "> Q) " + newword3 + " </h3>";
    var inputtype = "text";
    var inputid = "Answer"
    var input = "<br><input type =" + inputtype + " id = " + inputid + " placeholder = 'Enter answer here'>";
    var buttonfunction = "Check()";
    var button2 = "<br><br><button class = 'btn btn-info' onclick = " + buttonfunction + ">Check</button>"

    var div = elements + input + button2;
    document.getElementById("AnswerArea").innerHTML = div;
    document.getElementById("QuestionWord").value = "";
}

function Check(){
    ans = document.getElementById("Answer").value;
    answer = ans.toUpperCase();

    if(answer == question){
        if(answerer == Player1Username){
            Player1Score += 5;
            document.getElementById("Player1Score").innerHTML = Player1Score;
            questioner = Player1Username;
            answerer = Player2Username;
            document.getElementById("Questioner").innerHTML = "The question player is " + questioner;
            document.getElementById("Answerer").innerHTML = "The answer player is " + answerer;
        }
        else{
            Player2Score += 5;
            document.getElementById("Player2Score").innerHTML = Player2Score;
            questioner = Player2Username;
            answerer = Player1Username;
            document.getElementById("Questioner").innerHTML = "The question player is " + questioner;
            document.getElementById("Answerer").innerHTML = "The answer player is " + answerer;
        }
        document.getElementById("AnswerArea").innerHTML = "";
        document.getElementById("QuestionWord").readOnly = false;
    }
    else{
        if(question.length != answer.length){
            window.alert("This word is " + question.length + " letters long");
        }
        else{
            window.alert("Try again!");
            document.getElementById("Answer").value = "";
        }    
    }
}