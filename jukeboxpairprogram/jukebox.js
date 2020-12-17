const theBody = document.querySelector('body');
console.log(theBody);
console.log(theBody.style);
let theText = document.querySelector('h2');
console.log(theText.textContent);



var x = document.getElementById("bwAudio");  //https://www.w3schools.com/jsref/met_audio_play.asp

var y = document.getElementById("loverAudio");  //https://www.w3schools.com/jsref/met_audio_play.asp

var z = document.getElementById("xmasAudio");  //https://www.w3schools.com/jsref/met_audio_play.asp

var xPlaying = false;
var yPlaying = false;
var zPlaying = false;


document.getElementById("hearts").style.display = "none";
document.getElementById("flames").style.display = "none";
document.getElementById("lights").style.display = "none";




// MY SONGS KNOW WHAT YOU DID IN THE DARK
let bwButton = document.querySelector("#bw");
bwButton.addEventListener('click', bwClick);

function bwClick(){
    theText.textContent = "My Songs Know What You Did in the Dark";
    y.pause();
    z.pause();
    xPlay();

  theBody.style.backgroundColor= "black";

  document.getElementById("hearts").style.display = "none";
  document.getElementById("flames").style.display = "block";
  document.getElementById("lights").style.display = "none";
}


// LOVER
let loverButton = document.querySelector("#lover");
loverButton.addEventListener('click', loverClick);

function loverClick(){
    theText.textContent = "Lover";
    x.pause();
    z.pause();
    yPlay();

    theBody.style.backgroundColor= "pink";

    document.getElementById("hearts").style.display = "block";
    document.getElementById("flames").style.display = "none";
    document.getElementById("lights").style.display = "none";
}


// ALL I WANT FOR CHRISTMAS IS YOU
let xmasButton = document.querySelector("#xmas");
xmasButton.addEventListener('click', xmasClick);

function xmasClick(){
    theText.textContent = "All I Want for Christmas is You";
    y.pause();
    x.pause();
    zPlay();

    theBody.style.backgroundColor= "green";

    document.getElementById("hearts").style.display = "none";
    document.getElementById("flames").style.display = "none";
    document.getElementById("lights").style.display = "block";
}



//randomly placed images
$(document).ready(function() { //https://stackoverflow.com/questions/36926734/random-position-multiple-images
    var bodyWidth = $(window).width();
    var bodyHeight = $(window).height();
  
    $('.random').each(function(idx, img) {
      var randPosX = Math.floor((Math.random() * bodyWidth));
      var randPosY = Math.floor((Math.random() * bodyHeight));
      console.log(randPosY);
      $(img).css('left', randPosX);
      $(img).css('top', randPosY-100);
  
    });
});


  



//PAUSING

function xPlay(){ //https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link
    xPlaying ? x.pause() : x.play();
}

x.onplaying = function(){
    xPlaying = true;
}
x.onpause = function(){
    xPlaying = false;
}




function yPlay(){ 
    yPlaying ? y.pause() : y.play();
}

y.onplaying = function(){
    yPlaying = true;
}
y.onpause = function(){
    yPlaying = false;
}




function zPlay(){ 
    zPlaying ? z.pause() : z.play();
}

z.onplaying = function(){
    zPlaying = true;
}
z.onpause = function(){
    zPlaying = false;
}
