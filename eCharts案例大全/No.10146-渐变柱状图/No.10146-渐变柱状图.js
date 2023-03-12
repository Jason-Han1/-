option ={
		grid: {
			left: '0',
			right: '0',
			top: '24',
			bottom: '24'
		},
		xAxis: {
			data: ['累计值', '目标值', '去年同期'],
			axisLabel: {
				textStyle: {
					color: '#333'
				}
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			z: 10
		},
		yAxis: {
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#999'
				}
			}
		},
		series: [{
			type: 'bar',
			barWidth: '40%',
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			itemStyle: {
				barBorderRadius: [5, 5, 0, 0],
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1,
					[{
							offset: 0,
							color: '#5396fc'
						},
						{
							offset: 0.5,
							color: '#64aafd'
						},
						{
							offset: 1,
							color: '#78bffd'
						}
					]
				)
			},
			data: [20,30,40]
		}]
	};
myChart.setOption(option, true);