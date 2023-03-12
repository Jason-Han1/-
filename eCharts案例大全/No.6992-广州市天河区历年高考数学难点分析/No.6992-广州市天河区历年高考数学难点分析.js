option ={
					backgroundColor: 'RGB(2,22,76)',
					color: ['RGB(1,255,152)', 'RGB(244,191,70)','pink'],
					title: {
						text: '广州市天河区历年高考数学难点分析',
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
						data:['2018年','2019年','2020年'],
						textStyle:{
							color: "RGB(193,223,255)"
						}
					},
					"xAxis": [{
						"type": "category",
						"data": ["三角函数", "数列","平面向量","不等式","立体几何"],
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
							name:'2018年',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 3
							}, {
								"value": 6
							},{
								"value": 10
							}, {
								"value": 6
							},{
								"value": 1
							}, {
								"value": 6
							}]
						},
						{
							name:'2019年',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 8
							}, {
								"value": 4
							},{
								"value": 8
							}, {
								"value": 4
							},{
								"value": 8
							}, {
								"value": 4
							}]
						},
						{
							name:'2020年',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 5
							}, {
								"value": 2
							},{
								"value": 2
							}, {
								"value": 1
							},{
								"value": 6
							}, {
								"value": 3
							}]
						}
					]
				};