app.title = '单轴散点图';

var value = ['0','1','2','3','4','5','6','7','8','9'];
var days = ['0-4岁', '5-9岁', '10-14岁',
        '15-19岁']

var data = [[0,8.777,8.777],[0,1.516,1.516],[0,0.94,0.94],[0,2.33,2.33],[1,3.45,3.45],[1,1.254,1.254],[1,0.75,0.75],[1,0.65,0.65],[2,3.701,3.701],[2,1.236,1.236],[2,0.62,0.62],[2,0.5,0.5],[3,2.113,2.113],[3,2.4,2.4],[3,0.93,0.93],[3,1.25,1.25]];

option = {
    color: ['#4183D7', '#FFE1D1', '#C1DCF9', '#FF9D8E', '#395469'],
    tooltip: {
        position: 'top'
    },
    title: [],
    singleAxis: [],
    series: []
};

echarts.util.each(days, function (day, idx) {
    option.title.push({
        textBaseline: 'middle',
        top: (idx + 0.5) * 100 / 4 + '%',
        text: day
    });
    option.singleAxis.push({
        left: 80,
        type: 'value',
        boundaryGap: false,
        data: value,
        top: (idx * 100 / 4 + 5) + '%',
        height: (100 / 4 - 10) + '%',
        axisLabel: {
            interval: -100
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
        symbolSize: function (dataItem) {
            return dataItem[0] * 10;
        }
    });
});

echarts.util.each(data, function (dataItem) {
    option.series[dataItem[0]].data.push([dataItem[2], dataItem[3]]);
});