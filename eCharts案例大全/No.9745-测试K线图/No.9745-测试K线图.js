option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [{
        type: 'candlestick',
        data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42]
        ],
        itemStyle:{
            color: 'skyblue',
            color0: 'red'
        }
    }]
};
