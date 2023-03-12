var lightBlue = {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: '#23CABB' // 0% 处的颜色  rgba(248,220,71)
					}, {
						offset: 1,
						color: '#85FB85' // 100% 处的颜色rgba(52, 68, 101,0.5)
					}],
					globalCoord: false // 缺省为 false
				};
				var lightBlue1 = {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: '#7681F7' //
					}, {
						offset: 1,
						color: '#1EB5E3' // 100% 处的颜色rgba(52, 68, 101,0.5)
					}],
					globalCoord: false // 缺省为 false
				};
				var lightBlue2 = {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: '#ce377d' // 0% 处的颜色  rgba(248,220,71)
					}, {
						offset: 1,
						color: '#ff8656' // 100% 处的颜色rgba(52, 68, 101,0.5)
					}],
					globalCoord: false // 缺省为 false
				};

            option = {
                    backgroundColor:'#777',
                    title: {
						//						top: '18%',
						left: '1%',
						textStyle: {
							color: '#fff',
							fontWeight: 'normal',
						}

					},
					tooltip: {
						trigger: 'item',
						formatter: '{c}%'
					},
					series: [{
							type: 'pie',
							radius: ['40%', '37%'],
							center: ["18%", "35%"],
							hoverAnimation: false,
							label: {
								normal: {
									position: 'center'
								}
							},
							data: [{
									value: 15,
									//									name: '电',
									itemStyle: {
										normal: {
											color: lightBlue,
										},

									},
									label: {
										normal: {
											// formatter: '{d} %',
											textStyle: {
												fontSize: 14,
												color: '#fff',
											}
										}
									}
								},
								{
									value: 85,
									name: '',
									tooltip: {
										show: false
									},
									itemStyle: {
										normal: {
											color: '#163455',
										}
									},
									label: {
										normal: {
											formatter: 68,
											textStyle: {
												fontSize: 25,
												color: '#fff',
												fontFamily: 'Aerolinea',
											}
										},

									}
								}
							]
						},
						{
							type: 'pie',
							radius: ['40%', '37%'],
							center: ["50%", "35%"],
							hoverAnimation: false,
							label: {
								normal: {
									position: 'center'
								}
							},
							data: [{
									value: 25,
									//									name: '水',
									itemStyle: {
										normal: {
											color: lightBlue1,
										}
									},
									label: {
										normal: {
											// formatter: '{d} %',
											textStyle: {
												fontSize: 14,
												color: '#fff',
											}
										}
									}
								},
								{
									value: 75,
									name: '',
									tooltip: {
										show: false
									},
									itemStyle: {
										normal: {
											color: '#163455',
										},
										emphasis:{
            							    color: '#BFC5C9',//鼠标移动时显示的颜色
            							},
									},
									textStyle: {
										fontSize: 25,
										color: '#fff',
										fontFamily: 'Aerolinea',
										itemGap: 10
									},
									label: {
										normal: {
											formatter: 71,
											textStyle: {
												fontSize: 25,
												color: '#fff',
												fontFamily: 'Aerolinea',
												itemGap: 10
											}
										},

									}
								},

							]
						},
						{
							type: 'pie',
							radius: ['40%', '37%'],
							center: ["81%", "35%"],
							hoverAnimation: false,
							label: {
								normal: {
									position: 'center'
								}
							},
							data: [{
									value: 23,
									//									name: '天然气',
									itemStyle: {
										normal: {
											color: lightBlue2,
										}
									},
									label: {
										normal: {
											// formatter: '{d} %',
											textStyle: {
												fontSize: 14,
												color: '#fff',
											}
										}
									}
								},
								{
									value: 77,
									name: '',
									tooltip: {
										show: false
									},
									itemStyle: {
										normal: {
											color: '#163455',

										}
									},
									label: {
										normal: {
											formatter: 23,
											textStyle: {
												fontSize: 25,
												color: '#fff',
												fontFamily: 'Aerolinea',
											}
										},

									}
								},

							]
						}
					]
}