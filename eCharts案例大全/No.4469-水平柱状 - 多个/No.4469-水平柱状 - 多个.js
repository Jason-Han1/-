    var xData = ['技术A', '技术B', '技术C', '技术D', '技术E', '技术F', '技术G']
    var oneData = [130, 100, 190, 200, 100, 200, 320]
    var twoData = [3, 20, 62, 34, 55, 65, 33];
    var threeData = [110, 380, 230, 300, 600, 600, 700];
    var fourData = [140, 320, 330, 350, 420, 260, 170];
    let legend = ['2017', '2018', '2020', '2021'];
    var background = "#fff"; //背景 
    let textColor = "#000";
    let lineColor = "#cccccc";
    let colors = [{
        borderColor: "rgba(227,161,96,1)",
        start: "rgba(227,161,96,0.8)",
        end: "rgba(227,161,96,0.3)"
    }, {
        borderColor: "rgba(0,222,255,1)",
        start: "rgba(0,222,255,0.3)",
        end: "rgba(0,222,255,0.8)"
    }, {
        borderColor: "rgba(49,85,46,1)",
        start: "rgba(178,239,252,1)",
        end: "rgba(5,112,186,1)"
    }, {
        borderColor: "green",
        start: "green",
        end: "green"
    }];
    var option = {
        baseOption: {
            backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                bottom: '2%',
                right: 'center',
                itemWidth: 14,
                itemHeight: 14,
                itemGap: 30,
                icon: 'horizontal',
                textStyle: {
                    color: '#cccccc',
                    fontSize: 14,
                },
                data: legend
            },
            grid: [{
                show: false,
                left: '2%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '20%'
            }, {
                show: false,
                left: '25%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '20%'
            }, {
                show: false,
                left: '50%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '20%'
            }, {
                show: false,
                left: '75%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '20%'
            }],
            xAxis: [{
                gridIndex: 0,
                type: 'value',
                inverse: false,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
                axisTick: {
                    show: false
                },
                position: 'bottom',
                axisLabel: {
                    show: false,
                    color: textColor
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor
                    }
                },
            }, {
                gridIndex: 1,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
                axisTick: {
                    show: false
                },
                position: 'bottom',
                axisLabel: {
                    show: false,
                    color: textColor
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor
                    }
                },
            }, {
                gridIndex: 2,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
                axisTick: {
                    show: false
                },
                position: 'bottom',
                axisLabel: {
                    show: false,
                    color: textColor
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor
                    }
                },
            }, {
                gridIndex: 3,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
                axisTick: {
                    show: false
                },
                position: 'bottom',
                axisLabel: {
                    show: false,
                    color: textColor
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor
                    }
                }
            }],
            yAxis: [{
                gridIndex: 0,
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
                    show: false
                },
                axisLabel: {
                    show: true,
                    // padding: [10, 0, 0, 0],
                    textStyle: {
                        color: 'true',
                        fontSize: 15
                    },
                    align: "right"
                },
                data: xData
            }, {
                gridIndex: 1,
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
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: xData
                // data: xData.map(function(value) {
                //     return {
                //         value: value,
                //         textStyle: {
                //             align: 'center'
                //         }
                //     }
                // })
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
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: xData
            }, {
                gridIndex: 3,
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
                    show: false
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
            name: "2017",
            type: "bar",
            barWidth: 25,
            xAxisIndex: 0,
            yAxisIndex: 0,
            stack: "1",
            data: oneData,
        }, {
            name: "2018",
            type: "bar",
            stack: "2",
            barWidth: 25,
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: twoData,
        }, {
            name: "2020",
            type: "bar",
            stack: "3",
            barWidth: 25,
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: threeData,
        }, {
            name: "2021",
            type: "bar",
            stack: "4",
            barWidth: 25,
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: fourData,
        }, ]
    });