var data = [
    [220, 182, 191],
    ['-', '-', 191, 120, 80],
    ['-', '-', '-', '-', 80, 90, 30]
];
var xData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var markLine = [];
for (var i = 0; i < data.length; ++i) {
    var sum = 0;
    var cnt = 0;
    var first = null;
    var last = null;
    var seriesData = data[i];
    for (var j = 0; j < seriesData.length; ++j) {
        if (seriesData[j] != null && seriesData[j] !== '-') {
            sum += seriesData[j];
            cnt += 1;
            (first == null) && (first = j);
            last = j;
        }
    }
    var avg = cnt === 0 ? 0 : sum / cnt;
    
    markLine.push({
        data: [
            [{
                coord: [xData[first], avg]
            }, {
                coord: [xData[last], avg]
            }]    
        ]
    });
}

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: xData
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: data[0],
        areaStyle: {},
        markLine: markLine[0],
    }, {
        type: 'line',
        data: data[1],
        areaStyle: {},
        markLine: markLine[1],
    }, {
        type: 'line',
        data: data[2],
        areaStyle: {},
        markLine: markLine[2],
    }]
};