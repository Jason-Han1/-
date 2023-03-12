var value=90;
var max = 100;
let maxList = [100,100,100,100,100];
let valueList = [50,60,66,70,75];
	var pushDataBaseConcactArr = [{
		"name": "2月工单数",
		"data": [{
			value: 0
		}, {
			value: 2
		}]
	}];
	let dataBaseOne = [],
		dataBaseTwo = [];
	dataBaseList = [{
		"name": "连接",
		"value": 2
	}, {
		"name": "断开",
		"value": 0
	}];
	for(let j = 0; j < dataBaseList.length; j++) {
		dataBaseOne.push(dataBaseList[j].name);
		dataBaseTwo.push(parseFloat(dataBaseList[j].value));
	}
	var circleRadius = ['14%', '21%'];
	var center = [
		['22%', '38%']
	];
	var theDataBaseIpColor = [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: '#faa75d'
		}, {
			offset: 1,
			color: '#fed190'
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: '#ff7d63'
		}, {
			offset: 1,
			color: '#f89784'
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: '#ff7d63'
		}, {
			offset: 1,
			color: '#fb8b75'
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: '#ff7d63'
		}, {
			offset: 1,
			color: '#fa8f7a'
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: '#ff7d63'
		}, {
			offset: 1,
			color: '#fa8f7a'
		}]),
	];
	option = {
		legend: {
			textStyle:{
				color:"#fff",
				fontSize:16
			},
			itemWidth:10,
			left:'25%',
			top:"12%",
			data: [{
				name: "断开",
				icon: "circle"
			}, {
				name: "连接",
				icon: "circle"
			}]
		},
		backgroundColor:"#013d5a",
		grid: [{
				x: '10%',
				y: '58%',
				width: '32%',
				height: '23%'
			},
			{
				x: '60%',
				y: '25%',
				width: '37%',
				height: '58%'
			},
		],
		"xAxis": [{
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0a7594',
				}
			},
			axisLabel: {
				color: '#01fffe',
				fontSize: 18
			},
			axisTick: {
				show: true,
				color: '#0a7594'
			},
			splitLine: {
				show: false
			}

		}, {
			gridIndex: 1,
			type: 'value',
			"max": max,
			"splitLine": {
				"show": false
			},
			"axisLine": {
				"show": false
			},
			"axisLabel": {
				"show": false
			},
			"axisTick": {
				"show": false
			}
		}],
		"yAxis": [{
			data: dataBaseOne,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0a7594'
				}
			},
			axisLabel: {
				color: '#fff',
				interval: 0,
				fontSize: 16
			},
			axisTick: {
				show: true,
				color: '#0a7594'
			}
		}, {
			gridIndex: 1,
			"type": "category",
			"inverse": false,
			"data": ["19.130.\n217.211","19.130.\n228.241",  "19.130.\n211.156","10.6.\n2.180", "19.130.\n212.33"],
			"axisLine": {
				"show": false
			},
			"axisTick": {
				"show": false
			},
			"axisLabel": {
				"margin": 12,
				"textStyle": {
					"color": "#41cddc",
					"fontSize": 18
				}
			}
		}],
		"series": [{ //内
				type: 'bar',
				xAxisIndex: 1,
				yAxisIndex: 1,
				barWidth: '42%',
				label: {
					normal: {
						show: true,
						position: 'right',
						textStyle: {
							color: '#fff',
							fontSize: 18
						},
						formatter: function(e) {
							return(e.value / max * 100).toFixed(2) + "%"
						}
					}
				},
				legendHoverLink: false,
				itemStyle: {
					normal: {
						color: function(params, index) {
							return theDataBaseIpColor[params.dataIndex];
						}
					}
				},
				z: 2,
				data: valueList
			},
			{ //框
				xAxisIndex: 1,
				yAxisIndex: 1,
				type: 'bar',
				barWidth: '51%',
				barGap: '-110%',
				label: {
					normal: {
						show: false,
						position: 'right',
						textStyle: {
							color: '#eee'
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#0e5478', //底色
						borderWidth: 1,
						borderColor: '#01fafc'
					}
				},
				data: maxList,
				z: 1,
			},
			{ //分隔
				xAxisIndex: 1,
				yAxisIndex: 1,
				"type": "pictorialBar",
				itemStyle: {
					normal: {
						color: "#0e5478"
					}

				},
				"symbolRepeat": "fixed",
				"symbolMargin": "10",
				symbol: 'rect',
				"symbolClip": true,
				"symbolSize": [2, '55%'],
				"symbolPosition": "start",
				"symbolOffset": [
					0, -2
				],
				"symbolBoundingData": max,
				"data": valueList
			}, {
				type: 'bar',
				barWidth: '56%',
				itemStyle: {
					normal: {
						color: '#00ffff',
					}
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						color: "#fff",
						fontSize: 20
					}
				},
				data: dataBaseTwo
			}, {
				name: pushDataBaseConcactArr[0].name,
				center: center[0],
				radius: circleRadius,
				type: 'pie',
				startAngle: 45,
				hoverAnimation: false,
				label: {
					normal: {
						formatter: function(params, i) {
							return params.percent + "%";
						},
						fontSize: 20,
					},
					position: 'outside',
					show: true,
				},
				data: [{
					name: "断开",
					itemStyle: {
						normal: {
							color: '#ff8066'
						}
					},
					value: pushDataBaseConcactArr[0].data[0].value,

				}, {
					name: "连接",
					value: pushDataBaseConcactArr[0].data[1].value,
					itemStyle: {
						normal: {
							color: '#00ffff'
						}
					},
				}]
			}
		]
	};