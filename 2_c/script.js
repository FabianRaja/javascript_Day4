//sum of all numbers in an array
//using arrow function

const array=[1,2,3,4,5,6,7,8,9,10,20];

//expected output = 75

let a=()=>{
    let value=0;
    for(let i=0;i<array.length;i++){
        value=array[i]+value;
        
    }
    console.log("Sum of array : "+value);
}
a();