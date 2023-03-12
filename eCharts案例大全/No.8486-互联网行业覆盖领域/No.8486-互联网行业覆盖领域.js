option = {
    backgroundColor: '#00265f',
    angleAxis: {
        interval: 1,
        type: 'category',
        data: ['资讯',
            '阅读',
            '电商',
            '视频',
            '其他',
            '自媒体',
            '科技',
            '平台',
            '综合',
            '社区 ',
            '直播',
            '工具',
            '制造商',
        ],
        z: 13,
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
        max: 21,
        interval: 3,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: true,
            padding: [0, 0, 20, 0],
            color: "#00c7ff",
            fontSize: 16
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
                value: 20.81,
                itemStyle: {
                    normal: {
                        color: "#f54d4d"
                    }
                }
            },
            {
                value: 12.75,
                itemStyle: {
                    normal: {
                        color: "#f87544"
                    }
                }
            },
            {
                value: 12.75,
                itemStyle: {
                    normal: {
                        color: "#f87544"
                    }
                }
            },
             {
                value: 10.07,
                itemStyle: {
                    normal: {
                        color: "#dcff00"
                    }
                }
            },
            {
                value: 8.72,
                itemStyle: {
                    normal: {
                        color: "#25d053"
                    }
                }
            },
            {
                value: 6.71,
                itemStyle: {
                    normal: {
                        color: "#01fff5"
                    }
                }
            },
            {
                value: 6.71,
                itemStyle: {
                    normal: {
                        color: "#007cff"
                    }
                }
            },
            {
                value: 5.37,
                itemStyle: {
                    normal: {
                        color: "#4245ff"
                    }
                }
            },
            {
                value: 4.70,
                itemStyle: {
                    normal: {
                        color: "#c32eff"
                    }
                }
            },
            {
                value: 4.70,
                itemStyle: {
                    normal: {
                        color: "#ff62e8"
                    }
                }
            },
            {
                value: 4.03,
                itemStyle: {
                    normal: {
                        color: "#4245ff"
                    }
                }
            },
            {
                value: 1.34,
                itemStyle: {
                    normal: {
                        color: "#c32eff"
                    }
                }
            },
            {
                value: 1.34,
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