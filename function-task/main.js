//task 1
function findSmallest(arr){
    let small=999999999
for(let i=0 ; i<arr.length ; i++){
    if(small>arr[i]){
       small=arr[i];    }
    
}

return small;
}

console.log(findSmallest([-20,5,67,97,123]));

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// task 2
function AlphabeticalOrder(word) {
    return word.split("")
               .sort() 
               .join("");
              
}
console.log(AlphabeticalOrder("hello"));


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//task 3

    function fact(num){
        let ff=num;
        for(let i=num; num>1;num--){
            ff *=(num-1);
        }
        return ff;
    }

 let bb=8;
    console.log(fact(bb));




// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// task 4 
function evenOrOod(num){
    if(num%2==0 && num != 0 )
        return "even"
    else if (num%2 != 0)
        return "odd"
    else
        return 'number is zero'
    
    
}

console.log(evenOrOod(0));




// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//task 5

function evenArr1(arr){


    for( let i=0 ; i<arr.length; i++){
        if(arr[i]%2 != 0)
            delete arr[i];
    }
    return arr;

}
console.log(evenArr1 ([1,2,3,4,5,6,7,8,9]));


//task 5 agin
function evenArr(arr){
     return   arr.filter(num => num%2==0)
}
console.log(evenArr([1,2,3,4,5,6,7,8,9]));
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// task 6

function numbersOnly(arr){
    // for(let i=0 ; i<arr.length ; i++){
    //     if(typeof arr[i] === "string")
    //          delete arr[i];
    //}
    return arr.filter(element => typeof element !== 'string');
            
}
console.log(numbersOnly(['sss',2,'sdc',222]));


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// task 7
 

function addUp(num){
            let ff=num;
            for(let i=num; num>1;num--){
                ff +=(num-1);
            }
            return ff;
        }
    
     
        console.log(addUp(8));


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//task 8 
function minMaxLengthAverage(arr){
    let min=99999999;
    let max =-999999;
    let avg=0 ; 
    let len=arr.length;

    for(let i=0; i<arr.length ; i++){
            
        if(arr[i]<min){
                min=arr[i];
            }
          
        if(arr[i]>max){
                max=arr[i];
            }
     
        avg += arr[i]/ len;
    }

     return arr=[min , max ,len ,avg]
}

console.log(minMaxLengthAverage([7,13,3 ,77,100]));


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// task 9

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// task 10


function countWord(text) {
    let count=text.split(/\s+/).length;
    return count;
}
console.log(countWord("hello from CodingAcademy!"));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task 11

function multiplyByLength(arr){
    for(let i=0 ; i<arr.length ;i++){
        arr[i] *=arr.length;
    }
    return arr ;
}
console.log(multiplyByLength([4,2,5]));



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

 //task 12


 function checkEnding( str1 , str2){

   return str1.charAt(str1.length-1)==str2.charAt(str2.length-1);


}

let str1='omar'
let str2='mohammr' 
console.log(checkEnding(str1 , str2));

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

 //task 13 



function doubleChar(str){
   
    let rep='' ;   
    for(let i=0 ; i<str.length ; i++){
       rep += str[i].repeat(2);
    }
    return rep; 
 
}
console.log(doubleChar ('coding'));



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

 //task 14

function findIndex (arr , srch){
    for(let i=0 ; i<arr.length ;i++)
        if (arr[i]===srch)

        
        
    return i ;
}

let arr=['Ali', 'Mazen', 'Ayham', 'Murad',2,3,4,5,6,7,8,9,44];

console.log(findIndex (arr , 3));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

 //task 15

function getAbsSum(arr){
    let sum=0;
    for(let i=0 ; i<arr.length;i++){
        sum += arr[i];
    }

    return Math.abs(sum);


}
console.log(getAbsSum([-1,-2,-3,-5,-6]));
