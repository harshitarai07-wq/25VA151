// loops

//for loop

let studentslist=["dia","goli","sweety","raj","satyam"];
for(let i=0;i<studentslist.length;i++){
    console.log(studentslist[i]);
}
// while loop
let i=0;
while(i<studentslist.length){
    console.log(studentslist[i]);
    i++;
}

//for... of loop : the values of iterable objects like array, string, map, set etc can be accessed using for of loop
for(let x of studentslist){
    console.log(x);
}

//for... in loop : iterates over the properties of an object. It is generally recommended for object rather then arrays.
for(let x in studentslist){
    console.log(studentslist[x]);
}