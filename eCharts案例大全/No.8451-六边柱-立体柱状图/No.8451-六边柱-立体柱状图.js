option ={
					backgroundColor: 'RGB(2,22,76)',
					color: ['#4cc0e5', '#ece937','#d92018'],
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
						data:['健康','亚健康','不健康'],
						textStyle:{
							color: "RGB(255,255,255)"
						}
					},
					"xAxis": [{
						"type": "category",
						"data": ["绍兴(本级)", "越城区","柯桥区","上虞区","诸暨市","嵊州市","新昌县","滨海新区"],
						"axisTick": {
							"show": false
						},
						"nameTextStyle": {
							"color": "#fff"
						},
						"axisLine": {
							"lineStyle": {
								"color": "RGBA(1,243,246,.2)"
							}
						},
						"axisLabel": {
							"textStyle": {
								"color": "#fff"
							},
							margin: 20
						}
					}],
					"yAxis": [{
						"type": "value",
						"splitNumber":3,
						"axisLabel": {
							"textStyle": {
								"color": "#fff"
							},
							"formatter": "{value}"
						},
						"splitLine": {
							"lineStyle": {
								"color": "RGBA(1,243,246,.2)"
							}
						},
						"axisLine": {
							"show": false,
							 "lineStyle": {
								"color": "RGB(47,68,114)"
							}
						}
					}],
					"series": [{
							name:'健康',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							barGap: '-1%', // Make series be overlap
							"data": [{
								"value": 8
							}, {
								"value": 16
							},{
								"value": 3
							}, {
								"value": 28
							},{
								"value": 6
							}, {
								"value": 0
							}, {
								"value": 30
							}, {
								"value": 13
							}]
						},
						{
							name:'亚健康',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							barGap: '-1%', // Make series be overlap
							"data": [{
								"value": 9
							}, {
								"value": 14
							},{
								"value": 10
							}, {
								"value": 9
							},{
								"value": 7
							}, {
								"value": 22
							},{
								"value": 14
							}, {
								"value": 18
							}]
						},{
							name:'不健康',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							barGap: '-1%', // Make series be overlap
							"data": [{
								"value": 19
							}, {
								"value": 6
							},{
								"value": 20
							}, {
								"value": 0
							},{
								"value": 4
							}, {
								"value": 2
							},{
								"value": 5
							}, {
								"value": 4
							}]
						}
					]
				};