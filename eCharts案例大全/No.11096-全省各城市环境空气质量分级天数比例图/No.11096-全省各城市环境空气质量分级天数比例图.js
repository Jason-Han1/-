option = {
    title: {
        text: '全省各城市环境空气质量分级天数比例图'
    },
    "tooltip": {
        "trigger": "axis"
    },
    "color": ["#37b70c", "#fae521", "#f29c00", "#dd3f36", "#b3013f", "#a00398"],
    "legend": {
        "top": "0",
        'icon': 'circle',
        x: 'right',
        "data": ["优", "良", "轻度", "中度", "重度", "严重"],
        "itemGap": 10,
        "itemWidth": 15,
        "itemHeight": 12
    },
    "xAxis": [{
        // "name": "地区",
        "type": "category",

        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
            "alignWithLabel": true
        },
        axisLabel: {
            show: true
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        "data": ["汕尾", "湛江", "河源", "茂名", "汕头", "梅州", "潮州", "惠州", "深圳", "阳江", "珠海", "揭阳",
            "云浮", "韶关", "中山", "东莞", "清远", "肇庆", "江门", "广州", "佛山"
        ]
    }],
    "yAxis": [{
        "type": "value",
        "name": "天数",
        axisLine: {
            show: true
        },
        axisTick: {
            show: false,
            "alignWithLabel": true
        },
        axisLabel: {
            show: true
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: true
        }
    }],
    "series": [
        //优天数    
        {
            "data": [5, 2, 5, 7, 5, 6, 5, 10, 5, 7, 5, 6, 5, 2, 5, 5, 2, 5, 7, 5, 2],
            "name": '优',
            "stack": "one",
            "type": "bar",
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 0, 50, 50],
                }
            },

        },
        //良天数
        {
            "data": [2, 5, 7, 5, 6, 5, 5, 12, 5, 7, 5, 3, 5, 2, 5, 5, 2, 5, 1, 5, 4],
            "name": '良',
            "stack": "one",
            "type": "bar"
        },
        //轻度天数
        {
            "data": [5, 7, 5, 6, 5, 2, 5, 2, 5, 1, 5, 3, 5, 20, 5, 5, 2, 5, 1, 5, 6],
            "name": "轻度",
            "stack": "one",
            "type": "bar"
        },
        //中度天数
        {
            "data": [7, 5, 6, 5, 2, 5, 5, 2, 5, 1, 5, 6, 5, 2, 5, 5, 20, 5, 7, 5, 6],
            "name": "中度",
            "stack": "one",
            "type": "bar"
        },
        //重度天数
        {
            "data": [5, 6, 5, 2, 5, 7, 5, 2, 5, 7, 5, 6, 5, 2, 5, 5, 2, 5, 7, 5, 6],
            "name": "重度",
            "stack": "one",
            "type": "bar"
        },
        //严重天数
        {
            "data": [6, 5, 2, 5, 7, 5, 5, 2, 5, 7, 5, 6, 5, 2, 5, 5, 2, 5, 7, 5, 6],
            "name": "严重",
            "stack": "one",
            itemStyle: {
                normal: {
                    barBorderRadius: [50, 50, 0, 0],
                }
            },
            "type": "bar"
        }
    ]
}