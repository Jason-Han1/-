var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'
];
var days = ['交易监测', '公告', '新闻'];

var data = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [0, 7, 0],
    [0, 8, 0],
    [0, 9, 0],
    [0, 10, 0],
    [0, 11, 2],
    [0, 12, 4],
    [0, 13, 1],
    [0, 14, 1],
    [0, 15, 3],
    [0, 16, 4],
    [0, 17, 6],
    [0, 18, 4],
    [0, 19, 4],
    [0, 20, 3],
    [0, 21, 3],
    [0, 22, 2],
    [0, 23, 5],
    [1, 0, 7],
    [1, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
    [1, 6, 0],
    [1, 7, 0],
    [1, 8, 0],
    [1, 9, 0],
    [1, 10, 5],
    [1, 11, 2],
    [1, 12, 2],
    [1, 13, 6],
    [1, 14, 9],
    [1, 15, 11],
    [1, 16, 6],
    [1, 17, 7],
    [1, 18, 8],
    [1, 19, 12],
    [1, 20, 5],
    [1, 21, 5],
    [1, 22, 7],
    [1, 23, 2],
    [2, 0, 1],
    [2, 1, 1],
    [2, 2, 0],
    [2, 3, 0],
    [2, 4, 0],
    [2, 5, 0],
    [2, 6, 0],
    [2, 7, 0],
    [2, 8, 0],
    [2, 9, 0],
    [2, 10, 3],
    [2, 11, 2],
    [2, 12, 1],
    [2, 13, 9],
    [2, 14, 8],
    [2, 15, 10],
    [2, 16, 6],
    [2, 17, 5],
    [2, 18, 5],
    [2, 19, 5],
    [2, 20, 7],
    [2, 21, 4],
    [2, 22, 2],
    [2, 23, 4],
];

option = {
    tooltip: {
        position: 'top'
    },
    color: ['#A7DCF0', '#005587', '#00A3E0'],
    title: [],
    dataZoom: [ {
        type: 'slider',
        show: true,
        realtime: true,
        startValue: 0,
        endValue: 10,
        singleAxisIndex:[0,1,2],
    }, ],

    singleAxis: [],
    series: []
};

echarts.util.each(days, function(day, idx) {
    option.singleAxis.push({
        name:day,
        nameLocation:"start",
        left: 80,
        type: 'category',
        boundaryGap: false,
        data: hours,
        top: (idx * 100 / 3 + 5) + '%',
        height: (100 / 3 - 10) + '%',
        axisLabel: {
            interval: 0,
            show:idx==(day.length)
        },
        splitLine: {
            show: false, //显示分割线
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
        symbolSize: function(dataItem) {
            return dataItem[1] * 4;
        },
        itemStyle: {
            labelLine: {
                show: false
            },

        }

    });
});

echarts.util.each(data, function(dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});
// option.series.push({
//         singleAxisIndex: idx,
//         coordinateSystem: 'singleAxis',
//         type: 'scatter',
//         data: [],
//         symbolSize: function(dataItem) {
//             return dataItem[1] * 4;
//         },
//         itemStyle: {
//             labelLine: {
//                 show: false
//             },

//         }

//     });