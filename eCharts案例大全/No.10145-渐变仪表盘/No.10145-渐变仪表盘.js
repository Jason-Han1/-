option = {
		backgroundColor: '#fff',
		tooltip: {
			formatter: "{a}: {c}%"
		},
		toolbox: {
			show: true,
			feature: {
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		series: [{
			name: '整体进度',
			type: 'gauge',
			z: 3,
			min: 0,
			max: 100,
			splitNumber: 10,
			radius: '98%',
			axisLine: { // 坐标轴线
				lineStyle: { // 属性lineStyle控制线条样式
					width: 6,
					color: [
						[0.22, (function() {
							return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#398def'
							}, {
								offset: 0.4,
								color: '#03f9ab'
							}, {
								offset: 1,
								color: '#14d8c0'
							}]);
						})()],
						[0.8, (function() {
							return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#398def'
							}, {
								offset: 0.7,
								color: '#4d75f3'
							}, {
								offset: 1,
								color: '#a456a5'
							}]);
						})()],
						[1, (function() {
							return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#b75094'
							}, {
								offset: 0.8,
								color: '#fa3957'
							}, {
								offset: 1,
								color: '#a456a5'
							}]);
						})()]
					]
				}
			},
			axisTick: { // 坐标轴小标记
				length: 20, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: 'auto',
					width: 2
				}
			},
			axisLabel: {
				color: '#accaff',
				fontSize: 16
			},
			splitLine: { // 分隔线
				length: 25, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					color: 'auto',
					width: 2
				}
			},
			title: {
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontSize: 20,
					fontStyle: 'italic'
				}
			},
			// 指针
			pointer: {
				length: '70%',
				width: '4%'
			},
			detail: {
				formatter: '{value}%',
				offsetCenter: [0, '65%'],
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bold',
					color: '#57b9fe',
					fontStyle: 'italic',
					fontSize: 30
				}
			},
			data: [{
				value: 40
			}]
		}]
	};