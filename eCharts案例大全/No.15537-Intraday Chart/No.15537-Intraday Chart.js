function randInt(range) {
    return parseInt(range * Math.random());
}
function genData(origin, step, length) {
    const res = [];
    for (let i = 0; i < length; i ++) {
        origin += step[randInt(step.length)];
        origin = Math.abs(origin);
        res.push([i, origin]);
    }
    return res;
}
function calcPnlAndPos(orders, price) {
    return orders.reduce(
        (prev, cur) => [
            prev[0] + cur[2] * (price - cur[1]),
            prev[1] + cur[2]
        ],
        [0, 0]
    );
}

const data = {};
const length = 600;
data.price = genData(3210, [-5, 0, 5], length);
data.vol = genData(20, [-1, 0, 1], length);
data.bidVol = genData(20, [-1, 0, 1], length);
data.askVol = genData(20, [-1, 0, 1], length);
data.bidPrice = data.price.map(
    ([time, value]) => [time, value + 5 * randInt(2)]
);
data.askPrice = data.price.map(
    ([time, value]) => [time, value - 5 * randInt(2)]
);

let com = 0;
const comRate = 0.001;
data.com = [[0, 0]];
data.orders = [];
data.pnl = [[0, 0]];
data.npnl = [[0, 0]];
data.pos = [[0, 0]];
for (let i = 1; i < length; i ++) {
    if (data.price[i][1] > data.price[i - 1][1]) {
        data.orders.push([data.price[i][0], data.price[i][1], 1]);
        com += data.price[i][1] * comRate;
    } else if (data.price[i][1] < data.price[i - 1][1]) {
        data.orders.push([data.price[i][0], data.price[i][1], -1]);
        com += data.price[i][1] * comRate;
    }
    data.com.push([i, com]);
    let [pnl, pos] = calcPnlAndPos(data.orders, data.price[i][1]);
    data.pnl.push([i, pnl]);
    data.npnl.push([i, pnl - com]);
    data.pos.push([i, pos]);
}

option = {
    title: {
        text: 'Intraday Chart',
        x: 'center',
        y: 0
    },
    dataZoom: [
            {
                id: 'dataZoomX',
                type: 'slider',
                xAxisIndex: [0, 1, 2],
                filterMode: 'filter',
                start: 0,
                end: 100,
                zoomLock: false,
            }, {
                type: 'inside',
            },
        ],
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            animation: false,
        },
    },
    grid: [
        {x: '7%', y: '7%', width: '85%', height: '20%'},
        {x: '7%', y: '32%', width: '85%', height: '30%'},
        {x: '7%', y: '67%', width: '85%', height: '25%'}
    ],
    xAxis: [
        {gridIndex: 0},
        {gridIndex: 1},
        {gridIndex: 2},
    ],
    yAxis: [
        {gridIndex: 0, boundaryGap: ['10%', '10%']},
        {gridIndex: 0, boundaryGap: ['10%', '10%']},
        {gridIndex: 1, boundaryGap: ['10%', '10%'], scale: true},
        {gridIndex: 2, min: 0, max: 100},
        {gridIndex: 2, min: -100, max: 50},
        {gridIndex: 2, min: -50, max: 100, inverse: true, show: false}
    ],
    series: [
        {
            name: 'pnl',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            showSymbol: false,
            hoverAnimation: false,
            data: data.pnl
        },
        {
            name: 'commission',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            showSymbol: false,
            hoverAnimation: false,
            data: data.com
        },
        {
            name: 'net pnl',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            showSymbol: false,
            hoverAnimation: false,
            data: data.npnl
        },
        {
            name: 'position',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 1,
            data: data.pos
        },
        {
            name: 'orders',
            type: 'scatter',
            xAxisIndex: 1,
            yAxisIndex: 2,
            symbolSize: (value, params) => Math.abs(value[2]) * 4,
            itemStyle: {
                normal: {
                    color: ({ data }) => data[2] > 0 ? 'red' : 'green'
                }
            },
            hoverAnimation: false,
            data: data.orders
        },
        {
            name: 'price',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 2,
            showSymbol: false,
            hoverAnimation: false,
            data: data.price
        },
        {
            name: 'bid price',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 2,
            showSymbol: false,
            hoverAnimation: false,
            data: data.bidPrice,
        },
        {
            name: 'ask price',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 2,
            showSymbol: false,
            hoverAnimation: false,
            data: data.askPrice,
        },
        {
            name: 'volume',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 3,
            data: data.vol
        },
        {
            name: 'bid volume',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 4,
            data: data.bidVol
        },
        {
            name: 'ask volume',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 5,
            data: data.askVol
        }
    ]
};