var normal=15,all=20;
option = {
    backgroundColor:'#232d36',
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
        startAngle: 180,
        endAngle: 0,
        axisLine: {
            lineStyle: {
                color: [
                    [normal / all, new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(248,182,45,1)',
                            }, {
                                offset: 0.5,
                                color: 'rgba(125,103,179,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(33,109,195,1)',
                            }
                        ]
                    )],
                    [1, "#2C3638"]
                ],
                width: 25
            }
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,

        },
        splitLine: {
            show: false,
        },
        itemStyle: {
            show: false,
        },
        detail: {
            textStyle: {
                fontSize: 20,
                fontWeight: '700',
                color:'#A582EA'
            },
            show: true,
            offsetCenter: [0, '40%'],
            formatter: (value) => {
                return [
                    `${value}/${all} 正常`
                ]
            },
        },
        title: { //标题
            show: true,
            offsetCenter: [0, -5], // x, y，单位px
            textStyle: {
                color: "#ff0",
                fontSize: 30, //表盘上的标题文字大小
                fontWeight: 400,
                fontFamily: 'PingFangSC'
            }
        },
        data: [{
            // name: "m/min",
            value: normal,
        }],
        pointer: {
            show: true,
            length: '120%',
            radius: '20%',
            width: 10, //指针粗细
        },
        animationDuration: 4000,
    },
    ]
}