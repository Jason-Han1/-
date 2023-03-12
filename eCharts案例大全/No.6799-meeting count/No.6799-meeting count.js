var dataMap = {
    newData: {
        '2020-01': {
            medtronic: 279,
            anthem: 146,
            ltil: 319,
            meetings: 22,
            onetakeda: 259,
            usnationalgrid: 104,
        },
        '2020-02': {
            medtronic: 76,
            anthem: 333,
            ltil: 431,
            meetings: 60,
            onetakeda: 123,
            usnationalgrid: 17,
        },
        '2020-03': {
            medtronic: 60,
            anthem: 126,
            ltil: 257,
            meetings: 79,
            onetakeda: 34,
            usnationalgrid: 34,
        },
        '2020-04': {
            medtronic: 150,
            anthem: 122,
            ltil: 85,
            meetings: 193,
            onetakeda: 50,
            usnationalgrid: 59,
        },
        '2020-05': {
            medtronic: 353,
            anthem: 22,
            ltil: 180,
            meetings: 228,
            onetakeda: 20,
            usnationalgrid: 118,
        },
        '2020-06': {
            medtronic: 624,
            anthem: 1,
            ltil: 0,
            meetings: 77,
            onetakeda: 14,
            usnationalgrid: 77,
        },
    },
    oldData: {
        '2020-01': {
            medtronic: 230,
            anthem: 100,
            ltil: 190,
            meetings: 21,
            onetakeda: 152,
            usnationalgrid: 100,
        },
        '2020-02': {
            medtronic: 77,
            anthem: 342,
            ltil: 436,
            meetings: 60,
            onetakeda: 129,
            usnationalgrid: 17,
        },
        '2020-03': {
            medtronic: 64,
            anthem: 132,
            ltil: 3,
            meetings: 80,
            onetakeda: 39,
            usnationalgrid: 34,
        },
        '2020-04': {
            medtronic: 156,
            anthem: 122,
            ltil: 18,
            meetings: 196,
            onetakeda: 52,
            usnationalgrid: 65,
        },
        '2020-05': {
            medtronic: 99,
            anthem: 20,
            ltil: 3,
            meetings: 32,
            onetakeda: 6,
            usnationalgrid: 10,
        },
        '2020-06': {
            medtronic: 473,
            anthem: 1,
            ltil: 0,
            meetings: 65,
            onetakeda: 7,
            usnationalgrid: 73,
        },
    },
    standardData:{
        '2020-01': {
            medtronic: 286,
            anthem: 149,
            ltil: 323,
            meetings: 22,
            onetakeda: 265,
            usnationalgrid: 103,
        },
        '2020-02': {
            medtronic: 76,
            anthem: 338,
            ltil: 429,
            meetings: 60,
            onetakeda: 126,
            usnationalgrid: 17,
        },
        '2020-03': {
            medtronic: 61,
            anthem: 128,
            ltil: 257,
            meetings: 79,
            onetakeda: 38,
            usnationalgrid: 36,
        },
        '2020-04': {
            medtronic: 147,
            anthem: 117,
            ltil: 83,
            meetings: 194,
            onetakeda: 48,
            usnationalgrid: 59,
        },
        '2020-05': {
            medtronic: 353,
            anthem: 22,
            ltil: 220,
            meetings: 228,
            onetakeda: 20,
            usnationalgrid: 118,
        },
        '2020-06': {
            medtronic: 634,
            anthem: 1,
            ltil: 0,
            meetings: 77,
            onetakeda: 14,
            usnationalgrid: 77,
        },
    }


};
option = {
    baseOption: {
        backgroundColor: '#080b30',
        title: {
            text: 'compare',
            textStyle: {
                align: 'center',
                color: '#fff',
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
            playInterval: 2000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06'
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
            axisLine: {
                show: true
            },
            splitArea: {
                // show: true,
                color: '#f00',
                lineStyle: {
                    color: '#f00'
                },
            },
            axisLabel: {
                color: '#fff'
            },
            splitLine: {
                show: false
            },
            boundaryGap: false,
            data: ['medtronic', 'anthem', 'ltil', 'meetings', 'onetakeda', 'usnationalgrid'],

        }],

        yAxis: [{
            type: 'value',
            name:'绿色为老数据,蓝色为新数据,橙色为标准线',
            nameTextStyle:{
                color:'#fff',
                align:'left'
            },
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
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
    options: [{
        title: {
            text: '2020-01 count',
            subtext:'1-25至1-31, fraud site report 无数据'
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
                data: [dataMap.newData['2020-01'].medtronic,
                    dataMap.newData['2020-01'].anthem,
                    dataMap.newData['2020-01'].ltil,
                    dataMap.newData['2020-01'].meetings,
                    dataMap.newData['2020-01'].onetakeda,
                    dataMap.newData['2020-01'].usnationalgrid
                ]
            },
            {
                name: 'old',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#00ca95",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00ca95',
                    }
                },

                itemStyle: {
                    color: "#00ca95",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.oldData['2020-01'].medtronic,
                    dataMap.oldData['2020-01'].anthem,
                    dataMap.oldData['2020-01'].ltil,
                    dataMap.oldData['2020-01'].meetings,
                    dataMap.oldData['2020-01'].onetakeda,
                    dataMap.oldData['2020-01'].usnationalgrid
                ]
            },{
                name: 'standard',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#FF8000",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'left',
                    textStyle: {
                        color: '#FF8000',
                    }
                },

                itemStyle: {
                    color: "#FF8000",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.standardData['2020-01'].medtronic,
                    dataMap.standardData['2020-01'].anthem,
                    dataMap.standardData['2020-01'].ltil,
                    dataMap.standardData['2020-01'].meetings,
                    dataMap.standardData['2020-01'].onetakeda,
                    dataMap.standardData['2020-01'].usnationalgrid
                ]
            }
        ]
    }, {
        title: {
            text: '2020-02 count',
            subtext:'',
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
                data: [dataMap.newData['2020-02'].medtronic,
                    dataMap.newData['2020-02'].anthem,
                    dataMap.newData['2020-02'].ltil,
                    dataMap.newData['2020-02'].meetings,
                    dataMap.newData['2020-02'].onetakeda,
                    dataMap.newData['2020-02'].usnationalgrid
                ]
            },
            {
                name: 'old',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#00ca95",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00ca95',
                    }
                },

                itemStyle: {
                    color: "#00ca95",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.oldData['2020-02'].medtronic,
                    dataMap.oldData['2020-02'].anthem,
                    dataMap.oldData['2020-02'].ltil,
                    dataMap.oldData['2020-02'].meetings,
                    dataMap.oldData['2020-02'].onetakeda,
                    dataMap.oldData['2020-02'].usnationalgrid
                ]
            },{
                name: 'standard',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#FF8000",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'left',
                    textStyle: {
                        color: '#FF8000',
                    }
                },

                itemStyle: {
                    color: "#FF8000",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.standardData['2020-02'].medtronic,
                    dataMap.standardData['2020-02'].anthem,
                    dataMap.standardData['2020-02'].ltil,
                    dataMap.standardData['2020-02'].meetings,
                    dataMap.standardData['2020-02'].onetakeda,
                    dataMap.standardData['2020-02'].usnationalgrid
                ]
            }
        ]
    },{
        title: {
            text: '2020-03 count',
            subtext:'03-03至03-31 ltil无数据',
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
                data: [dataMap.newData['2020-03'].medtronic,
                    dataMap.newData['2020-03'].anthem,
                    dataMap.newData['2020-03'].ltil,
                    dataMap.newData['2020-03'].meetings,
                    dataMap.newData['2020-03'].onetakeda,
                    dataMap.newData['2020-03'].usnationalgrid
                ]
            },
            {
                name: 'old',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#00ca95",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00ca95',
                    }
                },

                itemStyle: {
                    color: "#00ca95",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.oldData['2020-03'].medtronic,
                    dataMap.oldData['2020-03'].anthem,
                    dataMap.oldData['2020-03'].ltil,
                    dataMap.oldData['2020-03'].meetings,
                    dataMap.oldData['2020-03'].onetakeda,
                    dataMap.oldData['2020-03'].usnationalgrid
                ]
            },{
                name: 'standard',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#FF8000",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'left',
                    textStyle: {
                        color: '#FF8000',
                    }
                },

                itemStyle: {
                    color: "#FF8000",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.standardData['2020-03'].medtronic,
                    dataMap.standardData['2020-03'].anthem,
                    dataMap.standardData['2020-03'].ltil,
                    dataMap.standardData['2020-03'].meetings,
                    dataMap.standardData['2020-03'].onetakeda,
                    dataMap.standardData['2020-03'].usnationalgrid
                ]
            }
        ]
    },{
        title: {
            text: '2020-04 count',
            subtext:'ltil数据很少',
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
                data: [dataMap.newData['2020-04'].medtronic,
                    dataMap.newData['2020-04'].anthem,
                    dataMap.newData['2020-04'].ltil,
                    dataMap.newData['2020-04'].meetings,
                    dataMap.newData['2020-04'].onetakeda,
                    dataMap.newData['2020-04'].usnationalgrid
                ]
            },
            {
                name: 'old',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#00ca95",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00ca95',
                    }
                },

                itemStyle: {
                    color: "#00ca95",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.oldData['2020-04'].medtronic,
                    dataMap.oldData['2020-04'].anthem,
                    dataMap.oldData['2020-04'].ltil,
                    dataMap.oldData['2020-04'].meetings,
                    dataMap.oldData['2020-04'].onetakeda,
                    dataMap.oldData['2020-04'].usnationalgrid
                ]
            },{
                name: 'standard',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#FF8000",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'left',
                    textStyle: {
                        color: '#FF8000',
                    }
                },

                itemStyle: {
                    color: "#FF8000",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.standardData['2020-04'].medtronic,
                    dataMap.standardData['2020-04'].anthem,
                    dataMap.standardData['2020-04'].ltil,
                    dataMap.standardData['2020-04'].meetings,
                    dataMap.standardData['2020-04'].onetakeda,
                    dataMap.standardData['2020-04'].usnationalgrid
                ]
            }
        ]
    },{
        title: {
            text: '2020-05 count',
            subtext:'05-09至05-31无数据',
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
                data: [dataMap.newData['2020-05'].medtronic,
                    dataMap.newData['2020-05'].anthem,
                    dataMap.newData['2020-05'].ltil,
                    dataMap.newData['2020-05'].meetings,
                    dataMap.newData['2020-05'].onetakeda,
                    dataMap.newData['2020-05'].usnationalgrid
                ]
            },
            {
                name: 'old',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#00ca95",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00ca95',
                    }
                },

                itemStyle: {
                    color: "#00ca95",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.oldData['2020-05'].medtronic,
                    dataMap.oldData['2020-05'].anthem,
                    dataMap.oldData['2020-05'].ltil,
                    dataMap.oldData['2020-05'].meetings,
                    dataMap.oldData['2020-05'].onetakeda,
                    dataMap.oldData['2020-05'].usnationalgrid
                ]
            },{
                name: 'standard',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#FF8000",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'left',
                    textStyle: {
                        color: '#FF8000',
                    }
                },

                itemStyle: {
                    color: "#FF8000",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.standardData['2020-05'].medtronic,
                    dataMap.standardData['2020-05'].anthem,
                    dataMap.standardData['2020-05'].ltil,
                    dataMap.standardData['2020-05'].meetings,
                    dataMap.standardData['2020-05'].onetakeda,
                    dataMap.standardData['2020-05'].usnationalgrid
                ]
            }
        ]
    },{
        title: {
            text: '2020-06 count',
            subtext:'',
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
                data: [dataMap.newData['2020-06'].medtronic,
                    dataMap.newData['2020-06'].anthem,
                    dataMap.newData['2020-06'].ltil,
                    dataMap.newData['2020-06'].meetings,
                    dataMap.newData['2020-06'].onetakeda,
                    dataMap.newData['2020-06'].usnationalgrid
                ]
            },
            {
                name: 'old',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#00ca95",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00ca95',
                    }
                },

                itemStyle: {
                    color: "#00ca95",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.oldData['2020-06'].medtronic,
                    dataMap.oldData['2020-06'].anthem,
                    dataMap.oldData['2020-06'].ltil,
                    dataMap.oldData['2020-06'].meetings,
                    dataMap.oldData['2020-06'].onetakeda,
                    dataMap.oldData['2020-06'].usnationalgrid
                ]
            },{
                name: 'standard',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        color: "#FF8000",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'left',
                    textStyle: {
                        color: '#FF8000',
                    }
                },

                itemStyle: {
                    color: "#FF8000",
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
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [dataMap.standardData['2020-06'].medtronic,
                    dataMap.standardData['2020-06'].anthem,
                    dataMap.standardData['2020-06'].ltil,
                    dataMap.standardData['2020-06'].meetings,
                    dataMap.standardData['2020-06'].onetakeda,
                    dataMap.standardData['2020-06'].usnationalgrid
                ]
            }
        ]
    },]
};