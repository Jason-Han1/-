option = {
    "title": {
        "text": "收客走势图", 
        "subtext": "计划位收客情况（确认位/预留位）", 
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
            "data": ['03-01','03-02','03-03','03-04','03-05','03-06','03-07','03-08','03-09','03-10','03-11','03-12','03-13','03-14','03-15','03-16','03-17','03-18','03-19','03-20','03-21','03-22','03-23','03-24','03-25','03-26','03-27','03-28','03-29','03-30'],
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
            "name": "计划数", 
            "type": "bar", 
            //"barWidth": "20%",
            "itemStyle": {
                "normal": {
                    "color": "#BBBBBB", 
                    "barBorderRadius": 0, 
                    "label": {
                        "show": true, 
                        "textStyle": {
                            "color": "rgba(0,0,0,1)"
                        },
                        "position": "top",
                        formatter : function(p) {
	                                                return p.value > 0 ? (p.value) : '';
	                                            }
                    }
                }
            }, 
            "data": [
                5000, 
                5376, 
                3727, 
                5000, 
                4000, 
                3000, 
                4200, 
                5000, 
                4000, 
                4951, 
                5000, 
                4000, 
                6000, 
                5000,
                5000, 
                5376, 
                3727, 
                5000, 
                4000, 
                3000, 
                4200, 
                5000, 
                4000, 
                4951, 
                5000, 
                4000, 
                6000, 
                5000, 
                6000, 
                5000
            ]
        },
        {
            "name": "确认", 
            "type": "bar", 
            "stack": "收客", 
            //"barWidth": "10%",
            "barGap": "-100%", 
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 0, 
                    "color": "#59ADF3", 
                    "label": {
                        "show": true, 
                        "textStyle": {
                            "color": "rgba(0,0,0,1)"
                        }, 
                        "position": "inside",
                        formatter : function(p) {
	                                                return p.value > 0 ? (p.value ): '';
	                                            }
                    }
                }
            }, 
            "data": [
                3709, 
                2417, 
                755, 
                2610, 
                1719, 
                433, 
                2544, 
                4285, 
                3372, 
                2484, 
                4078, 
                1355, 
                5208, 
                1723,
                3709, 
                2417, 
                755, 
                2610, 
                1719, 
                433, 
                2544, 
                4285, 
                3372, 
                2484, 
                4078, 
                1355, 
                5208, 
                1723, 
                5208, 
                1723
            ], 
        }, 
        {
            "name": "预留", 
            "type": "bar", 
            "stack": "收客", 
            "itemStyle": {
                "normal": {
                    "color": "#86D560", 
                    "barBorderRadius": 0, 
                    "label": {
                        "show": true, 
                        "textStyle": {
                            "color": "rgba(0,0,0,1)"
                        },
                        "position": "inside",
                        formatter : function(p) {
	                                                return p.value > 0 ? (p.value) : '';
	                                            }
                    }
                }
            }, 
            "data": [
                386, 
                0, 
                0, 
                122, 
                261, 
                171, 
                0, 
                40, 
                246, 
                0, 
                815, 
                275, 
                570, 
                159,
                386, 
                0, 
                0, 
                122, 
                261, 
                171, 
                0, 
                40, 
                246, 
                0, 
                815, 
                275, 
                570, 
                159, 
                570, 
                159
            ]
        }
    ]
}