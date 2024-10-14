//task 1 
let for_num=''
for(let i=1 ; i<=10 ;i++){
    for_num += i + ' '
}
console.log(for_num);

// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 2 
let while_num=''
let i=1;
while(i<=10){
    while_num +=i + ' '
    i++;
}
console.log(while_num);

// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 3

let arr=[1,2,3,4,5,6]
let arr_num=''
for(let i=0 ; i<arr.length ; i++){
arr_num += arr[i]+ ' '
}
console.log(arr_num);


// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 4

let even_num='' 

for(let i=0 ; i<=10 ;i++){
    if(i%2==0)
        even_num += i + ' '
}
console.log(even_num);



// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 5 

let sum=0;

for(let i=1 ; i<=10 ; i++)
    sum +=i;

console.log(sum);

// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 6

let arr_larg=[1,2,3,4,5]
let larg_num=-9999999;
for(let i=0 ; i<arr_larg.length ; i++){
    if(arr_larg[i]>larg_num)
        larg_num=arr_larg[i]

}
console.log(larg_num);

// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 7

let arr_small=[1,2,3,4,5]
let small_num=9999999;
for(let i=0 ; i<arr_small.length ; i++){
    if(arr_small[i]<small_num)
        small_num=arr_small[i]

}
console.log(small_num);


// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 8

let arr_avg=[1,2,3,4,5]
let avg=0;

for(let i=0 ; i<arr_avg.length ;i++){
    avg +=arr_avg[i]/arr_avg.length
}
console.log(avg);


// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 9

let num=5 ;
let fact=1;

for( num ; num>1 ; num--){
    fact *= (num);
}
console.log(fact);



// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 10


function febnum(n){
    let feb=[0,1];
    for(let i=2 ; i<=n ; i++){
      feb[i]=feb[i-1]+feb[i-2];
    }
    return feb;
        
}
console.log(febnum(10));

// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 11
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  

  function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  // Example usage:
  let n = 20;
  printPrimes(n);
  