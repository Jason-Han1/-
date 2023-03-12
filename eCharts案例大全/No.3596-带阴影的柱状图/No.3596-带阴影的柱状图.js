option = {
                backgroundColor: '#000',
				tooltip: {
					show: true,
					trigger: 'axis',
					axisPointer: {
						type: 'line',
						shadowStyle: {
							color: 'rgba(255, 255, 255, 0.15)'
						},
						lineStyle: {
							dashOffset: 10,
						},
						label: {
							show: false
						}
						// type: 'line',
						// lineStyle: {
						// 	type: 'solid',
						// 	color: 'rgba(255, 255, 255, 0.15)'
						// },
					},
					// alwaysShowContent: true,
					borderWidth: 2,
					borderRadius: '4px',
					borderColor: 'rgb(41,112,114)',
					backgroundColor: 'rgba(53, 76, 101, 0.4)',
					textStyle: {
						color: '#fff',
					},
					formatter: function (params) {
						const color = params[1].color.colorStops[0].color;//图例颜色
						// const color2 = params[1].color;//图例颜色
						let res = `<div>
										<div>${params[1].name}:</div>
										<div style="display: flex;align-items: center">
											<div style="width:14px;height:6px;margin: 0 10px;background-color: ${color} "></div>
											<div>${params[1].seriesName}：${params[1].value}吨</div>
										</div>
									</div>`

						return res;
					}
				},
				grid: {
					left: '55px',
					top: '105px',
					bottom: '50px',
					right: '100px',
				},
				xAxis: [{
					name: '',
					nameGap: 8,
					type: 'category',
					nameTextStyle: {
						width: 52,
						height: 17,
						fontSize: 18,
						padding: [17, 0, 0, 0],
						align: 'left',
						verticalAlign: 'top',
						fontWeight: 400,
						color: '#FFFFFF',
						lineHeight: 18,
					},
					// boundaryGap: false,
					axisLine: {
						show: true,
						color: '#536365',
						onZero: true,
						lineStyle: {
							color: '#DAFFF8',
							type: 'solid',
							opacity: 0.3,
							width: 2,
						}
					},
					axisLabel: {
						show: true,
						color: '#fff',
						interval: 0,
						fontWeight: 'normal',
						fontSize: 21,
						height: 19,
						padding: [0, 0, 0, 10],
						lineHeight: 40,
						opacity: 0.7,
					},
					splitLine: {
						show: false
					},
					axisTick: {
						show: false,
					},
					data: ['3月1日', '3月2日', '3月3日', '3月4日', '3月5日', '3月6日', '3月7日'],
				}],
				yAxis: [{
					name: '（吨）',
					type: 'value',
					min: 0,
					// max: 100,
					nameTextStyle: {
						width: 52,
						height: 17,
						fontSize: 18,
						padding: [0, 8, 23, 0],
						align: 'right',
						fontWeight: 400,
						color: '#FFFFFF',
						lineHeight: 18,
					},
					splitNumber: 5,
					splitLine: {
						show: true,
						lineStyle: {
							color: '#DAFFF8',
							type: 'dotted',
							opacity: 0.2,
							width: 2,
						}
					},
					axisLine: {
						show: false,
					},
					axisLabel: {
						show: true,
						color: '#CFCFCF',
						margin: 17,
						fontWeight: 'normal',
						fontSize: 21,
						height: 16,
						lineHeight: 40,
					},
					axisTick: {
						show: true,
						length: 7,
						lineStyle: {
							color: '#DAFFF8',
							opacity: 0.83,
							width: 3,
						},
					},
				}],
				series: [
					{
						name: '',
						data: [30, 50, 70, 50, 50, 60, 30],
						type: 'bar',
						barWidth: 60,
						barGap: '-84%',
						itemStyle: {
							// color: 'rgba(13, 178, 255, 1)',
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0, color: 'rgba(113, 194, 255, 0)'
									},
									{
										offset: 0.85, color: 'rgba(82, 252, 247, 0)'
									},
									{
										offset: 1, color: 'rgba(82, 252, 247, 0)'
									},
								]
							}
						},
						emphasis: {
							itemStyle: {
								// color: 'rgba(13, 178, 255, 1)',
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [
										{
											offset: 0, color: 'rgba(113, 194, 255, 0)'
										},
										{
											offset: 0.85, color: 'rgba(82, 252, 247, 0.1)'
										},
										{
											offset: 1, color: 'rgba(82, 252, 247, 0.2)'
										},
									]
								}
							},
						}
					},
					{
						name: '垃圾倾倒数',
						data: [30, 50, 70, 50, 50, 60, 30],
						type: 'bar',
						smooth: false,
						cursor: 'pointer',
						yAxisIndex: 0,
						barWidth: 40,
						showSymbol: false,
						symbolSize: 50,
						itemStyle: {
							// color: 'rgba(13, 178, 255, 1)',
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0, color: 'rgba(113, 194, 255, 1)'
									},
									{
										offset: 0.05, color: 'rgba(82, 252, 247, 1)'
									},
									{
										offset: 1, color: 'rgba(82, 252, 247, 0)'
									},
								]
							}
						},
					},
					{
						name: '',
						data: [30, 50, 70, 50, 50, 60, 30],
						type: 'line',
						showSymbol: false,
						symbolSize: 30,
						symbol: 'circle',
						symbolOffset: [3, 0],
						lineStyle: {
							width: 4,
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0, color: 'rgba(255, 196, 53, 0)' // 0% 处的颜色
								}, {
									offset: 1, color: 'rgba(255, 67, 2, 0)' // 100% 处的颜色
								}],
							}
						},
					},
				],
				legend: {
					show: true,
					right: 100,
					top: 35,
					itemGap: 27,
					itemHeight: 7,
					itemWidth: 22,
					icon: 'rect',
					textStyle: {
						color: '#fff',
						fontSize: 20,
						fontWeight: 'normal',
						lineHeight: 20,
					},
				},
			};
