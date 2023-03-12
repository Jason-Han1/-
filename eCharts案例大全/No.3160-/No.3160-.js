option = {
    backgroundColor: '#020735',
    tooltip: {
        "trigger": "axis"
    },
    color: ['#43e09d', '#4777f5', '#44aff0', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 100,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        bottom: "14%",
        textStyle: {
      			color: '#a8aab0',
      			fontStyle: 'normal',
      			fontFamily: '微软雅黑',
      			fontSize: 10,            
        },
        data: ['大修','检修'],
        itemGap: 10,
        itemWidth: 15,
        itemHeight: 12
    },
   
    xAxis: [{
        name: "日期",
        type: "category",
        
        axisTick: {
            alignWithLabel: true
        },
        axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#fff',
					opacity:0.2
				}
			},
        axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				rotate: 45,
				margin:15,
				textStyle: {
					color: '#545a8a',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 10,
				}
			},
      data: ['5.8', '5.9', '5.10', '5.11','5.12', '5.13', '5.14', '5.15', '5.16', '5.17', '5.18', '5.19', '5.20', '5.21','5.22', '5.23', '5.24', '5.25', '5.26', '5.27', '5.28', '5.29', '5.30', '5.31', '6.1', '6.2', '6.3', '6.4', '6.5', '6.6'],
        
    }],
    yAxis: [{
        type: "value",
        name: "数量",
        axisLine:{
					lineStyle:{
						color:'#545a8a'
					}
				},
			axisTick:{
				show: false
			},
			splitLine:{
					show:true,
					lineStyle:{
						color:'#545a8a'
					}
				}
    }],
    series: [{
        data: [5, 2, 5, 7, 5, 6, 2, 5, 7, 5, 6, 2, 5, 7, 5, 6, 2, 5, 7, 5, 6, 2, 5, 7, 5, 6, 2, 5, 7, 5, 6],
        name: "大修",
        stack: "one",
        type: "bar",
        barWidth: 10,
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.1)', //浅色阴影
                shadowOffsetX: -5,
                shadowOffsetY: 5,
            },
        },
         label: {//图形上的文本标签
                normal: {
                  show: true,
                  textStyle: {
                      color: '#fff',
                      fontStyle: 'normal',
                      fontFamily: '微软雅黑',
                      fontSize: 10,   
                  },
                },
            },
    }, {
        data: [5, 2, 5, 7, 5, 6, 2, 5, 7, 5, 6, 2, 5, 7, 5, 6, 2, 5, 7, 5, 6, 2, 5, 7, 5, 6, 2, 5, 7, 5, 6],
        name: "检修",
        stack: "one",
        type: "bar",
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.1)', //浅色阴影
                shadowOffsetX: -5,
                shadowOffsetY: 5,
            },
        },
        label: {//图形上的文本标签
                normal: {
                  show: true,
                  textStyle: {
                      color: '#fff',
                      fontStyle: 'normal',
                      fontFamily: '微软雅黑',
                      fontSize: 10,   
                  },
                },
            },
    }]
}