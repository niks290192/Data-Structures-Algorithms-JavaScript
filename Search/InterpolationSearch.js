/**
 * Interpolation Search
 * 
 * Time Complexity:
 * - Best Case: 0(1)
 * - Worst case: 0(n)
 * - 0((log(log(n)))) if the data are uniformly distributed
 * 
 * 
 */

function interpolation(arr, key) {
    const length = arr.length - 1
    let low = 0
    let high = length
    let position = -1 
    let delta = -1

    // Because the array is sorted the key must be between low and high
    while(low <= high && key >= arr[low] && key <= arr[high]) {
        delta = (key - arr[low]) / (arr[high] - arr[low])
        position = low + Math.floor((high - low) * delta)

        // Target found return its poition 
        if (arr[position] == key) {
            return position
        }

        // If the key is larger then it is in the upper part of the array
        if (arr[position] < key) {
            low = position + 1
            // If the key is smaller then it is in the lower part if the array
        } else {
            high = position - 1
        }
    }

    return -1
}

const array = [2, 6, 8, 10, 12, 14, 16, 18, 20, 22, 26, 34, 39]

console.log('Found at position: ' + interpolation(array, 2))
console.log('Found at position: ' + interpolation(array, 12))
console.log('Found at position: ' + interpolation(array, 1000))
console.log('Found at position: ' + interpolation(array, 39))