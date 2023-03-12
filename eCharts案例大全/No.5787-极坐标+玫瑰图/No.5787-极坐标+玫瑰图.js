
		//玫瑰图
		option = {
			title: {
				text: '课程学习状态(录播学习进度统计)',
				// left: 'left',
				x: 'center'
			},
			angleAxis: {
				type: 'category',
				data: ['100%', '80~100%', '60~80%', '60%以下', '未学习']
			},
			radiusAxis: {
				min: 0,
				max: 10,
				interval: 2
			},
			polar: {
			},
			tooltip: {
				confine:true,
				trigger: 'item',
				formatter: '{a} <br/>{b} : {c} ({d}%)'
			},
			legend: {
				show: true,
				x:'center',
				y: 'bottom',
				data: ['100%', '80~100%', '60~80%', '60%以下', '未学习']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					// dataView: {
					// 	show: true,
					// 	readOnly: false
					// },
					magicType: {
						show: true,
						type: ['pie', 'funnel']
					},
					// restore: {
					// 	show: true
					// },
					// saveAsImage: {
					// 	//show: true
					// }
				}
			},
			calculable: true,
			series: [
				{
					stack: 'a',
					type: 'pie',
					radius: '55%',
					center: ['50%', '50%'],
					roseType: 'area',
					label: {
						normal: {
							show: false
						},
						emphasis: {
							show: false
						}
					},
					data: [
						{value:15, name: '100%'},
						{value: 12, name: '80~100%'},
						{value: 5, name: '60~80%'},
						{value:9, name: '60%以下'},
						{value:10, name: '未学习'}
					]
				}
			]
		}
		