
var normal=30,
all=100;
option = {
    backgroundColor: '#fff',
    tooltip: {
        formatter: "{a} <br/>值 : {c}"
    },
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    series: [{
        name: "正常数",
        type: "gauge",
        center: ['50%', '65%'],
        radius: '100%',
        min: 0, //最小刻度
        max: all, //最大刻度
        startAngle: 200,
        endAngle: -20,
        axisLine: {
            lineStyle: {
                color: [
                    [1, new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: '#14E4A2',
                            }, {
                                offset: 0.5,
                                color: '#FFDA78',
                            },
                            {
                                offset: 1,
                                color: '#FFA00B',
                            }
                        ]
                    )]
                ],
                width: 180
            }
        },
        axisLabel: {
            show: false,
            color: [[1, '#14E4A2']],
        },
        axisTick: {
            show: false,

        },
        splitLine: {
            show: true,
            length: 180,
            lineStyle: {
                width: 5,
                color: '#fff'
            }
        },
        splitNumber: 80,
        itemStyle: {
            show: true,
        },
        detail: {
            textStyle: {
                fontSize: 20,
                fontWeight: '700',
                color:'#3286EC'
            },
            show: true,
            offsetCenter: [0, '30%'],
            formatter: (value) => {
                return [
                    `一般困难`
                ]
            },
        },
        data: [{
            value: normal,
        }],
        pointer: {
            show: true,
            length: "50%",
            width: "2%",
            
        },
        animationDuration: 4000,
    },
    ]
}
