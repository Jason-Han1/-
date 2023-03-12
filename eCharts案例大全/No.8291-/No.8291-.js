option = {
	"color": ["#3A62CA", "#3AC7CA", "#73CA3A", "#F4971E", "#F62727", "#E93CB8", "#892DE5", "#2E8EC7", "#2C6B51", "#304068"],
	"subtitle": {
		"text": ""
	},
	"exporting": {
		"enabled": false
	},
	"rangeSelector": {
		"enabled": false
	},
	"navigator": {
		"enabled": false
	},
	"scrollbar": {
		"enabled": false
	},
	"threshold": 140000,
	"chartNotMerge": true,
	"gradientColor": ["#f6efa6", "#d88273", "#bf444c"],
	"textStyle": {
		"fontFamily": "sans-serif",
		"fontSize": 12,
		"fontStyle": "normal",
		"fontWeight": "normal"
	},
	"animation": "auto",
	"animationDuration": 1000,
	"animationDurationUpdate": 300,
	"animationEasing": "exponentialOut",
	"animationEasingUpdate": "cubicOut",
	"animationThreshold": 2000,
	"progressiveThreshold": 3000,
	"progressive": 400,
	"hoverLayerThreshold": 3000,
	"useUTC": false,
	"title": [{
		"margin": 0,
		"text": "",
		"zlevel": 0,
		"z": 6,
		"show": true,
		"target": "blank",
		"subtext": "",
		"subtarget": "blank",
		"left": 0,
		"top": 0,
		"backgroundColor": "rgba(0,0,0,0)",
		"borderColor": "#ccc",
		"borderWidth": 0,
		"padding": 5,
		"itemGap": 10,
		"textStyle": {
			"fontSize": 18,
			"fontWeight": "bolder",
			"color": "#333"
		},
		"subtextStyle": {
			"color": "#aaa"
		}
	}],
	"axisPointer": [{
		"show": "auto",
		"triggerOn": null,
		"zlevel": 0,
		"z": 50,
		"type": "line",
		"snap": false,
		"triggerTooltip": true,
		"value": null,
		"status": null,
		"link": [],
		"animation": null,
		"animationDurationUpdate": 200,
		"lineStyle": {
			"color": "#aaa",
			"width": 1,
			"type": "solid"
		},
		"shadowStyle": {
			"color": "rgba(150,150,150,0.3)"
		},
		"label": {
			"show": true,
			"formatter": null,
			"precision": "auto",
			"margin": 3,
			"color": "#fff",
			"padding": [5, 7, 5, 7],
			"backgroundColor": "auto",
			"borderColor": null,
			"borderWidth": 0,
			"shadowBlur": 3,
			"shadowColor": "#aaa"
		},
		"handle": {
			"show": false,
			"icon": "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
			"size": 45,
			"margin": 50,
			"color": "#333",
			"shadowBlur": 3,
			"shadowColor": "#aaa",
			"shadowOffsetX": 0,
			"shadowOffsetY": 2,
			"throttle": 40
		}
	}],
	"tooltip": [{
		"backgroundColor": "#fff",
		"trigger": "axis",
		"padding": [10, 20, 10, 10],
		"textStyle": {
			"color": "#666",
			"fontSize": 12
		},
		"axisPointer": {
			"lineStyle": {
				"color": "#3a62ca"
			},
			"type": "line",
			"axis": "auto",
			"animation": "auto",
			"animationDurationUpdate": 200,
			"animationEasingUpdate": "exponentialOut",
			"crossStyle": {
				"color": "#999",
				"width": 1,
				"type": "dashed",
				"textStyle": {}
			}
		},
		"extraCssText": "border-radius:0;padding:0;background-color:rgba(255,255,255,.95);box-shadow:2px 2px 4px 2px rgba(58,98,202,.3);",
		"zlevel": 0,
		"z": 60,
		"show": true,
		"showContent": true,
		"triggerOn": "mousemove|click",
		"alwaysShowContent": false,
		"displayMode": "single",
		"renderMode": "auto",
		"confine": false,
		"showDelay": 0,
		"hideDelay": 100,
		"transitionDuration": 0.4,
		"enterable": false,
		"borderColor": "#333",
		"borderRadius": 4,
		"borderWidth": 0
	}],
	"yAxis": [{
		"splitLine": {
			"color": "#eee",
			"show": true,
			"lineStyle": {
				"color": ["#ccc"],
				"width": 1,
				"type": "solid"
			}
		},
		"axisLine": {
			"lineStyle": {
				"color": "#ccc",
				"width": 1,
				"type": "solid"
			},
			"show": true,
			"onZero": true,
			"onZeroAxisIndex": null,
			"symbol": ["none", "none"],
			"symbolSize": [10, 15]
		},
		"axisLabel": {
			"color": "#333",
			"show": true,
			"inside": false,
			"rotate": 0,
			"showMinLabel": null,
			"showMaxLabel": null,
			"margin": 8,
			"fontSize": 12
		},
		"axisTick": {
			"show": false,
			"inside": false,
			"length": 5,
			"lineStyle": {
				"width": 1
			}
		},
		"minPadding": 0,
		"opposite": false,
		"boundaryGap": [0, 0],
		"splitNumber": 5,
		"minorTick": {
			"show": false,
			"splitNumber": 5,
			"length": 3,
			"lineStyle": {}
		},
		"minorSplitLine": {
			"show": false,
			"lineStyle": {
				"color": "#eee",
				"width": 1
			}
		},
		"show": true,
		"zlevel": 0,
		"z": 0,
		"inverse": false,
		"name": "",
		"nameLocation": "end",
		"nameRotate": null,
		"nameTruncate": {
			"maxWidth": null,
			"ellipsis": "...",
			"placeholder": "."
		},
		"nameTextStyle": {},
		"nameGap": 15,
		"silent": false,
		"triggerEvent": false,
		"tooltip": {
			"show": false
		},
		"axisPointer": {},
		"splitArea": {
			"show": false,
			"areaStyle": {
				"color": ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
			}
		},
		"offset": 0,
		"type": "value",
		"rangeEnd": null,
		"rangeStart": null
	}],
	"xAxis": [{
		"type": "category",
		"splitLine": {
			"show": false,
			"lineStyle": {
				"color": ["#ccc"],
				"width": 1,
				"type": "solid"
			}
		},
		"axisLine": {
			"lineStyle": {
				"color": "#ccc",
				"width": 1,
				"type": "solid"
			},
			"show": true,
			"onZero": true,
			"onZeroAxisIndex": null,
			"symbol": ["none", "none"],
			"symbolSize": [10, 15]
		},
		"axisLabel": {
			"color": "#333",
			"padding": [0, 10],
			"rich": {
				"spStyle": {
					"fontWeight": "bold"
				}
			},
			"interval": "auto",
			"show": true,
			"inside": false,
			"rotate": 0,
			"showMinLabel": null,
			"showMaxLabel": null,
			"margin": 8,
			"fontSize": 12
		},
		"axisTick": {
			"show": false,
			"alignWithLabel": false,
			"interval": "auto",
			"inside": false,
			"length": 5,
			"lineStyle": {
				"width": 1
			}
		},
		"boundaryGap": false,
		"showMaxLabel": false,
		"splitNumber": 13,
		"deduplication": null,
		"show": true,
		"zlevel": 0,
		"z": 0,
		"inverse": false,
		"name": "",
		"nameLocation": "end",
		"nameRotate": null,
		"nameTruncate": {
			"maxWidth": null,
			"ellipsis": "...",
			"placeholder": "."
		},
		"nameTextStyle": {},
		"nameGap": 15,
		"silent": false,
		"triggerEvent": false,
		"tooltip": {
			"show": false
		},
		"axisPointer": {
			"status": "hide",
			"value": 58
		},
		"splitArea": {
			"show": false,
			"areaStyle": {
				"color": ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
			}
		},
		"offset": 0,
		"rangeEnd": null,
		"rangeStart": null
	}],
	"grid": [{
		"top": 30,
		"right": 0,
		"bottom": 60,
		"containLabel": true,
		"width": "100%",
		"height": "100%",
		"left": 0,
		"show": false,
		"zlevel": 0,
		"z": 0,
		"backgroundColor": "rgba(0,0,0,0)",
		"borderWidth": 1,
		"borderColor": "#ccc"
	}],
	"series": [{
		"name": "指标1",
		"data": [
			[1529409600000, 134740],
			[1529409660000, 134748],
			[1529409720000, 144181],
			[1529409780000, 172382],
			[1529409840000, 129517],
			[1529409900000, 123698],
			[1529409960000, 121405],
			[1529410020000, 121400],
			[1529410080000, 119844],
			[1529410140000, 120037],
			[1529410200000, 119438],
			[1529410260000, 119643],
			[1529410320000, 118741],
			[1529410380000, 118377],
			[1529410440000, 116942],
			[1529410500000, 116924],
			[1529410560000, 117692],
			[1529410620000, 117866],
			[1529410680000, 117684],
			[1529410740000, 115287],
			[1529410800000, 117207],
			[1529410860000, 124365],
			[1529410920000, 123296],
			[1529410980000, 122052],
			[1529411040000, 118856],
			[1529411100000, 117202],
			[1529411160000, 116981],
			[1529411220000, 118927],
			[1529411280000, 115803],
			[1529411340000, 117259],
			[1529411400000, 118964],
			[1529411460000, 117716],
			[1529411520000, 116544],
			[1529411580000, 117684],
			[1529411640000, 115080],
			[1529411700000, 114624],
			[1529411760000, 116830],
			[1529411820000, 116642],
			[1529411880000, 115601],
			[1529411940000, 114469],
			[1529412000000, 112347],
			[1529412060000, 122014],
			[1529412120000, 120417],
			[1529412180000, 115089],
			[1529412240000, 112815],
			[1529412300000, 116324],
			[1529412360000, 114670],
			[1529412420000, 112497],
			[1529412480000, 116774],
			[1529412540000, 119257],
			[1529412600000, 121955],
			[1529412660000, 121690],
			[1529412720000, 121432],
			[1529412780000, 118179],
			[1529412840000, 116440],
			[1529412900000, 114253],
			[1529412960000, 116167],
			[1529413020000, 119214],
			[1529413080000, 117041]
		],
		"type": "line",
		"symbol": "none",
		"zlevel": 0,
		"z": 2,
		"coordinateSystem": "cartesian2d",
		"legendHoverLink": true,
		"hoverAnimation": true,
		"clip": true,
		"label": {
			"position": "top"
		},
		"lineStyle": {
			"width": 2,
			"type": "solid"
		},
		"step": false,
		"smooth": false,
		"smoothMonotone": null,
		"symbolSize": 4,
		"symbolRotate": null,
		"showSymbol": true,
		"showAllSymbol": "auto",
		"connectNulls": false,
		"sampling": "none",
		"animationEasing": "linear",
		"progressive": 0,
		"hoverLayerThreshold": null,
		"emphasis": {
			"label": {}
		}
	}, {
		"name": "指标2",
		"data": [
			[1529409600000, 68592],
			[1529409660000, 66443],
			[1529409720000, 68637],
			[1529409780000, 68697],
			[1529409840000, 68716],
			[1529409900000, 67119],
			[1529409960000, 68135],
			[1529410020000, 67068],
			[1529410080000, 65789],
			[1529410140000, 65779],
			[1529410200000, 65777],
			[1529410260000, 65879],
			[1529410320000, 65800],
			[1529410380000, 66000],
			[1529410440000, 66008],
			[1529410500000, 67277],
			[1529410560000, 66987],
			[1529410620000, 66771],
			[1529410680000, 66943],
			[1529410740000, 64825],
			[1529410800000, 66635],
			[1529410860000, 67960],
			[1529410920000, 66948],
			[1529410980000, 67606],
			[1529411040000, 64638],
			[1529411100000, 63868],
			[1529411160000, 65210],
			[1529411220000, 66572],
			[1529411280000, 66151],
			[1529411340000, 67589],
			[1529411400000, 66340],
			[1529411460000, 66191],
			[1529411520000, 66504],
			[1529411580000, 67385],
			[1529411640000, 65806],
			[1529411700000, 65614],
			[1529411760000, 66191],
			[1529411820000, 65664],
			[1529411880000, 65783],
			[1529411940000, 64951],
			[1529412000000, 64353],
			[1529412060000, 68035],
			[1529412120000, 67170],
			[1529412180000, 66725],
			[1529412240000, 64843],
			[1529412300000, 65341],
			[1529412360000, 64871],
			[1529412420000, 64194],
			[1529412480000, 65090],
			[1529412540000, 65905],
			[1529412600000, 68489],
			[1529412660000, 67083],
			[1529412720000, 66888],
			[1529412780000, 65622],
			[1529412840000, 63742],
			[1529412900000, 63152],
			[1529412960000, 63549],
			[1529413020000, 64021],
			[1529413080000, 62980]
		],
		"type": "line",
		"symbol": "none",
		"zlevel": 0,
		"z": 2,
		"coordinateSystem": "cartesian2d",
		"legendHoverLink": true,
		"hoverAnimation": true,
		"clip": true,
		"label": {
			"position": "top"
		},
		"lineStyle": {
			"width": 2,
			"type": "solid"
		},
		"step": false,
		"smooth": false,
		"smoothMonotone": null,
		"symbolSize": 4,
		"symbolRotate": null,
		"showSymbol": true,
		"showAllSymbol": "auto",
		"connectNulls": false,
		"sampling": "none",
		"animationEasing": "linear",
		"progressive": 0,
		"hoverLayerThreshold": null,
		"emphasis": {
			"label": {}
		}
	}, {
		"type": "line",
		"markLine": {
			"silent": true,
			"symbol": "none",
			"label": {
				"position": "end"
			},
			"data": [{
				"yAxis": 140000,
				"lineStyle": {
					"color": "#f00",
					"type": "solid",
					"width": 1
				},
				"label": {},
				"emphasis": {
					"label": {}
				}
			}],
			"emphasis": {
				"label": {}
			}
		},
		"zlevel": 0,
		"z": 2,
		"coordinateSystem": "cartesian2d",
		"legendHoverLink": true,
		"hoverAnimation": true,
		"clip": true,
		"label": {
			"position": "top"
		},
		"lineStyle": {
			"width": 2,
			"type": "solid"
		},
		"step": false,
		"smooth": false,
		"smoothMonotone": null,
		"symbol": "emptyCircle",
		"symbolSize": 4,
		"symbolRotate": null,
		"showSymbol": true,
		"showAllSymbol": "auto",
		"connectNulls": false,
		"sampling": "none",
		"animationEasing": "linear",
		"progressive": 0,
		"hoverLayerThreshold": null,
		"emphasis": {
			"label": {}
		}
	}],
	"visualMap": [],
	"legend": [{
		"show": true,
		"bottom": 0,
		"icon": "line",
		"type": "scroll",
		"itemWidth": 10,
		"zlevel": 0,
		"z": 4,
		"orient": "horizontal",
		"left": "center",
		"top": null,
		"align": "auto",
		"backgroundColor": "rgba(0,0,0,0)",
		"borderColor": "#ccc",
		"borderRadius": 0,
		"borderWidth": 0,
		"padding": 5,
		"itemGap": 10,
		"itemHeight": 14,
		"inactiveColor": "#ccc",
		"inactiveBorderColor": "#ccc",
		"itemStyle": {
			"borderWidth": 0
		},
		"textStyle": {
			"color": "#333"
		},
		"selectedMode": true,
		"selector": false,
		"selectorLabel": {
			"show": true,
			"borderRadius": 10,
			"padding": [3, 5, 3, 5],
			"fontSize": 12,
			"fontFamily": " sans-serif",
			"color": "#666",
			"borderWidth": 1,
			"borderColor": "#666"
		},
		"emphasis": {
			"selectorLabel": {
				"show": true,
				"color": "#eee",
				"backgroundColor": "#666"
			}
		},
		"selectorPosition": "auto",
		"selectorItemGap": 7,
		"selectorButtonGap": 10,
		"tooltip": {
			"show": false
		},
		"scrollDataIndex": 0,
		"pageButtonItemGap": 5,
		"pageButtonGap": null,
		"pageButtonPosition": "end",
		"pageFormatter": "{current}/{total}",
		"pageIcons": {
			"horizontal": ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
			"vertical": ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
		},
		"pageIconColor": "#2f4554",
		"pageIconInactiveColor": "#aaa",
		"pageIconSize": 15,
		"pageTextStyle": {
			"color": "#333"
		},
		"animationDurationUpdate": 800,
		"selected": {}
	}],
	"markArea": [{
		"zlevel": 0,
		"z": 1,
		"tooltip": {
			"trigger": "item"
		},
		"animation": false,
		"label": {
			"show": true,
			"position": "top"
		},
		"itemStyle": {
			"borderWidth": 0
		},
		"emphasis": {
			"label": {
				"show": true,
				"position": "top"
			}
		}
	}],
	"markLine": [{
		"zlevel": 0,
		"z": 5,
		"symbol": ["circle", "arrow"],
		"symbolSize": [8, 16],
		"precision": 2,
		"tooltip": {
			"trigger": "item"
		},
		"label": {
			"show": true,
			"position": "end",
			"distance": 5
		},
		"lineStyle": {
			"type": "dashed"
		},
		"emphasis": {
			"label": {
				"show": true
			},
			"lineStyle": {
				"width": 3
			}
		},
		"animationEasing": "linear"
	}],
	"markPoint": [{
		"zlevel": 0,
		"z": 5,
		"symbol": "pin",
		"symbolSize": 50,
		"tooltip": {
			"trigger": "item"
		},
		"label": {
			"show": true,
			"position": "inside"
		},
		"itemStyle": {
			"borderWidth": 2
		},
		"emphasis": {
			"label": {
				"show": true
			}
		}
	}],
	"marker": [],
	"brush": [],
	"dataZoom": [{
		"bottom": 24,
		"start": 0,
		"height": 20,
		"handleStyle": {
			"color": "#d3dee5"
		},
		"type": "slider",
		"backgroundColor": "#e8e9ef",
		"dataBackground": {
			"areaStyle": {
				"color": "#e8e9ef",
				"opacity": 0.3
			},
			"lineStyle": {
				"color": "#2f4554",
				"width": 0.5,
				"opacity": 0.3
			}
		},
		"fillerColor": "#e9efff",
		"showDataShadow": false,
		"zlevel": 0,
		"z": 4,
		"orient": "horizontal",
		"xAxisIndex": [0],
		"yAxisIndex": [],
		"filterMode": "filter",
		"throttle": 100,
		"end": 100,
		"startValue": 0,
		"endValue": 58,
		"minSpan": null,
		"maxSpan": null,
		"minValueSpan": null,
		"maxValueSpan": null,
		"rangeMode": null,
		"show": true,
		"right": "ph",
		"width": "ph",
		"left": null,
		"borderColor": "#ddd",
		"handleIcon": "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
		"handleSize": "100%",
		"labelPrecision": null,
		"showDetail": true,
		"realtime": true,
		"zoomLock": false,
		"textStyle": {
			"color": "#333"
		},
		"zAxisIndex": [],
		"radiusAxisIndex": [],
		"angleAxisIndex": [],
		"singleAxisIndex": []
	}]
}