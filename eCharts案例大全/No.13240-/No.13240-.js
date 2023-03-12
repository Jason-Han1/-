var option ={
	"tooltip": {
		"trigger": "item",
		"formatter": "{a} : {b}"
	},
	"legend": {
		"x": "right",
		"data": ["已对接", "未对接"]
	},
	"series": [{
		"type": "graph",
		"name": "部门",
		"layout": "force",
		"ribbonType": false,
		"categories": [{
		    
			"name": "平台",
			 itemStyle: {
                    normal: {
                        color: "#fc9205",
                    }
                }
		}, {
			"name": "已对接",
			 
                itemStyle: {
                    normal: {
                        color: "#3c97f1",
                    }
                }
		}, {
			"name": "未对接",
			 
                itemStyle: {
                    normal: {
                        color: "#c1c1c1",
                    }
                }
		}],
		"force": {
			"repulsion": 190,
			"gravity": 0.0001,
			"edgeLength": [160, 150],
			"layoutAnimation": true
		},
		"symbolSize": 75,
		"itemStyle": {
			"normal": {
				"label": {
					"show": true,
					"textStyle": {
						"color": "#E0FFFF",
						"fontSize": 12
					}
				},
				"linkStyle": {
					"type": "curve"
				}
			}
		},
		"emphasis": {
			"label": { 
				"show": true,
				"textStyle": {
					"color": "#DDDDDD",
					"fontSize": 12
				}
			},
			"linkStyle": {}
		},
		"useWorker": false,
		"gravity": 1.1,
		"scaling": 2.1,
		"roam": "move",
		"data": [{
			"category": 0,"label": {
				"show": true,
				"textStyle": {
					"color": "#DDDDDD",
					fontWeight:"bold",
					"fontSize": 22
				}
			},
			"name": "平台","symbolSize":95,
		}, {
			"category": 1,
			"name": "市卫计委"
		}, {
			"category": 1,
			"name": "市发改委"
		}, {
			"category": 1,
			"name": "市司法厅"
		}, {
			"category": 1,
			"name": "市地税局"
		}, {
			"category": 1,
			"name": "市旅游局"
		}, {
			"category": 1,
			"name": "市质监局"
		}, {
			"category": 1,
			"name": "市高法"
		}, {
			"category": 2,
			"name": "市人防办"
		}, {
			"category": 2,
			"name": "市工商局"
		}, {
			"category": 2,
			"name": "市食药监"
		}],
		"links": [{
			"source": "市卫计委",
			"target": "平台",
			"value": 20
		}, {
			"source": "市发改委",
			"target": "平台",
			"value": 20
		}, {
			"source": "市司法厅",
			"target": "平台",
			"value": 20
		}, {
			"source": "市地税局",
			"target": "平台", 
			"value": 20
		}, {
			"source": "市旅游局",
			"target": "平台",
			"value": 20
		}, {
			"source": "市质监局",
			"target": "平台",
			"value": 20
		}, {
			"source": "市高法",
			"target": "平台",
			"value": 20
		}, {
			"source": "市人防办",
			"target": "平台",
			"value": 10
		}, {
			"source": "市工商局",
			"target": "平台",
			"value": 10
		}, {
			"source": "市食药监",
			"target": "平台",
			"value": 10
		}]
	}]
}