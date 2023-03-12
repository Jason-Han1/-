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
	legend: legendDemo,
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
	series: [{
		name: '',
		type: 'pie',
		radius: ['45%', '60%'],
		center: ['50%', '45%'],
		itemStyle: {
			normal: {
				color: function(params) {
					//自定义颜色
					var colorList = [
						'#008FFF', '#38CE9E', '#FFC005', '#FD5360'
					];
					return colorList[params.dataIndex]
				},
				// 设置扇形的阴影
				shadowBlur: 12,
				shadowColor: 'rgba(124,124,124,0.2)',
				shadowOffsetX: 5,
				shadowOffsetY: 5
			},
		},
		label: {
			show: true,
			normal: {
				formatter: '{d}%',
			}
		},
		labelLine: {
			normal: {
				show: true,
				length: 15,
				length2: 30,
				lineStyle: {
					color: '#d3d3d3'
				},
				align: 'right'
			},
			color: "#000",
			emphasis: {
				show: true
			}
		},
		data: [{
			name: 'A级',
			value: 40
		}, {
			name: 'B级',
			value: 12
		}, {
			name: 'C级',
			value: 12
		}, {
			name: 'D级',
			value: 12
		}]
	}]
}