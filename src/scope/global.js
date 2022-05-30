//variables globales
var hello = "hello";
let world = "hello world";
const helloworld = "Hello World!";

const anotherfunction = () =>{  //Se tiene acceso a las variables globales
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}
anotherfunction();

const helloWorld = ()=>{
    globalVar = "global";
}
helloWorld()
console.log(globalVar);     //Se tiene acceso a la variable

const anotherfunction2 = () =>{
    var localVar = globalVar = "Global xD"
}
anotherfunction2();
console.log(globalVar);     //Nuevamente se tiene acceso a la variable
