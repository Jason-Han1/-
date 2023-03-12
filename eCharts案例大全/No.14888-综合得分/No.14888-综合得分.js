var gauge_value=66
option = {
   title: {
			x: "center",
			bottom: 60,
			text: '暂无',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 18,
				color: "#999"
			},
		},
		tooltip: {
			show: true,
			backgroundColor: '#F7F9FB',
			borderColor: '#92DAFF',
			borderWidth: '1px',
			textStyle: {
				color: 'black'
			},
			formatter: function(param) {
				return '<em style="color:' + param.color + ';">' + param.value + '</em> 分'
			}

		},
		series: [{
			startAngle: 180,
			endAngle: 0,
			name: '实际完成',
			type: 'gauge',
			center: ['50%', '85%'], // 默认全局居中  
			radius: 173,
			min: 0,
			max: 100,
			splitNumber: 0,
			axisLine: { // 坐标轴线  
				lineStyle: {
					color: [
						[0, '#3c9fe6'],
						[1, '#ccc']
					], // 属性lineStyle控制线条样式  
					width: 4
				}
			},

			axisTick: {
				show: false
			},
			axisLabel: { // 坐标轴小标记  
				textStyle: { // 属性lineStyle控制线条样式  
					fontWeight: 'bolder',
					fontSize: 16,
					color: 'rgba(30,144,255,0)',
				}
			},
			splitLine: { // 分隔线  
				length: 10, // 属性length控制线长  
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
					width: 0,
					color: '#444'
				}
			},
			pointer: { // 分隔线 指针  
				color: '#666666',
				width: 0,
				length: 230
			},
			detail: {
				show: false
			},

		}, {
			name: '信用分',
			type: 'gauge',
			startAngle: 180,
			radius: 160,
			center: ['50%', '85%'], // 默认全局居中  
			endAngle: 0,
			min: 0,
			max: 100,

			axisLine: {
				show: true,
				lineStyle: {
					width: 20,
					shadowBlur: 0,
					color: [
						[0.2, '#E43F3D'],
						[0.4, '#E98E2C'],
						[0.6, '#DDBD4D'],
						[0.8, '#7CBB55'],
						[1, '#9CD6CE']
					]
				}
			},
			axisTick: {
				show: true,
				splitNumber: 1
			},
			splitLine: {
				show: true,
				length: 20,

			},

			axisLabel: {
				formatter: function(e) {
					switch(e + "") {
						case "10":
							return "较差";

						case "50":
							return "中等";

						case "70":
							return "良好";

						case "90":
							return "优秀";

						default:
							return e;
					}
				},
				textStyle: {
					fontSize: 12,
					fontWeight: ""
				}
			},
			pointer: {
				show: false,
			},
			detail: {
show: false,
				offsetCenter: [0, -70],
				textStyle: {
					fontSize: 30
				}
			},
			data: [{
				name: "",
				value: Math.floor(gauge_value)
			}]
		}]
};