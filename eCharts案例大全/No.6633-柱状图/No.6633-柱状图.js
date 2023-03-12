option = {
     backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0, color: '#061B31' // 0% 处的颜色
            },
            {
                offset: 0.25, color: '#123457' // 25% 处的颜色
            },
            {
                offset: 0.75, color: '#0C254A' // 75% 处的颜色
            },
            {
                offset: 1, color: '#0A213E' // 100% 处的颜色
            }
        ],
        global: false // 缺省为 false
    },
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'none'
		},
		formatter: function(params) {
			return params[0].seriesName + '<br/><span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: rgba(36,207,233,0.9);"></span>' + params[0].name + ' : ' + params[0].value + '元';
		}
	},
	grid: {
		left: '0%',
		right: '5%',
		bottom: '-5%',
		top: '2%',
		containLabel: true
	},
	xAxis: {
		show: false,
		type: 'value'
	},
	yAxis: [{
		type: 'category',
		inverse: true,
		axisLabel: {
			show: true,
			fontSize: 12,
			textStyle: {
				color: '#def1ff'
			}
		},
		splitLine: {
			show: false
		},
		axisTick: {
			show: false

		},
		axisLine: {
			show: false
		},
		data: ['制造', '运输', '其他']
	}, {
		show: true,
		type: 'category',
		inverse: true,
		axisTick: 'none',
		axisLine: 'none',
		axisLabel: {
			show: true,
			textStyle: {
				color: '#fff',
				fontSize: '12',
			},
			formatter: function (value, index) {
				return '{x|' + value + '}  {y|' + "元}"
			},
			rich: {
				y: {
					color: '#befbff',
					fontSize: 16
				},
				x: {
					color: '#f6cf42',
					fontSize: 16
				}
			}
		},
		
		data: [100, 80, 20]
	}],
	series: [{
		name: '哈喽',
		type: 'bar',
		zlevel: 1,
		itemStyle: {
			normal: {
				barBorderRadius: 30,
				color: (val) => {
					if (val.dataIndex < 1) {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: '#49bdff'
						}]);
					} else {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: '#54ffd5'
						}]);
					}
				}
			}
		},
		barWidth: 5,
		data: [100, 80, 20]
	},
	{
		name: '背景',
		type: 'bar',
		barWidth: 5,
		barGap: '-100%',
		itemStyle: {
			normal: {
				color: '#2d5271',
				barBorderRadius: 30
			}
		},
		data: [100, 100, 100]
	}]
};