const numbers = [55, 25, 78, 69, 123, 47, 11, 2, 64, 98, 13, 48];


/*
*   Space complexity : O(1)
*
*   Time complexity =>  Best :      O(n^2)
*                       Average :   O(n^2)
*                       Worst :     O(n^2)
* */

function insertionSort(array) {
    const length = array.length

    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // move number to the first position
            array.unshift(array.splice(i, 1)[0])
        } else {
            // find where number should go
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    // move number to the right spot
                    array.splice(j, 0, array.splice(i, 1)[0])
                }
            }
        }
    }
    return array
}

console.log(numbers)
insertionSort(numbers)
console.log(numbers)
