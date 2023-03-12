option = {
   backgroundColor: '#010828',
            title: {
                left: '550',
                top: '5',
                textStyle: {
                    rich: {
                        a: {
                            color: 'red',
                            fontWeight: 'bold',
                            fontSize: '16',
                        },
                        b: {
                            fontWeight: 'bold',
                            fontSize: '16',
                            color: 'white',
                        },

                    }

                },
                text: ['{a|案例1|}', '{b|案例2|案例3|案例4|案例5|案例6}'].join(''),
            },
            tooltip:{
                type:'items'
            },
            xAxis: [{
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'white',
                    }
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    // formatter: function (val) {
                    //     return val.split("").join("\n");
                    // },
                    textStyle: {
                        fontSize: 12 //更改坐标轴文字大小
                    },

                },
                data: ["互联网", "互联网1", "互联网2", "互联网3", "互联网4"],
            }],
            yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 300,
                    interval: 100,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value} '
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'white',
                        }
                    },
                },
                {
                    type: 'value',
                    min: -10,
                    max: 20,
                    interval: 10,
                    axisLabel: {
                        formatter: '{value} %'
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#FF6347',
                        }
                    },
                }
            ],
            series: [{
                    name: '预购队列',
                    type: 'bar',
                    barWidth: 50,

                    markLine: {
                        label: {
                            show: false
                        },
                        lineStyle: {
                            //  type:"solid",

                        },
                        data: [
                            // 纵轴，默认
                            {
                                type: 'min',
                                name: '最小值',
                                itemStyle: {
                                    normal: {
                                        color: '#FF6347'
                                    }
                                }
                            },
                            // 横轴
                            // {type : 'min', name: '最小值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}},
                        ]
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                        offset: 0,
                                        color: '#9e65ea'
                                    }, //柱图渐变色
                                    {
                                        offset: 0.5,
                                        color: '#855de6'
                                    }, //柱图渐变色
                                    {
                                        offset: 1,
                                        color: '#514ddd'
                                    }, //柱图渐变色
                                ]
                            )
                        },
                    },
                    data: [220, 100, 200, 300, 180],
                },
                {
                    name: '最新成交价',
                    type: 'line',
                    lineStyle: {
                        color: '#e7c52c',
                    },
                    data: [200, 100, 80, 50, 20],
                    symbol: 'none',
                }
            ],
};