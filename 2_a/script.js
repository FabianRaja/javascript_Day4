//Print odd numbers in an array
//using arrow function

const array=[1,2,3,4,5,6,7,8,9,10];

let odd=()=>{
    console.log("Odd numbers are ...")
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i]);
        }
    }
}
odd();