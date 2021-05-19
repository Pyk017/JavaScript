let imageArray = [];
let counter = 0;

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
    cell.id = shuffleCards[index].alt;
    // console.log(cell.childNodes[3].append(shuffleCards[index]));
    index += 1;
    // console.log(cell.childNodes[3]);
  }
}

let openedCards = [];

function moveCounter() {
  // console.log(movecounter);
  let movecounter = document.getElementById("movecounter");
  counter += 1;
  movecounter.innerHTML = counter;
}

function matched() {
  console.log("matched");
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  // console.log(openedCards[0]);
  // console.log(openedCards[1]);
  openedCards[0].classList.remove("flipCard");
  openedCards[1].classList.remove("flipCard");
  openedCards = [];
}

function disable() {
  let cards = document.getElementsByClassName("card");
  console.log([...cards]);
  [...cards].forEach((item) => {
    item.classList.remove("flipCard");
  });
  console.log("indisable");
}

function enable() {}

function unmatched() {
  console.log("unmatched");
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  disable();
  setTimeout(() => {
    openedCards[0].classList.remove("match");
    openedCards[1].classList.remove("match");
    // openedCards[0].classList.remove("flipCard");
    // openedCards[1].classList.remove("flipCard");
    // openedCards[0].classList.toggle("flipCard");
    // openedCards[1].classList.toggle("flipCard");
    openedCards = [];
  }, 1100);
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

function main() {
  settingShuffledImagesOnCards();

  const cells = document.getElementsByClassName("card");

  for (let i = 0; i < 12; i++) {
    cells[i].addEventListener("click", () => {
      cells[i].classList.toggle("flipCard");
      cardOpen(cells[i]);
    });
  }

  // createArray();
  // console.log(imageArray);
  // shuffleArray(imageArray);
  // console.log(imageArray);

  //   console.log(cells);

  // const cell = document.getElementsByClassName("card");
  // let random;

  // for (let i = 0; i<9; i++) {
  //     cell[i].addEventListener('click', () => {
  //         cell[i].classList.toggle('flipCard');
  //         random = Math.floor((Math.random() * 9) + 1);
  //         let createImage = createImg(random);
  //         // cell[i].childNodes[3].appendChild(images[random]);
  //         cell[i].childNodes[3].appendChild(createImage);
  //         // cell[i].childNodes[3].appendChild();
  //         invoked(createImage);
  //         // console.log(cell[i].childNodes[3].childNodes);
  //         // console.log(checker1, checker2);
  //     })

  // }
  // checkingImages();
}
