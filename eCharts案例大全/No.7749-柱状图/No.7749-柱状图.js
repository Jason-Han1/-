option = {
				backgroundColor: '#fff',
				tooltip: {
					show:true,
					trigger: 'item',
					backgroundColor: 'rgba(0,0,0,0.5)',
					axisPointer: {
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#FFD56E'
								}, {
									offset: 0.5,
									color: '#fff',
								}, {
									offset: 1,
									color: '#FFD56E'
								}],
								global: false
							}
						},
					}
				},
				legend: {
					right: 20,
					top: 0,
					itemGap: 10, // 各个item之间的间隔，单位px，默认为10，
					itemWidth: 30, // 图例图形宽度
					itemHeight: 10, // 图例图形高度
					textStyle: {
						color: 'red',
						fontWeight: 'normal',
						fontSize: 14
					},
				},
				grid: {
					top: '5%',
					left: '3%',
					right: '1%',
					bottom: '8%',
				},
				xAxis: [
					{
						type: 'category',
						data: ['R实际型', 'A艺术型', 'S社会型', 'E企业型', 'I调研型', 'C常规型'] ,
						axisTick: {
							show: false // 是否显示坐标轴轴线
						},
						axisLabel: {
							color: '#282828'
						},
						splitLine: {
							show: false
						},
						boundaryGap: true,
						axisLine: { //坐标轴轴线相关设置。
							show: true,
							inside: false,
							lineStyle: {
								color: '#000'
							}
						}
					},
				],

				yAxis: [{
					type: 'value',
					min: 0,
					max:100,
					splitNumber: 5,
					splitLine: {show: true},
					axisLabel: { //坐标轴刻度标签的相关设置。
						show: true,
						textStyle: {
							 color: '#737373',
						}
					},
					axisLine: {
						show: true,
					},
					axisTick: {
						show: false,
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(131,101,101,0.2)',
							type: 'dashed',
						}
					},
					show: true,
				}],
				series: [
					{
						type: 'bar',
						barMaxWidth: 20,
						zlevel: 10,
						// barGap: '100%',
						data: [40, 79, 50,40, 79, 50,40, 79, 50,40, 79, 50],
						itemStyle: {
							normal: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: '#00E3B9' 
									}, {
										offset: 1,
										color: '#00E3B9' 
									}]
								},
								barBorderRadius: [30, 30, 0, 0],
							}
						},
					},
					{
						type: 'bar',
						itemStyle: {
							normal: {
								color: 'rgba(0,227,185,0.1)',
							}
						},
						silent: true,
						barWidth: 30,
						 barGap: '-125%',
						data: [120, 120, 120,120, 120, 120,120, 120, 120,120, 120, 120]
					},
				]
			};
			