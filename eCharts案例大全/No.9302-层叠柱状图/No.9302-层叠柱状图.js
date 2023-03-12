option = {
    backgroundColor: 'rgba(4,11,34,0.8)', //整个图表的背景色
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['投标登记', '单一谈判', '招投标报备'],
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff', //线条颜色
            }
        },
    }],
    yAxis: [{
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: {
                color: '#fff',
            },
            axisTick: { //y轴刻度线
                show: false
            },
            axisLine: { //y轴
                show: false
            }
        },

    ],
    series: [{
        name: '总计',
        type: 'bar',
        barWidth: '30%',
        barGap: '-100%',
        itemStyle: {
            normal: {
                barBorderRadius: 2,
                color: "transparent"

            }
        },
        data: ['100', '120', '200'],
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#fff'
            }
        }
    }, {
        name: '进行中',
        type: 'bar',
        barWidth: '30%',
        itemStyle: {
            normal: {
                barBorderRadius: 2,
                color: "#51FE7D"

            }
        },
        stack: 'group1',
        data: [20, 30, 60],
        label: {
            normal: {
                show: false,
                position: 'inside'
            }
        }
    }, {
        name: '中标',
        type: 'bar',
        barWidth: '30%',
        itemStyle: {
            normal: {
                barBorderRadius: 2,
                color: "#1890FF"

            }
        },
        stack: 'group1',
        data: [30, 60, 70],
        label: {
            normal: {
                show: false,
                position: 'inside'
            }
        }
    }, {
        name: '未中标',
        type: 'bar',
        barWidth: '30%',
        itemStyle: {
            normal: {
                barBorderRadius: 2,
                color: "rgba(255,255,255,0.7)"

            }
        },
        stack: 'group1',
        data: [50, 30, 70],
        label: {
            normal: {
                show: false,
                position: 'inside'
            }
        }
    }]
};