var myRate1 = 89;
option = {
    backgroundColor:'#082645',
  
				    title: {
                        show: true,
                        x: "center",
                        bottom:'17%',
                        // bottom: 50,
                        text:  myRate1+'分',
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: 20,
                            color: "#fff"
                        },
                    },
					tooltip: {
						show: true,

					},
					series: [{
						name: '外层盘',
						type: 'gauge',
						center: ['50%', '78%'], // 默认全局居中  
						radius: 95,
						splitNumber: 4, //刻度数量
						min: 100,
						max: 100,
						startAngle: 177,
						endAngle: 3,
						axisLine: {
							lineStyle: { // 属性lineStyle控制线条样式
								color: [
									[0.8, 'rgba(255, 255, 255,0.8)'],
									[1, 'rgba(255, 255, 255,0.8)']
								],
								width: 2,
								opacity: 1,
							}
						},
						axisTick: {
							show: false
						},
						splitLine: {
							show: false
						},
						axisLabel: {
							show: false
						},
						pointer: {
							show: false
						},
						data: [{
							show: false,
							value: '0'
						}],
						detail: {
							show: 0
						}
					}, {
						name: '内层盘',
						type: 'gauge',
						center: ['50%', '78%'], // 默认全局居中  
						radius: 66,
						splitNumber: 4, //刻度数量
						min: 10,
						max: 100,
						startAngle: 177,
						endAngle: 3,
						axisLine: {
							lineStyle: { // 属性lineStyle控制线条样式
								color: [
									[0.8, 'rgba(255, 255, 255,0.8)'],
									[1, 'rgba(255, 255, 255,0.8)']
								],
								width: 2,
								opacity: 1,
							}
						},
						axisTick: {
							lineStyle: {
								"color": "#fff",
								"width": 1
							},
							length: 6,
							splitNumber: 1
						},
						splitLine: {
							show: false
						},
						axisLabel: {
							show: false
						},
						pointer: {
							show: false
						},
						data: [{
							show: false,
							value: '0'
						}],
						detail: {
							show: 0
						}
					}, {

						type: 'gauge',
						center: ['50%', '78%'], // 默认全局居中  
						radius: 89,
						splitNumber: 4, //刻度数量
						min: 0,
						max: 100,
						startAngle: 177,
						endAngle: 3,
						axisLine: {
							show: true,
							lineStyle: {
								color: [
									[0.25, '#FA4342'],
									[0.5, '#FEB634'],
									[0.75, '#7AC943'],
									[1, '#24FE41']
								],
								width: 20
							}
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							distance: 0,
							lineStyle: {
								width: 100
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
							show: false
						},
						data: [{
							name: "",
							value: myRate1,
						}]
					}, {
						startAngle: 177,
						endAngle: 3,
						//						name: '实际完成',
						type: 'gauge',
						center: ['50%', '78%'], // 默认全局居中  
						radius: 23,
						min: 0,
						max: 100,
						splitNumber: 0,
						axisTick: {
							show: false
						},
						splitLine: {
							show: false
						},
						axisLabel: {
							show: false
						},
						axisLine: { // 坐标轴线
							lineStyle: { // 属性lineStyle控制线条样式
								color: [
									[1, 'rgba(255, 255, 255, 0.3)']
								],
								width: 5,
								opacity: 1,
							},
						},
						detail: {
							show: false
						},

					}, {

						startAngle: 183,
						endAngle: -4,
						//						name: '实际完成',
						type: 'gauge',
						center: ['50%', '78%'], // 默认全局居中  
						radius: 21,
						min: 0,
						max: 100,
						axisLine: {
							show: false,
							lineStyle: {
								color: [
									[0, 'rgba(65,67,98,0.8)'],
									[0.95, 'rgba(65,67,98,0.8)'],
									[1, 'rgba(65,67,98,0.8)']
								],
								width: 45,
								shadowOffsetX: 0,
								shadowOffsetY: 0,
								opacity: 1
							}
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: false

						},
						pointer: {
							show: false,
						},
						detail: {
							show: false
						},
						color: ['#fff']
					}, {
						name: '指针',
						type: 'gauge',
						z: 6,
						radius: '77',
						startAngle: 180,
						endAngle: 0,
						center: ["50%", "78%"], //整体的位置设置

						axisLine: {
							lineStyle: { // 属性lineStyle控制线条样式
								color: [
									[1, '#C23531']
								],
								width: 0
							}
						},
						axisTick: {
							show: false
						},
						splitLine: {
							show: false
						},
						axisLabel: {
							show: false
						},
						data: [myRate1],
						pointer: {
							show: true,
							width: 3,
							length: '100%'
						},
						detail: {
							show: 0
						}
					}]
}