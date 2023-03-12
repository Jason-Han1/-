option = { 
    tooltip : {
		formatter: "{a} <br/>{b} : {c}%"
	},
	toolbox: {
		feature: {
			restore: {},
			saveAsImage: {}
		}
	},
	series: [
	{
			type: 'gauge',
			name: '倒计时',
			radius:'60%',
			startAngle:'215',
			endAngle:'-35',
			splitNumber:'100',
			pointer:{
				show:false
			},
			detail: {
			offsetCenter:[0,-20],
			formatter:'{value}%'
			},
			data: [{value: 95, name: '倒计时'}],
			axisLine:{
				show: true,
				lineStyle: {
					color:[[0, '#7691FA'], [0.95, '#7691FA'], [1, '#ddd']],
					width: 25,
					shadowBlur: 15,
					shadowColor: '#7691FA',
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					opacity: 1
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				length:25,
				lineStyle: {
					color: '#eee',
					width: 2,
					type: 'solid',
					shadowColor: '#eee',
					shadowBlur: 25,
					shadowOffsetX: 10,
					shadowOffsetY: 10,
					opacity: 0.5
				},
			},
			axisLabel: {
				show: false
			}
		}
	]
};