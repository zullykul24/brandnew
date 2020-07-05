
const obj = data1; /// change data here


let lesson = 0; 
const numOfLesson = obj.numOfLesson;


const numOfFruits = [];
const maxFruits = obj.maxFruits;
const typeOfFruit = obj.typeOfFruit;
const imageOfFruit = obj.imageOfFruit;

let numOfHint = Math.round(numOfLesson / 2)  ;
let isHint = false;
let backgroundMusicOn = true;
let soundEffectsOn = true;
let newHint = true;

const caption = document.getElementById("caption");
const progress =  document.getElementById("progress");
const optionBox = document.getElementById("optionBox");
const answer = document.getElementById("answer");
const wrongCross = document.getElementById("wrongCross");
const message = document.getElementById("message");
const next = document.getElementById("next");
const mainBox = document.getElementById("mainbox");
const box = document.getElementById("box");
const nameOfPicture = document.getElementById("nameOfPicture");  
const alertBox = document.getElementById("alertBox"); 
const fruits = document.getElementsByClassName("plot");//fruits
const completedSound = document.getElementById("completed");
const celebGif = document.getElementById("celeb");
const vTrue = document.getElementById("vTrue");
const startButton = document.getElementById("startButton");
const bulbHint = document.getElementById("numberOfHint");
const contentncap = document.getElementById("contentncap");
const enableBackgroundMusic = document.getElementById("enableBackgroundMusic");
const enableSoundEffects = document.getElementById("enableSoundEffects");
const backgroundMusic = document.getElementById("backgroundMusic");
const input = document.getElementById("input");
const headbox = document.getElementById("headbox");
const numberOfHintLeft = document.getElementById("numberOfHintLeft");
const hintBox = document.getElementById("hintBox");
const confirmButton = document.getElementById("confirm");
const refreshIcon = document.getElementById("refreshIcon");
const hintIcon = document.getElementById("hintIcon");
const nextIcon = document.getElementById("nextIcon");
const xCross = document.getElementById("xCross");



function checkResult(x){
let inputValue = document.getElementById("input").value; 
    if(inputValue == x && lesson == numOfLesson - 1){
        if(soundEffectsOn == true){playAudio("right");}
        setTimeout(function(){  
            nameOfPicture.style.visibility = "visible";
            vTrue.style.visibility = "visible";
            vTrue.style.backgroundSize = "150px";
            setTimeout(function(){
                vTrue.style.visibility = "visible";
            },500)
            setTimeout(function(){
                vTrue.style.visibility = "hidden";
                vTrue.style = "background-size : 0px;"
    
            },1000)  
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
            message.innerHTML = "Bạn đã hoàn thành trò chơi!<br> Chúc mừng";
            message.style = "font-size:20px; line-height:30px; top:25px;";
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
        },1500)
        
    }
    else if(inputValue == x && lesson < numOfLesson - 1){
        lesson = lesson + 1;
        newHint = true;
        document.getElementById("hintIcon").addEventListener("click", hint);
        
        if(soundEffectsOn == true){playAudio("right");}
        setTimeout(function(){  
            nameOfPicture.style.visibility = "visible";
            vTrue.style.visibility = "visible";
            
            if(x < 10)nameOfPicture.innerHTML = x + " quả";
            else if(x%10 == 0)nameOfPicture.innerHTML = x/10 + " chục quả";
            else nameOfPicture.innerHTML = (x - x%10)/10 + " chục và " + x%10 + " quả"; 
           
        },500)    
        setTimeout(function(){
            vTrue.style.backgroundSize = "150px";
            vTrue.style.visibility = "visible";
        },500)
        setTimeout(function(){
            vTrue.style.visibility = "hidden";
            vTrue.style = "background-size : 1px;"

        },2000)  
        setTimeout(function(){
            mainBox.style.filter =   "blur(5px)";
            nameOfPicture.style.visibility = "hidden";
        },2100)
        setTimeout(function(){
            mainBox.style.filter = "none";
            input.value = "";
            for(let i = 0;i < numOfFruits[lesson]; i++){
                fruits[i].style = "background-image: url('"+ imageOfFruit +"');";
            }
            for(let i= numOfFruits[lesson]; i < maxFruits;i++){
                fruits[i].style = "background-image: none;";
            }
            progress.innerHTML = "Tiến trình: " + (lesson + 1) + "/" + numOfLesson;
        },2500) 
        
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
    for(let i = 0;i < numOfLesson;i++){numOfFruits[i]= Math.floor((Math.random() * maxFruits) + 1);}// generate array of random integers from 1 to 30
    lesson = 0; 
    if(backgroundMusicOn == true)playAudio("backgroundMusic");
    document.getElementById("questionHowMany").innerHTML = "Có bao nhiêu quả " + typeOfFruit + " ở trong hộp?";
    document.getElementById("numberOfFruitIs").innerHTML = "Số quả " + typeOfFruit + " là:";
    document.getElementById("refreshIcon").addEventListener("click",clearInput);
    document.getElementById("hintIcon").addEventListener("click", hint);
    document.getElementById("nextIcon").addEventListener("click", nextQuestion);
    progress.style.visibility = "visible";
    progress.innerHTML = "Tiến trình: " + (lesson + 1) + "/" + numOfLesson;
    bulbHint.style.visibility = "visible";
    numberOfHintLeft.innerHTML = numOfHint;
    optionBox.style.visibility = "visible";

    for(let i = 0;i < numOfFruits[lesson]; i++){
        fruits[i].style = "background-image: url('"+ imageOfFruit +"');";
    }  
    alertBox.style.visibility = "hidden";
    caption.style = "opacity : 1;";
    answer.style = "opacity : 1;";
    contentncap.style.visibility = "visible";
    startButton.hidden = true;
}
function startWithButton(){
    backgroundMusic.loop = true;
    startButton.hidden = false;
    contentncap.style.visibility = "hidden";
    enableBackgroundMusic.addEventListener("click", enableBackgroundMusicFunction);
    enableSoundEffects.addEventListener("click", enableSoundEffectsFunction);
    enableBackgroundMusic.style = "background-color: aquamarine";
}
function enableBackgroundMusicFunction(){
    if(backgroundMusicOn == true){
        backgroundMusic.pause();
        backgroundMusicOn = false;
        enableBackgroundMusic.style = "background-color: bisque;"
    }
    else{
        backgroundMusic.play();
        backgroundMusicOn = true;
        enableBackgroundMusic.style = "background-color: aquamarine;"
    }
}
function enableSoundEffectsFunction(){
    if(soundEffectsOn == true){
        soundEffectsOn = false;
        enableSoundEffects.style = "background-color: bisque;"
    }
    else {
        soundEffectsOn = true;
        enableSoundEffects.style = "background-color: aquamarine;"
    }
}
function playAudio(play) {
    document.getElementById(play).play();
}
function clearInput(){
    input.value = "";
}

function hint(){
    headbox.style.filter = "blur(5px)";
    box.style.filter = "blur(5px)";
    optionBox.style.filter = "blur(5px)";
    caption.style.filter = "blur(5px)";
    answer.style.filter = "blur(5px)";
    alertBox.style.visibility = "visible";
    next.style.visibility = "hidden";
    xCross.style.visibility = "visible";
    refreshIcon.removeEventListener("click",clearInput);
    hintIcon.removeEventListener("click",hint);
    nextIcon.removeEventListener("click",nextQuestion);
    enableBackgroundMusic.removeEventListener("click", enableBackgroundMusicFunction);
    enableSoundEffects.removeEventListener("click", enableSoundEffectsFunction);
    confirmButton.style.visibility = "hidden";
    input.disabled = true;
    if(numOfHint > 0){
        message.innerHTML = "Mỗi hàng có 10 quả "+ typeOfFruit +", số quả "+typeOfFruit+" ở đây là: "+ numOfFruits[lesson];
        message.style = "font-size:20px; line-height:30px; margin-top:15px";
        if(newHint == true) {
            numOfHint = numOfHint - 1;
            newHint = false;
        }
        numberOfHintLeft.innerHTML = numOfHint;
    }
    else{
        message.style = "font-size:20px; line-height:30px; margin-top:15px";
       if(newHint == true) message.innerHTML = "Bạn đã sử dụng hết quyền trợ giúp";
        hintBox.style.visibility = "hidden";
    }
    
    xCross.onclick = function(){
        headbox.style.filter = "none";
        box.style.filter = "none";
        caption.style.filter = "none";
        answer.style.filter = "none";
        alertBox.style.visibility = "hidden";
        optionBox.style.filter = "none";
        
        
        hintBox.style.visibility = "hidden";
        xCross.style.visibility = "hidden";
        
        message.style = "margin-top:30px";
       
        refreshIcon.addEventListener("click", clearInput);
        nextIcon.addEventListener("click", nextQuestion);
        hintIcon.addEventListener("click", hint);
        
        confirmButton.style.visibility = "visible";
        enableBackgroundMusic.addEventListener("click", enableBackgroundMusicFunction);
        enableSoundEffects.addEventListener("click", enableSoundEffectsFunction);
        input.disabled = false;

    }
   

}
function nextQuestion(){
    headbox.style.filter = "blur(5px)";
    box.style.filter = "blur(5px)";
    optionBox.style.filter = "blur(5px)";
   
    xCross.style.visibility = "visible";
    hintBox.innerHTML = "Bỏ qua";
    hintBox.style = "left: 140px; width: 120px; top:120px;"
    caption.style.filter = "blur(5px)";
    answer.style.filter = "blur(5px)";
    alertBox.style.visibility = "visible";
    next.style.visibility = "hidden";
    hintBox.style.visibility = "visible";
    
    confirmButton.style.visibility = "hidden";
 
    refreshIcon.removeEventListener("click",clearInput);
    hintIcon.removeEventListener("click",hint);
    nextIcon.removeEventListener("click",nextQuestion);
    enableBackgroundMusic.removeEventListener("click", enableBackgroundMusicFunction);
    enableSoundEffects.removeEventListener("click", enableSoundEffectsFunction);

    if(numOfHint >= 2){
        message.innerHTML = "Bỏ qua câu hỏi cần 2 sự trợ giúp, có bỏ qua không?"
        message.style = "font-size:20px; line-height:30px; top:45px;";
      
        hintBox.onclick = function(){
            hintBox.style = "left: 140px; width: 120px; top:120px;"
            headbox.style.filter = "none";
            box.style.filter = "none";
            caption.style.filter = "none";
            answer.style.filter = "none";
            alertBox.style.visibility = "hidden";
            optionBox.style.filter = "none";
            xCross.style.visibility = "hidden";

            numOfHint = numOfHint - 2;
            numberOfHintLeft.innerHTML = numOfHint;
            denyBox.style.visibility = "hidden";
           
            confirmButton.style.visibility = "visible";
            
            
            hintBox.style.visibility = "hidden";
            
            message.style = "margin-top:30px";
          
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
                    for(let i = 0;i < numOfFruits[lesson]; i++){
                        fruits[i].style = "background-image: url('"+ imageOfFruit +"');";
                    }
                    for(let i= numOfFruits[lesson]; i < maxFruits;i++){
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
                    message.innerHTML = "Bạn đã hoàn thành trò chơi! Chúc mừng";
                    message.style = "font-size:20px; line-height:20px; margin-top:15px;";
                    next.innerHTML = "Chơi lại";
                    next.style.visibility = "visible";
                    next.onclick = function(){
                        location.reload();
                    }
                },100)
            }

        }
        xCross.onclick = function(){
            hintBox.style = "left: 140px; width: 120px; top:120px;"
            headbox.style.filter = "none";
            box.style.filter = "none";
            caption.style.filter = "none";
            answer.style.filter = "none";
            alertBox.style.visibility = "hidden";
            optionBox.style.filter = "none";
            
            hintBox.style.visibility = "hidden";
            confirmButton.style.visibility = "visible";
            
            message.style = "margin-top:30px";
            xCross.style.visibility = "hidden";
           
            refreshIcon.addEventListener("click",clearInput);
            hintIcon.addEventListener("click", hint);
            nextIcon.addEventListener("click", nextQuestion);
            enableBackgroundMusic.addEventListener("click", enableBackgroundMusicFunction);
            enableSoundEffects.addEventListener("click", enableSoundEffectsFunction);
            
            input.disabled = false;
        }
    }
    else{
        message.style = "font-size:20px; line-height:20px; margin-top:15px";
        message.innerHTML = "Bạn không còn đủ sự trợ giúp";
        denyBox.style.visibility = "hidden";
     
        hintBox.style.visibility = "hidden";
        xCross.onclick = function(){
            
            headbox.style.filter = "none";
            box.style.filter = "none";
            caption.style.filter = "none";
            answer.style.filter = "none";
            alertBox.style.visibility = "hidden";
            optionBox.style.filter = "none";
            xCross.style.visibility = "hidden";
           
            hintBox.style.visibility = "hidden";
            confirmButton.style.visibility = "visible";
            
            message.style = "margin-top:30px";
           
            refreshIcon.addEventListener("click",clearInput);
            hintIcon.addEventListener("click", hint);
            nextIcon.addEventListener("click", nextQuestion);
            enableBackgroundMusic.addEventListener("click", enableBackgroundMusicFunction);
            enableSoundEffects.addEventListener("click", enableSoundEffectsFunction);
            
            input.disabled = false;
            
        }
    }
    
}

