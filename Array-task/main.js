//task 1

let arr=[1,2,3,4,5,6,7];
arr.forEach(printcl);

function printcl(number){
    console.log(number);
}

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 2 

let arr1=[1,2,3,4,5];
let newarr=arr1.map(number => number*2)

console.log(newarr);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 3

 let arr2=[1,2,3,4,5,6,7,8,9]

 let newarr2=arr2.filter(number => number%2==0)
 console.log(newarr2);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 4


const arr3 = [1, 2, 3, 4, 5]; 


console.log(arr3.reduce((total , ind) => total + ind)); 


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 5

let arr4=['banana' , 'orange' , 'chery','appele']

console.log(arr4.sort());

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 6

let arr5=['banana' , 'orange' , 'chery','appele']

console.log( arr5.reverse());

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 7

let arr6=[1,2,3]
let arr7=[4,5,6]

let concatArr=arr6.concat(arr7);
console.log(concatArr);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 8
let arr8=[1,2,3,4,5,6];

console.log (arr8.slice(0,2)+","+arr8.slice(4,6));




// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 9
let arr9=[1,2,3,4,5];
let removed=arr9.splice(1,1);
console.log(removed);



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 10
let arr10=[1,2,3,4,5];
console.log( arr10.indexOf(1));


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 11

let arr11=[1,2,3,4,5];

console.log( arr11.join(','));

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 12

let arr12=[1,2,3,4,5];

console.log(arr12.length);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 13

let arr13=[1,2,3,4,5];
for(let i=0;i<arr13.length;i++){
    console.log(arr13[i]);
}
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 15

let arr15=[1,2,3,4,5];
console.log(Array.isArray(arr15));
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 16






   







