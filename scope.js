let outer = ()=>{
	let x = 10;
	let inner = ()=>{
		let y = 20;
	return console.log(x, y);
	}
	//console.log(x,y);
}
console.log(outer());
