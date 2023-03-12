function getVirtulData(year) {
    year = year || '2015';
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
    var data1=[];
    
    return data;
}

option = {
    title: {
        top: 30,
        left: 'center',
        text: '热力图'
    },
    tooltip : {},
    visualMap: {
        min: 0,
        max: 10000,
        text:['high','low'],
        calculable: true,
        color:['#CD3700','#E3E3E3'],
        type: 'continuous',
        orient: 'horizontal',
        left: 'center',
        top: 65,
        textStyle: {
            color: '#000'
        }
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2017',
        itemStyle: {
            normal: {borderWidth: 0.5}
        },
        yearLabel: {show: false}
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data:getVirtulData(2017)
    }
};
