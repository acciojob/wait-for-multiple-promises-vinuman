const arr = [1,2,3];
const p1 = new Promise((resolve, reject) =>{
	const time = arr[Math.floor(Math.random() * 3)];
	setTimeout(() =>{
		 const result = {
      name: "Promise 1",
      time: time
    };
		resolve(result);
	},time)
})
const p2 = new Promise((resolve, reject) =>{
	const time = arr[Math.floor(Math.random() * 3)];
	setTimeout(() =>{
		 const result = {
      name: "Promise 2",
      time: time
    };
		resolve(result);
	},time)
})
const p3 = new Promise((resolve, reject) =>{
	const time = arr[Math.floor(Math.random() * 3)];
	setTimeout(() =>{
		 const result = {
      name: "Promise 3",
      time: time
    };
		resolve(result);
	},time)
})

Promise.all([p1, p2, p3]).then((values) =>{
	let data = document.querySelector('#output');
	let loading = document.querySelector(".loading");
	loading.innerHTML="";

	values.forEach((value) =>{
		let nameCell = document.createElement("td");
		nameCell.textContent = value.name;
		let timeCell = document.createElement("td");
		timeCell.textContent = value.time;
		let row = document.createElement("tr");
		row.appendChild(nameCell);
		row.appendChild(timeCell);
		data.appendChild(row);
		
	});
	 let totalRow = document.createElement('tr');
  let totalNameCell = document.createElement('td');
  totalNameCell.textContent = 'Total';
	
	let totalTime = values.reduce((acc, value) => acc + value.time, 0);
	 let totalTimeCell = document.createElement('td');
	totalTimeCell.textContent = totalTime.toFixed(3);
	totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);
  data.appendChild(totalRow);
});



