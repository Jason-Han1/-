    var myData = ['低压居民', '低压非居民', '高压单电源', '高压双电源']
    var lineData = [100, 100, 100, 100]

    var thisYearData = {
        1: [11, 38, 23, 39]
    }
    var timeLineData = [1]
    var background = "#ffffff"; //背景 

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
                left : '5%',
                itemWidth : 22,
                itemHeight : 22,
                itemGap: 343,
                icon : 'horizontal',
                textStyle : {
                    color : '#333',
                    fontSize : 20,
                },
                data: ['2020']
            },
            grid: [{
                show: false,
                left: '5%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '70%'
            },
			{// 进度条左侧文字位置调整 -- 开始 
                show: false,
                left: '10%',
                top: '10%',
                bottom: '8%', // 进度条左侧文字之间的间距
                width: '0%'
            },// 进度条左侧文字位置调整 -- 结束
			{// 进度条位置调整 -- 开始 
                show: false,
                left: '18%',
                top: '10%',
                bottom: '8%', // 进度条之间的间距
                containLabel: true,
                width: '70%'
            }// 进度条位置调整 -- 结束
			],
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
                        color: '#333', // 进度条左侧文字的颜色
                        fontSize: 20
                    }

                },
                data: myData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center' // 进度条左侧文字对齐方式
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
                    color: 'rgba(236,236,236,0.8)' // 进度条阴影颜色
                }
            },
            barWidth: 10,
            symbolRepeat: true,// 是否显示进度条阴影
            symbolSize: 14, // 进度条阴影格子大小
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true, // 是否显示进度条上方的百分比
                    formatter: (series) => {
                        return thisYearData[timeLineData[0]][series.dataIndex] + '%'
                    },
                    position: 'insideTopRight',
                    textStyle:{
                        color: '#333', // 进度条上方百分比字体颜色
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
            name: '2020',
            type: 'pictorialBar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbol: 'rect',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, //0，0，0，1分别代表了右、下、左、上四个位置的颜色坐标
                        [
                            {offset: 0, color: '#CCEEFF'},
                            {offset: 1, color: '#2299F3'}
                        ]
                    )
                }
            },
            symbolRepeat: true,
            symbolSize: 14,	// 进度条格子大小
            data: thisYearData[timeLineData[0]],
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
                return params.index * 30 * 1.1;
            }
        }
        ]
    });
