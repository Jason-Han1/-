option = {
			backgroundColor: "#fff",
			//title:titleArr,
			series: [{
				"name": "装备制造",
				"type": "pie",
				"clockWise": false,
				"radius": [60, 70],
				"itemStyle": {
					"normal": {
						"color": "#389af4",
						"shadowColor": "#389af4",
						"shadowBlur": 0,
						"label": {
							"show": false
						},
						"labelLine": {
							"show": false
						}
					}
				},
				"hoverAnimation": false,
				"center": ["10%", "50%"],
				"data": [{
					"value": 54,
					"label": {
						"normal": {
							"rich": {
								"a": {
									"color": "#3a7ad5",
									"align": "center",
									"fontSize": 20,
									"fontWeight": "bold"
								},
								"b": {
									"color": "#3a7ad5",
									"align": "center",
									"fontSize": 16
								}
							},
							formatter: function(params) {
								return "{a|5%}\n\n{b|一级类}";
							},
							"position": "center",
							"show": true,
							"textStyle": {
								"fontSize": "20",
								"fontWeight": "bold",
								"color": "#389af4"
							}
						}
					}
				}, {
					"value": 46,
					"name": "invisible",
					"itemStyle": {
						"normal": {
							"color": "#dfeaff"
						},
						"emphasis": {
							"color": "#dfeaff"
						}
					}
				}]
			}, {
				"name": "现代材料",
				"type": "pie",
				"clockWise": false,
				"radius": [60, 70],
				"itemStyle": {
					"normal": {
						"color": "#ff8c37",
						"shadowColor": "#ff8c37",
						"shadowBlur": 0,
						"label": {
							"show": false
						},
						"labelLine": {
							"show": false
						}
					}
				},
				"hoverAnimation": false,
				"center": ["30%", "50%"],
				"data": [{
					"value": 44,
					"label": {
						"normal": {
							"rich": {
								"a": {
									"color": "#3a7ad5",
									"align": "center",
									"fontSize": 20,
									"fontWeight": "bold"
								},
								"b": {
									"color": "#3a7ad5",
									"align": "center",
									"fontSize": 16
								}
							},
							formatter: function(params) {
								return "{a|5%}\n\n{b|二级类}";
							},
							"position": "center",
							"show": true,
							"textStyle": {
								"fontSize": "20",
								"fontWeight": "bold",
								"color": "#ff8c37"
							}
						}
					}
				}, {
					"value": 56,
					"name": "invisible",
					"itemStyle": {
						"normal": {
							"color": "#ffdcc3"
						},
						"emphasis": {
							"color": "#ffdcc3"
						}
					}
				}]
			}, {
				"name": "商贸物流",
				"type": "pie",
				"clockWise": false,
				"radius": [60, 70],
				"itemStyle": {
					"normal": {
						"color": "#ffc257",
						"shadowColor": "#ffc257",
						"shadowBlur": 0,
						"label": {
							"show": false
						},
						"labelLine": {
							"show": false
						}
					}
				},
				"hoverAnimation": false,
				"center": ["50%", "50%"],
				"data": [{
					"value": 20,
					"label": {
						"normal": {
							"rich": {
								"a": {
									"color": "#3a7ad5",
									"align": "center",
									"fontSize": 20,
									"fontWeight": "bold"
								},
								"b": {
									"color": "#3a7ad5",
									"align": "center",
									"fontSize": 16
								}
							},
							formatter: function(params) {
								return "{a|5%}\n\n{b|三级类}";
							},
							"position": "center",
							"show": true,
							"textStyle": {
								"fontSize": "20",
								"fontWeight": "bold",
								"color": "#ffc257"
							}
						}
					}
				}, {
					"value": 80,
					"name": "invisible",
					"itemStyle": {
						"normal": {
							"color": "#ffedcc"
						},
						"emphasis": {
							"color": "#ffedcc"
						}
					}
				}]
			}]
		}