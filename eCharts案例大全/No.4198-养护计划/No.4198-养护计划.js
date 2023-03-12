var radarDataAvg = [19000, 8000, 12000, 11900, 11000, 15800];
var lineDataAvg = [24000, 25000, 25800, 25000, 26000, 26800];
var weekLineData = ['修剪', '补植', '防护', '施肥', '除草', '浇水', ];

option = {
    backgroundColor: '#fff',
    color: ['#3398DB', '#ff733f'],
    grid: {
        left: '1%',
        right: '5%',
        top: '10%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: weekLineData,
    },
    yAxis: [{
        type: 'value',
    }, {
        type: 'value',
        position: 'right',
        splitLine: {
            show: false
        }
    }],
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
        symbolSize: 10,
        yAxisIndex: 1,
        lineStyle: {
            normal: {
                width: 5, //设置线宽
                shadowColor: 'rgba(0,0,0,0.4)'
            }
        },
        data: lineDataAvg
    }]
};