option = {
				backgroundColor: '#fff',
				color: ['#157DFF','rgba(196, 166, 251, 1)'],
				tooltip: {
					trigger: 'axis',
					axisPointer: {
					    type: 'none'
					}
				},
				legend: {
				 show: true,
				 right: '10%',
				 top: '5%',
				 icon: 'rect',
				 
				},
				grid: {
					top: '15%',
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
						    color: 'rgba(151, 151, 151, 1)'
						}
					},
					axisLabel: {
						show: true,
						// margin: 20,
						textStyle: {
							color: "#000",
						},
					},
					axisTick: {
						show: false
					},
					// boundaryGap: true,
					data: ['年假', '事假', '产假', '护理假'],

				}],

				yAxis: [{
					type: 'value',
					min: 0,
					splitNumber: 4,
					axisLine: {
						show: true,
						lineStyle: {
						    color: 'rgba(151, 151, 151, 1)'
						}
					},
					axisLabel: {
						show: true,
						textStyle: {
							color: "#000",
						},
					},
					axisTick: {
						show: true,
					},
					splitLine: {
					 show: false
					},
					splitArea: {
					 show: true,
					 areaStyle: {
					  color: ['#fff','rgba(245, 246, 250, 1)']
					 }
					}
				}],
				series: [
				 {
					name: '总人数',
					type: 'line',
					// smooth: true, //是否平滑
					showSymbol: false,
					symbol: "none",
					hoverAnimation: false,
					lineStyle: {
					 width: 2,
							color: "#157DFF",
							shadowColor: 'rgba(21, 125, 255, .73)',
       shadowBlur: 2,
       shadowOffsetY: 1
					},
					tooltip: {
						show: true
					},
					data: [55, 35, 62, 55],
				},
				{
					name: '请假人数',
					type: 'line',
					// smooth: true, //是否平滑
					showSymbol: false,
					symbol: 'none',
					lineStyle: {
						    width: 2,
							color: "rgba(196, 166, 251, 1)",
							shadowColor: 'rgba(196, 166, 251, .73)',
                            shadowBlur: 2,
                            shadowOffsetY: 1
					},
					label: {
						show: false,
						position: 'top',
						textStyle: {
							color: '#48B3FF',
						}
					},
					tooltip: {
						show: true
					},
					data: [42,30,54,48],
				}
				]
			};
