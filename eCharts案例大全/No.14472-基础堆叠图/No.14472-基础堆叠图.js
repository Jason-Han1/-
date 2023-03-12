option = {
    color: ['#0580f2', '#faa732', '#e1575d', '#8b73cc'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        show: true,
        icon: 'circle',
        left: 25,
        top: 15,
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            fontSize: 12,
            color: '#333333'
        },
        data: ['0-500万', '500万-1000万', '视频广告', '直接访问']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#999999'
            }
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#f2f3f7'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#999999'
            }
        },
    }],
    series: [{
        name: '0-500万',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: [8, 8],
        areaStyle: {
            normal: {}
        },
        data: [120, 132, 101, 134, 90, 230, 210]
    }, {
        name: '500万-1000万',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: [8, 8],
        areaStyle: {
            normal: {}
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: [8, 8],
        areaStyle: {
            normal: {}
        },
        data: [150, 232, 201, 154, 190, 330, 410]
    }, {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: [8, 8],
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        areaStyle: {
            normal: {}
        },
        data: [320, 332, 301, 334, 390, 330, 320]
    }]
};


app.timeTicket = setInterval(function() {
    option.series= []
    myChart.setOption(option, true);
    option.series=[{
        name: '0-500万',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: [8, 8],
        areaStyle: {
            normal: {}
        },
        data: [120, 132, 101, 114, 90, 230, 210]
    }, {
        name: '500万-1000万',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: [8, 8],
        areaStyle: {
            normal: {}
        },
        data: [220, 182, 191, 234, 190, 330, 310]
    }, {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: [8, 8],
        areaStyle: {
            normal: {}
        },
        data: [150, 24, 201, 154, 190, 330, 410]
    }, {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: [8, 8],
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        areaStyle: {
            normal: {}
        },
        data: [320, 332, 301, 334, 390, 330, 120]
    }];
    myChart.setOption(option, true);
}, 2000);