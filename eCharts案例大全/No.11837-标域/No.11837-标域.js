option = {
	"backgroundColor": "#ffffff",
	"bordershow": true,
	"borderColor": "#ffffff",
	"borderStyle": "solid",
	"borderWidth": "1",
	"title": {
		"show": true,
		"text": "折线图",
		"textStyle": {
			"color": "#434343",
			"fontFamily": "微软雅黑",
			"fontSize": "14",
			"fontWeight": "normal",
			"fontStyle": "normal"
		},
	},
	"legend": {
		"show": true,
		"position": "bottom-center",
		"orient": "horizontal",
		"x": "center",
		"y": "bottom",
		"itemGap": 5,
		"itemHeight": 8,
		"itemWidth": 12,
		"type": "scroll",
		"textStyle": {
			"color": "#666666",
			"fontFamily": "微软雅黑",
			"fontSize": "12",
			"fontStyle": "normal",
			"fontWeight": "normal"
		},
		"data": ["利润"]
	},
	"grid": {
		"left": "20px",
		"top": "30px",
		"right": "20px",
		"bottom": "30px",
		"containLabel": true
	},
	"xAxis": [{
		"show": true,
		"name": "",
		"nameTextStyle": {
			"color": "#666666",
			"fontFamily": "微软雅黑",
			"fontSize": "12",
			"fontStyle": "normal",
			"fontWeight": "normal"
		},
		"boundaryGap": true,
		"nameGap": 20,
		"nameLocation": "end",
		"type": "category",
		"splitLine": {
			"show": false,
			"lineStyle": {
				"type": "dotted",
				"color": "#ececec"
			}
		},
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#ececec"
			}
		},
		"axisTick": {
			"show": false
		},
		"axisLabel": {
			"show": true,
			"rotate": 0,
			"interval": "auto",
			"textStyle": {
				"color": "#666666",
				"fontFamily": "微软雅黑",
				"fontSize": "12",
				"fontStyle": "normal",
				"fontWeight": "normal"
			}
		},
		"data": ["201603", "201604", "201605", "201606", "201607", "201608", "201609", "201610", "201611", "201612", "201705", "201802"]
	}],
	"yAxis": [{
		"show": true,
		"yAxisshow": true,
		"inverse": false,
		"name": "",
		"rename": "",
		"min": null,
		"position": "left",
		"formatter": "0.00",
		"unit": "ge",
		"unitName": "",
		"nameTextStyle": {
			"color": "#666666",
			"fontFamily": "微软雅黑",
			"fontSize": "12",
			"fontStyle": "normal",
			"fontWeight": "normal"
		},
		"nameGap": 10,
		"nameLocation": "end",
		"type": "value",
		"splitLine": {
			"show": true,
			"lineStyle": {
				"type": "dotted",
				"color": "#ececec"
			}
		},
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#ececec"
			}
		},
		"axisTick": {
			"show": false
		},
		"axisLabel": {
			"show": true,
			"textStyle": {
				"color": "#666666",
				"fontFamily": "微软雅黑",
				"fontSize": "12",
				"fontStyle": "normal",
				"fontWeight": "normal"
			}
		}
	}],
	"series": [{
		"name": "利润",
		"type": "line",
		"stack": "",
		"symbolSize": 10,
		"showAllSymbol": true,
		"smooth": true,
		"step": false,
		"symbol": "circle",
		"yAxisIndex": 0,
		"label": {
			"normal": {
				"show": false,
				"CompanyShow": false,
				"textStyle": {
					"color": "#666666",
					"fontFamily": "微软雅黑",
					"fontSize": "12",
					"fontStyle": "normal",
					"fontWeight": "normal"
				},
				"position": "top"
			}
		},
		"lineStyle": {
			"normal": {
				"width": 2
			}
		},
		"itemStyle": {
			"normal": {
				"show": true,
				"color": {
					"x": 1,
					"y": 0,
					"x2": 0,
					"y2": 1,
					"type": "linear",
					"global": false,
					"colorStops": [{
						"offset": 0,
						"color": "#707eec"
					}, {
						"offset": 1,
						"color": "#707eec"
					}]
				},
				"borderWidth": "2",
				"borderColor": "#fff"
			}
		},
		"data": [{
			"value": "14959348.00",
		}, {
			"value": "15271772.00",
		}, {
			"value": "15801564.00",
		}, {
			"value": "15270047.00",
		}, {
			"value": "15572989.00",
		}, {
			"value": "15370158.00",
		}, {
			"value": "15495429.00",
		}, {
			"value": "16147362.00",
		}, {
			"value": "15895490.00",
		}, {
			"value": "15566575.00",
		}, {
			"value": "13981608.00",
		}, {
			"value": "1585522.00",
		}],
		"markPoint": null,
		"markLine": null,
		markArea: {
             data: [
                    [{
                        name: '工期将至',
                        xAxis: '201607',
                        itemStyle:{
                            color:"red"
                        }
                    }, {
                        xAxis: '201611',
                    }],
                    [{
                        name: '工期警戒',
                        xAxis: '201611',
                        itemStyle:{
                            color:"#abc123"
                        }
                    }, {
                        xAxis: '201802',
                    }]
                ]
            }
	}],
}