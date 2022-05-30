const fruits = () => {
    if (true) {
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "kiwi";   //Con var se pueden acceder elementos de la funcion
        console.log(fruits2);
    console.log(fruits3);
    }
    console.log(fruits1);   //Accede aun siendo declarado dentro de un if, solo si es var
}
//fruits();
//var se accede dentro de funcion
//let y const se acceden dentro del bloque

// let x = 1;
// {
//     let x = 2;  //Asigna un valor a la variable, el valor no se sustituye al ser let
//     console.log(x);
// }
// console.log(x);
//En var el valor se sobreescribe

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
        
    }
}
anotherFunction();