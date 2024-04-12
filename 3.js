// Write a JavaScript program that takes two arrays of integers as input. The program should find and print the sum of common elements between the two arrays. The arrays have unique elements.

// Test Cases:
// Input:
// length1= 4
// arr1 = [2, 4, 6, 8]

// length2= 4
// arr2 = [4, 8, 12, 16]
// Output: 12




const input = require("readline-sync")
 n = input.questionInt(" Enter size of array: ")


let a=[];let
 i=0;
while(n>i){
    a[i] = input.questionInt("Enter the number: ")
    
    i++
}

let y = input.questionInt(" Enter size of array: ")
let b=[];
m=0;
while(y>m){
    b[m]= input.questionInt("Enter the number: ")
    m++
}
let sum = 0;

for (i = 0; i < n; i++) {
    for ( m= 0; m<n; m++) {
        if (a[i] == b[m]) {
            sum = sum +b[m]
        }
    }
}
console.log(sum);