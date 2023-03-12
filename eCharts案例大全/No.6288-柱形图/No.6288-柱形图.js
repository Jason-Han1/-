option = {
            //  backgroundColor: '#fff',
				yAxis: {
					type: 'category',
					axisLine: {
						show: false //坐标线
					},
					axisTick: {
						show: false //小横线
					},
					axisLabel: {
						color: '#999' //坐标轴字颜色
					},
					data: ['合同签订', '监造', '领料出库']
				},

				xAxis: {
					show: false,
				},
				grid: {
					top: '0',
					right: '50',
					left: '80',
					bottom: '0' //图表尺寸大小
				},
				series: [{

					type: 'bar',
					barWidth: '10px',
					showBackground: false,
					backgroundStyle: {
	
					},
					label: {
						show: true,
						position: 'right' //每一条的数据位置

					},
					itemStyle: {

						normal: {
							color: (params) => {
								let colors = ['rgba(0,234,255,1)', 'rgba(0,168,255,1)', '#29C8B2', '#2fca95']
								return colors[params.dataIndex]
							}, //每个数据的颜色
				// 			barBorderRadius: [30, 30, 30, 30], //圆角大小
							shadowBlur: 10,
							shadowColor: 'rgba(0, 103, 255, 0.2)',
							shadowOffsetX: -5,
							shadowOffsetY: 5,

						},




					},
					data: [
						{
							value: 70
						},
						{
							value: 110
						},
						{
							value: 130
						},
					]
				}]
			};
