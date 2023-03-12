// $(function() {
// 	var myChart = echarts.init(document.getElementById('ybp'));
	option = {
		backgroundColor: '#1b1b1b',
		title: {
				text: '外刻度仪表盘',
				subtext: '去掉头尾注释直接应用',
				left: 'center',
				textStyle: {
					color: '#fff'
				}
			},
		tooltip: {
			formatter: "{a} <br/>{c} {b}"
		},
		toolbox: {
			show: true,
			feature: {
				mark: {
					show: true
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		series: [{
				name: '速度',
				type: 'gauge',
				min: 0,
				max: 220,
				splitNumber: 11,
				radius: '50%',
				axisLine: { // 坐标轴线
					lineStyle: { // 属性lineStyle控制线条样式
						color: [
							[1, '#4169E1']
						],
						//color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']]//多段色
						width: 3,
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				axisLabel: { // 坐标轴小标记
					show: false,
					textStyle: { // 属性lineStyle控制线条样式
						fontWeight: 'bolder',
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				axisTick: { // 坐标轴小标记
					length: 15, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: 'auto',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				splitLine: { // 分隔线
					length: 25, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						width: 3,
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				pointer: { // 分隔线
					shadowColor: '#fff', //默认透明
					shadowBlur: 5
				},
				title: {
					offsetCenter: [0, 100],
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						fontSize: 20,
						fontStyle: 'italic',
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				detail: {
					//              backgroundColor: 'rgba(30,144,255,0.8)',
					//              borderWidth: 1,
					//              borderColor: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 5,
					offsetCenter: [0, '60%'], // x, y，单位px
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						color: '#fff'
					}
				},
				data: [{
					value: 40,
					name: 'km/h'
				}]
			},
			//刻度盘
			{
				name: '速度',
				type: 'gauge',
				radius: '65%',
				splitNumber: 11, //刻度数量
				min: 0,
				max: 220,
				axisLine: {
					show: true,
					lineStyle: {
						width: 0,
						shadowBlur: 0,
						color: [
							[1, '#ffffff']
						]
					}
				},
				axisLabel: {
					show: true
				},
				axisTick: {
					show: false,
					lineStyle: {
						color: '#ffffff',
						width: 1
					},
					length: 10,
				},
				splitLine: {
					show: false,
					length: 20,
					lineStyle: {
						color: '#ffffff'
					}
				},
				detail: {
					show: false
				},
				pointer: {
					show: false
				}
			}
		]
	};
	setInterval(function() {
		option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		myChart.setOption(option);
	}, 2000)
// })