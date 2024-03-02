
/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
let nums = [0,1,0,3,12]
let arr1 = []
let arr2 = []

for(let i=0;i<nums.length;i++){
    if(nums[i]==0){
        arr1.push(nums[i])
    }else{
        arr2.push(nums[i])
    }
}

/*  
2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

let tempArray = [];
let index = 0;
function arrayIntersection(inputArrayOne, inputArrayTwo){

    for(let i=0;i<inputArrayOne.length;i++){
        if(inputArrayTwo.indexOf(inputArrayOne[i]) != -1){
            tempArray[index++] = inputArrayOne[i]
        }
    }
    console.log("Array Intersection: "+tempArray);
}

let inputOne = [4,9,5];
let inputTwo = [9,4,9,8,4];
arrayIntersection(inputOne,inputTwo);

/* 
3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/

let numArr = [34, 7, 21, 89, 54, 10, 91, 67]
let maxVal = 0
let minVal = 0
let maxPos = 0
let minPos = 0

function minMax(){
    maxVal = Math.max(...numArr)
    minVal = Math.min(...numArr)
}

function maxValuePosition(){
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]==maxVal){
            maxPos=i
        }
    }
    console.log(`Maximum Element: ${maxVal}, Index: ${maxPos}`)
}

function minValuePosition(){
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]==minVal){
            minPos=i
        }
    }
    console.log(`Minimum Element: ${minVal}, Index: ${minPos}`)
}


minMax()
maxValuePosition()
minValuePosition()

/* 
4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/

let DupArray = [];
function removeDuplicates(inputArray){
    for(let i=0;i<inputArray.length;i++)
    {
       if(!DupArray.includes(inputArray[i])){
        DupArray.push(inputArray[i]);
       }
    }
    console.log(DupArray);
}

let input = [1, 2, 3, 4, 2, 5, 6, 1, 6];
removeDuplicates(input);

/* -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
5) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3
*/

const numArray = [2,4,5,2,1,2]
const k = 2
let totalCount = 0
let count = numArray.length
for(let i =0;i<count;i++){
    if(numArray[i] == k)
    totalCount++;
}

console.log(`Number of occurence of ${k} in given array is ${totalCount}`)


const sort = [2,4,7,8,11,14]; // sort array !!
const target = 18;

for(let i=0; i<sort.length;i++){
    for(let j=i+1;j<sort.length;j++){
        if(sort[i]+sort[j]==target){
            console.log(`(${i},${j})`)
        }
    }
}