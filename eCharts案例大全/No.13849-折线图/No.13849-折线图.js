option = {
		backgroundColor: '#FFF',
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			icon: 'rect',
			itemWidth: 10,
			itemHeight: 6,
			itemGap: 13,
			data: ['消耗脂肪'],
			right: '4%',
			textStyle: {
				fontSize: 12,
				color: '#999999'
			}
		},
		grid: {
			left: '2%',
			right: '4%',
			top: '300',
			bottom: '200',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			axisLine: {
				lineStyle: {
					color: '#EEEEEE'
				}
			},
			axisLabel: {
				color: '#666',
				fontSize: 12
			},
			boundaryGap: false,
			data: ['1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15','16','17','18','19','20']
		},
		yAxis: {
			name: '单位:ms',
			nameTextStyle: {
				color: '#777',
				fontSize: 12
			},
			axisLine: {
				lineStyle: {
					color: '#EEEEEE'
				}
			},
			type: 'value',
			axisLabel: {
				show: true,
				interval: '0',
				color: '#666',
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#eeeeee',
					type: 'solid'
				},
			},
		},
		series: [{
				name: '接口响应时间',
				color: ['red'],
				type: 'line',
				smooth: true,
				itemStyle: {
					normal: {
						lineStyle: {
							width: 3, //折线宽度
						},
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 1,
							color: '#fbfa96' // 0% 处的颜色
						}, {
							offset: 0,
							color: '#f72806' // 100% 处的颜色
						}], false),
						opacity: 0.4
					}
				},

				data: [46, 56, 86, 65, 563, 423, 236, 165, 1532, 369,456,166,1235, 656, 415, 458,356,565,789,495]

			}

		]
	};
                    