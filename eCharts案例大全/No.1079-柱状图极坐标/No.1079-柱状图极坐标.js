let angleAxisData = ["类目名称94", "类目名称36", "类目名称23", "类目名称19"];
let arr = ["67","78","42","90"]
option = {
    backgroundColor: '#222',
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 16,
            color: '#fff',
            fontFamily: 'Microsoft YaHei'
        }
    },
   legend: {
        show: true,
        icon: 'circle',
        top: '13.5%',
        bottom: '53%',
        left: '8.5%',
        data: angleAxisData,
        width: 40,
        padding: [0, 220],
        itemGap: 46,
        textStyle: {
            rich: {
                title: {
                    fontSize: 14,
                    lineHeight: 40,
                    color: 'rgb(0, 178, 246)',
                },
                value: {
                    fontSize: 18,
                    lineHeight: 20,
                    color: 'rgb(207, 220, 40)',
                },
            },
        },
    },
    angleAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#ffffff',
                width: 2,
            }
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: angleAxisData,
        z: 10
    },
    radiusAxis: {
        max: 100,
        min: 0,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#ffffff'
            }
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: '#333'
            }
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: '74%',
    },
    series: {
        type: 'bar',
        data: arr,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                "offset": 0,
                "color": 'rgb(6, 26, 57,0.8)'
            }, {
                "offset": 1,
                "color": 'rgb(139, 240, 109,0.8)'
            }]),
        },
        label: {
            show: true,
            color: '#fff',
            position: 'middle',
            formatter: '{c}'
        },
        coordinateSystem: 'polar',
    }
};