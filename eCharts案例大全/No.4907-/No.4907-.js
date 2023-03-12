var option = {
    backgroundColor: '#010220',
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
		top:'10%',
	//	padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        x: 'center',
		top:'30%',
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
    
        textStyle: {
			color: '#fff',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        }
    },
	xAxis: [
		{
			type: 'category',
		data: ['拆解', '故检', '修理', '成套', '仓库', '组件装配', '总装装配'],
   axisLabel: {
    rotate: 45,
 				textStyle: {
 					color: '#fff',
 					fontStyle: 'normal',
 					fontFamily: '微软雅黑',
 					fontSize: 12,
 				},
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
		{//name: "设备",
			type: 'value',
			splitNumber: 5,
			axisLabel: {
				textStyle: {
					color: '#ddd',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisLine: {
                lineStyle: {
                    color: '#ddd',
                }
            },
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#fff'],
					opacity:0.1
				}
			}

		}
	],
    series : [
        {
            type:'bar',
            data:[10,15, 30, 45, 55, 60, 62, 40,50,62, 60, 55, 45, 30, 55,40,55, 30, 45, 55, 60, 62, 70,60,62, 60, 55, 45, 30],
            barWidth: 12,
            barGap:1,
           itemStyle: {
                normal: {
                    label: {
                        position: 'top',
                        show: true,
                        color: "#fff",
                        fontSize: 12
                    },
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#81ffe2'
                    }, {
                        offset: 1,
                        color: '#41E1D4'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },
        {
            type:'bar',
            data:[28,25, 30, 35, 55, 62, 58,65,55, 60, 45, 60, 45,48,35, 25, 30, 35, 55, 42, 38,65,55, 60, 45, 42, 15, 12, 25],
            barWidth: 12,
            barGap:0.3,//柱间距离
           
            itemStyle: {
                normal: {
                    label: {
                        position: 'top',
                        show: true,
                        color: "#fff",
                        fontSize: 12
                    },
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ffea52'
                    }, {
                        offset: 1,
                        color: '#eab622'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },
       
    ]
};