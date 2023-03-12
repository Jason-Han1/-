var option = {
    backgroundColor: '#244d9e',
	tooltip: { //提示框组件
		trigger: 'axis',
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
		left: '4%',
		right: '4%',
		bottom: '4%',
		top:'40%',
	//	padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        x: 'center',
		top:'30%',
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
       data: ['正常', '停止','异常', '故障'],
        textStyle: {
			color: '#fff',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        }
    },
	xAxis: [
	    
		{name: '时段',
			type: 'category',
		//	boundaryGap: true,//坐标轴两边留白
			data: ['2020-08-01', '2020-08-02', '2020-08-03', '2020-08-04', '2020-08-05', '2020-08-06', '2020-08-07', '2020-08-08', '2020-08-09', '2020-08-10', '2020-08-11','2020-08-12'],
        axisLabel: { //坐标轴刻度标签的相关设置。
		//		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			//	margin:15,
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				},
				rotate:50,
			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#fff',
					opacity:0.2
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
	],
	yAxis: [
		{name: "设备",
			type: 'value',
			splitNumber: 5,
			axisLabel: {
				textStyle: {
					color: '#bbb',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisLine: {
                lineStyle: {
                    color: '#bbb',
                }
            },
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#aaa'],
					opacity:0.3
				}
			}

		}
	],
    series : [
        {
            name:'正常',
            type:'line',
            data:[10,15, 30, 45, 55, 60, 62, 40,50,62, 60, 55, 45, 30, 55,40,55, 30, 45, 55, 60, 62, 70,60,62, 60, 55, 45, 30, 45, 40],
            barWidth: 12,
            smooth: true,
            barGap:0.5,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    label: {
                        position: 'top',
                        show: true,
                        color: "#ccc",
                        fontSize: 12
                    },
                    lineStyle: {
                            width: 3,
                            // type: 'dotted',
                        },
					barBorderRadius: 20,
					color: '#41E1D4',
                },
            },
          
        },
        {
            name:'停止',
            type:'line',
            data:[28,25, 30, 35, 55, 62, 58,65,55, 60, 45, 60, 45,48,35, 25, 30, 35, 55, 42, 38,65,55, 60, 45, 42, 15, 12, 25],
            barWidth: 12,
            smooth: true,
            barGap:0.5,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    label: {
                        position: 'top',
                        show: true,
                        color: "#ccc",
                        fontSize: 12
                    },
                    lineStyle: {
                            width: 3,
                            // type: 'dotted',
                        },
					barBorderRadius: 20,
					color: '#ead221',
                },
            },
            
        },
        {
            name:'异常',
            type:'line',
            data:[ 42, 38,65,55, 60, 45, 42, 15, 12,28,25, 30, 35, 55, 62, 58,65,55, 60, 45, 60, 45,48,35, 25, 30, 35, 55, 25],
            barWidth: 12,
            smooth: true,
            barGap:0.5,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    label: {
                        position: 'top',
                        show: true,
                        color: "#ccc",
                        fontSize: 12
                    },
                    lineStyle: {
                            width: 3,
                            // type: 'dotted',
                        },
					barBorderRadius: 20,
					color: '#5768EF',
                },
            },
            
        },
        {
            name:'故障',
            type:'line',
            data:[55, 60, 45, 60, 45,48,35, 25, 30, 35, 55,28,25, 30, 35, 55, 62, 58,65,, 42, 38,65,55, 60, 45, 42, 15, 12, 25],
            barWidth: 4,
            smooth: true,
            barGap:0.5,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    label: {
                        position: 'top',
                        show: true,
                        color: "#ccc",
                        fontSize: 12
                    },
                    lineStyle: {
                            width: 3,
                            // type: 'dotted',
                        },
					barBorderRadius: 20,
					color: '#69CBF2',
                },
            },
            
        }
    ]
};