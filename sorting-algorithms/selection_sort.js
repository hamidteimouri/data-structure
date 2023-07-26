const numbers = [55, 25, 78, 69, 123, 47, 11, 2, 64, 98, 13, 48];


/*
*   Space complexity : O(1)
*
*   Time complexity =>  Best :      O(n^2)
*                       Average :   O(n^2)
*                       Worst :     O(n^2)
* */

function selectionSort(array) {
    const length = array.length

    for (let i = 0; i < length; i++) {
        let min = i;
        let temp = array[i]
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                // update min if current is lower than what we had previously
                min = j;
            }
        }
        array[i] = array[min]
        array[min] = temp
    }
    return array
}

console.log(numbers)
selectionSort(numbers)
console.log(numbers)
