option = {
        backgroundColor: '#000',
		grid: {
			top: '12%',
			right: '5%',
			left: '5%',
			bottom: '12%'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			textStyle: {
				fontSize: 40,
			},
			formatter: function(params) {
				console.log(params)
			}

		},
		xAxis: [{
			type: 'category',
			color: '#fff',
			data: ['2017', '2018', '2019', '2020'],
			axisLabel: {
				color: '#fff',
				textStyle: {
					fontSize: 40
				},
			},
			axisLine: {
				lineStyle: {
					color: '#fff',
				}
			},
			axisTick: {
				show: false
			},
		}],
		yAxis: [{
			axisLabel: {
				formatter: '{value}',
				color: '#fff',
				textStyle: {
					fontSize: 40
				},
			},
			axisLine: {
				lineStyle: {
					color: '#fff',
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false,
			}
		}],
		series: [{
			type: 'line',
			smooth: true,
			symbolSize: 10,
			data: [6, 12, 18, 21],
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#87A9D2' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#87A9D2' // 100% 处的颜色
					}], false),
					barBorderRadius: [30, 30, 0, 0],
				}
			},
			lineStyle: {
				normal: {
					width: 5
				}
			},
			label: {
				normal: {
					show: true,
					fontSize: 45,
					fontWeight: 'bold',
					color: '#87A9D2',
					position: 'top',
				}
			}
		}]
	}