let num2 = 79
let obj = 89-(100-num2-0.6)*3.6  //  仪表盘结束角度
option = {
    backgroundColor: '#010e47',
             	series: [
             		// 数据
             		 {
            type: 'gauge',
            radius: '82%',
            clockwise: true,
            startAngle: '89',
            endAngle: obj,
            // splitNumber: 25,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#2CFAFC'],
                        [1, '#17d486']
                    ],
                    width: 16
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                length: 32,
                lineStyle: {
                    color: '#051F54',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            }
        },
         {
            type: 'gauge',
            radius: '77%',
            clockwise: true,
            startAngle: '89',
            endAngle: obj,
            // splitNumber: 25,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#2CFAFC'],
                        [1, '#134966']
                    ],
                    width: 24
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                length: 32,
                lineStyle: {
                    color: '#051F54',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            }
        },
             		{
             			type: 'pie',
             			radius: ['76%', '82%'],
             			center: ['50%', '50%'],
             			data: [{
             					label: {
             						show: false
             					},
             					labelLine: {
             						normal: {
             							smooth: true,
             							lineStyle: {
             								width: 0
             							}
             						}
             					},
             					value: 100 - num2,
             					hoverAnimation: false,
             					itemStyle: {
             						 color: 'rgba(251, 200, 79, 0)'
             					}
             				},
             				{
             					hoverOffset: 1,
             					value: num2,
             					itemStyle: {
             						color: '#f9d000'
             					},
             					label: {
             						show: false
             					},
             					labelLine: {
             						normal: {
             							smooth: true,
             							lineStyle: {
             								width: 0
             							}
             						}
             					},
             					hoverAnimation: false
             				}
             			]
             		},
             		{
             			// 外阴影
             			type: 'pie',
             			radius: ['82%', '90%'],
             			center: ['50%', '50%'],
             			data: [{
             				label: {
             					show: false
             				},
             				labelLine: {
             					normal: {
             						smooth: true,
             						lineStyle: {
             							width: 0
             						}
             					}
             				},
             				value: 100 - num2,
             				hoverAnimation: false,
             				itemStyle: {
             					color: '#233063'
             				}
             			}]
             		},
             		{
             			// 内阴影
             			type: 'pie',
             			radius: ['68%', '76%'],
             			center: ['50%', '50%'],
             			data: [{
             				label: {
             					show: false
             				},
             				labelLine: {
             					normal: {
             						smooth: true,
             						lineStyle: {
             							width: 0
             						}
             					}
             				},
             				value: 100-num2,
             				hoverAnimation: false,
             				itemStyle: {
             					 color: 'rgba(251, 200, 79, 0)'
             				}
             			},
             			{
             					hoverOffset: 1,
             					value: num2,
             					itemStyle: {
             						color: '#454849'
             					},
             					label: {
             						show: false
             					},
             					labelLine: {
             						normal: {
             							smooth: true,
             							lineStyle: {
             								width: 0
             							}
             						}
             					},
             					hoverAnimation: false
             				}]
             		}
             	]
}