
option = {
     backgroundColor: '#fff',
    grid: {
		left: '12%',
		top: '5%',
		bottom: '12%',
		right: '8%'
	},
    xAxis: {
        data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
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
				color: '#000000',
				fontSize: 14,
				fontWeight: 'bolder',
			}
		}
    },
    yAxis: [{
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
					color: '#000000',
					fontWeight: 'bolder',
				}
			},
			splitArea: {
				areaStyle: {
					color: 'rgba(255,255,255,.5)'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255, 129, 109, 0.1)',
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
			distance: 5,
			color: '#000000',
			fontWeight: 'bolder',
			fontSize: 15,
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
							color:'#9A11FF'
						},
						{
							offset: 1,
							color:'#08DFFE'
						}
					],
					global: false //  缺省为  false
				}
			},
			emphasis: {
				opacity: 1
			}
        },
        data: [0.30, 0.50, 0.49, 0.59, 0.71, 0.64, 0.56, 0.56, 0.54, 0.65, 0.60, 0.61, 0.48, 0.36, 0.36]
    }]
};