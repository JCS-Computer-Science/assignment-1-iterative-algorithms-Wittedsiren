function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	let newArray = function(a, b1, b2){
		//b1 must be smaller then b2
		let newArray = [];
		for (let i = b1; i < b2; i++) {
			const element = a[i];
			newArray.push(element)
		}
		return newArray
	}

	let term;
	let middleIndex = Math.floor(array.length / 2);

	if (searchTerm == array[middleIndex]){
		console.log("found");
		term = array[middleIndex];
	} else if ( searchTerm > array[middleIndex] ){
		binarySearch(newArray(array, middleIndex, array.length), searchTerm)
	} else { 
		binarySearch(newArray(array, 0, middleIndex + 1), searchTerm)
	}
	
	console.log(term)
	// return term

}

console.log(binarySearch([1,2,3,4,5,6,7, 8], 2));

module.exports = binarySearch;
