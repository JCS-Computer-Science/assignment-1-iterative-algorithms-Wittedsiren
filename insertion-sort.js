function insertionSort(array) {
	let sortedArrayIndex = 1;
	let sort = function(from){
		if (array[from] < array[from - 1]){
			swap(array, from, from - 1);
		} 
		if (from - 1 > 0){ sort(from - 1); }
	};

	let swap = function(array, i1, i2){
		let firstIndex = array[i1];
		array[i1] = array[i2];
		array[i2] = firstIndex;
	};

	for (let i = 1; i < array.length; i++) {
		let a = sortedArrayIndex;
		if (array[a] > array[a + 1]){ swap(array, a, a + 1); }  
		sort(sortedArrayIndex);
		sortedArrayIndex ++ ;
	}

	return array;
}

module.exports = insertionSort;
