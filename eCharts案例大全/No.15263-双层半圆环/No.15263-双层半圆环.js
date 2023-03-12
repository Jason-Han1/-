option = {
    series: [{
            "name": '未来规划接入数',
            "type": 'pie',
            "radius": ['60%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 180,
            "color": ["#f06658", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "name": '',
                "value": 686
            }, {
                "name": '',
                "value": 686
            }]
        }, {
            "name": '未来规划接入数',
            "type": 'pie',
            "radius": ['60%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 0,
            "clockwise": false,
            "color": ["#f06658", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "data": [{
                "name": '686',
                "value": 1,
                "label": {
                    "normal": {
                        "show": true,
                        "position": 'outside',
                        "formatter": '{a}:{b}',
                        "textStyle": {
                            "color": '#bcbfff'
                        }
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": true,
                        "length": 40,
                        "length2": 100,
                        "smooth": 0.1,
                        "lineStyle": {
                            "color": 'blue'
                        },
                    }
                },
            }, {
                "name": '',
                "value": 3
            }]
        }, {
            "name": '当前单位接入数',
            "type": 'pie',
            "radius": ['70%', '80%'],
            "avoidLabelOverlap": false,
            "startAngle": 180,
            "color": ["#c7375c", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "z": 10,
            "data": [{
                "value": 456,
                "name": '',
                "label": {
                    "normal": {
                        "show": true,
                        "position": 'outside',
                        "formatter": '{a}:{c}',
                        "textStyle": {
                            "color": '#bcbfff'
                        }
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": true,
                        "length": 20,
                        "length2": 150,
                        "smooth": 0.1,
                        "lineStyle": {
                            "color": 'blue'
                        },
                    }
                },
            }, {
                "value": 916,
                "name": ''
            }]
        }

    ]
};