var xData = function() {
    var data = ["11月28日", "11月29日", "11月30日", "12月1日", "12月2日", "12月3日", "12月4日", "12月5日", "12月6日", "12月7日"];
    return data;
}();

option = {
	"backgroundColor": "#344b58",
	"title": {
		"text": "9005 收货量趋势图",
		"x": "36%",
		"y": "4%",
		"textStyle": {
			"color": "#fff",
			"fontSize": "22"
		},
		"subtextStyle": {
			"color": "#90979c",
			"fontSize": "16"
		}
	},
	"tooltip": {
		"trigger": "axis",
		"axisPointer": {
			"type": "shadow",
			"textStyle": {
				"color": "#fff"
			}
		}
	},
	"grid": {
		"borderWidth": 0,
		"top": 150,
		"bottom": 45,
		"textStyle": {
			"color": "#fff"
		}
	},
	"legend": {
		"right": "8%",
		"top": "8%",
		"textStyle": {
			"color": "#90979c"
		},
		"data": ["实收数量", "预约数量"]
	},
	"calculable": true,
	toolbox: {
        show : true,
        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                   // 'horizontal' ¦ 'vertical'
        x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
                                   // 'center' ¦ 'left' ¦ 'right'
                                   // ¦ {number}（x坐标，单位px）
        y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                   // 'top' ¦ 'bottom' ¦ 'center'
                                   // ¦ {number}（y坐标，单位px）
        color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
        backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
        borderColor: '#ccc',       // 工具箱边框颜色
        borderWidth: 0,            // 工具箱边框线宽，单位px，默认为0（无边框）
        padding: 5,                // 工具箱内边距，单位px，默认各方向内边距为5，
        showTitle: true,
        feature : {
            mark : {
                show : true,
                title : {
                    mark : '辅助线-开关',
                    markUndo : '辅助线-删除',
                    markClear : '辅助线-清空'
                },
                lineStyle : {
                    width : 1,
                    color : '#1e90ff',
                    type : 'dashed'
                }
            },
            dataZoom : {
                show : true,
                title : {
                    dataZoom : '区域缩放',
                    dataZoomReset : '区域缩放-后退'
                }
            },
            dataView : {
                show : true,
                title : '数据视图',
                readOnly: true,
                lang : ['数据视图', '关闭', '刷新'],
                optionToContent: function(opt) {
                    var axisData = opt.xAxis[0].data;
                    var series = opt.series;
                    var table = '<table style="width:100%;text-align:center"><tbody><tr>'
                                 + '<td>时间</td>'
                                 + '<td>' + series[0].name + '</td>'
                                 + '<td>' + series[1].name + '</td>'
                                 + '</tr>';
                    for (var i = 0, l = axisData.length; i < l; i++) {
                        table += '<tr>'
                                 + '<td>' + axisData[i] + '</td>'
                                 + '<td>' + series[0].data[i] + '</td>'
                                 + '<td>' + series[1].data[i] + '</td>'
                                 + '</tr>';
                    }
                    table += '</tbody></table>';
                    return table;
                }
            },
            magicType: {
                show : true,
                title : {
                    line : '动态类型切换-折线图',
                    bar : '动态类型切换-柱形图',
                    stack : '动态类型切换-堆积',
                    tiled : '动态类型切换-平铺'
                },
                type : ['line', 'bar', 'stack', 'tiled']
            },
            restore : {
                show : true,
                title : '还原',
                color : 'black'
            },
            saveAsImage : {
                show : true,
                title : '保存为图片',
                type : 'jpeg',
                lang : ['点击本地保存'] 
            },
            myTool : {
                show : true,
                title : '自定义扩展方法',
                icon : 'image://../asset/ico/favicon.png',
                onclick : function (){
                    alert('myToolHandler')
                }
            }
        }
    },
	"xAxis": [{
		"type": "category",
		"axisLine": {
			"lineStyle": {
				"color": "#90979c"
			}
		},
		"splitLine": {
			"show": false
		},
		"axisTick": {
			"show": false
		},
		"splitArea": {
			"show": false
		},
		"axisLabel": {
			"interval": 0
		},
		"data": xData
	}],
	"yAxis": [{
		"type": "value",
		"splitLine": {
			"lineStyle": {
				//"type": "solid",
				"color": "#999"
			}
		},
		"axisLine": {
			"show": false,
			"lineStyle": {
				"color": "#90979c"
			}
		},
		"axisTick": {
			"show": false
		},
		"axisLabel": {
			"interval": 0
		},
		"splitArea": {
			"show": false
		}
	}],
	"series": [{
			"name": "实收数量",
			"type": "bar",
			"barMaxWidth": 35,
			"barGap": "10%",
			"itemStyle": {
				"normal": {
					"color": "rgba(255,144,128,1)",
					"label": {
						"show": true,
						"textStyle": {
							"color": "#fff"
						},
						"position": "insideTop",
						"formatter": function(p) {
							return p.value > 0 ? (p.value) : "";
						}
					}
				}
			},
			"data": [
				709,
				1917,
				2455,
				0,
				1719,
				1433,
				1544
			],
		},
		{
			"name": "预约数量",
			"type": "line",
			"symbolSize": 10,
			"symbol": "circle",
			"itemStyle": {
				"normal": {
					"color": "rgba(252,230,48,1)",
					"barBorderRadius": 0,
					"label": {
						"show": true,
						"position": "top",
						"formatter": function(p) {
							return p.value > 0 ? (p.value) : "";
						}
					}
				}
			},
			"data": [
				709,
				1917,
				2455,
				0,
				1719,
				1433,
				1544,
				3000,
				2800,
				4200
			]
		},
	]
}