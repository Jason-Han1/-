option ={
					backgroundColor: 'RGB(2,22,76)',
					color: ['RGB(1,255,152)', 'RGB(244,191,70)','pink'],
					title: {
						text: '学生对各科的扩展练习数量',
						top: 21,
						left: '21',
						textStyle: {
							fontSize: 18,
							color: '#fff'
						}
					},
					animation: false,
					"grid": {
						"top": "67",
						"left": "32",
						"bottom": "15",
						"right": "39",
						"containLabel": true
					},
					"legend":{
						"show":true,
						top: 15,
						right: 26,
						data:['个人练习数量','年级平均练习数量'],
						textStyle:{
							color: "RGB(193,223,255)"
						}
					},
					"xAxis": [{
						"type": "category",
						"data": ["语文", "数学","英语","生物","物理","化学",'政治','历史','地理'],
						"axisTick": {
							"alignWithLabel": true
						},
						"nameTextStyle": {
							"color": "#fff"
						},
						"axisLine": {
							"lineStyle": {
								"color": "RGB(47,68,114)"
							}
						},
						"axisLabel": {
							"textStyle": {
								"color": "white"
							},
							margin: 20
						}
					}],
					"yAxis": [{
						"type": "value",
						"axisLabel": {
							"textStyle": {
								"color": "white"
							},
							"formatter": "{value}"
						},
						"splitLine": {
							"lineStyle": {
								"type": "dashed",
								"color": "RGB(47,68,114)"
							}
						},
						"axisLine": {
							"show": true,
							 "lineStyle": {
								"color": "RGB(47,68,114)"
							}
						}
					}],
					"series": [{
							name:'个人练习数量',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 30
							}, {
								"value": 64
							},{
								"value": 50
							}, {
								"value": 26
							},{
								"value": 9
							}, {
								"value": 46
							}, {
								"value": 51
							}, {
								"value": 65
							}, {
								"value": 30
							}]
						},
						{
							name:'年级平均练习数量',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 68
							}, {
								"value":74
							},{
								"value": 68
							}, {
								"value":64
							},{
								"value": 68
							}, {
								"value": 54
							}, {
								"value": 46
							}, {
								"value": 80
							}, {
								"value": 46
							}]
						}
					]
				};