option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					z: 1
				}
			},
			xAxis: {
				data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
				boundaryGap: false,
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: "#333b45"
					}
				}
			},
			yAxis: {
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: "#333b45"
					}
				}
			},
			visualMap: {
				show: false,
				top: 10,
				right: 10,
				pieces: [{
					lte: 100,
					color: '#f3cb2d'
				}, {
					gt: 100,
					lte: 150,
					color: '#4d99d8'
				}, {
					gt: 150,
					color: '#ff313b'
				}]
			},
			series: {
				type: 'line',
				data: [100, 120, 130, 150, 160, 280, 100, 90, 80, 236, 358, 20],
				lineStyle: {
					width: 4
				},
				showSymbol: false,
				symbolSize: 10,
				emphasis: {
					itemStyle: {
						borderWidth: 4
					}
				},
				markLine: {
					silent: true,
					symbol: 'none',
					label: {
						formatter: '{b}'
					},
					data: [{
						yAxis: 100,
						name: "预警值",
						lineStyle: {
							color: '#f3cb2d',
							type: 'solid'
						},

					}, {
						yAxis: 150,
						name: "不合格线",
						lineStyle: {
							color: '#ff313b',
							type: 'solid'
						}
					}]
				},
				markArea: {
					silent: true,
					itemStyle: {
						normal: {
							color: '#f0f9fe',
							borderWidth: 0,
							borderType: 'dashed'
						}
					},
					data: [
						[{
							xAxis: 0,
							yAxis: 100
						}, {
							xAxis: 'max',
							yAxis: 150
						}]
					]
				}
			}
		};
	