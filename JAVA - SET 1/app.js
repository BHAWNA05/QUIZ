
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
var questions =[new Question ("OUTPUT:<br>public classTest<br>public static void main(String[] args)<br>{<br>// How many objects are eligible for <br>// garbage collection after this line?<br>m1();  // Line 1<br>}<br>static voidm1() <br>{<br>Test t1 = newTest();<br>Test t2 = newTest();<br>} <br>}<br>How many objects are eligible for garbage collection after execution of line 1 ?", ["4" ,"2" , "1" ,"NONE"] , "2"),
new Question ("What is the use of final keyword in Java?", ["When a class is made final, a sublcass of it can not be created." ,"When a method is final, it can not be overridden." , "When a variable is final, it can be assigned value only once" ,"All of the above"] , "All of the above"),
new Question ("OUTPUT:<br>class GeeksforGeeks {<br>    public static void main(String args[])<br>{<br>StringBuffer GfG1 = newStringBuffer(''Hello'');<br>StringBuffer GfG2 = newStringBuffer('' World'');<br>GfG1.append(GfG2);<br>System.out.println(GfG1);<br>}<br>}<br>", ["Hello" ,"World" ,"Helloworld" ,"Hello World"] , "Hello World"),
new Question ("Which interface does NavigableSetimplements ?", ["Set" ,"List" , "Collection" ,"SortedSet"] , "SortedSet"),
new Question ("When we create String with new() Operator, where is it stored?", ["In to the String Pool" ,"It is created in Heap but not added to String Pool" , "Not stored anywhere" ,"None of the above"] , "It is created in Heap but not added to String Pool"),
new Question ("Wrapper class is a wrapper around a _______ data type.", ["Normal" ,"Central" , "Primitive" ,"Concrete"] , "Primitive"),
new Question ("Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object?", ["java.lang.String" ,"java.lang.Character" , "java.lang.StringBuffer" ,"java.lang.Double"] , "java.lang.StringBuffer"),
new Question ("What will be the output of the program?<br>class SSBool<br>{<br>public static void main(String [] args)<br>{<br>boolean b1 = true;<br>boolean b2 = false;<br>boolean b3 = true;<br>if ( b1 & b2 | b2 & b3 | b2 ) /* Line 8 */<br>System.out.print(''ok '');<br>if ( b1 & b2 | b2 & b3 | b2 | b1 ) /*Line 10*/<br>System.out.println(''doke'');<br>}<br>}", ["ok" ,"No output is produced" , "dokey" ,"Compilation error"] , "dokey"),
new Question ("Thread class available in which package?", ["java.util" ,"java.io" , "java.awt" ,"java.lang"] , "java.lang"),
new Question ("public class MainClass {<br><br>static public void main(String... arg) {<br>int l=-9;<br>System.out.println(++l + l++);<br>}<br>}", ["16" ,"0" , "-16" ,"-8"] , "-16"),
new Question ("try{<br>File f = new File(''a.txt'');<br>}<br>catch(Exception e)<br>{<br>}<br>catch(IOException io)<br>{<br>}<br>Is this code create new file name a.txt ?", ["true" ,"false" ,"Compilation Error " ,"None of these"] , "Compilation Error "),
new Question ("Which of these classes defined in java.io and used for file-handling are abstract?<br>A. InputStream<br>B. PrintStream<br>C. Reader<br>D. FileInputStream<br>E. FileWriter<br>", ["Only A" ,"Only C" ,"A and C" ,"A, B and E"] , "A and C"),
new Question ("What will be the output of the following program code?<br>public class Test implements Runnable<br>{<br>public static void main(String[] args){<br>                Thread t = new Thread(this);<br>                t.start();<br>       }<br>        public void run(){<br>   System.out.println(''test'');<br>}<br>}<br>", ["The program does not compile because this cannot be referenced in a static method." ,"The program compiles fine, but it does not print anything because t does not invoke the run() method" ,"The program compiles and runs fine and displays test on the console" ,"NONE OF THESE"] , "The program does not compile because this cannot be referenced in a static method."),
new Question ("What is the output for the below code ?<br>class A implements Runnable{      <br>public void run(){        <br>    System.out.println(Thread.currentThread().getName());<br>  }<br>}<br> public class Test{		<br>       public static void main(String... args){	<br>           A a = new A();<br>	       Thread t = new Thread(a);<br>	       t.setName(''good'');<br>	       t.start();<br>     }<br> }", ["good" ,"null" ,"Compilation fails with an error" ,"Compilation succeed but Runtime Exception"] , "good"),

new Question("What can directly access and change the value of the variable qusNo?<br>package com.mypackage;<br><br>public class Test{<br>    private int qusNo = 100;<br>}<br>" , ["Only the Test class.","Any class","Any class in com.mypackage package.","Any class that extends Test.Any class that extends Test."] ,"Only the Test class.")
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