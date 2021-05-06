// Function that takes 10 digits and returns a string of the formatted phone number
// e.g.: 1234567890 -> (123) 456-7890

const formatPhoneNumber = (number) => {
    const numberString = number.toString()
    if ((numberString.length !== 10) || isNaN(numberString)) {
        // return "Invalid phone number."
        throw new TypeError('Invalid phone number.')
    }

    const arr = '(XXX) XXX-XXXX'.split('')
    Array.from(numberString).forEach( n => {
        arr[arr.indexOf('X')] = n
    })
    return arr.join('')
}

export { formatPhoneNumber }