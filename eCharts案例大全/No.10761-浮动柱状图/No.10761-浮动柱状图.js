var data1 = [43, 44, 55, 16, 42, 23, 9, 8, 49, 72, 33, 14];
var padding1 = [1.6, 1.9, 29.0, 16.4, 18.7, 70.7, 55.6, 112.2, 8.7, 8.8, 12.0, 32.3];
var data2 = [45, 47, 50, 26, 42, 28, 39, 80, 39, 22, 53, 34];
var padding2 = [12.6, 15.9, 19.0, 19.4, 28.7, 70.7, 35.6, 102.2, 48.7, 18.8, 16.0, 12.3];
var line1 = [];
var line2 = [];
padding1.forEach((item,index) => {
	line1.push(data1[index]/2+item)
});
padding2.forEach((item,index) => {
	line2.push(data2[index]/2+item)
});
console.log(line1,line2)
option = {
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		selectedMode: false,
		textStyle: {
			color: '#92b1d8',
		},
		bottom: '2.2%',
		x: 'center',
		data: ['上网用户波动值s', '上网用户波动值']
	},
	grid: {
		top: '6%',
		left: '2%',
		right: '2%',
		bottom: '10%',
		containLabel: true
	},
	calculable: true,
	xAxis: [{
		axisLabel: {
			show: true,
			textStyle: {
				color: '#92b1d8'
			},
		},

		data: ['上海', '北京', '广州', '天津', '合肥', '长沙', '湖北', '郑州', '深圳', '辽宁', '甘肃', '长春']
	}],
	yAxis: [{
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['#393e4c']
			}
		},
		type: 'value',
		axisLabel: {
			show: true,
			textStyle: {
				color: '#92b1d8'
			},
		},
	}],
	series: [{
			name: '区域历史峰值',
			type: 'line',
			step: 'middle',
			showSymbol: false,
			itemStyle: {
				normal: {
					barBorderColor: '#366fb6',
					color: '#366fb6'
				},
				emphasis: {
					barBorderColor: '#366fb6',
					color: '#366fb6'
				}
			},
			data: line1,

		},
		{
			name: '区域历史峰值s',
			type: 'line',
			step: 'middle',
			showSymbol: false,
			itemStyle: {
				normal: {
					barBorderColor: 'orange',
					color: 'orange'
				},
				emphasis: {
					barBorderColor: 'orange',
					color: 'orange'
				}
			},
			data: line2,

		},
		{
			name: '最低值',
			barWidth: 15,
			type: 'bar',
			stack: '浮动',
			itemStyle: {
				normal: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				}
			},
			data: padding1,
		},
		{
			name: '最低值',
			barWidth: 15,
			type: 'bar',
			stack: '浮动s',
			itemStyle: {
				normal: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				}
			},
			data: padding2,
		},

		{
			z: 2,
			barMinHeight: 2,
			barWidth: 15,
			barGap: 0,
			stack: '浮动',
			name: '上网用户波动值',
			type: 'bar',
			data: data1,
			itemStyle: {
				normal: {
					barBorderColor: '#366fb6',
					color: '#366fb6'
				},
				emphasis: {
					barBorderColor: '#366fb6',
					color: '#366fb6'
				}
			}
		},

		{
			z: 2,
			barMinHeight: 2,
			barWidth: 15,

			barGap: 0,
			stack: '浮动s',
			name: '上网用户波动值s',
			type: 'bar',
			data: data2,
			itemStyle: {
				normal: {
					barBorderColor: 'orange',
					color: 'orange'
				},
				emphasis: {
					barBorderColor: 'orange',
					color: 'orange'
				}
			}
		}
	]
}