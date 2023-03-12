option ={
					backgroundColor: 'RGB(2,22,76)',
					color: ['#00ffff', '#f9d000','#00ff54','#f56803'],
					animation: false,
					"grid": {
						"top": "67",
						"left": "32",
						"bottom": "15",
						"right": "39",
						"containLabel": true
					},
					"legend":{
					    itemWidth: 12,
					    itemHeight: 12,
						"show":true,
						top: 15,
						right: 26,
						data:['2016','2017','2018','2019'],
						textStyle:{
							color: "RGB(193,223,255)"
						}
					},
					"xAxis": [{
					    name: '产业',
						"type": "category",
						"data": ["钢", "铁","水泥","水泥燃料","平板玻璃"],
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
					    name: '产值（亿元）',
					    nameTextStyle:{
					        color: '#fff',
					        fontSize: 12
					    },
						"type": "value",
						"axisLabel": {
							"textStyle": {
								"color": "white"
							},
							"formatter": "{value}"
						},
						"splitLine": {
						    show: false,
							"lineStyle": {
								"type": "dashed",
								"color": "RGB(47,68,114)"
							}
						},
						axisTick: {
						   show: false  
						},
						"axisLine": {
							"show": true,
							 "lineStyle": {
								"color": "RGB(47,68,114)"
							}
						}
					}],
					"series": [{
							name:'2016',
							type: 'bar',
							//silent: true,
							"barWidth": "4",
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
								"value": 8
							}]
						},
						{
							name:'2017',
							type: 'bar',
							//silent: true,
							"barWidth": "4",
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
								"value": 6
							}]
						},
						{
							name:'2018',
							type: 'bar',
							//silent: true,
							"barWidth": "4",
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
								"value":5
							}]
						},
						{
							name:'2019',
							type: 'bar',
							//silent: true,
							"barWidth": "4",
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
								"value": 4
							}]
						}
					]
				};