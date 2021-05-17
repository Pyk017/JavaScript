let imageArray = [];

function createArray() {
    for (let i = 0; i < 9; i++) {
        imageArray.push(createImg(i));
    }
}

function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue
    }
}


function createImg (i) {
    let img = document.createElement('img');
    img.src = `/images/img${i + 1}.jpg`;
    img.width = '110';
    img.height = '110';
    img.setAttribute('id', `img${i + 1}`);
    imageArray[i] = img;
    return img;
}

let message;

function main() {
    createArray();
    console.log(imageArray);
    shuffleArray(imageArray);
    console.log(imageArray);
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
    count += 1
    if (count == 2) {
        checker2 = img;
        count = 0;
        checkingImages();
        return ;
    }
    checker1 = img;
}

let score = 0;
let failed = 0 ;


function checkingImages() {
    console.log(checker1.id, checker2.id);
    
    if (checker1.id == checker2.id) {
        
        // alert("Success!");
        message = "Success!";
        let success = document.getElementById('totalScore');
        score += 1;
        success.innerHTML = score;

    } else {

        // alert("Failed!");
        message = "Failed!";
        let fail = document.getElementById('failedAttempt');
        failed += 1;
        fail.innerHTML = failed;

    }


}



