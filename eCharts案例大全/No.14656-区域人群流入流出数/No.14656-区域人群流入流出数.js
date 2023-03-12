option = {
    baseOption: {
        timeline: {
            show: true,
            type: 'slider',
            axisType: 'category',
            bottom: '10',
            currentIndex: 0,//0 时表示当前选中项为 timeline.data[0]（即使用 options[0]
            autoPlay: true,//是否自动播放
            loop: true,
            realtime: true,//拖动圆点的时候，是否实时更新视图。
            controlPosition: 'left',
            label: {
                normal: {
                    color: '#2998ff',
                },
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#2998ff',
                    borderWidth: 2,
                }
            },
            checkpointStyle: {//『当前项』（checkpoint）的图形样式
                color: 'rgb(215, 0, 0)',
            },
            lineStyle: {
                show: true,//false 不显示轴线
                color: '#2998ff',
            },
            controlStyle: {//控制按钮的样式
                show: true,
                showPrevBtn: false,
                showNextBtn: false,
                itemGap: 50,
                itemSize: 36,
                normal: {
                    color: 'rgb(215, 0, 0)',
                    borderColor:'rgb(215, 0, 0)',
                },
                emphasis: {
                    color: 'rgb(215, 0, 0)',
                    borderColor:'rgb(215, 0, 0)',
                },
            },
            data: ['区域人数','流入人数','流出人数'],
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
            left: 10,
            right: 35,
            bottom: 70,
            top:60,
            containLabel: true,
        },
		legend: {//图例组件，颜色和名字
			left: 0,
			top:0,
			itemGap: 16,
			itemWidth: 20,
			itemHeight: 14,
			data:[{
				name:'2017-08-05 至 2017-08-05',
				icon:'rect', 
			},
			{
				name:'2017-08-06 至 2017-08-06',
				icon:'rect', 
			}],
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
				boundaryGap: false,//坐标轴两边留白
                
                axisLabel: { //坐标轴刻度标签的相关设置。
                    interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    margin:15,
                    textStyle: {
                        color: '#078ceb',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
				splitLine: {
					show:true,
					lineStyle: {
						color:'#ccc',
					},
				},
                axisTick:{//坐标轴刻度相关设置。
                    show: false,
                },
                axisLine:{//坐标轴轴线相关设置
                    lineStyle:{
                        color:'#999',
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitNumber: 6,
                axisLabel: {
                    textStyle: {
                        color: '#333',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#999',
                    }
                },
                axisTick:{
                    show: false
                },
                splitLine: {
					show: false,
					lineStyle: {
						color:'#ccc',
					},
                }

            }
        ],
        series: [
			{
				name: '2017-08-05 至 2017-08-05',
				type: 'line',
				symbol: 'circle',
				symbolSize: 6, //空心标记的大小
				smooth: true, //是否平滑曲线显示
				smoothMonotone: 'x',//指明是在 x 轴或者 y 轴上保持单调性
				label: {//图形上的文本标签
					normal: {
						show: true,
						position: 'top',
						textStyle: {
							  color: '#018ada',
							  fontStyle: 'normal',
							  fontFamily: '微软雅黑',
							  fontSize: 12,
                          }
					},
				},
				lineStyle: {//线条样式
					normal: {
						width: 2,
						color: '#4ac7f5',
						opacity:1,
					}
				},
				itemStyle: {//折线拐点标志的样式。
					normal: {
						color: '#4ac7f5',
						borderColor: '#4ac7f5',
						borderWidth: 2,
					}
				}
			},{
				name: '2017-08-06 至 2017-08-06',
				type: 'line',
				symbol: 'circle',
				symbolSize: 6, //空心标记的大小
				smooth: true, //是否平滑曲线显示
				smoothMonotone: 'x',//指明是在 x 轴或者 y 轴上保持单调性
				label: {//图形上的文本标签
					normal: {
						show: true,
						position: 'top',
						textStyle: {
							  color: '#f6a436',
							  fontStyle: 'normal',
							  fontFamily: '微软雅黑',
							  fontSize: 12,
                          }
					},
				},
				areaStyle: {//区域填充样式。
					normal: {
						opacity:0,
						color: '#f6a436'
					}
				},
				lineStyle: {//线条样式
					normal: {
						width: 2,
						color: '#f6a436'
					}
				},
				itemStyle: {//折线拐点标志的样式。
					normal: {
						color: '#f6a436',
						borderColor: '#f6a436',
						borderWidth: 2,
					}
				}
			}
        ]
    },
    options: [
        {
            xAxis: [{
                data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00','09:00', '10:00', '11:00'],
                
            }],
            series: [
                {data: [156, 235,349, 546, 452, 370, 542, 638, 774, 702,609,456]},
                {data: [352,286, 315,429, 566, 486, 399, 562, 658, 794, 702,629]}
            ]
        },
        {
            xAxis: [{
                data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00','09:00', '10:00', '11:00'],
            }],
            series : [
                {data: [546, 452, 370, 542, 638, 774, 702,609,456,420,398,326]},
                {data: [429, 566, 486, 399, 562, 658, 794, 702,629,610,568,425]}

            ]
        },
        {
            xAxis: [{
                data: [ '03:00', '04:00', '05:00', '06:00', '07:00', '08:00','09:00', '10:00', '11:00'],
            }],
            series : [
                {data: [156, 235,349, 546, 452, 370, 542, 638, 774, 702,609,456]},
                {data: [352,286, 315,429, 566, 486, 399, 562, 658, 794, 702,629]}

            ]
        }
    ]
};