
let student={
    name:"picu",
    age:15,
    isMarried:false,
    address:{
        streetNo:12,
        area:"Preet Vihar",
        city:"delhi",
        pinCode:110091,
        country:"india"
    },
    class:"11th",
    stream:"PCM",
    year:2025,
    getinfo:function(){
        return "My education detail is"+ student.class + " "+ student.stream + " " + student.year;
    },
    subjects:["maths","physics","english","chemistry"],
    examDone:null
    };
    //access  obkect's keys and properties 
    console.log(student.address.city);//object
    console.log(student.getinfo());//function
    console.log(student.subjects[2]);//array
    //console.log(typeof(student));
    
    //find any key in the object
    console.log("name" in student);

    //delete a key from object
    console.log(delete student.name);
    console.log(student);

    //find the length of object
    let keysLength=Object.keys(student);
    console.log(keysLength.length);


    //iterrate object's keys(properties) using for in loop
    for(let x in student){
        console.log(student[x]);
    }

    //create an object using 
    let myinfo = new Object();
    myinfo.name="jiya";
    myinfo.age=20;
    myinfo.city="delhi";
    myinfo.address=null;
    myinfo.mob=876456789;

    //access object's keys using []
    console.log(myinfo['name']);


    










