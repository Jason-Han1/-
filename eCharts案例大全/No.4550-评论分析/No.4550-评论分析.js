
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    }
};


var dataStyle = {
    normal: {
        formatter: '{c}%',
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '20',
            fontWeight: 'normal',
            color: '#34374E'
        }
    }
};


var option = {
    backgroundColor: "#FFFFFF",
    color: ['#429CF5', '#ff733f', '#ec4863'],

    title: [{
        text: '留评率',
        left: '80%',
        top: '45%',
        textAlign: 'center',
        textStyle: {
            //fontWeight: 'normal',
            fontSize: '14',
            color: '#666666',
            textAlign: 'center',
        },
    }, {
        text: '差评率',
        left: '80%',
        top: '85%',
        textAlign: 'center',
        textStyle: {
            color: '#666666',
            //fontWeight: 'normal',
            fontSize: '14',
            textAlign: 'center',
        },
    }],
    tooltip: {
    },
    legend: {"show": false
    },
    grid: {
        left: '5%',
        right: '35%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
		        color: 'rgba(151,151,151,0.5)',
				type: 'dashed'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            margin: 35,
            color: '#666',
            textStyle: {
                fontSize: 14,
                //fontWeight: 'bold', // 加粗
            },
        },
        data: ['5星', '4星', '3星', '2星', '1星']
    },
    yAxis: {
        "axisLine": {
            lineStyle: {
                //color: '#c0576d'
		        color: 'rgba(151,151,151,0.5)',
				type: 'dashed'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                //color: '#c0576d'
		        color: 'rgba(151,151,151,0.5)',
				type: 'dashed'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            margin: 15,
            color: '#666',
            textStyle: {
                fontSize: 14,
            },
        },
        type: 'value'
    },
    series: [
        {
            name: '星级分布',
            //smooth: true,
            type: 'bar',
            barWidth: '35%',
			itemStyle: {
                //barBorderRadius: 10,
                visualMap: false,
                color: function(params) {
                    var index_color = params.value;
                    console.log(index_color, "1111color");
                    if (index_color < 100) {
                        return {
                            type: "linear",
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                    offset: 0,
                                    color: "rgba(251,89,96,0.5)" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#FB6260" // 100% 处的颜色
                                }
                            ]
                        };
                    }
                    else if (index_color >= 100 & index_color <= 150) {
                        return {
                            type: "linear",
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                    offset: 0,
                                    color: "rgba(242,169,69,0.1)" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#F2A93B" // 100% 处的颜色
                                }
                            ]
                        };
                    }
                    else {
                        return {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 1,
                                    color: "rgba(0,189,137,0.1)" // 0% 处的颜色
                                },
                                {
                                    offset: 0,
                                    color: "#12ba8a" // 100% 处的颜色
                                }
                            ]
                        };
                    }
                }
            },
        label: {
            show: true,
            position: 'top', // 位置
            color: '#555555',
            fontSize: 14,
            fontWeight: 'bold', // 加粗
            distance: 10 // 距离
        }, // 柱子上方的数值
            data: [500, 350, 100, 30, 20]
        },
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '30%'],
            center: ['80%', '35%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'
                        }
                    },
                }, {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '30%'],
            center: ['80%', '35%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 85,
                    itemStyle: {
                        normal: {
                            color: '#6F78CC'
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 55,
                    itemStyle: placeHolderStyle,
                },

            ]
        },


        //第二个图表
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['80%', '75%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'


                        }
                    },

                }, {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },

            ]
        },

        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['80%', '75%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 15,
                    itemStyle: {
                        normal: {
                            color: '#FB6260'
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 70,
                    itemStyle: placeHolderStyle,
                },

            ]
        }
    ]
    }