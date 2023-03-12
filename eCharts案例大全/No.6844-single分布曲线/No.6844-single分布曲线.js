option = {
    title:{
      text:'时段01'  ,
      textAlign:'right'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        icon:'none',
        selectedMode:'single',
        inactiveColor:'#9A9B9C',
        textStyle:{
            color:'#1666FB',
            fontWeight:500,
        },
        selected: {
    '5%': false,
    '25%': true,
    '50%': false,
    '75%': false,
    '95%': false
}
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
		type: 'category',
	    boundaryGap: false,//坐标轴两边留白
		data: [ "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",],
		axisLabel: { //坐标轴刻度标签的相关设置。
			interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
		//	margin:15,
			textStyle: {
				color: '#1B253A',
				fontStyle: 'normal',
				fontFamily: '微软雅黑',
				fontSize: 12,
			},
// 			formatter:function(params) {
//                 var newParamsName = "";
//                 var paramsNameNumber = params.length;
//                 var provideNumber = 5;  //一行显示几个字
//                 var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
//                 if (paramsNameNumber > provideNumber) {
//                     for (var p = 0; p < rowNumber; p++) {
//                         var tempStr = "";
//                         var start = p * provideNumber;
//                         var end = start + provideNumber;
//                         if (p == rowNumber - 1) {
//                             tempStr = params.substring(start, paramsNameNumber);
//                         } else {
//                             tempStr = params.substring(start, end) + "\n";
//                         }
//                         newParamsName += tempStr;
//                     }

//                 } else {
//                     newParamsName = params;
//                 }
//                 return newParamsName
//             },
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
			show: true,
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
					fontSize: 12,
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#E5E9ED',
				// 	opacity:0.1
				}
			}

		}
	],
    series: [
        {
            name: '5%',
            type: 'line',
            symbolSize:0,
            itemStyle: {
		        normal: {
					color:'#3A84FF',
		            lineStyle: {
						color: "#3A84FF",
						width:1
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(58,132,255,0)'
						}, {
							offset: 1,
							color: 'rgba(58,132,255,0.35)'
						}]),
		            }
		        }
			},
            data: [ 1, 2, 3, 3, 5, 6, 5, 3, 6, 5, 5, 4]
        },
        {
            name: '25%',
            type: 'line',
            symbolSize:0,
            itemStyle: {
		        normal: {
		            color:'rgb(245, 179, 0)',
		            lineStyle: {
						color: "rgb(245, 179, 0)",
						width:1
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(255,255,255,1)'
						}, {
							offset: 1,
							color: 'rgb(253, 181, 24)'
						}]),
		            }
		        }
			},
            data: [9, 5,7,8,6,7,8,7,7,6,8,6]
        },
        {
            name: '50%',
            type: 'line',
            symbolSize:0,
            itemStyle: {
		        normal: {
		            color:'rgba(255,80,124,1)',
		            lineStyle: {
						color: "rgba(255,80,124,1)",
						width:1
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(255,255,255,1)'
						}, {
							offset: 1,
							color: 'rgba(255,80,124,1)'
						}]),
		            }
		        }
			},
            data: [9, 5,7,8,6,7,8,7,7,6,8,6]
        },
        {
            name: '75%',
            type: 'line',
            symbolSize:0,
            itemStyle: {
		        normal: {
		            color:'rgba(255,80,124,1)',
		            lineStyle: {
						color: "rgba(255,80,124,1)",
						width:1
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(255,80,124,0)'
						}, {
							offset: 1,
							color: 'rgba(255,80,124,0.35)'
						}]),
		            }
		        }
			},
            data: [9, 5,7,8,6,7,8,7,7,6,8,6]
        },
        {
            name: '95%',
            type: 'line',
            symbolSize:0,
            itemStyle: {
		        normal: {
		            color:'rgba(255,80,124,1)',
		            lineStyle: {
						color: "rgba(255,80,124,1)",
						width:1
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(255,80,124,0)'
						}, {
							offset: 1,
							color: 'rgba(255,80,124,0.35)'
						}]),
		            }
		        }
			},
            data: [9, 5,7,8,6,7,8,7,7,6,8,6]
        }
    ]
};
