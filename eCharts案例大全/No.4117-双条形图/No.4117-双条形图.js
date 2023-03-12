var xAxis = ['文学院','历史文化学院','哲学与政府管理学院','马克思主义学院','教育学院','美术学院','外国语学院','新闻传播学院','地理学院','化学学院'];
var data1 = [28763,14237,10224,5561,5677,5546,7589,6521,4061,5079];
var data2 = [16.3,12.6,11.8,9.9,9.5,9.3,8.8,8.7,6.9,6.8];

option = {
    legend: {
        data: ['学院借阅总册次', '人均借阅册次'],
        type: "scroll",
        //icon: 'ret',
        height: '88%',
        left: '15%',
        bottom: '2',
        itemGap: 200,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            fontSize: '12',
            color: '#666',
        },

    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [{
            show: false,
            left: '8%',
            top: '2%',
            bottom: '8%',
            containLabel: true,
            width: '25%'
        },
        {
            show: false,
            left: '50%',
            top: '2%',
            bottom: '8%',
            width: '0%'
        }, {
            show: false,
            right: '8%',
            top: '2%',
            bottom: '8%',
            containLabel: true,
            width: '25%'
        }
    ],
    xAxis: [{
        type: 'value',
        inverse: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }

    }, {
        gridIndex: 1,
        show: false
    }, {
        gridIndex: 2,
        type: 'value',

        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        position: 'right',
        data: xAxis,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }, {
        gridIndex: 1,
        type: 'category',
        inverse: true,
        position: 'center',
        data:  xAxis,
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#666666", //X轴文字颜色
                fontSize: '12',
                align:'center',
            }
        },
        axisTick: {
            show: false
        }
    }, {
        gridIndex: 2,
        type: 'category',
        inverse: true,
        position: 'left',
        data: xAxis,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }

    }],
    series: [{
        name: '学院借阅总册次',
        type: 'bar',
        barWidth: 8,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#6D9BFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#2E64EF' // 100% 处的颜色
                }], false),
                barBorderRadius: [4, 0, 0, 4],
            }
        },
        label: {
            show: true,
            position: 'left'
        },
        data: data1
    }, {
        xAxisIndex: 2,
        yAxisIndex: 2,
        name: '人均借阅册次',
        type: 'bar',
        barWidth: 8,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FFAF25' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#E83D79' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 4, 4, 0],
            }
        },
        label: {
            show: true,
            position: 'right'
        },
        data: data2

    }]
};
