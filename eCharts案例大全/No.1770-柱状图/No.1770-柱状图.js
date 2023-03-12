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
  	 confine: true,
  		trigger: 'item',
  		axisPointer: { // 坐标轴指示器，坐标轴触发有效
  			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
  		},
  		textStyle: {
  		 width: 140,
  		 overflow: 'break'
  		}
  	},
  	grid: {
  		left: '1%',
  		right: '-7%',
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
  		data: ["数学", 
  		 "手机啊所大军多军群无多群无多群无多群无多群无多群无多群无多群多群无多", "高数", "线性代数", "单片机",
  			"英语",
  			"体育", "物理", "化学", "组织", "历史", "地理",
  			"生物", "活动", "数电", "模电", "微点", "毛概毛 毛概毛概",""],
  		axisLine: {
  			lineStyle: {
  				color: 'black'
  			}
  		}, 
  		axisTick: {
  			show: false
  		},
  		axisLabel: {
  			interval: 0,
  			// rotate: 40,
  			fontSize: 10,
  			color: '#969696',
  			width: 80,
  				overflow: 'truncate',
  				ellipsis: '...',
  			textStyle: {
  				fontFamily: 'Microsoft YaHei'
  			}
  		},
  	},
  
  	yAxis: {
  		type: 'value',
  		//max: 'dataMax',
  		axisLabel: {
  			color: '#969696',
  		},
  		axisLine: {
  			show: true,
  			lineStyle: {
  				color: 'black'
  			}
  		},
  		splitLine: {
  			show: false,
  			lineStyle: {
  				color: 'rgba(0,0,0,0.3)'
  			}
  		}
  	},
  	dataZoom: [
  	//  {
   //  filterMode: 'none',
  	// 	show: true,
  	// 	height: 12,
  	// 	 zoomLock: true,
  	// 	xAxisIndex: [
  	// 		0
  	// 	],
  	// 	bottom: '10%',
  	// 	startValue: 0,
  	// 	endValue: 5,
  	// 	handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
  	// 	handleSize: '110%',
  	// 	handleStyle: {
  	// 		color: "#d3dee5",
  
  	// 	},
  	// 	textStyle: {
  	// 		color: "black"
  	// 	},
  	// 	borderColor: "#90979c"
  	// }, 
  	{
  	 filterMode: 'none',
  		type: "inside",
  		 zoomLock: true,
  		show: true,
  		height: 15,
  		start: 1,
  		end: 35
  	}],
  
  
  	series: [{
  		// name: '3',
  		type: 'bar',
  		width: 100,
  		barWidth: 40,
  		itemStyle: {
  			normal: {
  				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  					offset: 0,
  					color: '#248ff7'
  				}, {
  					offset: 1,
  					color: '#6851f1'
  				}]),
  				barBorderRadius: [111,111, 0, 0],
  				label: {
  					show: false,
  					textStyle: {
  						color: "#000"
  					},
  					position: "top",
  				}
  			}
  		},
  		data: [520, 240, 500, 242, 191, 100,
  			98, 92, 89, 85, 180, 76,
  			32, 320, 128, 235, 221, 152, {}
  		]
  	}]
  };
  