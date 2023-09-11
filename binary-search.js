function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	let term = null;

	function checkbetween(a = Array, index1, index2){

		let value = a[Math.floor( ( index1 + index2 ) / 2 ) / 2]

		if ( searchTerm == value ) {
			term = value;
			return
		} else if (value > searchTerm) {
			checkbetween(array, 0, value)
		} else {
			checkbetween(array, value, array.length - 1)
		}
	}

	if (array[Math.floor(array.length) / 2] > searchTerm){
		checkbetween(array, 0 , array[Math.floor(array.length) / 2])
	} else {
		checkbetween(array, array[Math.floor(array.length) / 2] , array.length - 1)
	}


	return term;
}

console.log(binarySearch([1, 2, 3, 6, 7, 8], 2))

module.exports = binarySearch;
