var data = [132, 324, 327, 452];
		var data1 = [10, 20, 30, 40, 50];
		var data2 = ['', '', '', '', 50, 60];
		var data3 = ['', '', '', '', 50, 70];
		var dataX = ['01', '01', '02', '01', '01', '02'];
		var dataArr = [{
			type: 'max',
			name: '最大值'
		}, {
			coord: [4, 50]
		}]
		option = {
			xAxis: {
				type: 'category',
				data: [0, 1, 2, 3, 4, 5],

			},
			yAxis: [{
				type: 'value',
			}, {

				type: "value",

				position: "right",
				splitLine: {
					show: false
				},

				axisLabel: {
					show: true,
					formatter: "{value}", //右侧Y轴文字显示

				}

			}],
			grid: {
				right: "25%",
				bottom: "10%" //也可设置left和right设置距离来控制图表的大小
			},
			series: [{
					name: '直接访问',
					type: 'bar',
					barWidth: '40',
					yAxisIndex: 1,
					data: data
				},
				{
					markPoint: {
						symbol: 'pin',
						position: 'top',
						symbolSize: [60, 50],
						data: dataArr,
						label: {
							offset: [0, 0],
							color: '#fff',
							formatter: [
								'555'
							].join('\n'),
						},
						symbolOffset: [0, '-30%'],
						itemStyle: {
							color: '#5e80f3'
						}
					},
					data: data1,

					type: 'line',
					z: 999999,
					smooth: false,
					symbol: 'emptyCircle',
					symbolSize: 10,
					showSymbol: true,
					itemStyle: {
						normal: {
							label: {
								show: false // 顶端内容显示
							},
							color: "#25a4fb",
							lineStyle: {
								color: "#25a4fb"
							}
						}
					},
				},
				{
					name: '',
					type: 'line',
					smooth: true,
					symbol: 'emptyCircle',
					symbolSize: 10, // 圆点大小
					itemStyle: {
						normal: {
							label: {
								show: false // 顶端内容显示
							},
							color: "#ffa422",
							lineStyle: {
								width: 2,
								color: '#fa5900',
								type: 'dashed'
							}
						}
					},
					markPoint: {
						symbol: 'pin',
						position: 'top',
						symbolSize: [60, 50],
						data: [{
							type: 'max',
							name: '最大值'
						}],
						symbolOffset: [0, '-30%'],
						itemStyle: {
							color: '#fa5900'
						}
					},
					data: data3,

				},
				{
					name: '',
					type: 'line',
					smooth: true,
					symbol: 'emptyCircle',
					symbolSize: 10, // 圆点大小
					itemStyle: {
						normal: {
							label: {
								show: false // 顶端内容显示
							},
							color: "#ffa422",
							lineStyle: {
								width: 2,
								color: 'green',
								type: 'dashed'
							}
						}
					},
					markPoint: {
						symbol: 'image://img/lp.png',
						position: 'bottom',
						symbolSize: [60, 50],
						data: [{
							type: 'max',
							name: '最大值'
						}],
						symbolOffset: [0, '60%'],
						label: {
		                    offset: [0, 6],
		                    color: '#ffffff',
//		                    formatter: [
//		                      '2'
//		                    ].join('\n'),
		                },
						itemStyle: {
							fontWeight:500,
							border:0
						}
					},
					data: data2,

				},
			],
		};