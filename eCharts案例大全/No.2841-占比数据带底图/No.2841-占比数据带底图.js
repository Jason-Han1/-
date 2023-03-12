 option = {
    backgroundColor: "#fff",
    series: [{
        center: ["50%", "60%"], //仪表的位置
        name: '刻度',
        type: 'gauge',
        radius: '80%',
        min:0,
        max:200,
        splitNumber: 10, //刻度数量
        startAngle: 220,
        endAngle: -40,
        axisLine: {
        show: true,
        lineStyle: {
            width: 1,
            color: [[1,'rgba(0,0,0,0)']]
        }
        },//仪表盘轴线
        axisLabel: {
        show: true,
        color:'#cbcbcb',
        distance:-25
        },//刻度标签。
        axisTick: {
        show: true,
        lineStyle: {
            color: '#cbcbcb',
            width: 1
        },
        length: -5
        },//刻度样式
        splitLine: {
        show: true,
        length: -10,
        lineStyle: {
            color: '#cbcbcb'
        }
        },//分隔线样式
        detail: {
        show: false
        },
        pointer: {
        show: false
        }
    },
        {


        type: 'gauge',
        radius: '70%',
        center: ['50%', '60%'],

        splitNumber: 0, //刻度数量
        startAngle: 220,
        endAngle: -40,
        axisLine: {
            show: true,
            lineStyle: {
            width: 10,
            color: [
                [
                /**
                 * 通过同步设置颜色占比值来显示对应的颜色位置
                */    
                90/200, new echarts.graphic.LinearGradient(
                0, 0, 1, 0, [{
                offset: 0,
                color: '#ae3df6'
                },
                {
                    offset: 1,
                    color: '#53bef9'
                }
                ]
                )
                ],
                [
                1, '#B0C4DE'
                ]
            ]
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
        title: {
            show: true,
            offsetCenter: [0, '-20%'], // x, y，单位px
            textStyle: {
            color: '#BBBDC2',
            fontSize: 17
            }
        },
        //仪表盘详情，用于显示数据。
        detail: {
            show: true,
            offsetCenter: [0, '10%'],
            color: '#2F96E6',
            formatter: function(params) {
                return params
            },
            textStyle: {
                fontSize: 30
            }
        },
        data: [{
            name: "敏感数据总数",
            value: 90
        }]
    }
    ]
    };