option = {
				color: ['#152e52', '#203a5e', '#0f3367'], //设置颜色调色盘
				backgroundColor: '#1b242d',
				 calculable : true,
				tooltip: {
					trigger: 'item'
				},
				legend: {
					textStyle: {
						color: 'rgba(255,255,255,0.5)'
					},
					data: [{
						name: '邮件营销',
						// 强制设置图形为圆。
						icon: 'circle'
					}, {
						name: '联盟广告',
						// 强制设置图形为圆。
						icon: 'circle'
					}, {
						name: '视频广告',
						// 强制设置图形为圆。
						icon: 'circle'
					}]
				},
				grid: {
					show: false,
					containLabel: false,
					left: '0',
					right: '0',
					top: '50',
					bottom: '0'
				},
				xAxis: [{
					boundaryGap: false,
					splitLine: { //横向分割线不显示
						show: false
					},
					axisLine: {
						show: false
					},
					axisLabel: {
						show: false
					},
					axisTick: {
						show: false
					},
					type: 'category',
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				}],
				yAxis: [{
					type: 'value',
					position: 'left',
					boundaryGap: false,
					splitLine: { //横向分割线不显示
						show: false
					},
					axisLine: {
						show: false
					},
					axisLabel: {
						show: false
					},
					axisTick: {
						show: false
					}
				}],
				series: [{
					name: '邮件营销',
					type: 'line',
					//          stack: '总量',
					legendHoverLink: true,
					itemStyle: {
						emphasis: {
							color: '#ed3b42',
							opacity: 1,
							borderColor: '#ed3b42',
							borderWidth: '9'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.5
						}
					},
					data: [150, 232, 201, 350, 190, 410, 330],
					smooth: true
				}, {
					name: '联盟广告',
					type: 'line',
					//          stack: '总量',
					legendHoverLink: true,
					itemStyle: {
						emphasis: {
							color: '#ed3b42',
							opacity: 1,
							borderColor: '#ed3b42',
							borderWidth: '9'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.3
						}
					},
					data: [220, 182, 191, 234, 290, 330, 80],
					smooth: true //数列的线平滑
				}, {
					name: '视频广告',
					type: 'line',
					//          stack: '总量',
					legendHoverLink: true,
					itemStyle: {
						emphasis: {
							color: '#ed3b42',
							opacity: 1,
							borderColor: '#ed3b42',
							borderWidth: '9'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.3
						}
					},
					data: [120, 90, 101, 12, 90, 80, 210],
					smooth: true
				}]
			};