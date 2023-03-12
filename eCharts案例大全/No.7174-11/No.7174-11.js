option = {

    tooltip: {
        enterable: false,
        trigger: 'item',
        position: ['85%', '70%'],
        backgroundColor: 'rgba(255, 255, 255, .9)',
        padding: [10, 2],
        textStyle: {
            color: '#3c3c3c'
        },
        alwaysShowContent: false, //移入显示
        extraCssText: 'box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);',
        confine: true,
    },
    // xAxis: {
    //     data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // },
    // yAxis: {},
    // series: [{
    //     type: 'line',
    //     data:[220, 182, 191, 234, 290, 330, 310]
    // }]
    angleAxis: {
        startAngle: 80,
        max: 100, // 最大值
        clockwise: true, // 逆时针
        // 隐藏刻度线
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        // 隐藏刻度线
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: [81, 28] //图形大小
    },
    series: [{
            type: 'bar',
            name: 'bar',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#6C93F3'
                        }, {
                            offset: 1,
                            color: '#65C3FF'
                        }],
                        global: false
                    }
                }, //鼠标悬停时：
                emphasis: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#6C93F3'
                        }, {
                            offset: 1,
                            color: '#65C3FF'
                        }],
                        global: false
                    }
                    // shadowBlur: 10,
                    // shadowOffsetX: 0,
                    // shadowColor: 'rgba(0, 0, 0, 0.5)'
                }

            },
            data: [20],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 14,
            barGap: '-100%', // 两环重叠
            z: 6
        },
        { // 灰色环
            type: 'bar',
            // value: 100,
            itemStyle: {
                color: '#EEEEEE',
                // 鼠标悬停时：
                emphasis: {
                    color: '#EEEEEE'

                }

            },
            data: [100],
            coordinateSystem: 'polar',
            roundCap: false,
            barWidth: 14,
            barGap: '-100%', // 两环重叠
            z: 3
        }
    ]
};