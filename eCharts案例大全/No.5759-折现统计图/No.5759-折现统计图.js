option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			color: ["#05C985", "#1F8EFA", "#FFAB4F"],
			data: ['整改', '投诉', '自检自查'],
			left: 'right',
			top: '-5px'
		},
		grid: {
			top: 'middle',
			left: '0%',
			right: '4%',
			bottom: '3%',
			height: '80%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['一月', '二月', '三月', '四月', '五月', '六月'],
			axisLine: {
				lineStyle: {
					color: "#999"
				}
			}
		},
		yAxis: {
			type: 'value',

			splitLine: {
				lineStyle: {
					type: 'dashed',
					color: '#DDD'
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: "#333"
				},
			},
			nameTextStyle: {
				color: "#999"
			},
			splitArea: {
				show: false
			}
		},
		series: [{
				name: '整改',
				type: 'line',
				data: [800, 900, 220, 130, 660, 289],
				color: "#F58080",
				lineStyle: {
					normal: {
						width: 1.5,
						color: {
							type: 'linear',

							colorStops: [{
								offset: 0,
								color: '#05C985' // 0% 处的颜色
							}, {
								offset: 0.4,
								color: '#05C985' // 100% 处的颜色
							}, {
								offset: 1,
								color: '#05C985' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						},
						shadowColor: 'rgba(245,128,128, 0.5)',
						shadowBlur: 5,
						shadowOffsetY: 3
					}
				},
				itemStyle: {
					normal: {
						color: '#05C985',
						borderWidth: 3,
						/*shadowColor: 'rgba(72,216,191, 0.3)',
						 shadowBlur: 100,*/
						borderColor: "#05C985"
					}
				},
				smooth: true
			},
			{
				name: '投诉',
				type: 'line',
				data: [123, 568, 111, 222, 123, 56],
				lineStyle: {
					normal: {
						width: 1.5,
						color: {
							type: 'linear',

							colorStops: [{
									offset: 0,
									color: '#1F8EFA' // 0% 处的颜色
								},
								{
									offset: 0.4,
									color: '#1F8EFA' // 100% 处的颜色
								}, {
									offset: 1,
									color: '#1F8EFA' // 100% 处的颜色
								}
							],
							globalCoord: false // 缺省为 false
						},
						shadowColor: 'rgba(71,216,190, 0.5)',
						shadowBlur: 5,
						shadowOffsetY: 3
					}
				},
				itemStyle: {
					normal: {
						color: '#1F8EFA',
						borderWidth: 3,
						/*shadowColor: 'rgba(72,216,191, 0.3)',
						 shadowBlur: 100,*/
						borderColor: "#1F8EFA"
					}
				},
				smooth: true
			},
			{
				name: '自检自查',
				type: 'line',
				data: [125, 568, 25, 36, 784, 56],
				lineStyle: {
					normal: {
						width: 1.5,
						color: {
							type: 'linear',

							colorStops: [{
									offset: 0,
									color: '#FFAB4F' // 0% 处的颜色
								},
								{
									offset: 0.4,
									color: '#FFAB4F' // 100% 处的颜色
								}, {
									offset: 1,
									color: '#FFAB4F' // 100% 处的颜色
								}
							],
							globalCoord: false // 缺省为 false
						},
						shadowColor: 'rgba(249,165,137, 0.5)',
						shadowBlur: 5,
						shadowOffsetY: 3
					}
				},
				itemStyle: {
					normal: {
						color: '#FFAB4F',
						borderWidth: 3,
						/*shadowColor: 'rgba(72,216,191, 0.3)',
						 shadowBlur: 100,*/
						borderColor: "#FFAB4F"
					}
				},
				smooth: true
			}
		]
	};