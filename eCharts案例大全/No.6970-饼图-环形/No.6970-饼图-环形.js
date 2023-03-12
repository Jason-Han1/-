option = {
				color: ['#2d82ff', '#2dc6ff', '#4956ff', '#12dd98', '#f4d040'], //定义此系统颜色
				/* title: {
					text: '饼图',					
					left: 'center'
				}, */
				tooltip: {
					trigger: 'item',
					formatter: '{c} ({d}%)'
				},
				graphic: { //图形中间文字
					type: "text",
					left: "center",
					top: "center",
					style: {
						text: "隐患比例 ",
						textAlign: "center",
						fill: "#666",
						fontSize: 14,
						fontWeight: 'bold'
					}
				},
				series: [{
					type: 'bar',
					type: 'pie',
					name: '访问来源',
					radius: ['50%', '65%'], //圆圈大小
					avoidLabelOverlap: false,
					itemStyle: {

						shadowBlur: 10,
						shadowColor: 'rgba(0, 103, 255, 0.2)', //浅蓝色阴影
						shadowOffsetX: -5,
						shadowOffsetY: 5,
					},
					label: {
						show: false,
						position: 'center',
					},

					emphasis: {
						label: {
							show: true,
							fontSize: '14',
							fontWeight: 'bold'
						}
					},

					labelLine: {
						show: false
					},
					data: [{
							value: 1048
						},
						{
							value: 135
						},
						{
							value: 635
						},
						{
							value: 1035
						},
						{
							value: 835
						},
					]
				}]
			};