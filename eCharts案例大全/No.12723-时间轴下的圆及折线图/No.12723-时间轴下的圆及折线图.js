option = {
				baseOption: {
					timeline: {
						show: false,
						type: 'slider',
						axisType: 'category',
						bottom: '0',
						currentIndex: 0, //0 时表示当前选中项为 timeline.data[0]（即使用 options[0]
						autoPlay: true, //是否自动播放
						loop: true,
						realtime: true, //拖动圆点的时候，是否实时更新视图。
						controlPosition: 'left',
						label: {
							normal: {
								color: '#2998ff',
							},
						},
						itemStyle: {
							normal: {
								color: '#fff',
								borderColor: '#2998ff',
								borderWidth: 2,
							}
						},
						checkpointStyle: { //『当前项』（checkpoint）的图形样式
							color: 'rgb(215, 0, 0)',
						},
						lineStyle: {
							show: true, //false 不显示轴线
							color: '#2998ff',
						},
						controlStyle: { //控制按钮的样式
							show: true,
							showPrevBtn: false,
							showNextBtn: false,
							itemGap: 50,
							itemSize: 36,
							normal: {
								color: 'rgb(215, 0, 0)',
								borderColor: 'rgb(215, 0, 0)',
							},
							emphasis: {
								color: 'rgb(215, 0, 0)',
								borderColor: 'rgb(215, 0, 0)',
							},
						},
						data: ['本日', '本周', '本月'],
					},
					color: ["#00ffa1", "#00fcff", "#f0e751", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
					legend: [{
						show: true,
						top: '22%',
						right: '2%',
						textStyle: {
							fontSize: 12,
							color: '#fff'
						},
						data: ['高危','中危', '低危']
					},{
						show: true,
						top: '20%',
						left: '1%',
						itemWidth: 10,
						textStyle: {
							fontSize: 12,
							color: '#fff'
						},
						data: [{name:'域名',icon:'circle'},{name:'主机',icon:'circle'},{name:'网站',icon:'circle'}, {name:'安全设备',icon:'circle'},{name:'网络设备',icon:'circle'}]
					}],
					title: {
						right: '20%',
						top: '0%',
						textStyle: {
							align: 'center',
							color: '#fff',
							rich: { //富文本
								white: {
									color: '#fff',
									fontSize: 18,
									fontFamily: 'Microsoft YaHei'
								},
								blue: {
									color: '#00eaff',
									fontSize: 18,
									fontFamily: 'Microsoft YaHei'
								}
						},
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						axisLabel: {
							color: '#fff',
							fontSize: 12
						},
						axisLine:{
							show: true,
							lineStyle: {
								color: '#11839c'
							}
						},
						axisTick:{
							show:false
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: '#0b4377'
							}
						},
						data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00']
					},
					yAxis: {
						type: 'value',
						show: true,
						show: true,
						name:'等级告警趋势线图',
						nameLocation:'end',
						nameGap:40,
						nameTextStyle:{
							color:'#FFF',
							fontSize:16,
							padding: [0, 0, 0, 74]
						},
						axisLabel: {
							color: '#fff',
							fontSize: 12
						},
						axisLine:{
							show: true,
							lineStyle: {
								color: '#11839c'
							}
						},
						axisTick:{
							show:false
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: '#0b4377'
							}
						},
					},
					backgroundColor:"#01486c",
					grid: [{
						x: '50%',
						y: '43%',
						width: '48%',
						height: '40%'
					}, ],
					series: [{
							name: '货运总量',
							type: 'pie',
							startAngle: 90, //起始角度设置
							hoverAnimation: false, //鼠标经过不放大
							radius: ['20%', '35%'],
							center: ['21%', '67%'],
							color: ['#39cad4', '#51ebb3', '#f9f48e', '#fba790', '#21b4f6', '#F136AF', '#FF875C', ],
							label: {
								normal: {
									formatter: function(params, i) {
										return params.percent.toFixed(1)+"%";
									},
									color: "#FFF",
									fontSize: 16,
								},
							},
							itemStyle: {
								normal: {
									labelLine: {
										length: 0,
										length2: 40,
										show: true,
										smooth: true,
										color: '#00ffff'
									}
								}
							},
							
						}, {
							name: '高危',
							type: 'line',
							smooth: true,
							symbolSize: 0.5,
							symbol: 'circle',
							lineStyle:{
								normal:{
									opacity:0.2
								}
							},
							areaStyle: {
								normal: {
									opacity: "0.2",
								}
							},
							
						}, {
							name: '中危',
							type: 'line',
							smooth: true,
							symbolSize: 4,
							symbol: 'circle',
							lineStyle:{
								normal:{
									opacity:0.2
								}
							},
							areaStyle: {
								normal: {
									opacity: "0.2",
								}
							},
							
						}, {
							name: '低危',
							type: 'line',
							smooth: true,
							symbolSize: 4,
							symbol: 'circle',
							lineStyle:{
								normal:{
									opacity:0.2
								}
							},
							areaStyle: {
								normal: {
									opacity: "0.2",
								}
							},
							
						},

					] //series结束
				},
				options: [

					{
						title: {
							text:'{blue|本日}{white|/本周/本月}',
						},
						series: [{
								data: [{value: 13,name: '域名'},{value: 13,name: '主机'},{value: 10,name: '网站'},{value: 6,name: '安全设备'},{value: 60,name: '网络设备'}]
							},
							{
								data: [2000, 122, 3121, 54, 60, 2630, 1150, 2442, 1292]
							},
							{
								data: [1130, 812, 1134, 2361, 413, 1330, 1301, 594, 1230]
							},
							{
								data: [1220, 1132, 1421, 2114, 954, 620, 132, 190, 540]
							}
						]
					},
					{
						title: {
							text:'{white|本日/}{blue|本周}{white|/本月}',
						},
						series: [{
							data:[{value: 11,name: '域名'},{value: 10,name: '主机'},{value: 12,name: '网站'},{value: 3,name: '安全设备'},{value: 60,name: '网络设备'}]
						},
						{
								data: [1130, 812, 1134, 2361, 413, 1330, 1301, 594, 1230]
							},
							{
								data: [2000, 122, 3121, 54, 60, 2630, 1150, 2442, 1292]
							},
							{
								data: [1220, 1132, 1421, 2114, 954, 620, 132, 190, 540]
							}

						]
					},
					{
						title: {
							text:'{white|本日/本周/}{blue|本月}',
						},
						series: [
						{data:[{value: 14,name: '域名'},{value: 12,name: '主机'},{value: 14,name: '网站'},{value: 6,name: '安全设备'},{value: 50,name: '网络设备'}]},
						    {
								data: [1220, 1132, 1421, 2114, 954, 620, 132, 190, 540]
							},
							{
								data: [2000, 122, 3121, 54, 60, 2630, 1150, 2442, 1292]
							},
							{
								data: [1130, 812, 1134, 2361, 413, 1330, 1301, 594, 1230]
							}

						]
					}
				]
			};