/* 
  * What is a palindrome? https://en.wikipedia.org/wiki/Palindrome
  * Receives a string and returns whether it can be rearranged to become a palindrome or not.
  * The string can only be palindrome if the count of ALL characters is even or if the ONLY ONE character count is odd
  * Input is a String
  *
*/

const palindromeRearranging = (str) => {
    //check that input is a string
    if (typeof str !== 'string') {
        return 'Not a string'
    }

    // Check if the string is empty

    if(str.length === 0) {
        return 'Empty string'
    }

    // First obtain the character count for each character in a string and store it in a object.
    // Filter the object's value to only the odd character counts.
    const charCounts = [...str].reduce((counts, char) => {
        counts[char] = counts[char] ? counts[char] + 1 : 1
        return counts
    }, {})
    //If the length of the resulting array is 0 or 1, the string can be palindrome.
    return Object.values(charCounts).filter(count => count % 2 !== 0).length <= 1 
}

//Testing
console.log(palindromeRearranging('aaeccrr')) // true
console.log(palindromeRearranging('leve')) // false