option = {
        backgroundColor: "#0e2147",
        title: {
            show: true,
            text: '合规率',
            x: '50%',
            y: '73%',
            z: 10,
            textAlign: 'center',
            textStyle: {
                color: '#ffffff',
                fontSize: 30
            },
        },
        series: [
            {
                name: "内部进度条",
                type: "gauge",
                radius: '50%',
                splitNumber: 6,
                axisLine: {
                    lineStyle: {
                        color: [
                            [75 / 100, '#00faff'],
                            [1, "rgba(0,193,255,0.2)"]
                        ],
                        width: 20
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
                pointer: {
                    show: false,
                },
            },
            {
                name: '外部刻度',
                type: 'gauge',
                radius: '55%',
                min: 0, //最小刻度
                max: 100, //最大刻度
                splitNumber: 10, //刻度数量
                startAngle: 220,
                endAngle: -40,
                axisLine: {
                    show: false,
                },
                //仪表盘轴线
                axisLabel: {
                    show: false,
                }, 
				//刻度标签
                axisTick: {
                    show: true,
                    splitNumber: 6,
                    lineStyle: {
                        color: '#00faff', //用颜色渐变函数不起作用
                        width: 1,
                    },
                    length: -5
                }, 
				//刻度样式
                splitLine: {
                    show: true,
                    length: -8,
                    lineStyle: {
                        color: '#00faff', //用颜色渐变函数不起作用
                        width: 1,
                    }
                }, //分隔线样式
                detail: {
                    show: false
                },
                pointer: {
                    show: false
                }
            },
            /*内部*/
            {
                type: 'pie',
                radius: ['0', '40%'],
                z: 3,
                hoverAnimation: false,
                data: [{
                    name: '合规率',
                    value: 75.85,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#025ebb'
                            }, {
                                offset: 0.5,
                                color: '#06a3da'
                            },
                            {
                                offset: 1,
                                color: '#025ebb'
                            }])
                        }
                    },
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#ffffff',
                                    align: 'center',
                                    fontSize: 48,
                                },
                            },
                            formatter: function (params) {
                                return "{a|" + params.value + "%"+"}";
                            },
                            position: 'center',
                            show: true
                        }
                    },
                    labelLine: {
                        show: false
                    }
                }],
            },
            /*外一层*/
            {
				type: "pie",
                radius: "60%",
                avoidLabelOverlap: false,
                z: 1,
                hoverAnimation: false,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: [{
                    "value": 1
                }],
                itemStyle: {
                    normal: {
						color: 'rgba(0,131,255,0.05)',
                    }
                }
            },
            //外二层圈
            {
                type: "pie",
                radius: "70%",
                avoidLabelOverlap: false,
                z: 0,
                hoverAnimation: false,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: [{
                    "value": 1
                }],
                itemStyle: {
                    normal: {
						color: 'rgba(0,131,255,0.05)',
                    }
                }
            }
        ]
    };
