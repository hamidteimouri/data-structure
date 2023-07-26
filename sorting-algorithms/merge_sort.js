const numbers = [55, 25, 78, 69, 123, 47, 11, 2, 64, 98, 13, 48];


/*
*   Space complexity : O(n)
*
*   Time complexity =>  Best :      O(n log(n))
*                       Average :   O(n log(n))
*                       Worst :     O(n log(n))
* */

function mergeSort(array) {
    const length = array.length

    if (length === 1) {
        return array
    }

    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )


}

function merge(left, right) {

    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    console.log("==================== Start ======================")
    console.log("left : " + left)
    console.log("right : " + right)

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            console.log(left[leftIndex] + " pushed to the left")
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            console.log(right[rightIndex] + " pushed to the right")
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    console.log(" -- left result : " + left)
    console.log(" -- right result : " + right)
    console.log("==================== End ======================")

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(numbers)
const answer = mergeSort(numbers)
console.log("answer :" + answer)
