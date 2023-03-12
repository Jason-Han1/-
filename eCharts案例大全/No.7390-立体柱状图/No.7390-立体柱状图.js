option = {
    backgroundColor:'#fff',
	tooltip: {
		trigger: 'axis',
		axisPointer: {            // 坐标轴指示器，坐标轴触发有效
			type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	legend: {
		right:'4%',
		itemWidth: 14,
		itemHeight: 14,
		itemGap:10,
		data: ['已完成', '正在进行', '逾期未完成']
	},
	color:['#4CBCB0','#FBBF45','#c70019'],
	grid: {
		left: '3%',
		right: '4%',
		top:'10%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: [
		{
			type: 'category',
			axisLine: {
				lineStyle: {
					color: '#DDE7F7'
				}
			},
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					color: '#2B334B',
					fontStyle: 'normal',
					fontSize: 14,
				}
			},
// 			xData['第一次', '第二次', '第三次']
			data: ['第一次', '第二次', '第三次']
		}
	],
	yAxis: [
		{
			type: 'value',
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					color: '#2B334B',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 14,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#DDE7F7'
				}
			},
			splitLine: {
				lineStyle: {
					color: "#DDE7F7",
				},
			},
		}
	],
	series: [
		{
			name: '已完成',
			type: 'bar',
			stack: '总量',
			barWidth:'40px',
			itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#4CBCB0'

                    }, {
                        offset: 0.5,
                        color: '#5CE5D7'

                    }, {
                        offset: 1,
                        color: '#4CBCB0'

                    }]),
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
			data: ['5', '7', '3']
		},
		{
			name: '正在进行',
			type: 'bar',
			stack: '总量',
			itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#FCD993'

                    }, {
                        offset: 0.5,
                        color: '#FFE6AE'

                    }, {
                        offset: 1,
                        color: '#FCD993'

                    }]),
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
			barWidth:'40px',
			data: ['3', '4', '7']
		},
		{
			name: '逾期未完成',
			type: 'bar',
			stack: '总量',
			barWidth:'40px',
			itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#C70019'

                    }, {
                        offset: 0.5,
                        color: '#EB354C'

                    }, {
                        offset: 1,
                        color: '#C70019'

                    }]),
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
			data: ['2', '3', '4']
		}
	]
};