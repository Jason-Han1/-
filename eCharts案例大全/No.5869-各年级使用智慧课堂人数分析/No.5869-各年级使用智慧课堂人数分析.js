option ={
					backgroundColor: 'RGB(2,22,76)',
					color: ['RGB(1,255,152)', 'RGB(244,191,70)','pink'],
					title: {
						text: '各年级使用智慧课堂人数分析',
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
						data:['使用人数'],
						textStyle:{
							color: "RGB(193,223,255)"
						}
					},
					"xAxis": [{
						"type": "category",
						"data": ["高一", "高二","高三"],
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
							name:'使用人数',
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
				// 		},
				// 		{
				// 			name:'2019年',
				// 			type: 'bar',
				// 			//silent: true,
				// 			"barWidth": "12",
				// 			//barGap: '-100%', // Make series be overlap
				// 			"data": [{
				// 				"value": 8
				// 			}, {
				// 				"value": 4
				// 			},{
				// 				"value": 8
				// 			}, {
				// 				"value": 4
				// 			},{
				// 				"value": 8
				// 			}, {
				// 				"value": 4
				// 			}]
				// 		},
				// 		{
				// 			name:'2020年',
				// 			type: 'bar',
				// 			//silent: true,
				// 			"barWidth": "12",
				// 			//barGap: '-100%', // Make series be overlap
				// 			"data": [{
				// 				"value": 5
				// 			}, {
				// 				"value": 2
				// 			},{
				// 				"value": 2
				// 			}, {
				// 				"value": 1
				// 			},{
				// 				"value": 6
				// 			}, {
				// 				"value": 3
				// 			}]
						}
					]
				};