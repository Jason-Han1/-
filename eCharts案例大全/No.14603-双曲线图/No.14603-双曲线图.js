/*
    @songcxa
    @2017-11-15
*/
option = {
    title: {
        text: '企业密度',
        top: 1,
        textStyle: {
            fontSize: 15,
            color: "#018ccd",
            fontWeight: 'normal',
            fontFamily: 'Microsoft YaHei'
        }
    },
    tooltip: {
        trigger: 'item',
        alwaysShowContent: false,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{a} <br/>{b} : {c}'
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '5%',
        top: "11%",
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        name: '销售量(万张)',
        nameGap: 10,
        nameTextStyle: {
            color: "#00a0e8"
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontSize: 12,
                color: '#00a0e8'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#00a0e8',
                width: 0,
                opacity: 0.2
            }
        },
        axisLine: {
            lineStyle: {
                color: '#00a0e8',
                width: 1,
                opacity: 0.2
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    }, {
        type: 'value',
        name: '销售额(万元)',
        nameTextStyle: {
            color: "#00a0e8"
        },

        splitLine: {
            show: true,
            lineStyle: {
                color: '#154367',
                width: 1,
                opacity: 0.2
            }
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontSize: 13,
                color: '#00a0e8'
            }
        },
        axisTick: {
            show: false
        }
    }],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#00a0e8',
                width: 1,
                opacity: 0.2
            }
        }, //显示x格子
        axisLine: {
            lineStyle: {
                color: '#00a0e8',
                width: 1,
                opacity: 0.2
            }
        },
        axisTick: {
            length: 0
        },
        data: [
            "8:00", "9:00",
            "10:00", "11:00",
            "12:00", "13:00",
            "14:00", "15:00",
            "16:00", "17:00",
            "18:00"
        ]
    },
    series: [{
        name: '销售量(万张)',
        type: 'line',
        smooth: false,
        symbolSize: [6, 6],
        symbol: "circle",
        itemStyle: {
            normal: {
                color: '#a27f06',
                barBorderRadius: [3, 3, 0, 0]
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                color: '#ffd800'
            }
        },
        itemStyle: {
            normal: {
                color: '#ffd800',
                borderColor: '#ffd800',
                borderWidth: 0,
                opacity: 1
            }
        },
        data: [5.67, 3.74, 5.65, 8.66, 12.67, 14.75, 19.28, 8.43, 5.37, 1.87, 0.08]
    }, {
        name: '销售额(万元)',
        type: 'line',
        smooth: false,
        symbol: "circle",
        symbolSize: [6, 6],
        yAxisIndex: 1,
        lineStyle: {
            normal: {
                width: 1,
                color: '#15befc'
            }
        },
        markPoint: {
            symbolSize: 70,
            data: [{
                type: 'max',
                name: '最大值',
                itemStyle: {
                    normal: {
                        color: "#fe1e1e"
                    }
                }
            }, {
                type: 'min',
                name: '最小值',
                itemStyle: {
                    normal: {
                        color: "#2169fc"
                    }
                }
            }]
        },
        itemStyle: {
            normal: {
                color: '#15befc',
                borderColor: 'red',
                borderWidth: 0,
                opacity: 1
            }
        },
        data: [67.32, 64.89, 85.88, 86.87, 97.86, 105.64, 98.76, 53.81, 27.65, 17.51, 1.65]
    }]
};