option ={
				backgroundColor: '#0C3369',
				title: {
					text: "{a|" + "this.title "+ "}{b|" + this.unit + "}",
					x: '0',
					y: '0',
					textStyle: {
						rich: {

							a: {
								color: '#fff',
								fontSize: 15,
								fontWeight: 'normal',
								padding: [0, 0, 0, 10]

							},
							b: {
								color: '#fff',
								padding: [0, 0, 0, 20],
								fontSize: 15

							}
						}
					}
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						lineStyle: {
							color:'#FC7474'  // 竖线颜色
						}
					}
				},
				grid: {
					top: "25%",
					left: '5.5%',
					right: '1%',
					bottom: '15%'
				},
				xAxis: {
					type: 'category',
					boundaryGap: false, // 起始坐标
					data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
					axisLine: {
						lineStyle: {
							color: '#0A56CB'
						}
					},
					axisTick: {
						lineStyle: {
							color: '#0A56CB'
						},
						length: 8,
						alignWithLabel: true
					},
					axisLabel: {
						color: '#A4A7B6',
						margin: 15
					}
				},
				yAxis: {
					min: 0,
					max: 100,
					type: 'value',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						color: '#A4A7B6'
					},
					splitLine: {
						lineStyle: {
							color: '#144693'
						}
					}
				},
				series: [
					{
						data: [23, 43, 56, 76, 13, 17, 44],
						type: 'line',
						smooth: true,
						symbol: 'rect',
						lineStyle: {
							color:  "#FC7474" // 波峰线颜色
						},
						itemStyle: {
							color:  "#FC7474"
						},
						areaStyle: { // 区域填充样式
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color:'rgba(254,86,92, 0.8)'
								}, {
									offset: 1,
									color: 'rgba(255, 136, 212, 0)'
								}], false),
								shadowColor: 'rgba(0, 0, 0, 0.1)',
								shadowBlur: 10
							}
						}

					}
				]
			}