

option = {
    backgroundColor: '#1f1e26',
    title: [{
        text: '75%',
        x: '33%',
        y: '45%',
        textAlign: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 800,
            color: '#e8f7ff',
            textAlign: 'center',
        },
    }],
    polar: {
        radius: ['40%', '35%'],
        center: ['35%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
        startAngle: 0,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [
        //里第二圈
        {
            name: '',
            type: 'bar',
            roundCap: true, //圆角
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
                color: '#464451',
            },
            data: [75],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: '#0ff'
                    }, {
                        offset: 1,
                        color: '#02aeff'
                    }]),
                }
            }
        },
        //最里圈
        {
            type: 'pie',
            radius: ['32%', '29%'],
            center: ['35%', '50%'],
            data: [{
                    hoverOffset: 1,
                    value: 100,
                    name: '',
                    itemStyle: {
                        color: '#30778e',
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - 75,
                    hoverAnimation: false,
                    itemStyle: {
                        color: '#3c3a48',
                    },
                }
            ]
        },
        //齿轮
        {
            name: "大环",
            type: 'gauge',
            splitNumber: 100,
            radius: '56%',
            center: ['35%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [0.3, '#6dfbff'],
                        [1, '#293041']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                    width: 2.5
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        },


    ]
};