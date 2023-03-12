var option = {
     title:{
         text:'',
         left:'center',
         	textStyle: {
			color: '#000',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 16,
		}
     },
    backgroundColor: '#rgab（0,0,0,0）',
	tooltip: { //提示框组件
		trigger: 'axis',
	//	formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
		axisPointer: {
			type: 'shadow',
			label: {
				backgroundColor: '#000'
			}
		},
	
	},
	grid: {
		left: '1%',
		right: '4%',
		bottom: '6%',
		top:30,
		padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        right:10,
		top:0,
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
        data:[{
            name:'管理是站'
        },
        {
            name:'管理二站',
        },
        {
            name:'管理三站',
        },
        {
            name:'管理四站',
        },
        {
            name:'管理五站',
        },
        {
            name:'管理六站',
        },
        {
            name:'管理七站',
        },
        {
            name:'总公司',
        }
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
			boundaryGap: true,//坐标轴两边留白
			data: ['9-23', '9-24', '9-25', '9-26', '9-27', '9-28'],
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					color: '#000',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
					
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
					color: '#000',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisLine:{
				show: true
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
	dataZoom:[
	    {   show:true,
	        height:30,
	        xAxisIndex: [0],
	        bottom:0,
	        type: 'slider',
	        start: 1,
	        end: 35,
	        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
	        handleSize:'110%',
	        handleStyle: {
	            color:'#9B4E4E'
	        }
	     },
	     {
	         show:true,
	         type: 'inside',
	         height:15,
	         start: 1,
	         end:35
	     }
	    ],
    series : [
        {
            name:'管理是站',
            type:'bar',
            data:[382547, 380466, 368603, 368400, 347013, 353115],
            barWidth: 15,
            barGap:0,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#000',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
          
        },
        {
            name:'管理二站',
            type:'bar',
            data:[53854, 53525, 48137, 48684,46878,46861],
            barWidth: 15,
            barGap:0.2,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#000',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
            
        },
        {
            name:'管理三站',
            type:'bar',
            data:[101779, 94412, 94700, 97677, 91106, 93961],
            barWidth: 15,
            barGap:0.2,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#000',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
            
        },
         {
            name:'管理四站',
            type:'bar',
            data:[90146, 93537, 94095, 91395, 82524, 88125],
            barWidth: 15,
            barGap:0.2,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#000',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
          
        },
          {
            name:'管理五站',
            type:'bar',
            data:[45893, 46793, 45793, 47497, 44393, 45245],
            barWidth: 15,
            barGap:0.2,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#000',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },

        },
          {
            name:'管理六站',
            type:'bar',
            data:[26457, 29396, 28107, 27464, 25409, 26327],
            barWidth: 15,
            barGap:0.2,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#000',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },

        },
          {
            name:'管理七站',
            type:'bar',
            data:[31910, 32201, 30972, 26735, 24704,25989],
            barWidth: 15,
            barGap:0.2,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#000',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
         
        }
        
    ]
};