option = {
    title: {
        text: '用电量'
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
		type: 'category',
	    boundaryGap: false,//坐标轴两边留白
		data: ['0', '1', '2','3','4','5','6'],
		axisLabel: { //坐标轴刻度标签的相关设置。
			interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
		//	margin:15,
			textStyle: {
				color: '#1B253A',
				fontStyle: 'normal',
				fontFamily: '微软雅黑',
				fontSize: 12,
			},
			formatter:function(params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 4;  //一行显示几个字
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
		axisTick:{//坐标轴刻度相关设置。
			show: false,
		},
		axisLine:{//坐标轴轴线相关设置
			lineStyle:{
				color:'#E5E9ED',
				// opacity:0.2
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
    yAxis: [
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
				textStyle: {
					color: '#a8aab0',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 14,
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#E5E9ED',
				// 	opacity:0.1
				}
			}

		}
	],
    series: [
        {
            name: '2018',
            type: 'line',
            showAllSymbol:false,
            itemStyle: {normal: {
					       color:'#419fff',
		          lineStyle: {
					       color: "#419fff",
						      width:3
		          },
		          areaStyle: { 
						 color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(65,159,255,0)'
						}, {
							offset: 1,
							color: 'rgba(65,159,255,0.19)'
						}]),
		            }
		        }
			},
            data: [ 3.2, 2.6, 3, 3, 5, 5.2, 5,]
        },
    ]
};