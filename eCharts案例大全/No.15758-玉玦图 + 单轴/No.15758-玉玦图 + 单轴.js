	// 第6区域图表
	var dataStyle = {
		normal: {
			label: {
				show: false
			},
			labelLine: {
				show: false
			},
			shadowBlur: 40,
			shadowColor: 'rgba(40, 40, 40, 0.3)',
		}
	};
	var piePlaceHolderStyle = {
		normal: {
			color: 'rgba(0,0,0,0)',
			label: {
				show: false
			},
			labelLine: {
				show: false
			},
			opacity: 0
		},
		emphasis: {
			color: 'rgba(0,0,0,0)',
			opacity: 0
		}
	};
	var colorArr1 = ['#33b565', '#20cc98', '#20b9cf', '#2089cf', '#205bcf'];

	var dataPie1 = ['1万以上', '1-5万', '5-10万', '10-50万', '50万以上'];

	var pieCenter = ['30%', '50%'];

	var option = {
		backgroundColor: 'transparent',
		color: colorArr1,
		tooltip: {
			show: false
		},
		grid: {
			containLabel: true
		},
		legend: {
			itemGap: 23,
			itemWidth: 12,
			itemHeight: 12,
			top: 345,
			left: 60,
			data: dataPie1,
			textStyle: {
				color: '#828794'
			},
		},
		singleAxis: [{
			type: 'category',
			width: 190,
			height: 10,
			left: 165,
			top: 255,
			axisLine: {
				show: false
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					fontSize: 14,
				},
			},
			axisTick: {
				show: false,
				alignWithLabel: true,
			},
			splitLine: {
				show: false
			},
			data: [{
				value: '20%',
				textStyle: {
					color: colorArr1[4]
				}
			}, {
				value: '30%',
				textStyle: {
					color: colorArr1[3]
				}
			}, {
				value: '15%',
				textStyle: {
					color: colorArr1[2]
				}
			}, {
				value: '15%',
				textStyle: {
					color: colorArr1[1]
				}
			}, {
				value: '30%',
				textStyle: {
					color: colorArr1[0]
				}
			}]
		}],
		series: [{
				singleAxisIndex: 0,
				coordinateSystem: 'singleAxis',
				hoverAnimation: false,
				symbolSize: 0,
				type: 'scatter',
				data: [
					[0],
					[1],
					[2],
					[3],
					[4]
				]
			}, {
				type: 'pie',
				startAngle: 0,
				clockWise: false,
				center: pieCenter,
				radius: [217, 242],
				itemStyle: dataStyle,
				silent: true,
				hoverAnimation: false,
				data: [{
					value: 15,
					name: dataPie1[4],
				}, {
					value: 85,
					itemStyle: piePlaceHolderStyle
				}]
			}, {
				type: 'pie',
				startAngle: 0,
				clockWise: false,
				center: pieCenter,
				radius: [179, 204],
				itemStyle: dataStyle,
				silent: true,
				hoverAnimation: false,
				data: [{
					value: 7.5,
					name: dataPie1[3]
				}, {
					value: 92.5,
					itemStyle: piePlaceHolderStyle
				}]
			}, {
				type: 'pie',
				startAngle: 0,
				clockWise: false,
				center: pieCenter,
				hoverAnimation: false,
				radius: [141, 166],
				itemStyle: dataStyle,
				silent: true,
				data: [{
					value: 7.5,
					name: dataPie1[2]
				}, {
					value: 92.5,
					itemStyle: piePlaceHolderStyle
				}]
			}, {
				type: 'pie',
				startAngle: 0,
				clockWise: false,
				center: pieCenter,
				hoverAnimation: false,
				radius: [103, 128],
				itemStyle: dataStyle,
				silent: true,
				data: [{
					value: 15,
					name: dataPie1[1]
				}, {
					value: 85,
					itemStyle: piePlaceHolderStyle
				}]
			}, {
				type: 'pie',
				startAngle: 0,
				clockWise: false,
				center: pieCenter,
				hoverAnimation: false,
				radius: [65, 90],
				itemStyle: dataStyle,
				silent: true,
				data: [{
					value: 10,
					name: dataPie1[0]
				}, {
					value: 90,
					itemStyle: piePlaceHolderStyle
				}]
			},

		]
	};