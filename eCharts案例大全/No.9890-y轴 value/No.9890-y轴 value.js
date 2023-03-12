option = {
		color:['#5bcbfe','#fcc02c'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			confine: true
		},
		grid: {
			left: 0,
			right: 0,
			bottom: 0,
			top: 0,
			containLabel: true
		},
		xAxis: {
                            type: 'value',
                            name: '经营能力（万吨）',
                            splitNumber: 10,
                            axisLine:{
                                lineStyle:{
                                    color:'#9ac4dc'
                                }
                            },
                            axisLabel: {
                                formatter: '{value}',
                                color:'#9ac4dc'
                            },
                            splitLine:{
                                show:false
                            },
                            axisTick:false
                        },
		yAxis: {
			type: 'category',
			data: ['设计经营能力', '核准经营能力', '已利用处置量'],
			axisPointer: {
                                type: 'shadow'
                            },
                            axisLabel: {
                                formatter: '{value}',
                                color:'#fff',
                                fontSize:14,
                                interval:0
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#9ac4dc'
                                }
                            },
                            splitLine:{
                                show:false
                            },
                            axisTick:{
                                show:false
                            }
		},
		series: [{
				name: '经营能力（万吨）',
				type: 'bar',
				barMaxWidth: 16,
				label: {
					normal: {
						show: false
					}
				},
				itemStyle: {
					barBorderRadius: [3, 0, 0, 3]
				},
				data: [320, 302, 301]
			}
		]
	}