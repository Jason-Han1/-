option = {
	"baseOption": {
		"timeline": {
			"axisType": "category",
			"orient": "vertical",
			"autoPlay": true,
			"loop": false,
			"inverse": true,
			"playInterval": 1600,
			"left": null,
			"right": 0,
			"top": 20,
			"bottom": 20,
			"width": 55,
			"height": null,
			"label": {
				"normal": {
					"textStyle": {
						"color": "#999"
					}
				},
				"emphasis": {
					"textStyle": {
						"color": "#fff"
					}
				}
			},
			"symbol": "none",
			"lineStyle": {
				"color": "#555"
			},
			"checkpointStyle": {
				"color": "#bbb",
				"borderColor": "#777",
				"borderWidth": 2
			},
			"controlStyle": {
				"showNextBtn": false,
				"showPrevBtn": false,
				"normal": {
					"color": "#666",
					"borderColor": "#666"
				},
				"emphasis": {
					"color": "#aaa",
					"borderColor": "#aaa"
				}
			},
			"data": ["1999年", "2000年", "2001年"],
			"show": true
		},
		"title": [{
			"textAlign": "center",
			"left": "72%",
			"top": "70%",
			"textStyle": {
				"fontSize": 60,
				"color": "rgba(113, 113, 113, 1)",
				"fontFamily": "思源黑体 CN"
			},
			"text": "时间轴标题",
			"show": true
		}, {
			"text": "简单条形图",
			"left": "center",
			"top": 10,
			"textStyle": {
				"color": "#494949",
				"fontWeight": "bold",
				"fontSize": 40,
				"fontFamily": "思源黑体 CN"
			}
		}],
		"grid": {
			"x": "17%",
			"y": "7%",
			"top": "80px"
		},
		"xAxis": {
			"type": "value",
			"name": "",
			"axisLabel": {
				"show": true,
				"color": "#000",
				"fontSize": 14,
				"fontFamily": "思源黑体 CN"
			}
		},
		"yAxis": {
			"axisLabel": {
				"fontWeight": "normal",
				"fontSize": 14,
				"show": true,
				"color": "#000",
				"fontFamily": "思源黑体 CN",
				"rich": {},
				"formatter": null
			},
			"data": ["天津市", "山西省", "北京市", "河北省"],
			"name": "",
			"nameTextStyle": {
				"color": "#000",
				"fontSize": 14,
				"fontFamily": "思源黑体 CN"
			}
		},
		"series": [{
			"name": "人口数量",
			"type": "bar",
			"barWidth": 60,
			"itemStyle": {
				"normal": {
					"label": {
						"show": true,
						"position": "insideRight",
						"textStyle": {
							"fontWeight": "bold",
							"fontSize": 18
						},
						"textBorderWidth": 2,
						"formatter": "{b}:{c}"
					},
					"barBorderRadius": 30
				}
			},
			"data": [3, 3, 7, 7]
		}],
		"animationDurationUpdate": 1600,
		"animationEasingUpdate": "linear",
		"backgroundColor": "#fff"
	},
	"options": [{
		"title": {
			"text": "1999年"
		},
		"backgroundColor": null,
		"series": [{
			"data": [3, 3, 7, 7],
			"name": "销量",
			"type": "bar",
			"itemStyle": {
				"normal": {}
			}
		}],
		"yAxis": {
			"data": ["天津市", "山西省", "北京市", "河北省"]
		}
	}, {
		"title": {
			"text": "2000年"
		},
		"backgroundColor": null,
		"series": [{
			"data": [1, 4, 4, 9],
			"name": "销量",
			"type": "bar",
			"itemStyle": {
				"normal": {}
			}
		}],
		"yAxis": {
			"data": ["北京市", "天津市", "山西省", "河北省"]
		}
	}, {
		"title": {
			"text": "2001年"
		},
		"backgroundColor": null,
		"series": [{
			"data": [1, 5, 6, 11],
			"name": "销量",
			"type": "bar",
			"itemStyle": {
				"normal": {}
			}
		}],
		"yAxis": {
			"data": ["河北省", "天津市", "山西省", "北京市"]
		}
	}]
};