function selectionSort(array) {
	function setSmallest(from){
		let smallest = array[from];
		let smallestIndex = from;
		for (let i = from; i < array.length; i++) {
			if (array[i] < smallest){
				smallest = array[i]; 
				smallestIndex = i;
			}
		}

		let con = array[from];
		array[smallestIndex] = con;
		array[from] = smallest;
	}

	for (let i = 0; i < array.length; i++) {
		setSmallest(i);
	}

	return array;
}

module.exports = selectionSort;
