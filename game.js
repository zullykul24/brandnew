var lesson = 0; 




const numOfApples = [5, 10, 16, 20, 23, 7];
const maxApples = 30;




function check_result(x){
    var input = document.getElementById("input").value;
    if(input == x){next();lesson++;};
    console.log(input);
    console.log(lesson);
 
}
function next()
{ 
        var input = document.getElementById("input");
        setTimeout(function(){
        input.value = "";
        
        var apples = document.getElementsByClassName("plot");
        for(var i = 0;i < numOfApples[lesson]; i++){
        apples[i].style = "background-image: url('assets/apple.png');";
        }
        for(var i = numOfApples[lesson]; i < maxApples;i++){
            apples[i].style = "background-image: none;";
        }
     },1000) //reset
    
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
    for(let i = 0;i < numOfApples[lesson]; i++){
        apples[i].style = "background-image: url('assets/apple.png');";
    }   //reset the variables;
    lesson = 0; 
   
    var cap = document.getElementById("caption");
 
    


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

    while(point > 0)subPoint();

}
function playAudio(play) {
    document.getElementById(play).play();
}


