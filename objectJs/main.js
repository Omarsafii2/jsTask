//1. Create an object called student with properties name, age, and gender.and print its properties.
let student = {
    name: "ahmad",
    age: 22,
    gender: "male"
    
};

console.log(student.name, student.age, student.gender);


//2

student.address = "amman";

console.log(student.name, student.age, student.gender, student.address);

//3

hobbies = "hobbies";
student [hobbies]={
    sport: "cricket",
    music: "bollywood"
};



console.log(student.name, student.age, student.gender, student.address, student.hobbies);

//4
console.log(student.name);
//5
console.log(student['age']);
//6
for (let key in student) {
    console.log(key,": ", student[key]);
}
//7

 console.log(Object.keys(student));

 //8

 console.log(Object.values(student));

 //9
 console.log(Object.entries(student));


 //10
 let student1={
    name:"ahmad",
    age:22,
    

    };
 let studentfull={ 
    
    gender:"male"

    };

    console.log(Object.assign(student1,studentfull));

//11

Object.freeze(student1);
student.born = 1990;
console.log(student1);

//12

Object.seal(student);
student.born = 1990;
console.log(student);
