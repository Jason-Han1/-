    var myData = ['一审服判息诉率']
    var lineData = [100]
    var thisYearData = {
        1: [11]
    }
    var timeLineData = [1]
    var background = "#111c4e"; //背景 

    var option = {
        baseOption: {
            backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            grid: [
                {
                show: false,
                left: '0%',
                top: '10%',
                bottom: '10%',
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '15%',
                top: '20%',
                bottom: '20%',
                width: '0%'
            }, {
                show: false,
                right: '10%',
                top: '20%',
                bottom: '20%',
                containLabel: true,
                width: '60%'
            }],
            yAxis: [{
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
            xAxis: [{
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
                position: 'middle',
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
                        return thisYearData[timeLineData[0]][series.dataIndex] + '%'
                    },
                    position: 'insideTopRight',
                    textStyle:{
                        color: '#ffffff',
                        fontSize: 20,
                    },
                    offset: [60, -10],
                }
            },
            z: -100,
                animationEasing: 'elasticOut',
                 animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            name: '2018',
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
