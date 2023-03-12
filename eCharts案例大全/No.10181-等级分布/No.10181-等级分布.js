 option = {
		color: ['#ff2a00', '#ff8400', '#f1b629','#f1ea29'],
			title: {
			text: '等级分布',
			left: '5%',
			top: '2%',
			textStyle: {
				fontWeight: 600,
				fontSize: 14,
				lineHeight: 26,
			}
		},
		legend: {
			show: true,
//			orient: 'vertical',
			left: 'center',
			bottom: '0',
			itemGap: 20,
			icon: 'circle',
			itemWidth: 10,
			itemHeight: 10,
		 data: ['极敏感', '敏感', '较敏感', '低敏感']
		},
		series: [{
			type: 'pie',
			center: ['50%', '50%'],
			radius: ['42%', '62%'],
			label: {
				normal: {
					show: false,
				}
			},
			itemStyle: {
				normal: {
					borderColor: '#fff',
					borderWidth: 2,
				}
			},
			data: [{
				value: 5,
				name: '极敏感',

			}, {
				value: 5,
				name:  '敏感',
			}, {
				value: 5,
				name:  '较敏感',

			},
			{
				value: 90,
				name:  '低敏感',

			},
			]
		}]
	};