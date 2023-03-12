var option = {
    backgroundColor: '#010737',
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
			fontSize: 10,
		}
	},
	grid: {
		left: '5%',
		right: '5%',
		bottom: '14%',
		top:30,
		padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        
		bottom:20,
		itemGap: 12,
		itemWidth: 10,
		itemHeight: 10,
		 data: ['工位1','工位2','工位3','工位4'],
        textStyle: {
			color: '#a8aab0',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 10,            
        }
    },
	xAxis: [
		{
			type: 'category',
			boundaryGap: true,//坐标轴两边留白
		 data: ['2021-06-01','2021-06-02','2021-06-03','2021-06-04','2021-06-05','2021-06-06','2021-06-07'],
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					color: '#078ceb',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 10,
				}
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
					color: ['#fff'],
					opacity:0.06
				}
			}

		}
	],
    series : [
        {
            name:'工位1',
            type:'bar',
            data:[2, 1, 2, 3, 1, 2, 3],
            barWidth: 10,
            barGap:0.3,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#fff',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
            itemStyle: {//图形样式
               normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#248ff7'
                     }, {
                         offset: 1,
                         color: '#6851f1'
                     }]),
                     barBorderRadius: 11,
                 }
            },
        },
        {
            name:'工位2',
            type:'bar',
            data:[5, 5, 7, 8, 4, 5, 7],
            barWidth: 10,
            barGap:0.3,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#fff',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
            itemStyle: {//图形样式
               normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#32eef7'
                     }, {
                         offset: 1,
                         color: '#007bff'
                     }]),
                     barBorderRadius: 11,
                 }
            },
        },
 
        {
            name:'工位3',
            type:'bar',
            data:[4, 7, 9, 5, 7, 9, 5],
           barWidth: 10,
            barGap:0.3,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#fff',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
            itemStyle: {//图形样式
                normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#48D8BF'
                     }, {
                         offset: 1,
                         color: '#8bc34a'
                     }]),
                     barBorderRadius: 11,
                 }
            },
        },
        {
            name:'工位4',
            type:'bar',
            data:[2, 3, 4, 5, 3, 4, 5],
            barWidth: 10,
            barGap:0.3,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#fff',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
            itemStyle: {//图形样式
              normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#fccb05'
                     }, {
                         offset: 1,
                         color: '#f5804d'
                     }]),
                     barBorderRadius: 12,
                 }
            },
        },
        
    ]
};