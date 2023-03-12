option = {
    "tooltip": {
        "trigger": "axis"
    },
    "grid": {
        "containLabel": true,
        "left": 5,
        "bottom": 40
    },
    "color": ["#37b70c", "#fae521", "#f29c00", "#dd3f36", "#b3013f", "#a00398"],
    "legend": {
        "top": "0",
        "data": ["优", "良", "轻度", "中度", "重度", "严重"],
        "itemGap": 10,
        "itemWidth": 15,
        "itemHeight": 12
    },
    "yAxis": [{
        "type": "category",
        "data": ["昆明", "大理", "a", "b", "c", "d", "*国控站点"],
        "axisLabel": {
            "rich": {
                "red": {
                    "color": "#f00"
                }
            }
        }
    }],
    "xAxis": [{
        "type": "value",
        "name": "天数"
    }],
    "series": [{
        "data": [151, 200, 155, 71, 59, 69, 100],
        "name": "优",
        "stack": "one",
        "type": "bar"
    }, {
        "data": [2, 5, 7, 5, 6, 5],
        "name": "良",
        "stack": "one",
        "type": "bar"
    }, {
        "data": [5, 7, 5, 6, 5, 2],
        "name": "轻度",
        "stack": "one",
        "type": "bar"
    }, {
        "data": [7, 5, 6, 5, 2, 5, 8],
        "name": "中度",
        "stack": "one",
        "type": "bar"
    }, {
        "data": [5, 6, 5, 2, 5, 7],
        "name": "重度",
        "stack": "one",
        "type": "bar"
    }, {
        "data": [6, 5, 2, 5, 7, 5],
        "name": "严重",
        "stack": "one",
        "type": "bar"
    }]
}