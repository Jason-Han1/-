	var uploadedDataURL = "https://www.easy-mock.com/mock/5b23695ff3c9fb2931a37f75/example/ruzhou";
 
		$.getJSON(uploadedDataURL, function(geoJson) {
			echarts.registerMap('shanghai', geoJson);
			myChart.hideLoading();
			var geoCoordMap = {
				'汝州市': [112.7275390625,33.95703125],
				 
			}
			var data = [{
				name: '汝州市',
				value: 219
			}];
			var max = 1000,
				min = 0; // todo 
			var maxSize4Pin = 100,
				minSize4Pin = 0;

			var convertData = function(data) {
				var res = [];
				for(var i = 0; i < data.length; i++) {
					var geoCoord = geoCoordMap[data[i].name];
					if(geoCoord) {
						res.push({
							name: data[i].name,
							value: geoCoord.concat(data[i].value)
						});
					}
				}
				return res;
			};

			option = {
				backgroundColor: '#173b84',
				 
				tooltip: {
					trigger: 'item',
					backgroundColor: 'rgba(12, 204, 104, 0.92)',
					borderColor: '#FFFFCC',
					showDelay: 0,
					hideDelay: 0,
					enterable: true,
					transitionDuration: 0,
					extraCssText: 'z-index:100',
					formatter: function(params, ticket, callback) {
						//根据业务自己拓展要显示的内容
						var res = "";
						var name = params.name;
						var value = params.value;
						res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
						return res;
					}
				},
				legend: {
					orient: 'vertical',
					top: 'top',
					left: 'right',
					data: ['credit_pm2.5'],
					textStyle: {
						color: '#fff'
					}
				},
				visualMap: {
					show: true,
					min: 0,
					max: 1000,
					left: 'left',
					top: 'bottom',
					text: ['高', '低'], // 文本，默认为数值文本
					calculable: true,
					seriesIndex: [1],
					dimension: 0,
					inRange: {
						color: ['#9074c3', '#4487d5', '#7e9e8e', '#51a2c2'] // 随机区域颜色

					},
					textStyle: {
						color: '#fff'
					}
				},
				geo: {
					map: 'shanghai',
					label: {
						emphasis: {
							show: false
						}
					},
					roam: true, //是否允许缩放
					layoutCenter: ['50%', '50%'], //地图位置
					layoutSize: "80%",
					itemStyle: {
						borderColor: '#173b84'
					},
					emphasis: {
						itemStyle: {
							areaColor: '#f9d24d' // 经过颜色
						}
					}
				},
				series: [{
					name: 'credit_pm2.5',
					type: 'scatter',
					coordinateSystem: 'geo',
					data: convertData(data),
					symbolSize: function(val) {
						return val[2] / 30;
					},
					label: {
						normal: {
							formatter: '{b}',
							position: 'bottom',
							color: '#000',
							show: true
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#05C3F9'
						}
					}
				}, {
					type: 'map',
					map: 'shanghai',
					geoIndex: 0,
					aspectScale: 0.75, //长宽比
					showLegendSymbol: false, // 存在legend时显示
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: false,
							textStyle: {
								color: '#fff'
							}
						}
					},
					roam: true,
					itemStyle: {
						normal: {
							areaColor: '#031525',
							borderColor: '#3B5077',
						},
						emphasis: {
							areaColor: '#2B91B7'
						}
					},
					animation: false,
					data: data
				}]
			};
			myChart.setOption(option);

		});
	