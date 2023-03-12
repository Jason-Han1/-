
data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135], ["2000-06-08",86],["2000-06-09",73],["2000-06-10",85]];

var dateList = data.map(function (item) {
    return item[0];
});
var valueList = data.map(function (item) {
    return item[1];
});

option = {
    title: {
        text: '在grid.containLabel模式下xAxis的rotate算错了',
        subtext: '左图空白多了一截，右图减了不该减的一截。应该是算sin取值的时候正负取得不对。'
    },
    xAxis: [{
        data: dateList,
        axisLabel: {
            rotate: 30,
        },
    }, {
        data: dateList,
        gridIndex: 1,
        axisLabel: {
            rotate: -30,
        },
    }],
    yAxis: [{
        splitLine: {show: false}
    }, {
        splitLine: {show: false},
        gridIndex: 1
    }],
    grid: [{
        left: 0,
        bottom: 0,
        width: '50%',
        containLabel: true 
    }, {
        left: '50%',
        bottom: 0,
        width: '50%',
        containLabel: true 
    }],
    series: [{
        type: 'line',
        data: valueList
    }, {
        type: 'line',
        data: valueList,
        xAxisIndex: 1,
        yAxisIndex: 1
    }]
};