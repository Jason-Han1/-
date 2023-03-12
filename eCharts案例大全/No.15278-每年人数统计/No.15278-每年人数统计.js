	option= {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function(params) {
			    console.log(params);
				return params[0].seriesName+'<br/>'+params[0].name + ': ' + params[0].value;
			}
		},
		grid: {
			left: '3%',
			right: '10%',
			bottom: '6%',
			containLabel: true
		},
		title: {
			text: '每年人数统计'
		},
		xAxis: {
			data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
			name: '入学年份',
		},
		yAxis: {
			name: '人数',
			type: 'value'
		},
		series: [{
			name: '每年人数统计',
			type: 'pictorialBar',
			barCategoryGap: '0%',
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			//symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
			symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
			itemStyle: {
				normal: {
					opacity: 0.5
				},
				emphasis: {
					opacity: 1
				}
			},
			data: [150, 160, 115, 170, 187, 188, 90],
			z: 10
		}]
	};