var hours = ['四级', '三级', '二级', '一级', '特大', '重大'

];
var days = ['0.2', '0.4', '0.6', '0.8', '1.0'];

var data = [
    [0, 4, 1],
    [1, 3, 6],
    [1, 4, 5],
    [2, 2, 1],
    [2, 3, 1],
    [2, 4, 1],
    [3, 4, 3],
    [4, 4, 3],
    [5, 4, 3],
    [5, 3, 3],
    [5, 4, 3]
];
option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        top: '10%'
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: 'red'
            }
        },
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: 'red'
            }
        },

        data: days,
        splitArea: {
            show: true
        }
    },
    series: [{
        name: '四级',
        type: 'heatmap',
        data: [
            [0, 4, 1]
        ],
        label: {
            show: true
        },
        itemStyle: {
            "normal": {
                color: 'rgba(4, 98, 159,1)',
                borderColor: "rgba(49, 197, 221, 1)"
            },
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        name: '三级',
        type: 'heatmap',
        data: [
            [1, 3, 6],
            [1, 4, 5]
        ],
        label: {
            show: true
        },
        itemStyle: {
            "normal": {
                color: 'rgba(4, 98, 159,1)',
                borderColor: "rgba(49, 197, 221, 1)"
            },
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        name: '二级',
        type: 'heatmap',
        data: [
            [2, 2, 1],
            [2, 3, 1],
            [2, 4, 1],
        ],
        label: {
            show: true
        },
        itemStyle: {
            "normal": {
                color: 'rgba(129, 5, 13,1)',
                borderColor: "rgba(230, 24, 5, 1)"
            },
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        name: '一级',
        type: 'heatmap',
        data: [
            [3, 4, 3],
        ],
        label: {
            show: true
        },
        itemStyle: {
            "normal": {
                color: 'rgba(130, 136, 76,1)',
                borderColor: "rgba(220, 222, 10, 1)"
            },
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        name: '特大',
        type: 'heatmap',
        data: [
            [4, 4, 5]
        ],
        label: {
            show: true
        },
        itemStyle: {
            "normal": {
                color: 'rgba(128, 107, 18,1)',
                borderColor: "rgba(220, 222, 10, 1)"
            },
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        name: '重大',
        type: 'heatmap',
        data: [
            [5, 4, 3],
            [5, 3, 3],
            [5, 2, 3]
        ],
        label: {
            show: true
        },
        itemStyle: {
            "normal": {
                color: 'rgba(130, 136, 76,1)',
                borderColor: "rgba(220, 222, 10, 1)"
            },
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};