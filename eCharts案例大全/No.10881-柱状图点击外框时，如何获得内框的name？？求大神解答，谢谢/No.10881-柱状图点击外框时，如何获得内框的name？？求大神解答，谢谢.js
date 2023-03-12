option = {
		color:['#66cacd','#384359'],
		grid: {
			left: '6%',
			top: '-5%',
			right: '6%',
			bottom: '8%',
			containLabel: true
		},
		xAxis: [{
			show: false,
		}],
		yAxis: [{
			axisTick: 'none',
			axisLine: 'none',
			offset: '0',
			axisLabel: {
				textStyle: {
					color: '#49c9ff',
					fontSize: '12',
				}
			},
			data: ['李卓贤', '张三', '李四', '王五']
		}, {
			axisTick: 'none',
			axisLine: 'none',
			axisLabel: {
				textStyle: {
					color: '#49c9ff',
					fontSize: '12',
				}
			},
			data: [ '4', '3', '2', '1']
		}, {
			axisLine: {
				lineStyle: {
					color: 'rgba(0,0,0,0)'
				}
			},
			data: [],
		}],
		series: [{
				name: '条',
				type: 'bar',
				yAxisIndex: 0,
				data: [29, 40, 55, 89],
				label: {
					normal: {
						show: true,
						position: 'right',
						textStyle: {
							color: '#71a2d0',
							fontSize: '12',
						}
					}
				},
				barWidth: 14,
				itemStyle: {
					normal: {
						barBorderRadius: 50,
					},
				},
				z: 1
			}, {
				name: '外框',
				type: 'bar',
				yAxisIndex: 2,
				barGap: '-100%',
				data: [100, 100, 100, 100],
				barWidth: 14,
				itemStyle: {
					normal: {
						barBorderRadius: 50,
					},
				},
				z: 0
			},
		]
	};
	myChart.on("click",function(res){
			alert(res.name)
		})
	
	