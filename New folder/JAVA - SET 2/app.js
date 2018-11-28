
document.onmousedown=disableclick;status="Right Click Disabled";function disableclick(event){ if(event.button==2) { alert(status); return false; }}

function hhh()
{ 
	if(localStorage.getItem("score")!="")
	       		console.log(" Previous Scores: "+localStorage.getItem("score"));		
	else
	  localStorage.setItem("score","");	       	
}
hhh();
addEventListener("click", function() {
    var el = document.documentElement , rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
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
	localStorage.score = quiz.score;
	var currentQuestionNumber = quiz.questionIndex +1;
	var element =document.getElementById("progress");
			element.innerHTML = "Question" + currentQuestionNumber + "of " + quiz.questions.length;

	
	
};
function showScores()
{
	//alert(localStorage.getItem("score"));
	var gameOverHtml = "<h1 >Result</h2>";
	gameOverHtml +="<h2 id = 'score'>Scores: "+ quiz.score+ "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;

	localStorage.score = quiz.score;

};
function Question(text,choices,answer){
	this.text = text;
	this.choices = choices;  
	this.answer = answer;

	//console.log(this.text);
}
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
var questions =[new Question ("What does get(int index) method define by List interface do?", ["returns an object stored at the specified index" ,"stores an object at the specified index" , "returns a list containing elements between specified index and end in the collection." ,"none of the above."] , "returns an object stored at the specified index"),
new Question ("A Suspended thread can be revived by using?", ["start() method" ,"Suspend() method" , "resume() method" ,"yield() method"] , "resume() method"),
new Question ("What is the output of this program?<br>class average {<br>        public static void main(String args[])<br>        {<br>double num[] = {5.5, 10.1, 11, 12.8, 56.9, 2.5};<br>double result;<br>  result = 0;<br>            for (int i = 0; i < 6; ++i)<br>                 result = result + num[i];<br>	    System.out.print(result/6);<br>         } <br>    }<br>", ["16.34" ,"16.46666666666667" ,"16.5555" ,"16.4666666666"] , "16.46666666666667"),
new Question ("Which two methods you need to implement to use an Object as key in HashMap?<br>", ["push() and pop()	" ,"equals() and hashcode()" , "get() and set()" ,"put() and get()"] , "equals() and hashcode()"),
new Question (" ________ is a process by which the value of object is automatically extracted from a type wrapper?<br>", ["A. Autoboxing",	"B. Auto-Unboxing","C. Encapsualtion	","D. Abstraction"] , "B. Auto-Unboxing"),
new Question ("What is the output of this program?<br>class conversion {<br>        public static void main(String args[])<br>        {    <br>             double a = 295.04;<br>             int  b = 300;<br>             byte c = (byte) a;<br>             byte d = (byte) b;<br>             System.out.println(c + '' ''  + d);<br>        } <br>    }<br>", ["A. 38 43"	,"B. 39 44","C. 295 300",	"D. 295.4 300.6"] , "B. 39 44"),
new Question ("Which statement is static and synchronized in JDBC API?", ["A. executeQuery()","B. executeUpdate()","C. getConnection()","D. prepareCall()"] , "C. getConnection()"),
new Question ("The class java.sql.Timestamp is associated with?", ["A. java.util.Time","B. java.sql.Time","C. java.util.Date","D. None of the above"] , "C. java.util.Date"),
new Question ("Process of converting an object into a sequence of bytes which can be persisted is called ?", ["A. Serialization","B. Deserialization","C. Synchronization","D. Externalization"] , "A. Serialization"),
new Question (" A class or interface that operates on parameterized type is called ?", ["A. TypeWrapper","B. Collection","C. Generic","D. none of the above"] , "C. Generic"),
new Question ("Which of the following statement is not correct about an Enumerations class ?", ["A. Enumerations are instantiated using new keyword.","B. Enumerations can have instance Variables and methods","C. Enumerations can have Constructors.","D. Enumerations can implement Interfaces."] , "A. Enumerations are instantiated using new keyword."),
new Question ("________ interface without any field and method is called", ["A. Marker Interface",	"B. Empty Interface","C. Annotation",	"D. None of the above"] , "A. Marker Interface"),
new Question ("Which of the following modifier is used to prevent a property from being serialized ?", ["A. strict","B. native","C. transient","D. volatile"] , "C. transient"),
new Question ("Which of the following is a legal identifier in java ?", ["2variable","B. #myvar","C. +@$var","D. $_myvar"] , "D. $_myvar"),
new Question("In the given Array declaration, which expression returns the output as 5 ?<br>int [] arr = { 23, 5, 78, 34, 2};" , ["A. arr.length()","B. arr[].length()","C. arr[].length","D. arr.length"] ,"D. arr.length")
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

		//console.log(quiz.getQuestionIndex());
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