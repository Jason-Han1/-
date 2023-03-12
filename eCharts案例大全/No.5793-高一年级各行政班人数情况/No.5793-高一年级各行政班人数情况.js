option ={
					backgroundColor: 'RGB(2,22,76)',
					color: ['RGB(1,255,152)', 'RGB(244,191,70)','pink'],
					title: {
						text: '高一年级各行政班人数情况',
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
						data:['学生人数'],
						textStyle:{
							color: "RGB(193,223,255)"
						}
					},
					"xAxis": [{
						"type": "category",
						"data": ["行政一班", "行政二班","行政三班","行政四班","行政五班"],
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
							name:'学生人数',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 78
							}, {
								"value": 82
							},{
								"value": 76
							}, {
								"value": 91
							},{
								"value": 85
							}, {
								"value": 82
							}]
						}
					]
				};