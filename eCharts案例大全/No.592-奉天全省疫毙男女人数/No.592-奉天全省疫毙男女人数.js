    var xData = ['承德县', '铁岭县', '义州', '新民府', '广宁县', '镇安县', '昌图府', '绥中县', '法库厅', '兴京府', '奉化县', '抚顺县', '怀德县', '本溪县', '开源县', '锦县', '康平县', '锦西厅', '辽中县', '宁远州', '辽源州', '西安县', '西丰县', '辽阳州', '彰武县', '海龙府', '东平县', '盘山厅'];
    var lastYearData = [2170, 86, 89, 422, 140, 83, 515, 42, 273, 8, 254, 60, 534, 31, 157, 25, 135, 14, 57, 45, 14, 86, 78, 37, 9, 7, 4, 15, ];
    var thisYearData = [401, 11, 84, 180, 85, 24, 103, 28, 83, , 108, 25, 140, , 63, 8, 63, 11, 22, 34, 12, 27, 5, 16, 1, 4, , 12, ];
    let legend = ['女性', '男性'];
    var background = "#363636"; //背景 
    let textColor = "#fff";
    let lineColor = "rgba(255,255,255,0.2)";
    let colors = [{
            borderColor: "rgba(227,161,96,1)",
            start: "rgba(227,161,96,0.8)",
            end: "rgba(227,161,96,0.3)"
        },
        {
            borderColor: "rgba(0,222,255,1)",
            start: "rgba(0,222,255,0.3)",
            end: "rgba(0,222,255,0.8)"
        },
    ];

    var option = {
        baseOption: {
                    title: {
            text: '奉天全省疫毙男女人数',
            left:"center"
        },
            backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            legend: {
                top: '5%',
                right: '5%',
                itemWidth: 20,
                itemHeight: 5,
                // itemGap: 343,
                icon: 'horizontal',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 20,
                },
                data: legend
            },
            grid: [{
                show: false,
                left: '3%',
                top: '14%',
                bottom: '5%',
                containLabel: true,
                width: '43%'
            }, {
                show: false,
                left: '50%',
                top: '17.5%',
                bottom: '4.5%',
                width: '100%',
                containLabel: false,
            }, {
                show: false,
                right: '4%',
                top: '14%',
                bottom: '5%',
                containLabel: true,
                width: '43%'
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
            }, {
                gridIndex: 1,
                show: false
            }, {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },

                axisTick: {
                    show: true
                },
                axisLabel: {
                    show: false
                },
                data: xData
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    padding: [0, 0, 0, 5],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 13
                    },
                    align: "center"

                },
                data: xData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
                axisTick: {
                    show: true
                },
                axisLabel: {
                    show: false

                },
                data: xData
            }],
            series: []

        },
        options: []
    }

    option.options.push({
        series: [{
                name: "女性",
                type: "bar",
                barWidth: 12,
                stack: "1",
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: colors[0].start
                            },
                            {
                                offset: 1,
                                color: colors[0].end
                            }
                        ]),
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: lastYearData,
                //animationEasing: "elasticOut"
            },
            {
                name: "男性",
                type: "bar",
                stack: "2",
                barWidth: 12,
                xAxisIndex: 2,
                yAxisIndex: 2,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: colors[1].start
                            },
                            {
                                offset: 1,
                                color: colors[1].end
                            }
                        ]),
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: thisYearData,
                // animationEasing: "elasticOut"
            },

        ]
    });