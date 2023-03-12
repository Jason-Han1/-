option = {
    backgroundColor: '#000',
    color: ['#fedd32', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', ],
    tooltip: {
        trigger: 'axis',
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 50,

    },
    "title": {
        "text": "未来半月气温预计",
        "subtext": "by:wang dingding",
        x: "10%",
        y: "5%",

        textStyle: {
            color: '#cccccc',
            fontSize: '20'
        },
        subtextStyle: {
            color: '#777777',
            fontSize: '14',

        },


    },
    xAxis: {
        
        boundaryGap:false,
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#fedd32'

            },
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true
        },
        splitLine: {
            show: false
        },
        "axisLine": {
            lineStyle: {
                color: '#fedd32'
            }
        },

        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [{
            name: '01',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            showSymbol: false,
            data: [8.2, 10, 16, 8, 18, 27, 22, 30, 27, 24, 30, 33, 37, 29, 36],
            markPoint: {
                label: {
                    normal: {
                        textStyle: {
                            color: '#333'
                        }
                    }
                },
                data: [{
                    type: 'max',
                    name: '最大值',

                }, {
                    type: 'min',
                    name: '最小值'
                }]
            }

        }, {
            name: '02',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [7.9, 10, 12.3, 11, 16, 19, 21, 17, 20, 18, 13.6, 18, 20, 12, 17],
        }, {
            name: '03',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [7.1, 8.6, 12.3, 10.4, 16.4, 20.2, 22.7, 18.5, 21.2, 19, 16,20, 23.7, 13.7, 18],
        },

        {
            name: '04',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [7.3, 8.3, 11.3, 11.5, 17.1, 20.5, 23.4, 21.6, 23.7, 25, 23.4, 27.8, 34, 21.5, 23.2],
        },

        {
            name: '05',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [8, 9, 13, 12, 19.7, 22, 24, 20, 23, 24.4, 19.7,  25.6, 32.1, 25., 29.2],
        },

        {
            name: '06',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [7.6, 8.9, 11.5, 11.7, 17.9, 21.4, 23.4, 21.8, 25.7, 25.5, 20.7,25.6, 31.5, 17.5, 18.8],
        },

        {
            name: '07',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [8.3, 9.6, 13.5, 11.3, 16.4, 19.8, 21.6, 20.5, 24.8, 25.3, 21.3,25.9, 32.8, 20.5, 21.8],
        }, {
            name: '08',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [8.9, 12, 15, 12.4, 18, 21, 22.3, 21, 22.5, 23.4, 19.4,23.6, 28.5, 22.5, 25.8],
        }, {
            name: '09',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [8, 13.4, 14.1, 12.9, 22, 25, 23.4, 19.1, 22, 20.5, 17.4,22.6, 27.5, 15.5, 18.4],
        }, {
            name: '10',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [7.8, 12.9, 14.5, 16.3, 21, 26, 28, 23.1, 26.3, 27.5, 23.8,29.6, 35.6, 23.1, 27.8],
        }, {
            name: '11',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [7.2, 12.5, 16, 13, 20.8, 23.5, 25.6, 22.4, 27, 28.6, 25.4,31.8, 36.3, 25.5, 30.8],
        }, {
            name: '12',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [9.1, 10.3, 15, 17, 20, 23, 25, 22, 26, 25.7, 22, 27, 33.1, 27.1,38],
        }, {
            name: '13',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [8.2, 12.4, 15, 13, 21.1, 27.8, 30.1, 28.2, 29.4, 30.8, 31.4, 37, 42.3, 33.5, 42.5],
        }, {
            name: '14',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [9.1, 11.5, 17, 14.5, 20, 24, 27, 24, 27.8, 29.3, 28.9, 33, 37, 27.8, 39],
        }, {
            name: '15',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 0.5
                }
            },
            data: [8.7, 11, 15, 15.8, 21.2, 27.5, 29.3, 27.1, 28.7, 29.8, 31, 35.5, 39.3, 30.5, 41],
        },

    ]
};