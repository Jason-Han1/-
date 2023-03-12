
		
		sxtData=[{
		  "value": 38,"name":"一氧化碳"
		},{
		  "value":32, "name":"二氧化硫" 
		},{
		    "value":30,"name":"其他"
		},{
		    "value":32,"name":"二氧化氮"
		}]
		
					option = {
					   backgroundColor: "#0A2E5D",
						tooltip: {
							trigger: 'item',
							backgroundColor: 'rgba(0,0,0,0.8)',
							formatter: function(params) {
								if (params.name == '二氧化氮') {
									return '<span style="color:rgba(36, 173, 254, 1)">' + params
										.name + " " + '</span>' +
										'<span style="color:rgba(40,242,230,1)">' + params
										.value + '%' + '</span>';
								} else if (params.name == '一氧化碳') {
									return '<span style="color:rgba(36, 173, 254, 1)">' + params
										.name + " " + '</span>' +
										'<span style="color:rgba(255,204,0,1)">' + params
										.value + '%' + '</span>';
								} else if (params.name == '二氧化硫') {
									return '<span style="color:rgba(36, 173, 254, 1)">' + params
										.name + " " + '</span>' +
										'<span style="color:rgba(0,203,255,1)">' + params
										.value + '%' + '</span>';
								} else if (params.name == '其他') {
									return '<span style="color:rgba(36, 173, 254, 1)">' + params
										.name + " " + '</span>' +
										'<span style="color:rgba(255,100,0,1)">' + params
										.value + '%' + '</span>';
								}
							},
						},
						series: [{
								type: 'pie',
								radius: [10, 40],
								center: ['50%', '50%'],
								roseType: 'area',
								avoidLabelOverlap: true,
								clockwise: true,
								labelLine: {
									normal: {
										show: true,
										length: 4,
										length2: 5,
										lineStyle: {
											color: '#d3d3d3'
										},
										align: 'right'
									},
									color: "#000",
									emphasis: {
										show: true
									}
								},
								label: {
									show: false
								},
								data: sxtData,
								z: 10,
								itemStyle: {
									normal: {
										color: function(params) {
											var str = '';
											switch (params.name) {
												case '二氧化氮':
													str = 'rgba(40,242,230,0.2)';
													break;
												case '一氧化碳':
													str = 'rgba(255,204,0,0.2)';
													break;
												case '二氧化硫':
													str = 'rgba(0,203,255,0.2)';
													break;
												case '其他':
													str = 'rgba(255,100,0,0.2)';
													break;
											}
											return str
										}
									}
								},
							},
							{
								type: 'pie',
								radius: [10, 35],
								center: ['50%', '50%'],
								roseType: 'area',
								avoidLabelOverlap: true,
								clockwise: true,
								labelLine: {
									normal: {
										show: true,
										length: 4,
										length2: 7,
										lineStyle: {
											color: '#d3d3d3'
										},
										align: 'right'
									},
									color: "#000",
									emphasis: {
										show: true
									}
								},
								label: {
									position: 'outside',
									formatter: function(params) {
										var str = '';
										switch (params.name) {
											case '二氧化氮':
												str = '{Sunny1|◆}{nameStyle|二氧化氮 }' +
													'{rate1|' + params.value + '%}';
												break;
											case '一氧化碳':
												str = '{Sunny2|◆}{nameStyle|一氧化碳 }' +
													'{rate2|' + params.value + '%}';
												break;
											case '二氧化硫':
												str = '{Sunny3|◆}{nameStyle|二氧化硫 }' +
													'{rate3|' + params.value + '%}';
												break;
											case '其他':
												str = '{Sunny4|◆}{nameStyle|其他 }' +
													'{rate4|' + params.value + '%}';
												break;
										}
										return str
									},
									rich: {
										nameStyle: {
											color: 'rgba(36, 173, 254, 1)',
											align: 'left',
											fontSize: 9,
										},
										Sunny1: {
											height: 12,
											color: 'rgba(40,242,230,1)',
											align: 'left',
										},
										Sunny2: {
											color: 'rgba(255,204,0,1)',
											align: 'left',
											height: 12,
										},
										Sunny3: {
											color: 'rgba(0,203,255,1)',
											align: 'left',
											height: 12,
										},
										Sunny4: {
											color: 'rgba(252, 100, 0, 1)',
											align: 'left',
											height: 12,
										},
										rate1: {
											color: 'rgba(40,242,230,1)',
											align: 'left',
											fontSize: 10,
										},
										rate2: {
											color: 'rgba(255,204,0,1)',
											align: 'left',
											fontSize: 10,
										},
										rate3: {
											color: 'rgba(0,203,255,1)',
											align: 'left',
											fontSize: 10,
										},
										rate4: {
											color: 'rgba(252, 100, 0, 1)',
											align: 'left',
											fontSize: 10,
										}

									}
								},
								data: sxtData,
								z: 23,
								itemStyle: {
									normal: {
										color: function(params) {
											var str = '';
											switch (params.name) {
												case '二氧化氮':
													str = 'rgba(40,242,230,0.2)';
													break;
												case '一氧化碳':
													str = 'rgba(255,204,0,1)';
													break;
												case '二氧化硫':
													str = 'rgba(0,203,255,1)';
													break;
												case '其他':
													str = 'rgba(255,100,0,1)';
													break;
											}
											return str
											// return colorList2[params.dataIndex]
										}
									}
								},
							}
						]
					};