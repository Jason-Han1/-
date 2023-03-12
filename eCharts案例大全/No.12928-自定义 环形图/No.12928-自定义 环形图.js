option = {
    backgroundColor: '#00264d',
	series: [
	    /*仪表盘图，做中间刻度线*/
		{
			type: 'gauge',
			name: '业务指标',
			radius:'60%',
			startAngle:'0',
			endAngle:'-359.99',
			splitNumber:'100',
			pointer:{
				show:false
			},
			title:{
			    show:false
			},
			detail: {
    			show:false
			},
			data: [{value: 95, name: '完成率'}],
			axisLine:{
				lineStyle: { 
					width: 20,
					opacity: 0
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				length:20,
				lineStyle: {
					color: 'rgba(255,255,255,1)',
					width: 2,
					type: 'solid',
				},
			},
			axisLabel: {
				show: false
			}
		},
		/*内心原型图，展示整体数据概览*/
		{
        name: 'pie',
        type: 'pie',
        clockWise: true,
        startAngle:90,
        radius: ['52%', '50%'],
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 5,
            label: {
                normal: {
                    formatter: '{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '35',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#f74369',
                    shadowColor: '#f74369',
                    shadowBlur: 10
                }
            }
        }, {
            value: 5,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(247,67,105,0)', // 未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
                }
            }
        }]
    }
	]
};