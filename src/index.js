// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let existingMoney = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    let exchange = {};

    if (currency <= 0) {
        return {};
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    for (let key in existingMoney) {

        let floor = Math.floor(currency / existingMoney[key]);
        currency = currency - floor * existingMoney[key];
        if (floor) {
            exchange[key] = floor;
        }
    }
    return exchange;
}