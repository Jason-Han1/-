option = {
    title: {
        show: true,
        text: '得分率%最低',
        subtext: '前十名',
        x: 'center',
        y: 'top',
        padding: 10,
        itemGap: 8,
        textStyle: {
            fontSize: 20
        },
        subtextStyle: {
            fontSize: 14
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'middle',
        feature: {
            dataZoom: {
                show: true
            },
            magicType: {
                show: true,
                type: ['line', 'bar', 'stack', 'tiled']
            },
            restore: {
                show: true
            }
        }
    },
    legend: {
        show: false,
        data: ['Series1'],
        selectedMode: 'multiple',
        x: 'center',
        y: 'bottom',
        orient: 'horizontal',
        padding: 20,
        itemWidth: 20,
        itemHeight: 16,
        itemGap: 16,
        textStyle: {
            fontSize: 24
        }
    },
    grid: {
        y: '15%',
        x: '8%',
        x2: '8%',
        y2: '15%'
    },
    dataZoom: [{
        show: false,
        type: 'slider',
        xAxisIndex: 0
    }, {
        show: false,
        type: 'slider',
        yAxisIndex: 0
    }],
    animationDuration: 1500,
    animationEasing: 'CubicIn',
    animation: true,
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        position: 'bottom',
        name: '题号',
        data: ['55', '64', '29', '62', '50', '31', '60', '43', '25', '51'],
        nameTextStyle: {
            fontSize: 24
        },
        boundaryGap: false,
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2
            }
        },
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 0,
            margin: 10,
            textStyle: {
                fontSize: 24
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                width: 1,
                type: 'dashed'
            }
        },
        splitArea: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        position: 'left',
        name: '得分率',
        nameTextStyle: {
            fontSize: 20
        },
        boundaryGap: false,
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2
            }
        },
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 0,
            margin: 10,
            textStyle: {
                fontSize: 24
                
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                width: 5,
                type: 'dashed'
            }
        },
        splitArea: {
            show: false
        }
    }],
    series: [

        {
            type: 'line',
            stack: '总量',
            symbol: 'emptyCircle',
            symbolSize: 16,
            smooth: false,
            itemStyle: {
                normal: {
                    borderWidth: 3,
                    lineStyle: {
                        width: 1
                    },
                    label: {
                        textStyle: {
                            fontSize: 14
                        },
                        show: true,
                        position: 'top'
                    }
                }
            },
            symbolRotate: 0,
            step: 'start',
            name: 'Series1',
            areaStyle: {
                normal: {}
            },
            data: [17.25, 18.55, 22.87, 24.96, 26.15, 28.49, 30.37, 38.24, 40.77, 41.14]
        }
    ]
};
myChart.setOption(option, {
    notMerge: true
});