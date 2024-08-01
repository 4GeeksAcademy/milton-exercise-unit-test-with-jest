let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function sum(a, b){
    return a + b;
}

function fromEuroToDollars(euro) {
    const dollar = euro * oneEuroIs.USD;
    return dollar;
}

function fromDollarToYen(usd){
    const valueInEuro = usd / oneEuroIs.USD;
    const yen = valueInEuro * oneEuroIs.JPY;
    return yen.toFixed(1);
}

function fromYenToPound(yen){
    const valueInEuro = yen / oneEuroIs.JPY;
    const pound = valueInEuro * oneEuroIs.GBP;
    return Number(pound.toFixed(4));
}

console.log(fromEuroToDollars(10))

console.log((fromDollarToYen(10)))

console.log(fromYenToPound(1))

module.exports = { sum, fromEuroToDollars, fromDollarToYen, fromYenToPound};