let getZerosCount = (number, base) => {
    const primesArr = [];
    for (let i = 2; i <= base; i++) {
        while (base % i === 0) {
            primesArr.push(i);
            base /= i;
        }
    }

    const exponents = {};
    primesArr.forEach(function(item) { exponents[item] = (exponents[item] || 0) + 1 });

    const shortPrimesArr = Object.keys(exponents);
    const zeroCount = [];

    for (let a = 0, factorsLength = shortPrimesArr.length; a < factorsLength; a++) {
        let dividersCount = 0;
        let currentItem = shortPrimesArr[a];

        for (let i = currentItem; i <= number; i = i * currentItem) {
            dividersCount += Math.floor(number / i);
        }

        dividersCount /= exponents[currentItem];
        zeroCount.push(Math.floor(dividersCount));
    }
    return Math.min( ...zeroCount );
}

module.exports = getZerosCount;