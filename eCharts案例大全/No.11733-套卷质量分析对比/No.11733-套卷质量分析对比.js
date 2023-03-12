app.title = '多 Y 轴示例';

var colors = ['#5793f3', '#d14a61', '#675bba', 'black'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '30%'
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['规划执行', '投资安排', '投资完成', '建设进展']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        name: '投资安排',
        min: 0,
        max: 3000,
        position: 'right',
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        },
        axisLabel: {
            formatter: '{value} 万元'
        }
    }, {
        type: 'value',
        name: '投资完成',
        min: 0,
        max: 3000,
        position: 'right',
        offset: 80,
        axisLine: {
            lineStyle: {
                color: colors[3]
            }
        },
        axisLabel: {
            formatter: '{value} 万元'
        }
    }, {
        type: 'value',
        name: '建设进展',
        min: 0,
        max: 250,
        position: 'right',
        offset: 160,
        axisLine: {
            lineStyle: {
                color: colors[1]
            }
        },
        axisLabel: {
            formatter: '{value} 公里'
        }
    }, {
        type: 'value',
        name: '规划执行',
        min: 0,
        max: 3000,
        position: 'left',
        axisLine: {
            lineStyle: {
                color: colors[2]
            }
        },
        axisLabel: {
            formatter: '{value} 万元'
        }
    }],
    series: [{
        name: '投资安排',
        type: 'bar',
        data: [200.0, 400.9, 700.0, 230.2, 250.6, 760.7, 350.6, 1620.2, 320.6, 200.0, 60.4, 300.3]
    }, {
        name: '投资完成',
        type: 'bar',
        yAxisIndex: 1,
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    }, {
        name: '建设进展',
        type: 'bar',
        yAxisIndex: 2,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }, {
        name: '规划执行',
        type: 'bar',
        yAxisIndex: 3,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }]
};