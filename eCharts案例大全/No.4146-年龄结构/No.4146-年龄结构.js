var radarDataAvg = [1224816, 5174819, 4014775, 3002419, 2446982, 4828102];
var weekLineData = ['20以下', '21-30', '31-40', '41-50', '51-60', '60以上'];

option = {
    backgroundColor: '#fff',
    color: ['#3398DB'],
    grid: {
        left: '1%',
        right: '0%',
        top: '10%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: weekLineData,
    },
    yAxis: {
        name: '',
        type: 'value',
        splitLine: {
            show: false
        },
    },
    series: [{
        name: '1',
        type: 'bar',
        "barMaxWidth": 35,
        data: radarDataAvg
    }]
};