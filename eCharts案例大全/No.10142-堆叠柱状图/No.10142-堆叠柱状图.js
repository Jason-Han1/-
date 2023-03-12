option = {
		color: ['#b9de97', '#e63a59', '#eb8c23'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			confine: true
		},
		legend: {
			show: true,
			data: ['已办结', '未派发', '办理中']
		},
		grid: {
			left: 0,
			right: 20,
			bottom: 0,
			top: 20,
			containLabel: true
		},
		xAxis: {
			type: 'value',
			show: false
		},
		yAxis: {
			type: 'category',
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			axisLabel: {
				color: "#7a7a7a"
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		series: [{
				name: '已办结',
				type: 'bar',
				stack: '总量',
				barMaxWidth: 16,
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
				itemStyle: {
					barBorderRadius: [3, 0, 0, 3]
				},
				data: [320, 302, 301, 334, 390, 330, 320]
			},
			{
				name: '未派发',
				type: 'bar',
				stack: '总量',
				barMaxWidth: 16,
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: '办理中',
				type: 'bar',
				stack: '总量',
				barMaxWidth: 16,
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
				itemStyle: {
					barBorderRadius: [0, 3, 3, 0]
				},
				data: [220, 182, 191, 234, 290, 330, 310]
			}
		]
	}