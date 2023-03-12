data = [
    ["2000-06-05", 150],
    ["2000-06-06", 150],
    ["2000-06-07", 150],
    ["2000-06-08", 150],
    ["2000-06-09", 100],
    ["2000-06-10", 200],
    ["2000-06-11", 100],
    ["2000-06-12", 20],
    ["2000-06-13", 300],
    ["2000-06-14", 150],
    ["2000-06-15", 150],
    ["2000-06-16", 150],
    ["2000-06-17", 100],
    ["2000-06-18", 200],
    ["2000-06-19", 100],
    ["2000-06-20", 20],
    ["2000-06-21", 300],
    ["2000-06-22", 150],
    ["2000-06-23", 150],
    ["2000-06-24", 150],
    ["2000-06-25", 100],
    ["2000-06-26", 200],
    ["2000-06-27", 100],
    ["2000-06-28", 20],
    ["2000-06-29", 300],
    ["2000-06-30", 150],
    ["2000-07-01", 150],
    ["2000-07-02", 150],
    ["2000-07-03", 100],
    ["2000-07-04", 200],
    ["2000-07-05", 100],
    ["2000-07-06", 20],
    ["2000-07-07", 300],
    ["2000-07-08", 150],
    ["2000-07-09", 150],
    ["2000-07-10", 150],
    ["2000-07-11", 100],
    ["2000-07-12", 200],
    ["2000-07-13", 100],
    ["2000-07-14", 20],
    ["2000-07-15", 300],
    ["2000-07-16", 150],
    ["2000-07-17", 150],
    ["2000-07-18", 150],
    ["2000-07-19", 100],
    ["2000-07-20", 200],
    ["2000-07-21", 100],
    ["2000-07-22", 20],
    ["2000-07-23", 300],
    ["2000-07-24", 150]
];

var dateList = data.map(function(item) {
    return item[0];
});
var valueList = data.map(function(item) {
    return item[1];
});

function randomData() {
    now = new Date(+now + oneDay);
    // value = Math.random() * 100;
    for (let i = 0; i < data.length; i++) {
        value = data[i][1]
        return [
            [now.getFullYear(), now.getMonth(), now.getDate()].join('/'),
            Math.round(value)
        ]
    }

}

var now = +new Date(2018, 3, 31);
var oneDay = 24 * 3600 * 1000;

option = {
    backgroundColor: '#000000',
    // #28e544
    // Make gradient line here
    visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        dimension: 0,
        min: 0,
        max: dateList.length - 1
    }],


    xAxis: [{
        show: false,
        data: dateList,
        gridIndex: 1
    }],
    yAxis: [{
        show: false,
        splitLine: {
            show: false
        },
        gridIndex: 1
    }],
    grid: [{
        // bottom: '60%'
    }, {
        top: '30%'
    }],
    series: [{
        type: 'line',
        showSymbol: false,
        data: valueList,
        lineStyle: {
            width: 2, //折线宽度
            // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
            color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 1,
                colorStops: [{
                    offset: 0,
                    color: '#28e544' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#011b04' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        },
        // xAxisIndex: 1,
        // yAxisIndex: 1
    }]
};

setInterval(function() {

    for (var i = 0; i < 1; i++) {
        data.shift();
        data.push(randomData());
        // data.push(data);
    }
    var dateList = data.map(function(item) {
        return item[0];
    });
    var valueList = data.map(function(item) {
        return item[1];
    });

    myChart.setOption({
        xAxis: [{
            show: false,
            data: dateList,
            gridIndex: 1
        }],
        series: [{
            type: 'line',
            showSymbol: false,
            lineStyle: {
                width: 2, //折线宽度
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#28e544' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#011b04' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            },
            data: valueList,
            // xAxisIndex: 1,
            // yAxisIndex: 1
        }]
    });
}, 1000);