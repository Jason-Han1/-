option = {
				backgroundColor: '#fff',
				tooltip: {
					formatter: "{a} <br/>{b} : {c}%"
				},
				toolbox: {  //工具栏小图标
					show:false,
					feature: {
						restore: {},
						saveAsImage: {}
					}
				},
				series: [{
					name: '业务指标',
					type: 'gauge',
					radius:'90%',//大小调整
					center: ['50%','55%'],//图表位置调整，第一个数是左右，第二个是上下
					detail: { //仪表盘详情，用于显示数据
						formatter: '{value}%',
						color: '#ff8989',
						fontSize: 16,
						fontWeight: 'bolder',
					},

					data: [{
						value: 50,
						name: ''
					}],
					axisLine: { //表盘样式
						show: true,
						lineStyle: {
							width: 15, //表盘粗细
							color: [
								[1, '#2d82ff']
							],
							shadowBlur: 10,
							shadowColor: 'rgba(0, 103, 255, 0.2)',
							shadowOffsetX: 0,
							shadowOffsetY: 8,

						}
					},

					axisTick: {
						show: false, // 是否显示坐标轴小标记，这里不显示
						length: 15, // 属性length控制线长
						lineStyle: { // 属性lineStyle控制线条样式
							color: '#fff'
						}
					},
					splitLine: { // 分隔线
						length: 15, // 属性length控制线长
						lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
							color: 'rgba(255, 255, 255, 0.2)',
						}
					},
					pointer: { //指针样式
						width: 5,

					},
					itemStyle: { //指针阴影

						shadowBlur: 10,
						shadowColor: 'rgba(0, 103, 255, 0.2)',
						shadowOffsetX: 0,
						shadowOffsetY: 8,
					},
					markPoint: { //指针中心加一个小白点
						symbol: 'circle',
						symbolSize: 5,
						data: [
							//跟你的仪表盘的中心位置对应上，颜色可以和画板底色一样
							{
								x: 'center',
								y: 'center',
								itemStyle: {
									color: '#FFF'
								}
							}
						]
					},

				}]
			};

