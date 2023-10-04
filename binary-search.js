function binarySearch(array, searchTerm) {
	let termIndex;

	let start = 0;
	let end = array.length - 1;

	while (start <= end){
		let middleIndex = Math.floor(start + end / 2);
		if (array[middleIndex] == searchTerm) { termIndex = middleIndex; break; }
		(array[middleIndex] > searchTerm) ? end -= 1 : start += 1;
	}

	return termIndex;
}

module.exports = binarySearch;
