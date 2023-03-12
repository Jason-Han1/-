option = {
    "color": ["#asdasc", "#CCCCCC", "#222222", "#333333", "#gggggg"],
    "title": {
        "text": "哑铃图"
    },
    "tooltip": {
        "trigger": "axis"
    },
    "grid": {
        "right": "30%",
        "containLabel": true
    },
    "yAxis": [{
        "type": "category",
        "axisLine": {
            "show": true
        },
        "splitArea": {
            "color": "#111",
            "lineStyle": {
                "color": "#111"
            }
        },
        "axisLabel": {
            "color": "#111"
        },
        "splitLine": {
            "show": false
        },
        "boundaryGap": false,
        "data": ["全国", "吉林省", "江苏省", "浙江省", "安徽省", "江西省", "山东省", "湖北省", "湖南省", "广东省", "广西壮族自治区", "四川省", "云南省", "甘肃省", "新疆维吾尔自治区", "内蒙古自治区"]
    }],
    "xAxis": [{
        "type": "value",
        "min": 0,
        "splitNumber": 4,
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "rgba(255,255,255,0.1)"
            }
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false,
            "margin": 20,
            "textStyle": {
                "color": "#111"
            }
        },
        "axisTick": {
            "show": false
        }
    }],
    "series": [{
        "name": "2016",
        "type": "line",
        "showAllSymbol": true,
        "symbol": "circle",
        "symbolSize": 10,
        "lineStyle": {
            "opacity": 0
        },
        "itemStyle": {
            "color": "#b894fa",
            "borderColor": "#fff",
            "borderWidth": 1,
            "shadowColor": "rgba(0, 0, 0, .3)"
        },
        "tooltip": {
            "show": true
        },
        "data": ["21.2", "", "", "", "", "", "", "", "21.2", "", "", "22.4", "43.2", "", "", "22.9"]
    }, {
        "name": "2017",
        "type": "line",
        "showAllSymbol": true,
        "symbol": "circle",
        "symbolSize": 10,
        "lineStyle": {
            "opacity": 0
        },
        "itemStyle": {
            "color": "#a6a498",
            "borderColor": "#fff",
            "borderWidth": 1,
            "shadowColor": "rgba(0, 0, 0, .3)"
        },
        "tooltip": {
            "show": true
        },
        "data": ["", "23.5", "35", "39.9", "59.73", "", "20", "47.7", "", "", "30.8", "", "", "35.89", "57", ""]
    }, {
        "name": "2020",
        "type": "line",
        "showAllSymbol": true,
        "symbol": "circle",
        "symbolSize": 10,
        "lineStyle": {
            "opacity": 0
        },
        "itemStyle": {
            "color": "#a3e7c4",
            "borderColor": "#fff",
            "borderWidth": 1,
            "shadowColor": "rgba(0, 0, 0, .3)"
        },
        "tooltip": {
            "show": true
        },
        "data": ["40", "50", "50", "50", "50", "50", "50", "55", "60", "60", "75", "", "50", "60", "80", "95"]
    }, {
        "name": "2022",
        "type": "line",
        "showAllSymbol": true,
        "symbol": "circle",
        "symbolSize": 10,
        "lineStyle": {
            "opacity": 0
        },
        "itemStyle": {
            "color": "#d9267c",
            "borderColor": "#fff",
            "borderWidth": 1,
            "shadowColor": "rgba(0, 0, 0, .3)"
        },
        "tooltip": {
            "show": true
        },
        "data": ["50", "50", "50", "50", "50", "55", "60", "60", "65", "80", "", "50", "60", "70", "80", "95"]
    }, {
        "name": "",
        "type": "bar",
        "stack": "A",
        "itemStyle": {
            "barBorderColor": "rgba(0,0,0,0)",
            "color": "rgba(0,0,0,0)"
        },
        "barWidth": "1%",
        "emphasis": {
            "itemStyle": {
                "barBorderColor": "rgba(0,0,0,0)",
                "color": "rgba(0,0,0,0)"
            }
        },
        "data": [21, 23, 35, 39, 50, 50, 20, 47, 21, 60, 30, 22, 43, 35, 57, 22],
        "tooltip": {
            "show": false
        }
    }, {
        "name": "",
        "type": "bar",
        "stack": "A",
        "itemStyle": {
            "barBorderColor": "green",
            "color": "green"
        },
        "barWidth": "1%",
        "emphasis": {
            "itemStyle": {
                "barBorderColor": "rgba(0,0,0,0)",
                "color": "rgba(0,0,0,0)"
            }
        },
        "data": [29, 27, 15, 11, 9, 5, 40, 13, 44, 20, 45, 28, 17, 35, 23, 73],
        "tooltip": {
            "show": false
        }
    }]
}