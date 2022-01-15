let flag = true;
let score = 0;
const audio = new Audio();
audio.src = "sound/doorOpen.mp3"
function roll1(){
    if(flag)
    {
    audio.play();
    var rand=Math.floor(Math.random()*3)+1;
    console.log(rand)
    document.getElementById('door1').innerHTML=`<img src="img/`+rand+
    `.png" width="350" height="600" />`;
    flag=false;
    calScore(rand);
    
    }
    
    console.log('yo= '+flag);
    console.log("score - "+score);
    document.getElementById("Show").value =score;
}

function roll2(){
    
    if(flag)
    {
    audio.play();
    var rand=Math.floor(Math.random()*3)+1;
    console.log(rand)
    document.getElementById('door2').innerHTML=`<img src="img/`+rand+
    `.png" width="350" height="600" />`;
    flag=false;
    calScore(rand);
    }
    console.log('yo= '+flag);
    console.log("score - "+score);
    document.getElementById("Show").value =score;
}

function roll3(){
    
    if(flag)
    {
        audio.play();
    var rand=Math.floor(Math.random()*3)+1;
    console.log(rand)
    document.getElementById('door3').innerHTML=`<img src="img/`+rand+
    `.png" width="350" height="600" />`;
    flag=false;
    calScore(rand);
    }
    console.log('yo= '+flag);
    console.log("score - "+score);
    document.getElementById("Show").value =score;
}

function calScore(x){
    if(x===1){
        score=score-5;
    }
    else if(x===3){
        score=score+5;
    }
}

