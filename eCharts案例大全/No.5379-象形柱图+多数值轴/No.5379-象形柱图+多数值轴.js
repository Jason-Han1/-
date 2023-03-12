var color5 = ['#E5E5E5', '#FF726B', '#00FFFF', '#0FFF31'];

option = {
    backgroundColor: '#272b2b',
    color: color5,
    textStyle: {
        fontSize: 18,
        color: '#F5F5F5'
    },
    title: [{
            text: '东方航空',
            left: '22%',
            top: "13%",
            textStyle: {
                color: '#F5F5F5',
                fontSize: 21,
                fontWeight: 'bold',
            },
            textAlign: 'center'
        },
        {
            text: '中国国航',
            left: '44%',
            top: "13%",
            textStyle: {
                color: '#F5F5F5',
                fontSize: 21,
                fontWeight: 'bold',
            },
            textAlign: 'center'
        },
        {
            text: '南方航空',
            left: '63.6%',
            top: "13%",
            textStyle: {
                color: '#F5F5F5',
                fontSize: 21,
                fontWeight: 'bold',
            },
            textAlign: 'center'
        },
        {
            text: '海南航空',
            left: '84.5%',
            top: "13%",
            textStyle: {
                color: '#F5F5F5',
                fontSize: 21,
                fontWeight: 'bold',
            },
            textAlign: 'center'
        }
    ],
    xAxis: [{
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'value',
            max: 100,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 1,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 1,
            type: 'value',
            max: 100,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 2,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 2,
            type: 'value',
            max: 100,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 3,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 3,
            type: 'value',
            max: 100,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }
    ],
    yAxis: [{
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: 30,
                color: '#F5F5F5',
                fontSize: 18,
                align: 'right',
            },
            data: ['取消量', '延误量', '计划航班量', '执行率']
        },
        {
            show: false,
            gridIndex: 1,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: ['取消量', '延误量', '计划航班量', '执行率']
        },
        {
            show: false,
            gridIndex: 2,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: ['取消量', '延误量', '计划航班量', '执行率']
        },
        {
            show: false,
            gridIndex: 3,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: ['取消量', '延误量', '计划航班量', '执行率']
        }
    ],
    grid: [{
            left: '17%',
            top: '25%',
            width: '12%',
            height: '70%'
        },
        {
            left: '38%',
            top: '25%',
            width: '12%',
            height: '70%'
        },
        {
            left: '58%',
            top: '25%',
            width: '12%',
            height: '70%'
        },
        {
            left: '78%',
            top: '25%',
            width: '12%',
            height: '70%'
        }
    ],
    series: [{
            type: 'pictorialBar',
            name: 'otherValue',
            itemStyle: {
                color: function(params) {
                    return color5[params.dataIndex];
                }
            },
            label: {
                show: true,
                color: 'auto',
                position: 'right',
                offset: [10, 0],
                formatter: function(param) {
                    return param.dataIndex == 3 ? '' : param.value;
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            data: [131, 231, 381, 0],
            z: 10
        },
        {
            type: 'pictorialBar',
            name: 'realValue',
            xAxisIndex: 1,
            itemStyle: {
                color: '#0FFF31',
                borderColor: "#0FFF31",
                borderWidth: 1
            },
            label: {
                show: true,
                color: '#0FFF31',
                position: 'right',
                offset: [10, 0],
                formatter: function(param) {
                    return param.value > 0 ? param.value + '%' : '';
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            symbolBoundingData: 100,
            data: [0, 0, 0, 80],
            z: 10
        },
        {
            type: 'pictorialBar',
            name: 'background',
            xAxisIndex: 1,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(2,74,124,0.48)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(10,69,163,0.48)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderColor: "#1BC533",
                borderWidth: 0.5
            },
            label: {
                show: false
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            symbolBoundingData: 100,
            data: [0, 0, 0, 100],
            z: 2
        },
        {
            type: 'pictorialBar',
            name: 'otherValue',
            xAxisIndex: 2,
            yAxisIndex: 1,
            itemStyle: {
                color: function(params) {
                    return color5[params.dataIndex];
                }
            },
            label: {
                show: true,
                color: 'auto',
                position: 'right',
                offset: [10, 0],
                formatter: function(param) {
                    return param.dataIndex == 3 ? '' : param.value;
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            data: [131, 231, 381, 0],
            z: 10
        },
        {
            type: 'pictorialBar',
            name: 'realValue',
            xAxisIndex: 3,
            yAxisIndex: 1,
            itemStyle: {
                color: '#0FFF31',
                borderColor: "#0FFF31",
                borderWidth: 0.51
            },
            label: {
                show: true,
                color: '#0FFF31',
                position: 'right',
                offset: [10, 0],
                formatter: function(param) {
                    return param.value > 0 ? param.value + '%' : '';
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            symbolBoundingData: 100,
            data: [0, 0, 0, 80],
            z: 10
        },
        {
            type: 'pictorialBar',
            name: 'background',
            xAxisIndex: 3,
            yAxisIndex: 1,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(2,74,124,0.48)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(10,69,163,0.48)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderColor: "#1BC533",
                borderWidth: 0.5
            },
            label: {
                show: false
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            symbolBoundingData: 100,
            data: [0, 0, 0, 100],
            z: 2
        },
        {
            type: 'pictorialBar',
            name: 'otherValue',
            xAxisIndex: 4,
            yAxisIndex: 2,
            itemStyle: {
                color: function(params) {
                    return color5[params.dataIndex];
                }
            },
            label: {
                show: true,
                color: 'auto',
                position: 'right',
                offset: [10, 0],
                formatter: function(param) {
                    return param.dataIndex == 3 ? '' : param.value;
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            data: [131, 231, 381, 0],
            z: 10
        },
        {
            type: 'pictorialBar',
            name: 'realValue',
            xAxisIndex: 5,
            yAxisIndex: 2,
            itemStyle: {
                color: '#0FFF31',
                borderColor: "#0FFF31",
                borderWidth: 0.51
            },
            label: {
                show: true,
                color: '#0FFF31',
                position: 'right',
                offset: [10, 0],
                formatter: function(param) {
                    return param.value > 0 ? param.value + '%' : '';
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            symbolBoundingData: 100,
            data: [0, 0, 0, 80],
            z: 10
        },
        {
            type: 'pictorialBar',
            name: 'background',
            xAxisIndex: 5,
            yAxisIndex: 2,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(2,74,124,0.48)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(10,69,163,0.48)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderColor: "#1BC533",
                borderWidth: 0.5
            },
            label: {
                show: false
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            symbolBoundingData: 100,
            data: [0, 0, 0, 100],
            z: 2
        },
        {
            type: 'pictorialBar',
            name: 'otherValue',
            xAxisIndex: 6,
            yAxisIndex: 3,
            itemStyle: {
                color: function(params) {
                    return color5[params.dataIndex];
                }
            },
            label: {
                show: true,
                color: 'auto',
                position: 'right',
                offset: [10, 0],
                formatter: function(param) {
                    return param.dataIndex == 3 ? '' : param.value;
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            data: [131, 231, 381, 0],
            z: 10
        },
        {
            type: 'pictorialBar',
            name: 'realValue',
            xAxisIndex: 7,
            yAxisIndex: 3,
            itemStyle: {
                color: '#0FFF31',
                borderColor: "#0FFF31",
                borderWidth: 1
            },
            label: {
                show: true,
                color: '#0FFF31',
                position: 'right',
                offset: [10, 0],
                formatter: function(param) {
                    return param.value > 0 ? param.value + '%' : '';
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            symbolBoundingData: 100,
            data: [0, 0, 0, 80],
            z: 10
        },
        {
            type: 'pictorialBar',
            name: 'background',
            xAxisIndex: 7,
            yAxisIndex: 3,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(2,74,124,0.48)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(10,69,163,0.48)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderColor: "#1BC533",
                borderWidth: 0.5
            },
            label: {
                show: false
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['15%', '70%'],
            symbolPosition: "start",
            symbolBoundingData: 100,
            data: [0, 0, 0, 100],
            z: 2
        }
    ]
};