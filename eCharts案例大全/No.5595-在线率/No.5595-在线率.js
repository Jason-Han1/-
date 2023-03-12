
		var colors=["#e00005","#e6a900","#00c05a"];
		var fontColor="#0089fa";
		var data=[70,2];
		var fontSize=13;
		var percent=data[0]/(data[0]+data[1])*100;
       	var option = {
			backgroundColor:"#05233b",
			series: [
				{
					type: 'gauge',
					name: '外层辅助',
					radius: '95%',
					pointer: {
						show: false
					},
					detail: {
						show: true,
						offsetCenter: [-30,'90%'],
						fontSize:15,
						color: '#fff'
					},
					data: [{
						value: 70,name:"在线："
					}],
					title: {
						show: true,
						offsetCenter: [-60, '90%'],
						textStyle: {
							color: fontColor,
						}
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: [
								[1, '#d3f2dc'],
							],
							width: 2,
							opacity: 1
						}
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: true,
						length: 20,
						lineStyle: {
							color: '#051932',
							width: 0,
							type: 'solid',
						},
					},
					axisLabel: {
						show: false
					}
				},
				{
					name: '最内层线',
					type: 'gauge',
					radius: '30%',
					center: ['50%', '50%'],
					startAngle: 0,
					endAngle: 359,
					axisLine: {
						show: false,
						lineStyle: {
							opacity: 0,
						}
					},
					splitLine: {
						show: false,
						lineStyle: {
							opacity: 0
						}
					},
					axisLabel: {
						show: false
					},
					axisTick: {
						length: 2,
						lineStyle: {
							color: fontColor,
							width: 2,
							type: 'solid'
						}
					},
					detail: {
						show: true,
						offsetCenter: [80,'258%'],
						fontSize:15,
						color: '#fff'
					},
					data: [{
						value: data[1],name:"离线："
					}],
					title: {
						show: true,
						offsetCenter: [50, '258%'],
						textStyle: {
							color: fontColor,
						}
					},
					pointer: {
						show: false
					}
				},
				{
					name: '内层数据刻度',
					type: 'gauge', 
					radius: '90%',
					min: 0,
					max: 100,
					center: ['50%', '50%'],
					axisLine: {
						lineStyle: {
							width: 30,
							color: [
								[0.1, colors[0]],
								[0.3, new echarts.graphic.LinearGradient(
									0, 1, 0, 0,
									[{
										offset: 0,
										color: colors[0]
									}, {
										offset: 0.8,
										color: colors[1]
									}]
								)],
								[0.7, colors[1]],
								[0.9, new echarts.graphic.LinearGradient(
									0, 1, 0, 0,
									[{
										offset: 0,
										color: colors[2]
									}, {
										offset: 0.6,
										color: colors[1]
									}]
								)],
								[1, colors[2]]
							],
						}
					},
					splitLine: {
						length: 15,
						lineStyle: {
							width: 2,
							color: '#ffffff'
						}
					},
					axisTick: {
						lineStyle: {
							width: 1,
							color: '#ffffff'
						}
					},
					axisLabel: {
						color: fontColor,
						distance: 20,
						fontSize: fontSize,
					},
					detail: {
						show: true,
						offsetCenter: ['0','60%'],
						color: '#fff',
						formatter: function (value) {
							return value.toFixed(1)+"%";
						},
						fontSize:20,
						color: '#000',
						fontFamily:arial,
						
					},
					itemStyle: {
						normal: {
							color: 'rgb(0,191,255)'
						}
					},
					data: [{
						value: percent,name:"在线率"
					}],
					silent: false,
					title:{
						offsetCenter : [0, '75%'],//设置在线率位置
						color:fontColor,
					}
				},
			]
		};