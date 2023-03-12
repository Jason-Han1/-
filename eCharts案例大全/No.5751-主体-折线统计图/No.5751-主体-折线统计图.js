var xData = ["2018-12", "2019-01", "2019-02", "2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08",
		"2019-09", "2019-10", "2019-11"
	];
	var yData1 = [120, 150, 120, 460, 220, 240, 150, 50, 440, 180, 240, 180];
	var yData2 = [130, 170, 100, 380, 170, 280, 220, 120, 380, 109, 140, 190];
	option = {
		title: {
			top: '0',
			left: 'left',
			text: '',
			textStyle: {
				align: 'center',
				color: '#00d6fd',
				fontSize: 16,
			}

		},
		//backgroundColor: '#FFFFFF',
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			}
		},
		legend: {
			x: 'center',
			y: '12px',
			textStyle: {
				color: '#00d6fd',
				fontSize: 13,
			},
			icon: 'circle',
			data: ['采购', '消费']
		},
		grid: [{
			left: '6%',
			bottom: '8%',
			top: '25%',
			right: '6%',
			containLabel: true
		}],
		xAxis: [{
			type: 'category',
			data: xData,
			name: ' ',
			nameTextStyle: {
				color: '#00d6fd'
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#00d6fd', //更改坐标轴文字颜色
					fontSize: 12,
				},
				//interval:0,
				//rotate:30
			},
			axisLine: {
				lineStyle: {
					color: '#00d6fd' //更改坐标轴颜色
				}
			},
			axisTick: {
				show: false,
			}
		}],
		yAxis: [{
			type: 'value',
			name: '数量',
			nameTextStyle: {
				color: '#00d6fd'
			},
			position: 'left',
			//设置坐标轴字体颜色和宽度
			axisLine: {
				lineStyle: {
					color: '#00d6fd',
					width: 1
				}
			},
			//设置网格线颜色
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#0b244c'],
					width: 1,
					type: 'solid'
				}
			},
			axisLabel: {
				color: '#00d6fd',
				fontSize: 12,
			}
		}, ],
		series: [{
				name: '采购',
				type: 'line',
				yAxisIndex: 0,
				symbolSize: 0,
				itemStyle: {
					normal: {
						color: '#00d98b',
					}
				},
				data: yData1
			},
			{
				name: '消费',
				type: 'line',
				yAxisIndex: 0,
				symbolSize: 0,
				itemStyle: {
					normal: {
						color: '#e040fb',
					}
				},
				data: yData2
			}

		]
	};