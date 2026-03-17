
//if..............
let age=22;
if(age<18){
    console.log("not eligible for vote casting");
}
console.log("eligible for vote casting");

//if else.....
let myAge=8;
if(myAge>=18){
    console.log("you can do vote casting");
}
else{
    console.log("wait for next time");
}

//switch statement: evaluates an expression and executes the code of block of the matching case value.
let grade='A';
switch(grade){
    case 'A': result="First Division";
    break;
    case 'B': result="Second Division";
    break;
    case 'C': result="Third Division";
    break;
    default: result="Fail";
}
console.log(result);

//else if statement: it is used to specify a new condition to test, if the first condition is false.

let marks=32;
if(marks<=33){
    console.log("Grade Third");
}
else if(marks>33 && marks<=60){
    console.log("Grade Second");
}
else 
{console.log("Grade First");

}