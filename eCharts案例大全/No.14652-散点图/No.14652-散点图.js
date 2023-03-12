var data = [
    [62,13,10],[75, 27, 20],[10, 18, 8],[20, 71, 13],[26, 52, 39],[88, 28, 36],[71, 70, 30],
    [9, 55, 18],[17, 15, 30],[37, 32, 10],[78, 80, 26],[56, 0, 22],[61, 53, 14],[14, 60, 20],
    [81, 14, 4]
    ];
var data2 = [
    [32, 3, 31],[57, 89, 85],[40, 68, 2],[10, 27, 65],[83, 91, 9],[6, 30, 41],[96, 17, 64],
    [89, 52, 100],[55, 39, 100],[81, 80, 55],[95, 75, 60],[57, 53, 92],[78, 8, 8],[72, 44, 36],
    [34, 48, 82]
    ];
var chartData = [{
    value: data
}, {
    value: data2
}]

var color = "#189cbb";
var scale = 1;//缩放

option = {
		color: ['#e8b828', '#1c95b4'],
		backgroundColor: '#031f2d',
		legend: {
			orient: 'horizontal',
			// orient: 'vertical',
			// x: 'right',
			right: '9%',
			y: 'top',
			itemWidth: 15*scale, // 图例图形宽度
			itemHeight: 15*scale, // 图例图形高度
			itemGap:40*scale,
			icon: 'roundRect',
			selectedMode: true,
			textStyle: {
				color: '#fff', // 图例文字颜色
				fontSize: 13*scale,
			},
			data: ['公立', '民办']
		},
		// backgroundColor: '#3c4656',
		grid: {
			left: '5%',
			right: '5%',
			bottom: '5%',
			containLabel: true
		},
		xAxis: {
			axisLabel: {
				textStyle: {
					color: color,
					fontSize: 13*scale,
				}  
			},
			axisTick: {
				lineStyle: {
					color: color,
				}  
			},
			axisLine: {
				lineStyle: {
					color: color,
				}  
			},
			splitLine: {
				lineStyle: {
					color: 'rgba(80,224,255,0.3)',
					type: 'dashed'
				}
			},
		},
		yAxis: {
			axisLabel: {
				textStyle: {
					color: color,
					fontSize: 13*scale,
				}  
			},
			axisTick: {
				lineStyle: {
					color: color,
				}  
			},
			axisLine: {
				lineStyle: {
					color: color,
				}  
			},
			splitLine: {
				lineStyle: {
					color: 'rgba(80,224,255,0.3)',
					type: 'dashed'
				}
			},
			name: '通过率(%)',
			nameTextStyle: {
				color: color,
				fontSize: 13*scale,
				padding:[0, 0, 20, 0]
			},
		},
		visualMap: {
			show: false,
			max: 100,
			inRange: {
				symbolSize: [14*scale, 14*scale]
			}
		},
		series: [
			{
				name: '公立',
				type: 'scatter',
				data: chartData[0].value,
				symbolSize:20
			},
			{
				name: '民办',
				type: 'scatter',
				data: chartData[1].value,
				symbolSize:30
			}
		],
		animationDelay: function (idx) {
			return idx * 50;
		},
		animationEasing: 'elasticOut'
	};