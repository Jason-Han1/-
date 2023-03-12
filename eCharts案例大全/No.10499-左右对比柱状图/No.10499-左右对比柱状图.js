// 公共变量、颜色变量
var rgba = ['#fff', '#f00'];
var color = ['#00fdff', '#00abff', '#8641ff', '#00ff8b', '#2dedc0', '#1b6aff', '#7049f0', '#fa704d', '#01babc', '#3ed4ff'];

option = {
    color: color,
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        bottom: 5,
        data: ['女', '男'],
        icon: 'circle',
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        top: '3%',
        left: '2%',
        right: '2%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        axisLine: {
            lineStyle: {
                color: color[1]
            }

        },
        axisLabel: {
            textStyle: {
                color: color[0]
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: color[1]
            }
        },
    }],
    yAxis: [{
        name: '单位（岁/万人）',
        type: 'category',
        data: ['0-8', '9-17', '18-26', '27-35', '36-44', '45-53', '54-62', '63-71', '72-80', '81-90'],
        axisLine: {
            lineStyle: {
                color: color[1]
            }
        },
        axisLabel: {
            textStyle: {
                color: color[1]
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: color[1]
            }
        },
    }],
    series: [{
            name: '女',
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    color: rgba[0]
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[1]
                    }, {
                        offset: 1,
                        color: color[2]
                    }], false),
                    barBorderRadius: [4, 0, 0, 4]
                }
            },
            data: arrays(-300, -10, 10)
        },
        {
            name: '男',
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: color[0]
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: color[0]
                    }, {
                        offset: 0.8,
                        color: color[5]
                    }], false),
                    barBorderRadius: [0, 6, 6, 0]
                }
            },
            data: arrays(10, 350, 10)
        }
    ]
}