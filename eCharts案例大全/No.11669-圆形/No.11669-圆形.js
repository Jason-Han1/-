var dataValArray = 0.55;
option = {
    backgroundColor:'#000',
		series: [{
				name: 'Line 1',
				type: 'pie',
				clockWise: false,
				radius:['79%','85%'],
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
					}
				},
				hoverAnimation: false,
	
				data: [{
						value:  Math.round((dataValArray*100)) ,
						itemStyle: {
							normal: {
								color: '#29D202',
								shadowColor: '#29D202',
								shadowBlur: 20
							}
						}
					}, {
						value: 100- Math.round((dataValArray*100)) ,
						name: 'invisible',
						itemStyle: {
							normal: {
								color: '#253962', //未完成的圆环的颜色
								label: {
									show: false
								},
								labelLine: {
									show: false
								}
							},
							emphasis: {
								color: '#253962' //未完成的圆环的颜色
							}
						}
					}
	
				]
			}, {
				name: 'Line 2',
				type: 'pie',
				animation: false,
				clockWise: false,
				radius: ['93%', '95%'],
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						color: '#253962'
					}
				},
				hoverAnimation: false,
				tooltip: {
					show: false
				},
				data: [{
						value: 100,
						label: {
							normal: {
								formatter:   Math.round((dataValArray*100))  +'%',
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '16',
									fontWeight: 'normal',
									color: '#fff'
								}
							}
						},
					},
	
				]
			},
		]
	};	