
	var colorArr1 = ['#33b565', '#20cc98', '#20b9cf', '#2089cf', '#205bcf'];

	var option = {
		backgroundColor: 'transparent',
		color: colorArr1,
		tooltip: {
		},
		grid: {
			containLabel: true
		},
		singleAxis: [{
			type: 'category',
			width: 190,
			height: 10,
			left: 165,
			top: 255,
			axisLine: {
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					fontSize: 14,
				},
			},
			axisTick: {
				alignWithLabel: true,
			},
			splitLine: {
			},
			data: [{
				value: '20%',
				textStyle: {
					color: colorArr1[4]
				}
			}, {
				value: '30%',
				textStyle: {
					color: colorArr1[3]
				}
			}, {
				value: '15%',
				textStyle: {
					color: colorArr1[2]
				}
			}, {
				value: '15%',
				textStyle: {
					color: colorArr1[1]
				}
			}, {
				value: '30%',
				textStyle: {
					color: colorArr1[0]
				}
			}]
		}],
		series: [{
				singleAxisIndex: 0,
				coordinateSystem: 'singleAxis',
				type: 'scatter',
				data: [
					[0],
					[1],
					[2],
					[3],
					[4]
				]
			}

		]
	};