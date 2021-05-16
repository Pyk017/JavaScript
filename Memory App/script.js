let images = {};

function createImg(i) {
  let img = document.createElement("img");
  img.src = `/images/img${i}.jpg`;
  img.width = "110";
  img.height = "110";
  img.setAttribute("id", "img" + i);
  images[i] = img;
}

function inputImages() {
  const cell = document.getElementsByClassName("card");

  for (let i = 1; i < 10; i++) {
    createImg(i);
  }

  console.log(images);
}

function main() {
  const cell = document.getElementsByClassName("card");

  const num = cell.length;
  let random;
  inputImages();

  for (let i = 0; i < 9; i++) {
    cell[i].addEventListener("click", () => {
      cell[i].classList.toggle("flipCard");
      random = Math.floor(Math.random() * 9 + 1);
      cell[i].childNodes[3].appendChild(images[random]);
      // cell[i].childNodes[3].appendChild();
      invoked(images[random]);
    });
  }
}

let count = 0;
let checker1, checker2;
function invoked(img) {
  count += 1;
  if (count == 2) {
    checker2 = img;
    count = 0;
    checking();
  }
  checker1 = img;
}

function checking() {
  console.log(checker1, checker2);
}
