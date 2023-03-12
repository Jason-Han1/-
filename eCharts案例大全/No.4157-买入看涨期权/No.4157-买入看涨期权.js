const currentStockPrice = 50;
const strikePrice = 52;
const count = 100;

const min = 0;
const max = 100;

const data = []

function buyCallOption(stockPrice) {
    const profit = Math.max(stockPrice - strikePrice, (currentStockPrice - strikePrice))
    return profit * count
}

for (let i = min; i <= max; i++) {
    data.push([i, buyCallOption(i)])
}

console.log(data);

option = {
    darkMode: true,
    title: {
        text: '买入看涨期权'
    },
    xAxis: {
        type: 'value',
        data: [0, 25, 50, 100],
        min: 0,
        max: 100,
    },
    yAxis: {
        min: -200,
    },
    series: [{
        type: 'line',
        data
    }]
};