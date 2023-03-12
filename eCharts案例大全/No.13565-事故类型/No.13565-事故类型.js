option = {
	"title": {
		"text": "事故类型",
		"textStyle": {
			"color": "#2a3f8a"
		}
	},
	"backgroundColor": "#fff",
	"legend": {
	    top:30,
		"data": ["破裂、爆裂、断裂", "泄漏", "漏水", "堵塞", "火灾", "泄漏爆燃", "塌陷", "爆炸", "坍塌", "中毒", "断水", "污染", "断电", "裸管、悬空、漂浮、脱落", "燃气破裂、爆裂、断裂", "管道裸管、悬空、漂浮、脱落", "断气", "其他"],
		"type": "scroll"
	},
	"series": [{
		"name": "管线类型",
		"type": "pie",
		"radius": "55%",
		"center": ["50%", "60%"],
		"data": [{
			"name": "破裂、爆裂、断裂",
			"value": "203"
		}, {
			"name": "泄漏",
			"value": "50"
		}, {
			"name": "漏水",
			"value": "46"
		}, {
			"name": "堵塞",
			"value": "44"
		}, {
			"name": "火灾",
			"value": "40"
		}, {
			"name": "泄漏爆燃",
			"value": "30"
		}, {
			"name": "塌陷",
			"value": "26"
		}, {
			"name": "爆炸",
			"value": "24"
		}, {
			"name": "坍塌",
			"value": "18"
		}, {
			"name": "中毒",
			"value": "11"
		}, {
			"name": "断水",
			"value": "6"
		}, {
			"name": "污染",
			"value": "3"
		}, {
			"name": "断电",
			"value": "3"
		}, {
			"name": "裸管、悬空、漂浮、脱落",
			"value": "3"
		}, {
			"name": "燃气破裂、爆裂、断裂",
			"value": "1"
		}, {
			"name": "管道裸管、悬空、漂浮、脱落",
			"value": "1"
		}, {
			"name": "断气",
			"value": "1"
		}, {
			"name": "其他",
			"value": "39"
		}],
		"itemStyle": {
			"normal": {
				"label": {
					"show": true,
					"formatter": "{b} : {c} ({d}%)"
				},
				"labelLine": {
					"show": true
				}
			},
			"emphasis": {
				"label": {
					"show": true,
					"formatter": "{b}\n{c} ({d}%)",
					"position": "center",
					"textStyle": {
						"fontSize": "15"
					}
				}
			}
		}
	}]
}