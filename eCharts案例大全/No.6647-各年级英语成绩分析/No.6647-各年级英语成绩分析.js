option ={
					backgroundColor: 'RGB(2,22,76)',
				
					title: {
						text: '各年级英语成绩分析',
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
						data:['高一','高二','高三'],
						textStyle:{
							color: "RGB(193,223,255)"
						}
					},
					"xAxis": [{
						"type": "category",
						"data": ["周考", "月考","期中考试","期末考试"],
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
							name:'高一',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 92
							}, {
								"value": 89
							},{
								"value": 85
							}, {
								"value": 93
							}]
						},
						{
							name:'高二',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 78
							}, {
								"value": 82
							},{
								"value": 87
							}, {
								"value": 94
							}]
						},
						{
							name:'高三',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 76
							}, {
								"value": 78
							},{
								"value": 86
							}, {
								"value": 81
							}]
						}
					]
				};