var count = 0

function main() {
    let text = document.getElementById('textarea').value;
    count += 1;
    if (text == ''){
        $('#alert-danger').toggle();
    } else {
        $('#alert-success').toggle();
    }

    let output = document.getElementById('notes');

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'col-5 mt-3');
    newDiv.style.padding = "5px";
    newDiv.style.border = "1px solid grey";
    newDiv.style.borderRadius = "5px";

    newDiv.innerHTML = "<h5>Notes: " + count + "</h5>"

    let divNew = document.createElement('div');

    let para = document.createElement('p');
    para.style.width = "250px";
    para.style.whiteSpace = 'nowrap';
    para.style.overflow = "hidden";
    para.style.textOverflow = "ellipsis";


    let element = document.createTextNode(text);

    para.appendChild(element);

    let button = document.createElement('input');
    button.setAttribute('class', "btn btn-primary");
    button.setAttribute('data-bs-toggle', "modal");
    button.setAttribute('data-bs-target', "#modalID");
    button.type = "button";
    button.value = "View";
    button.name = "view details";
    button.style.height = "50px";
    button.style.width = "80px";
    button.onclick = function() {
        createModal(text, count);
    }

    newDiv.appendChild(para);

    newDiv.appendChild(button);

    output.appendChild(newDiv);


    clearTextArea();
}

function closeBtn(r){
    r.parentNode.style.display = "none";
}

function clearTextArea(){
    document.getElementById('textarea').value = '';
}

function createModal(content, count) {
    document.getElementById('staticBackdropLabel').innerHTML = "Note " + count + ":";
    let contentDiv = document.getElementById("modalContent");
    let text = document.createTextNode(content);
    contentDiv.appendChild(text);
}

