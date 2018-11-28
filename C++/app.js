
document.onmousedown=disableclick;status="Right Click Disabled";function disableclick(event){ if(event.button==2) { alert(status); return false; }}

addEventListener("click", function() {
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
});
		var c = 1;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getElementById("txt").value = c;
    c = c + 1;
    if(c==100)
    {
    	clearTimeout(t);
    timer_is_on = 0;



var event = $(document).click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
});

// disable right click
$(document).bind('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
});

$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});


    	showScores();
    	stopCount();
    



    }
    
    t = setTimeout(function(){timedCount()}, 1000);
}

addEventListener("click" ,

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
});


function guess(id , guess)
{
	var button = document.getElementById(id);
	button.onclick = function()

{
	quiz.guess(guess);
	populate();
}
};

function showProgress()
{
	var currentQuestionNumber = quiz.questionIndex +1;
	var element =document.getElementById("progress");
			element.innerHTML = "Question" + currentQuestionNumber + "of " + quiz.questions.length;
};
function showScores()
{
	var gameOverHtml = "<h1 >Result</h2>";
	gameOverHtml +="<h2 id = 'score'>Scores: "+ quiz.score+ "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;

};
function Question(text,choices,answer){
	this.text = text;
	this.choices = choices;  
	this.answer = answer;

	console.log(this.text)};
Question.prototype.correctAnswer = function(choice)
{
	return choice == this.answer;
}
function Quiz(qu) {
	this.score = 0;
	this.questions = qu;
	this.questionIndex = 0;
};
Quiz.prototype.getQuestionIndex = function()
{
	return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded = function() {
	return this.questions.length == this.questionIndex;	
}
Quiz.prototype.guess = function (answer)
{
	
	if(this.getQuestionIndex().correctAnswer(answer))
	{
		this.score++;
	}
	this.questionIndex++;
}
Array.prototype.shuffle = function(){
	var input = this;
	for(var i = input.length-1;i>=0;i--)
	{
		var randomIndex = Math.floor(Math.random()*(i+1));
		var itemAtIndex = input[randomIndex];
		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}
	return input;
}
var questions =[


];

questions.shuffle();


var quiz = new Quiz(questions);

populate();

function populate()
{

	if(quiz.isEnded())
	{

		addEventListener("click",function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;



var event = $(document).click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
});

// disable right click
$(document).bind('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
});

$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});

});
	

	
		//alert('hi');
		showScores();
	}
	else
	{
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		//show choices

		console.log(quiz.getQuestionIndex());
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0; i<choices.length;i++)
		{
			var element =document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i , choices[i]);
		}
		showProgress();
	
	}

};

// document.getElementById("question").innerHTML="hello";