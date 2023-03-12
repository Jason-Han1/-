
option = {
    baseOption: {
        backgroundColor: '#FFF',
        title: {
            text: 'compare',
            textStyle: {
                align: 'center',
                color: '#000',
                fontSize: 20,
            },
            top: '5%',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        }, {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)'
                        }],
                        global: false
                    }
                },
            },
        },
        timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2007年', '2008年', '2009年',
            ],
        },
        grid: {
            top: '15%',
            left: '5%',
            right: '5%',
            bottom: '15%',
            // containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLine: {'interval':0},
            
            axisLabel: {color: '#000'},
            splitLine: {show: false,},
            data: [
                '北京','\n天津','河北'
            ],

        }],

        yAxis: [{
            type: 'value',
            name: '中国各省市1949到2016年GDP数据 ',
            nameTextStyle: {
                color: '#000',
                align: 'left'
            },
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(158,166,204,0.3)'
                }
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',

                },
            },
            axisTick: {
                show: false,
            },
        }],
    },





    options: [
     {
        title: {
            text: '2007年中国各省市GDP（亿元）',
            subtext: '',
        },
        series: [{
                name: 'new',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#6c50f3",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#6c50f3',
                    }
                },
                itemStyle: {
                    color: "#6c50f3",
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                tooltip: {
                    show: false
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(108,80,243,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(108,80,243,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(108,80,243, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: ['9846.8', '5252.8', '13607.3', '6024.5', '6423.2', '11164.3', '5284.7', '7104.0', '12494.0', '26018.5', '18753.7', '7360.9	', '9248.5', '5800.3', '25776.9', '15012.5	', '9333.4', '9439.6', '31777.0', '5823.4', '1254.2', '4676.1', '10562.4', '2884.1', '4772.5', '341.4', '5757.3', '2704.0', '797.4', '919.1', '3523.2']
            },

        ]
    }, {
        title: {
            text: '2008年中国各省市GDP（亿元）',
            subtext: '',
        },
        series: [{
                name: 'new',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#6c50f3",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#6c50f3',
                    }
                },
                itemStyle: {
                    color: "#6c50f3",
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                tooltip: {
                    show: false
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(108,80,243,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(108,80,243,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(108,80,243, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: ['11115.0	', '6719.0', '16012.0', '7315.4', '8496.2', '13668.6', '6426.1', '8314.4', '14069.9', '30982.0', '21462.7', '8851.7', '10823.0', '6971.1', '30933.3	', '18018.5', '11328.9', '11555.0', '36796.7', '7021.0', '1503.1', '5793.7', '12601.2', '3561.6', '5692.1', '394.9', '7314.6', '3166.8', '1018.6', '1203.9', '4183.2']
            },

        ]
    }, {
        title: {
            text: '2009年中国各省市GDP（亿元）',
            subtext: '',
        },
        series: [{
                name: 'new',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#6c50f3",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#6c50f3',
                    }
                },
                itemStyle: {
                    color: "#6c50f3",
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                tooltip: {
                    show: false
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(108,80,243,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(108,80,243,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(108,80,243, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: ['12153.0', '7521.9	', '17235.5', '7358.3', '9740.3', '15212.5', '7278.8', '8587.0', '15046.5', '34457.3', '22990.4', '10062.8', '12236.5', '7655.2', '33896.7', '19480.5', '12961.1', '13059.7', '39482.6', '7759.2', '1654.2', '6530.0', '14151.3', '3912.7', '6169.8', '441.4	', '8169.8', '3387.6', '1081.3', '1353.3', '4277.1']
            },

        ]
    } ]
};