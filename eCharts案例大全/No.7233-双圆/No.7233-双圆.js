var dataArr = 3.5;
var max = 5.5; 
        var colorSet = {
            color: '#468EFD'
        };
        var option = {
            xAxis: {
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            series: [
                // 内圆
                {
                    type: 'pie',
                    radius: ['0', '25%'],
                    center: ['50%', '50%'],
                    z: 4,
                    hoverAnimation: false,
                   
                    data: [{
                        name: '积分',
                        value: dataArr,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(23,161,255,.2)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(17,90,233,0.05) '
                                }])
                            }

                        },
                        label: {
                            normal: {
                                color: '#45C5FF',
                                align: 'center',
                                fontSize: 16,
                                formatter: function(params) {
                                    return dataArr + "%" ;
                                },
                                position: 'center',
                                show: true
                            }
                        },
                        labelLine: {
                            show: false
                        }
                    }],
                },{
                    name: "内部进度条",
                    type: "gauge",
                    center: ['50%', '50%'],
                    radius: '70%',
         splitNumber: 10,
                    axisLine: {
                        lineStyle: {
                            color: [
                                [dataArr / max, colorSet.color],
                                [1, "#111F42"]
                            ],
                            width: 8
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
                        show:false,
                    },
                    label: {
                        show: false
                    },
                    title: { //标题
                        show: false,
                    },
                    data: [{
                        name: "title",
                        value: dataArr,
                    }],
                    pointer: {
                        show: false,
                    },
                },
                // 刻度
                {
                    type: "gauge",
                    radius: "76%",
                    startAngle: 220,
                    endAngle: -40,
                     max: max,
                    z: 2,
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#6B9DD7',
                            width: 1
                        },
                        length: -4
                    }, //刻度样式
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#6B9DD7',
                            width: 1
                        },
                        length: -4
                    }, //分隔线样式
                  /*  axisLabel: {
                        
                    	show: true,
						distance: -15,
						color: 'rgba(255,255,255,0)',
                        fontSize: 16,
						formatter: function(v){
						    if( v == 100){
						        return v;
						    }
						
						}
                    }, //刻度节点文字颜色*/
                    pointer: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                 
                    label: {
                        show: false
                    },
                      axisLabel: {
                        
                    	show: true,
						distance: -35,
					/*	color: 'rgba(255,255,255,0)',*/
                        fontSize: 16,
						formatter: function(v){
						    if( v == max){
						        return v;
						    }
					
						}
                    }, //刻度节点文字颜色
                     
                    //仪表盘详情，用于显示数据。
                    detail: {
                        show: true,
                        offsetCenter: ['8%', '100%'],
                        color: '#A2C7F3',
                        formatter: function(params) {
                            return '科技投入占比'
                        },
                        textStyle: {
                            fontSize: 16
                        }
                    }
                },
                // 外一层圈
                {
                    type: "pie",
                    radius: "35%",
                    startAngle: 220,
                    endAngle: -40,
                    hoverAnimation: false,
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    data: [{
                        value: 5.5
                    }],
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2:1,
                                colorStops: [{
                                    offset: 0,
                                    color: "rgba(23,161,255,.5)"
                                }, {
                                    offset: 1,
                                    color: "rgba(17,90,233,.1)"
                                }]
                            }
                        }
                    }
                },
            ]
        }