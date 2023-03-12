option = {
			legend: [{
				show: true,
				data: ['2019'],
				textStyle: {
					fontFamily: 'Open Sans',
					color: '#33363b',
					fontSize: 13,
				},
				orient: 'horizontal',
				right: '38%',
				bottom: '1%',
				icon: "rect",
				itemWidth: 8,
				itemHeight: 8,
			}, {
				show: true,
				data: ['2018'],
				textStyle: {
					fontFamily: 'Open Sans',
					color: '#33363b',
					fontSize: 13,
				},
				orient: 'horizontal',
				left: '38%',
				bottom: '1%',
				icon: "rect",
				itemWidth: 8,
				itemHeight: 8,
			}],
			grid: {
				top: 10,
				bottom: 60
			},
			tooltip: {
				trigger: 'axis',
			},
			xAxis: {
				type: 'category',
				data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				axisLine: {
					show: true,
					lineStyle: {
						color: "#e8e8e8",
						width: 1,
						type: "dashed"
					},
				},
				axisLabel: {
					textStyle: {
						fontFamily: 'Microsoft YaHei',
						color: '#33363b', //X轴标注文字的颜色,
						fontSize: 13, //X轴标注文字的大小
					},
				},
				axisTick: {
					show: false,
					alignWithLabel: true
				},
			},
			yAxis: {
				type: 'value',
				axisTick: {
					show: false,
				},
				axisLine: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						fontFamily: 'Open Sans',
						color: '#868d9b', //X轴标注文字的颜色,
						fontSize: 14, //X轴标注文字的大小
					},
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: "#e8e8e8",
						width: 1,
						type: "dashed",
					},
				},
			},
			series: [{
					name: '2018',
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 8,
					itemStyle: {
						normal: {
							color: '#1699c2',
						}
					},
					data: [5, 7, 8, 9, 10, 12, 15, 17, 9, 7, 4, 3],
				},
				{
					name: '2019',
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 8,
					itemStyle: {
						normal: {
							color: '#ecab3e',
						}
					},
					data: [3, 4, 5, 7, 8, 9, 10, 15, 7]
				},
			]
		};
