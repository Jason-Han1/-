option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['y3', 'y2', 'y1']
    },
    grid: {
        left: '6%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            dataView: {
                show: false,
                readOnly: false
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        boundaryGap: false,
        data: ['1', '5', '9', '13', '17', '21', '1', '5', '9', '13', '17', '21', '1', '5', '9', '13', '17', '21', '1', '5', '9', '13', '17', '21', '1']
    },
    yAxis: [{
        type: 'value',
        name: 'y3        ',
        position: 'left',//居左
        offset: 65,
        min: 34, //最小值
        max: 42, //最大值
        interval: 1,//间隔1
        axisLine: {
            show: false,//隐藏纵坐标线
            lineStyle: {
                color: '#d14a61'//纵坐标颜色
            }
        },
        axisLabel: {
            formatter: '{value}'
        },
        axisTick: {
            show: false
        }
    }, {
        type: 'value',
        name: 'y2          ',
        position: 'left',
        offset: 30,
        min: 40,
        max: 200,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#11e1f1'
            }
        },
        axisLabel: {
            formatter: '{value}'
        },
        axisTick: {
            show: false
        }
    }, {
        type: 'value',
        name: 'y1        ',
        position: 'left',
        min: 10,
        max: 50,
        interval: 5,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#2222e2'
            }
        },
        axisLabel: {
            formatter: '{value}'
        },
        axisTick: {
            show: false
        }
    }, {
        //纵坐标虚线
        position: 'right',//居右
        offset: 540, //偏移量,不显示：移除视图不显示
        min: 10,
        max: 50,
        interval: 1,
        splitLine: {
            lineStyle: {
                //虚线
                type: 'dashed'
            }
        }
    }],
    series: [{
            name: 'y3',
            type: 'line',
            yAxisIndex: 0,
            lineStyle: {
                color: '#d14a61'
            },
            data: [, [5, 36.5],
                [9, 36.5],
                [14, 37.5], , [18, 37.5],
                [20, 37.5],
            ],
            symbol: 'triangle', //点的形状
            symbolSize: 10, //点的大小
            itemStyle: { //点的样式
                normal: {
                    borderWidth: 3,
                    color: '#d14a61'
                }
            }
        },
        {
            name: 'y2',
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
                color: '#11e1f1'
            },
            symbolSize: 10, //点的大小
            data: [47, 70, 90, 85, 86, 79, ],
            itemStyle: { //点的样式
                normal: {
                    borderWidth: 3,
                    color: '#11e1f1'
                }
            }
        }, {
            name: 'y1',
            type: 'line',
            lineStyle: {
                color: '#2222e2'
            },
            yAxisIndex: 2,
            symbolSize: 10, //点的大小
            data: [44, 43, 40, 45, 43, 45, ],
            itemStyle: { //点的样式
                normal: {
                    borderWidth: 3,
                    color: '#2222e2'
                }
            }
        }
    ]
}