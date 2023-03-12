option = {
				backgroundColor: '#fff',
				tooltip: {
					trigger: 'axis',
					axisPointer: {
					    type: 'none'
					},
					formatter: (params)=> {
					    let data = params[0]
					    let marker = "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(4, 130, 252, 1);'></span>"
					    return `${data.name}<br/>${marker} ${data.value}`
					}
				},
				grid: {
					top: '5%',
					left: '5%',
					right: '3%',
					bottom: '8%',
					// containLabel: true
				},
				xAxis: [{
					type: 'category',
                    axisLine: {
						show: true,
						lineStyle: {
						    color: '#E2E8EC'
						}
					},
					axisLabel: {
						show: true,
						// margin: 20,
						textStyle: {
							color: '#38455D',
						},
					},
					axisTick: {
						show: false
					},
					// boundaryGap: true,
					data: ['2020', '2021', '2022', '2023', '2024'],

				}],

				yAxis: [{
					type: 'value',
					min: 0,
					splitNumber: 4,
					axisLine: {
						show: true,
						lineStyle: {
						    color: '#E2E8EC'
						}
					},
					axisLabel: {
						show: true,
						// margin: 20,
						textStyle: {
							color: '#38455D',
						},
					},
					axisTick: {
						show: false,
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(226, 232, 236, 1)',
							type: 'dashed',
						}
					}
				}],
				series: [{
					name: '',
					type: 'line',
					// smooth: true, //是否平滑
					showAllSymbol: true,
					symbol: 'circle',
					symbolSize: 10,
					lineStyle: {
						normal: {
						    width: 4,
							color: "rgba(4, 130, 252, 1)",
							shadowColor: 'rgba(54, 149, 232, 0.73)',
                            shadowBlur: 3,
                            shadowOffsetY: 1
						},
					},
					label: {
						show: false,
						position: 'top',
						textStyle: {
							color: '#48B3FF',
						}
					},

					itemStyle: {
						color: "#FFF",
						borderColor: "rgba(4, 130, 252, 1)",
						borderWidth: 2,
					},
					tooltip: {
						show: true
					},
					data: [55, 35, 62, 55, 97],
				}]
			};
