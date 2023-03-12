option = {
    backgroundColor:'#000',
    tooltip: {
			trigger: 'axis',
		},
		legend: {
			 bottom: '10%',
			 left: 'center',
			 itemWidth: 10,
			 itemHeight: 10,
			 itemGap: 25,
			 selectedMode:'single',
			 textStyle: {
				 color: '#e4e4e4',
				 fontSize: 16,
			 },
			 data: [
			     {name: '总体情况',icon: 'circle'},{name: '杭州',icon: 'circle'},
			     {name: '台州',icon: 'circle'},{name: '绍兴',icon: 'circle'},
			     {name: '金华',icon: 'circle'},{name: '宁波',icon: 'circle'},
			     {name: '衢州',icon: 'circle'},{name: '温州',icon: 'circle'},
			     {name: '舟山',icon: 'circle'},{name: '丽水',icon: 'circle'},
			     {name: '湖州',icon: 'circle'},{name: '嘉兴',icon: 'circle'},
			 ]
		 },
		grid: {
			top: '10%',
			left: '0',
			right: '2%',
			bottom: '30%',
			containLabel: true,
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLine: { 
				 show: true,
				 lineStyle: {
					 color: '#3d4147'
				 },
			 },
			 axisLabel: {
			 	interval:0,
			 	margin:15,
				 textStyle: {
					 color: '#ebebeb',
					 fontFamily:'Helvetica',
					 fontSize:16,
				 },
			 },
			 axisTick: { show: false,},
			data: ['201709', '201710', '201711', '201712', '201801', '201802',
					 '201803','201804','201805','201806','201807','201808'],
		}],
		yAxis: [{
			type: 'value',
			min: 0,
			max:100,
			splitNumber: 5,
			splitLine: {
				 show: true,
				 lineStyle: {
					 color: '#3d4147'
				 }
			 },
			 axisLine: {show: false,},
			 axisLabel: {
			 	margin:30,
				 textStyle: {
					color: '#ebebeb',
					fontFamily:'Helvetica',
					fontSize:16,

				 },
			 },
			 axisTick: { show: false,},  
		}],
		series: [{
			name: '总体情况',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa",
					borderWidth:4,
					borderColor: "#000"
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa"
				}
			},
			data: [90, 85, 64, 81, 22, 64, 85,80,77,83,79,88]
		},{
			name: '杭州',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa", 
					borderWidth:4,
					borderColor: "#000"
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa"
				}
			},
			data: [90, 80, 90, 81, 92, 78, 80,85,77,83,79,88]
		},{
			name: '台州',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa", 
					borderWidth:4,
					borderColor: "#000"
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa"
				}
			},
			data: [90, 85, 64, 81, 22, 64, 85,80,77,83,79,88]
		},{
			name: '绍兴',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa", 
					borderWidth:4,
					borderColor: "#000"
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa"
				}
			},
			data: [82, 80, 90, 81, 92, 78, 80,85,77,83,79,88]
		},{
			name: '金华',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa",
					borderWidth:4,
					borderColor: "#000"
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa"
				}
			},
			data: [90, 85, 64, 81, 22, 64, 85,80,77,83,79,88]
		},{
			name: '宁波',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa", 
					borderWidth:4,
					borderColor: "#000"
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa"
				}
			},
			data: [82, 80, 90, 81, 92, 78, 80,85,77,83,79,88]
		},{
			name: '衢州',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa",  
					borderWidth:4,
					borderColor: "#000"
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa" 
				}
			},
			data: [90, 85, 64, 81, 22, 64, 85,80,77,83,79,88]
		},{
			name: '温州',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa",  
					borderWidth:4,
					borderColor: "#000"
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa" 
				}
			},
			data: [82, 80, 90, 81, 92, 78, 80,85,77,83,79,88]
		},{
			name: '舟山',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa",  
					borderWidth:4,
					borderColor: "#000"
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa"
				}
			},
			data: [90, 85, 64, 81, 22, 64, 85,80,77,83,79,88]
		},{
			name: '丽水',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa",  
					borderWidth:4,
					borderColor: "#000"
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa"
				}
			},
			data: [82, 80, 90, 81, 92, 78, 80,85,77,83,79,88]
		},{
			name: '湖州',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa",
					borderWidth:4,
					borderColor: "#000" 
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa"   
				}
			},
			data: [90, 85, 64, 81, 22, 64, 85,80,77,83,79,88]
		},{
			name: '嘉兴',
			type: 'line',
			symbol:'circle', 
			symbolSize:12,
			itemStyle: {
				normal: {
					color: "#42e2fa", 
					borderWidth:4,
					borderColor: "#000" 
				}
			},
			lineStyle: {
				normal: {
					color: "#42e2fa"  
				}
			},
			data: [82, 80, 90, 81, 92, 78, 80,85,77,83,79,88]
		},
		]
};