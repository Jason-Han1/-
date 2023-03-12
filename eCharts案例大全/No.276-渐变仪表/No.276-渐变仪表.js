var demoData = [{
    name: '功率输出',
    unit: '%',
    value: 68,
}, ];
var color = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color:  'rgba(0, 97, 226, 0.2)' // 0% 处的颜色
    },
    {
        offset: 0.6,
        color:  'rgba(0, 219, 255, 0.6)' // 100% 处的颜色
    },
    {
        offset: 0.95,
        color: 'rgba(0, 219, 255, 0.9)' // 100% 处的颜色
    },
    {
        offset: 1,
        color: 'rgba(0, 213, 255, 0.9)' // 100% 处的颜色
    }
]);
var colorSet = [
    [0.80, color],
    [1, 'rgba(0, 97, 226, 0)']
];
option = {
    backgroundColor: '#010101',
    series: (function() {
        var result = [];

        demoData.forEach(function(item) {
            result.push(
                {
                name: item.name,
                type: 'gauge',
                radius: '47.10%',
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 100,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: [
                            [
                                item.value / 100, new echarts.graphic.LinearGradient(
                                    0, 1, 1, 0, [{
                                            offset: 0,
                                            color: 'green',
                                        }, {
                                            offset: 0.3,
                                            color: 'yellow',
                                        },
                                        {
                                            offset: 1,
                                            color: 'red',
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
                    length: '100%'
                },
                itemStyle: {
                    color: 'rgba(255, 36, 74,.3)',
                    borderColor: 'rgba(255, 36, 74,1)',
                },
                data: [{
                    value: item.value
                }]},
                 {
                name: item.name,
                type: 'gauge',
                radius: '45.10%',
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 100,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 10,
                        color: [
                            [
                                item.value / 100, new echarts.graphic.LinearGradient(
                                    0, 1, 1, 0, [{
                                            offset: 0,
                                            color: 'rgba(255, 36, 74,0)',
                                        }, {
                                            offset: 0.3,
                                            color: 'rgba(255, 36, 74,0)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(255, 36, 74,1)',
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
                    length: '100%'
                },
                itemStyle: {
                    color: 'rgba(255, 36, 74,.3)',
                    borderColor: 'rgba(255, 36, 74,1)',
                },
                data: [{
                    value: item.value
                }]},
                {
                name: item.name,
                type: 'gauge',
                radius: '47.10%',
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 100,
                axisLine: {
                    show: false,
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
                    show: true,
                    width: 2,
                    itemStyle: {
                        color: {
                          type: 'linear',
                          x: 0,
                          y: 1,
                          x2: 0,
                          y2: 0,
                          colorStops: [{
                              offset: 0, color: 'green' // 0% 处的颜色
                          }, {
                              offset: 0.3, color: 'yellow' // 0% 处的颜色
                          }, {
                              offset: 1, color: 'red' // 100% 处的颜色
                          }],
                          global: false // 缺省为 false
                        }
                    },
                    icon: 'rect',
                    length: '100%'
                },
                detail: {
                    show: false,
                },
                itemStyle: {
                    color: 'rgba(255, 36, 74,1)',
                },
                data: [{
                    value: item.value
                }]}, 
                {
                type: 'gauge',
                radius: '70%',
                splitNumber: 8,
                min: 0,
                max: 400,
                startAngle: 200,
                endAngle: -20,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                pointer: {
                    show: 0
                },
                detail: {
                    show: 0
                }
            }, );
        });

        return result;
    })()
};