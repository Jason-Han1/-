option = {
   radius: '80%',
					    series: [{
							name: '业务指标',
							type: 'gauge',
							startAngle: 210,
							endAngle: -30,
							min: 0,
							max: 1,
							splitNumber: 1000,
							borderRadius: '10px',
							roundCap: true,
							radius: '60%',   // 可调整该属性修改圆环大小
							center: ["50%", "50%"],
							progress: {
								show: true,
								width: 50,
								
								itemStyle: {
									opacity: 1,
									color: new echarts.graphic.LinearGradient(
									  0, 0, 1, 0,
									  [{
									    offset: 0,
									    color: 'rgba(100,200,228,1)'
									  },
									  {
									    offset: .5,
									    color: 'rgba(48,62,245,1)'
									  },
									  {
									    offset: 1,
									    color: 'rgba(48,62,245,1)'
									  }]
									)
								}
							},
							itemStyle: {
							            color: '#58D9F9',
							            shadowColor: 'rgba(0,138,255,0.45)',
							            shadowBlur: 10,
							            shadowOffsetX: 2,
							            shadowOffsetY: 2
							        },
							axisLine: {
								  // roundCap: true,
								lineStyle: {
									
					                width: 50,
					                color: [
					                    [0.2, 
											{
												type: 'linear',
												x: 0.5,
												y: 0.5,
												r: 0.5,
												colorStops: [{
														offset: 0, color: '#F5F5F5' // 0% 处的颜色
												}, {
														offset: 1, color: '#DADADC' // 100% 处的颜色
												}],
												globalCoord: false // 缺省为 false
											}
					                    ],
					                    [0.4,  {
					                     type: 'linear',
					                     x: 0.5,
					                     y: 0.5,
					                     r: 0.5,
					                     colorStops: [{
					                             offset: 0, color: '#F5F5F5' // 0% 处的颜色
					                             }, {
					                                     offset: 1, color: '#DADADC' // 100% 处的颜色
					                             }],
					                             globalCoord: false // 缺省为 false
					                    }],
					                    [0.6,  {
					                            type: 'linear',
					                            x: 0.5,
					                            y: 0.5,
					                            r: 0.5,
					                            colorStops: [{
					                                    offset: 0, color: '#F5F5F5' // 0% 处的颜色
					                            }, {
					                                    offset: 1, color: '#DADADC' // 100% 处的颜色
					                            }],
					                            globalCoord: false // 缺省为 false
					                    }],
					                    [0.8,  {
					                            type: 'linear',
					                            x: 0.5,
					                            y: 0.5,
					                            r: 0.5,
					                            colorStops: [{
					                                    offset: 0, color: '#F5F5F5' // 0% 处的颜色
					                            }, {
					                                    offset: 1, color: '#DADADC' // 100% 处的颜色
					                            }],
					                            globalCoord: false // 缺省为 false
					                    }],
					                    [1,  {
					                            type: 'linear',
					                            x: 0.5,
					                            y: 0.5,
					                            r: 0.5,
					                            colorStops: [{
					                                    offset: 0, color: '#F5F5F5' // 0% 处的颜色
					                            }, {
					                                    offset: 1, color: '#DADADC' // 100% 处的颜色
					                            }],
					                            globalCoord: false // 缺省为 false
					                    }]
					                ]
					            }
							},
					         pointer: {
					                 width: 0,
					         },
					         axisTick: {
					                 length: 12,
					                 lineStyle: {
					                         color: 'auto',
					                         width: 0
					                 }
					         },
					          splitLine: {
									length: 20,
									lineStyle: {
											color: 'auto',
											width: 0
											
									}
					          },
					          axisLabel: {
					                  color: '#464646',
					                  fontSize: 20,
					                  distance: -60,
									  fontFamily: 'Source Han Sans SC',
					                  formatter: function (value) {
					                         
					                  }
					          },
					          title: {
					                  offsetCenter: [0, '-30%'],
					                  fontSize: 40,
									  fontFamily: 'DIN Alternate',
									  color: '#1678FF'
					          },
					          detail: {
					                    fontSize: 60,
								  fontFamily: 'DIN Alternate',
					                    offsetCenter: [0, '15%'],
					                    valueAnimation: true,
					                    formatter: function (value) {
					                            return Math.round(value * 1000);
					                    },
					                    
					                    color: '#1678FF'
					            },
					            data: [{
					                    value: 0.735,
					                    name: '芝麻分'
					            }]
					          }]
};
