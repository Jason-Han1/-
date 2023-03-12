var mianvalue = 95;
option = {
    "title": {
        show:false
    },
    "series": [{
        "name": "CPU利用率",
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "49%",
            "50%"
        ],
        "hoverAnimation": false,
        "type": "pie",
        "data": [{
            "value": mianvalue,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                normal:{"show": false},
                emphasis:{"show": false}
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0f0'
                    }, {
                        offset: 0.5,
                        color: '#00f'
                    }, {
                        offset: 1,
                        color: '#f00'
                    }]),
                    "borderWidth": 25
                }
            },
        }, {
            "name": " ",
            "value": 100 - mianvalue,
            "labelLine": {
                normal:{"show": false},
                emphasis:{"show": false}
            },
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "color": '#ccc',
                    "borderColor": '#ccc',
                    "borderWidth": 25
                }
            }
        }]
    }]
};