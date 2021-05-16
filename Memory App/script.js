function main() {
    const cell = document.getElementsByClassName("card");

    const num = cell.length;

    for (let i = 0; i<num; i++) {
        cell[i].addEventListener('click', () => {
            cell[i].classList.toggle('flipCard')       
        })
    }
}