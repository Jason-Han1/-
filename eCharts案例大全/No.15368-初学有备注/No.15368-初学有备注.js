option = {
				title: {
					text: '年度财务报表',
					 x: 'center',
					padding: [0, 0]
				},
				//设置x轴的参数
				xAxis: {
					type: 'category',
			        axisLabel: {
			            rotate:18,
			            interval: 0
			
			        },
			        axisTick: {
			            alignWithLabel: true
			        },
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					name:'月份',
					nameLocation: 'middle',
					nameGap: 33,
				},
				//设置图表显示参数
				grid: {
					left: 70,
					right: 20,
					bottom:50,
					height: '55%'
				},
				//设置y轴的参数
				yAxis: {
					name: '营业收入',
					type: 'value',
//					max: 500,
					nameLocation: 'middle',
					nameGap: 45,
					position: 'left'

				},

				series: [{
					type: 'line',
					data: [1220, 1182, 1191, 1234, 1290, 1330,1310, 443, 443, 121, 356, 235]
				}, {
					type: 'line',
					data: [1222, 1188, 1180, 1226, 1235, 1232, 215, 212, 222, 451, 333, 241]
				}]
			};