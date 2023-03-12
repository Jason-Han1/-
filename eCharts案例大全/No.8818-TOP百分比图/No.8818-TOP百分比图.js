    var vbiTOP = [{name:"学生消费",data:"88",url:"#/top/view/9722/status="},{name:"学生充值",data:"76",url:"#/top/view/9722/status="},
        {name:"图书借阅情况统计分析",data:"56",url:"#/top/view/9722/status="},{name:"教职工消费",data:"34",url:"#/top/view/9722/status="},
        {name:"科研分析",data:"22",url:"#/top/view/9722/status="},{name:"科研专利",data:"10",url:"#/top/view/9722/status="},];
    var yAxisMonth = ['学生消费','师资分析','质量反馈','测试仪表盘','测试仪表盘','测试仪表盘'];
    var barData = [96, 72,53, 42,26, 10];
    var barDataTwo = [];
    var coordData2 = [];
    var coordData = [];
    // var chartHeight;
    for (var i = 0; i < barData.length; i++) {
        barDataTwo.push(Math.max.apply(Math, barData) + 0);
        coordData.push({
            "coord": [Number(barData[i]), i]
        });
        coordData2.push({
            "coord": [Math.max.apply(Math, barData) + 0, i]
        })
    }
    option = {
        backgroundColor: "#fdfdfd",
        title: {
            text: ''
        },
        legend: null,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].name + "<br/>" + '访问次数: ' + params[0].value;
            }
        },
        grid: {
            containLabel: true,
            left: "8%",
            right: "0%",
            top: "0%",
            bottom:"0%",
        },
        yAxis: [{
            type: 'category',
            data: yAxisMonth,
            position:'right',
            inverse: true,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#0498f2'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show:false,//右边标签名称
                margin: 10,
                offset:[0,0],
                textStyle: {
                    fontSize: 12,
                    color: '#42a5c2',
                },
                formatter: function(value) {
                    return '{Sunny|' + value + '}';
                },
                rich: {
                    value: {
                        lineHeight: 23,
                    },
                    Sunny: {
                        height: 22,
                        padding: [0, 0, 0, 0],
                        align: 'center',
                        backgroundColor: {
                            image:'imgs/homepage/boder.png'
                        }


                    }
                }
            }
        },
            {
                data: yAxisMonth,
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
            },
        ],
        xAxis: [{
            type: "value",
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        }, {
            type: "value",
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        }],
        series: [{
            z: 10,
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: 'null',
            type: 'pictorialBar',
            data: barData,
            barCategoryGap: '80%',
            label: {
                normal: {
                    show: true,
                    position: 'insideLeft',
                    offset:[-30,0],
                    textStyle: {
                        fontSize: 12,
                        color: '#394a5f'
                    }
                }
            },
            symbolRepeat: false,
            symbolSize: ['100%', 5],
            symbolOffset: [-16.5, 0],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#394a5f' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#394a5f' // 100% 处的颜色
                    }], false),
                    barBorderRadius:50,
                    // barBorderRadius: [0, 20,20, 0],
                    // shadowColor: 'rgba(0,0,0,0.5)',
                    // shadowBlur: 3,
                    // shadowOffsetY: 3
                },
                emphasis:{
                    color:'#2f808f',
                    barBorderRadius:50,
                }
            },
            symbolClip: true,
            symbolPosition: 'end',
            symbol: 'rect',
         /*   symbol: 'path://M0 0 L0 60 L225 60 L300 0 Z',
            markPoint: {

                data: coordData,
                symbolSize: [33, 33],
                symbolOffset: [-0.5, 0],
                z: 3,
                label: {
                    normal: {
                        show: false
                    }
                },
                symbolClip: false,
                symbol: 'path://M 300 100 L 100 100 L 100 300 z',

            }*/
        },
            {
                z: 6,
                xAxisIndex: 1,
                yAxisIndex: 1,
                animation: true,
                name: 'nul',
                type: 'pictorialBar',
                data: barDataTwo,
                barCategoryGap: '80%',
           /*     label: {
                    normal: {
                        show: false,
                        position: 'inside',
                        textStyle: {
                            fontSize: 12,
                            color: '#00ffff'
                        }
                    }
                },*/
                symbolRepeat: false,
                symbolSize: ['100%', 5],
                symbolOffset: [-16.5, 0],
                itemStyle: {
                    normal: {
                        color: '#d8e8f2'
                    },
                    emphasis:{
                        color: '#d8e8f2'
                    }
                },
                symbolClip: true,
                symbol: 'rect',
           /*     markPoint: {//柱子后面标注图标
                    data: coordData2,
                    symbolSize: [33, 33],
                    symbolOffset: [10, 15],
                    label: {
                        normal: {
                            show: false,
                            position:'right'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00abc5',
                            opacity: 1
                        }
                    },
                    symbolClip: false,
                    // symbol: 'path://M 300 100 L 100 100 L 100 300 z',
                    animationDelay:100,
                    animationDuration:1200,
                    animation:true,
                    animationDurationUpdate :1000
                }*/
            },
        ]
    };
