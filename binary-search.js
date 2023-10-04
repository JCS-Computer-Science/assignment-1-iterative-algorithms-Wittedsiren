function binarySearch(array, searchTerm) {
	let termIndex;

	let start = 0;
	let end = array.length - 1;

	while (start <= end){
		let middleIndex = Math.floor(start + end / 2);
		if (array[middleIndex] == searchTerm){ termIndex = middleIndex; break; }
		if (array[middleIndex] > searchTerm) end -= 1; 
		if (array[middleIndex] < searchTerm) start += 1;
	}

	return termIndex;
}

module.exports = binarySearch;
