var days = [1, 2, 3, 4, 5, 6, 7];
var hours = [''];
var data = [
    [0, 0, 7],
    [0, 1, 6],
    [0, 2, 5],
    [0, 3, 4],
    [0, 4, 3],
    [0, 5, 2],
    [0, 6, 1]
];
var data1 = [
    [0, 0, 7],
    [0, 1, 6],
    [0, 2, 5],
    [0, 3, 4],
    [0, 4, 3],
    [0, 5, 2],
    [0, 6, 1]
];
data = echarts.util.map(data, function(item, index) {
    return {
        value: [item[1], item[0], item[2]],
        itemStyle: {
            color: '#66D9EF'
        }
    };
});
data1 = echarts.util.map(data1, function(item, index) {
    return {
        value: [item[1], item[0], item[2]],
        itemStyle: {
            color: 'red'
        }
    };
});
option = {
    tooltip: {
        type: 'axis'
    },
    color: ['#66D9EF', 'red'],
    legend: {
        data: ['天数', '日数'],
        icon: 'circle'
    },
    xAxis3D: {
        type: 'category',
        name: '',
        data: days,
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        }
    },
    yAxis3D: {
        type: 'category',
        name: '',
        data: hours,
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        }
    },
    zAxis3D: {
        type: 'value',
        name: '',
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        }
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        axisPointer: {
            show: false
        },
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'bar3D',
        name: '天数',
        stack: '总数',
        barSize: 15,
        data: data,
        label: {
            show: false,
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        itemStyle: {
            opacity: 0.4
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            }
        }
    }, {
        type: 'bar3D',
        name: '日数',
        stack: '总数',
        barSize: 15,
        data: data1,
        label: {
            show: false,
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        itemStyle: {
            opacity: 0.4
        },
        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            }
        }
    }]
}