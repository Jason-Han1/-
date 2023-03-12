{
	"timeline": {
		"show": false,
		"axisType": "category",
		"data": ["昨日", "近一周", "近一月"],
		"autoPlay": true,
		"playInterval": 4000
	},
	"baseOption": {
		"animation": true,
		"animationDuration": 2000,
		"animationEasing": "cubicInOut",
		"animationDurationUpdate": 2000,
		"animationEasingUpdate": "cubicInOut",
		"tooltip": {
			"trigger": "axis",
			"axisPointer": {
				"type": "shadow",
				"shadowStyle": {
					"color": "rgba(150,150,150,0.1)"
				}
			}
		},
		"geo": {
			"show": true,
			"map": "china",
			"roam": true,
			"zoom": 1.2,
			"x": "center",
			"y": "center",
			"label": {
				"emphasis": {
					"show": false
				}
			},
			"itemStyle": {
				"normal": {
					"borderColor": "rgba(147, 235, 248, 1)",
					"borderWidth": 1,
					"areaColor": {
						"type": "radial",
						"x": 0.5,
						"y": 0.5,
						"r": 0.8,
						"colorStops": [{
							"offset": 0,
							"color": "rgba(147, 235, 248, 0)"
						}, {
							"offset": 1,
							"color": "rgba(147, 235, 248, .2)"
						}],
						"globalCoord": false
					},
					"shadowColor": "rgba(128, 217, 248, 1)",
					"shadowOffsetX": -2,
					"shadowOffsetY": 2,
					"shadowBlur": 10
				},
				"emphasis": {
					"areaColor": "#389BB7",
					"borderWidth": 0
				}
			}
		}
	},
	"option": [{
		"series": [{
			"type": "effectScatter",
			"coordinateSystem": "geo",
			"data": [{
				"name": "湖北",
				"value": [114.3896, 30.6628, 14],
				"symbolSize": 80
			}, {
				"name": "上海",
				"value": [121.4648, 31.2891, 11],
				"symbolSize": 62.857142857142854
			}, {
				"name": "江苏",
				"value": [118.8062, 31.9208, 5],
				"symbolSize": 28.571428571428573
			}, {
				"name": "湖南",
				"value": [113.0823, 28.2568, 4],
				"symbolSize": 22.857142857142854
			}, {
				"name": "广东",
				"value": [113.12244, 23.009505, 4],
				"symbolSize": 22.857142857142854
			}, {
				"name": "四川",
				"value": [103.9526, 30.7617, 4],
				"symbolSize": 22.857142857142854
			}, {
				"name": "北京",
				"value": [116.4551, 40.2539, 3],
				"symbolSize": 17.142857142857142
			}, {
				"name": "河南",
				"value": [113.4668, 34.6234, 3],
				"symbolSize": 17.142857142857142
			}, {
				"name": "河北",
				"value": [114.4995, 38.1006, 2],
				"symbolSize": 11.428571428571427
			}, {
				"name": "黑龙江",
				"value": [127.9688, 45.368, 2],
				"symbolSize": 11.428571428571427
			}, {
				"name": "安徽",
				"value": [117.29, 32.0581, 2],
				"symbolSize": 11.428571428571427
			}, {
				"name": "福建",
				"value": [119.4543, 25.9222, 2],
				"symbolSize": 11.428571428571427
			}, {
				"name": "云南",
				"value": [102.9199, 25.4663, 2],
				"symbolSize": 11.428571428571427
			}, {
				"name": "天津",
				"value": [117.4219, 39.4189, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "浙江",
				"value": [119.5313, 29.8773, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "江西",
				"value": [116.0046, 28.6633, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "山东",
				"value": [117.1582, 36.8701, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "贵州",
				"value": [106.6992, 26.7682, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "陕西",
				"value": [109.1162, 34.2004, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "新疆",
				"value": [87.9236, 43.5883, 1],
				"symbolSize": 5.7142857142857135
			}],
			"showEffectOn": "render",
			"rippleEffect": {
				"brushType": "stroke"
			},
			"hoverAnimation": true,
			"label": {
				"normal": {
					"formatter": "{b}",
					"position": "right",
					"show": true,
					"fontSize": 18
				}
			},
			"itemStyle": {
				"normal": {
					"color": "#00bc12",
					"shadowBlur": 10,
					"shadowColor": "#00bc12"
				}
			},
			"zlevel": 1
		}, {
			"name": "light",
			"type": "scatter",
			"coordinateSystem": "geo",
			"data": [{
				"name": "湖北",
				"value": [114.3896, 30.6628, 14],
				"symbolSize": 80
			}, {
				"name": "上海",
				"value": [121.4648, 31.2891, 11],
				"symbolSize": 62.857142857142854
			}, {
				"name": "江苏",
				"value": [118.8062, 31.9208, 5],
				"symbolSize": 28.571428571428573
			}, {
				"name": "湖南",
				"value": [113.0823, 28.2568, 4],
				"symbolSize": 22.857142857142854
			}, {
				"name": "广东",
				"value": [113.12244, 23.009505, 4],
				"symbolSize": 22.857142857142854
			}, {
				"name": "四川",
				"value": [103.9526, 30.7617, 4],
				"symbolSize": 22.857142857142854
			}, {
				"name": "北京",
				"value": [116.4551, 40.2539, 3],
				"symbolSize": 17.142857142857142
			}, {
				"name": "河南",
				"value": [113.4668, 34.6234, 3],
				"symbolSize": 17.142857142857142
			}, {
				"name": "河北",
				"value": [114.4995, 38.1006, 2],
				"symbolSize": 11.428571428571427
			}, {
				"name": "黑龙江",
				"value": [127.9688, 45.368, 2],
				"symbolSize": 11.428571428571427
			}, {
				"name": "安徽",
				"value": [117.29, 32.0581, 2],
				"symbolSize": 11.428571428571427
			}, {
				"name": "福建",
				"value": [119.4543, 25.9222, 2],
				"symbolSize": 11.428571428571427
			}, {
				"name": "云南",
				"value": [102.9199, 25.4663, 2],
				"symbolSize": 11.428571428571427
			}, {
				"name": "天津",
				"value": [117.4219, 39.4189, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "浙江",
				"value": [119.5313, 29.8773, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "江西",
				"value": [116.0046, 28.6633, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "山东",
				"value": [117.1582, 36.8701, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "贵州",
				"value": [106.6992, 26.7682, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "陕西",
				"value": [109.1162, 34.2004, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "新疆",
				"value": [87.9236, 43.5883, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "山西",
				"value": [112.3352, 37.9413, 0],
				"symbolSize": 0
			}, {
				"name": "内蒙古",
				"value": [110.3467, 41.4899, 0],
				"symbolSize": 0
			}, {
				"name": "辽宁",
				"value": [123.1238, 42.1216, 0],
				"symbolSize": 0
			}, {
				"name": "吉林",
				"value": [125.8154, 44.2584, 0],
				"symbolSize": 0
			}, {
				"name": "广西",
				"value": [108.479, 23.1152, 0],
				"symbolSize": 0
			}, {
				"name": "海南",
				"value": [110.3893, 19.8516, 0],
				"symbolSize": 0
			}, {
				"name": "重庆",
				"value": [108.384366, 30.439702, 0],
				"symbolSize": 0
			}, {
				"name": "西藏",
				"value": [91.11, 29.97, 0],
				"symbolSize": 0
			}, {
				"name": "甘肃",
				"value": [103.5901, 36.3043, 0],
				"symbolSize": 0
			}, {
				"name": "青海",
				"value": [101.4038, 36.8207, 0],
				"symbolSize": 0
			}, {
				"name": "宁夏",
				"value": [106.3586, 38.1775, 0],
				"symbolSize": 0
			}],
			"label": {
				"normal": {
					"formatter": "{b}",
					"position": "right",
					"show": true,
					"fontSize": 18
				},
				"emphasis": {
					"show": true
				}
			},
			"itemStyle": {
				"normal": {
					"color": "#00bc12"
				}
			}
		}]
	}, {
		"series": [{
			"type": "effectScatter",
			"coordinateSystem": "geo",
			"data": [{
				"name": "广东",
				"value": [113.12244, 23.009505, 169],
				"symbolSize": 965.7142857142857
			}, {
				"name": "湖北",
				"value": [114.3896, 30.6628, 130],
				"symbolSize": 742.8571428571429
			}, {
				"name": "上海",
				"value": [121.4648, 31.2891, 64],
				"symbolSize": 365.71428571428567
			}, {
				"name": "江苏",
				"value": [118.8062, 31.9208, 58],
				"symbolSize": 331.42857142857144
			}, {
				"name": "河南",
				"value": [113.4668, 34.6234, 57],
				"symbolSize": 325.71428571428567
			}, {
				"name": "浙江",
				"value": [119.5313, 29.8773, 55],
				"symbolSize": 314.2857142857143
			}, {
				"name": "安徽",
				"value": [117.29, 32.0581, 38],
				"symbolSize": 217.14285714285717
			}, {
				"name": "福建",
				"value": [119.4543, 25.9222, 36],
				"symbolSize": 205.71428571428572
			}, {
				"name": "江西",
				"value": [116.0046, 28.6633, 35],
				"symbolSize": 200
			}, {
				"name": "广西",
				"value": [108.479, 23.1152, 33],
				"symbolSize": 188.57142857142858
			}, {
				"name": "北京",
				"value": [116.4551, 40.2539, 30],
				"symbolSize": 171.42857142857142
			}, {
				"name": "辽宁",
				"value": [123.1238, 42.1216, 29],
				"symbolSize": 165.71428571428572
			}, {
				"name": "四川",
				"value": [103.9526, 30.7617, 27],
				"symbolSize": 154.28571428571428
			}, {
				"name": "湖南",
				"value": [113.0823, 28.2568, 25],
				"symbolSize": 142.85714285714286
			}, {
				"name": "河北",
				"value": [114.4995, 38.1006, 24],
				"symbolSize": 137.14285714285714
			}, {
				"name": "山东",
				"value": [117.1582, 36.8701, 19],
				"symbolSize": 108.57142857142858
			}, {
				"name": "重庆",
				"value": [108.384366, 30.439702, 19],
				"symbolSize": 108.57142857142858
			}, {
				"name": "云南",
				"value": [102.9199, 25.4663, 18],
				"symbolSize": 102.85714285714286
			}, {
				"name": "陕西",
				"value": [109.1162, 34.2004, 17],
				"symbolSize": 97.14285714285714
			}, {
				"name": "天津",
				"value": [117.4219, 39.4189, 14],
				"symbolSize": 80
			}],
			"showEffectOn": "render",
			"rippleEffect": {
				"brushType": "stroke"
			},
			"hoverAnimation": true,
			"label": {
				"normal": {
					"formatter": "{b}",
					"position": "right",
					"show": true,
					"fontSize": 18
				}
			},
			"itemStyle": {
				"normal": {
					"color": "#F46E36",
					"shadowBlur": 10,
					"shadowColor": "#F46E36"
				}
			},
			"zlevel": 1
		}, {
			"name": "light",
			"type": "scatter",
			"coordinateSystem": "geo",
			"data": [{
				"name": "广东",
				"value": [113.12244, 23.009505, 169],
				"symbolSize": 965.7142857142857
			}, {
				"name": "湖北",
				"value": [114.3896, 30.6628, 130],
				"symbolSize": 742.8571428571429
			}, {
				"name": "上海",
				"value": [121.4648, 31.2891, 64],
				"symbolSize": 365.71428571428567
			}, {
				"name": "江苏",
				"value": [118.8062, 31.9208, 58],
				"symbolSize": 331.42857142857144
			}, {
				"name": "河南",
				"value": [113.4668, 34.6234, 57],
				"symbolSize": 325.71428571428567
			}, {
				"name": "浙江",
				"value": [119.5313, 29.8773, 55],
				"symbolSize": 314.2857142857143
			}, {
				"name": "安徽",
				"value": [117.29, 32.0581, 38],
				"symbolSize": 217.14285714285717
			}, {
				"name": "福建",
				"value": [119.4543, 25.9222, 36],
				"symbolSize": 205.71428571428572
			}, {
				"name": "江西",
				"value": [116.0046, 28.6633, 35],
				"symbolSize": 200
			}, {
				"name": "广西",
				"value": [108.479, 23.1152, 33],
				"symbolSize": 188.57142857142858
			}, {
				"name": "北京",
				"value": [116.4551, 40.2539, 30],
				"symbolSize": 171.42857142857142
			}, {
				"name": "辽宁",
				"value": [123.1238, 42.1216, 29],
				"symbolSize": 165.71428571428572
			}, {
				"name": "四川",
				"value": [103.9526, 30.7617, 27],
				"symbolSize": 154.28571428571428
			}, {
				"name": "湖南",
				"value": [113.0823, 28.2568, 25],
				"symbolSize": 142.85714285714286
			}, {
				"name": "河北",
				"value": [114.4995, 38.1006, 24],
				"symbolSize": 137.14285714285714
			}, {
				"name": "山东",
				"value": [117.1582, 36.8701, 19],
				"symbolSize": 108.57142857142858
			}, {
				"name": "重庆",
				"value": [108.384366, 30.439702, 19],
				"symbolSize": 108.57142857142858
			}, {
				"name": "云南",
				"value": [102.9199, 25.4663, 18],
				"symbolSize": 102.85714285714286
			}, {
				"name": "陕西",
				"value": [109.1162, 34.2004, 17],
				"symbolSize": 97.14285714285714
			}, {
				"name": "天津",
				"value": [117.4219, 39.4189, 14],
				"symbolSize": 80
			}, {
				"name": "黑龙江",
				"value": [127.9688, 45.368, 14],
				"symbolSize": 80
			}, {
				"name": "山西",
				"value": [112.3352, 37.9413, 11],
				"symbolSize": 62.857142857142854
			}, {
				"name": "海南",
				"value": [110.3893, 19.8516, 10],
				"symbolSize": 57.142857142857146
			}, {
				"name": "贵州",
				"value": [106.6992, 26.7682, 7],
				"symbolSize": 40
			}, {
				"name": "吉林",
				"value": [125.8154, 44.2584, 5],
				"symbolSize": 28.571428571428573
			}, {
				"name": "甘肃",
				"value": [103.5901, 36.3043, 4],
				"symbolSize": 22.857142857142854
			}, {
				"name": "宁夏",
				"value": [106.3586, 38.1775, 3],
				"symbolSize": 17.142857142857142
			}, {
				"name": "内蒙古",
				"value": [110.3467, 41.4899, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "西藏",
				"value": [91.11, 29.97, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "新疆",
				"value": [87.9236, 43.5883, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "青海",
				"value": [101.4038, 36.8207, 0],
				"symbolSize": 0
			}],
			"label": {
				"normal": {
					"formatter": "{b}",
					"position": "right",
					"show": true,
					"fontSize": 18
				},
				"emphasis": {
					"show": true
				}
			},
			"itemStyle": {
				"normal": {
					"color": "#F46E36"
				}
			}
		}]
	}, {
		"series": [{
			"type": "effectScatter",
			"coordinateSystem": "geo",
			"data": [{
				"name": "广东",
				"value": [113.12244, 23.009505, 169],
				"symbolSize": 965.7142857142857
			}, {
				"name": "湖北",
				"value": [114.3896, 30.6628, 130],
				"symbolSize": 742.8571428571429
			}, {
				"name": "上海",
				"value": [121.4648, 31.2891, 64],
				"symbolSize": 365.71428571428567
			}, {
				"name": "江苏",
				"value": [118.8062, 31.9208, 58],
				"symbolSize": 331.42857142857144
			}, {
				"name": "河南",
				"value": [113.4668, 34.6234, 57],
				"symbolSize": 325.71428571428567
			}, {
				"name": "浙江",
				"value": [119.5313, 29.8773, 55],
				"symbolSize": 314.2857142857143
			}, {
				"name": "安徽",
				"value": [117.29, 32.0581, 38],
				"symbolSize": 217.14285714285717
			}, {
				"name": "福建",
				"value": [119.4543, 25.9222, 36],
				"symbolSize": 205.71428571428572
			}, {
				"name": "江西",
				"value": [116.0046, 28.6633, 35],
				"symbolSize": 200
			}, {
				"name": "广西",
				"value": [108.479, 23.1152, 33],
				"symbolSize": 188.57142857142858
			}, {
				"name": "北京",
				"value": [116.4551, 40.2539, 30],
				"symbolSize": 171.42857142857142
			}, {
				"name": "辽宁",
				"value": [123.1238, 42.1216, 29],
				"symbolSize": 165.71428571428572
			}, {
				"name": "四川",
				"value": [103.9526, 30.7617, 27],
				"symbolSize": 154.28571428571428
			}, {
				"name": "湖南",
				"value": [113.0823, 28.2568, 25],
				"symbolSize": 142.85714285714286
			}, {
				"name": "河北",
				"value": [114.4995, 38.1006, 24],
				"symbolSize": 137.14285714285714
			}, {
				"name": "山东",
				"value": [117.1582, 36.8701, 19],
				"symbolSize": 108.57142857142858
			}, {
				"name": "重庆",
				"value": [108.384366, 30.439702, 19],
				"symbolSize": 108.57142857142858
			}, {
				"name": "云南",
				"value": [102.9199, 25.4663, 18],
				"symbolSize": 102.85714285714286
			}, {
				"name": "陕西",
				"value": [109.1162, 34.2004, 17],
				"symbolSize": 97.14285714285714
			}, {
				"name": "天津",
				"value": [117.4219, 39.4189, 14],
				"symbolSize": 80
			}],
			"showEffectOn": "render",
			"rippleEffect": {
				"brushType": "stroke"
			},
			"hoverAnimation": true,
			"label": {
				"normal": {
					"formatter": "{b}",
					"position": "right",
					"show": true,
					"fontSize": 18
				}
			},
			"itemStyle": {
				"normal": {
					"color": "#04B9FF",
					"shadowBlur": 10,
					"shadowColor": "#04B9FF"
				}
			},
			"zlevel": 1
		}, {
			"name": "light",
			"type": "scatter",
			"coordinateSystem": "geo",
			"data": [{
				"name": "广东",
				"value": [113.12244, 23.009505, 169],
				"symbolSize": 965.7142857142857
			}, {
				"name": "湖北",
				"value": [114.3896, 30.6628, 130],
				"symbolSize": 742.8571428571429
			}, {
				"name": "上海",
				"value": [121.4648, 31.2891, 64],
				"symbolSize": 365.71428571428567
			}, {
				"name": "江苏",
				"value": [118.8062, 31.9208, 58],
				"symbolSize": 331.42857142857144
			}, {
				"name": "河南",
				"value": [113.4668, 34.6234, 57],
				"symbolSize": 325.71428571428567
			}, {
				"name": "浙江",
				"value": [119.5313, 29.8773, 55],
				"symbolSize": 314.2857142857143
			}, {
				"name": "安徽",
				"value": [117.29, 32.0581, 38],
				"symbolSize": 217.14285714285717
			}, {
				"name": "福建",
				"value": [119.4543, 25.9222, 36],
				"symbolSize": 205.71428571428572
			}, {
				"name": "江西",
				"value": [116.0046, 28.6633, 35],
				"symbolSize": 200
			}, {
				"name": "广西",
				"value": [108.479, 23.1152, 33],
				"symbolSize": 188.57142857142858
			}, {
				"name": "北京",
				"value": [116.4551, 40.2539, 30],
				"symbolSize": 171.42857142857142
			}, {
				"name": "辽宁",
				"value": [123.1238, 42.1216, 29],
				"symbolSize": 165.71428571428572
			}, {
				"name": "四川",
				"value": [103.9526, 30.7617, 27],
				"symbolSize": 154.28571428571428
			}, {
				"name": "湖南",
				"value": [113.0823, 28.2568, 25],
				"symbolSize": 142.85714285714286
			}, {
				"name": "河北",
				"value": [114.4995, 38.1006, 24],
				"symbolSize": 137.14285714285714
			}, {
				"name": "山东",
				"value": [117.1582, 36.8701, 19],
				"symbolSize": 108.57142857142858
			}, {
				"name": "重庆",
				"value": [108.384366, 30.439702, 19],
				"symbolSize": 108.57142857142858
			}, {
				"name": "云南",
				"value": [102.9199, 25.4663, 18],
				"symbolSize": 102.85714285714286
			}, {
				"name": "陕西",
				"value": [109.1162, 34.2004, 17],
				"symbolSize": 97.14285714285714
			}, {
				"name": "天津",
				"value": [117.4219, 39.4189, 14],
				"symbolSize": 80
			}, {
				"name": "黑龙江",
				"value": [127.9688, 45.368, 14],
				"symbolSize": 80
			}, {
				"name": "山西",
				"value": [112.3352, 37.9413, 11],
				"symbolSize": 62.857142857142854
			}, {
				"name": "海南",
				"value": [110.3893, 19.8516, 10],
				"symbolSize": 57.142857142857146
			}, {
				"name": "贵州",
				"value": [106.6992, 26.7682, 7],
				"symbolSize": 40
			}, {
				"name": "吉林",
				"value": [125.8154, 44.2584, 5],
				"symbolSize": 28.571428571428573
			}, {
				"name": "甘肃",
				"value": [103.5901, 36.3043, 4],
				"symbolSize": 22.857142857142854
			}, {
				"name": "宁夏",
				"value": [106.3586, 38.1775, 3],
				"symbolSize": 17.142857142857142
			}, {
				"name": "内蒙古",
				"value": [110.3467, 41.4899, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "西藏",
				"value": [91.11, 29.97, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "新疆",
				"value": [87.9236, 43.5883, 1],
				"symbolSize": 5.7142857142857135
			}, {
				"name": "青海",
				"value": [101.4038, 36.8207, 0],
				"symbolSize": 0
			}],
			"label": {
				"normal": {
					"formatter": "{b}",
					"position": "right",
					"show": true,
					"fontSize": 18
				},
				"emphasis": {
					"show": true
				}
			},
			"itemStyle": {
				"normal": {
					"color": "#04B9FF"
				}
			}
		}]
	}]
}