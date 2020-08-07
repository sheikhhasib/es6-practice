// function doubleit(num){
//     return num * 2; 
// }

// let doubleit = function(num){
//     return num * 2;
// }


let doubleit = num => num * 2;  
let add = (x,y) => x+y;
let giveFive = () => 5; 

const doMath = (x,y) =>{
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
};

let result = add(5,12);
let result2 = giveFive();
let result3 = doMath(6,5);
console.log(result3);