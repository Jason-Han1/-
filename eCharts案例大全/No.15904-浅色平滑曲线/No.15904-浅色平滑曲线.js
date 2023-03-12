option = {
				color: ['#ebd282', '#70d2e2', '#e97993'], //设置颜色调色盘
				backgroundColor: '#eee',
//				calculable : true,
				tooltip: {
					trigger: 'axris',
					 position: ['85%','0'],
					 triggerOn:'click',
					 alwaysShowContent:true,
					 backgroundColor:'rgba(0,0,0,0)',
					 textStyle:{
					 	color:'rgba(44,44,44,0.7)',
					 	fontWeight:400,
					 	fontSize:16
					 }
				},
				legend: {
					data: ['邮件营销', '联盟广告', '视频广告'],
					
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
					
					areaStyle: {
						normal: {
							opacity: 0.9
						}
					},
					data: [150, 232, 201, 350, 190, 410, 330],
					smooth: true
				}, {
					name: '联盟广告',
					type: 'line',
					//          stack: '总量',
					areaStyle: {
						normal: {
							opacity: 0.9
						}
					},
					data: [220, 182, 191, 234, 290, 330, 80],
					smooth: true //数列的线平滑
				}, {
					name: '视频广告',
					type: 'line',
					//          stack: '总量',
					areaStyle: {
						normal: {
							opacity: 0.9
						}
					},
					data: [120, 90, 101, 12, 90, 80, 210],
					smooth: true
				}]
			};