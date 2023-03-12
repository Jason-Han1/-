option = {
	 
	"tooltip": {
		"show": false,
		"trigger": "item",
		"formatter": "{b}: {c}"
	},
	"calculable": false,
	"series": [{
		"name": "树图",
		"type": "tree",
		"orient": "vertical",
		"rootLocation": {
			"x": "50%",
			"y": "15%"
		},
		"nodePadding": 20,
		"layerPadding": 40,
		"symbol": "rectangle",
		"borderColor": "#ccc",
		"itemStyle": {
			"normal": {
				"color": "#fff",
				"label": {
					"show": true,
					"position": "inside",
					"textStyle": {
						"color": "#000",
						"fontSize": 12
					}
				},
				"lineStyle": {
					"color": "#000",
					"width": 1,
					"type": "dashed"
				}
			},
			"emphasis": {
				"label": {
					"show": false
				}
			}
		},
		"data": [{
			"name": "董事会",
			"value": 21,
			"symbolSize": [190, 30],
			"symbol": "rectangle",
			"itemStyle": {
				"normal": {
					"borderWidth": 1,
					"borderColor": "black"
				}
			},
			"children": [{
				"name": "组织",
				"value": 21,
				"symbolSize": [190, 30],
				"symbol": "rectangle",
				"itemStyle": {
					"normal": {
						"borderWidth": 1,
						"borderColor": "black"
					}
				},
				"children": [{
					"name": "董事长",
					"symbolSize": [100, 30],
					"symbol": "rectangle",
					"itemStyle": {
						"normal": {
							"label": {
								"show": true,
								"position": "inside",
								"textStyle": {
									"color": "black",
									"fontSize": 8
								}
							},
							"borderWidth": 1,
							"borderColor": "black"
						}
					}
				}, {
					"name": "财务部",
					"symbolSize": [100, 30],
					"symbol": "rectangle",
					"itemStyle": {
						"normal": {
							"label": {
								"show": true,
								"position": "inside",
								"textStyle": {
									"color": "black",
									"fontSize": 8
								}
							},
							"borderWidth": 1,
							"borderColor": "black"
						}
					}
				}, {
					"name": "销售部",
					"symbolSize": [100, 30],
					"symbol": "rectangle",
					"itemStyle": {
						"normal": {
							"label": {
								"show": true,
								"position": "inside",
								"textStyle": {
									"color": "black",
									"fontSize": 8
								}
							},
							"borderWidth": 1,
							"borderColor": "black"
						}
					}
				}, {
					"name": "商务部",
					"symbolSize": [100, 30],
					"symbol": "rectangle",
					"itemStyle": {
						"normal": {
							"label": {
								"show": true,
								"position": "inside",
								"textStyle": {
									"color": "black",
									"fontSize": 8
								}
							},
							"borderWidth": 1,
							"borderColor": "black"
						}
					}
				}, {
					"name": "法务部",
					"symbolSize": [100, 30],
					"symbol": "rectangle",
					"itemStyle": {
						"normal": {
							"label": {
								"show": true, 
								"position": "inside",
								"textStyle": {
									"color": "black",
									"fontSize": 8
								}
							},
							"borderWidth": 1,
							"borderColor": "black"
						}
					}
				}, {
					"name": "电子部",
					"symbolSize": [100, 30],
					"symbol": "rectangle",
					"itemStyle": {
						"normal": {
							"label": {
								"show": true,
								"position": "inside",
								"textStyle": {
									"color": "black",
									"fontSize": 8
								}
							},
							"borderWidth": 1,
							"borderColor": "black"
						}
					}
				}]
			}]
		}]
	}]
}