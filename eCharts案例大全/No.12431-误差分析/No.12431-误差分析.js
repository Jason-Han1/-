    var myData = ['EVA', '化物语', '机动战士高达', '魔法少女小圆', '凉宫春日的忧郁',  '叛逆的鲁鲁修',"轻音少女","进击的巨人",'幸运星','龙与虎','佐贺偶像是传奇','哥布林杀手','JOJO的奇妙冒险','兽娘动物园','Fate/Zero']
    var lineData = [100, 100, 100, 100, 100, 100, 100,100]
    var lastYearData = {
        1: [16292, 8539, 44651, 20611, 15366, 9062,29960,21575,18500,9255,8934,5970,46580,26991,7946]
    }
    var thisYearData = {
        1: [271551,93500,337572,240722,105164,180783,203146,236056,212620,119450,128563,82788,285858,212530,282661]
    }
    var timeLineData = [1]
    var background = "#0e2147"; //背景 

    var option = {
        baseOption: {
            backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            legend : {
                top : '5%',
                left : '31%',
                itemWidth : 22,
                itemHeight : 22,
                itemGap: 343,
                icon : 'horizontal',
                textStyle : {
                    color : '#ffffff',
                    fontSize : 20,
                },
                data: ['n站投稿数量', '贴吧关注数（人）']
            },
            grid: [{
                show: false,
                left: '5%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '51%',
                top: '10%',
                bottom: '8%',
                width: '0%'
            }, {
                show: false,
                right: '2%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
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
                    show: false
                },
                splitLine: {
                    show: false
                }
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
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: myData
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 20
                    }

                },
                data: myData.map(function(value) {
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
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
                data: myData
            }],
            series: []

        },
        options: []
    }

    option.baseOption.timeline.data.push(timeLineData[0])
    option.options.push({
        series: [
        {
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: 'rgba(3,147,114,0.27)'
                }
            },
            barWidth: 10,
            symbolRepeat: true,
            symbolSize: 14,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return lastYearData[timeLineData[0]][series.dataIndex] + ''
                    },
                    position: 'insideTopLeft',
                    textStyle:{
                        color: '#ffffff',
                        fontSize: 20,
                    },
                    offset: [0, -35],
                }
            },
            z: -100,
                animationEasing: 'elasticOut',
                 animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            name: 'n站投稿数量',
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'rect',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#039372'
                }
            },
            symbolRepeat: true,
            symbolSize: 14,
            data: lastYearData[timeLineData[0]],
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
                return params.index * 30 * 1.1;
            }
        },
        {
            type: 'pictorialBar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: 'rgba(54,215,182,0.27)'
                }
            },
            barWidth: 10,
            symbolRepeat: true,
            symbolSize: 14,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return thisYearData[timeLineData[0]][series.dataIndex] + ''
                    },
                    position: 'insideTopRight',
                    textStyle:{
                        color: '#ffffff',
                        fontSize: 20,
                    },
                    offset: [0, -35],
                }
            },
            z: -100,
                animationEasing: 'elasticOut',
                 animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            name: '贴吧关注数（人）',
            type: 'pictorialBar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbol: 'rect',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#36d7b6'
                }
            },
            symbolRepeat: true,
            symbolSize: 14,
            data: thisYearData[timeLineData[0]],
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
                return params.index * 30 * 1.1;
            }
        }
        ]
    });
