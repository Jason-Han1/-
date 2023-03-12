
option = {
    "title": {
        "text": "环比柱形图", 
       // "subtext": "昨天 vs 前天", 
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
    "legend": [{
        top:0,
        left:100,
        "x": "left", 
        "data": ['高锰酸盐指数','氨氮','叶绿素','PH值' ]
    },
    {
        top:30,
        left:100,
        "x": "left", 
        "data": ['超标减少','超标增加' ]
    }
    ], 
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
            "data": ['锦绣川水库', '卧虎山水库', '玉清湖水库', '鹊山水库'],
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
            "name": "高锰酸盐指数", 
            "type": "bar", 
            "stack": "高锰酸盐指数", 
            "barMaxWidth": 50, 
            "barGap": "10%", 
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 0, 
                    "color": "rgba(60,169,196,0.5)", 
                    
                }
            }, 
            "data": [
                3.7, 
                2.4, 
                3.5, 
                3.6
               
            ], 
        }, 
        {
            "name": "超标减少", 
            "type": "bar", 
            "stack": "高锰酸盐指数", 
            "itemStyle": {
                "normal": {
                    "color": "rgba(51,204,112,1)", 
                    "barBorderRadius": 0, 
                    
                }
            }, 
            "data": [
                0.6, 
                0, 
                0, 
                0.2, 
                
            ]
        }, 
        {
            "name": "超标增加", 
            "type": "bar", 
            "stack": "高锰酸盐指数", 
            "itemStyle": {
                "normal": {
                    "color": "rgba(193,35,43,1)", 
                    "barBorderRadius": 0, 
                    
                }
            }, 
            "data": [
                0, 
                0.3, 
                0.1, 
                0
            ]
        },
        {
            "name": "氨氮", 
            "type": "bar", 
            "stack": "氨氮", 
            "barMaxWidth": 50, 
            "barGap": "10%", 
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 0, 
                    "color": "rgba(0,0,250,0.5)", 
                   
                }
            }, 
            "data": [
                0.9, 
                0.24, 
                0.55, 
                0.26
            ], 
        }, 
        {
            "name": "超标减少", 
            "type": "bar", 
            "stack": "氨氮", 
            "itemStyle": {
                "normal": {
                    "color": "rgba(51,204,112,1)", 
                    "barBorderRadius": 0, 
                   
                }
            }, 
            "data": [
                0.03, 
                0, 
                0, 
                0.12
            ]
        }, 
        {
            "name": "超标增加", 
            "type": "bar", 
            "stack": "氨氮", 
            "itemStyle": {
                "normal": {
                    "color": "rgba(193,35,43,1)", 
                    "barBorderRadius": 0, 
                   
                }
            }, 
            "data": [
                0, 
                0.3, 
                0.1, 
                0
            ]
        },
        {
            "name": "叶绿素", 
            "type": "bar", 
            "stack": "叶绿素", 
            "barMaxWidth": 50, 
            "barGap": "10%", 
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 0, 
                    "color": "rgba(60,0,216,0.5)", 
                    
                }
            }, 
            "data": [
                3.9, 
                2.4, 
                5.5, 
                2.6
            ], 
        },
        {
            "name": "超标减少", 
            "type": "bar", 
            "stack": "叶绿素", 
            "itemStyle": {
                "normal": {
                    "color": "rgba(51,204,112,1)", 
                    "barBorderRadius": 0, 
                    
                }
            }, 
            "data": [
                0.3, 
                0, 
                0, 
                0.12
            ]
        }, 
        {
            "name": "超标增加", 
            "type": "bar", 
            "stack": "叶绿素", 
            "itemStyle": {
                "normal": {
                    "color": "rgba(193,35,43,1)", 
                    "barBorderRadius": 0, 
                    
                }
            }, 
            "data": [
                0, 
                0.36, 
                0.17, 
                0
            ]
        },
        {
            "name": "PH值", 
            "type": "bar", 
            "stack": "PH值", 
            "barMaxWidth": 50, 
            "barGap": "10%", 
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 0, 
                    "color": "rgba(60,169,0,0.5)", 
                   
                }
            }, 
            "data": [
                7.2, 
                7.7, 
                7.4, 
                7.5
            ], 
        },
        {
            "name": "超标减少", 
            "type": "bar", 
            "stack": "PH值", 
            "itemStyle": {
                "normal": {
                    "color": "rgba(51,204,112,1)", 
                    "barBorderRadius": 0, 
                    
                }
            }, 
            "data": [
                0.5, 
                1.9,
                0.36, 
                0
            ]
        }, 
        {
            "name": "超标增加", 
            "type": "bar", 
            "stack": "PH值", 
            "itemStyle": {
                "normal": {
                    "color": "rgba(193,35,43,1)", 
                    "barBorderRadius": 0, 
                    
                }
            }, 
            "data": [
                0, 
                0,
                0, 
                0.3
            ]
        }
    ]
}