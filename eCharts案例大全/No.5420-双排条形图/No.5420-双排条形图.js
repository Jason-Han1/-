var myData = ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5']
var lineData = [200, 200, 200, 200, 200]
var lastYearData = {
    1: [56, 20, 62, 34, 55]
}
var thisYearData = {
    1: [11, 38, 23, 39, 106]
}
var timeLineData = [1]
var background = '#000' // 背景
option = {
    baseOption: {
        backgroundColor: background,
        timeline: {
            show: false,
            top: 0,
            data: []
        },
        legend: {
            top: '12%',
            left: '15%',
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 100,
            icon: 'horizontal',
            textStyle: {
                color: '#ffffff',
                fontSize: 14
            },
            data: ['内容更新量/条', '内容推送量/条']
        },
        grid: [{
            show: false,
            left: '5%',
            top: '27%',
            bottom: '10%',
            containLabel: true,
            width: '37%'
        }, {
            show: false,
            left: '53%',
            top: '27%',
            bottom: '10%',
            width: '0%'
        }, {
            show: false,
            right: '2%',
            top: '27%',
            bottom: '10%',
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
            position: 'bottom',
            axisLabel: {
                show: false,
                //     formatter:function(value)
                //   {
                //         //return '\n\n\n\n' + value;
                //      // return '\n' + value
                //      return value
                //      // return value + 'virus'
                //     // return value.split("").join("\n");
                //   },
                textStyle: {
                    color: 'white'
                }
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
            position: 'bottom',
            axisLabel: {
                show: false,
                interval: 0,
                // formatter:function(value)
                //   {
                //         //return '\n\n\n\n' + value;
                //     //  return '\n' + value
                //   return value
                //      // return value + 'virus'
                //     // return value.split("").join("\n");
                //   },
                textStyle: {
                    color: 'white'
                }
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
            position: 'center',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                //  formatter:function(value)
                //   {

                //      // return '\n' + value
                //      return value + '\n\n'
                //      // return value + 'virus'
                //   },
                textStyle: {
                    color: '#ffffff',
                    fontSize: 20
                }

            },
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                        fontSize: 15
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
};

option.baseOption.timeline.data.push(timeLineData[0]);
option.options.push({
        series: [{
                type: 'pictorialBar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                // symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                barWidth: 12,
                // symbolRepeat: true,
                // symbolSize: 14,
                data: lineData,
                barGap: '-100%',
                barCategoryGap: 0,
                label: {
                    normal: {
                        show: true,
                        formatter: (series) => {
                            return lastYearData[timeLineData[0]][series.dataIndex]
                        },
                        position: 'insideTopLeft',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 16
                        },
                        offset: [0, -10]
                    }
                },
                z: -100,
                animationEasing: 'elasticOut',
                animationDelay: function(dataIndex, params) {
                    return params.index * 30
                }
            }, {
                name: '内容更新量/条',
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                //  symbol: 'rect',
                barWidth: 12,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: '#039372'
                    }
                },
                // symbolRepeat: true,
                // symbolSize: 14,
                data: lastYearData[timeLineData[0]]
                // animationEasing: 'elasticOut',
                // animationDelay: function (dataIndex, params) {
                //     return params.index * 30 * 1.1;
                // }
            },
            {
                type: 'pictorialBar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                barWidth: 12,
                symbolRepeat: true,
                symbolSize: 14,
                data: lineData,
                barGap: '-100%',
                barCategoryGap: 0,
                label: {
                    normal: {
                        show: true,
                        formatter: (series) => {
                            return thisYearData[timeLineData[0]][series.dataIndex]
                        },
                        position: 'insideTopRight',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 16
                        },
                        offset: [0, -10]
                    }
                },
                z: -100,
                animationEasing: 'elasticOut',
                animationDelay: function(dataIndex, params) {
                    return params.index * 30
                }
            }, {
                name: '内容推送量/条',
                type: 'bar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                //   symbol: 'rect',
                barWidth: 12,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: '#36d7b6'
                    }
                },
                // symbolRepeat: true,
                // symbolSize: 14,
                data: thisYearData[timeLineData[0]]
                // animationEasing: 'elasticOut',
                // animationDelay: function (dataIndex, params) {
                //     return params.index * 30 * 1.1;
                // }
            }
        ]
    });
