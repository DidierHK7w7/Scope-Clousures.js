const fruits = () =>{
    var fruit = "apple";
    console.log(fruit);
}
fruits();

const anotherfunction = () => {
    var x = 1;
    var x = 2;      //var puede ser sobrescrita
    //let y = 1;
    let y = 2;      //let no puede ser sobreescrita
    console.log(x);
    console.log(y);
}
anotherfunction();