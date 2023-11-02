//Convert the strings to title caps in a string array
//using arrow function


let name=["fabian"];
console.log(name)

let caps=(array)=>{
    let c=[];
   let a=array[0].split("");
    let b=a[0].toUpperCase();
    a.shift();
   a.unshift(b);
   console.log(...a);
}
caps(name);