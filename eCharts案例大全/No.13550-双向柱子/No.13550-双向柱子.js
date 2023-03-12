var myData = ['立案变更率', '一审案件陪审率', '发回重审率', '起再审率', '重审率']
    var lastYearData = {
        1: [89, 29, 22, 32, 55]
    }
    var thisYearData = {
        1: [21, 38, 23, 39, 66]
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
                left : '15%',
                itemWidth : 28,
                itemHeight : 16,
                itemGap: 450,
                icon : 'horizontal',
                textStyle : {
                    color : '#ffffff',
                    fontSize : 20,
                },
                data: ['2017', '2018']
            },
            grid: [{
                show: false,
                left: '5%',
                top: '10%',
                bottom: '5%',
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '51%',
                top: '10%',
                bottom: '5%',
                width: '0%'
            }, {
                show: false,
                right: '2%',
                top: '10%',
                bottom: '5%',
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
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: 'rgba(255,255,255,0.08)',
                    borderWidth: 1,
                    borderColor: '#f8d517',
                }
            },
            barGap:'-100%',
            barWidth:'50%',
            data: [100, 100, 100, 100 ,100]
        },
        {
            name: '2017',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color:'#f8d517',
                    borderWidth: 0,
                    borderColor: '#f8d517',
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return lastYearData[timeLineData[0]][series.dataIndex] + '%'
                    },
                    position: 'inside',
                    textStyle:{
                        color:'#ffffff',
                        fontSize:20,
                    }
                }
            },
            barWidth:'50%',
            data: lastYearData[timeLineData[0]]
        },
        {
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    show: true,
                    color: 'rgba(255,255,255,0.08)',
                    borderWidth: 1,
                    borderColor: '#f39c11',
                }
            },
            barGap:'-100%',
            barWidth:'50%',
            data: [100, 100, 100, 100 ,100]
        },
        {
            name: '2018',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    show: true,
                    color:'#f39c11',
                    borderWidth: 0,
                    borderColor: '#f39c11',
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return thisYearData[timeLineData[0]][series.dataIndex] + '%'
                    },
                    position: 'inside',
                    textStyle:{
                        color:'#ffffff',
                        fontSize:20,
                    }
                }
            },
            barWidth:'50%',
            data: thisYearData[timeLineData[0]]
        }
        ]
    });