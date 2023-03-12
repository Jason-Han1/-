data = [
    ["2017-06-05", 116],
    ["2017-06-06", 129],
    ["2017-06-07", 135],
    ["2017-06-08", 86],
    ["2017-06-09", 73],
    ["2017-06-10", 85],
    ["2017-06-11", 73],
    ["2017-06-12", 68],
    ["2017-06-13", 92],
    ["2017-06-14", 130],
    ["2017-06-15", 245],
    ["2017-06-16", 139],
    ["2017-06-17", 115],
    ["2017-06-18", 111],
    ["2017-06-19", 309],
    ["2017-06-20", 206],
    ["2017-06-21", 137],
    ["2017-06-22", 128],
    ["2017-06-23", 85],
    ["2017-06-24", 94],
    ["2017-06-25", 71],
    ["2017-06-26", 106],
    ["2017-06-27", 84],
    ["2017-06-28", 93],
    ["2017-06-29", 85],
    ["2017-06-30", 73],
    ["2017-07-01", 83],
    ["2017-07-02", 125],
    ["2017-07-03", 107],
    ["2017-07-04", 82],
    ["2017-07-05", 44],
    ["2017-07-06", 72],
    ["2017-07-07", 106],
    ["2017-07-08", 107],
    ["2017-07-09", 66],
    ["2017-07-10", 91],
    ["2017-07-11", 92],
    ["2017-07-12", 113],
    ["2017-07-13", 107],
    ["2017-07-14", 131],
    ["2017-07-15", 111],
    ["2017-07-16", 64],
    ["2017-07-17", 69],
    ["2017-07-18", 88],
    ["2017-07-19", 77],
    ["2017-07-20", 83],
    ["2017-07-21", 111],
    ["2017-07-22", 57],
    ["2017-07-23", 55],
    ["2017-07-24", 60]
];

var dateList = data.map(function(item) {
    return item[0];
});
var valueList = data.map(function(item) {
    return item[1] / 1500 + 1.18;
});

var sentimentList = data.map(function(item) {
    return (item[1] - 150 + (Math.random() - 0.5) * 200) / 2;
});

var pridictList = data.map(function(item) {
    var value = Math.random() * 5 - 2.5
    return Math.floor(Math.abs(value)) * Math.sign(value);
});

option = {

    // Make gradient line here
    visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400,
        color: ['#f6efa6', '#d88273', '#bf444c']
    }, {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        min: 100,
        max: -100,
        color: ['#f6efa6', '#d88273', '#bf444c']
    }, {
        show: false,
        type: 'continuous',
        seriesIndex: 2,
        min: -2,
        max: 2,
        color: ['#f6efa6', '#d88273', '#bf444c']
    }],


    title: [{
        top: '10%',
        left: 'center',
        text: 'Market Data Series (Some Currency)'
    }, {
        top: '42%',
        left: 'center',
        text: 'Sentiment Data Series'
    }, {
        top: '72%',
        left: 'center',
        text: 'AI Prediction Series'
    }],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        data: dateList,
        gridIndex: 0
    }, {
        data: dateList,
        gridIndex: 1
    }, {
        data: dateList,
        gridIndex: 2
    }],
    yAxis: [{
        gridIndex: 0,
        min: 1.1
    }, {
        gridIndex: 1
    }, {
        gridIndex: 2
    }],
    grid: [{
        top: '10%',
        bottom: '66%'
    }, {
        top: '42%',
        bottom: '36%'
    }, {
        top: '72%'
    }],
    series: [{
        type: 'line',
        showSymbol: false,
        data: valueList
    }, {
        type: 'line',
        showSymbol: false,
        data: sentimentList,
        xAxisIndex: 1,
        yAxisIndex: 1
    }, {
        type: 'bar',
        showSymbol: false,
        data: pridictList,
        xAxisIndex: 2,
        yAxisIndex: 2
    }]
};