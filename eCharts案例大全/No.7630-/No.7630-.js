var option = {
    backgroundColor: '#030419',
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
		left: '10%',
		right: '10%',
		bottom: '10%',
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
        data:[{
            name:'工时效率',
            //icon:'image://../wwwroot/js/url2.png', //路径
        },
        {
            name:'人均效率',
        }],
        textStyle: {
			color: '#a8aab0',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        }
    },
	xAxis: [
	    
		{name: '连续一个月',
			type: 'category',
		//	boundaryGap: true,//坐标轴两边留白
			data: ['4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '4.10', '4.11','4.12', '4.13', '4.14', '4.15', '4.16', '4.17', '4.18', '4.19', '4.20','4.21','4.22', '4.23', '4.24', '4.25', '4.26', '4.27', '4.28', '4.29', '4.30'],
        axisLabel: { //坐标轴刻度标签的相关设置。
		//		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			//	margin:15,
				textStyle: {
					color: '#078ceb',
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
		{name: "万",
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
            name:'工时效率',
            type:'bar',
            data:[10,15, 30, 45, 55, 60, 62, 40,50,62, 60, 55, 45, 30, 55,40,55, 30, 45, 55, 60, 62, 70,60,62, 60, 55, 45, 30, 45, 40],
            barWidth: 8,
            barGap:0,
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
                        color: '#41E1D4'
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
            name:'人均效率',
            type:'bar',
            data:[28,25, 30, 35, 55, 62, 58,65,55, 60, 45, 60, 45,48,35, 25, 30, 35, 55, 42, 38,65,55, 60, 45, 42, 15, 12, 25],
            barWidth: 8,
            barGap:0,//柱间距离
           
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
                        color: '#ead221'
                    }, {
                        offset: 1,
                        color: '#ead221'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        }
    ]
};