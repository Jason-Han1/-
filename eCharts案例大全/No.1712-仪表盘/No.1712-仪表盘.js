let max = 100;
let currentNum = 80;

option = { //echarts的设置
    backgroundColor: '#313131',
    grid: {
        left: 0,
        right: 0
    },
    title: {
        show: false
    },
    polar: {
        // 圆弧大小
        radius: '150%',
        center: ["50%", "85%"]
    },
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 2 * max,
        boundaryGap: ['0', '100'],
        startAngle: 180
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: ['a', 'b', 'c'],
        z: 10
    },
    series: [{
            type: 'bar',
            data: [, , currentNum || 0],
            coordinateSystem: 'polar',
            barMaxWidth: 8,
            z: 2,
            roundCap: 1,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(255, 255, 255, 0.2)' // 0% 处的颜色
                }, {
                    offset: 0.2,
                    color: 'rgba(55, 211, 255, 0.3)'
                }, {
                    offset: 1,
                    color: '#37D3FF' // 100% 处的颜色
                }],
            },
            barGap: '-100%',
        }, {
            type: 'bar',
            data: [, , max],
            z: 0,
            silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 8,
            name: 'C',
            roundCap: 1,
            color: 'rgba(255, 255, 255, 0.4)',
            barGap: '-100%',
        },
        {
            type: 'gauge',
            radius: "100%",
            center: ["50%", "80%"],
            //起始
            startAngle: 180,
            //终止
            endAngle: 0,
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            animationDuration: 2000,
            pointer: {
                show: true,
                length: '90%',
                width: 6
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'transparent' // 0% 处的颜色
                    }, {
                        offset: 0.3,
                        color: 'rgba(55, 211, 255, 0.3)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#37D3FF' // 100% 处的颜色
                    }]
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: currentNum,
                name: ''
            }]
        },
        {
            type: 'gauge',
            radius: "133%",
            startAngle: 180,
            endAngle: 0,
            center: ["50%", "85%"],
            axisLine: {
                lineStyle: {
                    color: [
                        [0.5, 'rgba(145, 145, 145, 0.4)'],
                        [1, 'rgba(145, 145, 145, 0.4)']
                    ],
                    width: 1,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            detail: {
                show: 0
            }
        },
        // 圆环
        {
            type: 'pie',
            radius: ["2%", "4%"],
            center: ["50%", "80%"],
            emptyCircleStyle: {
                color: '#37D3FF'
            },
            itemStyle: {
                    normal: {
                        color: "#fff"
                    },
            }
        },
        // 内环
        {
            type: 'pie',
            radius: '2%',
            center: ["50%", "80%"],
            emptyCircleStyle: {
                color: '#fff'
            }
        }
    ]
};