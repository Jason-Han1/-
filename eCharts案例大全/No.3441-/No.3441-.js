var date = []
for (let a = 1;a<=12;a++) {
    date.push(a+'月')
}
option = {
    color: ['#2777EC','#F7B500'],
    legend: {
        top: 10,
        right: 100,
        itemWidth: 16,
        itemHeight: 11,
        data: ['用车申请','用车租赁'],
        icon: 'rect'
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
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
    series: [
    {
        name: '用车申请',
        type: 'bar',
        stack: '用车统计',
        barWidth: 10,
        label: {
            show: false,
            position: 'insideRight'
        },
        data: [320, 302, 301, 334, 390, 330, 320, 100, 50, 390, 330, 320]
    },{
        name: '用车租赁',
        type: 'bar',
        stack: '用车统计',
        barWidth: 10,
        label: {
            show: false,
            position: 'insideRight'
        },
        data: [320, 302, 301, 334, 390, 330, 320, 302, 301, 334, 390, 330]
    }
    ]
};