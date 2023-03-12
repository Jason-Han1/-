option = {
    backgroundColor:'rgba(8, 24, 40, 1)',
   // 基于准备好的dom，初始化echarts实例
		series: [{
			name: '总计',
			type: 'gauge',
			center: ['50%', '50%'],
			radius: '90%',
			min: 0,
			max: 100,
			legendHoverLink: false,
			axisLine: { // 坐标轴线
				lineStyle: { // 属性lineStyle控制线条样式
					color: [
						[0.09, '#ffffff'],
						[0.82, '#ffffff'],
						[1, '#ffffff']
					],
					width: 10,
					shadowColor: '#fff', //默认透明
					shadowBlur: 0
				}
			},
			axisTick: { // 坐标轴小标记
				show: false
			},
			splitLine: { // 分隔线
				length: 24, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					color: 'auto',
					width: 3
				}
			},
			//刻度标签。
			axisLabel: {
				show: false
			},
			pointer: {
				length: '80%',
			},
			itemStyle: {
				color: 'rgba(228, 125, 36, 1)'
			},
			title: {
				offsetCenter: [0, '68%'], // x, y，单位px
				fontSize: 14,
				color: 'rgba(164, 165, 165, 1)',
			},
			detail: {
				// 其余属性默认使用全局文本样式，详见TEXTSTYLE
				formatter: [
					'{a|{value}}',
					'{b|单位：V}'
				].join('\n\n'),
				rich: {
					a: {
						color: 'rgba(239, 131, 37, 1)',
						fontSize: 27,
						fontWeight: 'bold'
					},
					b: {
						color: 'rgba(164, 165, 165, 1)',
						fontSize: 14,
					}
				},
				padding: [60, 0, 0, 0],
				offsetCenter: [0, 0],
				backgroundColor: '#111213',
				//color: "rgba(239, 131, 37, 1)",
				borderRadius: 170,
				borderColor: 'rgba(74, 75, 76, 0.7)',
				borderWidth: 1,
				width: 170,
				height: 110,
			},
			data: [{
				value: 41.13,
				name: '数字资产登记数量'
			}]
		}],
};