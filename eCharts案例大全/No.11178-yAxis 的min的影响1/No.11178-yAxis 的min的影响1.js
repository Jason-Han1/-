option = {
	"baseOption": {
		"color": ["#5C9E43", "#E9C51C", "#CD3127"],
		"textStyle": {
			"color": "#9aabaf",
			"fontSize": 10
		},
		"legend": {
			"data": [{
				"name": "Ok",
				"icon": "circle"
			}, {
				"name": "Warning",
				"icon": "circle"
			}, {
				"name": "Critical",
				"icon": "circle"
			}],
			"type": "scroll",
			"top": 5,
			"textStyle": {
				"fontSize": 12,
				"color": "#9aabaf"
			},
			"left": 270,
			"selectedMode": false
		},
		"grid": {
			"left": 60,
			"right": 40,
			"top": 40
		},
		"tooltip": {
			"trigger": "axis"
		},
		"toolbox": {
			"show": true,
			"top": 0,
			"right": 22,
			"feature": {
				"dataZoom": {
					"yAxisIndex": false,
					"xAxisIndex": [0]
				},
				"restore": {
					"show": true
				},
				"saveAsImage": {
					"name": "Pulse"
				}
			}
		},
		"xAxis": {
			"splitLine": {
				"show": false
			},
			"type": "time",
			"min": 1559577600000,
			"max": 1560182400000,
			"interval": 86400000,
			"axisLabel": {
				"color": "#f4f4f4"
			},
			"axisTick": {
				"show": true,
				"lineStyle": {
					"color": "#9aabaf"
				}
			},
			"axisLine": {
				"lineStyle": {
					"color": "#9aabaf"
				}
			}
		},
		"yAxis": {
		    show: true,
			"type": "value",
			"max": "70",
			min: 0,
			"splitLine": {
				"show": false
			},
			"boundaryGap": false,
			"nameLocation": "center",
			"nameGap": 40,
			"name": "D20190606 (PSI)",
			"axisLine": {
				"lineStyle": {
					"color": "#9aabaf"
				}
			},
			"axisTick": {
				"show": true,
				"lineStyle": {
					"color": "#9aabaf"
				}
			},
			"axisLabel": {
				"color": "#f4f4f4",
				"fontSize": 10
			}
		},
		"dataZoom": [{
			"type": "slider",
			"filterMode": "weakFilter",
			"showDataShadow": false,
			"bottom": 5,
			"height": 10,
			"xAxisIndex": [0],
			"fillerColor": "#2C6D7C",
			"realtime": true,
			"borderColor": "transparent",
			"backgroundColor": "#e2e2e2",
			"handleIcon": "M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
			"handleSize": 10,
			"handleStyle": {
				"shadowBlur": 6,
				"shadowOffsetX": 1,
				"shadowOffsetY": 2,
				"shadowColor": "#aaa"
			},
			"labelFormatter": ""
		}, {
			"type": "inside",
			"filterMode": "weakFilter"
		}],
		"series": [{
			"name": "Ok",
			"type": "line",
			"data": []
		}, {
			"name": "Warning",
			"type": "line",
			"data": []
		}, {
			"name": "Critical",
			"type": "line",
			"data": []
		}, {
			"name": "Ok",
			"type": "line",
			"data": []
		}, {
			"name": "Warning",
			"type": "line",
			"data": [],
			"markLine": {
				"data": [{
					"yAxis": "5",
					"symbol": "none",
					"lineStyle": {
						"normal": {
							"color": "#D42D2A"
						}
					},
					"label": {
						"position": "start",
						"color": "#1b3c44",
						"fontSize": 10,
						"fontFamily": "\"Open Sans\"",
						"backgroundColor": "#D42D2A",
						"padding": [2, 3, 1, 8]
					}
				}, {
					"yAxis": "10",
					"symbol": "none",
					"lineStyle": {
						"normal": {
							"color": "#E9C51C"
						}
					},
					"label": {
						"position": "start",
						"color": "#1b3c44",
						"fontSize": 10,
						"fontFamily": "\"Open Sans\"",
						"backgroundColor": "#E9C51C",
						"padding": [2, 3, 1, 8]
					}
				}, {
					"yAxis": "60",
					"symbol": "none",
					"lineStyle": {
						"normal": {
							"color": "#E9C51C"
						}
					},
					"label": {
						"position": "start",
						"color": "#1b3c44",
						"fontSize": 10,
						"fontFamily": "\"Open Sans\"",
						"backgroundColor": "#E9C51C",
						"padding": [2, 3, 1, 8]
					}
				}, {
					"yAxis": "70",
					"symbol": "none",
					"lineStyle": {
						"normal": {
							"color": "#D42D2A"
						}
					},
					"label": {
						"position": "start",
						"color": "#1b3c44",
						"fontSize": 10,
						"fontFamily": "\"Open Sans\"",
						"backgroundColor": "#D42D2A",
						"padding": [2, 3, 1, 8]
					}
				}]
			},
			"markArea": {
				"label": {
					"normal": {
						"position": "insideBottomRight",
						"offset": [0, 5],
						"color": "#9aabaf",
						"fontSize": 10
					}
				},
				"data": [
					[{
						"name": "Critical",
						"yAxis": "5"
					}, {
						"yAxis": "5"
					}],
					[{
						"name": "Warning",
						"yAxis": "10"
					}, {
						"yAxis": "10"
					}],
					[{
						"name": "Warning",
						"yAxis": "60"
					}, {
						"yAxis": "60"
					}],
					[{
						"name": "Critical",
						"yAxis": "70"
					}, {
						"yAxis": "70"
					}]
				]
			}
		}, {
			"name": "Critical",
			"type": "line",
			"data": []
		}, {
			"id": "sensorSeries0",
			"type": "line",
			"areaStyle": {
				"opacity": 0
			},
			"showSymbol": false,
			"data": [],
			"markLine": {
				"data": [{
					"yAxis": "5",
					"symbol": "none",
					"lineStyle": {
						"normal": {
							"color": "#D42D2A"
						}
					},
					"label": {
						"position": "start",
						"color": "#1b3c44",
						"fontSize": 10,
						"fontFamily": "\"Open Sans\"",
						"backgroundColor": "#D42D2A",
						"padding": [2, 3, 1, 8]
					}
				}, {
					"yAxis": "10",
					"symbol": "none",
					"lineStyle": {
						"normal": {
							"color": "#E9C51C"
						}
					},
					"label": {
						"position": "start",
						"color": "#1b3c44",
						"fontSize": 10,
						"fontFamily": "\"Open Sans\"",
						"backgroundColor": "#E9C51C",
						"padding": [2, 3, 1, 8]
					}
				}, {
					"yAxis": "60",
					"symbol": "none",
					"lineStyle": {
						"normal": {
							"color": "#E9C51C"
						}
					},
					"label": {
						"position": "start",
						"color": "#1b3c44",
						"fontSize": 10,
						"fontFamily": "\"Open Sans\"",
						"backgroundColor": "#E9C51C",
						"padding": [2, 3, 1, 8]
					}
				}, {
					"yAxis": "70",
					"symbol": "none",
					"lineStyle": {
						"normal": {
							"color": "#D42D2A"
						}
					},
					"label": {
						"position": "start",
						"color": "#1b3c44",
						"fontSize": 10,
						"fontFamily": "\"Open Sans\"",
						"backgroundColor": "#D42D2A",
						"padding": [2, 3, 1, 8]
					}
				}]
			},
			"markArea": {
				"label": {
					"normal": {
						"position": "insideBottomRight",
						"offset": [0, 5],
						"color": "#9aabaf",
						"fontSize": 10
					}
				},
				"data": [
					[{
						"name": "Critical",
						"yAxis": "5"
					}, {
						"yAxis": "5"
					}],
					[{
						"name": "Warning",
						"yAxis": "10"
					}, {
						"yAxis": "10"
					}],
					[{
						"name": "Warning",
						"yAxis": "60"
					}, {
						"yAxis": "60"
					}],
					[{
						"name": "Critical",
						"yAxis": "70"
					}, {
						"yAxis": "70"
					}]
				]
			}
		}, {
			"id": "sensorSeries1",
			"type": "line",
			"areaStyle": {
				"opacity": 0
			},
			"showSymbol": false,
			"data": []
		}],
		"visualMap": {
			"type": "piecewise",
			"controller": {
				"inRange": {
					"symbol": "circle",
					"color": ["red", "blue"]
				}
			},
			"precision": 2,
			"show": false,
			"dimension": 1,
			"top": 7,
			"left": 260,
			"textStyle": {
				"color": "#F4F4F4"
			},
			"outOfRange": {
				"color": "#667579"
			},
			"pieces": [{
				"gt": null,
				"lte": "5",
				"color": "#D42D2A"
			}, {
				"gt": "5",
				"lte": "10",
				"color": "#E9C51C"
			}, {
				"gt": "10",
				"lte": "60",
				"color": "#5C9E43"
			}, {
				"gt": "60",
				"lte": "70",
				"color": "#E9C51C"
			}, {
				"gt": "70",
				"lte": null,
				"color": "#D42D2A"
			}]
		}
	},
	"media": [{
		"query": {
			"maxWidth": 549
		},
		"option": {
			"toolbox": {
				"show": true,
				"top": 0,
				"right": 20
			},
			"legend": {
				"top": 70,
				"left": 0,
				"itemGap": 10
			},
			"grid": {
				"top": 110,
				"right": 10
			},
			"xAxis": {
				"splitLine": {
					"show": false
				},
				"type": "time",
				"min": 1559577600000,
				"max": 1560182400000,
				"interval": 172800000,
				"axisLabel": {
					"fontSize": 10,
					"color": "#f4f4f4",
					"align": "left",
					"padding": [-4, 0, 0, 6]
				},
				"axisTick": {
					"show": true,
					"length": 15
				}
			}
		}
	}, {
		"option": {
			"legend": {
				"top": 5,
				"left": 270,
				"selectedMode": false
			},
			"toolbox": {
				"show": true,
				"top": 0,
				"right": 22
			},
			"grid": {
				"top": 40
			},
			"xAxis": {
				"splitLine": {
					"show": false
				},
				"type": "time",
				"min": 1559577600000,
				"max": 1560182400000,
				"interval": 86400000,
				"axisLabel": {
					"fontSize": 10,
					"color": "#f4f4f4",
					"align": "left",
					"padding": [-4, 0, 0, 6]
				},
				"axisTick": {
					"show": true,
					"length": 15
				}
			}
		}
	}]
}