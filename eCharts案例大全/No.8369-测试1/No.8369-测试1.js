var value = 50
var colorRegionRate = (value / 100).toFixed(2)

option = {
    backgroundColor: '#000',
    series: [{
            name: '统计',
            type: 'gauge',
            radius: '25%', //图表尺寸
            startAngle: 0,
            endAngle: 360,
            center: ['20%', '50%'],
            axisLine: {
                show: false,
                lineStyle: {
                    width: 30,
                    shadowBlur: 0,
                    color: [
                        [0, '#00323C'],
                        [1, '#00323C']
                    ],
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 3
                },
                length: -20,

                splitNumber: 8
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: false,

            },
            detail: {
                show: false,
            }
        },
        {
            type: 'gauge',
            radius: '35%',
            center: ['20%', '50%'],
            splitNumber: 0, //刻度数量
            startAngle: 225,
            endAngle: -45,

            axisLine: {
                show: true,

                lineStyle: {
                    width: 15,
                    color: [
                        // 有数值的部分
                        [colorRegionRate, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#1E85E6' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#38F0C8' // 100% 处的颜色
                            }
                        ])],
                        // 底色
                        [
                            1, '#00323C'
                        ]
                    ],
                },
                radius: 8,
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: false,
            },
            title: {
                show: true,
                offsetCenter: [0, '-30%'], // x, y，单位px
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, '0%'],
                color: '#fff',
                size: 20,
                formatter: function(params) {
                    return params + '%'
                },
                textStyle: {
                    fontSize: 42
                }
            },
            data: [{
                value: 50
            }]
        }
    ]
};