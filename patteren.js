function printPatteren(symbol, count){
	let string = symbol;
	let times = count;
	while(string.length <= times){
		console.log(string);
		string += symbol;
	}
}
printPatteren('#', 7);
printPatteren('*', 10);
