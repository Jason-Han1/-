var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var data1 = [
    [0, 0, 360],
    [1, 0, 480],
    [2, 0, 240],
    [3, 0, 240],
    [4, 0, 240],
    [5, 0, 120],
    [6, 0, 180]
];
var data2 = [
    [0, 0, 600],
    [1, 0, 480],
    [2, 0, 720],
    [3, 0, 720],
    [4, 0, 720],
    [5, 0, 840],
    [6, 0, 780]
];
option = {
    tooltip: {
        type: 'axis'
    },
    visualMap: {
        max: 800,
        inRange: {
            color: [
        '#2b908f',
        '#90ee7e',
        '#f45b5b',
        '#7798BF',
        '#aaeeee',
        '#ff0066',
        '#eeaaee',
        '#55BF3B',
        '#DF5353',
        '#7798BF',
        '#aaeeee'
    ]
        }
    },
    legend: {
        data: ['天数', '日数'],
        textStyle:{
            color:'auto'
        }
    },
    xAxis3D: {
        type: 'category',
        data: days,
    },
    yAxis3D: {
        type: 'category'
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 40,
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
        },
        viewControl:{
            alpha:0,
            beta:0
        }
    },
    series: [{
        type: 'bar3D',
        name: '上课分钟数',
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
    }, {
        type: 'bar3D',
        name: '自由分钟',
        stack: '总数',
        barSize: 15,
        data: data2,
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