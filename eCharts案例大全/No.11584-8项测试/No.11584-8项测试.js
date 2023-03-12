option = {
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [
            '敏捷',
            '平衡',
            '无氧耐力',
            '精准',
            '肌肉力量',
            '肌肉耐力',
            '爆发力',
            '速度'
        ],
        z: 10,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#5ab1ef",
                width: 3,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#5ab1ef",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 20,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#5ab1ef",
                width: 3,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: true,
            padding: [0, 0, 20, 0],
            color: "#5ab1ef",
            fontSize: 16
        },
        splitLine: {
            lineStyle: {
                color: "#5ab1ef",
                width: 2,
                type: "solid"
            }
        }
    },
    polar: {},
    series: [{
        type: 'bar',
        data: [{
                value: 87,
                itemStyle: {
                    normal: {
                        color: "#ff9a2a"
                    }
                }
            },
            {
                value: 80,
                itemStyle: {
                    normal: {
                        color: "#de4443"
                    }
                }
            },
            {
                value: 75,
                itemStyle: {
                    normal: {
                        color: "#ba3e43"
                    }
                }
            },
            {
                value: 69,
                itemStyle: {
                    normal: {
                        color: "#d94071"
                    }
                }
            },
            {
                value: 63,
                itemStyle: {
                    normal: {
                        color: "#5693f2"
                    }
                }
            },
            {
                value: 54,
                itemStyle: {
                    normal: {
                        color: "#b24afb"
                    }
                }
            },
            {
                value: 47,
                itemStyle: {
                    normal: {
                        color: "#554bfe"
                    }
                }
            },
            {
                value: 40,
                itemStyle: {
                    normal: {
                        color: "#082b3f"
                    }
                }
            },

        ],
        coordinateSystem: 'polar',
    }],
};