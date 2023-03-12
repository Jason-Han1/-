var xdata= ['济南', '莱芜', '济阳', '章丘', '德州', '单县', '张店']
var data=[10, 52, 200, 334, 390, 330, 220]
option = {
    backgroundColor:"#0f152f",
    color: ['#3398DB'],
    title: {
			x: "0",
			top: 0,
			text: '数量',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 20,
				color: "#fff"
			},
		},
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '14%',
        bottom: '3%', 
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data :xdata,
            splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			'axisLabel': {
				margin: 8,
				'interval': 0,
				rotate: 35,
				textStyle: {
					fontSize:"20",
					color: '#00ccfe',
				}
			},
			axisLine: {
				onZero: true,
				lineStyle: {
					color: '#fff',
				}
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				textStyle: {
					fontSize: 20
				},
				formatter: function(value, index) {
					return value ? value.split("").join('\n') : ""; //竖排文字
				}
			},
        }
    ],
    yAxis : [
        {
            type : 'value',
             splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			'axisLabel': {
				margin: 8,
				'interval': 0,
				rotate: 35,
				textStyle: {
					fontSize:"20",
					color: '#00ccfe',
				}
			},
			axisLine: {
				onZero: true,
				lineStyle: {
					color: '#fff',
				}
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				textStyle: {
					fontSize: 20
				},
			},
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            markLine : {
                label: {
					normal: {
						textStyle: {
							fontSize:"30",
							color: "#fff"
						}
					}
				},
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
            barWidth: '30%',
            data:data
        }
    ]
};
