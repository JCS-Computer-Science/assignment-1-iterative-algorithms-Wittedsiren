function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

    for (let i = 0; i < array.length; i++) {
        for (let beforeElement = 0; beforeElement < array.length - i - 1; beforeElement++) {
            if (array[beforeElement] > array[beforeElement + 1]){
                let prev = array[beforeElement]
                array[beforeElement] = array[beforeElement + 1]
                array[beforeElement + 1] = prev
            }
        }
    }
	return array;
}

module.exports = bubbleSort;
