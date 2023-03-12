 var option = {
  	backgroundColor: '#fff',
  	title: {
  		text: '网段时延排行',
  		
  		textStyle: {
  			//color: 'black'
  			fontSize:15,
  		},
  		// subtext: '副标题',
  		// subtextStyle: {
  		//   color: 'blue'
  		// },
  		//padding: [0, 0, 10, 20]  // 位置
  		
  	
  		top: 0
  	},
  	tooltip: {
  		trigger: 'axis',
  		axisPointer: { // 坐标轴指示器，坐标轴触发有效
  			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
  		}
  	},
  	grid: {
  		left: '1%',
  		right: '4%',
  		bottom: '15%',
  		top: '13%',
  		containLabel: true
  	},
  	//      legend: {
  	//     data: ['3'],
  	//     right: 10,
  	//     top:12,
  	//     textStyle: {
  	//         color: "black"
  	//     },
  	//     itemWidth: 12,
  	//     itemHeight: 10,
  	//     // itemGap: 35
  	// },
  	xAxis: {
  		type: 'category',
  		data: ["192.168.16.0/24", "192.168.8.0/24", "192.168.7.0/24", "192.168.12.0/24", "192.168.2.0/24",
  			"192.168.9.0/24",
  			"192.168.11.0/24", "192.168.23.0/24", "192.168.25.0/24", "192.168.27.0/24", "192.168.17.0/24", "192.168.19.0/24",
  			"192.168.36.0/24", "192.168.38.0/24", "192.168.48.0/24", "192.168.52.0/24", "192.168.72.0/24", "192.168.51.0/24",
  		],
  		axisLine: {
  			lineStyle: {
  				color: 'black'
  
  			}
  		},
  
  		axisLabel: {
  			interval: 0,
  			// rotate: 40,
  			fontSize: 10,
  			textStyle: {
  				fontFamily: 'Microsoft YaHei'
  			}
  		},
  	},
  
  	yAxis: {
  		type: 'value',
  		//max: 'dataMax',
  		axisLine: {
  			show: true,
  			lineStyle: {
  				color: 'black'
  			}
  		},
  		splitLine: {
  			show: true,
  			lineStyle: {
  				color: 'rgba(0,0,0,0.3)'
  			}
  		},
  		axisLabel: {}
  	},
  	dataZoom: [{
  		show: true,
  		height: 12,
  		xAxisIndex: [
  			0
  		],
  		bottom: '10%',
  		startValue: 0,
  		endValue: 5,
  		handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
  		handleSize: '110%',
  		handleStyle: {
  			color: "#d3dee5",
  
  		},
  		textStyle: {
  			color: "black"
  		},
  		borderColor: "#90979c"
  	}, {
  		type: "inside",
  		show: true,
  		height: 15,
  		start: 1,
  		end: 35
  	}],
  
  
  	series: [{
  		name: '3',
  		type: 'bar',
  		barWidth: '15%',
  		itemStyle: {
  			normal: {
  				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  					offset: 0,
  					color: '#248ff7'
  				}, {
  					offset: 1,
  					color: '#6851f1'
  				}]),
  				barBorderRadius: 11,
  				label: {
  					show: true,
  					textStyle: {
  						color: "#000"
  					},
  					position: "top",
  				}
  			}
  		},
  		data: [920, 840, 500, 242, 191, 100,
  			98, 92, 89, 85, 80, 76,
  			32, 30, 28, 25, 21, 12,
  		]
  	}]
  };
  