

// Main part - windows
var get = document.getElementById("sector");
get.innerHTML = '';
for (var i = 0; i < 25; i++) {
  get.innerHTML += "<div class='wrapper' id='wrap'  style='transform:none'></div>";

}





// Entry - Menu 
$(document).ready(() => entryPoint());


function entryPoint() {
  var g = document.querySelector("#entry");
  
  if (g.style.visibility = "hidden") {
    g.style.visibility = "visible";
  }
  
  g.innerHTML = ' <div class="question"> <h1>Do you want to play CardsS? </h1><div class="instructions"><div> <button type="button" class="instructionsOne"><h1>How to play</h1></button><button type="button" class="instructionsTwo"><h1>About me</h1></button></div> </div><button type="button" class="btn-yes" name="button">Yes</button><button type="button" class="btn-no" name="button">No</button> </div>';

  document.querySelector(".btn-yes").addEventListener("click", () => setTimeout(playerSelect, 1000));
  document.querySelector(".instructionsOne").addEventListener("click", aboutGame);
  document.querySelector(".instructionsTwo").addEventListener("click", aboutSubject);

  
}


function aboutGame() {
  var cookieGame = document.querySelector("#about-game");
  

  if(cookieGame.style.display = "none"){
    cookieGame.style.display = "block";
  }

  document.querySelector(".spanOne").addEventListener("click", () =>{
    if(cookieGame.style.display = "block"){
      cookieGame.style.display = "none";
    }
  });

  window.addEventListener("click", (e) => {
    if(e.target === cookieGame){
      cookieGame.style.display = "none";
    }
  })
}


function aboutSubject() {
  var cookieSubject = document.querySelector("#about-subject");

  if(cookieSubject.style.display = "none"){
    cookieSubject.style.display = "block";
  }
  
  document.querySelector(".spanTwo").addEventListener("click", () => {
    if(cookieSubject.style.display = "block"){
      cookieSubject.style.display = "none";
    }
  });
  
  window.addEventListener("click", (e) => { 
    if(e.target === cookieSubject){
    cookieSubject.style.display = "none";
  }
  })
}

// Entry - continuing entry , after choosing to play , showing the input fields , function called in entryPoint() function .

function playerSelect() {
  document.querySelector("#entry").innerHTML = ' <div class="playersName"> <div class="igr"><i class="fas fa-user-plus"></i></div> <div><p >Player 1</p><input type="text" id="player-one" placeholder="Enter your name"/></div><div><p>Player 2</p><input type="text" id="player-two" placeholder="Enter your name"/></div><button type="button" class="btn-submit" onclick="setNames()"> Submit </button></div>';

}


var randomQuestions = [" , it is your shot . Be careful !" , 
                       " , think about it . You dont want angry face !" ,
                        " ,try picking place you havent picked before.",
                        " ,good luck !",
                        " , it is your turn . Good luck !"
];


function setNames() {
  var a = document.getElementById("player1");
  var b = document.getElementById("player2");

  var c = document.getElementById("player-one").value;
  var d = document.getElementById("player-two").value;
  
 
  var randomNames = ["Carrie", "Sara", "John" , "Adam"]

  
 
  var firstRandom = Math.floor(Math.random() * randomNames.length);
  var firstRandomChoice = randomNames[firstRandom];

  var secondRandom = Math.floor(Math.random() * randomNames.length);
  var secondRandomChoice = randomNames[secondRandom];
  
  var aorq = Math.floor(Math.random() * randomQuestions.length);
  var aorqchoice = randomQuestions[aorq];

  if(c == "" && d == ""){
    a.innerHTML = firstRandomChoice;
    b.innerHTML = secondRandomChoice;
    document.querySelector(".final").innerHTML ="<h3>" + "Hello " + firstRandomChoice + aorqchoice + "</h3>";
  }else{
    a.innerHTML = c;
    b.innerHTML = d;
    document.querySelector(".final").innerHTML = "<h3>" + "Hello " + c + aorqchoice + "</h3>";
  }
  close();
}

// End of entry - after choosing "submit", the window is closing and the main part of the game is beginning.
function close() {
  document.querySelector("#entry").style.visibility = "hidden";
}






// Function for windows (every window is calling a function);


const cards = document.querySelectorAll(".wrapper").forEach(card => card.addEventListener("click", flipcard));

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "&#128512", "&#128520"];
var countAll = 0;
var counter1 = 0;
var counter2 = 0;

function flipcard() {

  countAll += 1;
  var g = Math.floor(Math.random() * nums.length);
  var randomNumber = nums[g];


  if (this.style.transform == "none") {

    this.style.transform = "rotate3d(0, 1, 0, 180deg)";
    this.style.transition = "0.5s";
    
    // I had to add active so the "rotateBack()" could check if its active ,and if it is , sets to "" (nothing)
    this.classList.add("active");
    
    this.innerHTML += "<p id='cardContent' style='transform: rotate3d(0,1,0,180deg)'>" + randomNumber + "</p>";

  }

  setTimeout(rotateBack, 1000);
 



  // the score counter , if countAll is not divisible with 2 then it's player1's turn, else(if it's divisible with 2) then it's player2's turn;
  

  
  if (countAll % 2 != 0) {

    setTimeout(firstCheck, 1200);

    if (randomNumber == "&#128512") {
      counter1 *= 2;
      document.querySelector("#score1").innerHTML = counter1;
      document.querySelector("#smiley-one").innerHTML += "&#128512";

    } else if (randomNumber == "&#128520") {
      counter1 = 0;
      document.querySelector("#score1").innerHTML = counter1;
      document.querySelector("#smiley-one").innerHTML += "&#128520";
    } else {
      counter1 += randomNumber;
      document.querySelector("#score1").innerHTML = counter1;
    }

  }
  if (countAll % 2 == 0) {

    setTimeout(secondCheck, 1200);

    if (randomNumber == "&#128512") {
      counter2 *= 2
      document.querySelector("#score2").innerHTML = counter2;
      document.querySelector("#smiley-two").innerHTML += "&#128512";
    } else if (randomNumber == "&#128520") {
      counter2 = 0;
      document.querySelector("#score2").innerHTML = counter2;
      document.querySelector("#smiley-two").innerHTML += "&#128520";

    } else {
      counter2 += randomNumber;
      document.querySelector("#score2").innerHTML = counter2;
    }
  }
   
  
 // Part of a function which shows winner and possible end of a game , and 2 choices (to continue or go back).
  
  if (counter1 >= 50 && counter1 > counter2) {
    var nameFirst = document.getElementById("player1").innerHTML;
    var winner1 = document.getElementById("score1").innerHTML;


    document.querySelector("#newWinner").style.visibility = "visible";
    document.querySelector("#newWinner").innerHTML = "<div class='winReport'> " + "<p> Winner:  " + nameFirst + "<br>" + "Score: " + winner1 + "</p>" + "<h1>Do you want to play again ?</h1> <button type='button' class='btn-continue' onclick='newGame()'>Continue</button> <button type='button' class='btn-startover' onclick='exitGame()'>Go to start</button><div> ";

  }
  if (counter2 >= 50 && counter2 > counter1) {
    var nameSecond = document.getElementById("player2").innerHTML;
    var winner2 = document.getElementById("score2").innerHTML;


    document.querySelector("#newWinner").style.visibility = "visible";
    document.querySelector("#newWinner").innerHTML = "<div class='winReport'> " + "<p> Winner: " + nameSecond + "<br>" + "Score: " + winner2 + "</p>" + "<h2>Do you want to play again ?</h2> <button type='button' class='btn-continue'  onclick='newGame()'>Continue</button> <button type='button' class='btn-startover'  onclick='exitGame()'>Go to start</button> </div>";

  }
 
  

  //end of a function
}

   


//Function called in function flipcard() with method  setiTmeout() .
function rotateBack() {
  const activecard = document.querySelector('.active');
  activecard.style.transform = "none";
  activecard.innerHTML = '';
  activecard.classList.remove("active");
}

// Two functions both called in previous function flipcard with method setTimeout() aswell.

var score_first = document.querySelector("#player1");
var score_second = document.querySelector("#player2");

function firstCheck() {
  score_first.classList.remove("checked");
  score_second.classList.add("checked");
  
  var aorq = Math.floor(Math.random() * randomQuestions.length);
  var aorqchoice = randomQuestions[aorq];

  var current = document.querySelector(".checked").innerHTML;
  document.querySelector(".final").innerHTML = "<h3>" + "Hello " + current  +  aorqchoice +"</h3>" ;

}
function secondCheck() {

  score_first.classList.add("checked");
  score_second.classList.remove("checked");

  var aorq = Math.floor(Math.random() * randomQuestions.length);
  var aorqchoice = randomQuestions[aorq];

  var current = document.querySelector(".checked").innerHTML;
  document.querySelector(".final").innerHTML ="<h3>" +"Hello " + current + aorqchoice +"</h3>";

}


// Function which is called by button "continue" , everything is set to 0.
function newGame() {
  countAll = 0
  counter1 = 0
  counter2 = 0
  
  document.querySelector("#score1").innerHTML = 0;
  document.querySelector("#score2").innerHTML = 0;
  document.querySelector("#smiley-one").innerHTML="";
  document.querySelector("#smiley-two").innerHTML="";
  document.querySelector("#newWinner").style.visibility = "hidden";
  document.querySelector("#newWinner").innerHTML = "";
  document.querySelector(".final").innerHTML ="<h3>" + "Hello " + firstRandomChoice + aorqchoice + "</h3>";
  
  var igr1 = document.getElementById("player1");
  var igr2 = document.getElementById("player2");

  if (igr2.classList = "checked") {
    igr2.classList.remove("checked");
    igr1.classList.add("checked");

  }

}

// Function which is called by button "Go to start"  , sets us back to start and menu 
function exitGame() {

  $(document).ready(() => entryPoint());

  countAll = 0
  counter1 = 0
  counter2 = 0
  
  document.querySelector("#score1").innerHTML = 0;
  document.querySelector("#score2").innerHTML = 0;

  document.querySelector("#newWinner").style.visibility = "hidden";
  document.querySelector("#newWinner").innerHTML = "";
  document.querySelector("#smiley-one").innerHTML = "";
  document.querySelector("#smiley-two").innerHTML = "";

  if (igr2.classList = "checked") {
    igr2.classList.remove("checked");
    igr1.classList.add("checked");

  }
}

