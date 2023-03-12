var bgColor = "#222939",
    highlight = '#03b7c9';
    
option = {
    backgroundColor: bgColor,
    title: {
        text: 'PUE',
        textStyle: {
            fontSize: 30,
            color: '#fff'
        }
    },
    series: [
        {
            name: '刻度',
            type: 'gauge',
            center: ['50%', '55%'], // 默认全局居中  
            splitNumber: 4, //刻度数量
            min: 0,
            max: 4,
            startAngle: 180,
            endAngle: 0,
            clockwise: true,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, highlight]
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: highlight,
                    width: 1
                },
                length: -4,
                splitNumber: 10
            },
            splitLine: {
                show: true,
                length: -7,
                lineStyle: {
                    color: highlight,
                }
            },
            axisLabel: {
                distance: -20,
                textStyle: {
                    color: highlight,
                    fontSize: "14",
                    fontWeight: "bold"
                }
            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            }
        },
        {
            name: '渐变标尺',
            center: ['50%', '55%'], // 默认全局居中 
            type: 'gauge',
            radius: '70%',
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 15,
                    color: [
                        [0.25, ['#9b9e9b']],
                        [
                            0.45, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#6fed5c'
                                    },
                                    {
                                        offset: 1,
                                        color: '#b2f268'
                                    }
                                ]
                            )
                        ],
                        [
                            0.48, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#b2f268'
                                    },
                                    {
                                        offset: 1,
                                        color: '#d8d563'
                                    }
                                ]
                            )
                        ],
                        [
                            0.66, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#d8d563'
                                    },
                                    {
                                        offset: 1,
                                        color: '#edb168'
                                    }
                                ]
                            )
                        ],
                        [
                            0.83, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#edb168'
                                    },
                                    {
                                        offset: 1,
                                        color: '#eb7742'
                                    }
                                ]
                            )
                        ],
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#eb7742'
                                    },
                                    {
                                        offset: 1,
                                        color: '#e8412e'
                                    }
                                ]
                            )
                        ]
                    ]
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            detail: {
                show: false
            },
            pointer: {
                show: true
            }
        },
        {
            name: '数值',
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            radius: '40%',
            center: ['50%', '55%'], // 默认全局居中  
            min: 0,
            max: 4,
            splitNumber: 0,
            axisLine: { // 坐标轴线  
                lineStyle: {
                    color: [
                        [1, highlight]
                    ], // 属性lineStyle控制线条样式  
                    width: '1%'
                }
            },

            axisLabel: { // 坐标轴小标记  
                show: false
            },
            splitLine: { // 分隔线  
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                    width: 0
                }
            },
            pointer: { // 分隔线 指针  
                color: highlight,
                width: '30%',
                length: '170%'
            },
            detail: {
                show: true
            },
            data: [{
                name: "",
                value: 1.9
            }]
        },
        {
            name: '遮罩',
            tooltip:{
                show:false
            },
            type: 'pie',
            radius: '38%',
            center: ['50%', '55%'], // 默认全局居中
            hoverAnimation:false,
            itemStyle:{
                normal:{
                    color: bgColor
                },
                emphasis:{
                    color: bgColor
                }
            },
            labelLine:{
                normal:{
                    show:false
                }
            },
            animation:false,
            data: [1.9]
        }
    ]
};