var flag = true;

function main() {
  if (flag == true) {
    noexpenseremoval();
  }
  flag = false;

  let name = document.getElementById("nameInput").value;
  let date = document.getElementById("dateInput").value;
  let amount = document.getElementById("amountInput").value;

  let table = document.getElementById("table");
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let datalist = [name, date, amount];

  for (let i = 0; i < 3; i++) {
    let cell = row.insertCell(i);
    let element = document.createElement("td");
    let elementText = document.createTextNode(datalist[i]);
    element.appendChild(elementText);
    cell.appendChild(element);
  }

  cell = row.insertCell(3);
  element = document.createElement("input");
  element.type = "button";
  element.value = "X";
  element.name = rowCount + 1;
  cell.appendChild(element);
  element.onclick = function () {
    removeRow(this);

    let table = document.getElementById("table");
    let count = table.rows.length;
    if (count == 1) {
      let row = table.insertRow(count);
      let cell = row.insertCell(0);
      cell.colSpan = 4;
      cell.innerHTML = "No Expense added yet!";
    }
  };

  clearFields();
}

function removeRow(r) {
  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}

function noexpenseremoval() {
  document.getElementById("table").deleteRow(1);
}

function clearFields() {
  document.getElementById("nameInput").value = "";
  document.getElementById("dateInput").value = "";
  document.getElementById("amountInput").value = "";
}
