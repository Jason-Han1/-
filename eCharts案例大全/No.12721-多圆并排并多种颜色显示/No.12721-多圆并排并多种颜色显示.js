var circleRadius = ['8%','12%'];
var centers = [['10%','28%'],['36%','28%'],['62%','28%'],['10%','59%'],['36%','59%'],['62%','59%']]
			titleTextObject = {
						color: '#fff',
						rich: { //富文本
							white: {
								color: '#fff',
								fontSize: 12,
								padding:[12,0,0,4]
							},
							newyellow: {
								color: '#f9f48e',
								fontSize: 12,
								padding:[8,0,0,4]
							},
							newgreen:{
								color: '#51ebb3',
								fontSize: 12,
								padding:[8,0,0,4]
							}
						},
				};
				labelTextObject = {
							normal: {
								formatter: function(params, i) {
									return params.percent.toFixed(1)+"%";
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: 12,
									fontWeight: 'bold',
									color: '#fff'
								}
							}
						}
			option = {
			    grid:{
			        left:'13%',
			        right:"13%",
			        bottom:"10%",
			        top:"20%",
			    },
			    backgroundColor:"#015c8a",
				title: [{
					text: '{newgreen| CPU(核)\n}{newgreen|已分配 | 总数}{white|\n13500 | 25600}',
					left: '17%',
					top: '25%',
					textAlign: 'left',
					textStyle: titleTextObject
				}, {
					text: '{newgreen| 存储(T)\n}{newgreen|已分配 | 总数  |总容量}{white|\n1920 | 1348 | 2048}',
					left: '42%',
					top: '25%',
					textAlign: 'left',
					textStyle: titleTextObject
				}, {
					text: '{newgreen| 公网IP地址(个)\n}{newgreen|已分配 | 总数}{white|\n600 | 1016}',
					left: '68%',
					top: '25%',
					textAlign: 'left',
					textStyle: titleTextObject
				},{
					text: '{newyellow| 内存(G)\n}{newyellow|已分配 | 总数}{white|\n10240 | 22400}',
					left: '17%',
					top: '56%',
					textAlign: 'left',
					textStyle: titleTextObject
				}, {
					text: '{newyellow| 文件存储(T)\n}{newyellow|已分配 | 总数}{white|\n13500  |  25600}',
					left: '42%',
					top: '56%',
					textAlign: 'left',
					textStyle: titleTextObject
				}, {
					text: '{newyellow|出口带宽流量(Gb)\n}{newyellow|当前使用 | 总带宽}{white|\n12.6  |  60}',
					left: '68%',
					top: '56%',
					textAlign: 'left',
					textStyle: titleTextObject
				}],
				series: [{
					name: '正常',
					center: centers[0],
					radius: circleRadius,
					type: 'pie',
					labelLine: {
						normal: {
							show: false
						}
					},
					hoverAnimation: false,
					data: [{
						itemStyle: {
							normal: {
								color: '#51ebb3'
							}
						},
						value: 13500,
						label: labelTextObject
					}, {
						value: 12100,
						itemStyle: {
							normal: {
								color: '#01547e'
							}
						}
					}]
				}, {
					center: centers[1],
					radius: circleRadius,
					type: 'pie',
					labelLine: {
						normal: {
							show: false
						}
					},
					hoverAnimation: false,
					data: [{
						itemStyle: {
							normal: {
								color: '#51ebb3'
							}
						},
						value: 1920,
						label: labelTextObject
					}, {
						value: 128,
						itemStyle: {
							normal: {
								color: '#01547e'
							}
						}
					}]
				},{
					center: centers[2],
					radius: circleRadius,
					type: 'pie',
					labelLine: {
						normal: {
							show: false
						}
					},
					hoverAnimation: false,
					data: [{
						value: 600,
						itemStyle: {
							normal: {
								color: '#51ebb3'
							}
						},
						label: labelTextObject
					}, {
						value: 416,
						itemStyle: {
							normal: {
								color: '#01547e'
							}
						}
					}]
				},{
					center: centers[3],
					radius: circleRadius,
					type: 'pie',
					labelLine: {
						normal: {
							show: false
						}
					},
					hoverAnimation: false,
					data: [{
						value: 10240,
						itemStyle: {
							normal: {
								color: '#f9f48e'
							}
						},
						label: labelTextObject
					}, {
						value: 12160,
						itemStyle: {
							normal: {
								color: '#01547e'
							}
						},
					}]
				},{
					center: centers[4],
					radius: circleRadius,
					type: 'pie',
					labelLine: {
						normal: {
							show: false
						}
					},
					hoverAnimation: false,
					data: [{
						value: 480,
						itemStyle: {
							normal: {
								color: '#f9f48e'
							}
						},
						label: labelTextObject
					}, {
						value: 720,
						itemStyle: {
							normal: {
								color: '#01547e'
							}
						}
					}]
				},{
					center: centers[5],
					radius: circleRadius,
					type: 'pie',
					labelLine: {
						normal: {
							show: false
						}
					},
					hoverAnimation: false,
					data: [{
						value: 12.6,
						itemStyle: {
							normal: {
								color: '#f9f48e'
							}
						},
						label: labelTextObject
					}, {
						value: 47.4,
						itemStyle: {
							normal: {
								color: '#01547e'
							}
						}
					}]
				}]

			};
