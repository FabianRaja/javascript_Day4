//Remove Duplicates From an Array
//using immediate invoke function

let a=[1,2,3,4,5,3,2,9,5,10];


(function(arr){
    const a=new Set(arr);
    //automatically removes the duplicates and stores it as an object of entries
    console.log(Array.from(a));
    //this method is to get back the entries to array form
})(a);


