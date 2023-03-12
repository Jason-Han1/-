var colorList = ['rgba(219, 120, 35, 0.5)'];
option = {
    backgroundColor:'rgba(8, 24, 40, 1)',
    grid:{
		left:'1%',
		top:'4%',
		bottom:'4%',
		right:'1%'
	},
	xAxis: [{
		type: 'category',
		show:false
	}],
	yAxis: {
		type: 'value',
		show:false
	},
	series: [{
			tooltip: {
				show: false
			},
			name: 'bg',
			type: 'pictorialBar',
			barWidth: 120,
			silent: true,
			symbol: 'rect',
			symbolRepeat: true,
			symbolMargin: 2,
			symbolSize: [105, 4],
			itemStyle: {
				color: 'rgba(228, 125, 36, 0.09)'
			},
			data: [400]
		},
		{
			type: 'pictorialBar',
			animation: true,
			animationDuration: 600,
			symbol: 'rect',
			symbolRepeat: true,
			symbolSize: [105, 4],
			symbolMargin: 1,
			barWidth: 120,
			itemStyle: {
				normal: {
					color: function(params) {
						return colorList[params.dataIndex]
					},
					label: {
						show: false
					}
				}
			},
			data: [100]
		}
	]
};