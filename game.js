
var lesson = 0; 
const numOfLesson = 3;
const numOfApples = [];
const maxApples = 30;
var numOfHint = 3;
var isHint = false;
var backgroundMusic = false;
var soundEffects = true;
var optionBox = document.getElementById("optionBox");
function check_result(x){
    var input_value = document.getElementById("input").value; 
    var answer = document.getElementById("answer");
    var cap = document.getElementsByClassName("caption");
    var wrongCross = document.getElementById("wrongCross");
    var messsage = document.getElementById("chucMung");
    var next = document.getElementById("next");
    var optionBox = document.getElementById("optionBox");
    var headBox = document.getElementById("headbox");
    var mainBox = document.getElementById("mainbox");
    var box = document.getElementById("box");
    var nameOfPicture = document.getElementById("nameOfPicture");  
    var alertBox = document.getElementById("alertBox");  
    var progress = document.getElementById("progress");
    if(input_value == x && lesson == numOfLesson - 1){
        if(soundEffects == true){playAudio("right");}
        setTimeout(function(){  
            nameOfPicture.style.visibility = "visible";
            if(x < 10)nameOfPicture.innerHTML = x + " quả";
            else nameOfPicture.innerHTML = (x - x%10)/10 + " chục và " + x%10 + " quả"; 
           
        },500)
        setTimeout(function(){
            headbox.style.filter = "blur(5px)";
        box.style.filter = "blur(5px)";
    


        cap[0].style.filter = "blur(5px)";
        answer.style.filter = "blur(5px)";
        optionBox.style.filter = "blur(5px)";
        nameOfPicture.style.filter = "blur(5px)";
        alertBox.style.visibility = "visible";
            messsage.innerHTML = "Bạn đã hoàn thành trò chơi! Chúc mừng";
            messsage.style = "font-size:20px; line-height:20px; margin-top:15px";
            next.innerHTML = "Chơi lại";
            next.onclick = function(){
                location.reload();
            }
        },1000)
        
    }
    else if(input_value == x && lesson < numOfLesson - 1){
        lesson = lesson + 1;
        
        if(soundEffects == true){playAudio("right");}
        setTimeout(function(){  
            nameOfPicture.style.visibility = "visible";
            if(x < 10)nameOfPicture.innerHTML = x + " quả";
            else nameOfPicture.innerHTML = (x - x%10)/10 + " chục và " + x%10 + " quả"; 
           
        },500)
        
        
        setTimeout(function(){
            mainBox.style.filter =   "blur(5px)";
            nameOfPicture.style.visibility = "hidden";
        },1500)
        setTimeout(function(){
            mainBox.style.filter =   "none";
            input.value = "";
            var apples = document.getElementsByClassName("plot");
            for(var i = 0;i < numOfApples[lesson]; i++){
            apples[i].style = "background-image: url('assets/apple.png');";
            }
            for(var i= numOfApples[lesson]; i < maxApples;i++){
                apples[i].style = "background-image: none;";
            }
            progress.innerHTML = "Tiến trình: " + (lesson + 1) + "/" + numOfLesson;
        },3000) 
        
    }
    
        

        
      
    
    if(input_value != x){
        if(soundEffects == true){playAudio("wrong");}
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

function restart()
{ 
    for(var i = 0;i < numOfLesson;i++){numOfApples[i]= Math.floor((Math.random() * 30) + 1);}// generate array of random integers from 1 to 30
    lesson = 0; 
    if(backgroundMusic == true)playAudio("backgroundMusic");
    var apples = document.getElementsByClassName("plot");
    var contentncap = document.getElementById("contentncap");
    var answer = document.getElementById("answer");
    var cap = document.getElementsByClassName("caption");
    var alertBox = document.getElementById("alertBox");
    var numberOfHintLeft = document.getElementById("numberOfHintLeft");
    var optionBox = document.getElementById("optionBox");
    var bulbHint = document.getElementById("numberOfHint");
    var progress = document.getElementById("progress");
    progress.style.visibility = "visible";
    progress.innerHTML = "Tiến trình: " + (lesson + 1) + "/" + numOfLesson;
    bulbHint.style.visibility = "visible";
    numberOfHintLeft.innerHTML = numOfHint;
    optionBox.style.visibility = "visible";

    for(var i = 0;i < numOfApples[lesson]; i++){
        apples[i].style = "background-image: url('assets/apple.png');";
    }  
    alertBox.style.visibility = "hidden";
    cap[0].style = "opacity : 1;";
    answer.style = "opacity : 1;";
    contentncap.style.visibility = "visible";
    var img = document.getElementById("startButton");
    img.hidden = true;
}
function startButton(){
    var img = document.getElementById("startButton");
    var contentncap = document.getElementById("contentncap");
    var backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.loop = true;
    img.hidden = false;
    contentncap.style.visibility = "hidden";

}
function enableBackgroundMusic(){
    var music = document.getElementById("backgroundMusic");
    var enableBackgroundMusic = document.getElementById("enableBackgroundMusic");
    if(backgroundMusic == true){
        music.pause();
        backgroundMusic = false;
        enableBackgroundMusic.style = "background-color: bisque;"
        enableBackgroundMusic.innerHTML = "Nhạc nền: TẮT"
    }
    else{
        music.play();
        backgroundMusic = true;
        enableBackgroundMusic.style = "background-color: aquamarine;"
        enableBackgroundMusic.innerHTML = "Nhạc nền: BẬT"
    }
}
function enableSoundEffects(){
    var enableSoundEffects = document.getElementById("enableSoundEffects");
    if(soundEffects == true){
        soundEffects = false;
        enableSoundEffects.style = "background-color: bisque;"
        enableSoundEffects.innerHTML = "Hiệu ứng: TẮT"
    }
    else {
        soundEffects = true;
        enableSoundEffects.style = "background-color: aquamarine;"
        enableSoundEffects.innerHTML = "Hiệu ứng: BẬT"
    }
}
function loa(){
    var coBaoNhieu = document.getElementById("coBaoNhieu");
    if(soundEffects == true){
        playAudio("coBaoNhieu");
        coBaoNhieu.volume = 1;
    }
    else{
        coBaoNhieu.volume = 0;
    }
}
function playAudio(play) {
    document.getElementById(play).play();
}
function clearInput(){
    var input = document.getElementById("input");
    input.value = "";
}
function hint(){
    var input_value = document.getElementById("input").value; 
    var answer = document.getElementById("answer");
    var cap = document.getElementsByClassName("caption");
    var wrongCross = document.getElementById("wrongCross");
    var messsage = document.getElementById("chucMung");
    var next = document.getElementById("next");
    var optionBox = document.getElementById("optionBox");
    var headbox = document.getElementById("headbox");
    var numberOfHintLeft = document.getElementById("numberOfHintLeft");
    var box = document.getElementById("box");
    var hintBox = document.getElementById("hintBox");
    headbox.style.filter = "blur(5px)";
    box.style.filter = "blur(5px)";
    


    cap[0].style.filter = "blur(5px)";
    answer.style.filter = "blur(5px)";
    alertBox.style.visibility = "visible";
    next.style.visibility = "hidden";
    hintBox.style.visibility = "visible";
    hintBox.innerHTML = "Được rồi";
    
    if(numOfHint > 0){
        messsage.innerHTML = "Mỗi hàng có 10 quả táo, số quả táo ở đây là: "+ numOfApples[lesson];
        messsage.style = "font-size:20px; line-height:20px; margin-top:15px";
        numOfHint = numOfHint - 1;
        numberOfHintLeft.innerHTML = numOfHint;
    }
    else{
        messsage.innerHTML = "Bạn đã sử dụng hết quyền trợ giúp";
    }
    
    hintBox.onclick = function(){
    headbox.style.filter = "none";
    box.style.filter = "none";
    cap[0].style.filter = "none";
    answer.style.filter = "none";
    alertBox.style.visibility = "hidden";
    messsage.innerHTML = "Bạn trả lời đúng rồi";
    //next.style.visibility = "visible";
    hintBox.style.visibility = "hidden";
    
    messsage.style = "margin-top:30px";
    }
   

}
function blockClick(){
    var loa = document.getElementById("loa");
    var enableBackgroundMusic = document.getElementById("enableBackgroundMusic");
    var enableSoundEffects = document.getElementById("enableSoundEffects");
    loa.onclick = click();
    enableBackgroundMusic.onclick = click();
    enableSoundEffects.onclick = click();
}
function enableClick(){
    var loa = document.getElementById("loa");
    var enableBackgroundMusic = document.getElementById("enableBackgroundMusic");
    var enableSoundEffects = document.getElementById("enableSoundEffects");
    loa.onclick = loa();
    enableBackgroundMusic.onclick = enableBackgroundMusic();
    enableSoundEffects.onclick = enableSoundEffects();

}

