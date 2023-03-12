var imgURL = "/asset/get/s/data-1544519576380-qAp7egzZf.png";


			
		 option = {
				backgroundColor:"#013d5a",
				grid: {
					top: '20%',
					bottom: '33%',
					left:'16%',
					right:'3%'
				},
				xAxis: {
					type: 'value',
					position: 'top',
					splitLine: {
						lineStyle: {
							type: 'solid',
							color: '#0e6284'
						}
					},
					axisLine: {
						lineStyle: {
							type: 'solid',
							color: '#0e6284'
						}
					},
					axisTick: {
						show: true,
						lineStyle:{
							color: '#0e6284'
						}
					},
					axisLabel: {
						show: true,
						rotate: 0,
						textStyle: {
							color: '#fff',
							fontSize:16
						}
					},
				},
				yAxis: {
					splitNumber: 25,
					type: 'category',
					axisLine: {
						lineStyle: {
							type: 'solid',
							color: '#0e6284'
						}
					},
					axisLabel: {
						show: true,
						rotate: 0,
						textStyle: {
							color: '#fff',
							fontSize:18
						}
					},
					axisLine: {
						lineStyle: {
							type: 'solid',
							color: '#0e6284'
						}
					},
					axisTick: {
						show: true,
						lineStyle:{
							color: '#0e6284'
						}
					},
					splitLine: {
						lineStyle: {
							type: 'solid',
							color: '#0e6284'
						}
					},
					data: ['2018年10月', '2018年09月', '2018年08月', '2018年07月', '2018年06月', '2018年05月', '2018年04月', '2018年03月', '2018年02月', '2018年01月']
				},
				series: [{
					name: '月开支',
					type: 'bar',
					barGap: '-100%',
					itemStyle: {
						normal: {
							color: '#23d7dc',
						}
					},
					data: [154, 189, 334, 181, 223, 157, 169, 226, 130, 213]
				}, {
					type: 'line',
					silent: true,
					symbol:'image://'+imgURL,//换图片即可变色image://url
					symbolSize:8,
					barGap: '-100%',
					data: [154, 189, 334, 181, 223, 157, 169, 226, 130, 213],
					label: {
						normal: {
							textStyle: {
								color: '#fff',
								fontSize:20
							},
							position: 'right',
							show: true,
							formatter: '{c}'
						}
					},
					itemStyle: {
						normal: {
							color: '#e9dc5b',
						}
					},
					
				}]
			}