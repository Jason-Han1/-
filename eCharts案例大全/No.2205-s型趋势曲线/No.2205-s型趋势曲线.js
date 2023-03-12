option = {
                    tooltip: {
                        trigger: 'axis',
                        show:false
                    },
                    grid: {
                        left: "4%",
                        bottom: "0%",
                        top: "20%",
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            axisTick: {
                                alignWithLabel: true,
                            },
                            axisLabel: {
                                textStyle: {
                                    fontSize: 20,
                                },
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#2E75B6',
                                    shadowColor: '#2E75B6',
                                    shadowOffsetX: '24',
                                    width: 1,
                                },
                                symbol: ['none', 'arrow'],
                                symbolSize: [6, 10],
                                symbolOffset: [0, 30],
                            },
                        },
                    ],
                    yAxis: {
                        type: 'value',
                        splitNumber: 5,
                        max: 1,
                        splitLine: {
                            lineStyle: {
                                type: 'dashed',
                                color: '#DDD',
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 16,
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2E75B6',
                            },
                        },
                        nameTextStyle: {
                            color: '#999',
                        },
                        splitArea: {
                            show: false,
                        },
                    },

                    visualMap: {
                        type: 'piecewise',
                        show: false,
                        pieces: [
                            {
                                gt: 0,
                                lte: 6,
                                color: 'white',
                            },
                        ],
                    },
                    series: [
                        {
                            name: '成长阶段',
                            type: 'line',
                            // data: [0, 10, 22, 32, 40, 47, 50, 52, 53, 53, 53],
                            symbol: 'none',
                            showAllSymbol: false,
                            symbolSize: 12,
                            hoverAnimation: false,
                            data: [
                                [0, 0.0005],
                                [100, 0.005],
                                [200, 0.1],
                                [300, 0.655],
                                [400, 0.755],
                                [490, 0.805],
                            ],
                            areaStyle: {},
                            lineStyle: {
                                normal: {
                                    width: 3,
                                    color: '#f26264',
                                },
                            },

                            itemStyle: {
                                show:false,
                                normal: {
                                    show:false,
                                    color: '#f26264',
                                    borderWidth: 1,
                                    borderColor: '#f26264',
                                },
                            },
                            smooth: true,

                            markLine: {
                                symbol: 'none',
                                data: [
                                    [
                                        {
                                            name: '初期阶段',
                                            "yAxis":  0.1904,
                                            "x": "32.5%",
                                            // coord: [1, 0.1904],
                                            label: {
                                                fontSize: 18,
                                                formatter: '{b|种群初始化}',
                                                distance:[-80,40],
                                                rich: {
                                                    //公共样式
                                                    a: {
                                                        color: '#333',
                                                        lineHeight: 28,
                                                        fontSize: 18,
                                                    },
                                                    b: {
                                                        color: '#10243F',
                                                        fontWeight: 'bold',
                                                        fontSize: 18,
                                                    },
                                                },
                                                position: 'insideStartBottom',
                                            },
                                            lineStyle: {
                                                normal: {
                                                    color: '#708AB7',
                                                    width: 2,
                                                    type: 'solid',
                                                },
                                            },
                                        },
                                        {
                                            // coord: [3, 0.1904],
                                            "yAxis":  0.1904,
                                            "x": "57.5%",
                                        },
                                    ],
                                    [
                                        {
                                            name: '19.04%',
                                            // coord: [1, 0.1904],
                                            "yAxis":  0.1904,
                                            "x": "32.5%",
                                            label: {
                                                fontSize: 18,
                                                color: '#10243F',
                                                fontWeight: 'bold',
                                                position: 'end',
                                            },
                                            lineStyle: {
                                                normal: {
                                                    color: '#708AB7',
                                                    width: 0,
                                                    type: 'solid',
                                                },
                                            },
                                        },
                                        {
                                            // coord: [3, 0.1904],
                                            "yAxis":  0.1904,
                                            "x": "57.5%",
                                        },
                                    ],
                                    [
                                        {
                                            name: '培育期',
                                            // coord: [2,0.50],
                                            "yAxis":  0.5,
                                            "x": "42.5%",
                                            label: {
                                                fontSize: 18,
                                                formatter:'{b|迭代优化阶段}',
                                                distance:[-120,80],
                                                rich: {
                                                    //公共样式
                                                    a: {
                                                        color: '#333',
                                                        lineHeight: 28,
                                                        fontSize: 18,
                                                    },
                                                    b: {
                                                        color: '#632523',
                                                        fontWeight: 'bold',
                                                        fontSize: 18,
                                                    },
                                                },
                                                position: 'insideStartBottom',
                                            },
                                            lineStyle: {
                                                normal: {
                                                    color: '#708AB7',
                                                    width: 2,
                                                    type: 'solid',
                                                },
                                            },
                                        },
                                        {
                                            // coord: [4, 0.50],
                                            "yAxis":  0.5,
                                            "x": "65%",
                                        },
                                    ],

                                    [
                                        {
                                            name: '50%',
                                            // coord: [2,0.50],
                                            "yAxis":  0.5,
                                            "x": "42.5%",
                                            label: {
                                                fontSize: 18,
                                                color: '#632523',
                                                fontWeight: 'bold',
                                                position: 'end',
                                            },
                                            lineStyle: {
                                                normal: {
                                                    color: '#708AB7',
                                                    width: 2,
                                                    type: 'solid',
                                                },
                                            },
                                        },
                                        {
                                            // coord: [4, 0.50],
                                            "yAxis":  0.5,
                                            "x": "65%",
                                        },
                                    ],
                                    [
                                        {
                                            name: '成长期',
                                            "yAxis":  0.8096,
                                            "x": "52.5%",
                                            // coord: [3, 0.8096],
                                            label: {
                                                fontSize: 18,
                                                formatter: '{b|逼近迭代最优}',
                                                distance:[-120,80],
                                                rich: {
                                                    //公共样式
                                                    a: {
                                                        color: '#333',
                                                        lineHeight: 28,
                                                        fontSize: 18,
                                                    },
                                                    b: {
                                                        color: '#E87A0A',
                                                        fontWeight: 'bold',
                                                        fontSize: 18,
                                                    },
                                                },
                                                position: 'insideStartBottom',
                                            },
                                            lineStyle: {
                                                normal: {
                                                    color: '#708AB7',
                                                    width: 2,
                                                    type: 'solid',
                                                },
                                            },
                                        },
                                        {
                                            // coord: [5, 0.8096],
                                            "yAxis":  0.8096,
                                            "x": "75.5%",
                                        },
                                    ],
                                    [
                                        {
                                            name: '80.96%',
                                            "yAxis":  0.8096,
                                            "x": "92.5%",
                                            label: {
                                                fontSize: 18,
                                                color: '#E87A0A',
                                                fontWeight: 'bold',
                                                position: 'end',
                                            },
                                            lineStyle: {
                                                normal: {
                                                    color: '#708AB7',
                                                    width: 2,
                                                    type: 'solid',
                                                },
                                            },
                                        },
                                        {
                                            "yAxis":  0.8096,
                                            "x": "85.5%",
                                        },
                                    ],
                                    [
                                        {
                                            name: '成熟期',
                                            show:false,
                                            "yAxis":  0.95,
                                            "x": "65.25%",
                                            label: {
                                                fontSize: 18,
                                                formatter: '{b|到达迭代最优}',
                                                distance:[-90,10],
                                                rich: {
                                                    //公共样式
                                                    a: {
                                                        color: '#333',
                                                        lineHeight: 28,
                                                        fontSize: 18,
                                                    },
                                                    b: {
                                                        color: '#C2524D',
                                                        fontWeight: 'bold',
                                                        fontSize: 18,
                                                    },
                                                },
                                                position: 'insideStartBottom',
                                            },
                                            lineStyle: {
                                                show:false,
                                                normal: {
                                                    show:false,
                                                    color: '#708AB7',
                                                    width: 2,
                                                    type: 'solid',
                                                },
                                            },
                                        },
                                        {
                                            "yAxis":  0.95,
                                            "x": "65.25%",
                                        },
                                    ],
                                ],
                            },
                        },
                    ],
                };