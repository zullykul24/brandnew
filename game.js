
var lesson = 0; 
const numOfLesson = obj.numOfLesson;
const numOfFruits = [];
const maxFruits = obj.maxFruits;//maxFruits
const typeOfFruit = obj.typeOfFruit;
const imageOfFruit = obj.imageOfFruit;
const fruitInEnglish = obj.fruitInEnglish;
var numOfHint = Math.round(numOfLesson / 2);
var isHint = false;
var backgroundMusicOn = true;
var soundEffectsOn = true;



function checkResult(x){
var inputValue = document.getElementById("input").value; 
var progress = document.getElementById("progress");
var optionBox = document.getElementById("optionBox");

var answer = document.getElementById("answer");
var caption = document.getElementById("caption");
var wrongCross = document.getElementById("wrongCross");
var messsage = document.getElementById("message");
var next = document.getElementById("next");


var mainBox = document.getElementById("mainbox");
var box = document.getElementById("box");
var nameOfPicture = document.getElementById("nameOfPicture");  
var alertBox = document.getElementById("alertBox");  

var fruits = document.getElementsByClassName("plot");//fruits
var completedSound = document.getElementById("completed");
var celebGif = document.getElementById("celeb");


    
    if(inputValue == x && lesson == numOfLesson - 1){
        if(soundEffectsOn == true){playAudio("right");}
        setTimeout(function(){  
            nameOfPicture.style.visibility = "visible";
            if(x < 10)nameOfPicture.innerHTML = x + " quả";
            else if(x%10 == 0)nameOfPicture.innerHTML = x/10 + " chục quả";
            else nameOfPicture.innerHTML = (x - x%10)/10 + " chục và " + x%10 + " quả"; 
           
        },500)
        setTimeout(function(){
            headbox.style.filter = "blur(5px)";
            box.style.filter = "blur(5px)";
            caption.style.filter = "blur(5px)";
            answer.style.filter = "blur(5px)";
            optionBox.style.filter = "blur(5px)";
            nameOfPicture.style.filter = "blur(5px)";
            alertBox.style.visibility = "visible";
            messsage.innerHTML = "Bạn đã hoàn thành trò chơi! Chúc mừng";
            messsage.style = "font-size:20px; line-height:20px; margin-top:15px;";
            next.innerHTML = "Chơi lại";
            next.style.visibility = "visible";
            celebGif.style.visibility = "visible";
            
            if(soundEffectsOn == true){
                playAudio("completed");
                completedSound.volume = 1;
            }
            else{
                completedSound.volume = 0;
            }


            next.onclick = function(){
                location.reload();
            }
        },1000)
        
    }
    else if(inputValue == x && lesson < numOfLesson - 1){
        lesson = lesson + 1;
        document.getElementById("hintIcon").addEventListener("click", hint);
        
        if(soundEffectsOn == true){playAudio("right");}
        setTimeout(function(){  
            nameOfPicture.style.visibility = "visible";
            if(x < 10)nameOfPicture.innerHTML = x + " quả";
            else if(x%10 == 0)nameOfPicture.innerHTML = x/10 + " chục quả";
            else nameOfPicture.innerHTML = (x - x%10)/10 + " chục và " + x%10 + " quả"; 
           
        },500)    
        setTimeout(function(){
            mainBox.style.filter =   "blur(5px)";
            nameOfPicture.style.visibility = "hidden";
        },1500)
        setTimeout(function(){
            mainBox.style.filter = "none";
            input.value = "";
            for(var i = 0;i < numOfFruits[lesson]; i++){
                fruits[i].style = "background-image: url('"+ imageOfFruit +"');";
            }
            for(var i= numOfFruits[lesson]; i < maxFruits;i++){
                fruits[i].style = "background-image: none;";
            }
            progress.innerHTML = "Tiến trình: " + (lesson + 1) + "/" + numOfLesson;
        },3000) 
        
    }

    if(inputValue != x){
        if(soundEffectsOn == true){playAudio("wrong");}
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
    for(var i = 0;i < numOfLesson;i++){numOfFruits[i]= Math.floor((Math.random() * maxFruits) + 1);}// generate array of random integers from 1 to 30
    lesson = 0; 
    if(backgroundMusicOn == true)playAudio("backgroundMusic");
    var optionBox = document.getElementById("optionBox");

    var answer = document.getElementById("answer");
    var caption = document.getElementById("caption");

    var alertBox = document.getElementById("alertBox");  
    
    var fruits = document.getElementsByClassName("plot");
    
    
    var bulbHint = document.getElementById("numberOfHint");
    var progress = document.getElementById("progress");

    document.getElementById("questionHowMany").innerHTML = "Có bao nhiêu quả " + typeOfFruit + " ở trong hộp?";
    document.getElementById("numberOfFruitIs").innerHTML = "Số quả " + typeOfFruit + " là:";

    document.getElementById("speaker").addEventListener("click", speakerFunction);
    //document.getElementById("confirm").addEventListener("click", checkResult);
    
    document.getElementById("refreshIcon").addEventListener("click",clearInput);
    document.getElementById("hintIcon").addEventListener("click", hint);
    document.getElementById("nextIcon").addEventListener("click", nextQuestion);
   
    progress.style.visibility = "visible";
    progress.innerHTML = "Tiến trình: " + (lesson + 1) + "/" + numOfLesson;
    bulbHint.style.visibility = "visible";
    numberOfHintLeft.innerHTML = numOfHint;
    optionBox.style.visibility = "visible";

    for(var i = 0;i < numOfFruits[lesson]; i++){
        fruits[i].style = "background-image: url('"+ imageOfFruit +"');";
    }  
    alertBox.style.visibility = "hidden";
    caption.style = "opacity : 1;";
    answer.style = "opacity : 1;";
    contentncap.style.visibility = "visible";
    var startButton = document.getElementById("startButton");
    startButton.hidden = true;
}
function startWithButton(){
    var startButton = document.getElementById("startButton");
    var contentncap = document.getElementById("contentncap");
    var enableBackgroundMusic = document.getElementById("enableBackgroundMusic");
    var enableSoundEffects = document.getElementById("enableSoundEffects");
    var backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.loop = true;
    startButton.hidden = false;
    contentncap.style.visibility = "hidden";
    enableBackgroundMusic.addEventListener("click", enableBackgroundMusicFunction);
    enableSoundEffects.addEventListener("click", enableSoundEffectsFunction);


}
function enableBackgroundMusicFunction(){
   
    var enableBackgroundMusic = document.getElementById("enableBackgroundMusic");
    var backgroundMusic = document.getElementById("backgroundMusic");
    if(backgroundMusicOn == true){
        backgroundMusic.pause();
        backgroundMusicOn = false;
        enableBackgroundMusic.style = "background-color: bisque;"
        enableBackgroundMusic.innerHTML = "Nhạc nền: TẮT"
    }
    else{
        backgroundMusic.play();
        backgroundMusicOn = true;
        enableBackgroundMusic.style = "background-color: aquamarine;"
        enableBackgroundMusic.innerHTML = "Nhạc nền: BẬT"
    }
}
function enableSoundEffectsFunction(){
    var enableSoundEffects = document.getElementById("enableSoundEffects");
    if(soundEffectsOn == true){
        soundEffectsOn = false;
        enableSoundEffects.style = "background-color: bisque;"
        enableSoundEffects.innerHTML = "Âm thanh: TẮT"
    }
    else {
        soundEffectsOn = true;
        enableSoundEffects.style = "background-color: aquamarine;"
        enableSoundEffects.innerHTML = "Âm thanh: BẬT"
    }
}
function speakerFunction(){
    var howManyFruit = document.getElementById("howMany"+ fruitInEnglish);
    if(soundEffectsOn == true){
        playAudio("howMany"+ fruitInEnglish);
        howManyFruit.volume = 1;
    }
    else{
        howManyFruit.volume = 0;
    }
}
function playAudio(play) {
    document.getElementById(play).play();
}
function clearInput(){
    var input = document.getElementById("input");
    input.value = "";
}
function click(){
    //Nothing happens here
}
function hint(){
   
    var answer = document.getElementById("answer");
    var caption = document.getElementById("caption");
   
    var messsage = document.getElementById("message");
    var next = document.getElementById("next");
    var optionBox = document.getElementById("optionBox");
    var headbox = document.getElementById("headbox");
    var numberOfHintLeft = document.getElementById("numberOfHintLeft");
    var box = document.getElementById("box");
    var hintBox = document.getElementById("hintBox");
    var enableBackgroundMusic = document.getElementById("enableBackgroundMusic");
    var enableSoundEffects = document.getElementById("enableSoundEffects");
    var speaker = document.getElementById("speaker");
    var confirm = document.getElementById("confirm");
    var input = document.getElementById("input");
    var refreshIcon = document.getElementById("refreshIcon");
    var hintIcon = document.getElementById("hintIcon");
    var nextIcon = document.getElementById("nextIcon");
    var xCross = document.getElementById("xCross");
    //xCross.style.visibility = "visible";
   
    headbox.style.filter = "blur(5px)";
    box.style.filter = "blur(5px)";
    optionBox.style.filter = "blur(5px)";
    


    caption.style.filter = "blur(5px)";
    answer.style.filter = "blur(5px)";
    alertBox.style.visibility = "visible";
    next.style.visibility = "hidden";
    hintBox.style.visibility = "visible";
    hintBox.innerHTML = "Được rồi";
    speaker.removeEventListener("click",speakerFunction);
    refreshIcon.removeEventListener("click",clearInput);
    hintIcon.removeEventListener("click",hint);
    nextIcon.removeEventListener("click",nextQuestion);
    enableBackgroundMusic.removeEventListener("click", enableBackgroundMusicFunction);
    enableSoundEffects.removeEventListener("click", enableSoundEffectsFunction);
    
    
    confirm.style.visibility = "hidden";
    input.disabled = true;
    
    if(numOfHint > 0){
        messsage.innerHTML = "Mỗi hàng có 10 quả "+ typeOfFruit +", số quả "+typeOfFruit+" ở đây là: "+ numOfFruits[lesson];
        messsage.style = "font-size:20px; line-height:20px; margin-top:15px";
        numOfHint = numOfHint - 1;
        numberOfHintLeft.innerHTML = numOfHint;
    }
    else{
        messsage.style = "font-size:20px; line-height:20px; margin-top:15px";
        messsage.innerHTML = "Bạn đã sử dụng hết quyền trợ giúp";
    }
    
    hintBox.onclick = function(){
        headbox.style.filter = "none";
        box.style.filter = "none";
        caption.style.filter = "none";
        answer.style.filter = "none";
        alertBox.style.visibility = "hidden";
        optionBox.style.filter = "none";
        
        
        hintBox.style.visibility = "hidden";
        
        messsage.style = "margin-top:30px";
        speaker.addEventListener("click", speakerFunction);
        refreshIcon.addEventListener("click", clearInput);
        nextIcon.addEventListener("click", nextQuestion);
        hintIcon.addEventListener("click", hint);
        
        confirm.style.visibility = "visible";
        enableBackgroundMusic.addEventListener("click", enableBackgroundMusicFunction);
        enableSoundEffects.addEventListener("click", enableSoundEffectsFunction);
        input.disabled = false;

    }
   

}
function nextQuestion(){
    var answer = document.getElementById("answer");
    var caption = document.getElementById("caption");
   
    var messsage = document.getElementById("message");
    var next = document.getElementById("next");
    var optionBox = document.getElementById("optionBox");
    var headbox = document.getElementById("headbox");
    var numberOfHintLeft = document.getElementById("numberOfHintLeft");
    var box = document.getElementById("box");
    var hintBox = document.getElementById("hintBox");
    var enableBackgroundMusic = document.getElementById("enableBackgroundMusic");
    var enableSoundEffects = document.getElementById("enableSoundEffects");
    var speaker = document.getElementById("speaker");
    var confirm = document.getElementById("confirm");
    var input = document.getElementById("input");
    var refreshIcon = document.getElementById("refreshIcon");
    var hintIcon = document.getElementById("hintIcon");
    var nextIcon = document.getElementById("nextIcon");
    var denyBox = document.getElementById("denyBox");
    var progress = document.getElementById("progress");
    var fruits = document.getElementsByClassName("plot");
    var xCross = document.getElementById("xCross");
   
    headbox.style.filter = "blur(5px)";
    box.style.filter = "blur(5px)";
    optionBox.style.filter = "blur(5px)";
    denyBox.style.visibility = "visible";
    //xCross.style.visibility = "visible";
    hintBox.innerHTML = "Đồng ý";
    hintBox.style = "left: 70px; width: 120px; top:120px;"
    caption.style.filter = "blur(5px)";
    answer.style.filter = "blur(5px)";
    alertBox.style.visibility = "visible";
    next.style.visibility = "hidden";
    hintBox.style.visibility = "visible";
    hintBox.innerHTML = "Đồng ý";
    confirm.style.visibility = "hidden";
    speaker.removeEventListener("click",speakerFunction);
    refreshIcon.removeEventListener("click",clearInput);
    hintIcon.removeEventListener("click",hint);
    nextIcon.removeEventListener("click",nextQuestion);
    enableBackgroundMusic.removeEventListener("click", enableBackgroundMusicFunction);
    enableSoundEffects.removeEventListener("click", enableSoundEffectsFunction);

    if(numOfHint >= 2){
        messsage.innerHTML = "Bỏ qua câu hỏi cần 2 sự trợ giúp, đồng ý chứ?"
        messsage.style = "font-size:20px; line-height:20px; margin-top:15px";
       // numOfHint = numOfHint - 2;
       // numberOfHintLeft.innerHTML = numOfHint;
        hintBox.onclick = function(){
            hintBox.style = "left: 140px; width: 120px; top:120px;"
            headbox.style.filter = "none";
            box.style.filter = "none";
            caption.style.filter = "none";
            answer.style.filter = "none";
            alertBox.style.visibility = "hidden";
            optionBox.style.filter = "none";

            numOfHint = numOfHint - 2;
            numberOfHintLeft.innerHTML = numOfHint;
            denyBox.style.visibility = "hidden";
            //xCross.style.visibility = "hidden";
            confirm.style.visibility = "visible";
            
            
            hintBox.style.visibility = "hidden";
            
            messsage.style = "margin-top:30px";
            speaker.addEventListener("click", speakerFunction);
            refreshIcon.addEventListener("click",clearInput);
            hintIcon.addEventListener("click", hint);
            nextIcon.addEventListener("click", nextQuestion);
            enableBackgroundMusic.addEventListener("click", enableBackgroundMusicFunction);
            enableSoundEffects.addEventListener("click", enableSoundEffectsFunction);
            
            
            input.disabled = false;
            if(lesson < numOfLesson - 1){
                setTimeout(function(){
                    lesson = lesson + 1;
                    
                    input.value = "";
                    for(var i = 0;i < numOfFruits[lesson]; i++){
                        fruits[i].style = "background-image: url('"+ imageOfFruit +"');";
                    }
                    for(var i= numOfFruits[lesson]; i < maxFruits;i++){
                        fruits[i].style = "background-image: none;";
                    }
                    progress.innerHTML = "Tiến trình: " + (lesson + 1) + "/" + numOfLesson;
                },100) 
            }
            else {
                setTimeout(function(){
                    headbox.style.filter = "blur(5px)";
                    box.style.filter = "blur(5px)";
                    caption.style.filter = "blur(5px)";
                    answer.style.filter = "blur(5px)";
                    optionBox.style.filter = "blur(5px)";
                    nameOfPicture.style.filter = "blur(5px)";
                    alertBox.style.visibility = "visible";
                    messsage.innerHTML = "Bạn đã hoàn thành trò chơi! Chúc mừng";
                    messsage.style = "font-size:20px; line-height:20px; margin-top:15px;";
                    next.innerHTML = "Chơi lại";
                    next.style.visibility = "visible";
                    next.onclick = function(){
                        location.reload();
                    }
                },100)
            }

        }
        denyBox.onclick = function(){
            hintBox.style = "left: 140px; width: 120px; top:120px;"
            headbox.style.filter = "none";
            box.style.filter = "none";
            caption.style.filter = "none";
            answer.style.filter = "none";
            alertBox.style.visibility = "hidden";
            optionBox.style.filter = "none";
            denyBox.style.visibility = "hidden";
            //next.style.visibility = "visible";
           // xCross.style.visibility = "hidden";
            hintBox.style.visibility = "hidden";
            confirm.style.visibility = "visible";
            
            messsage.style = "margin-top:30px";
            speaker.addEventListener("click", speakerFunction);
            refreshIcon.addEventListener("click",clearInput);
            hintIcon.addEventListener("click", hint);
            nextIcon.addEventListener("click", nextQuestion);
            enableBackgroundMusic.addEventListener("click", enableBackgroundMusicFunction);
            enableSoundEffects.addEventListener("click", enableSoundEffectsFunction);
            
            input.disabled = false;
        }
    }
    else{
        messsage.style = "font-size:20px; line-height:20px; margin-top:15px";
        messsage.innerHTML = "Bạn không còn đủ sự trợ giúp";
        denyBox.style.visibility = "hidden";
     //xCross.style.visibility = "hidden";
        hintBox.innerHTML = "Được rồi";
        hintBox.style = "left: 140px; width: 120px; top:120px; visibility:visible;"
        hintBox.onclick = function(){
            
            headbox.style.filter = "none";
            box.style.filter = "none";
            caption.style.filter = "none";
            answer.style.filter = "none";
            alertBox.style.visibility = "hidden";
            optionBox.style.filter = "none";
            //next.style.visibility = "visible";
            hintBox.style.visibility = "hidden";
            confirm.style.visibility = "visible";
            
            messsage.style = "margin-top:30px";
            speaker.addEventListener("click", speakerFunction);
            refreshIcon.addEventListener("click",clearInput);
            hintIcon.addEventListener("click", hint);
            nextIcon.addEventListener("click", nextQuestion);
            enableBackgroundMusic.addEventListener("click", enableBackgroundMusicFunction);
            enableSoundEffects.addEventListener("click", enableSoundEffectsFunction);
            
            input.disabled = false;
            
        }
    }
    
}
