function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		function checkPrev(){
			let inFront = array[index + 1];
			if (element > inFront ) {
				array[index + 1] = element
				array[index] = inFront
				checkPrev()
			}
		}
		checkPrev();	
	}
	console.log(array)

	return array;

	
		// const element = array[index];
		// //If not the first number
		// (index == 0) ? function(){
		// 	//function to check if the one before is bigger
		// 	let checkPrev = function(){

		// 		let prev = array[index - 1];
		// 		(element < prev) ? function(){
		// 			array[index - 1] = element
		// 			array[index] = prev
		// 			checkPrev()
		// 		} : false
		// 	}
			
		// 	checkPrev()

		// } : false
}

insertionSort([30, 3, 4 ,2])

module.exports = insertionSort;
