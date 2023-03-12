var data = [[60, 20], [60, 100], [80, 70], [80, 135], [80, 220], [80, 280], [100, 310], [100, 20], [100, 160]];

option = {
    polar: {},
    angleAxis: {
		splitLine: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: false
		},
		min: 0,
		max: 360
	},
    radiusAxis: {
		axisLine: {
			show: false
		},
		axisLabel: {
			show: false
		},
		min: 0,
		max: 100,
		splitNumber: 5,
		axisTick: {
			show: false
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: ['#eee', 'transparent', 'transparent', '#eee', '#eee', '#eee']
			}
		}
	},
    series: [{
			name: '',
			type: 'scatter',
			coordinateSystem: 'polar',
			data: data,
			clip: false,
			label: {
				show: true,
				position: 'top',
				fontSize: 12,
				color: '#333',
				formatter: function(params) {
					return 11111;
				}
			},

		}
]
};