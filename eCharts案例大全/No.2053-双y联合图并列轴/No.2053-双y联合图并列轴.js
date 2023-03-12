var option ={
	"xAxis": {
		"name": "year",
		"axisLabel": {
			"show": true,
			"margin": 8,
			"rotate": 0
		},
		"type": "category",
		"filedName": "year",
		"fieldFormat": {
			"dateFormat": "yyyy-MM-dd",
			"decimal": 0,
			"forceDecimal": true,
			"prefix": "",
			"scale": 1,
			"source": "",
			"suffix": "",
			"timeFormat": "HH:mm:ss",
			"type": "DATETIME",
			"viewType": "NONE"
		},
		"data": ["1992-11-23 14:37:50", "1995-05-08 14:30:48", "1997-07-12 14:37:21", "1997-07-22 14:38:31", "2018-06-27 14:38:11", "2019-01-29 16:34:14"]
	},
	"yAxis": [{
			"name": "number",
			"axisLabel": {
				"show": true,
				"margin": 8,
				"rotate": 0
			},
			"type": "value",
			"fieldFormat": {
				"dateFormat": "",
				"decimal": 2,
				"forceDecimal": true,
				"prefix": "",
				"scale": 1,
				"source": "",
				"suffix": "",
				"timeFormat": "",
				"type": "DOUBLE",
				"viewType": "NONE"
			}
		}, {
			"name": "money",
			"axisLabel": {
				"show": true,
				"margin": 8,
				"rotate": 0
			},
			"type": "value",
			"fieldFormat": {
				"dateFormat": "",
				"decimal": 2,
				"forceDecimal": true,
				"prefix": "",
				"scale": 1,
				"source": "",
				"suffix": "",
				"timeFormat": "",
				"type": "DOUBLE",
				"viewType": "NONE"
			}
		}
	],
	"legend": {
		"left": "center",
		"top": "top",
		"orient": "horizontal",
		"data": ["销售", "售前","money","money2"]
	},
	"chartTemplate": {
		"id": "echarts_bar",
		"type": "echarts_bar"
	},
	"series": [{
			"name": "销售",
			"realName": "销售",
			"fieldFormat": {
				"dateFormat": "",
				"decimal": 2,
				"forceDecimal": true,
				"prefix": "",
				"scale": 1,
				"source": "",
				"suffix": "",
				"timeFormat": "",
				"type": "DOUBLE",
				"viewType": "NONE"
			},
			"data": [{
					"rowIndex": 0,
					"value": [0, 627],
					"displayValue": "627.00",
					"rawRowIndex": 0
				}, {
					"rowIndex": 1,
					"value": [1, 20],
					"displayValue": "20.00",
					"rawRowIndex": 1
				}, {
					"rowIndex": 2,
					"value": [2, "-"],
					"displayValue": "-",
					"rawRowIndex": 2
				}, {
					"rowIndex": 3,
					"value": [3, 726],
					"displayValue": "726.00",
					"rawRowIndex": 3
				}, {
					"rowIndex": 4,
					"value": [4, "-"],
					"displayValue": "-",
					"rawRowIndex": 4
				}, {
					"rowIndex": 5,
					"value": [5, "-"],
					"displayValue": "-",
					"rawRowIndex": 5
				}
			],
			"type": "bar"
		}, {
			"name": "售前",
			"realName": "售前",
			"fieldFormat": {
				"dateFormat": "",
				"decimal": 2,
				"forceDecimal": true,
				"prefix": "",
				"scale": 1,
				"source": "",
				"suffix": "",
				"timeFormat": "",
				"type": "DOUBLE",
				"viewType": "NONE"
			},
			"data": [{
					"rowIndex": 0,
					"value": [0, "-"],
					"displayValue": "-",
					"rawRowIndex": 0
				}, {
					"rowIndex": 1,
					"value": [1, "-"],
					"displayValue": "-",
					"rawRowIndex": 1
				}, {
					"rowIndex": 2,
					"value": [2, 36],
					"displayValue": "36.00",
					"rawRowIndex": 2
				}, {
					"rowIndex": 3,
					"value": [3, "-"],
					"displayValue": "-",
					"rawRowIndex": 3
				}, {
					"rowIndex": 4,
					"value": [4, 72],
					"displayValue": "72.00",
					"rawRowIndex": 4
				}, {
					"rowIndex": 5,
					"value": [5, 12],
					"displayValue": "12.00",
					"rawRowIndex": 5
				}
			],
			"type": "bar"
		}, {
			"name": "money",
			"fieldFormat": {
				"dateFormat": "",
				"decimal": 2,
				"forceDecimal": true,
				"prefix": "",
				"scale": 1,
				"source": "",
				"suffix": "",
				"timeFormat": "",
				"type": "DOUBLE",
				"viewType": "NONE"
			},
			"data": [{
					"rowIndex": 0,
					"value": [0, 8171],
					"displayValue": "8171.00",
					"rawRowIndex": 0
				}, {
					"rowIndex": 1,
					"value": [1, 3774],
					"displayValue": "3774.00",
					"rawRowIndex": 1
				}, {
					"rowIndex": 2,
					"value": [2, 929],
					"displayValue": "929.00",
					"rawRowIndex": 2
				}, {
					"rowIndex": 3,
					"value": [3, 986],
					"displayValue": "986.00",
					"rawRowIndex": 3
				}, {
					"rowIndex": 4,
					"value": [4, 283],
					"displayValue": "283.00",
					"rawRowIndex": 4
				}, {
					"rowIndex": 5,
					"value": [5, 234],
					"displayValue": "234.00",
					"rawRowIndex": 5
				}
			],
			"type": "line",
			"yAxisIndex": 1
		},{
			"name": "money2",
			"fieldFormat": {
				"dateFormat": "",
				"decimal": 2,
				"forceDecimal": true,
				"prefix": "",
				"scale": 1,
				"source": "",
				"suffix": "",
				"timeFormat": "",
				"type": "DOUBLE",
				"viewType": "NONE"
			},
			"data": [{
					"rowIndex": 0,
					"value": [0, 4171],
					"displayValue": "4171.00",
					"rawRowIndex": 0
				}, {
					"rowIndex": 1,
					"value": [1, 9774],
					"displayValue": "9774.00",
					"rawRowIndex": 1
				}, {
					"rowIndex": 2,
					"value": [2, 1929],
					"displayValue": "1929.00",
					"rawRowIndex": 2
				}, {
					"rowIndex": 3,
					"value": [3, 6986],
					"displayValue": "6986.00",
					"rawRowIndex": 3
				}, {
					"rowIndex": 4,
					"value": [4, 4283],
					"displayValue": "4283.00",
					"rawRowIndex": 4
				}, {
					"rowIndex": 5,
					"value": [5, 8234],
					"displayValue": "8234.00",
					"rawRowIndex": 5
				}
			],
			"type": "line",
			"yAxisIndex": 1
		}
	],
	"tooltip": {},
	"grid": {}
}
