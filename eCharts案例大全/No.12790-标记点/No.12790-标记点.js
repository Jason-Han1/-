var data = [
    [1539162681857, 0.5],
    [1539171310247, 1],
    [1539179938616, 0.8],
    [1539182032910, 0.7]
];

var marks = [{
    value: 1539171310247,
    note: '标记一'
}, {
    value: 1539182032910,
    note: '标记二'
}];

var markPoints = [];
for (var i = 0; i < marks.length; ++i) {
    for (var j = 0; j < data.length; ++j) {
        if (data[j][0] === marks[i].value) {
            markPoints.push({
                xAxis: data[j][0],
                yAxis: data[j][1]
            });
        }
    }
}

var option = {
    xAxis: {
        type: 'time'
    },
    yAxis: {
        type: 'value'
    },
    color: ['#EE9400'],
    tooltip: {
        show: true,
        formatter: function (param) {
            if (!param.data) {
                return;
            }
            for (var i = 0; i < marks.length; ++i) {
                if (marks[i].value === param.data.coord[0]) {
                    return marks[i].note;
                }
            }
        }
    },
    series: [{
        type: 'line',
        data: data,
        showSymbol: false,
        markPoint: {
            symbol: 'circle',
            symbolSize: 15,
            itemStyle: {
                color: 'transparent',
                borderColor: 'rgba(255, 77, 81, 0.8)',
                borderWidth: 6
            },
            data: markPoints
        }
    }]
};