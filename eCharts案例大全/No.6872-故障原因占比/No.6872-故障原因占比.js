option = {
	"title": {
		"text": "故障原因",
		"textStyle": {
			"color": "white"
		}
	},
	"backgroundColor": "#03486c",
	"tooltip": {
		"trigger": "item",
		"formatter": "{a} <br/>{b}: {c} ({d}%)"
	},
	"series": [
		{
			"name": "欠铸原因",
			"type": "pie",
			"center": [
				"50%",
				"58%"
			],
			"radius": [
				"40%",
				"50%"
			],
			"labelLine": {
				"normal": {
					"show": true
				}
			},
			"data": [
				{
					"value": 335,
					"name": "温度过低",
					"itemStyle": {
						"color": {
							"type": "linear",
							"x": 0,
							"y": 0,
							"x2": 1,
							"y2": 1,
							"colorStops": [
								{
									"offset": 0,
									"color": "#dd847f"
								},
								{
									"offset": 1,
									"color": "#d46e75"
								}
							],
							"global": false
						}
					},
					"label": {
						"color": "#d07678",
						"fontSize": 11
					}
				},
				{
					"value": 310,
					"name": "物体阻碍",
					"itemStyle": {
						"color": {
							"type": "linear",
							"x": 0,
							"y": 0,
							"x2": 1,
							"y2": 1,
							"colorStops": [
								{
									"offset": 0,
									"color": "#6772a5"
								},
								{
									"offset": 1,
									"color": "#e2cabf"
								}
							],
							"global": false
						}
					},
					"label": {
						"color": "#cdbab7",
						"fontSize": 11
					}
				},
				{
					"value": 234,
					"name": "残留物",
					"itemStyle": {
						"color": {
							"type": "linear",
							"x": 0,
							"y": 0,
							"x2": 1,
							"y2": 1,
							"colorStops": [
								{
									"offset": 0,
									"color": "#aadcce"
								},
								{
									"offset": 1,
									"color": "#90dede"
								}
							],
							"global": false
						}
					},
					"label": {
						"color": "#22799f",
						"fontSize": 11
					}
				},
				{
					"value": 135,
					"name": "过载",
					"itemStyle": {
						"color": {
							"type": "linear",
							"x": 0,
							"y": 0,
							"x2": 1,
							"y2": 1,
							"colorStops": [
								{
									"offset": 0,
									"color": "#ff6b62"
								},
								{
									"offset": 1,
									"color": "#fd8565"
								}
							],
							"global": false
						}
					},
					"label": {
						"color": "#fa561f",
						"fontSize": 11
					}
				},
				{
					"value": 1548,
					"name": "断电保护",
					"itemStyle": {
						"color": {
							"type": "linear",
							"x": 0,
							"y": 0,
							"x2": 1,
							"y2": 1,
							"colorStops": [
								{
									"offset": 0,
									"color": "#43c6ab"
								},
								{
									"offset": 1,
									"color": "#d6f5ad"
								}
							],
							"global": false
						}
					},
					"label": {
						"color": "#1eb688",
						"fontSize": 11
					}
				}
			]
		}
	]
};