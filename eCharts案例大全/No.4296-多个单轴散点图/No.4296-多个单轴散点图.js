var hours = ['1月', '2月', '3月', '4月', '5月', '6月', '7月',
        '8月', '9月', '10月','11月','12月'];
var days = [1, 2, 3,
        4, 5];

var data = [[0,2,5],[0,3,15],[0,4,15],[0,5,15],[0,6,15],[0,7,10],[0,8,15],[0,9,10],[0,10,10],[0,11,5],
[1,1,25],[1,2,25],
[2,0,10],[2,2,10],[2,3,10],[2,7,15],[2,9,15],[2,10,15],[2,11,5],
[3,0,5],[3,4,5],[3,11,20],
[4,4,15],[4,11,10],];

option = {
    tooltip: {
        position: 'top'
    },
    backgroundColor: '#ffffff',
    title: [],
    singleAxis: [],
    series: []
};

echarts.util.each(days, function (day, idx) {
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
        //   show: day==5?true:false,
            interval: 0
        },
        axisLine: {
        //   show: day==5?true:false,
        },
        splitLine: {
        //   show: day==5?false:false,
        },
        axisTick:{
        //   show: day==5?true:false,
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
        // symbol: 'pin',
        symbolSize: function (dataItem) {
            return dataItem[1] * 3;
        }
    });
});

echarts.util.each(data, function (dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});