xdata=[1,2,3,4,5,6,7,8,9,10,11,12]
relnum=[2113,2112,2113,2413,2435,2112,2113,2413,2435,2213,2313,2410,]
	tarnum=[2112,2212,2213,2313,2410,2112,2113,2413,2435,2213,2313,2410,]
	var barColor = [];
var emColor = [];
var color0 = ["#089280", "#af540b", "#17559e"];
var color10 = ['#12ffd0', '#ffcc00', '#0cb0ed'];
if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
    for (var i = 0; i < color0.length; i++) {
        barColor[i] = {
            color: color0[i],
        }
        emColor[i] = {
            color: color10[i]
        }
    }
} else {
    for (var j = 0; j < color0.length; j++) {
        barColor[j] = {
            color: {
                colorStops: [{
                    offset: 0,
                    color: color0[j] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: color10[j] // 100% 处的颜色
                }]
            }
        }
        emColor[j] = {
            color: {
                colorStops: [{
                    offset: 0,
                    color: color10[j] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: color0[j] // 100% 处的颜色
                }]
            }
        }
    }
}
option = {
		//		tooltip: {
		//			axisPointer: {
		//				type: 'none'
		//			}
		//		},
		backgroundColor:'#203958',
		legend: {
			//			shadowColor: "#fff",
			//			shadowBlur: 5,
			//			shadowOffsetX: 5,
			data: ['实际产量', '计划产量'],
			top: '9%',
			right: "8%",
			textStyle: {
				color: '#fff',
				fontSize: 10
				//padding: [3, 5, 5, 2]
			},
			itemWidth: 9,
			itemHeight: 9
		},
		grid: {
			top: '30%',
			left: '7%',
			right: '8%',
			bottom: '10%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			axisLabel: {
				color: "#1666a7"
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#1666a7'
				}
			},
			data: xdata
		},
		yAxis: {
			axisLabel: {
				color: "#1666a7"
			},
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#1666a7'
				}
			},
			splitLine: {
				show: false
			},
		},
		series: [{
				name: '实际产量',
				type: 'bar',
				data: relnum,
				itemStyle: {
					normal: barColor[1],
				},
				barWidth: "9px"
			},
			{
				name: '计划产量',
				type: 'bar',
				data: tarnum,
				itemStyle: {
					normal: barColor[0]
				},
				barWidth: "9px"
			}
		]
	};