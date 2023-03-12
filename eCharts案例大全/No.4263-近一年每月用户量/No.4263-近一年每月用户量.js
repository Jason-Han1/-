var radarDataAvg = [120, 350, 150, 350, 80, 120, 350, 450, 250, 380, 220, 120];
var weekLineData = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];

option = {
    backgroundColor: '#fff',
    color: ['#3398DB', '#ff733f'],
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
    },
    series: [{
        name: '1',
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
        "barMaxWidth": 35, //柱状宽
        data: radarDataAvg
    }, {
        name: '2',
        smooth: true,
        type: 'line',
        lineStyle: {
            normal: {
                width: 2, //设置线宽
                shadowColor: 'rgba(0,0,0,0.4)'
            }
        },
        data: radarDataAvg
    }]
};