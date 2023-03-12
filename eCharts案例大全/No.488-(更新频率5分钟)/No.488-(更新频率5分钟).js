option = {
	tooltip: {
          formatter(params) {
            let color1 = "#D5D9DD",
              color2 = "#D5D9DD";
            if (params[0].value > 0 && params[0].value <= 20) {
              color1 = "#007C3A";
            } else if (params[0].value <= 40) {
              color1 = "#13CE37";
            } else if (params[0].value <= 60) {
              color1 = "#F48915";
            } else if (params[0].value <= 80) {
              color1 = "#DA1E28";
            } else if (params[0].value <= 100) {
              color1 = "#87071D";
            }
            if (params[1].value > 0 && params[1].value <= 20) {
              color2 = "#007C3A";
            } else if (params[1].value <= 40) {
              color2 = "#13CE37";
            } else if (params[1].value <= 60) {
              color2 = "#F48915";
            } else if (params[1].value <= 80) {
              color2 = "#DA1E28";
            } else if (params[1].value <= 100) {
              color2 = "#87071D";
            }
            return `
              <div style="padding-top:0.06rem">
                <span style="padding-right:0.1rem">${params[0].name}</span>
                <span style="color:${color1}">${params[0].value}%</span>
              </div>
              <div style="padding-top:0.06rem">
                <span style="padding-right:0.1rem">${params[1].seriesName}</span>
                <span style="color:${color2}">${params[1].value}%</span>
              </div>`;
          },
          trigger: "axis",
          axisPointer: {
            type: "line",
            axis: "x",
            lineStyle: {
              color: "rgba(255,255,255,.2)",
              width: 1
            }
          }
        },
	"xAxis": [{
		"boundaryGap": false,
		"data": ["01:00", "02:00", "03:00", "04:00", "05:00"],
		"axisLabel": {
			"align": "right"
		}
	}],
	"yAxis": [
	    {
    		"boundaryGap": false,
    		"name": "(%)",
    		"max": 100
    	},
    	{
    	    type:"value",
    	    data: ['0', '20', '40', '60', '80', '100']
    	}
	],
	"series": [
	    {
		"name": "当前",
		"data": [11, 10, 5, 20, ""],
		"unit": "%",
		"type": "line",
		"itemStyle": {
			"color": "#fff000",
			"borderWidth": 0
		},
		"lineStyle": {
			"color": "#fff000"
		},
		"areaStyle": {
			"color": {
				"colorStops": [{
					"offset": 0,
					"color": "rgba(255,255,255,0.4)"
				}, {
					"offset": 1,
					"color": "rgba(255,255,255,0)"
				}],
				"x": 0,
				"y": 0,
				"x2": 0,
				"y2": 1,
				"type": "linear",
				"global": false
			}
		},
		"smooth": true,
		"markArea": {
			"data": [
				[{
					"yAxis": "0",
					"itemStyle": {
						"color": "rgba(0, 124, 58, .3)"
					}
				}, {
					"yAxis": "20"
				}],
				[{
					"yAxis": "20",
					"itemStyle": {
						"color": "rgba(19, 206, 55, .3)"
					}
				}, {
					"yAxis": "40"
				}],
				[{
					"yAxis": "40",
					"itemStyle": {
						"color": "rgba(244, 137, 21, .3)"
					}
				}, {
					"yAxis": "60"
				}],
				[{
					"yAxis": "60",
					"itemStyle": {
						"color": "rgba(218, 30, 40, .3)"
					}
				}, {
					"yAxis": "80"
				}],
				[{
					"yAxis": "80",
					"itemStyle": {
						"color": "rgba(135, 7, 29, .3)"
					}
				}, {
					"yAxis": "100"
				}]
			]
		}
	}, {
		"name": "历史日均",
		"data": [6, 15, 3, 12, 70],
		"unit": "%",
		"type": "line",
		"itemStyle": {
			"color": "#818D98",
			"borderWidth": 0
		},
		"lineStyle": {
			"color": "#818D98",
			"normal": {
				"width": 1,
				"type": "dashed"
			}
		},
		"areaStyle": null,
		"smooth": true
	}],
	"title": {
		"text": "(更新频率5分钟)",
		"textStyle": {
			"color": "#3A4047",
			"fontWeight": 400,
			"fontSize": 12
		},
		"right": 0,
		"top": 15
	},
	"legend": {
		"show": false,
		"data": ["当前", "历史日均"]
	},
	"grid": {
		"top": 45,
		"right": 2
	}
}