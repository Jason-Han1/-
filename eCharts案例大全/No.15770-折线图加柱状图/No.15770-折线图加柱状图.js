	var Months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		textColor = '#999',
		lineColor = '#ddd',
		dataInvestCount = [180, 150, 300, 650, 500, 580, 590, 581, 588, 700, 1100, 1190],
		dataInvestAmount = [4000000, 3000000, 5000000, 14000000, 9000000, 13000000, 16000000, 15000000, 19000000, 29000000, 41000000, 43000000];

	// 指定图表的配置项和数据
	// 第3区域图表
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		backgroundColor: 'transparent',
		legend: {
			left: '3%',
			data: ['投资额', '投资笔数']
		},
		grid: {
			left: '4%',
			right: '8%'
		},
		xAxis: {
			type: 'category',
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			axisLine: {
				lineStyle: {
					color: lineColor
				}
			},
			axisLabel: {
				textStyle: {
					color: textColor
				},
				margin: 30
			},
			data: Months
		},
		yAxis: [{
			type: 'value',
			min: 0,
			max: 70000000,
			position: 'right',
			interval: 10000000,
			axisLine: {
				lineStyle: {
					color: lineColor
				}
			},
			axisLabel: {
				textStyle: {
					color: textColor
				},
				formatter: '{value}.00'
			},
			splitLine: {
				lineStyle: {
					type: 'dotted'
				}
			}
		}, {
			type: 'value',
			min: 0,
			max: 1400,
			position: 'left',
			interval: 200,
			axisLine: {
				lineStyle: {
					color: lineColor
				}
			},
			axisLabel: {
				textStyle: {
					color: textColor
				},
				formatter: function(value) {
					return value / 1000 + 'K'
				}
			},
			splitLine: {
				lineStyle: {
					type: 'dotted'
				}
			}
		}],
		series: [{
			name: '投资笔数',
			type: 'line',
			yAxisIndex: 1,
			symbolSize: 9,
			hoverAnimation: false,
			itemStyle: {
				normal: {
					color: '#abbeed'
				},
				emphasis: {
					color: '#de45a0'
				}
			},
			data: dataInvestCount
		}, {
			name: '投资额',
			type: 'bar',
			itemStyle: {
				normal: {
					color: '#dfdfdf'
				},
				emphasis: {
					color: '#66d593'
				}
			},
			data: dataInvestAmount
		}]
	};