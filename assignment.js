// Problem Number 01 Solve
function seerToMon(seer) {
    var mon = seer / 50;
    return mon;
}
var seerAmount = 244;
var seerAmountToConvertMon = seerToMon(seerAmount);
// console.log(seerAmountToConvertMon);

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
let totalFishon = (100, 200, 500);
var total = totalSales(totalFishon);
console.log(total);