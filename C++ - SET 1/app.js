
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

	new Question ("What is the output of this program?<br>Void  main()<br>{ int  a; a = 015 +0x71 +5; <br>cout &lt;&lt; a; <br> getch(); } " , ["131" ,"20" , "91" ,"Compile Time Error"] , "131"),
	new Question ("What is the output of this program?<br>Void  main()		<br>{<br>int  a=2;<br>a=a+++++a;<br>cout&lt;&lt;a;<br>getch();<br>}" , ["5" ,"6" , "7" ,"L-value Error"] , "7"),
	new Question ("Can destructors be virtual in C++?", ["Yes" ,"May Be" , "No" ,"Depends on Version"] , "Yes"),
	new Question ("What is the output of this program?<br>int main()<br>{<br>int a = 6%(-5);<br>cout&lt;&lt;a;<br>return 0;<br>}",["0" ,"1" , "-1" ,"Blank Screen"],"1"),
    new Question ("What is the output of this program?<br>int main()<br>{<br>cout&lt;&lt;CGC;<br>system(“test”);<br>return 0;}", ["CGC" ,"Infinite loop of CGC" , "CGC test" ,"Error"] , "Infinite loop of CGC"),
    new Question ("What does derived class does not inherit from the base class?", ["constructor and destructor " ,"friends" , "operator = () members" ,"all of the mentioned "] , "all of the mentioned "),
    new Question ("What does the following statement mean?<br>int (*fp)(char*)", ["pointer to a pointer" ,"pointer to an array of chars " , "pointer to function taking a char* argument and returns an int" ,"function taking a char* argument and returning a pointer to int"] , "pointer to function taking a char* argument and returns an int"),
    new Question ("Which of the following is illegal ?", ["int *ip;" ,"string s, *sp = 0;" , "inti; double* dp = &i;" ,"int *pi = 0;"  ] , "inti; double* dp = &i;"),
        new Question ("What is the output of this program?<br>int main( )<br>{<br>char line[100];<br>cin.getline( line, 100, 't' );<br>cout&lt;&lt;line;<br>return 0;<br>}",["100" ,"t" , "It will print what we give" ,"None of the mentioned "] , "It will print what we give"),
        new Question ("What is the output of this program?<br>intmain()<br>{<br>int array[] = {10, 20, 30};<br>cout&lt;&lt;-2[array];<br>return0;<br>}", ["-15" ,"-30" , "compile time error" ,"garbage value"] , "-30"),
        new Question ("What is the use of Namespace? ", ["To encapsulate the data " ,"To structure a program into logical units." , "Both a and b" ,"NON Of these"] , "To structure a program into logical units."),
        new Question ("What is meaning of following declaration?<br> int ( *ptr[5])();", ["ptr is pointer to function. " ,"ptr is array of pointer to function." , "ptr is pointer to such function which return type is array." ,"ptr is pointer to array of function."] , "ptr is array of pointer to function."),
        new Question ("What is the output of this program?<br>void func(int x)<br>{<br>cout&lt;&lt; x ;<br>}<br>int main()<br>{<br>void(*n)(int);<br>n =&func;<br(*n)(2);<br>n(2);<br>return0;<br>}", ["2" ,"20" , "21" ,"22"] , "22"),
        new Question ("What is the output of this program?<br>int main ()<br>{<br>int a =100;<br>double b =3.14;<br>cout&lt;&lt; a;<br>cout&lt;&lt;endl;<br>cout&lt;&lt; b &lt;&lt;endl&lt;&lt; a * b;<br>endl(cout);<br>return 0;<br>}", ["100" ,"3.14" , "314" ,"All of the mentioned"] , "All of the mentioned"),
new Question ("Pick out the correct statement about string template?", ["it is used to replace a string." ,"It is used to replace a string with another string at runtime." , "It is used to delete a string." ,"Depends on Version"] , "It is used to replace a string with another string at runtime.")
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