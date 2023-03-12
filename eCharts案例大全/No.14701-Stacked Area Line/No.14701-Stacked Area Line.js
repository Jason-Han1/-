option = {
    color: ["#859CF3", "#7D62F3", "#FEE06C"],

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
        data: ['Walking', 'Run', 'Bicycle']
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: false
    },
    xAxis: [{
        show: false,
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }],
    yAxis: [{
        show: false,
        type: 'value'
    }],
    series: [{
        name: 'Walking',
        type: 'line',
        stack: 'Stack',
        smooth: true,
        symbolSize: 10,
        areaStyle: {
            normal: {
                opacity: 1,
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
        },
        lineStyle: {
            normal: {
                width: 0
            }
        },
        data: [120, 132, 101, 134, 90, 230, 210]
    }, {
        name: 'Run',
        type: 'line',
        stack: 'Stack',
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            normal: {
                width: 0
            }
        },

        areaStyle: {
            normal: {
                opacity: 1,
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
        },
        data: [220, 182, 191, 234, 290, 299, 310]
    }, {
        name: 'Bicycle',
        type: 'line',
        stack: 'Stack',
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            normal: {
                width: 0
            }
        },
        areaStyle: {
            normal: {
                opacity: 1,
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
        },
        data: [150, 232, 201, 154, 190, 230, 250]
    }]
};