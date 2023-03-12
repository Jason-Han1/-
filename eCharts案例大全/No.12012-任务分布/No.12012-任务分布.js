option = {
    backgroundColor: '#031571',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['任务总数', '关联', '合格', '违规'],
        align: 'right',
        right: 20,
        textStyle: {
            color: "#fff"
        },
        itemGap: 30,
        itemWidth: 30,
        itemHeight: 10,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['重点现场',
            '大型现场',
            '中型现场',
            '小型现场'
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#034e90",
                width: 2,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#9fceff",
                fontSize: 14
            }
        },
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 6,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: "#91bdeb",
                fontSize: 16
            }
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00a1e4",
                width: 2,
                type: "solid"
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#034e90",
                width: 2,
                type: "solid"
            }
        }
    }],
    series: [{
        name: '任务总数',
        type: 'bar',
        data: [20, 50, 80, 58],
        barWidth: 25, //柱子宽度
        barGap: '30%', //柱子之间间距
        itemStyle: {
            normal: {
                color: '#00a1e4',
            }
        }
    }, {
        name: '关联',
        type: 'bar',
        data: [50, 70, 60, 61],
        barWidth: 25,
        barGap: '30%', //柱子之间间距
        itemStyle: {
            normal: {
                color: '#ffc600',
            }
        }
    }, {
        name: '合格',
        type: 'bar',
        data: [70, 48, 100, 68],
        barWidth: 25,
        barGap: '30%', //柱子之间间距
        itemStyle: {
            normal: {
                color: '#24c768',
            }
        }
    }, {
        name: '违规',
        type: 'bar',
        data: [70, 48, 73, 20],
        barWidth: 25,
        barGap: '30%', //柱子之间间距
        itemStyle: {
            normal: {
                color: '#de7008',
            }
        }
    }]
};