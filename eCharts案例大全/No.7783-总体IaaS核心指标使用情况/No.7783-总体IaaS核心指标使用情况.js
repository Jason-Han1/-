var option = {
    title: {
        text: "总体IaaS核心指标使用情况(%)",
        textStyle: {
            fontSize: 24
        },
        left: '5%'
    },
    backgroundColor: '',
	grid: {
		left: '1%',
		right: '4%',
		bottom: '6%',
		top:'10%',
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
            name:'均值',
        },
        {
            name:'峰值',
        }],
        textStyle: {
			color: '#a8aab0'          
        }
    },
	xAxis: [
		{
			type: 'category',
			boundaryGap: true,//坐标轴两边留白
			data: ['cpu利用率', '内存利用率', '磁盘利用率'],
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					color: '#555'
				}
			},
			axisTick:{//坐标轴刻度相关设置。
				show: true,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#555',
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
			    formatter: '{value} %',
				textStyle: {
					color: '#555',
				}
			},
			axisLine:{
				show: true
			},
			axisTick:{
				show: true
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#555'],
					opacity:0.06
				}
			}

		}
	],
    series : [
        {
            name:'均值',
            type:'bar',
            data:[49, 73, 72],
            barWidth: 20,
            barGap:1,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#555' 
                   },
                },
            },
            itemStyle: {//图形样式
                normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: '#28bf7e',
                },
            },
        },
        {
            name:'峰值',
            type:'bar',
            data:[90, 88, 91],
            barWidth: 20,
            barGap:1,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#555' 
                   },
                },
            },
            itemStyle: {//图形样式
                normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: '#ed7c2f',
                },
            },
        }
    ]
};