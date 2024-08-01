const {sum} = require('./app.js');

test('add 14 + 9 to equal 23', () => {
    expect(sum(14,9)).toBe(23);
});

test('One euro should be 1.07 dollars', () => {
    const {fromEuroToDollars} = require('./app');
    const dollars = fromEuroToDollars(3.5)
    let expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
})

test('One dollar should be 146.26 yens',() => {
    const { fromDollarToYen } = require('./app');
    let yen = 10 * 146.26
    expect(fromDollarToYen(10)).toBe(yen);
})

test('1 yen should be 0.0056 pounds', () => {
    const { fromYenToPound } = require('./app');
    expect(fromYenToPound(1000)).toBe(5.5591)
})