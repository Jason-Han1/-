option = {
	
	"legend": {
		"selectedMode": false,
		"itemWidth": 4,
		"itemHeight": 4,
		"icon": "circle",
		"textStyle": {
			"fontSize": 9,
			"color": "#888A90",
			"padding": [2, 0, 0, 0]
		},
		"top": 17
	},
	"grid": {
		"top": "75",
		"left": "22",
		"right": "25",
		"bottom": "6%",
		"containLabel": true
	},
	"animation": true,
	"tooltip": {
		"trigger": "axis",
		"axisPointer": {
			"label": {
				"show": false
			},
			"lineStyle": {
				"width": 1,
				"color": "#ff3300"
			}
		},
		"backgroundColor": "rgba(63,66,75,.7)",
		"textStyle": {
			"color": "rgba(255,255,255,.5)"
		},
		"padding": [8, 12],
		"confine": true
	},
	"xAxis": {
		"type": "category",
		"boundaryGap": true,
		"axisLabel": {
			"color": "#666"
		},
		"data": ["20210126", "20210127", "20210128", "20210129", "20210130", "20210131", "20210201"],
		"axisTick": {
			"show": false
		}
	},
	"yAxis": [{
		"name": "(单位:张)",
		"nameTextStyle": {
			"color": "#585B64",
			"fontSize": 10
		},
		"type": "value",
		"axisLabel": {
			"color": "#666"
		},
		"axisPointer": {
			"snap": true
		},
		"axisLine": {
			"show": false
		},
		"axisTick": {
			"show": false
		},
		"min": 0,
		"max": 280000,
		"interval": 70000,
		"splitLine": {
			"show": true,
			"lineStyle": {
				"color": "rgb(34,37,47,.5)",
				"width": 0.5
			}
		}
	}, {
		"name": "(单位:人)",
		"type": "value",
		"position": "right",
		"nameTextStyle": {
			"color": "#585B64",
			"fontSize": 10
		},
		"axisLabel": {
			"color": "#666"
		},
		"axisPointer": {
			"snap": true
		},
		"axisLine": {
			"show": false
		},
		"axisTick": {
			"show": false
		},
		"min": 0,
		"max": 200000,
		"interval": 50000,
		"splitLine": {
			"show": true,
			"lineStyle": {
				"color": "rgb(34,37,47,.5)",
				"width": 0.5
			}
		}
	}],
	"series": [{
		"name": "专车",
		"data": ["190828", "240898", "235073", "225906", "199583", "174498", "234296"],
		"type": "bar",
		"yAxisIndex": 0,
		"showSymbol": false,
		"barWidth": 8,
		"barGap": "0",
		"itemStyle": {
			"normal": {
				"barBorderRadius": [0, 0, 0, 0],
				"color": {
					"x": 0,
					"y": 0,
					"x2": 0,
					"y2": 1,
					"type": "linear",
					"global": false,
					"colorStops": [{
						"offset": 0,
						"color": "#8E581B"
					}, {
						"offset": 1,
						"color": "#7D311A"
					}]
				},
				"opacity": 1
			}
		}
	}, {
		"name": "绿色公务",
		"data": ["131", "151", "143", "126", "70", "54", "423"],
		"type": "bar",
		"yAxisIndex": 0,
		"showSymbol": false,
		"barWidth": 8,
		"barGap": "0",
		"itemStyle": {
			"normal": {
				"barBorderRadius": [0, 0, 0, 0],
				"color": {
					"x": 0,
					"y": 0,
					"x2": 0,
					"y2": 1,
					"type": "linear",
					"global": false,
					"colorStops": [{
						"offset": 0,
						"color": "#035288"
					}, {
						"offset": 1,
						"color": "#103379"
					}]
				},
				"opacity": 1
			}
		}
	}, {
		"name": "聚合平台",
		"data": ["0", "0", "0", "0", "0", "0", "0"],
		"type": "bar",
		"yAxisIndex": 0,
		"showSymbol": false,
		"barWidth": 8,
		"barGap": "0",
		"itemStyle": {
			"normal": {
				"barBorderRadius": [0, 0, 0, 0],
				"color": {
					"x": 0,
					"y": 0,
					"x2": 0,
					"y2": 1,
					"type": "linear",
					"global": false,
					"colorStops": [{
						"offset": 0,
						"color": "#138885"
					}, {
						"offset": 1,
						"color": "#026E78"
					}]
				},
				"opacity": 1
			}
		}
	}, {
		"name": "帮忙",
		"data": ["61", "84", "83", "92", "75", "70", "69"],
		"type": "bar",
		"yAxisIndex": 0,
		"showSymbol": false,
		"barWidth": 8,
		"barGap": "0",
		"itemStyle": {
			"normal": {
				"barBorderRadius": [0, 0, 0, 0],
				"color": {
					"x": 0,
					"y": 0,
					"x2": 0,
					"y2": 1,
					"type": "linear",
					"global": false,
					"colorStops": [{
						"offset": 0,
						"color": "#196B09"
					}, {
						"offset": 1,
						"color": "#0A5835"
					}]
				},
				"opacity": 1
			}
		}
	}, {
		"name": "包车游",
		"data": ["3", "6", "7", "4", "8", "8", "2"],
		"type": "bar",
		"yAxisIndex": 0,
		"showSymbol": false,
		"barWidth": 8,
		"barGap": "0",
		"itemStyle": {
			"normal": {
				"barBorderRadius": [0, 0, 0, 0],
				"color": {
					"x": 0,
					"y": 0,
					"x2": 0,
					"y2": 1,
					"type": "linear",
					"global": false,
					"colorStops": [{
						"offset": 0,
						"color": "#A68019"
					}, {
						"offset": 1,
						"color": "#7E7F1D"
					}]
				},
				"opacity": 1
			}
		}
	}, {
		"name": "顺风车",
		"data": ["0", "0", "0", "0", "0", "0", "0"],
		"type": "bar",
		"yAxisIndex": 0,
		"showSymbol": false,
		"barWidth": 8,
		"barGap": "0",
		"itemStyle": {
			"normal": {
				"barBorderRadius": [0, 0, 0, 0],
				"color": {
					"x": 0,
					"y": 0,
					"x2": 0,
					"y2": 1,
					"type": "linear",
					"global": false,
					"colorStops": [{
						"offset": 0,
						"color": "#727F1B"
					}, {
						"offset": 1,
						"color": "#4A6C10"
					}]
				},
				"opacity": 1
			}
		}
	}, {
		"name": "人数",
		"data": ["156410", "188373", "186828", "182404", "158548", "139682", "196907"],
		"type": "line",
		"yAxisIndex": 1,
		"showSymbol": false,
		"symbol": "image://https://ccimgs.oss.aliyuncs.com/frontend/20200812/5f338e6945637f028b998f47",
		"lineStyle": {
			"width": 1
		},
		"itemStyle": {
			"normal": {
				"color": {
					"type": "linear",
					"x": 0,
					"y": 0,
					"x2": 1,
					"y2": 0,
					"colorStops": [{
						"offset": 0,
						"color": "#7D311A"
					}, {
						"offset": 1,
						"color": "#8E581B"
					}]
				}
			}
		}
	}]
}
