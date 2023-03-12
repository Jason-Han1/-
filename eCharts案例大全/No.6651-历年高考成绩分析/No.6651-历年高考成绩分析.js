option ={
					backgroundColor: 'RGB(2,22,76)',
					color: ['RGB(1,255,152)', 'RGB(244,191,70)','pink'],
					title: {
						text: '历年高考成绩分析',
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
						data:['平均分','最高分','最低分'],
						textStyle:{
							color: "RGB(193,223,255)"
						}
					},
					"xAxis": [{
						"type": "category",
						"data": ["2016年", "2017年","2018年","2019年",'2020年'],
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
							name:'平均分',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 89
							}, {
								"value": 78
							},{
								"value":85
							}, {
								"value": 62
							}, {
								"value": 72
							}]
						},
						{
							name:'最高分',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 97
							}, {
								"value": 91
							},{
								"value": 86
							}, {
								"value": 83
							}, {
								"value": 82
							}]
						},
						{
							name:'最低分',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 72
							}, {
								"value": 78
							},{
								"value": 68
							}, {
								"value": 74
							}, {
								"value": 77
							}]
						}
					]
				};