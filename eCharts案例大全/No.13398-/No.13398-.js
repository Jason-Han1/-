var option = {
    backgroundColor: '#091C3D',
	tooltip: { //提示框组件
		trigger: 'axis',
		formatter: '{b}<br />{a0}: {c0}',
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
		left: '1%',
		right: '50%',
		bottom: '60%',
		top:30,
	//	padding:'0 0 10 0',
		containLabel: true,
	},

	xAxis: [
		{
			type: 'category',
		//	boundaryGap: true,//坐标轴两边留白
			data: ['2013', '2014', '2015','2016','2017','2018'],
			axisLabel: { //坐标轴刻度标签的相关设置。
		//		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			//	margin:15,
				textStyle: {
					color: '#078ceb',
					fontStyle: 'normal',
					fontSize: 12,
					color: '#fff'
				},

			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
			    show: false,
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
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
			    show: false,
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
				show: false,
				lineStyle: {
					color: ['#fff'],
					opacity:0.06
				}
			}

		}
	],
    series : [
        {
            name:'总数量',
            type:'bar',
            data:[45,50, 70, 60, 80, 120],
            barWidth: 10,
            barGap:0,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: false,
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
          itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1a98f8'
                    }, {
                        offset: 1,
                        color: '#7049f0'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },
        {
            name:'总数量',
            type:'line',
            data:[45,50, 70, 60, 80, 120],
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,230,48,1)",
                    "barBorderRadius": 0
                }
            }
        }
    ]
};