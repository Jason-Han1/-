var demoData = [{
    name: '',
    value: 48,
}, ];
option = {
    backgroundColor: '#02041B',
    series: (function() {
        var result = [];
        demoData.forEach(function(item) {
            result.push({
                    name: '背景圈',
                    type: 'gauge',
                    radius: '50%',
                    startAngle: 220,
                    endAngle: -40,
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [
                                    1, new echarts.graphic.LinearGradient(
                                        0, 1, 0, 0, [{
                                                offset: 0,
                                                color: 'RGBa(49, 68, 118,0)',
                                            }, {
                                                offset: 0.3,
                                                color: 'rgba(49, 68, 118,0.5)',
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(49, 68, 118,0.8)',
                                            }
                                        ]
                                    )
                                ],
                            ],
                            width: 20
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
                        show: true,
                        offsetCenter: [0, '60%'],
                        textStyle: {
                            fontSize: 32,
                            color: '#fff'
                        },
                        formatter:function(){
                            return 'SO2';
                        }
                    },
                },

                {
                    name: '刻度',
                    type: 'gauge',
                    radius: '35%',
                    min: 0,
                    max: 100,
                    splitNumber: 4, //刻度数量
                    startAngle: 220,
                    endAngle: -40,
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
                        color: 'aqua',
                        distance: 30
                    }, //刻度标签。
                    axisTick: {
                        show: true,
                        splitNumber: 20, //刻度的段落数
                        lineStyle: {
                            color: '#fff',
                            width: 1
                        },
                        length: -12
                    }, //刻度样式
                    splitLine: {
                        show: true,
                        length: -18,
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
                // 最外层含中间数据
                {
                    name: item.name,
                    type: 'gauge',
                    radius: '50%',
                    startAngle: 220,
                    endAngle: -45,
                    min: 0,
                    max: 100,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 20,
                            color: [
                                [
                                    item.value / 100, new echarts.graphic.LinearGradient(
                                        0, 1, 1, 0, [{
                                                offset: 0,
                                                color: 'rgba(249, 103, 51,1)',
                                            },
                                            {
                                                offset: 0.55,
                                                color: 'rgba(238, 146, 72,1)',
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(249, 178, 75,1)',
                                            }
                                        ]
                                    )
                                ],
                                [
                                    1, 'rgba(255,255,255,.0)'
                                ]
                            ]
                        }
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0
                    },
                    pointer: {
                        show: false,
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, 0],
                        textStyle: {
                            fontSize: 32,
                            color: 'yellow'
                        }
                    },
                    itemStyle: {
                        color: 'rgba(255, 36, 74,.3)',
                    },
                    data: [{
                        value: item.value
                    }]
                });
        });

        return result;
    })()
};