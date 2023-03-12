var option = {
    backgroundColor: 'black',
    title: {
        text: '使用率',
        x: '48%',
        y: '50%',
        textAlign: "center",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 10,
            color: '#ffffff'
        },
        subtextStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#3ea1ff'
        },
        subtext: '80%'
    },
    series: [{
            name: '刻度',
            type: 'gauge',
            radius: '100%',
            min: 0,
            max: 100,
            splitNumber: 4, //刻度数量
            startAngle: 220,
            endAngle: -40,
            center: ['50%', '50%'],
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
                color: '#ffffff',
                distance: 30
            }, //刻度标签。
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#fff',
                    width: 1
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: false,
                length: -20,
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
        }, {
            name: '1',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#35fffb'
                }, {
                    offset: 0.75,
                    color: '#fefefe'
                },
                {
                    offset: 1,
                    color: '#ffffff'
                }
            ]), "transparent"],
            hoverAnimation: false,
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    borderColor: "transparent",
                    borderWidth: "20"
                },
                emphasis: {
                    borderColor: "transparent",
                    borderWidth: "20"
                }
            },
            z: 10,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 75
            }, {
                value: 25
            }]
        }, {
            name: '2',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            startAngle: 225,
            color: ["#859cff", "transparent"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 9,
            data: [{
                value: 75
            }, {
                value: 25
            }]
        }
    ]
};



app.timeTicket = setInterval(function() {
    var value = parseInt(Math.random() * 55) + 30,
        value_ = (100 - value) * 266 / 360;
    option.title.subtext = value + "%";
    option.series[1].data[0].value = value_;
    option.series[1].data[1].value = 100 - value_;
    myChart.setOption(option, true);
}, 1000);