const numbers = [55, 25, 78, 69, 123, 47, 11, 2, 64, 98, 13, 48];


/*
*   Space complexity : O(1)
*
*   Time complexity =>  Best :      O(n)
*                       Average :   O(n^2)
*                       Worst :     O(n^2)
* */

function bubbleSort(array) {
    const length = array.length

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

console.log(numbers)
bubbleSort(numbers)
console.log(numbers)
