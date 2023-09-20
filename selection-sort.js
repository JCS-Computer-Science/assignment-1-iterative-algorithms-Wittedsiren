function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	
	function setSmallest(from){
		let smallest = array[from]
		let smallestIndex = 0;
		for (let i = from; i < array.length; i++) {
			// console.log(array[i])
			if (array[i] < smallest){
				smallest = array[i]
				smallestIndex = i
			}
		}
		
		if (smallestIndex == 0 && array[0] < smallest){
			smallestIndex = array.length - 1
		}

		console.log(smallest, smallestIndex)
		let con = array[from]
		array[from] = smallest
		array[smallestIndex] = con
		console.log(array, from, array.length)
	}

	for (let i = 0; i < array.length; i++) {
		setSmallest(i)
	}

	console.log(array)

	return array;
}

selectionSort([54, 65, 4,3, 76, 5])

module.exports = selectionSort;
