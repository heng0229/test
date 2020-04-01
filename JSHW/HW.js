var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];
var total = 0;

for (let i = 0; i < Prices.length; i++) {
    const element = Prices[i] * 1.05;
    total += element;
}
console.log(total);

var CarsPrices = [Cars, Prices];
var total2 = 0;
console.log(CarsPrices);
for (var i = 0; i < CarsPrices.length; i++) {
    for (var j = 0; j < CarsPrices[i].length; j++) {

        const element = CarsPrices[i][j] * 1.05;
        if (!isNaN(element)) {
            total2 += element;
        }
    }
}
console.log(total2);

function getRandomInt() {
    return Math.floor(Math.random() * 100+1);
}
var i=getRandomInt();
console.log(i);