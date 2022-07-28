//doc constructor  Object constructor should start with uppercase letters, i.e. Dog not dog Global variables. 
function Dog(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}


function testObjects(){
    console.log("Test Objects");
//3 ways to create objects in JS

//1 -  Object Literal(easiest) {} open and close curly braces are an object literal and just start typing the fileds.  Is not resuable. will only work for one, if need another have to type a completely new or copy past.  Mainly used for configuration.
let lola = {
    name: "Lola",
    age: 3,
    color: "Pink"
};
 console.log(lola);

 //2 -  Object Contstructor  depends on function to create an object  Using function Dog(){}, very resulable.
let dog3 = new Dog("Trex",1,"Brown");
    console.log(dog3);

let dog4 = new Dog("Buster", 2, "Black");
    console.log(dog4);

//3 - creating objects with classes, most current useful way to create an object.
class Cat {
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    
    }
}
let cat1 = new Cat("Daisy",1, "white");
console.log(cat1);

}






//testing purposes only
testObjects();




