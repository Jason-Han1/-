option = { 
	series: [
	{
			type: 'gauge',
			name: '倒计时',
			radius:'40%',
			startAngle:'215',
			endAngle:'-35',
			splitNumber:'100',
			pointer:{
				show:false
			},
			detail: {
			    color:'#00ca86',
    			formatter:'{value}%',
    			offsetCenter:[0,0],
			},
    		title:{
    		  show:true,  
    		  color:'#00ca86',
    		  offsetCenter:[0,'30%'],
    		},
			data: [{value: 40, name: '拣货及时率'}],
			axisLine:{
				show: true,
				lineStyle: {
					color:[[0, '#00ca86'], [0.4, '#00ca86'], [1, '#1b5588']],
					width: 25,
					shadowBlur: 15,
					shadowColor: '#00ca86',
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
					color: '#1b5588',
					width: 3,
					type: 'solid',
					shadowColor: '#1b5588',
					shadowBlur: 15,
					shadowOffsetX: 10,
					shadowOffsetY: 10,
				},
			},
			axisLabel: {
				show: false
			}
		}
	]
};