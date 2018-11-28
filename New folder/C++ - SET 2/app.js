
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
var questions =[

	new Question ("Which of the following are member dereferencing operators in CPP? <br>i. *	  ii. ::	<br>    iii. ->*	iv. ::*	   <br>v. ->" , ["Only i,iii,iv	","b. Only i and v" ,"Only  iii and iv","		d. Only iii,iv,v"] , "Only i,iii,iv	"),
	new Question ("Which of the following is not a file opening mode ____ ." , ["a.ios::ate", "	b.ios::nocreate" ,"c.ios::noreplace","d.ios::truncate" ] , "d.ios::truncate"),
	new Question ("What is the output of this program?<br>#include&lt;iostream&gt;<br>using namespace std;<br>int main()<br>{char str[5] = ''ABC'';<br>cout&lt;&lt;str[3];<br>cout&lt;&lt;str;<br>return 0;}", ["a)	ABC ","b)	ABCD","c)	AB ","d)	None of the mentioned"] , "a)	ABC "),
	new Question ("What does the following statement mean?<br>     int (*fp)(char*)",["A.	pointer to a pointer" ,"B.	pointer to an array of chars" , "C.	pointer to function taking a char* argument and returns an int" ,"D.	function taking a char* argument and returning a pointer to int	"],"C.	pointer to function taking a char* argument and returns an int"),
    new Question ("int main(){<br>for(inti=1,j=1;i&lt;5,j<2;i++,i++)<br>cout&lt;&lt;”hello”;}	<br>", ["a) hello","b)hellohello","c)4 times hello","d) infinite hello"] , "d) infinite hello"),
    new Question ("#include&lt;iostream&gt;<br>#define sqr(x)(x*x)<br>int  main(){<br>inta,b=3;<br>a=sqr(b+2);<br>Cout&lt;&lt;sqr;<br>return 0;}	<br>", ["a)	11","b)	25","c)	Compile time error","d)	Runtime error."] , "25"),
    new Question ("What is meaning of following declaration? int(*ptr[5])(); ", ["a)	ptr is pointer to function.","b)	ptr is array of pointer to function."," c)	ptr is pointer to such function which return type is array."," d)	ptr is pointer to array of function."] , "b)	ptr is array of pointer to function."),    
    	new Question ("What is the output of the following program?<br>#include&lt;iostream&gt;<br>using namespace std;<br>void main() {<br>char *s = ''C++'';<br>	cout&lt;&lt;s&lt;&lt;'' '';<br>	s++;<br>	cout&lt;&lt;s&lt;&lt;'' '';}", ["A -    C++ C++","B - C++ ++","C - ++ ++ ","D – Compile Time Error."  ] , "B - C++ ++"),
new Question ("Choose the pure virtual function definition from the following.",["virtual void f()=0 { }","void virtual f()=0 { }","virtual void f() {} = 0;","Non Of the above"] , "Non Of the above"),
        new Question ("Which of the following provides a reuse mechanism?", ["A.Abstraction","B.Inheritance","C.Dynamic binding","D.Encapsulation"] , "B.Inheritance"),
      new Question ("What is the output of the following program?#include&lt;iostream&gt;<br>using namespace std;<br>main() {<br>int a[] = {1, 2}, *p = a;<br>cout&lt;&lt;p[1];<br>}", ["1","-2" ,"Compile error" ,"Runtime Error"] , "-2"),
        new Question ("What is the output of this program?<br>#include&lt;iostream&gt;<br>using namespace std;<br>int main()<br>{<br>int i, j;<br>j = 10;<br>i = (j++, j + 100, 999 + j);<br>cout &lt;&lt; i;<br> return 0;<br>}", ["a) 1000","b) 11","c) 1010","d) 1001"] , "c) 1010"),
        new Question ("By using which of the following the elements in the associate container can be efficiently accessed?", ["a) Key","b) Position","c) Both Key &amp; Position","d) None of the mentioned"] , "a) Key"),
        new Question ("Predict the output of following C++ program<br>#include&lt;iostream&gt;<br>using namespace std;  <br>class Empty {};<br>int main()<br>{<br>  cout &lt;&lt; sizeof(Empty);<br>  return 0;<br>}", ["Non Zero Value " ,"0" , "Compile time error" ,"Run time error"] , "Non Zero Value Non Zero Value "),
new Question ("output: <br>class Test {<br>    int x; <br>};<br>int main()<br>{<br>  Test t;<br>  cout &lt;&lt; t.x;<br>  return 0;<br>}<br>", ["0" ,"Garbage Value" , "Compiler Error" ,"null value"] , "Compiler Error")
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