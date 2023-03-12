option = {
		color: ['#e63a59', '#eb8c23', '#b9de97'],
		tooltip: {
			trigger: 'item',
			confine: true,
			formatter: "{b} : {c} ({d}%)"
		},
		series: [{
				color: ['#fff'],
				name: '问题线索',
				type: 'pie',
				radius: '50%',
				center: ['50%', '50%'],
				hoverAnimation: false,
				tooltip: {
					show: false
				},
				label: {
					show: true,
					color: '#000',
					position: 'center',
					formatter: [
						'{a|' + '113个' + '}'
					].join(''),
					rich: {
						a: {
							color: '#53a3fe',
							fontSize: 26
						}
					},
					textStyle: {
						baseline: 'middle'
					}
				},
				data: [1]
			},
			{
				name: '',
				type: 'pie',
				radius: ['50%', '65%'],
				center: ['50%', '50%'],

				data: [{
						value: 30,
						name: '未派发'
					},
					{
						value: 60,
						name: '办理中'
					},
					{
						value: 23,
						name: '已办结'
					}
				],
				labelLine: {
					normal: {
						show: true,
						length: 5,
						length2: 80
					}
				},
				label: {
					formatter: function(params) {
						console.log(params.value)
						return params.name + " " + params.value;
					},
					fontSize: 13,
					padding: [0, -70, 23]
				},
				itemStyle: {
					emphasis: {
						shadowBlur: 5,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	}