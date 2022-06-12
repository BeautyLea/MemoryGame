const gameContainer = document.getElementById("game");
let count = 0;
let twoCardArr = [];

let scoreLabel = document.querySelector("#score");
let score = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  score++;
  scoreLabel.innerText = score;

  // you can use event.target to see which element was clicked
  if (event.target.classList.contains("flipped")) return;

  twoCardArr.push(event.target); //save dive element for compared
  if (twoCardArr.length == 1) {
    const divColor = event.target.classList[0]; //<div>.className element
    event.target.style.backgroundColor = divColor;
    twoCardArr[0].classList.add("flipped");
  } else if (twoCardArr.length === 2) {
    const divColor = event.target.classList[0]; //<div>.className element
    event.target.style.backgroundColor = divColor;
    if (twoCardArr[0].classList[0] !== twoCardArr[1].classList[0]) {
      //compare card from array
      //closeCardArr = twoCardArr.slice();
      //twoCardArr = [];
      setTimeout(closeCard, 1000);
      //twoCardArr=[];can not do here cause of timer delay...card will empty before set color
    } else {
      count = count + 2; //count how many card are flipped
      twoCardArr = []; //empty arr to ready for new two card
      if (count === COLORS.length) {
        alert("GAME OVER" + "Yor score is : " + score);
      }
    }
    //twoCardArr=[];

    // }
  } //else {
  //twoCardArr = [];
  //}
}
function closeCard() {
  twoCardArr[0].style.backgroundColor = "white";
  twoCardArr[1].style.backgroundColor = "white";
  twoCardArr[0].classList.remove("flipped");
  twoCardArr[1].classList.remove("flipped");
  //card1 = null;
  twoCardArr = []; //empty arr to ready for new two card
}
// when the DOM loads
createDivsForColors(shuffledColors);

/* */
