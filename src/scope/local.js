const helloWorld = () =>{
    const hello = "Hello World";    //Variable en scope local
    //console.log(hello);
}
helloWorld();

//console.log(hello); //No se puede acceder a una variable fuera de la funcion

var scope = "Global Scope";     //variable local

const functionScope = () =>{
    var scope = "Local Scope";  //La variable local no toma el valor del global, ambito lexico
    const func = () =>{
        return scope;
    }
    console.log(func());
}
functionScope();
console.log(scope);