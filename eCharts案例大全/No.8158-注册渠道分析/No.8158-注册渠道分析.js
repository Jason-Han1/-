var option = {
    backgroundColor: '#010347',
    title : {
        text: '注册渠道分析',
        subtext: 'Show Data',
        left: 'center',
        top: 'top',
        textStyle: {
            color: '#fff'
        }
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
		left: '10%',
		right: '10%',
		bottom: '10%',
		top:'20%',
	//	padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        left:'10%',
		top:'15%',
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
        data:[{
            name:'PC端',
            //icon:'image://../wwwroot/js/url2.png', //路径
        },
        {
            name:'MOBILE端',
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
		//	boundaryGap: true,//坐标轴两边留白
			data: ['22:18', '22:23', '22:25','22:28','22:30','22:33','22:35','22:40','22:18', '22:23', '22:25','22:28','22:30','22:33','22:35','22:40'],
			axisLabel: { //坐标轴刻度标签的相关设置。
		//		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			//	margin:15,
				textStyle: {
					color: '#a8aab0',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				},
				rotate:50,//坐标值倾斜
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
		{
			type: 'value',
			splitNumber: 6,
			axisLabel: {
				textStyle: {
					color: '#a8aab0',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisLine:{
				// show: false，
				lineStyle:{
					color:'#fff',
					opacity:0.2
				}
			},
			axisTick:{
				lineStyle:{
					color:'#fff',
					opacity:0.2
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#fff'],
					opacity:0.06
				}
			}

		}
	],
    series : [
        {
            name:'PC端',
            type:'bar',
            data:[30,20, 30, 45, 55, 60, 62, 80,80,62, 60, 55, 45, 30, 15, 10],
            barWidth: 10,
            // barGap:0,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
          itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#61A5E8'
                    }, {
                        offset: 1,
                        color: '#61A5E8'
                    }]),
                    // barBorderRadius: 50,//柱圆弧
                    // borderWidth: 0,
                }
            },
        },
        {
            name:'MOBILE端',
            type:'bar',
            data:[45,50, 25, 30, 35, 55, 62, 78,65,55, 60, 45, 42, 15, 12, 5],
            barWidth: 10,
            // barGap:0,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
             itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#7ECF51'
                    }, {
                        offset: 1,
                        color: '#7ECF51'
                    }]),
                    // barBorderRadius: 50,
                    // borderWidth: 0,
                }
            },
        }
    ]
};