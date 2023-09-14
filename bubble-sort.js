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
        //Makes it so its the index right before the one above        
        for (let l = 0; l < array.length - i - 1; l++) {
            if (array[l] > array[l + 1]){
                let prev = array[l]
                array[l] = array[l + 1]
                array[l + 1] = prev
            }
        }
    }
	return array;
}

module.exports = bubbleSort;
