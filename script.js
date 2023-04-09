//your JS code here. If required.
const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
];

// Add loading row
const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.textContent = "Loading...";
loadingRow.appendChild(loadingCell);
document.getElementById("output").appendChild(loadingRow);

Promise.all(promises).then(results => {
  // Remove loading row
  loadingRow.remove();

  // Create rows with results
  const tableBody = document.getElementById("output");
  const row1 = document.createElement("tr");
  const row2 = document.createElement("tr");
  const row3 = document.createElement("tr");
  const row4 = document.createElement("tr");

  const cell1row1 = document.createElement("td");
  const cell2row1 = document.createElement("td");
  cell1row1.textContent = "Promise 1";
  cell2row1.textContent = results[0].toFixed(3);
  row1.appendChild(cell1row1);
  row1.appendChild(cell2row1);

  const cell1row2 = document.createElement("td");
  const cell2row2 = document.createElement("td");
  cell1row2.textContent = "Promise 2";
  cell2row2.textContent = results[1].toFixed(3);
  row2.appendChild(cell1row2);
  row2.appendChild(cell2row2);

  const cell1row3 = document.createElement("td");
  const cell2row3 = document.createElement("td");
  cell1row3.textContent = "Promise 3";
  cell2row3.textContent = results[2].toFixed(3);
  row3.appendChild(cell1row3);
  row3.appendChild(cell2row3);

  const cell1row4 = document.createElement("td");
  const cell2row4 = document.createElement("td");
  cell1row4.textContent = "Total";
  cell2row4.textContent = (results.reduce((a, b) => a + b, 0)).toFixed(3);
  row4.appendChild(cell1row4);
  row4.appendChild(cell2row4);

  tableBody.appendChild(row1);
  tableBody.appendChild(row2);
  tableBody.appendChild(row3);
  tableBody.appendChild(row4);
});





