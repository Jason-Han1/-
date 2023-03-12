var demoData = [{
    name: '',
    value: 80,
}, ];
option = {
    backgroundColor: '#000022',
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
                                                color: 'RGBa(49, 68, 118,1)',
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(49, 68, 118,1)',
                                            }
                                        ]
                                    )
                                ],
                            ],
                            width: 25
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
                        offsetCenter: [0, '65%'],
                        textStyle: {
                            fontSize: 24,
                            color: 'rgba(0,255,255,1)'
                        },
                        formatter:function(){
                            return '成本';
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
                            width: 25,
                            color: [
                                [
                                    item.value / 100, new echarts.graphic.LinearGradient(
                                        0, 1, 1, 0, [{
                                                offset: 0,
                                                color: 'rgba(34,132,206,1)',
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(0,255,255,1)',
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
                        offsetCenter: [0, '0%'],
                        formatter:function(params){
                          return  item.value+"%";
                        },
                        textStyle: {
                            fontSize: 32,
                            color: 'rgba(0,255,255,1)'
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