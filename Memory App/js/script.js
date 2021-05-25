let imageArray = [];
let moves = 0;
let openedCards = [];
let second = 0;
let minute = 0;
let hour = 0;
let interval;
let matchedCards = new Set();
let finalTime = 0;
let totalMoves = 0;
let message;

// Creation of Array of Image objects (containing dublicates images objects)
function createArray() {
  for (let i = 0; i < 6; i++) {
    imageArray.push(createImg(i));
  }

  for (let i = 0; i < 6; i++) {
    imageArray.push(createImg(i));
  }
}

// Shuffling of Array so that after each reload new pattern of images shows up
function shuffleArray(array) {
  createArray();
  //   console.log(imageArray);

  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Creating Image DOM object with various essential attributes
function createImg(i) {
  let img = document.createElement("img");
  img.src = `/images/img${i + 1}.jpg`;
  img.width = "110";
  img.height = "110";
  img.alt = `img${i + 1}`;
  img.setAttribute("id", `img${i + 1}`);
  //   imageArray[i] = img;
  return img;
}

// Function is used to setting shuffled images on Card divisions
function settingShuffledImagesOnCards() {
  const cells = document.getElementsByClassName("card");

  let shuffleCards = shuffleArray(imageArray);
  //   console.log(shuffleCards);
  let index = 0;

  //   console.log(shuffleCards);
  for (cell of cells) {
    // console.log(cell, typeof cell);
    cell.childNodes[3].append(shuffleCards[index]);
    // console.log(index, shuffleCards[index]);
    if (index < 12) {
      cell.id = shuffleCards[index].alt;
    }
    // console.log(cell.childNodes[3].append(shuffleCards[index]));
    index += 1;
    // console.log(cell.childNodes[3]);
  }
}

// Function used to set the timer for the Game
function startTime() {
  let timer = document.getElementById("timer");
  console.log("in timer" + timer.innerHTML);
  interval = setInterval(() => {
    timer.innerHTML = `${minute} mins ${second} secs`;
    second += 1;
    if (second == 60) {
      minute += 1;
      second = 0;
    }
    if (minute == 60) {
      hour += 1;
      minute = 0;
    }
  }, 1000);
}

// Function used to count the moves of the player
function moveCounter() {
  // console.log(movecounter);
  let movecounter = document.getElementById("movecounter");
  moves += 1;
  movecounter.innerHTML = moves;

  if (moves == 1) {
    [second, hour, minute] = [0, 0, 0];
    startTime();
  }
}

// Function to do how card react, when cards match
function matched() {
  console.log("matched");
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  // console.log(openedCards[0]);
  // console.log(openedCards[1]);
  openedCards[0].classList.remove("flipCard");
  openedCards[1].classList.remove("flipCard");
  // matchedCards.push(openedCards[0].title);
  // matchedCards.push(openedCards[1].title);
  matchedCards.add(openedCards[0].title);
  matchedCards.add(openedCards[1].title);
  openedCards[0].style.boxShadow = "5px 5px 30px rgba(79, 236, 87, 0.726)";
  openedCards[1].style.boxShadow = "5px 5px 30px rgba(79, 236, 87, 0.726)";
  openedCards = [];
}

// Disabling the classes of toggling
function disable() {
  let cards = document.getElementsByClassName("card");
  // console.log([...cards]);
  [...cards].forEach((item) => {
    item.classList.remove("flipCard");
  });

  [...cards].forEach((item) => {
    item.removeEventListener("click", toggling);
  });
  // console.log("indisable");
}

// Enabling the classes of toggling
function enable() {
  let cards = document.getElementsByClassName("card");

  [...cards].forEach((item) => {
    item.addEventListener("click", toggling);
  });

  // openedCards[0].classList.add("match");
  // openedCards[1].classList.add("match");
}

// Function perform when cards are unmatched
function unmatched() {
  console.log("unmatched");
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  disable();
  openedCards[0].style.boxShadow = "5px 5px 30px rgba(241, 6, 6, 0.479)";
  openedCards[1].style.boxShadow = "5px 5px 30px rgba(241, 6, 6, 0.479)";

  setTimeout(() => {
    openedCards[0].classList.remove("match");
    openedCards[1].classList.remove("match");
    enable();
    openedCards[0].style.boxShadow = "2px 2px 8px rgba(219, 232, 233, 0.726)";
    openedCards[1].style.boxShadow = "2px 2px 8px rgba(219, 232, 233, 0.726)";

    // openedCards[0].classList.remove("flipCard");
    // openedCards[1].classList.remove("flipCard");
    // openedCards[0].classList.toggle("flipCard");
    // openedCards[1].classList.toggle("flipCard");
    openedCards = [];
  }, 1000);
}

// Function, when cards are opened and whether they are matched or unmatched
function cardOpen(thisCard) {
  openedCards.push(thisCard);
  moveCounter();

  let totalOpen = openedCards.length;

  if (totalOpen == 2) {
    // console.log(openedCards[0].id, openedCards[1].id);
    if (
      openedCards[0].id == openedCards[1].id &&
      openedCards[0].title != openedCards[1].title
    ) {
      matched();
    } else {
      unmatched();
    }
  }
  //   console.log(openedCards);
}

// Function to start game
function startGame() {
  settingShuffledImagesOnCards();
  [second, hour, minute] = [0, 0, 0];
  clearInterval();
  let timer = document.getElementById("timer");
  timer.innerHTML = "0 mins 0 secs";
  let flips = document.getElementById("movecounter");
  flips.innerHTML = "0";
}

// Function to show Congratulations modal
function congratulations() {
  console.log(matchedCards, matchedCards.size);
  if (matchedCards.size == 12) {
    console.log("fullly solved");
    clearInterval(interval);
    finalTime = timer.innerHTML;
    totalMoves = moves;
    // document.getElementById('congroModal').modal({backdrop: true});
    $("#myModal").modal("show");
    document.getElementById("showTime").innerHTML = finalTime;
    document.getElementById("showFlips").innerHTML = totalMoves;
    tsParticles.loadJSON("tsparticles", "json/congratulation.json");
  }

  // tsParticles.remove('tsparticles');
}

// Function to add classes to toggle the card
function toggling() {
  this.classList.toggle("flipCard");
  console.log(matchedCards);
  cardOpen(this);
  congratulations();
}

// Main Function when website loads
function main() {
  tsParticles.loadJSON("tsparticles", "json/variant2.json");
  const cells = document.getElementsByClassName("card");
  for (let i = 0; i < 12; i++) {
    cells[i].addEventListener("click", toggling);
    // cells[i].addEventListener('click', congratulations);
  }

  startGame();
}

// Resetting Game function
function resetterFunction() {
  imageArray = [];
  moves = 0;
  openedCards = [];
  second = 0;
  minute = 0;
  hour = 0;
  interval;
  matchedCards = new Set();
  finalTime = 0;
  totalMoves = 0;
  const cells = document.getElementsByClassName("card");
  [...cells].forEach((item) => {
    console.log(item, item.childNodes[3], item.childNodes[3].lastChild);
    item.classList.remove("match");
    item.childNodes[3].lastChild.remove();
    item.style.boxShadow = "2px 2px 8px rgba(219, 232, 233, 0.726)";
  });
  main();
}
