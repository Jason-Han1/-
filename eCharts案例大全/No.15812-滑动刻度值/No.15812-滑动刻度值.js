var uploadedDataURL = "/asset/get/s/data-1479695496245-Skec2C1Gg.png";

option = {
// 		tooltip: {
// 			trigger: 'axis'
// 		},
		grid: {
			show: false,
			zlevel: 0,
			z: 2,
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			width: 'auto',
			height: 'auto'

		},
		tooltip: {
			show: false
		},
		xAxis: {
			type: 'value',
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff'
				}
			},
			max:100,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			},
			z: 10
		},
		yAxis: {
			type: 'category',
			data: ['progress'],
			axisLabel: {
				show: false,
				inside: false,
				textStyle: {
					color: '#fff'
				}
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			},
			z: 10
		},
		series: [
		{
			name: '当前',
			type: 'line',
// 			symbol: 'image://'+uploadedDataURL,
            symbol: 'rect',
			symbolSize: [5,40],
			itemStyle: {
				normal: {
					barBorderRadius: 0,
					shadowBlur: 10,
					shadowColor: '#fff',
					borderColor: '#ccc',
					borderWidth: 2,
					color: '#fff'
				// 	color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
				// 		offset: 0,
				// 		color: '#4C9BB0'
				// 	}, {
				// 		offset: 0.5,
				// 		color: '#CABB49'
				// 	}, {
				// 		offset: 1,
				// 		color: '#DF7650'
				// 	}]),
				// 	label: {
				// 		show: true,
				// 		position: ['120%', '17%'],
				// 		formatter: '{b}：{c}',
				// 		textStyle: {
				// 			color: 'black',
				// 			fontWeight: 'lighter',
				// 			fontFamily: '微软雅黑',
				// 			fontSize: 18
				// 		}
				// 	}
				}
			},
			data: [44]
		},
		{
            name: '1',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#FF7200',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '2',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#FF7200',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '3',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#FF7200',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '4',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#FFBB00',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '5',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#FFBB00',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '6',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#FFBB00',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '7',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#18BD84',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '8',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#18BD84',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '9',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#18BD84',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '10',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#18BD84',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '11',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#18BD84',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '12',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#18BD84',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '13',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#FFBB00',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '14',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#FFBB00',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
        {
            name: '15',
            type: 'bar',
            barWidth: 30,
            stack: 'progress',
            itemStyle: {
                normal: {
                    color: '#FF7200',
                    borderColor: '#fff'
                }
            },
            data: [6.666]
        },
// 		{
// 			name: '当前',
// 			type: 'bar',
// 			barWidth: '30',
// 			itemStyle: {
// 				normal: {
// 					barBorderRadius: 5,
// 					shadowBlur: 10,
// 					shadowColor: '#111',
// 					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
// 						offset: 0,
// 						color: '#4C9BB0'
// 					}, {
// 						offset: 0.5,
// 						color: '#CABB49'
// 					}, {
// 						offset: 1,
// 						color: '#DF7650'
// 					}])
// 				}
// 			},
// 			data: [100]
// 		},
		]
	}

// var timeTicket=setInterval(function(){
//  var ss = [];
// 	    ss.push(Math.round(Math.random() * 80));
// 	    option['series'][0]['data'] = ss;
// 	    myChart.setOption(option);

// },1000)