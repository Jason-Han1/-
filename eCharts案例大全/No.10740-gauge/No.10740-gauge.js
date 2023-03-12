option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};
var myRate1 = 1000;
option = {
    backgroundColor: '#031845',
    series: [{
            type: 'gauge',
            center: ['50%', '55%'], // 默认全局居中  
            radius: '60%',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 1000,
            startAngle: 180,
            endAngle: 0,
            clockwise: true,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#03B7C9']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#03B7C9',
                    width: 1
                },
                length: 15,
                splitNumber: 10
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#03B7C9',
                }
            },
            axisLabel: {
                show: false,
                distance: 20,
                textStyle: {
                    color: "#03B7C9",
                    fontSize: "15",
                    fontWeight: "bold"
                }
            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: myRate1
            }]

        },
        {
            startAngle: 180,
            endAngle: 0,
            type: 'gauge',
            center: ['50%', '55%'], // 默认全局居中  
            radius: '65%',
            min: 0,
            max: 1000,
            splitNumber: 0,
            axisLine: { // 坐标轴线  
                lineStyle: {
                    color: [
                        [0.66, '#dddddd'],
                        [1, '#dddddd']
                    ], // 属性lineStyle控制线条样式  
                    width: 4
                }
            },


            axisLabel: { // 坐标轴小标记  
                textStyle: { // 属性lineStyle控制线条样式  
                    fontWeight: 'bolder',
                    fontSize: 16,
                    color: 'rgba(30,144,255,0)',
                }
            },
            splitLine: { // 分隔线  
                length: 10, // 属性length控制线长  
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                    width: 0,
                    color: '#444'
                }
            },
            pointer: { // 分隔线 指针  
                color: '#666666',
                width: 0,
                length: 230
            },
            detail: {
                show: false
            },

        },
        {
            name: '累计受理',
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            radius: '75%',
            center: ['50%', '55%'], // 默认全局居中  

            min: 0,
            max: 1000,

            axisLine: {
                show: false,
                lineStyle: {
                    width: 25,
                    shadowBlur: 0,
                    color: [
                        [
                            0.3, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#5ec79c'
                                    },
                                    {
                                        offset: 1,
                                        color: '#297fff'
                                    }
                                ]
                            )
                        ],
                        [
                            0.5, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#297fff'
                                    },
                                    {
                                        offset: 1,
                                        color: '#fb8b1d'
                                    }
                                ]
                            )
                        ],
                        [
                            0.84, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#fb8b1d'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ee2228'
                                    }
                                ]
                            )
                        ],
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ee2228'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ee2228'
                                    }
                                ]
                            )
                        ]
                    ]
                }
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
                length: 20,

            },

            axisLabel: {
                show: false
            },
            pointer: {
                show: true,
            },
            detail: {
                show: true,
                offsetCenter: [0, '40%'],
                textStyle: {
                    fontSize: 30
                }
            },
            itemStyle: {
                normal: {
                    color: "#03B7C9",

                }
            },
            data: [{
                value: 436
            }]
        }
    ]
};