//Method to create linked list from array
function arrToList(arr){
	let i = 0;
	function list(value){
		if(value == undefined) {
			return null;
		}
		i++;
		return {
			value: value,
			next: list(arr[i])
		}
	}
	return list(arr[i]);
}

let arr = [
	1,2,3
];

//console.log(arrToList(arr));
//console.log(JSON.stringify(arrToList(arr)));


//Method to convert linked list to array
function listToArr(list){
	let arr = [];
	while(list.next) {
		arr.push(list.value);
		list = list.next;
	}
	arr.push(list.value);
	return arr;
}

let list = arrToList(arr);
//console.log(JSON.stringify(list));
//console.log(listToArr(list));


//method to add list at the front
function prepand(element, position , list){
	let i = 0;
	let newList = {};
	function addEle(list) {
		if(list == null) {
			return 'Invalid Position given.'
		}
		
		if (i == position) {
			return newList = {
				value: element,
				next: list
			};
		}
		i++;
		list = list.next;
		return addEle(list)
	}
	return addEle(list);
}

console.log(JSON.stringify(prepand(4,2, arrToList(arr))));



