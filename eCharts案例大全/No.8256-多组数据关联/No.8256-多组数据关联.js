var hours = ['step-0', 'step-2', 'step-3', 'step-4'];
var days = ['team1', 'team2', 'team3'];

var data = [
    [0, 0, 100],
    [0, 1, 100],
    [0, 2, 0],
    [0, 3, 0],
    [1, 0, 100],
    [1, 1, 100],
    [1, 2, 0],
    [1, 3, 0],
    [2, 0, 100],
    [2, 1, 100],
    [2, 2, 0],
    [2, 3, 100],


];

option = {
    tooltip: {
        position: 'top'
    },
    title: [],
    singleAxis: [],
    series: []
};


// var links = graphData.map(function (item, idx) {
//     return {
//         source: idx,
//         target: idx + 1
//     };
// });
// links.pop();


echarts.util.each(days, function(day, idx) {
    console.log('idx----------', idx)
    option.title.push({
        textBaseline: 'middle',
        top: (idx + 0.5) * 100 / 3 + '%',
        text: day
    });
    option.singleAxis.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        data: hours,
        top: (idx * 100 / 3 + 5) + '%',
        height: (100 / 3 - 10) + '%',
        axisLabel: {
            interval: 0
        },
        axisLine:{show: false},
        splitLine:{show: false}
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'effectScatter',
        rippleEffect:{
            period:10,
            scale:1.5,
            brushType:'fill',
        },
        data: [],
        links: [],
        symbolSize: function(dataItem) {
            return dataItem[1];
        },
        axisTick:{show: false}
    });
});

echarts.util.each(data, function(dataItem, idx) {
    console.log(dataItem, idx)
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    option.series[dataItem[0]].links.push({
        source: idx,
        target: idx + 1
    })


});

console.log(option.series[0]);

// option.series[0].markLine = {
//     lineStyle: {
//         type: 'dashed'
//     },
//     data: [{
//             name: '两个坐标之间的标线',
//             coord: [0, 0]
//         },
//         {
//             coord: [2, 3]
//         }
//     ]
// };





console.log(option)