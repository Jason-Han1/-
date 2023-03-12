option = {
    backgroundColor: 'RGB(2,22,76)',
    color: ['RGB(1,255,152)', 'RGB(244,191,70)', 'pink'],
    title: {
        text: '各科报考人数',
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
        data: ['报考人数'],
        textStyle: {
            color: "RGB(193,223,255)"
        }
    },
    "xAxis": [{
        "type": "category",
        "data": ['物政地', '物政生', '物政化', '物地生', '物地化', '历政地', '历政生', '历政化', '历地生', '历地化', '历生化'],
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
                "color": "white"
            },
            margin: 20
        }
    }],
    "yAxis": [{
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "white"
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
        name: '报考人数',
        type: 'bar',
        //silent: true,
        "barWidth": "12",
        //barGap: '-100%', // Make series be overlap
        "data": [{
            "value": 78
        }, {
            "value": 82
        }, {
            "value": 76
        }, {
            "value": 91

        }, {
            "value": 87
        }, {
            "value": 82
        }, {
            "value": 85
        }, {
            "value": 86
        }, {
            "value": 89
        }, {
            "value": 78
        }, {
            "value": 67
        }]
    }]
};