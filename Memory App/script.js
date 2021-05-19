let imageArray = [];

function createArray() {
  for (let i = 0; i < 12; i++) {
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
  img.setAttribute("id", `img${i + 1}`);
  //   imageArray[i] = img;
  return img;
}
-
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
    // console.log(cell.childNodes[3].append(shuffleCards[index]));
    index += 1;
    // console.log(cell.childNodes[3]);
  }
}

let openedCards = [];

function matched() {
  console.log("matched");
}

function unmatched() {
  console.log("unmatched");
  openedCards[0].classList.add("flipCard");
  openedCards[1].classList.remove("flipCard");
}

function cardOpen(thisCard) {
  openedCards.push(thisCard);

  let totalOpen = openedCards.length;

  if (totalOpen == 2) {
    if (openedCards[0].id == openedCards[1].id) {
      matched();
      openedCards = [];
    } else {
      unmatched();
      openedCards = [];
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
      cardOpen(cells[i].childNodes[3].lastChild);
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

let count = 0;
let checker1, checker2;
function invoked(img) {
  count += 1;
  if (count == 2) {
    checker2 = img;
    count = 0;
    checkingImages();
    return;
  }
  checker1 = img;
}

let score = 0;
let failed = 0;

function checkingImages() {
  console.log(checker1.id, checker2.id);

  if (checker1.id == checker2.id) {
    // alert("Success!");
    message = "Success!";
    let success = document.getElementById("totalScore");
    score += 1;
    success.innerHTML = score;
  } else {
    // alert("Failed!");
    message = "Failed!";
    let fail = document.getElementById("failedAttempt");
    failed += 1;
    fail.innerHTML = failed;
  }
}
