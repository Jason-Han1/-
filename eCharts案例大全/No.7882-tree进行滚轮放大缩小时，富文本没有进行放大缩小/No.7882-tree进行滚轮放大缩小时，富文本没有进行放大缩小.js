option={
			"series": [{
			    roam:true,
			    symbolKeepAspect:true,
				"left": "0%",
				"right": "0%",
				"symbol": "rectangle",
				"color": ["#E8EBED"],
				"label": {
					"show": true,
					"borderColor": "#555",
					"borderWidth": 1,
					"borderRadius": 3,
					"color": "#000000",
					fontSize:24,
					"rich": {
						"tc": {
							"width": 120,
							"align": "center",
							"color": "#000000",
												fontSize:10,

						},
						"titleBg": {
						    	fontSize:10,
							"align": "right",
							"height": 20,
							"borderRadius": [3, 3, 0, 0],
							"width": "100%",
							"backgroundColor": "#F2F2F2",
							"color": "#000000"
						},
						"head": {
						    	fontSize:10,
							"width": "-50%"
						},
						"headBg": {
						    	fontSize:10,
							"align": "center",
							"height": 20,
							"borderRadius": [0, 0, 0, 0],
							"width": "100%",
							"backgroundColor": "#FFFFFF",
							"color": "#000000"
						},
						"hr": {
						    	fontSize:10,
							"borderColor": "#777",
							"width": "100%",
							"borderWidth": 0.5,
							"height": 0
						},
						"footer": {
						    	fontSize:10,
							"width": "-50%"
						},
						"footerBg": {
						    	fontSize:10,
							"align": "center",
							"height": 20,
							"borderRadius": [0, 0, 3, 3],
							"width": "100%",
							"backgroundColor": "#FFFFFF",
							"color": "#000000"
						},
						"target": {
						    	fontSize:10,
							"align": "center",
							"height": 20,
							"width": 60,
							"borderRadius": [0, 0, 0, 3],
							"padding": [0, 0, 0, 0],
							"color": "#000",
							"backgroundColor": "#FFFFFF"
						},
						"value": {
						    	fontSize:10,
							"align": "center",
							"height": 20,
							"width": 60,
							"borderRadius": [0, 0, 3, 0],
							"padding": [0, 0, 0, 0],
							"color": "#000",
							"backgroundColor": "#12B6AF"
						}
					}
				},
				"lineStyle": {
					"normal": {
						"color": "source",
						"type": "solid",
						"width": 0.2,
						"curveness": 0.4
					}
				},
				"itemStyle": {
					"color": null,
					"normal": {
						"color": "#E8EBED",
						"borderWidth": 0
					}
				},
				"name": "20200423订单相关的能力指标展现",
				"type": "tree",
				"orient": "vertical",
				"initialTreeDepth": 30,
				"data": [{
					"name": "20200423订单相关的能力指标展现",
					"relationId": "dc36c06d-aa7c-ef4d-f633-683ac7aff663",
					"symbolSize": [120, 60],
					"symbolOffset": [0, -20],
					"label": {
					    "borderColor": "#FF00FF",
						"formatter": "{tc|{b}}{titleBg|}\n{hr|}\n{head|}{headBg|*订单准时交付率}\n{hr|}\n{target|90}{value|100%}",
						"rich": {
							"value": {
								"backgroundColor": "#12B6AF"
							}
						}
					},
					"children": [{
						"name": "子节点",
						"relationId": "786b67ae-ccf3-1271-d1d2-8fceb204b46e",
					"symbolSize": [120, 60],
						"symbolOffset": [0, -20],
						"label": {
							"formatter": "{tc|{b}}{titleBg|}\n{hr|}\n{head|}{headBg|*采购到货周期}\n{hr|}\n{target|3天}{value|0日}",
							"rich": {
								"value": {
									"backgroundColor": "#12B6AF"
								}
							}
						},
						"children": [{
							"name": "子節點",
							"relationId": "861e164c-0fcc-58c2-6e72-f0fe99af0e7f",
						"symbolSize": [120, 60],
							"symbolOffset": [0, -20],
							"label": {
								"formatter": "{tc|{b}}{titleBg|}\n{hr|}\n{head|}{headBg|採購急單率}\n{hr|}\n{target|40%}{value|88%}",
								"rich": {
									"value": {
										"backgroundColor": "#D93357"
									}
								}
							},
							"children": []
						}, {
							"name": "子節點",
							"relationId": "d9cec27e-b176-dd15-79ce-f623a0f30d0c",
						"symbolSize": [120, 60],
							"symbolOffset": [0, -20],
							"label": {
								"formatter": "{tc|{b}}{titleBg|}\n{hr|}\n{head|}{headBg|訂單平均出貨日數}\n{hr|}\n{target|4}{value|0}",
								"rich": {
									"value": {
										"backgroundColor": "#12B6AF"
									}
								}
							},
							"children": [{
								"name": "子節點",
								"relationId": "90df5c89-3dfc-d3e1-a5d2-a2f6e014bcec",
							"symbolSize": [120, 60],
								"symbolOffset": [0, -20],
								"label": {
									"formatter": "{tc|{b}}{titleBg|}\n{hr|}\n{head|}{headBg|存貨呆滯金額}\n{hr|}\n{target|180000元}{value|92.16420万}",
									"rich": {
										"value": {
											"backgroundColor": "#12B6AF"
										}
									}
								},
								"children": []
							}]
						}]
					}, {
						"name": "子节点",
						"relationId": "70e534fc-aaf8-79e1-a5b2-7cfab69526cd",
						"symbolSize": [120, 60],
						"symbolOffset": [0, -20],
						"label": {
							"formatter": "{tc|{b}}{titleBg|}\n{hr|}\n{head|}{headBg|*到货检验周期}\n{hr|}\n{target|12天}{value|0天}",
							"rich": {
								"value": {
									"backgroundColor": "#12B6AF"
								}
							}
						},
						"children": []
					}, {
						"name": "子節點",
						"relationId": "66f1ac29-f2b4-9df5-b2ec-8ce521bdb414",
					"symbolSize": [120, 60],
						"symbolOffset": [0, -20],
						"label": {
							"formatter": "{tc|{b}}{titleBg|}\n{hr|}\n{head|}{headBg|*订单平均交付天数}\n{hr|}\n{target|15.5天}{value|0}",
							"rich": {
								"value": {
									"backgroundColor": "#D93357"
								}
							}
						},
						"children": []
					}]
				}]
			}]
		}