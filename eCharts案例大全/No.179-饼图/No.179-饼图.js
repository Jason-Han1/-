				const dataList = [{
						name: '农用地',
						value: '50.01',
					},
					{
						name: '建筑用地',
						value: '25.92',
					},
					{
						name: '未利用地',
						value: '25.93',
					},
				];

				const colorList = ['#4D88FE', '#50CCCB', '#FFBF3C'];

				var option = {
					tooltip: {
						triggerOn: "click",
					 alwaysShowContent: true,
						position: function(pt) {
							return [pt[0], 130];
						}
					},
					legend: {
						icon: 'circle',
						data: dataList.map((item) => item.name),
						right: '8%',
						top: '40%',
						orient: 'vertical',
						itemGap: 14,
						itemWidth: 6, // 设置宽度
						itemHeight: 6, // 设置高度
						textStyle: {
							fontSize: 12,
							rich: {
								unit: {
									color: '#606266',
									fontSize: 12,
									padding: [0, 10, 0, 0],
								},
								text: {
									width: 60,
									color: '#606266',
									fontSize: 12
								}
							},
						},
						formatter: function(item) {
							const data = option.series[0].data;
							let sum = 0;
							data.forEach((item) => {
								sum += parseInt(item.value);
							});
							for (let i = 0; i < data.length; i++) {
								if (data[i].name === item) {
									return (
										`{text|${item}}` +
										data[i].value +
										`{unit| 公顷}` +
										(!parseInt(data[i].value) ? 0 : (data[i].value / sum).toFixed(2) *
											100) +
										`{unit|%}`
									);
								}
							}
						},
					},
					zlevel: 999,
					series: [{
							// 外圈
							name: '外圈',
							type: 'pie',
							radius: ['40%', '80%'],
							center: ['30%', '50%'],
							label: {
								show: false,
							},
							labelLine: {
								show: false,
							},
							itemStyle: {
								normal: {
									color: function(params) {
										return colorList[params.dataIndex];
									},
								},
							},
							data: dataList,
						},
						{
							// 内圈
							type: 'pie',
							radius: ['40%', '60%'],
							center: ['30%', '50%'],
							silent: true,
							itemStyle: {
								normal: {
									color: 'rgba(255, 255, 255,.5)',
									label: {
										show: false,
									},
									labelLine: {
										show: false,
									},
								},
							},
							data: [1],
						},
					],
				};

				myChart.setOption(option);