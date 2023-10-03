function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	let termIndex;
	let middleIndex = Math.floor(array.length / 2);

	while (searchTerm != array[middleIndex]){

		if (array[middleIndex] > searchTerm) middleIndex =- Math.floor(middleIndex / 2) ;
		if (array[middleIndex] < searchTerm) middleIndex =+ Math.floor(middleIndex / 2) ;

		//console.log(middleIndex);
		// if (searchTerm == array[middleIndex]){
		// 	termIndex = middleIndex; break;
		// } else if ( searchTerm > array[middleIndex] ){
		// 	middleIndex = middleIndex + Math.floor(middleIndex + 1 / 2) ;
		// } else { 
		// 	middleIndex = middleIndex - Math.floor(middleIndex / 2) ;
		// }	
	}

	return middleIndex;
}

// console.log(binarySearch([1, 4, 5, 6, 7, 8, 9, 10 ,11], 1));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4));
// console.log(binarySearch([1, 4, 5, 6, 7, 8, 9], 6));
// console.log('-');
// console.log(binarySearch([1, 4, 5, 7, 8, 9], 1));
// console.log(binarySearch([1, 4, 5, 7, 8, 9], 9));
// console.log(binarySearch([1, 4, 5, 7, 8, 9], 7));
// console.log('-');
console.log(binarySearch([9], 9));
console.log('-');
console.log(binarySearch([1, 4, 8, 15, 28, 40, 45, 46], 46));


module.exports = binarySearch;
