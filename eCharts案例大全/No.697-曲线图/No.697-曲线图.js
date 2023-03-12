option = {
        title: {
            // text: '近6月的平台趋势分析',
            textStyle: {
                align: 'center',
                color: '#CAFFFD',
                fontSize: 12,
            },
            top: '0%',
            left: 'center',
        },
        backgroundColor:'#0B266C',
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['流入'],
            top: '0%',
            left: '5%',
            textStyle: {
                align: 'center',
                color: '#fff',
                fontSize: 12,
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        //	    toolbox: {
        //	        feature: {
        //	            saveAsImage: {}
        //	        }
        //	    },
        xAxis: {
            type: 'category',
            boundaryGap: false, //坐标轴两边留白
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: { //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: '#eeeeee',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                },
                formatter: function (params) {
                    var newParamsName = "";
                    var paramsNameNumber = params.length;
                    var provideNumber = 4; //一行显示几个字
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                    if (paramsNameNumber > provideNumber) {
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";
                            var start = p * provideNumber;
                            var end = start + provideNumber;
                            if (p == rowNumber - 1) {
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;
                        }

                    } else {
                        newParamsName = params;
                    }
                    return newParamsName
                },
                //rotate:50,
            },
            axisTick: { //坐标轴刻度相关设置。
                show: false,
            },
            axisLine: { //坐标轴轴线相关设置
                lineStyle: {
                    color: '#CAFFFD',
                    opacity: 0.3
                }
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
                show: false,
                lineStyle: {
                    color: '#E5E9ED',
                    // 	opacity:0.1
                }
            }
        },
        yAxis: [{
            type: 'value',
            min: 0,
            max: 400,
            splitNumber: 5,
            axisLabel: {
                textStyle: {
                    color: '#EEEEEE',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#CAFFFD',
                    opacity: 0.3
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(202, 255, 253, 0.2)',
                    // 	opacity:0.1
                }
            }

        }],
        series: [{
            name: '流入',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: 'rgba(32, 248, 134, 1)',
                    shadowColor: '#20F886',
                    shadowBlur: 20,
                    borderColor: '#20F886',
                    borderWidth: 2,
                    lineStyle: {
                        color: "#20F886",
                        width: 1
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: 'rgba(32, 248, 134, 1)'
                        }]),
                    }
                }
            },
            data: [150, 100, 200, 99, 300, 160, 100, 350, 109, 209, 300, 160]
        }, ]
    };
