var option = {
				title: {
					text: '',
					subtext: ''
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					},
					formatter:'平均值: 200<br />最大值: 200<br />最小值: 200<br />次数: 200<br />挑战值: 200<br />达标值: 200'
				},
				legend: {
					data: ['3G', '4G', 'wifi', '标准值', '挑战值']
				},
				grid: {
					left: '5%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'value',
					boundaryGap: [0, 0.01]
				},
				yAxis: {
					type: 'category',
					data: ['下载', '主页面加载', '发送邮件', '登录', '修改密码']
				},
				series: [{
					name: '3G',
					type: 'bar',
					data: [320, 302, 301, 334, 390]
				}, {
					name: '4G',
					type: 'bar',
					data: [220, 202, 201, 234, 290]
				}, {
					name: 'wifi',
					type: 'bar',
					data: [120, 102, 101, 134, 190]
				}, {
					name: '标准值',
					type: 'scatter',
					symbol: 'rect',
					silent: true,
					itemStyle: {
						normal: {
							color: '#F33535'
						}
					},
					symbolSize: [5, 30],
					z: 20,
					data: [95, 90, 90, 90, 85]
				}, {
					name: '挑战值',
					type: 'scatter',
					symbol: 'rect',
					silent: true,
					itemStyle: {
						normal: {
							color: '#ff5a00'
						}
					},
					symbolSize: [5, 30],
					z: 20,
					data: [295, 190, 210, 230, 285]
				}]
			};