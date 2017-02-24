var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == English[currentQuestion].correct) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < English.length) {
                    displayCurrentQuestion();
                } else {
                    quizOver = true;
                    // Redirect to result page
                   location = "results.html?score=" + correctAnswer; 
                    
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
           
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = English[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = English[currentQuestion].choice.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = English[currentQuestion].choice[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}


function resetQuiz() {
    currentQuestion = 0;
    correct = 0;
    hideScore();
}



// TIMERR

function timesUp()
{
 window.location = "results.html?score=" + correctAnswer;
}
setTimeout("timesUp()",60000)


// JQUERY COUNTDOWN
var countDownTime = 60;
	function countDownTimer() {
		var hours = parseInt( countDownTime / 3600 ) % 24;
		var minutes = parseInt( countDownTime / 60 ) % 60;
		var seconds = countDownTime % 60;
		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
		$('#timer').html(result);
   		if(countDownTime == 0 ){ countDownTime = 60*60*60; }
   		countDownTime = countDownTime - 1;
   		setTimeout(function(){ countDownTimer() }, 1000);
	}

countDownTimer();