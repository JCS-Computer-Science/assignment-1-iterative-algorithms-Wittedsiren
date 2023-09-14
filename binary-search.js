function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let term = null;
	
	let middleIndex =  array.length / 2
	if (searchTerm == array[middleIndex]){
		return array[middleIndex]
	} else if (  ){

	}
	
	
	return term;
}

console.log(binarySearch([1,2,3,4,5,6,7, 8], 2))

module.exports = binarySearch;
