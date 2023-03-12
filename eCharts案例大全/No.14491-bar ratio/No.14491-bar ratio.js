option = {
    "grid": {
        "bottom": "12%",
        "right": "4%",
        "containLabel": true,
        "top": "3%",
        "left": "3%"
    },
    "yAxis": [{
        "axisLine": {
            "show": true
        },
        "data": ["县公安局", "县人社局", "县国土局", "县财政局", "县交通运输局", "县统计局", "县国税局", "县教育局", "县民政局"],
        "type": "category",
        "axisTick": {
            "show": false
        }
    }, {
        "splitLine": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "data": ["县公安局", "县人社局", "县国土局", "县财政局", "县交通运输局", "县统计局", "县国税局", "县教育局", "县民政局"],
        "axisLine": {
            "show": false
        },
        "type": "category",
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    }],
    "series": [{
        "barCategoryGap": "50%",
        "name": "总人数",
        "data": [5, 4, 5, 6, 7, 4, 4, 6, 5],
        "barGap": "0%",
        "yAxisIndex": 1,
        "type": "bar",
        "itemStyle": {
            "normal": {
                "barBorderRadius": 50,
                "show": true,
                "borderColor": "#333",
                "color": "#277ace",
                "borderWidth": 0
            }
        }
    }, {
        "barCategoryGap": "50%",
        "name": "上岗人数",
        "data": [1, 0, 0, 0, 7, 2, 1, 0, 0],
        "barGap": "0%",
        "type": "bar",
        "itemStyle": {
            "normal": {
                "barBorderRadius": 50,
                "show": true,
                "borderColor": "#333",
                "color": "#5de3e1",
                "borderWidth": 0
            }
        }
    }],
    "legend": {
        "bottom": "2%",
        "data": ["总人数", "上岗人数"]
    },
    "tooltip": {
        "axisPointer": {
            "type": "shadow"
        },
        "show": "True",
        "trigger": "axis",
        "formatter": function(params) {
            return params[0].axisValue + '<br>' +
                params[1].seriesName + '：' + params[1].data + '<br>' +
                params[0].seriesName + '：' + params[0].data;
            console.log(params)
        }
    },
    "xAxis": {
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "type": "value",
        "axisTick": {
            "show": false
        }
    }
};