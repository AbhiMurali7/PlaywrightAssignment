/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

let stringVal1 = "Hello World"
let stringVal2 = "   fly me   to   the moon  "

function stringLength (value){
    value = value.trim()
    let valueArray = value.split(" ")
    return (valueArray[valueArray.length-1]).length
}

console.log(stringLength(stringVal1))
console.log(stringLength(stringVal2))

/*
Example 3:
Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false
*/
let val1 = ["listen","silent"]
let val2 = ['hello','world']

function isAnagram(inputValue){
    let anagram = false
    if(inputValue[0].length == inputValue[1].length){
        let val1 = (inputValue[0])
        let val2 = (inputValue[1])
        val1 = sortString(inputValue[0])
        val2 = sortString(inputValue[1])
        if(val1 === val2)
        anagram = true
    }
    return anagram
}
function sortString(givenName){
    let splitName = givenName.split("")
    splitName.sort()
    let final = splitName.join("")
    return final
    }

console.log(val1 + " is Anagram : " + isAnagram(val1))
console.log(val2 + " is Anagram : " + isAnagram(val2))

/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

let inputPal='madam'
let revOfPal=''
let palArr=inputPal.split("")
let palLen=palArr.length

function palindromeOrNot(){
    for(let i=palLen-1;i>=0;i--){
        revOfPal=revOfPal+palArr[i]
    }
    if(inputPal.toLowerCase()===revOfPal.toLowerCase()){
        console.log(`true`)
    }else{
        console.log(`false`)
    }
}

palindromeOrNot()