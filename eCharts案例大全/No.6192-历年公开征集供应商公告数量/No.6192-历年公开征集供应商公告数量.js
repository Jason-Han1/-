option ={
					backgroundColor: 'RGB(2,22,76)',
					title: {
						text: '历年公开征集供应商公告数量',
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
						data:['公开征集供应商公告数量','数量前10位采购人公告数量合计'],
						textStyle:{
							color: "RGB(193,223,255)"
						}
					},
					"xAxis": [{
						"type": "category",
						"data": ["2014年","2015年", "2016年","2017年","2018年","2019年"],
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
							name:'公开征集供应商公告数量',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 69
							}, {
								"value": 119
							},{
								"value":1244
							}, {
								"value": 3038
							},{
								"value": 4153
							}, {
								"value": 6208
							}]
						},
						{
							name:'数量前10位采购人公告数量合计',
							type: 'bar',
							//silent: true,
							"barWidth": "12",
							//barGap: '-100%', // Make series be overlap
							"data": [{
								"value": 43
							}, {
								"value": 67
							},{
								"value": 437
							}, {
								"value": 894
							},{
								"value": 1171
							}, {
								"value": 1468
							}]
						}
					]
				};