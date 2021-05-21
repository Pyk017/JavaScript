let imageArray = [];
let moves = 0;
let openedCards = [];
let second = 0;
let minute = 0;
let hour = 0;
let interval;
let matchedCards = [];
let finalTime = 0;
let totalMoves = 0;

function createArray() {
  for (let i = 0; i < 6; i++) {
    imageArray.push(createImg(i));
    // console.log(i);
  }

  for (let i = 0; i < 6; i++) {
    imageArray.push(createImg(i));
    // console.log(i);
  }
}

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

let message;

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
    if (index < 12){
      cell.id = shuffleCards[index].alt;
    }
    // console.log(cell.childNodes[3].append(shuffleCards[index]));
    index += 1;
    // console.log(cell.childNodes[3]);
  }
}

function startTime() {
  let timer = document.getElementById('timer');
  console.log('in timer' + timer.innerHTML);
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

function moveCounter() {
  // console.log(movecounter);
  let movecounter = document.getElementById("movecounter");
  moves += 1;
  movecounter.innerHTML = moves;

  if (moves == 1) {
    (
      [second, hour, minute] =  [0, 0, 0]
    )
    startTime();
  }

}

function matched() {
  console.log("matched");
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  // console.log(openedCards[0]);
  // console.log(openedCards[1]);
  openedCards[0].classList.remove("flipCard");
  openedCards[1].classList.remove("flipCard");
  matchedCards.push(openedCards[0]);
  matchedCards.push(openedCards[1]);
  openedCards = [];
}

function disable() {
  let cards = document.getElementsByClassName("card");
  // console.log([...cards]);
  [...cards].forEach((item) => {
    item.classList.remove("flipCard");
  });

  [...cards].forEach((item) => {
    item.removeEventListener('click', toggling);
  });
  // console.log("indisable");
}

function enable() {
  let cards = document.getElementsByClassName("card");

  [...cards].forEach(item => {
    item.addEventListener('click', toggling);
  });

  // openedCards[0].classList.add("match");
  // openedCards[1].classList.add("match");

}

function unmatched() {
  console.log("unmatched");
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  disable();
  setTimeout(() => {
    openedCards[0].classList.remove("match");
    openedCards[1].classList.remove("match");
    enable();
    // openedCards[0].classList.remove("flipCard");
    // openedCards[1].classList.remove("flipCard");
    // openedCards[0].classList.toggle("flipCard");
    // openedCards[1].classList.toggle("flipCard");
    openedCards = [];
  }, 1000);
}

function cardOpen(thisCard) {
  openedCards.push(thisCard);
  moveCounter();
  let totalOpen = openedCards.length;

  if (totalOpen == 2) {
    // console.log(openedCards[0].id, openedCards[1].id);
    if (openedCards[0].id == openedCards[1].id) {
      matched();
    } else {
      unmatched();
    }
  }

  //   console.log(openedCards);
}



function startGame () {
  settingShuffledImagesOnCards();
  ([second, hour, minute] = [0, 0, 0]);
  clearInterval();
  let timer = document.getElementById('timer');
  timer.innerHTML = "0 mins 0 secs";
}

// function isAllFliped() {

// }


function congratulations() {
  console.log(matchedCards, matchedCards.length);
  if (matchedCards.length == 12) {
    console.log("fullly solved");
    clearInterval(interval);
    finalTime = timer.innerHTML;
    totalMoves = moves;
    // document.getElementById('congroModal').modal({backdrop: true});
    $('#myModal').modal('show');
    

  
  }
}

function toggling () {
  this.classList.toggle("flipCard");
  cardOpen(this);
  congratulations();
}

function main() {
  const cells = document.getElementsByClassName("card");
  for (let i = 0; i < 12; i++) {
    cells[i].addEventListener("click", toggling);
    // cells[i].addEventListener('click', congratulations);
  }

  startGame();
}
