var myBirthSins = 1996;
let programmingHero = 'programming hero';
const todayRain = true;

if (true) {
    var myBirthSins = 1996;
    myBirthSins = 2000;
    console.log(myBirthSins);
    let programmingHero = 'programming hero';
    console.log(programmingHero);
    const todayRain = true;
    console.log(todayRain);
    todayRain = norain;

}


// assignment
/*---problem-1----*/
// Problem Number 01 Solve
function seerToMon(seer) {
    var mon = seer / 40;
    return mon;
}
var seerAmount = 167;
var seerAmountToConvertMon = seerToMon(seerAmount);
console.log(seerAmountToConvertMon);
/*-----problem-2----*/
function totalSales(totalShirt, totalPants, totalShoes) {
    const shirt = 100;
    const pants = 200;
    const shoes = 500;

    if (typeof totalShirt != 'number' || typeof totalPants != 'number' || typeof totalShoes != 'number') {
        return 'enter number';
    }
    else {
        const totalShirtPrice = shirt * totalShirt;
        const totalPantsPrice = pants * totalPants;
        const totalShoesPrice = shoes * totalShoes;


        const total = totalShirtPrice + totalPantsPrice + totalShoesPrice;
        return total;
    }

}