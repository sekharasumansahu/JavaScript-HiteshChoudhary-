let outer = (x)=>{
	return (y)=>{
		return x+y;
	}
}
let call = outer(10);
console.log(call(20));
