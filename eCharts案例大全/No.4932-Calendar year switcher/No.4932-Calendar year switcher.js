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
    return data;
}

var data = {
    '2015': getVirtulData(2015),
    '2016': getVirtulData(2016),
    '2017': getVirtulData(2017)
};



option = {
    legend: {
        top: 250,
        selected: {
            '2015': true,
            '2016': false,
            '2017': false
        },
        selectedMode: 'single'
    },
    tooltip: {
        position: 'top'
    },
    visualMap: {
        min: 0,
        max: 1000,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        top: 'top'
    },

    calendar: {
        range: '2015',
        cellSize: ['auto', 20]
    },

    series: [{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 0,
        data: data[2015],
        name: '2015'
    }, {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 0,
        data: data[2016],
        name: '2016'
    }, {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 0,
        data: data[2017],
        name: '2017'
    }]
};

myChart.on('legendselectchanged', function(event) {
    myChart.setOption({
        calendar: {
            range: event.name // '2015' or '2016' or '2017'
        }
    });
})