var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var data1 = [
    [0, 0, 100],
    [1, 0, 255],
    [2, 0, 321],
    [3, 0, 252],
    [4, 0, 251],
    [5, 0, 115],
    [6, 0, 351]
];
var data2 = [
    [0, 0, 400],
    [1, 0, 280],
    [2, 0, 320],
    [3, 0, 380],
    [4, 0, 420],
    [5, 0, 460],
    [6, 0, 200]
];
option = {
    tooltip: {
        type: 'axis'
    },
    visualMap: {
        max: 500,
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
        name: '天数',
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
        name: '日数',
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