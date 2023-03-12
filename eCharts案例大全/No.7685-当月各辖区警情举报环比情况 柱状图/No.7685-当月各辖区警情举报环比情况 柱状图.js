var option = {
    backgroundColor: '#fff',
    title: {
        show: true,
        text: '当月各辖区警情举报环比情况'
    },
	tooltip: { //提示框组件
		trigger: 'axis',
		formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
		axisPointer: {
			type: 'shadow',
			label: {
				backgroundColor: '#6a7985'
			}
		},
		textStyle: {
			color: '#fff',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,
		}
	},
	grid: {
		left: '10',
		right: '10',
		bottom: '10',
		top:'50',
	//	padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        right:'50',
		top:'10',
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
        data:[
            {name:'去年'},
            {name:'今年'}
        ],
        textStyle: {
			color: '#a8aab0',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        }
    },
	xAxis: [
		{
			type: 'category',
		//	boundaryGap: true,//坐标轴两边留白
			data: ['南宁海关缉私分局', '南宁海关缉私分局', '南宁海关缉私分局','南宁海关缉私分局','南宁海关缉私分局','南宁海关缉私分局','南宁海关缉私分局','南宁海关缉私分局','南宁海关缉私分局', '南宁海关缉私分局', '南宁海关缉私分局','南宁海关缉私分局'],
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			//	margin:15,
				textStyle: {
					color: '#000',
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
					color:'#687284',
					opacity:0.2
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
				textStyle: {
					color: '#000',
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
    series : [
        {
            name:'去年',
            type:'bar',
            data:[10,15, 30, 45, 55, 60, 62, 80,80,62, 60, 55, 45, 30, 15, 10],
            barWidth: 10,
            barGap:0,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 10,   
            //       },
            //     },
            // },
          itemStyle: {
                normal: {
                    show: true,
                    color: '#DAE2EE', //柱子颜色
                    barBorderRadius: 0, //柱子圆角
                    borderWidth: 0,
                }
            },
        },
        {
            name:'今年',
            type:'bar',
            data:[8,5, 25, 30, 35, 55, 62, 78,65,55, 60, 45, 42, 15, 12, 5],
            barWidth: 10,
            barGap:0,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 10,   
            //       },
            //     },
            // },
             itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#336FD9'
                        },
                        {
                            offset: 1,
                            color: '#B073FD'
                        }
                        ]
                    ),
                    barBorderRadius: 0, //柱子圆角
                    borderWidth: 0,
                }
            },
        }
    ]
};