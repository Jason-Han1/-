option = {
            backgroundColor: '#010f1c',
            title: [{
                text: '12h进出流量',
                textAlign: 'center',
                textStyle: {
                    color: '#0fc2e7',
                    fontSize: 14,
                    lineHeight: 12
                },

                right: '30%',
                top: '0%',
            }],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    },
                }
            },
            legend: {
                icon: 'roundRect',
                itemWidth: 10,
                itemHeight: 5,

                data: ['门诊','住院','出院' ],
                textStyle: {
                    fontSize: 12, //字体大小
                    color: '#f5feff', //字体颜色
                },
                right: 'center', //距离右侧
                top:'12%'
            },
            grid: {
                left: '4%',
                top: '60px',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisTick: {
                    show: false
                },
                axisLine: {

                    lineStyle: {
                        color: '#14568d',

                    }
                },
                axisLabel: {
                    // interval: 0, //设置x轴的标签显示可自适应
                    show: true,
                    textStyle: {
                        color: '#e7f5fb'
                    }
                },
                data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

            }],
            yAxis: [{
                type: 'value',
                name: '单位/人',
                nameTextStyle: { //y轴上方单位的颜色
                    color: '#e7f5fb'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true, //y轴线
                    lineStyle: {
                        color: '#14568d',

                    }
                },
                axisLabel: {
                    // margin: 10,
                    textStyle: {
                        fontSize: 12,
                        color: '#e7f5fb',
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: ['#56859d'],
                        width: 1,
                        type: 'solid'
                    }
                },


            }],
            series: [
                {
                    name: '住院',
                    type: 'line',
                    // smooth: true,
                    symbol: 'circle',
                    symbolSize: 2,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#a52c6b',
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(165,44,107,0.8)'
                            },
                                {
                                    offset: 0.5,
                                    color: 'rgba(165,44,107,0.4)'
                                },
                                {
                                    offset: 0.8,
                                    color: 'rgba(165,44,107,0.2)'
                                },
                                {
                                    offset: 1,
                                    color: 'transparent'
                                }
                            ], false),
                            // shadowColor: 'rgba(232,246,254,0.2)',
                            shadowBlur: 30
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#a52c6b',
                            borderColor: '#a52c6b',
                            borderWidth: 0

                        }
                    },

                    data: [42, 30, 45, 27, 38, 26, 44, 35, 54, 34, 52, 24,55],
                },
                {
                    name: '出院',
                    type: 'line',
                    // smooth: true,
                    symbol: 'circle',
                    symbolSize: 2,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#07d9a2',
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(7,217,162,0.8)'
                            },
                                {
                                    offset: 0.5,
                                    color: 'rgba(7,217,162,0.4)'
                                },
                                {
                                    offset: 0.8,
                                    color: 'rgba(7,217,162,0.2)'
                                },
                                {
                                    offset: 1,
                                    color: 'transparent'
                                }
                            ], false),
                            // shadowColor: 'rgba(232,246,254,0.2)',
                            shadowBlur: 30
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#07d9a2',
                            borderColor: '#07d9a2',
                            borderWidth: 0

                        }
                    },

                    data: [12, 20, 13, 24, 10, 30, 20, 55, 28, 20, 50, 55, 50],
                },
                {
                    name: '门诊',
                    type: 'line',
                    // smooth: true,
                    symbol: 'circle',
                    symbolSize: 2,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#0e8be3',
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(14,139,227,0.7)'
                            },
                                {
                                    offset: 0.5,
                                    color: 'rgba(14,139,227,0.4)'
                                },
                                {
                                    offset: 0.8,
                                    color: 'rgba(14,139,227,0.2)'
                                },
                                {
                                    offset: 1,
                                    color: 'transparent'
                                }
                            ], false),
                            // shadowColor: 'rgba(232,246,254,0.2)',
                            shadowBlur: 30
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#0e8be3',
                            borderColor: '#0e8be3',
                            borderWidth: 0

                        }
                    },

                    data: [12, 18, 15, 20, 25, 21, 30, 20, 50, 60, 120, 40,55],
                },

            ]
        }