var hours = ['新增收入', '新增建档', '打卡人数', '扫楼数'];
var days = ['星期一', '星期二', '星期三', '星期四'];
var data = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 2],
    [0, 3, 8],
    [1, 0, 3],
    [1, 1, 5],
    [1, 2, 1],
    [1, 3, 9],
    [2, 0, 4],
    [2, 1, 8],
    [2, 2, 4],
    [2, 3, 8],
    [3, 0, 6],
    [3, 1, 7],
    [3, 2, 4],
    [3, 3, 9],
];
option = {
    title: {
        text: '2月份运营报告',
        textStyle: {
            fontSize: 18,
            fontWeight: 600,
            fontFamily: 'siyuanheiti_Thin'
        },
        subtext: '100万',
        subtextStyle: {
            fontSize: 16,
        }
    },
    tooltip: {
        show: false
    },
    visualMap: {
        show: false,
        max: 20,
        inRange: {
            color: ['#f7acbc', '#ef5b9c', '#f05b72', '#f69c9f', '#f58f98', '#f391a9', '#d71345']
        }
    },
    xAxis3D: {
        name: '',
        type: 'category',
        data: hours
    },
    yAxis3D: {
        name: '',
        type: 'category',
        data: days
    },
    zAxis3D: {
        name: '',
        type: 'value'
    },
    grid3D: {
        boxWidth: 120,
        boxDepth: 120,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize: 14
            }
        },
        light: {
            main: {
                intensity: 1.2,
                shadow: true
            },
            ambient: {
                intensity: 0.7,
                shadow: true
            }
        },
        viewControl: {
            alpha: 15,
            beta: 40,
            autoRotate: true,
            zoomSensitivity: 0,
            autoRotateAfterStill: 5,
            distance: 250
        }
    },
    series: [{
        type: 'bar3D',
        name: '数量',
        data: data.map(function(item) {
            return {
                value: [item[0], item[1], item[2]]
            }
        }),
        shading: 'lambert',
        label: {
            show: true,
            distance: 1,
            textStyle: {
                color: '#333',
                fontSize: 18,
                borderWidth: 0,
                borderColor: 'none',
                backgroundColor: 'rgba(255,255,255,0)',
                fontFamily: 'impact, Simhei'
            },
        },
        itemStyle: {
            opacity: 1
        },
        /*emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }*/
    }]
}