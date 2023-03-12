option = {
		title: {
			show: false,
			left: '50%',
			top: '50%',
			textAlign: 'center',
			textStyle: {
				color: "#FFF",
				fontSize: 14,
			}
		},
		grid: {
			show: false,
			left: '0%',
			right: '0%',
			bottom: '0%',
			top: '0%',
			height: '100%',
			borderWidth: 0,
		},
		xAxis: {
			show: false,
			type: 'category',
			data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日'],
			boundaryGap: false,
			splitLine: {
				show: false,
			},
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#aaaaaa'
				}
			},
			axisLabel: {

				color: 'rgb(170,170,170)',
				textStyle: {
					fontSize: 14
				}
			}
		},
		yAxis: {
			show: false,
			type: 'value',

		},
		series: [{
			name: '+10.5',
			type: 'line',
			smooth: true,
			showSymbol: false,
			symbol: 'circle',
			symbolSize: 6,
			data: ['60', '58', '50', '60', '52', '52', '65', '69', '60', '68', '65', '78', '72', '85', '88'],
			markPoint: { // markLine 也是同理
				symbolSize: [10, 12],
				data: [{
					name: '标注',
					y: '60%',
					x: '70%'
				}],
				label: {
					show: true,
					position: 'left',
					color: '#FFF',
					formatter: '-9.71%'
				}
			},
			areaStyle: {
				normal: {

					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 1,
						y2: 0,
						colorStops: [{
							offset: 0,
							color: ['rgba(229, 114, 147,0.2)'] // 0% 处的颜色
						}, {
							offset: 1,
							color: ['rgba(255,79,134,0.6)'] // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					}
				}
			},
			itemStyle: {
				normal: {
					color: '#2deb75'
				}
			},
			lineStyle: {
				normal: {
					width: 1
				}
			}
		},{
			name: '+9.5',
			type: 'line',
			smooth: true,
			showSymbol: false,
			symbol: 'circle',
			symbolSize: 6,
			data: ['20', '18', '20', '20', '22', '22', '25', '29', '20', '28', '25', '38', '32', '45', '48'],
			markPoint: { // markLine 也是同理
				symbolSize: [10, 12],
				data: [{
					name: '标注',
					y: '86%',
					x: '70%'
				}],
				label: {
					show: true,
					position: 'left',
					color: '#FFF',
					formatter: '-8.71%'
				}
			},
			areaStyle: {
				normal: {

					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 1,
						y2: 0,
						colorStops: [{
							offset: 0,
							color: ['rgba(53,106,155)'] // 0% 处的颜色
						}, {
							offset: 1,
							color: ['rgba(52,94,153)'] // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					}
				}
			},
			itemStyle: {
				normal: {
					color: '#2deb75'
				}
			},
			lineStyle: {
				normal: {
					width: 1
				}
			}
		}]
	};