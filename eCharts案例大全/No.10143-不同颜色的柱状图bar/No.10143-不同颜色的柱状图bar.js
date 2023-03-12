option ={
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			confine: true
		},
		grid: {
			left: 100,
			right: 400,
			bottom: 400,
			top: 100,
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			},
			data: ['2010', '2011', '2012', '2013'],
			axisTick: {
				alignWithLabel: true,
				show: false
			},
			axisLabel: {
				fontSize: 12,
				color: "#000"
			}
		}],
		yAxis: [{
			type: 'value',
			splitNumber: 4,
			axisLine: {
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#f6f8f7'
				}
			},
			axisTick: {
				alignWithLabel: true,
				show: false
			},
			axisLabel: {
				fontSize: 11,
				color: "#ababab"
			}
		}],
		series: [{
			type: 'bar',
			barGap: '-100%',
			barWidth: 20,
			itemStyle: {
				barBorderRadius: [5, 5, 0, 0]
			},
			z: 10,
			data: [{
				value: 20,
				itemStyle: {
					color: '#f00'
				}
			}, {
				value: 20,
				itemStyle: {
					color: '#f0f'
				}
			}, {
				value: 20,
				itemStyle: {
					color: '#f3a'
				}
			}, {
				value: 20,
				itemStyle: {
					color: '#fb4'
				}
			}]
		}]
	}