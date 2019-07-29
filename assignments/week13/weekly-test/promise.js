let promise = new Promise((resolve, reject) => {
	let heights =[]
    for (let index = 0; index < 5; index++) {
        let randomNumber = Math.floor(Math.random() * 90 + 10)
        let xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
      			heights.push(JSON.parse(this.responseText).height)
				if(i=4){
					let sum = heights.reduce((acc,cur)=>(acc+cur))
  					sum%2==0 ? resolve(sum) : reject(sum)
    		}}
  		}
  		xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + randomNumber, true);
  		xhttp.send();
	}
  	
})
promise.then(r=>console.log('resolved:' + r)).catch(r=>console.log('rejected:' + r))