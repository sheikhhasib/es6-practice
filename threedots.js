let age = [12,23,45,66,25,78,96];
let age1 = [1,2,3,4,5,6,7];
let age2 = [26,45,7,5,25,15,45,54,56];
let result = [...age,...age1,10,...age2];


let business = 563;
let minister = 1542;
let shosib = 1111;

let takapoisa = [111,122,123];
// let toprich = Math.max(business,minister,shosib);
let toprich = Math.max(...takapoisa);
console.log(toprich); 