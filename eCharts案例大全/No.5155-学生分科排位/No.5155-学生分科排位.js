option ={
//	backgroundColor: 'RGB(2,22,76)',
				
					title: {
						text: '学生分科排位',
						top: 21,
						left: '21',
				// 		textStyle: {
				// 			fontSize: 18,
				// 			color: '#fff'
				// 		}
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
						data:['本次考试排位','上次考试排位'],
				// 		textStyle:{
				// 			color: "RGB(193,223,255)"
				// 		}
					},
					"xAxis": [{
						"type": "category",
						"data": ["语文", "数学","英语","历史",'化学','生物'],
						"axisTick": {
							"alignWithLabel": true
						},
				// 		"nameTextStyle": {
				// 			"color": "#fff"
				// 		},
				// 		"axisLine": {
				// 			"lineStyle": {
				// 				"color": "RGB(47,68,114)"
				// 			}
				// 		},
						"axisLabel": {
				// 			"textStyle": {
				// 				"color": "white"
				// 			},
							margin: 20
						}
					}],
					"yAxis": [{
						"type": "value",
						"axisLabel": {
				// 			"textStyle": {
				// 				"color": "white"
				// 			},
							"formatter": "{value}"
						},
				// 		"splitLine": {
				// 			"lineStyle": {
				// 				"type": "dashed",
				// 				"color": "RGB(47,68,114)"
				// 			}
				// 		},
						"axisLine": {
							"show": true,
				// 			 "lineStyle": {
				// 				"color": "RGB(47,68,114)"
				// 			}
						}
					}],
					"series": [{
							name:'本次考试排位',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 65
							}, {
								"value": 44
							},{
								"value": 54
							}, {
								"value": 51
							},{
								"value": 48
							}, {
								"value": 52
							}]
						},
						{
							name:'上次考试排位',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 32
							}, {
								"value": 57
							},{
								"value": 45
							}, {
								"value": 52
							},{
								"value": 61
							}, {
								"value": 50
							}]
						}
					]
				};