option = {
    backgroundColor: '#5580A1',

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[ '手游增量', '手游收入','总体收入','总体增量']
    },
    xAxis: {
        axisTick: {
            alignWithLabel: true
        },
        data: ["2012", "2013", "2014", "2015", "2016"]
    },
    yAxis: [{
        type: 'value',
        name: '增速',
        min: 0,
        max: 300,
        position: 'right',
        axisLabel: {
            formatter: '{value} %'
        }
    }, {
        type: 'value',
        name: '市场收入',
        min: 0,
        max: 2000,
        position: 'left'
    }],
    series: [{
        name: '手游增量',
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: [90.6, 246.9, 144.6, 87.2, 17.7]
    }, {
        name: '总体增量',
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: [35.1, 38, 37.7, 22.9, 17.7]
    },{
        name: '手游收入',
        type: 'bar',
        yAxisIndex: 1,
        data: [32.4, 112.4, 274.9, 514.6, 819.2]
    },{
        name: '总体收入',
        type: 'bar',
        yAxisIndex: 1,
        data: [602.8, 831.7, 1144.8, 1407, 1655.7]
    }]
};