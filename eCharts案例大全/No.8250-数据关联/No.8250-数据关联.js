function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000)
        ]);
    }
    console.log(data[data.length - 1]);
    return data;
}



var graphData = [
    [
        1485878400000,
        260
    ],
    [
        1486137600000,
        200
    ],
    [
        1486569600000,
        279
    ],
    [
        1486915200000,
        847
    ],
    [
        1487347200000,
        241
    ],
    [
        1487779200000,
        411
    ],
    [
        1488124800000,
        985
    ]
];

var links = graphData.map(function (item, idx) {
    return {
        source: idx,
        target: idx + 1
    };
});
links.pop();

option = {
    tooltip: {
        position: 'top'
    },

    // visualMap: [{
    //     min: 0,
    //     max: 1000,
    //     calculable: true,
    //     seriesIndex: [2, 3, 4],
    //     orient: 'horizontal',
    //     left: '55%',
    //     bottom: 20
    // }, {
    //     min: 0,
    //     max: 1000,
    //     inRange: {
    //         color: ['grey'],
    //         opacity: [0, 0.3]
    //     },
    //     controller: {
    //         inRange: {
    //             opacity: [0.3, 0.6]
    //         },
    //         outOfRange: {
    //             color: '#ccc'
    //         }
    //     },
    //     seriesIndex: [1],
    //     orient: 'horizontal',
    //     left: '10%',
    //     bottom: 20
    // }],

    calendar: [{
        orient: 'vertical',
        yearLabel: {
            margin: 40
        },
        monthLabel: {
            nameMap: 'cn',
            margin: 20
        },
        dayLabel: {
            firstDay: 1,
            nameMap: 'cn'
        },
        cellSize: 40,
        range: '2017-02'
    },
    
   
    ],

    series: [{
        type: 'graph',
        edgeSymbol: ['none', 'arrow'],
        coordinateSystem: 'calendar',
        links: links,
        symbolSize: 50,
        calendarIndex: 0,
        data: graphData
    }]
};
console.log(option)
