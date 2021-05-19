function main(){
    let sentence = document.getElementById("textarea").value.toLowerCase();
    resetAlert();

    if (sentence == ""){
        document.getElementById("alert-danger").style.display = "flex";
    } else {

        vowels = 'aeiou'.split('');

        let arr = sentence.split('').filter(item => {
            return vowels.includes(item);
        });

        if (arr.length == 0){
            document.getElementById("alert-primary").style.display = "flex"; 
        } else {
            let success = document.getElementById("alert-success");
            success.style.display = "flex";
            let count = document.getElementById("count");
            count.innerHTML = " " + arr.length;
        }
    }
}

function closeBtn(obj) {
    let div = obj.parentNode;
    div.style.display = "none";
    document.getElementById("textarea").value = "";
}

function  resetAlert() {
    document.getElementById("alert-danger").style.display = "none";
    document.getElementById("alert-primary").style.display = "none";
    document.getElementById("alert-success").style.display = "none";      
}