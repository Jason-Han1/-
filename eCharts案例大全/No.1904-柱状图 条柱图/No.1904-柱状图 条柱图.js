 option = {
        backgroundColor: "rgba(2, 12, 44, 1)", //背景色
		color: ['#00B1B8', '#4A90E2', '#D9BE70'],
		grid: {
			top: '8%',
			left: '1%',
			right: '1%',
			bottom: '8%',
			containLabel: true,
		},
		dataset: {
			source: [
				['2020-2-17', 43.3, 85.8, 93.7],
				['2020-2-16', 43.3, 85.8, 93.7],
				['2020-2-15', 83.1, 73.4, 55.1],
				['2020-2-14', 86.4, 65.2, 82.5],
				['2020-2-13', 72.4, 53.9, 39.1]
			]
		},
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			axisLine: {
				show: false,
			},
			axisLabel: {
				textStyle: {
					color: '#959FA9',
					fontSize: 14
				},
			},
			axisTick: {
				show: false,
			},
		}],
		yAxis: {
			type: 'value',
			axisTick: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					// type: 'dashed',
					color: 'rgba(39, 41, 58, 0.3)',
					width: 1
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: 'rgb(2,185,208)',
				},
			},
			axisLabel: {
				textStyle: {
					color: '#959FA9',
					fontSize: 14
				},
			},
		},

		series: [
			{ type: 'bar', barGap: 0.2, barWidth: 10 },
			{ type: 'bar', barWidth: 10 },
			{ type: 'bar', barWidth: 10 },
		]
	};
	