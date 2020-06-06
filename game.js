var lesson = 0; 
const numberOfLessons = 5;
var check_subPoint = 0;
var trueAnswer = 0;// Nam test
var rightBalls = 0; // count the right balls
const numOfApples = 5;




function check_result(x){
    var input = document.getElementById("input");

    if(input.value == x)
    {
        message.innerHTML = "Excellent!"; 
        message.style.color = "blue";
        trueAnswer+=1;
        if(input_1.value == "")input_1.focus();
        else if(input_2.value == "")input_2.focus();
        else if(input_3.value == "")input_3.focus();
        

        input.disabled = true;
        submit.disabled = true;
        commit();
    }
    else if(input.value == "")
    {
        message.innerHTML = "Write your answer";
        message.style.color = "red";
    }
    else
    {
        message.innerHTML = "Wrong answer";
        message.style.color = "red";
        if(check_subPoint == 0 && rightBalls != 0)subPoint();
        check_subPoint+=1;
    }
}
function next()
{ 
    if(lesson == (numberOfLessons - 1))
    { //Change to - 1 when finish
       // Display finish screen when finish
        finish_screen();

    }  //New 3 questions with blank inputs and they're unchecked.
    else
    { 
        var line = document.getElementsByClassName("line");
        var cap = document.getElementById("caption");
        var input_1 = document.getElementById("input_1");
        var input_2 = document.getElementById("input_2");
        var input_3 = document.getElementById("input_3");


        var question_1 = document.getElementById("question_1");
        var question_2 = document.getElementById("question_2");
        var question_3 = document.getElementById("question_3");


        var message_1 = document.getElementById("message_1");
        var message_2 = document.getElementById("message_2");
        var message_3 = document.getElementById("message_3");

        input_1.focus();

        input_1.value = "";
        input_2.value = "";
        input_3.value = ""; // clear inputs
        message_1.innerHTML = "";
        message_2.innerHTML = ""; // clear messages
        message_3.innerHTML = "";
        check_subPoint = 0 ;

        for(var i = 0; i < line.length; i++){
            line[i].style.opacity = "1";
        }
        cap.style.opacity = "1";

        var inputs = document.getElementsByClassName("input");
        for(i = 0;i < inputs.length; i++){inputs[i].disabled = false;} //enable inputs

        var submits = document.getElementsByClassName("submit");
        for(i = 0;i < submits.length; i++){submits[i].disabled = false;} //enable submits
 
        var next_link = document.getElementById("next_link");

        next_link.style.visibility = "hidden";


        question_1.innerHTML = question1_arr[lesson+1];
        question_2.innerHTML = question2_arr[lesson+1];
        question_3.innerHTML = question3_arr[lesson+1];
        lesson+=1;
    }
}
function commit()
{  //When u give 3 true answers, the Next button appears 
    var next_link = document.getElementById("next_link");
    var cap = document.getElementById("caption");
    var line = document.getElementsByClassName("line");
    if(trueAnswer == 3 && lesson < numberOfLessons - 1)
    { //Change to - 1 when finish
        if(check_subPoint == 0){addPoint();check_subPoint++;}
        setTimeout(function(){
            for(var i = 0; i < line.length; i++){
                line[i].style.opacity = "0";
            }
            cap.style.opacity = "0";
            setTimeout(function(){
                next();
            },1000);
        },1000);
        trueAnswer = 0;
        
    }
    if(lesson == (numberOfLessons - 1) && trueAnswer == 3)
    { // Finish all questions of lessons // Change to -1 
        next_link.style.visibility = "visible";
        next_link.innerHTML = "Finish";
        if(check_subPoint == 0){addPoint();check_subPoint++;}
        trueAnswer = 0;
    } 
}
        
function backToMenu()
{
    location.href = "../menu.html";
}
// balls movement
var ball_arr = ["ball_1", "ball_2", "ball_3", "ball_4", "ball_5"];
var pos = 0;
var point = 0;
const numberOfBalls = 5;
function addPoint()
{
    rightBalls++;
    var ele = document.getElementById(ball_arr[numberOfBalls - 1 - point]);
    var id = setInterval(frame, 5); //set higher to see balls move more slowly
    function frame()
    {
        if (pos == 360)
        { // 560 - 40*5 = progressWidth - numberOfBalls * ballWidth
            clearInterval(id);
        }else 
        {
            ele.style.left = pos + "px";
            pos++;
        }
    }
    point++;
    pos = 0;
}
function subPoint()
{
    if(rightBalls > 0)rightBalls--;
    var ele = document.getElementById(ball_arr[numberOfBalls - point]);
    var id = setInterval(frame, 5);
    function frame()
    {
        if(pos == 0)
        {
            clearInterval(id);
        }else 
        {
            ele.style.left = pos + "px";
            pos--;
        }
    }
    point--;
    pos = 360;
}
    /// finish screen
function finish_screen()
{
    var cap = document.getElementById("caption");

    var answer = document.getElementsByClassName("answer");
    for(i = 0;i < answer.length; i++){answer[i].style.display = "none";}


    var question_1 = document.getElementById("question_1");
    var question_2 = document.getElementById("question_2");
    var question_3 = document.getElementById("question_3");

    cap.innerHTML = "You've completed the game! Congratulations!" ;
    cap.style = "font-size: 30px";

    question_1.innerHTML = "Your score: "+rightBalls;
    question_1.style = " font-size: 40px; text-align: center; line-height: 50px; width: 960px";

    if(rightBalls == 5)question_1.innerHTML +="<br>Perfect!";
    else question_1.innerHTML +="<br>Try better next time!";

    question_2.style = " font-size: 40px; text-align: center; width: 960px;"; 
    question_2.innerHTML = "<input type='submit' value='Restart' onclick= 'startButton()';>";// Click button to restart
    question_3.style = " font-size: 40px; text-align: center; width: 960px;";
    question_3.innerHTML = "<input type='submit' value='Back to menu' onclick = 'backToMenu()'>";//Click to go back to menu

    var next_link = document.getElementById("next_link");
    next_link.innerHTML = ""; // Next button disappears 
    next_link.style.display = "none";

}   
function restart()
{
    var apples = document.getElementsByClassName("plot");
    for(let i = 0;i < numOfApples; i++){
        apples[i].style = "background-image: url('assets/apple.png');";
    }   //reset the variables;
    lesson = 0; 
    check_subPoint = 0;
    trueAnswer = 0;
    rightBalls = 0;

    var cap = document.getElementById("caption");
   // cap.innerHTML = "Type the number which has" ;
    var answer = document.getElementsByClassName("answer");
    for(i = 0;i < answer.length; i++){answer[i].style.display = "block";}

   

    var next_link = document.getElementById("next_link");         
    next_link.style.visibility = "hidden";
    


    var img = document.getElementById("startButton");
    img.hidden = true;

}
function startButton(){
    var img = document.getElementById("startButton");

    var answer = document.getElementsByClassName("answer");
    for(i = 0;i < answer.length; i++){answer[i].style.display = "none";}


    var question_1 = document.getElementById("question_1");
    var question_2 = document.getElementById("question_2");
    var question_3 = document.getElementById("question_3");
    question_1.hidden = true;
    question_2.hidden = true;
    question_3.hidden = true;
    img.hidden = false;

    while(point > 0)subPoint();// reset the balls and points

}
function playAudio(play) {
    document.getElementById(play).play();
}

//// Write test cases
