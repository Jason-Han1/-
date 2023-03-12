var radarDataAvg = [2000, 1100, 1700, 800, 600, 700];
var weekLineData = ['留守', '扶植', '低保', '重疾', '犯罪前科', '精神病'];

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