function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

option = {
    tooltip : {},
    visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'vertical',
        left: 'center',
        left: 65,
        textStyle: {
            color: '#000'
        }
    },
    calendar: {
        top: 40,
        left: 'center',
        bottom: 10,
        orient: 'vertical',
        cellSize: [13, 'auto'],
        range: '2016',
        itemStyle: {
            normal: {borderWidth: 0.5}
        },
        monthLabel: {
            nameMap: 'cn'  
        },
        dayLabel: {
            firstDay: 1,
            nameMap: 'cn'  
        },
        yearLabel: {show: false}
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData(2016)
    }
};
