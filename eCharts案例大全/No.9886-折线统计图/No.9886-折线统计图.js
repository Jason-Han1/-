option ={
				title: {
					text:' this.title',
					top: "0",
					left: "center",
					textStyle: {
						fontSize: 14,
						color: "#F7F7F7",
						fontWeight: "normal"
					}
				},
				tooltip: {
					trigger: 'axis',
					formatter: '{b} : {c}'
				},
				grid: {
					left: '25%',
					top: '35px',
					bottom: '3px',
					right: '1%'
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					axisLine: {
						lineStyle: {
							color: '#1762B0'
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false
					}
				},
				yAxis: {
					type: 'value',
					splitLine: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: '#1762B0'
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						color: '#CCCFD5'
					}
				},
				series: [{
					data: [0,1,5,3,2,1,7,6,8,9,2],
					type: 'line',
					areaStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color:'#2DD868'// 0% 处的颜色
							}, {
								offset: 1, color: '#3EBAFF' // 100% 处的颜色
							}]
						}
					},
					smooth: false,
					itemStyle: {
						opacity: 0
					},
					lineStyle: {
						width: 0
					}
				}]
			}