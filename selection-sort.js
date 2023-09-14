function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	
	function getSmallest(from){
		let smallest = array[from]
		console.log(from)
		console.log("---")
		for (let i = from; i < array.length - from; i++) {
			console.log(array[i])
			if (array[i] < smallest){
				console.log(array[i])
				smallest = array[i]
			}
		}
		return [smallest];
	}

	let newArray = []
	for (let i = 0; i < array.length; i++) {
		newArray.push(getSmallest(i))
	}

	console.log(newArray)

	return array;
}

selectionSort([54, 65, 4,3, 76, 5])

module.exports = selectionSort;
