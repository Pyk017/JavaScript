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
    newDiv.setAttribute('class', 'col-5 mt-3 py-5');

    newDiv.innerHTML = "<h5>Notes: " + count +"</h5>"

    let element = document.createTextNode(text);

    let button = document.createElement('input');
    button.setAttribute('class', "btn btn-primary");
    button.type = "button";
    button.value = "view details";
    button.name="view details";
    button.style.height = "50px";
    button.style.width = "100px";


    newDiv.appendChild(element);

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