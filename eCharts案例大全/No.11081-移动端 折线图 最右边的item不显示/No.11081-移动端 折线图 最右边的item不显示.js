option = {
    title: {
        left: 'right',
        text: '-- 推荐周阅读量  单位（词）',
        textStyle: {
            fontSize: '60%',
            color: '#595757',
            fontWeight: 'normal',
        },
    },
    grid: {
        bottom: '20%',
    },
    xAxis: {
        type: 'category',
        data: ['05/20-05/27', '05/27-06/03', '06/03-06/10', '06/10-06/17'],
        boundaryGap: false,
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: '50%',
                color: '#979797'
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        show: false,
        type: 'value',
        max: 332
    },
    series: [{
        data: [8, 11, 4, 30],
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    fontSize: '50%',
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#FF5B3E ',
                lineStyle: {
                    color: '#FF5B3E '
                }
            }
        },
        symbolSize: 6,
        markLine: {
            symbol: "none",
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#979797 '
                    }
                }
            },
            data: [{
                    name: 116,
                    yAxis: 116
                },
                {
                    yAxis: 116
                }
            ],
            label: {
                normal: {
                    textStyle: {
                        fontSize: '50%',
                    }
                }
            },
        },
    }]
};