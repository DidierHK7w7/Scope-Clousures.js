// const moneyBox = (coins) => {
//     var saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: ${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(10);

//Funcion con closure
const moneyBox1 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins;
}
let myMoneyBox1 = moneyBox1();
myMoneyBox1(4);     //4
myMoneyBox1(6);     //10
myMoneyBox1(10);    //20
