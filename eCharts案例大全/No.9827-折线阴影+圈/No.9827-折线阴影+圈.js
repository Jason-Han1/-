const legendDemo = {
	show: true,
	x: 'center',
	y: 'bottom',
	bottom: 10,
	itemWidth: 10,
	itemHeight: 10,
	textStyle: {
		color: '#666',
		fontSize: 12,
	},
	itemGap: 22,
	data: ['A级', 'B级', 'C级', 'D级']
};
const gridDemo = {
	left: '3%',
	right: '3%',
	bottom: '10%',
	top: '15%',
	containLabel: true
};
const colorsDemo = ['#008FFF', '#38CE9E', '#FFC005', '#FD5360'];
option = {
    backgroundColor:'#fff',
	color: colorsDemo,
	grid: gridDemo,
	tooltip: {
		trigger: 'item',
		formatter: "{b} : {c} ({d}%)",
		padding: [
			11, // 上
			19, // 右
			13, // 下
			13, // 左
		],
		extraCssText: 'box-shadow:0px 1px 2px 0px rgba(134,134,134,0.45),0px -1px 2px 0px rgba(0,0,0,0.03);',
	},
	legend: legendDemo,
	calculable: true,
	xAxis: [{
		axisTick: {
			alignWithLabel: true
		},
		axisLabel: {
			interval: 0,
			textStyle: {
				color: '#000',
				fontSize: 12
			}
		},
		axisLine: {
			show: true,
			interval: 0,
			lineStyle: {
				color: "#BFBFBF"
			}
		},
		splitLine: {
			show: false,
			lineStyle: {
				type: 'dashed'
			}
		},
		type: 'category',
		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	}],
	yAxis: [{
		name: '单位 : 户',
		nameTextStyle: {
			color: "#000"
		},
		type: 'value',
		splitArea: {
			show: false,
		},
		splitLine: {
			show: true,
			lineStyle: {
				type: 'dashed'
			}
		},
		axisLabel: {
			textStyle: {
				color: '#000',
				fontSize: 12
			}
		},
		axisLine: {
			show: false,
			interval: 0,
			lineStyle: {
				color: "RGB(210,221,217)"
			}
		},
		axisTick: {
			show: false
		}
	}],
	series: [{
			name: 'A级',
			type: 'line',
			smooth: true,
			symbol: 'circle', //拐点样式
			lineStyle: {
				normal: {
					width: 5,
					shadowColor: 'rgba(97,174,255,0.14)',
                    shadowBlur: 4,
                    shadowOffsetY: 6
				}
			},
			symbolSize: 8, //折线点的大小
			itemStyle: {
				normal: {
					borderColor: '#fff',
					borderWidth: 2 //拐点边框大小
				}
			}, //折线点的颜色 
			data: [20, 35, 51, 15, 86, 28, 5, 23, 82, 11, 12]
		},
		{
			name: 'B级',
			type: 'line',
			smooth: true,
			symbol: 'circle', //拐点样式
			lineStyle: {
				normal: {
					width: 5,
					shadowColor: 'rgba(97,174,255,0.14)',
					shadowBlur: 4,
					shadowOffsetY: 6
				}
			},
			symbolSize: 8, //折线点的大小
			itemStyle: {
				normal: {
					borderWidth: 2, //拐点边框大小
					borderColor: '#fff',
				}
			}, //折线点的颜色 
			data: [20, 35, 13, 12, 6, 38, 55, 40, 22, 21, 12],
		},
		{
			name: 'C级',
			type: 'line',
			smooth: true,
			symbol: 'circle', //拐点样式
			lineStyle: {
				normal: {
					width: 5,
					shadowColor: 'rgba(97,174,255,0.14)',
					shadowBlur: 4,
					shadowOffsetY: 6
				}
			},
			symbolSize: 8, //折线点的大小
			itemStyle: {
				normal: {
					borderWidth: 2, //拐点边框大小
					borderColor: '#fff',
				}
			}, //折线点的颜色 
			data: [10, 15, 1, 5, 66, 8, 35, 20, 12, 41, 52],
		},
		{
			name: 'D级',
			type: 'line',
			smooth: true,
			symbol: 'circle', //拐点样式
			lineStyle: {
				normal: {
					width: 5,
					shadowColor: 'rgba(97,174,255,0.14)',
					shadowBlur: 4,
					shadowOffsetY: 6
				}
			},
			symbolSize: 8, //折线点的大小
			itemStyle: {
				normal: {
					borderWidth: 2, //拐点边框大小
					borderColor: '#fff',
				}
			}, //折线点的颜色 
			data: [80, 55, 45, 44, 12, 75, 44, 55, 74, 2, 12]
		},
	]
};
