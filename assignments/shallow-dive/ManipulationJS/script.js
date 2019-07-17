var table = document.createElement('table');
var headrow = table.createTHead().insertRow();
var headcell0 = headrow.insertCell(0);
var headcell1 = headrow.insertCell(1);
headcell0.outerHTML = "<th>Number</th>";
headcell1.outerHTML = "<th>Squares</th>";
var bodyrow = table.createTBody();
var row = [];
for(i=0;i<10;i++) {
    row[i] = bodyrow.insertRow();
    var cell1 = row[i].insertCell(0);
    var cell2 = row[i].insertCell(1);
    cell1.innerText = i+1;
    cell2.innerText = (i+1)**2;
}
document.body.appendChild(table);