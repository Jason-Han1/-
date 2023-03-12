
		xAxis_data = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
		series_data1 = [400, 400, 300, 300, 300, 400, 400, 400, 300];
		series_data2 = [400, 500, 500, 500, 500, 400, 400, 500, 500];
		series_data3 = [400, 600, 700, 700, 1000, 400, 400, 600, 700];
		
	var option = {
		//   backgroundColor:'#323a5e',
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '2%',
			right: '4%',
			bottom: '14%',
			top: '16%',
			containLabel: true
		},
		legend: {
			data: ['采购', '销售', '库存'],
			// x: 'right',
			y: '12px',
			right: '30px',
			//			left: 10,
			//			top: 12,
			textStyle: {
				color: "#fff"
			},
			itemWidth: 12,
			itemHeight: 10,
			// itemGap: 35
		},
		xAxis: {
			type: 'category',
			data: xAxis_data,
			axisLine: {
				lineStyle: {
					color: '#00d6fd'

				}
			},
			axisLabel: {
				// interval: 0,
				// rotate: 40,
				textStyle: {
					fontFamily: 'Microsoft YaHei'
				}
			},
		},

		yAxis: {
			type: 'value',
			// max: '1200',
			axisLine: {
				show: false,
				lineStyle: {
					color: '#00d6fd'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#0b244c'],
					width: 1,
					type: 'dashed'
				}
			},
			axisLabel: {}
		},
		"dataZoom": [{
			"show": true,
			"height": 12,
			"xAxisIndex": [
				0
			],
			bottom: '8%',
			"start": 10,
			"end": 90,
			handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
			handleSize: '110%',
			handleStyle: {
				color: "#d3dee5",

			},
			textStyle: {
				color: "#fff"
			},
			borderColor: "#90979c"
		}, {
			"type": "inside",
			"show": true,
			"height": 15,
			"start": 1,
			"end": 35
		}],
		animation: true,
		series: [{
				name: '采购',
				type: 'bar',
				barWidth: 15, //柱图宽度
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#00d88b'
						}, {
							offset: 1,
							color: '#147065'
						}]),
						//						barBorderRadius: 11,
					}
				},
				data: series_data1
			},
			{
				name: '销售',
				type: 'bar',
				barWidth: '15%',
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#f7672e'
						}, {
							offset: 1,
							color: '#733735'
						}]),
						//						barBorderRadius: 0,
					}
				},
				data: series_data2
			},
			{
				name: '库存',
				type: 'bar',
				barWidth: '15%',
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#319ffd'
						}, {
							offset: 1,
							color: '#1c4b8e'
						}]),
						//						barBorderRadius: 11,
					}
				},
				data: series_data3
			}
		]
	};

	var app = {
		currentIndex: -1,
	};
	//	setInterval(function() {
	//		var dataLen = option.series[0].data.length;
	//
	//		// 取消之前高亮的图形
	//		myChart.dispatchAction({
	//			type: 'downplay',
	//			seriesIndex: 0,
	//			dataIndex: app.currentIndex
	//		});
	//		app.currentIndex = (app.currentIndex + 1) % dataLen;
	//		//console.log(app.currentIndex);
	//		// 高亮当前图形
	//		myChart.dispatchAction({
	//			type: 'highlight',
	//			seriesIndex: 0,
	//			dataIndex: app.currentIndex,
	//		});
	//		// 显示 tooltip
	//		myChart.dispatchAction({
	//			type: 'showTip',
	//			seriesIndex: 0,
	//			dataIndex: app.currentIndex
	//		});
	//
	//	}, 2000);