option = {
    backgroundColor: '#051A49',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['受理数', '已办结'],
        x: 'center',
        itemGap: 40,
        bottom: 10,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['第一季度', '第二季度', '第三季度', '第四季度'],
        axisLine: {
            lineStyle: {
                color: '#0C4482'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        name: '件',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            formatter: '{value}',
            color: '#fff',
            fontSize: 14
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0C4482',
                width: 2
            }
        }
    }],
    series: [{
        name: '受理数',
        type: 'bar',
        data: [20, 32, 41, 54],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: '#F7EA46'
                        },
                        {
                            offset: 0.5,
                            color: '#F7D146'
                        },
                        {
                            offset: 1,
                            color: '#FCB813'
                        }
                    ]
                )
            }
        }
    }, {
        name: '已办结',
        type: 'bar',
        data: [30, 40, 35, 49],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00feff'
                        },
                        {
                            offset: 0.5,
                            color: '#027eff'
                        },
                        {
                            offset: 1,
                            color: '#0286ff'
                        }
                    ]
                )
            }
        }
    }]
};