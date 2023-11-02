//Rotate an array by k times
//using anonymous function

const a=[1,2,3,4,5];

let k=2;

(function(array,k){
for(let i=0;i<k;i++){
    let b=array.pop();
    array.unshift(b);
}
console.log(a);
})(a,k)