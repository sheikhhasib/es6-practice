class Parent{
    constructor(){
        this.fatherName = "Nabir uddin shekh";
    }
}

class Child extends Parent{
    constructor(baby){
        super();
        this.name = baby;
    }
    getfullname(){
        return `my name is ${this.name} . my father name is ${this.fatherName}`;
    }
}

const baby = new Child("santo");
console.log(baby.getfullname());