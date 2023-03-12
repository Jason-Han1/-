 var myData = ['桐君街道','城南街道','旧县街道','凤川街道','江南镇','横村镇','富春江镇','瑶琳镇',
'分水镇','百江镇','新合乡','莪山乡','钟山乡','合村乡'];
    var lineData = [100, 100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100, 100];
    var lastYearData = {
        1: [3, 20, 62, 34, 55, 65, 33,3, 20, 62, 34, 55, 65, 33]
    };
    var thisYearData = {
        1: [11, 38, 23, 39, 66, 66, 79,11, 38, 23, 39, 66, 66, 79]
    };
    var timeLineData = [1];
    var background = "#07102F"; 
    var option = {
        baseOption: {
            backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            legend : {
                top : '1%',
                left : '27%',
                itemWidth : 22,
                itemHeight : 22,
                itemGap: 343,
                icon : 'horizontal',
                textStyle : {
                    color : '#ffffff',
                    fontSize : 20,
                },
                data: ['企业家数', '茶产值']
            },
            grid: [{
                show: false,
                left: '5%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            },  {
                show: false,
                left: '51%',
                top: '10%',
                bottom: '11%',
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
                position: 'bottom',
                axisLabel: {
                    show: true,
                    
                    textStyle: {
                        color: 'white'
                    }
                },
                splitLine: {
                    show: false
                }
            }, {
                gridIndex: 1,
                show: false,
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
                    show: true,
                      interval: 0,  
                   
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
    option.baseOption.timeline.data.push(timeLineData[0]);
   option.options.push({
        series: [
        {
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            barWidth: 10,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return lastYearData[timeLineData[0]][series.dataIndex] + '个'
                    },
                    position: 'insideTopLeft',
                    textStyle:{
                        color: '#ffffff',
                        fontSize: 20,
                    },
                    offset: [0, -10],
                }
            },
            z: -100,
                animationEasing: 'elasticOut',
                 animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            name: '企业家数',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
          
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#039372'
                }
            },
            data: lastYearData[timeLineData[0]],
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
                        return thisYearData[timeLineData[0]][series.dataIndex] + '万元'
                    },
                    position: 'insideTopRight',
                    textStyle:{
                        color: '#ffffff',
                        fontSize: 20,
                    },
                    offset: [0, -10],
                }
            },
            z: -100,
                animationEasing: 'elasticOut',
                 animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            name: '茶产值',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
         
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#36d7b6'
                }
            },
          data: thisYearData[timeLineData[0]],
        }
        ]
    });