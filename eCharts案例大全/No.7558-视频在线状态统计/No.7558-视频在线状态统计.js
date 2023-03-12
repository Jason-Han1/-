option = {
    color:['#1ECD60','#FB8446','#B1BEDD'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['正常数', '异常数', '离线数'],
        textStyle: {
            color: "#666"
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['G6001绕城高速',
            'G6002绕城高速',
            'G6003绕城高速',
            'G6004绕城高速',
            'G6005绕城高速',
            'G6006绕城高速',
            'G6007绕城高速',
            'G6008绕城高速',
            'G6009绕城高速',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#dadada",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#666",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#666",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#dadada",
            }
        }
    }],
    series: [{
        name: '正常数',
        type: 'bar',
        data: [20, 50, 80, 58, 83, 68, 57, 80, 42],
        barWidth: 20, //柱子宽度
        barGap: 0.5, //柱子之间间距
        itemStyle: {
            normal: {
                barBorderRadius: [5, 5, 0, 0],
            }
        }
    }, {
        name: '异常数',
        type: 'bar',
        data: [50, 70, 60, 61, 75, 87, 60, 62, 86],
        barWidth: 20,
        barGap: 0.5,
        itemStyle: {
            normal: {
                barBorderRadius: [5, 5, 0, 0],
            }
        }
    }, {
        name: '离线数',
        type: 'bar',
        data: [70, 48, 73, 68, 53, 47, 50, 72, 96],
        barWidth: 20,
        barGap: 0.5,
        itemStyle: {
            normal: {
                barBorderRadius: [5, 5, 0, 0],
            }
        }
    }]
};