option = {
    series: [{
            name: '刻度',
            type: 'gauge',
            radius: '80%',
            min: 0,
            max: 100,
            splitNumber: 2, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#3B53A2',
                distance: 15,
                fontSize: 11,
                formatter: '{value}'
            }, //刻度标签。
            axisTick: {
                show: true,
                lineStyle: {
                    color: {
                        type: 'radial',
                        colorStops: [{
                                offset: 0,
                                color: '#77C664'
                            },

                            {
                                offset: 0.2,
                                color: '#2CB7C7'
                            },

                            {
                                offset: 0.4,
                                color: '#1DB2DD'
                            },

                            {
                                offset: 0.6,
                                color: '#2D89ED'
                            },

                            {
                                offset: 0.8,
                                color: '#7765B4'
                            },

                            {
                                offset: 1,
                                color: '#EB3457'
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    width: 2,
                    length: 20,
                },
                length: -5
            }, //刻度样式
            splitLine: {
                show: true,
                length: -5,
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            type: 'gauge',
            radius: '85%',
            min: 0,
            max: 100,
            center: ['50%', '50%'],

            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 13,
                    color: [
                        [1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [

                                {
                                    offset: 0,
                                    color: '#77C664'
                                },

                                {
                                    offset: 0.2,
                                    color: '#2CB7C7'
                                },

                                {
                                    offset: 0.4,
                                    color: '#1DB2DD'
                                },

                                {
                                    offset: 0.6,
                                    color: '#2D89ED'
                                },

                                {
                                    offset: 0.8,
                                    color: '#7765B4'
                                },

                                {
                                    offset: 1,
                                    color: '#EB3457'
                                }
                            ])
                        ]
                    ],
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
            

            //仪表盘详情，用于显示数据。
            detail: {
                show: false,
                offsetCenter: [0, 0],
                color: '#ddd',
                formatter: function(params) {
                    return params
                },
                textStyle: {
                    fontSize: 12
                }
            },
            data: [{
                // name: "当前用户总数",
                value: 5
            }]
        }
    ]
};