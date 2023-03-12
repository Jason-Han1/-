option = {
    backgroundColor: '#00265f',
    angleAxis: {
        interval: 1,
        type: 'category',
        data: ['1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月 ',
            '11月 ',
            '12月 '
        ],
        z: 10,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#00c7ff",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
        min: 0,
        max: 10,
        interval: 1,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value} 万',
            show: true,
            padding: [0, 0, 20, 0],
            color: "#00c7ff",
            fontSize: 14
        },
        splitLine: {
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            }
        }
    },
    polar: {},
    series: [{
        type: 'bar',
        data: [{
                value:5.2411,
                itemStyle: {
                    normal: {
                        color: "#f54d4d"
                    }
                }
            },
            {
                value: 2.4115,
                itemStyle: {
                    normal: {
                        color: "#f87544"
                    }
                }
            },
            {
                value: 6.7911,
                itemStyle: {
                    normal: {
                        color: "#ffae00"
                    }
                }
            },
            {
                value: 8.8065,
                itemStyle: {
                    normal: {
                        color: "#dcff00"
                    }
                }
            },
            {
                value: 5.7217,
                itemStyle: {
                    normal: {
                        color: "#25d053"
                    }
                }
            },
            {
                value:5.3058,
                itemStyle: {
                    normal: {
                        color: "#01fff5"
                    }
                }
            },
            {
                value: 3.9398,
                itemStyle: {
                    normal: {
                        color: "#007cff"
                    }
                }
            },
            {
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#4245ff"
                    }
                }
            },
            {
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#c32eff"
                    }
                }
            },
            {
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#ff62e8"
                    }
                }
            },
            {
                value: 0.8595,
                itemStyle: {
                    normal: {
                        color: "#ff62e8"
                    }
                }
            },
            {
                value:2.3129,
                itemStyle: {
                    normal: {
                        color: "#ff62e8"
                    }
                }
            }
        ],
        coordinateSystem: 'polar',
    }],
};