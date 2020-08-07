const person = { name: 'jack william', age : 18, job : 'facebooker' , gfName : 'Ema Watson', address : 'kushtia ,Dhaka', friends : ['salim khan','masum islam','ruhul amin'],phone : 01704417973 };

const {name, phone,address } = person;
// console.log(name,phone,address);


const complexObj = {
    name:"hasu rahman",
    info:{
        address : 'lalbazar',
        leader : 'tiger'
    }
}

const {leader} = complexObj.info;
console.log(leader);