option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
			trigger: 'axis'
		},
   xAxis: [{
			type: 'category',
			axisTick: {
				alignWithLabel: true
			},
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }],
    yAxis: [{
			type: 'value',
			name: '数量',
			position: 'right',
			splitLine: {
				show: false
			}

		}, {
			type: 'value',
			name: '价格',
			splitLine: {
				show: false
			},
			position: 'left'
		}],
    series: [{
        name: '数量',
			type: 'line',
			label: {
				normal: {
					show: false,
					position: 'top',
				}
			},
			lineStyle: {
				normal: {
					width: 2,
					color: '#f297ff'
				}
			},
        data:[220, 182, 191, 234, 290, 330, 310]
    },{
        name: '价格',
			type: 'bar',
			barWidth: 25,
			yAxisIndex: 1,
			label: {
				normal: {
					show: false,
					position: 'top'
				}
			},
		 
		 data:[22, 18, 19, 24, 90, 30, 10]
    }]
};