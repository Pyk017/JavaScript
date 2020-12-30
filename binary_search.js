let result = function (ar, l, r, x){
	if(r >= l){
		let mid = Math.floor((l + (r - 1)) / 2)
		if(ar[mid] == x){
			return mid;
		}
		else if(ar[mid] > x){
			return result(ar, l, mid - 1, x);
		}
		else{
			return result(ar, mid + 1, r, x);
		}
	}
	else{
		return -1;
	}
};

ar = [2, 3, 4, 10, 40];
x = 10;

let res = result(ar, 0, ar.length - 1, x);
// console.log(result, ar.length);
if(result != -1){
	console.log(`Element is present at index ${res}.`)
}
else{
	console.log(`Element is not present in array.`);
}