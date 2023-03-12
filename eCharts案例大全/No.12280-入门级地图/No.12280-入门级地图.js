var henan = "/asset/get/s/data-1547805260773-mq8t5ZskK.json";

var option = {
				tooltip: {
					show: false

				},
				series: [{
					type: 'map',
					map: 'henan',
					roam: false,
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: true
						}
					},

					layoutCenter: ['45%', '40%'],
					layoutSize: '80%',
					itemStyle: {
						normal: {
							areaColor: "#ffc3c3",
							color:"#FFF",
							label: {
								show: true
							}
						},
					},
					data: [{
							name: '郑州市',
							value: 100
						},
						{
							name: '洛阳市',
							value: 10
						},
						{
							name: '开封市',
							value: 20
						},
						{
							name: '信阳市',
							value: 30
						},
						{
							name: '驻马店市',
							value: 40
						},
						{
							name: '南阳市',
							value: 41
						},
						{
							name: '周口市',
							value: 15
						},
						{
							name: '许昌市',
							value: 25
						},
						{
							name: '平顶山市',
							value: 35
						},
						{
							name: '新乡市',
							value: 35
						},
						{
							name: '漯河市',
							value: 35
						},
						{
							name: '商丘市',
							value: 35
						},
						{
							name: '三门峡市',
							value: 35
						},
						{
							name: '济源市',
							value: 35
						},
						{
							name: '焦作市',
							value: 35
						},
						{
							name: '安阳市',
							value: 35
						},
						{
							name: '鹤壁市',
							value: 35
						},
						{
							name: '濮阳市',
							value: 35
						},
						{
							name: '开封市',
							value: 45
						}
					],
				}]
			};
			$.get(henan, function(csJson) { //引入你需要绘画的地图json表
				echarts.registerMap('henan', csJson);
				var myEcharts = echarts.init(document.getElementById("chart-panel"))
				myEcharts.setOption(option)
			});