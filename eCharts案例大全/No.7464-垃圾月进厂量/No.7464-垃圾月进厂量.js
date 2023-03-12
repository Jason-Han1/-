option = {
    backgroundColor: 'RGB(2,22,76)',
    color: ['RGB(1,255,152)', 'RGB(244,191,70)'],
    title: {
        text: '垃圾月进厂量',
        top: 21,
        left: '21',
        textStyle: {
            fontSize: 18,
            color: '#fff'
        }
    },
    animation: false,
    "grid": {
        "top": "67",
        "left": "32",
        "bottom": "15",
        "right": "39",
        "containLabel": true
    },
    "legend": {
        "show": true,
        top: 15,
        right: 26,
        data: ['计划', '实际'],
        textStyle: {
            color: "RGB(193,223,255)"
        }
    },
    "xAxis": [{
        "type": "category",
        "data": ["一月", "二月", "三月", "四月", "五月", "六月"],
        "axisTick": {
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#fff"
        },
        "axisLine": {
            "lineStyle": {
                "color": "RGB(47,68,114)"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "RGB(145,155,183)"
            },
            margin: 20
        }
    }],
    "yAxis": [{
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "RGB(145,155,183)"
            },
            "formatter": "{value}"
        },
        "splitLine": {
            "lineStyle": {
                "type": "dashed",
                "color": "RGB(47,68,114)"
            }
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "RGB(47,68,114)"
            }
        }
    }],
    "series": [{
            name: '计划',
            type: 'bar',
            //silent: true,
            "barWidth": "12",
            //barGap: '-100%', // Make series be overlap
            "data": [{
                "value": 100
            }, {
                "value": 60
            }, {
                "value": 100
            }, {
                "value": 60
            }, {
                "value": 100
            }, {
                "value": 60
            }]
        },
        {
            name: '实际',
            type: 'bar',
            //silent: true,
            "barWidth": "12",
            //barGap: '-100%', // Make series be overlap
            "data": [{
                "value": 80
            }, {
                "value": 40
            }, {
                "value": 80
            }, {
                "value": 40
            }, {
                "value": 80
            }, {
                "value": 40
            }]
        }
    ]
};