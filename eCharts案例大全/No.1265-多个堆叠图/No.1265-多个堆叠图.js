
option = {
    "tooltip": {
        "trigger": "axis"
    },
    grid: {
        bottom: 80
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
        axisLabel: {
            padding: [10, 0, 0, 0 ]
        },
        "data": ["aa", "bb", "cc",]
    }],
    "yAxis": [{
        "type": "value",
        "name": "%"
    }],
    "series": [{
        "type": "bar",
        "stack": "one",
        data: [0,0,0],//写死0 为了能放到底下
        label: {
            show: true,
            formatter: '2020',
            position: 'bottom'
        }
    },
    {
        "type": "bar",
        "stack": "two",
        data: [0,0,0],//写死0 为了能放到底下
        label: {
            show: true,
            formatter: '2021',
            position: 'bottom'
        }
    },{
        "data": [5, 2, 5],
        "name": "优",
        "stack": "one",
        "type": "bar"
    }, {
        "data": [2, 5, 7],
        "name": "良",
        "stack": "one",
        "type": "bar",
    }, {
        "data": [5, 7, 5],
        "name": "轻度",
        "stack": "one",
        "type": "bar"
    }, {
        "data": [7, 5, 6],
        "name": "中度",
        "stack": "one",
        "type": "bar"
    }, {
        "data": [5, 6, 5],
        "name": "重度",
        "stack": "one",
        "type": "bar"
    }, {
        "data": [6, 5, 2],
        "name": "严重",
        "stack": "one",
        "type": "bar"
    },
    {
        "data": [5, 2, 5],
        "name": "优",
        "stack": "two",
        "type": "bar",
        label: {
            show: true,
            formatter: '2021',
            position: 'bottom'
        }
    }, {
        "data": [2, 5, 7],
        "name": "良",
        "stack": "two",
        "type": "bar"
    }, {
        "data": [5, 7, 5],
        "name": "轻度",
        "stack": "two",
        "type": "bar"
    }, {
        "data": [7, 5, 6],
        "name": "中度",
       "stack": "two",
        "type": "bar"
    }, {
        "data": [5, 6, 5, 2, 5, 7],
        "name": "重度",
       "stack": "two",
        "type": "bar"
    }, {
        "data": [6, 5, 2, 5, 7, 5],
        "name": "严重",
        "stack": "two",
        "type": "bar"
    }]
}