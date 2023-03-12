option = {
    legend: {
        data: ['优', '良', '差', '当前值'],
        bottom: '0',
        textStyle: {
            color: '#FFFFFF'
        }
    },
    yAxis: [{
        data: ['监测点6', '监测点5', '监测点4', '监测点3', '监测点2', '监测点1'],
        axisTick: {
            alignWithLabel: true,
            lineStyle: {
                color: '#FFB1AC'
            }
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            fontSize: 16,
            margin: 16
        }
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
    }],
    xAxis: {
        show: false
    },
    series: [{
        name: '优',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#B4EBBF'
            }
        },
        barGap: '0',
        data: [100, 100, 100, 100, 100, 100],
        animation: false,
        barWidth: 20,
        legendHoverLink: false,
        silent: true
    }, {
        name: '良',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#FFDBA2'
            }
        },
        barGap: '0',
        yAxisIndex: 1,
        data: [80, 80, 80, 80, 80, 70],
        animation: false,
        barWidth: 20,
        legendHoverLink: false,
        silent: true
    }, {
        name: '差',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#FFB1AC'
            }
        },
        barGap: '0',
        yAxisIndex: 2,
        data: [60, 60, 60, 60, 60, 40],
        animation: false,
        barWidth: 20,
        legendHoverLink: false,
        silent: true
    }, {
        name: '当前值',
        type: 'bar',
        itemStyle: {
            normal: {
                color: 'rgba(0,62,63,0.71)'
            }
        },
        barGap: '0',
        yAxisIndex: 3,
        barWidth: 10,
        data: [20, 30, 80, 40, 60, 22]
    }]
};