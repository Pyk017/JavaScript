function main(){
    let textarea = document.getElementById('textarea');
    let date = document.getElementById("start");
    if (textarea.value == '') {
        alert("Please enter some schedule");
        textarea.focus();
    }
    else if (date.value == ''){
        alert("Please enter the date of your schedule!");
        date.focus();
    } 
    else {
        
        let ol = document.getElementById("list");
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${textarea.value} (${date.value})`));
        li.style.margin = "20px 0";
        let button = document.createElement("button");
        button.innerHTML = "X Completed";
        button.className = "btn btn-danger";
        button.style.margin = "0 60px";
        li.appendChild(button);
        ol.appendChild(li);
        textarea.value = '';
        date.value = "";
        undisable();
        button.onclick = function(){
            ol.removeChild(li);
        }
    }
}

function undisable(){
    document.getElementById('clearList').disabled = false;
}

function removeAll(){
    let ol = document.getElementById("list");
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }
}