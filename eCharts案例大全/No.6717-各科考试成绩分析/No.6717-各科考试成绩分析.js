option ={
					backgroundColor: 'RGB(2,22,76)',
					title: {
						text: '各班考试成绩分析',
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
						data:['周考','月考','期中考试'],
						textStyle:{
							color: "RGB(193,223,255)"
						}
					},
					"xAxis": [{
						"type": "category",
						"data": ["一班", "二班","三班","四班","五班",'六班'],
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
							name:'周考',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 78
							}, {
								"value": 81
							},{
								"value": 83
							}, {
								"value": 76
							},{
								"value": 87.5
							}, {
								"value": 86
							}]
						},
						{
							name:'月考',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 84
							}, {
								"value": 74
							},{
								"value": 80
							}, {
								"value": 87
							},{
								"value": 76
							}, {
								"value": 89
							}]
						},
						{
							name:'期中考试',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 75
							}, {
								"value": 92
							},{
								"value": 82
							}, {
								"value": 86.5
							},{
								"value": 79.5
							}, {
								"value": 86
							}]
						}
					]
				};