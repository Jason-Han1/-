option = {
    backgroundColor: '#000',
    tooltip: {
        show: false,
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    xAxis3D: {
        name:'',
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)',
                width: 0
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 45,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            }
        },
        axisTick: {
            show: false
        },
        
    },
    yAxis3D: {
        name:'',
        type: 'category',
        data: [''],
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)',
                width: 0
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    zAxis3D: {
        name:'',
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#0F0',
                width: 0
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 0,
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
        viewControl: {
            alpha: 30,
            beta: 0,
            autoRotate: true,
            zoomSensitivity: 0,
            autoRotateAfterStill: 15,
            distance: 250
        }
    },
    series: [{
        type: 'bar3D',
        name: '1',
        barSize: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                        "#37b70c", "#fae521", "#f29c00", "#dd3f36", "#b3013f", "#a00398", '#E87C25', '#C6E579',
                    ];
                    return colorList[params.dataIndex]
                },
            }
        },
        data: [
            [0, 0, 18000],
            [1, 0, 10000],
            [2, 0, 6000],
            [3, 0, 18000],
            [4, 0, 10000],
            [5, 0, 6000],
            [6, 0, 18000],
            [7, 0, 10000],
        ],
        stack: 'stack',
        shading: 'lambert',
        emphasis: {
            label: {
                show: true
            }
        }

    }]
};