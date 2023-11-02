//Return all the prime numbers in an array
//using immediate invoke function

const array=[8,10,11,20,13,17,20,19,15,40,43,74,80];

(function(){
for(let i=0;i<array.length;i++){
    if(array[i]%2==0 || array[i]%3==0 || array[i]%5==0 || array[i]%7==0){
        
    }else{
         console.log(array[i]);
    }

}
})();