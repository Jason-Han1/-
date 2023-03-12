option = {
    "tooltip": {
        "trigger": "axis"
    },
    "color": ["#37b70c", "#fae521", "#f29c00", "#dd3f36", "#b3013f", "#a00398"],
    "legend": {
        "top": "0",
        "data": ["2017", "2018"],
        "itemGap": 10,
        "itemWidth": 15,
        "itemHeight": 12
    },
    "xAxis": [{
        "name": "月份",
        "type": "category",
        "axisTick": {
            "alignWithLabel": true
        },
        "data": ["昼", "夜"]
    }],
    "yAxis": [{
        "type": "value",
        "name": "天数"
    }],
    "series": [{
        "data": [5, 2],
        "name": "2017",
        "type": "bar"
    }, {
        "data": [2, 5],
        "name": "2018",
        "type": "bar"
    }]
}