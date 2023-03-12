var value = 60;

option = {
    title: {
        show: true,
        text: '仪表盘'
    },
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            type: 'gauge',
            radius: '50%',
            min: 0,
            max: 100,
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#000',
                    width: 1
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#000'
                }
            }, //分隔线样式
            axisLabel: {
                //show:false,
                distance: 30,
                textStyle: {
                    color: '#000',
                    fontSize: '14',
                    fontWeight: 'bold'
                },
                formatter: '{value}'
            },
            pointer: {
                show: false
            },
            detail: {
                show: false
            }
        },
        {
            name: '排名',
            type: 'gauge',
            radius: '60%',
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 6,
                    color: [
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: '#f00',
                                    },
                                    {
                                        offset: 0.1,
                                        color: '#f00',
                                    },
                                    {
                                        offset: 0.3,
                                        color: '#FEA246',
                                    },
                                    {
                                        offset: 0.4,
                                        color: '#FEA246',
                                    },
                                    {
                                        offset: 1,
                                        color: '#4AC18E',
                                    }
                                ]
                            )
                        ],
                    ]
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                distance: -60,
                color: '#000',
                formatter: function(v) {
                    switch (v + '') {
                        case '0':
                            return '高';
                        case '20':
                            return '中';
                        case '40':
                            return '低';
                    }
                }
            },
            title: { //标题
                show: true,
                offsetCenter: [0, 46], // x, y，单位px
                textStyle: {
                    color: "#000",
                    fontSize: 14, //表盘上的标题文字大小
                    fontWeight: 400,
                    fontFamily: 'PingFangSC'
                }
            },
            pointer: {
                show: true,
                width: 4,
                length: '100%'
            }, 
            itemStyle: {
                normal: {
                    color: 'red',
                    shadowBlur: 5
                }
            },
            data: [{
                name: '本期排名',
                value: value
            }]
        },
        {
            name: '指针中心外圈',
            type: 'pie',
            legendHoverLink: false,
            radius: ['3%', '5%'],
            z: 3,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.1,
                        y: -0.1,
                        r: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#DDDDDD' // 0% 处的颜色
                        }, {
                            offset: 0.7,
                            color: '#1B1811' // 50% 处的颜色
                        }, {
                            offset: 0.71,
                            color: '#1B1811' // 51% 处的颜色
                        }, {
                            offset: 1,
                            color: '#1B1811' // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    }
                }
            },
            data: [{
                value: 1,
                name: '辅助饼图黑色'
            }],
        },
        {
            name: '指针中心内圈',
            type: 'pie',
            "legendHoverLink": false,
            "radius": ['0%', '3%'],
            z: 4,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "#f00000"
                }
            },
            data: [{
                value: 1,
                name: '辅助饼图红色'
            }]
        }
    ]
};