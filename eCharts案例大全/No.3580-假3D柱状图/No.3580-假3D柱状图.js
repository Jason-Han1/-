option = {
    title: {
        text: '假3D柱状图',
        x: 'center'
    },
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
    },
    xAxis: {
        data: ["企业", "农专", "个体"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
            margin: 20, //刻度标签与轴线之间的距离。
        },

    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eee',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
        }
    },
    series: [{
        name: '年报上报率3',
        type: 'pictorialBar',
        symbolSize: [100, 25],
        symbolOffset: [0, -10],
        z: 12,
        symbolPosition: 'end',
        itemStyle: {
            normal: {
                color: '#ffc356'
            }
        },
        data: [100, 50, 20],

    }, {
        name: '年报上报率2',
        type: 'pictorialBar',
        symbolSize: [100, 25],
        symbolOffset: [0, 10],
        z: 12,
        itemStyle: {
            normal: {
                color: 'orange'
            }
        },
        data: [100, 50, 20]
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: 'orange'
            }
        },
        barWidth: 100,
        data: [100, 50, 20]
    }]
};