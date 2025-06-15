// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("Kood raha hoon")
    }
}

class Lion extends Animal {
    constructor(name){
        super(name) 
        console.log("Object is created and he is a lion...")
    }
 
    eats(){
        super.eats()
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)


class User{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            throw new Error("Name is too short")
        }
        this._name = value;
    }
}

let user = new User("Hary");
console.log(user.name);
