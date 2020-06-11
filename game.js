var lesson = 0; 

const numOfApples = [5, 10, 16, 20, 23, 7];
const numOfLesson = numOfApples.length;
const maxApples = 30;

function check_result(x){
    var input_value = document.getElementById("input").value;

    
    var answer = document.getElementById("answer");
    var cap = document.getElementsByClassName("caption");
    var wrongCross = document.getElementById("wrongCross");
    var messsage = document.getElementById("chucMung");
    var next = document.getElementById("next");
    if(input_value == x){
        playAudio("right");
        setTimeout(function(){
             
            alertBox.style.visibility = "visible";
            cap[0].style = "opacity : 0;";
            answer.style = "opacity : 0;";
        },500)
        if(lesson == numOfLesson - 1){
            messsage.innerHTML = "Bạn đã hoàn thành trò chơi! Chúc mừng";
            next.innerHTML = "Chơi lại";
            next.onclick = function(){
                location.reload();
            }
            
        }
        else lesson++;
    }
    if(input_value != x){
        playAudio("wrong");
        wrongCross.style = "background-size : 200px;"
        wrongCross.style.visibility = "visible";
        setTimeout(function(){
            wrongCross.style.visibility = "visible";
        },500)
        setTimeout(function(){
            wrongCross.style.visibility = "hidden";
            wrongCross.style = "background-size : 0px;"

        },1500)

    }
   
 
}
function next()
{ 
        var input = document.getElementById("input");
        var answer = document.getElementById("answer");
        var cap = document.getElementsByClassName("caption");
        var alertBox = document.getElementById("alertBox");
        var messsage = document.getElementById("chucMung");
        var next = document.getElementById("next");



        setTimeout(function(){
            alertBox.style.visibility = "hidden";
            
            
            cap[0].style = "opacity : 1;";
            answer.style = "opacity : 1;";
        },500)
        setTimeout(function(){
            input.value = "";
            var apples = document.getElementsByClassName("plot");
            for(var i = 0;i < numOfApples[lesson]; i++){
            apples[i].style = "background-image: url('assets/apple.png');";
            }
            for(var i = numOfApples[lesson]; i < maxApples;i++){
                apples[i].style = "background-image: none;";
            }
        },500) 
}


function restart()
{
    lesson = 0; 
    playAudio("backgroundMusic");
    var apples = document.getElementsByClassName("plot");
    var contentncap = document.getElementById("contentncap");
    var answer = document.getElementById("answer");
    var cap = document.getElementsByClassName("caption");
    var alertBox = document.getElementById("alertBox");

    for(let i = 0;i < numOfApples[lesson]; i++){
        apples[i].style = "background-image: url('assets/apple.png');";
    }  
    
    
   
    alertBox.style.visibility = "hidden";
            cap[0].style = "opacity : 1;";
            answer.style = "opacity : 1;";
    contentncap.style.visibility = "visible";
 
    


    var img = document.getElementById("startButton");
    img.hidden = true;
    console.log(lesson);

}
function startButton(){
    var img = document.getElementById("startButton");
    var contentncap = document.getElementById("contentncap");
    var backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.loop = true;
    img.hidden = false;
    contentncap.style.visibility = "hidden";

}
function playAudio(play) {
    document.getElementById(play).play();
}
function pauseAudio(pause){
    document.getElementById(pause).pause();
}


