option = { 
    backgroundColor:'#000311',
	series: [
	{
			type: 'gauge',
			radius:'60%',
			startAngle:'180',
			endAngle:'0',
			splitNumber:'95',
			pointer:{
				show:false
			},
			detail: {
			offsetCenter:[0,-20],
			formatter:'{value}%'
			},
			data: [{value: 95, name: '已完成'}],
			axisLine:{
				show: true,
				lineStyle: {
					color:[[0, '#46DEEA'], [0.95, '#46DEEA'], [1, 'rgba(117,248,219,0.1)']],
					width: 45,
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
				length:45,
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