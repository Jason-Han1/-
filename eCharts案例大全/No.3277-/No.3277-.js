var option = {
    backgroundColor: '#04092a',
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
		bottom: '20%',
		top:'20%',
		padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        
		bottom:30,
		itemGap: 12,
		itemWidth: 10,
		itemHeight: 10,
      data: ['油泵装配','调节器装配', '计算机构装配', '计调合拢', '导向器装配', '总装','油泵装配时长','调节器装配时长', '计算机构装配时长', '计调合拢时长', '导向器装配时长', '总装时长'],
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
			data: ['5-16','5-23', '5-30', '6-6'],
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
			name: "次数",
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

		},
		{
            type: "value",
            name: "时长",
            splitLine: {show: false},
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#B4B4B4',
                }
            },
            axisTick:{
				show: false
			},
            axisLabel: {
                show: true,
                
                textStyle: {
                    color: "#ebf8ac"
                }
            }
        }
	],
    series : [
        
        {
            name:'油泵装配',
            yAxisIndex: 1, 
            type:'bar',
            data:[5, 5, 7, 5],
            barWidth: 6,
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
            name:'调节器装配',
            type:'bar',
            data:[2, 3, 4, 3],
            barWidth: 6,
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
                         color: '#c9afff'
                     }, {
                         offset: 1,
                         color: '#ab82ff'
                     }]),
                     barBorderRadius: 11,
                 }
            },
        },
         {
            name:'计算机构装配',
            type:'bar',
            data:[5, 3, 6,5],
            barWidth: 6,
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
            name:'计调合拢',
            type:'bar',
            data:[3, 4, 5,6],
            barWidth: 6,
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
            name:'导向器装配',
            type:'bar',
            data:[7, 6, 8, 7],
            barWidth: 6,
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
                         color: '#f7734e'
                     }, {
                         offset: 1,
                         color: '#e12945'
                     }]),
                     barBorderRadius: 11,
                 }
            },
        },
         {
            name:'总装',
            type:'bar',
            data:[7, 6, 7, 5],
            barWidth: 6,
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
        {
            name:'油泵装配时长',
            type:'line',
            data:[5, 5, 7, 5],
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
                         color: '#00feff'
                     }, {
                         offset: 1,
                         color: '#00feff'
                     }]),
                     barBorderRadius: 11,
                     shadowColor: 'rgba(137,77,255, 0.3)',
						shadowBlur: 4,
						shadowOffsetY: 5
                 }
            },
        },
        {
            name:'调节器装配时长',
            type:'line',
            data:[2, 3, 4, 3],
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
                         color: '#ab82ff'
                     }, {
                         offset: 1,
                         color: '#ab82ff'
                     }]),
                     barBorderRadius: 11,
                     shadowColor: 'rgba(137,77,255, 0.3)',
						shadowBlur: 4,
						shadowOffsetY: 5
                 }
            },
        },
        {
            name:'计算机构装配时长',
            type:'line',
            data:[5, 3, 6,5],
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
                         color: '#6851f1'
                     }, {
                         offset: 1,
                         color: '#6851f1'
                     }]),
                     barBorderRadius: 11,
                     shadowColor: 'rgba(137,77,255, 0.3)',
						shadowBlur: 4,
						shadowOffsetY: 5
                 }
            },
        },
        {
            name:'计调合拢时长',
            type:'line',
            data:[3, 4, 5,6],
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
                         color: '#8bc34a'
                     }, {
                         offset: 1,
                         color: '#8bc34a'
                     }]),
                     barBorderRadius: 11,
                     shadowColor: 'rgba(137,77,255, 0.3)',
						shadowBlur: 4,
						shadowOffsetY: 5
                 }
            },
        },
        {
            name:'导向器装配时长',
            type:'line',
            data:[7, 6, 8, 7],
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
                         color: '#f7734e'
                     }, {
                         offset: 1,
                         color: '#f7734e'
                     }]),
                     barBorderRadius: 11,
                     shadowColor: 'rgba(137,77,255, 0.3)',
						shadowBlur: 4,
						shadowOffsetY: 5
                 }
            },
        },
        {
            name:'总装时长',
            type:'line',
             data:[7, 6, 7, 5],
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
                         color: '#F6D06F'
                     }, {
                         offset: 1,
                         color: '#F6D06F'
                     }]),
                      lineStyle: {
                          type: 'dashed'
                      },
                     barBorderRadius: 11,
                     shadowColor: 'rgba(137,77,255, 0.3)',
						shadowBlur: 4,
						shadowOffsetY: 5
                 }
            },
        }
    ]
};