var hours = ['0', '2', '3', '4', '5', '6', '7'];
var days = ['team1', 'team2', 'team3'];

var data = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 10],
    [1, 0, 5],
    [1, 1, 1],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
    [1, 6, 10],
    [2, 0, 5],
    [2, 1, 1],
    [2, 2, 0],
    [2, 3, 0],
    [2, 4, 0],
    [2, 5, 0],
    [2, 6, 10],

];

option = {
    tooltip: {
        position: 'top'
    },
    title: [],
    singleAxis: [],
    series: []
};

echarts.util.each(days, function(day, idx) {
    option.title.push({
        textBaseline: 'middle',
        top: (idx + 0.5) * 100 / 7 + '%',
        text: day
    });
    option.singleAxis.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        data: hours,
        top: (idx * 100 / 7 + 5) + '%',
        height: (100 / 7 - 10) + '%',
        axisLabel: {
            interval: 2
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
        symbolSize: function(dataItem) {
            return dataItem[1] * 4;
        }
    });
});

echarts.util.each(data, function(dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});