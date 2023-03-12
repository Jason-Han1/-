
// 通过判断数据去变化仪表盘的颜色刻度
// 通过判断数据去变化仪表盘的颜色刻度
// 通过判断数据去变化仪表盘的颜色刻度
// 通过判断数据去变化仪表盘的颜色刻度
// 通过判断数据去变化仪表盘的颜色刻度
// 通过判断数据去变化仪表盘的颜色刻度

option = {
    backgroundColor: "#062a44",
    series: [
        {
            name: '刻度',
            type: 'gauge',
            radius: '48%',
            min: 0,
            max: 100,
            startAngle: 220,
            endAngle: -40,
            splitNumber: 4,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#fff',
                distance: 30
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 15,
                lineStyle: {
                    color: '#fff',
                    width: 1
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#fff'
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            name: '内圈小',
            type: 'gauge',
            radius: '65%',
            startAngle: 220,
            endAngle: -40,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 1, 0, 0, [{
                                        offset: 0,
                                        color: 'rgba(2,37,51,0)',
                                    }, {
                                        offset: 0.3,
                                        color: 'rgba(2,37,51,0.5)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(2,37,51,0.8)',
                                    }
                                ]
                            )
                        ],
                    ],
                    width: 110
                }

            },
            splitLine: { //分隔线样式
                show: false,
            },
            axisLabel: { //刻度标签
                show: false,
            },
            pointer: {
                show: false,
            },
            axisTick: { //刻度样式
                show: false,
            },
            detail: {
                show: false
            }
        },
        {
            type: 'gauge',
            radius: '60%',
            center: ['50%', '50%'],
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                lineStyle: {
                    color: [
                        [0.3, '#13E267'],
                        [0.7, '#fbe010'],
                        [1, "red"]
                    ],
                    width: 15
                }
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
                show: false
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                splitNumber: 15,
                offsetCenter: [0, 0],
                color: '#ddd',
                formatter: function(params) {
                    return params
                },
                textStyle: {
                    color: 'yellow',
                    fontSize: 40
                }
            },
            data: [{
                value: 54
            }]
        }
    ]
};