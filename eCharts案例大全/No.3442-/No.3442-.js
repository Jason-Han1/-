var date = []
for (let a = 1;a<=12;a++) {
    date.push(a+'月')
}
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
					top: '15%',
					left: '5%',
					right: '3%',
					bottom: '8%',
					// containLabel: true
				},
				legend: {
				    show: true,
				    right: '10%'
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
						textStyle: {
							color: '#000',
						},
					},
					axisTick: {
						show: false,
					},
					// boundaryGap: true,
					data: date,

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
							color: '#000',
						},
					},
					axisTick: {
						show: true,
						lineStyle: {
						    color: 'rgba(151, 151, 151, 1)'
						}
					},
					splitLine: {
					    show: false,
						lineStyle: {
							color: 'rgba(226, 232, 236, 1)',
							type: 'dashed',
						}
					},
					splitArea: {
					    show: true,
					    areaStyle: {
					        color: ['#fff','rgba(245, 246, 250, 1)']
					    }
					}
				}],
				series: [{
					name: '邮费金额',
					type: 'line',
					// smooth: true, //是否平滑
					showAllSymbol: true,
					symbol: 'circle',
					symbolSize: 10,
					lineStyle: {
						normal: {
						    width: 2,
							color: "#06C25B",
							shadowColor: 'rgba(6, 194, 91, .73)',
                            shadowBlur: 2,
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
						borderColor: "#06C25B",
						borderWidth: 2,
					},
					tooltip: {
						show: true
					},
					data: [55, 35, 62, 55, 97,55, 35, 62, 55, 97,67,88],
				}]
			};
