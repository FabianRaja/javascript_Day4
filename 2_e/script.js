//Return all the palindromes in an array
//using arrow function

let data=["madam","mom","civic","radar","level","rotor","refer"]

let a=(array)=>{
    let result;
    for(let i=0;i<array.length;i++){
            result=array[i].split("").reverse().join("");
            console.log(result);
    }
    
}
a(data);