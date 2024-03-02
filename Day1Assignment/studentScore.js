/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/


let score="50";

function calculateGrade(){
    switch(true)
    {
       case (score > 99):
          console.log("Grade A");
          break;
       case (score > 75 && score < 80):
          console.log("Grade B");
          break;
       case (score > 50 && score <= 75):
          console.log("Grade C");
          break;
       case (score < 60):
          console.log("Fail");
          break;
       default:
          console.log("Check your input");
    }
 }
 

 calculateGrade();


