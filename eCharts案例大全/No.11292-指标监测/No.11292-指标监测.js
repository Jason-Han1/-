var xData = function(){
    var data = [];
    for(var i=1;i<16;i++){
     data.push(i+"指标");   
    }
    return data;
}();

option = {
    "title": {
        "text": "指标监测", 
        "subtext": "历史数据 vs 及时增长", 
        "x": "center"
    }, 
    "tooltip": {
        "trigger": "axis", 
        "axisPointer": {
            "type": "shadow"
        },
    }, 
    "grid": {
        "borderWidth": 0, 
        "y2": 120
    }, 
    "legend": {
        "x": "right", 
        "data": [ ]
    }, 
    "toolbox": {
        "show": true, 
        "feature": {
            "restore": { }, 
            "saveAsImage": { }
        }
    }, 
    "calculable": true, 
    "xAxis": [
        {
            "type": "category", 
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
                "interval": 0, 
                "rotate": 45, 
                "show": true, 
                "splitNumber": 15, 
                "textStyle": {
                    "fontFamily": "微软雅黑", 
                    "fontSize": 12
                }
            }, 
            "data": xData,
        }
    ], 
    "yAxis": [
        {
            "type": "value", 
            "splitLine": {
                "show": false
            }, 
            "axisLine": {
                "show": true
            }, 
            "axisTick": {
                "show": false
            }, 
            "splitArea": {
                "show": false
            }
        }
    ], 
    "dataZoom": [
        {
            "show": true, 
            "height": 30, 
            "xAxisIndex": [
                0
            ], 
            bottom:40,
            "start": 0, 
            "end": 80
        }, 
        {
            "type": "inside", 
            "show": true, 
            "height": 15, 
            "xAxisIndex": [
                0
            ], 
            "start": 1, 
            "end": 35
        }
    ], 
    "series": [
        {
            "name": "历史数据", 
            "type": "bar", 
            "stack": "总量", 
            "barMaxWidth": 50, 
            "barGap": "10%", 
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 0, 
                    "color": "rgba(60,169,196,0.5)", 
                    "label": {
                        "show": true, 
                        "textStyle": {
                            "color": "rgba(0,0,0,1)"
                        }, 
                        "position": "insideTop",
                        formatter : function(p) {
	                                                return p.value > 0 ? (p.value ): '';
	                                            }
                    }
                }
            }, 
            "data": [
                3709, 
                2417, 
                1727, 
                2610, 
                1719, 
                433, 
                2544, 
                4285, 
                3372, 
                3484, 
                4078, 
                1355, 
                5208, 
                1723,
                2417, 
            ], 
        }, 
        {
            "name": "及时增长", 
            "type": "bar", 
            "stack": "总量", 
            "itemStyle": {
                "normal": {
                    "color": "rgba(51,204,112,1)", 
                    "barBorderRadius": 0, 
                    "label": {
                        "show": true, 
                        "position": "top",
                        formatter : function(p) {
	                                                return p.value > 0 ? ('▼'
	                                                        + p.value + '')
	                                                        : '';
	                                            }
                    }
                }
            }, 
            "data": [
                386, 
                0, 
                755, 
                0, 
                261, 
                171, 
                0, 
                0, 
                246, 
                951, 
                815, 
                275, 
                570, 
                0,
                0
            ]
        }, 
        {
            "name": "及时增长", 
            "type": "bar", 
            "stack": "总量", 
            "itemStyle": {
                "normal": {
                    "color": "rgba(193,35,43,1)", 
                    "barBorderRadius": 0, 
                    "label": {
                        "show": true, 
                        "position": "top",
                        formatter : function(p) {
	                                                return p.value > 0 ? ('▲'
	                                                        + p.value + '')
	                                                        : '';
	                                            }
                    }
                }
            }, 
            "data": [
                0, 
                376, 
                0, 
                122, 
                0, 
                0, 
                220, 
                40, 
                0, 
                0, 
                0, 
                0, 
                0, 
                159,
                123
            ]
        }
    ]
}