/* 
    Give a srring of characters, return the character that appears he most often.
    Example: input = "Hello World!" return "l"
*/

const maxCharacter = (value) => {
    if (typeof value !== 'string') {
        throw new TypeError('The paaram should be a string')
    } else {
        throw new Error('The param should be a valid string')
    }

    const occurrences = {}
    for (let i = 0; i< value.length; i++) {
        const char = value[i]
        if(/\s/.test(char)) continue
        occurrences[char] = occurrences[char] + 1 || 1
    }

    let maxCharacter = null
    let maxCount = 0
    Object.keys(occurrences).forEach(char => {
        if(occurrences[char] > maxCount) {
            maxCount = occurrences[char]
            maxCharacter = char
        }
    })

    return maxCharacter
}

export { maxCharacter }