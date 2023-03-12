
option = {
     backgroundColor: 'RGB(0,10,16)',
    grid: {
		left: '12%',
		top: '8%',
		bottom: '12%',
		right: '8%'
	},
    xAxis: {
        data: ['a', 'b', 'c', 'd', 'e', 'f' ],
       axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: 'rgba(255, 129, 109,.1)',
				width: 1 //这里是为了突出显示加上的
			}
		},
		axisLabel: {
			textStyle: {
				color: '#999',
				fontSize: 12
			}
		},
		splitLine: {
				show: true,
				lineStyle: {
					color: '#FFF',
					width: 0.5,
					type: 'dashed'
				}
			}
    },
    yAxis: [{
            show: false,
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255, 129, 109, 0.1)',
					width: 1 //这里是为了突出显示加上的
				}
			},
			axisLabel: {
				textStyle: {
					color: '#999'
				}
			},
			splitArea: {
				areaStyle: {
					color: 'rgba(255,255,255,.5)'
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#FFF',
					width: 0.5,
					type: 'dashed'
				}
			}
		}
	],
    series: [{
        type: 'pictorialBar',
        barCategoryGap: '0%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
			show: true,
			position: 'top',
			distance: 15,
			color: '#FFF',
			fontWeight: 'bolder',
			fontSize: 15,
			formatter:(p)=>{
			    console.log(p);
			    return p.value +' | '+ p.data;
			},
		},
        itemStyle: {
            normal: {
				color: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
							offset: 0,
							color:'RGBA(17,239,174,0.8)'
							
						},
						{
							offset: 1,
							color:'RGBA(31,153,141,0.2)'
						}
					],
					global: false //  缺省为  false
				}
			},
			emphasis: {
				opacity: 1
			}
        },
        data: [71, 35, 21, 12,  7, 3]
    }]
};