option = {
    backgroundColor: 'rgba(0,0,0,1)',
    color: ['#fff300', '#8ec31c', '#017afd', '#18db82', '#8a71fe', '#ea69a2', '#aed69a'],
    grid: {
        left: '3%',
        right: '50%',
        top: '5%',
        bottom: '15%',
        containLabel: true,
    },
    xAxis: {
        "show": false,
    },
    yAxis: {
        show: true,
        inverse: true,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#06d3c4',
                width: 1
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                fontSize: 10,
                color: '#fff',
            },
            interval: 0
        },
        data: [2018, 2017, 2016], //横向bar必须有
    },
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [{
                    name: '简易程序',
                    value: 10,
                    itemStyle: {
                        borderColor: 'rgb(0,198,255,0.75)',
                        borderWidth: 1,
                        color: 'rgb(0,198,255,0.35)'
                    }
                },
                {
                    name: '一般程序',
                    value: 20,
                    itemStyle: {
                        borderColor: 'rgb(138,0,255,0.75)',
                        borderWidth: 1,
                        color: 'rgb(138,0,255,0.35)'
                    }
                },
                {
                    name: '听证程序',
                    value: 30,
                    itemStyle: {
                        borderColor: 'rgb(228,0,127,0.75)',
                        borderWidth: 1,
                        color: 'rgb(228,0,127,0.35)'
                    }
                },
            ],
            barWidth: 9,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#ffaf47' // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: '#ffce28' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#fff600' // 100% 处的颜色
                        }
                    ], false),
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideBottomLeft',
                    padding:[10,0],
                    formatter: '{b|{b}}{c|{c}起}',
                    rich: {
                        b: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 12,
                            color: '#06d3c4',
                        }
                    },
                    textStyle: {
                        color: '#ffaf47',
                        fontSize: '16',
                    }
                }
            },

        },
        {
            name: '',
            type: 'pie',
            radius: ['20%', '25%'], // 半径
            center: ['80%', '50%'], // 位置
            label: {
                normal: {
                    formatter: '{b|{b}}\n{hr|}\n{d|{d}%}{c|{c}起}',
                    rich: {
                        b: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 1,
                            height: 0,
                        },
                        d: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 12,
                            color: '#fff',
                        }
                    }
                }
            },
            avoidLabelOverlap: true, //是否启用防止标签重叠策略
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 15,
                    lineStyle: {
                        opacity: 0.6,
                    },
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                    value: 10,
                    name: '警告'
                },
                {
                    value: 10,
                    name: '罚款'
                },
                {
                    value: 10,
                    name: '责令停产停业'
                },
                {
                    value: 10,
                    name: '没收违法所得'
                },
                {
                    value: 10,
                    name: '法律法规规定的其他行政处罚'
                },
                {
                    value: 10,
                    name: '行政拘留'
                },
                {
                    value: 10,
                    name: '暂扣或吊销许可证'
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};