option = {
    title: {
        show: false,
        text: '',
        x: 16,
        y: 20,
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#38394C'
        }
    },
    dataZoom: [
        // {
        //   type: 'slider',
        //   show: true,
        //   xAxisIndex: [0],
        //   start: 0,
        //   end: 100
        // },
        // {
        //   type: 'slider',
        //   show: true,
        //   yAxisIndex: [0],
        //   left: '93%',
        //   start: 0,
        //   end: 100
        // },
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 0,
            end: 100
        }
    ],
    grid: {
        top: 30,
        right: '6%',
        left: '8%',
        bottom: '10%'
    },
    tooltip: {
        trigger: 'item',
        formatter(params) {
            return `'x轴'：10%</br> y轴：20%`;
        },
        padding: 4
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['数量']
    },
    xAxis: {
        name: 'x\n轴\n完\n成\n率',
        nameTextStyle: {
            color: '#38394C',
            padding: [0, 0, -30, -10],
            fontSize: 14
        },
        nameLocation: 'end',
        splitNumber: 3,
        interval: 50,
        max: 150,
        axisLine: {
            lineStyle: {
                color: '#D1D4E2'
            }
        },
        axisLabel: {
            color: '#38394C',
            showMaxLabel: false,
            showMinLabel: false,
            formatter: '{value}%',
            fontSize: 14
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: ['#D1D4E2', '#D1D4E2', '#D1D4E2', '#FFFFFF']
            }
        }
    },
    yAxis: {
        name: 'y\n轴\n完\n成\n率',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#38394C',
            padding: [0, 30, -56, 0],
            fontSize: 14
        },
        splitNumber: 3,
        interval: 50,
        max: 100,
        min: 0,
        axisLine: {
            lineStyle: {
                color: '#D1D4E2'
            }
        },
        axisLabel: {
            color: '#38394C',
            showMaxLabel: false,
            showMinLabel: false,
            formatter: '{value}%',
            fontSize:14
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: ['#D1D4E2', '#D1D4E2', '#D1D4E2', '#D1D4E2', '#FFFFFF']
            }
        }
    },
    series: [{
        symbolSize: 22,
        markPoint: {
            symbol: 'roundRect',
            symbolSize: 12
        },
        markArea: { // 标记区域
            silent: true,
            itemStyle: { // 全局的
                normal: {
                    color: '#FEFBF3'
                }
            },
            data: [
                [{
                        yAxis: '-50', // y轴坐标控制
                        xAxis: '0',
                        itemStyle: {
                            color: '#ff9797',
                            opacity: 0.1
                        }
                    },
                    {
                        yAxis: '0',
                        xAxis: '150'
                    }
                ],
                [{
                        yAxis: '0', // y轴坐标控制
                        xAxis: '0',
                        itemStyle: {
                            color: '#ff9797',
                            opacity: 0.1
                        }
                    },
                    {
                        yAxis: '50',
                        xAxis: '50'
                    }
                ],
                [{
                    yAxis: '0',
                    xAxis: '50',
                    itemStyle: {
                        color: '#f0d374',
                        opacity: 0.1
                    }
                }, {
                    yAxis: '50',
                    xAxis: '150'
                }],
                [{
                    yAxis: '50',
                    xAxis: '0',
                    itemStyle: {
                        color: '#f0d374',
                        opacity: 0.1
                    }
                }, {
                    yAxis: '100',
                    xAxis: '100'
                }],
                [{
                    yAxis: '50',
                    xAxis: '100',
                    itemStyle: {
                        color: '#5dcbe3',
                        opacity: 0.1
                    }
                }, {
                    yAxis: '100',
                    xAxis: '150'
                }]
            ]
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     formatter(param) {
        //       console.log(param);
        //       return param.data[3];
        //     },
        //     padding: 10,
        //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //     position: 'right'
        //   }
        // },
        data: [
            [28, 16, '数据1'],
            [73, 36, '数据2'],
            [78, 96, '数据3'],
            [103, 96, '数据4'],
            [128, 96, '数据5'],
            [128, 89, '数据6'],
            [36, 89, '数据7'],
            [126, 29, '数据8']
        ],
        type: 'scatter',
        itemStyle: {
            normal: {
                color(params) {
                    var colorList = [
                        ['#ECB4CD', '#D57D9E'], // 红色
                        ['#F6D9A0', '#E9B267'], // 黄色
                        ['#89D8E3', '#51B0C3'] // 蓝色
                    ];
                    var index = 1;
                    // 数据坐标轴x params.data[0] 数据坐标轴y params.data[1]
                    var params_X = params.data[0];
                    var params_y = params.data[1];
                    if (params_X >= 0 && params_y <= 0) {
                        index = 0;
                    } else if (params_X >= 0 && params_X < 50 && params_y > 0 && params_y <= 50) {
                        index = 0;
                    } else if (params_X >= 0 && params_X < 100 && params_y > 50) {
                        index = 1;
                    } else if (params_X >= 100 && params_y > 0 && params_y <= 50) {
                        index = 1;
                    } else if (params_X >= 100 && params_y > 50) {
                        index = 2;
                    }
                    return new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: colorList[index][0]
                            },
                            {
                                offset: 1,
                                color: colorList[index][1]
                            }
                        ]);
                },
                label: {
                    color: '#38394C',
                    show: true,
                    padding: [0, 0, 0, -4.6],
                    fontSize: 10,
                    position: 'right',
                    verticalAlign: 'middle',
                    // rotate: 90,
                    formatter(params) {
                        return `${params.data[2]}`;
                    }
                    // backgroundColor: '#dcdcdc',
                    // padding: [6, 10, 6, 10]
                }
            }
        }
    }]
};