let library = ["img-bank/football.png", "img-bank/baseball.jpg", "img-bank/basketball.png", "img-bank/soccer.png", "img-bank/apple.jpg", "img-bank/banana.jpg", "img-bank/orange.jpg", "img-bank/strawberry.jpg", "img-bank/football.png", "img-bank/baseball.jpg", "img-bank/basketball.png", "img-bank/soccer.png", "img-bank/apple.jpg", "img-bank/banana.jpg", "img-bank/orange.jpg", "img-bank/strawberry.jpg"];
let count = 0;
let allImages = document.querySelectorAll(".live");
console.log(allImages);
let playButton = document.getElementById("play-button");

let square1img = document.getElementById("square1");
let square2img = document.getElementById("square2");
let square3img = document.getElementById("square3");
let square4img = document.getElementById("square4");
let square5img = document.getElementById("square5");
let square6img = document.getElementById("square6");
let square7img = document.getElementById("square7");
let square8img = document.getElementById("square8");
let square9img = document.getElementById("square9");
let square10img = document.getElementById("square10");
let square11img = document.getElementById("square11");
let square12img = document.getElementById("square12");
let square13img = document.getElementById("square13");
let square14img = document.getElementById("square14");
let square15img = document.getElementById("square15");
let square16img = document.getElementById("square16");

playButton.addEventListener("click", shuffle);

allImages.forEach(function (e) {
    e.src = "ready.jpg";
    e.addEventListener("click", reveal);
});

function addReveal(){
    allImages.forEach(function (e){
        e.addEventListener("click",reveal);
    })
}

function stopReveal(){
    allImages.forEach(function (all){
        all.removeEventListener("click",reveal);
    })
}




function counter() {
    // toggles the number of clicks then reverts images back to default
   // count++;
    if (count % 2 === 0) {
        allImages.forEach(function (el) {
            el.src = "q-mark.jpg";
        });
    }
    console.log(count)
        ;
}



function reveal() {
    count++;
    event.target.src = event.target.alt;
    if(count % 2 ===0){
        matchCheck();
        stopReveal();
        setTimeout(addReveal,2500);
    }
    setTimeout(counter,3000);
    

}

function matchCheck(){
    //This will test to see if the images match
    //Then execute some logic to permanently make those items unchanged
  let checkArray = [];
  for(let i=0; i<allImages.length;i++){
      if(allImages[i].src != "file:///C:/Users/Dalton/Documents/codeslo/MemoryGame/q-mark.jpg"){
          checkArray.push(allImages[i].src)
          checkArray.push(allImages[i]);
      }
      
  }
   if(checkArray[0]===checkArray[2]){
       alert("Match!");
       checkArray[1].classList.remove("live");
       checkArray[3].classList.remove("live");
       allImages = document.querySelectorAll(".live");
   }
}


function checkWin(){
    // Win Logic
}


function shuffle() {
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].src = "snoopy.gif";
    }
    shuffleArray(library);
    for (let k = 0; k < allImages.length; k++) {
        allImages[k].alt = library[k];
    }
    setTimeout(delayAfterShuffle, 2000);
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function delayAfterShuffle() {
    for (let j = 0; j < allImages.length; j++) {
        allImages[j].src = "q-mark.jpg";
    }
}