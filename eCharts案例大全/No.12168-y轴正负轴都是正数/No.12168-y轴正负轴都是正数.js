app.title = '柱状图框选';

var xAxisData = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
];
var goodCounts = [];
var goodPercents = [];
var badCounts = [];
var badPercents = [];


var source = [];
var dimensions = ['date', 'goodCount', 'badCount', 'goodPercent', 'badPercent'];
for (var i = 0; i < 12; i++) {
    let goodCount = +(Math.random() * 400).toFixed(0) + 100;
    let badCount = +(Math.random() * 400).toFixed(0) * -1;
    let goodPercent = +(Math.random() * 30).toFixed(0);
    let badPercent = +(Math.random() * 30).toFixed(0) * -1;
    let date = xAxisData[i];
    goodCounts.push(goodCount);
    badCounts.push(badCount);
    goodPercents.push(goodPercent);
    badPercents.push(badPercent);
    source.push({
        date: date,
        goodCount,
        goodPercent,
        badCount,
        badPercent
    })
}

var dataset = {
    dimensions: dimensions,
    source: source
}

var itemStyle = {
    normal: {},
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};


var yAxisGoodCount = {
    type: 'value',
    // id: 'goodCount',
    // gridIndex: 0,
    position: 'left',
    min: -600,
    max: 600,
    interval: 200,
    inverse: false,
    axisLabel: {
        formatter: function(value) {
            let valueNum = parseInt(value);
            if (valueNum < 0) {
                return value / -10;
            }
            return value
        }
    }
}
var yAxisPercents = {
    type: 'value',
    position: 'right',
    min: -30,
    max: 30,
    interval: 10,
    inverse: false,
    axisLabel: {
        formatter: function(value) {
            let valueNum = parseInt(value);
            if (valueNum < 0) {
                return `${value/-1}%`;
            }
            return `${value}%`;
        }
    }
}

option = {
    backgroundColor: '#eee',
    legend: {
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        align: 'left',
        left: 10
    },
    brush: {
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {}
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            console.log('tooltip', params);
            let name = params[0].name;
            let goodCountItem = `${params[0].marker}${params[0].seriesName}: ${params[0].data.goodCount}`;
            let badCountItem = `${params[1].marker}${params[1].seriesName}: ${params[1].data.badCount/-10}`;
            let goodPercentItem = `${params[2].marker}${params[2].seriesName}: ${params[2].data.goodPercent}%`;
            let badPercentItem = `${params[3].marker}${params[3].seriesName}: ${params[3].data.badPercent/-1}%`;
            return `${name}<br/>${goodCountItem}<br/>${badCountItem}<br/>${goodPercentItem}<br/>${badPercentItem}`
        }
    },
    dataset: dataset,
    xAxis: {
        data: xAxisData,
        // name: 'X Axis',
        // silent: false,
        // axisLine: {
        //     onZero: true
        // },
        // splitLine: {
        //     show: false
        // },
        // splitArea: {
        //     show: false
        // }
    },
    // yAxis:[
    //     yAxisGoodCount,
    //     yAxisBadCount
    //     ],
    yAxis: [yAxisGoodCount, yAxisPercents],
    grid: {
        left: 100
    },
    // visualMap: {
    //     type: 'continuous',
    //     dimension: 1,
    //     text: ['High', 'Low'],
    //     inverse: true,
    //     itemHeight: 200,
    //     calculable: true,
    //     min: -2,
    //     max: 6,
    //     top: 60,
    //     left: 10,
    //     inRange: {
    //         colorLightness: [0.4, 0.8]
    //     },
    //     outOfRange: {
    //         color: '#bbb'
    //     },
    //     controller: {
    //         inRange: {
    //             color: '#2f4554'
    //         }
    //     }
    // },
    series: [{
            name: '好评数',
            type: 'bar',
            stack: 'count',
            itemStyle: itemStyle,
            yAxisIndex: 0,
            xAxisIndex: 0,

        },
        {
            // name: 'bar2',
            type: 'bar',
            stack: 'count',
            itemStyle: itemStyle,
            xAxisIndex: 0,
            yAxisIndex: 0,

        },
        {
            name: '好评率',
            type: 'line',
            itemStyle: itemStyle,
            yAxisIndex: 1,
            xAxisIndex: 0,
            // data: data3
        },
        {
            name: '差评率',
            type: 'line',
            itemStyle: itemStyle,
            yAxisIndex: 1,
            xAxisIndex: 0,
            // data: data4
        }
    ]
};

// myChart.on('brushSelected', renderBrushed);

// function renderBrushed(params) {
//     var brushed = [];
//     var brushComponent = params.batch[0];

//     for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
//         var rawIndices = brushComponent.selected[sIdx].dataIndex;
//         brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
//     }

//     myChart.setOption({
//         title: {
//             backgroundColor: '#333',
//             text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
//             bottom: 0,
//             right: 0,
//             width: 100,
//             textStyle: {
//                 fontSize: 12,
//                 color: '#fff'
//             }
//         }
//     });
// }