var years = ['药械', '食品', '特种设备'];
	var jdData = [
		['相 如', '锦 屏', '巨 龙', '徐 家', '金 溪', '河 舒', '兴 旺', '罗 家', '利 溪', '正 源', '龙 云', '龙 蚕', '杨 家', '福 德', '银 汉', '其  它', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010'],
		['相 如', '锦 屏', '巨 龙', '徐 家', '金 溪', '河 舒', '兴 旺', '罗 家', '利 溪', '正 源', '龙 云', '龙 蚕', '杨 家', '福 德', '银 汉', '其  它', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010'],
		['相 如', '锦 屏', '巨 龙', '徐 家', '金 溪', '河 舒', '兴 旺', '罗 家', '利 溪', '正 源', '龙 云', '龙 蚕', '杨 家', '福 德', '银 汉', '其  它', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010'],
	]
	var data = [
		[13.2, 1.11, 13.6, 9284, 64138, 2237, 4779, 48877, 2371, 36224, 12956, 2499, 4778, 594, 16487, '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010'],
		[15.26, 1.31, 16.68, 10331, 91580, 1909, 40469, 67490, 1765, 36982, 15371, 3643, 2871, 762, 34414, '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010'],
		[14.23, 1.31, 21.13, 10873, 94964, 2966, 129748, 59827, 8519, 38344, 18495, 3531, 1369, 544, 33855, '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '11', '22', '33', '44', '55', '66', '77', '88', '99', '1010'],
	];

	option = {

		baseOption: {
			timeline: {
				data: years,
				axisType: 'category',
				autoPlay: true,
				playInterval: 5000,
				left: '10%',
				right: '10%',
				bottom: '0%',
				width: '80%',
				//  height: null,
				label: {
					normal: {
						textStyle: {
							color: '#00d6fd',
						}
					},
					emphasis: {
						textStyle: {
							color: '#fff'
						}
					}
				},
				symbolSize: 10,
				lineStyle: {
					color: 'rgba(30, 53, 113, 0.75)'
				},
				checkpointStyle: {
					borderColor: '#777',
					borderWidth: 2
				},
				controlStyle: {
					showNextBtn: true,
					showPrevBtn: true,
					normal: {
						color: '#00d6fd',
						borderColor: '#00d6fd'
					},
					emphasis: {
						color: '#aaa',
						borderColor: '#aaa'
					}
				},

			},
			title: {
				text: '',
				right: '2%',
				bottom: '8%',
				textStyle: {
					fontSize: 50,
					color: '#00d6fd'
				}
			},
			tooltip: {
				'trigger': 'axis'
			},
			calculable: true,
			grid: {
				left: '8%',
				right: '2%',
				bottom: '6%',
				top: '0%',
				containLabel: true
			},
			label: {
				normal: {
					textStyle: {
						color: '#fff'
					}
				}
			},
			yAxis: [{
				offset: '37',
				'type': 'category',
				data: '',
				nameTextStyle: {
					color: '#00d6fd'
				},
				axisLabel: {
					//rotate:45,
					textStyle: {
						fontSize: 12,
						color: '#00d6fd',
					},
					interval: 0
				},
				axisLine: {

					lineStyle: {
						color: '#00d6fd'
					},
				},
				//设置网格线颜色
				splitLine: {
					show: false,
					lineStyle: {
						color: ['#0b244c'],
						width: 1,
						type: 'solid'
					}
				}

			}],
			xAxis: [{
				'type': 'value',
				'name': '',

				splitNumber: 8,
				nameTextStyle: {
					color: '#00d6fd'
				},
				axisLine: {
					lineStyle: {
						color: '#00d6fd'
					}
				},
				axisLabel: {
					formatter: '{value} '
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#0b244c'],
						width: 1,
						type: 'solid'
					}
				},
			}],
						"dataZoom": [{
							"show": true,
							"width": 12,
							"yAxisIndex": [
								0
							],
							left: '8%',
							"start": 0,
							"end": 50,
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
							"end": 50
						}],
//			dataZoom: [{ //Y轴固定,让内容滚动
//					type: 'slider',
//					show: false,
//					xAxisIndex: [0],
//					start: 1,
//					end: 80, //设置X轴刻度之间的间隔(根据数据量来调整)
//					zoomLock: false, //锁定区域禁止缩放(鼠标滚动会缩放,所以禁止)
//				},
//				{
//					type: 'inside',
//					xAxisIndex: [0],
//					start: 1,
//					end: 80,
//					zoomLock: false, //锁定区域禁止缩放
//				}
//			],
			animation: true,
			series: [{
				'name': '',
				'type': 'bar',
				markLine: {
					label: {
						normal: {
							show: false
						}
					},
					lineStyle: {
						normal: {
							color: 'red',
							width: 3
						}
					},
				},
				barWidth: '10',
				label: {
					normal: {
						show: true,
						position: 'inside',
						formatter: '{c}'
					}
				},
				itemStyle: {
					normal: {
						color: function(params) {
							// build a color map as your need.
							var colorList = [
								'#8d7fec', '#5085f2', '#e75fc3', '#f87be2',
								'#f2719a', '#fca4bb', '#f59a8f', '#fdb301',
								'#57e7ec', '#cf9ef1', '#57e7ec', '#cf9ef1',
								'#9966cc', '#bdb76a', '#eee8ab', '#a35015',
								'#04dd98', '#d9b3e6', '#b6c3fc', '#315dbc',
							];
							return colorList[params.dataIndex]
						},

					}
				},
			}],
			animationDurationUpdate: 2000,
			animationEasingUpdate: 'quinticInOut'
		},
		options: []
	};
	for(var n = 0; n < years.length; n++) {

		var res = [];
		//alert(jdData.length);
		for(j = 0; j < data[n].length; j++) {
			res.push({
				name: jdData[n][j],
				value: data[n][j]
			});

		}

		res.sort(function(a, b) {
			return b.value - a.value;
		}).slice(0, 6);

		res.sort(function(a, b) {
			return a.value - b.value;
		});
		var res1 = [];
		var res2 = [];
		//console.log(res);
		for(t = 0; t < res.length; t++) {
			res1[t] = res[t].name;
			res2[t] = res[t].value;
		}
		console.log(res1);
		console.log("----------------");
		console.log(jdData[n]);
		option.options.push({
			title: {
				text: years[n]
			},
			yAxis: {
				data: res1,
			},
			series: [{
				data: res2
			}]
		});
	}