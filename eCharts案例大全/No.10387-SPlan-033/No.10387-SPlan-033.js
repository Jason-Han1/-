option = {
    backgroundColor: "#20263f",
    series: [{
        name: '第一个圆环',
        type: 'pie',
        clockWise: false,
        radius: [120, 140], // 支持百分比
        hoverAnimation: false,
        center: ['15%', '50%'],
        stillShowZeroSum: false,
        data: [{
            value: 60,
            label: {
                normal: {
                    fontSize: 14,
                    color: "green",
                    fontWeight: "bold",
                    rich: {
                        a: {
                            color: 'red',
                            align: 'center',
                            fontSize: 20,
                            fontWeight: "bold"
                        },
                        b: {
                            color: 'green',
                            align: 'center',
                            fontSize: 30,
                            fontWeight: "bold"
                        }
                    },
                    formatter: function(params) {
                        console.log(params)
                        return "{b|" + params.percent + "}%\n" + "{a|" + params.value + "}";
                    },
                    position: 'center',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "red"
                        },
                        {
                            offset: 1,
                            color: "blue"
                        }
                    ]),
                    shadowColor: '#2c6cc4',
                    shadowBlur: 0
                }
            }
        }, {
            value: 100,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#3C4353'
                },
                emphasis: {
                    color: '#3C4353'
                }
            },
            labelLine: {
                show: false
            },
            label: {
                show: false
            },
            emphasis: {
                labelLine: {
                    show: false
                }
            }
        }]
    }]
}