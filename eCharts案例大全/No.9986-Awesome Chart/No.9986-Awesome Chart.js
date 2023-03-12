var labelData = [];
				for (var i = 0; i < 100; ++i) {
					labelData.push({
						value: 1,
					});
					if(i < 18){
					    labelData[i].itemStyle = {
							normal: {
								color: 'rgba(0,0,0,0)',
								borderColor: 'rgba(0,0,0,0)',
								borderWidth: 3,
							}
						}
					}else if(i < 55){
					    labelData[i].itemStyle = {
							normal: {
								color: '#00FF99',
								borderColor: '#021311',
								borderWidth: 3,
							}
						}
					}else if(i < 70){
					    labelData[i].itemStyle = {
							normal: {
								color: 'rgba(0,0,0,0)',
								borderColor: 'rgba(0,0,0,0)',
								borderWidth: 3,
							}
						}
					}
				}

				option = {
					//              title: {
					//                  text: '地区GDP',
					//                  left: '30%',
					//                  top: '45%',
					//                  textStyle: {
					//                      color: '#fff',
					//                      fontSize: 38,
					//                  },
					//              },
					tooltip: {
						show: false,
					},
					series: [{
						type: 'pie',
						hoverAnimation: false,
						clockwise: false,
						startAngle: 0,
						data: labelData,
						center: ['50%', '50%'],
						radius: ['58%', '72%'],
						itemStyle: {
							normal: {
								color: '#00FF99',
								borderColor: 'rgba(0,0,0,1)',
								borderWidth: 3,
							}
						},
						labelLine: {
							normal: {
								show: false,
							}
						},
					}, {
						type: 'pie',
						hoverAnimation: false,
						avoidLabelOverlap: true,
						clockwise: false,
						startAngle: 0,
						data: [1],
						center: ['50%', '50%'],
						radius: ['56%', '56.7%'],
						label: {
							normal: {
								show: false,
								textStyle: {
									color: '#fff',
									fontSize: 26,
								},
							},
							emphasis: {
								show: false,
							},
						},
						labelLine: {
							normal: {
								show: false,
							},
						},
					}, {
						type: 'pie',
						hoverAnimation: false,
						avoidLabelOverlap: true,
						clockwise: false,
						startAngle: 0,
						data: [1],
						center: ['50%', '50%'],
						radius: ['74%', '90%'],
						label: {
							normal: {
								show: false,
								textStyle: {
									color: '#fff',
									fontSize: 26,
								},
							},
							emphasis: {
								show: false,
							},
						},
						labelLine: {
							normal: {
								show: false,
							},
						},
					} ],
				};