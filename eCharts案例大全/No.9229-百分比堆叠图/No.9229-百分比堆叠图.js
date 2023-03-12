option = {
    "tooltip": {
        "trigger": "axis"
    },
    "color": ["#37b70c", "#fae521", "#f29c00", "#dd3f36", "#b3013f", "#a00398"],
    "legend": {
        "top": "0",
        "data": ["优", "良", "轻度", "中度", "重度", "严重"],
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
        "data": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    }],
    "yAxis": [{
        "type": "value",
        "name": "天数"
    }],
    label: {
        show: true,
        formatter:function(val){
            return val.data +'0%';
        },
    },
    "series": [{
        "data": [5, 2, 5, 7, 5, 6],
        "name": "优",
        "stack": "one",
        "type": "bar",
       
    }, {
        "data": [2, 5, 7, 5, 6, 5],
        "name": "良",
        "stack": "one",
        "type": "bar",
       
    }, {
        "data": [5, 7, 5, 6, 5, 2],
        "name": "轻度",
        "stack": "one",
        "type": "bar",
        
    }, {
        "data": [7, 5, 6, 5, 2, 5],
        "name": "中度",
        "stack": "one",
        "type": "bar",
       
    }, {
        "data": [5, 6, 5, 2, 5, 7],
        "name": "重度",
        "stack": "one",
        "type": "bar",
        
    }, {
        "data": [6, 5, 2, 5, 7, 5],
        "name": "严重",
        "stack": "one",
        "type": "bar",
        
    }]
}