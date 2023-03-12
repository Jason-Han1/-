option = {
   backgroundColor:'#000',
   title: {
						text: '本日科室用电量TOP5',
						textStyle: {
							color: '#fff',
							fontSize: 18,
							fontWeight: 'normal',
						}

					},

					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						},
						formatter: "{b} : {c}kw.h"
					},
					legend: {},
					grid: {
						left: '5%',
						right: '4%',
						top: '12%',
						bottom: '5%',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.01],
						axisTick: {
							show: false
						},
						axisLine: {
							show: false
						},
						axisLabel: {
							/*  textStyle: {
							      color: '#588CBE',
							      fontWeight: 'bolder',
							      fontSize: 10
							  },
							  margin: 8,
							  rotate: 18*/
							show: false
						},
						splitLine: {
							show: false
						}
					},
					yAxis: {
						type: 'category',
						axisLabel: {
							// formatter: '{value}%',
							textStyle: {
								color: '#ffffff',
								// fontSize:9,

							}
						},
						//  改变x轴颜色
						axisLine: {
							show: false
						},
						axisTick: {
							show: false,
						},
						lineStyle: {

							// 使用深浅的间隔色
							color: ['#3f0'],
							width: 4,
							type: 'solid'
						},
						data: ['信息中心', '影像中心 ', '综合检查室', '检验科', '消毒供应室', ]
					},
					series: [{
						// name: '设备',
						type: 'bar',
						barWidth: '28%',
						data: [124,244,155,277,66],
						label: {
                            normal: {
                              show: true,
                              position: 'right',
                              formatter: '{c}',
                              textStyle: {
                                color: 'white' //右侧的数字
                              }
                            }
                          },
						itemStyle: {
									normal: {
										barBorderRadius: [0, 0, 0, 0],
								// 		color: '#fdb330',
		 								color: function(params) {
		 									if(params.dataIndex % 2 === 0) {
		 										return '#4BF3FF'
		 									} else {
		 										return '#F8406A'
		 									}
		 								},
									}
								},

					}],
					dataZoom: [
                        {
                            type: 'slider',
                            show: true,
                            yAxisIndex: [0],
                            left: '93%',
                            // start:100,
                            // end: 70
                            startValue:4,
                            endValue:3,
                            zoomLock:true
                        }
                    ],
};