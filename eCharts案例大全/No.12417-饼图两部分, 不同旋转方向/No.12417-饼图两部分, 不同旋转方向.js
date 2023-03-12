option = {
    series: [{
            "name": '在线数',
            "type": 'pie',
            "radius": ['0', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 90,
            "clockwise": false,
            "hoverAnimation": false,
            "legendHoverLink": false,
            "animationDuration": 4000,
            "data": [{
                "value": 45,
                "label": {
                    "normal": {
                        "show": true,
                        "position": 'outside',
                        "formatter": '{a}: {c} 个',
                        "textStyle": {
                            "color": '#05FFE5',
                            "fontSize": '18'
                        }
                    }
                },
                "labelLine": {
                    "show": true,
                    "lineStyle": {
                        "color": "#05FFE5"
                    }
                },
                "itemStyle": {
                    "color": "#F48400"
                },
                "selected": true,
            }, {
                "itemStyle": {
                    "color": "transparent"
                },
                "name": '',
                "value": 55,

            }]
        }, {
            "name": '总数',
            "type": 'pie',
            "radius": ['0', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 90,
            "hoverAnimation": false,
            "legendHoverLink": false,
            "animationDuration": 3000,
            "data": [{
                "value": 55,
                "name": '',
                "label": {
                    "normal": {
                        "show": true,
                        "position": 'outside',
                        "formatter": '{a}: {c} 个',
                        "textStyle": {
                            "color": '#05FFE5',
                            "fontSize": '18'
                        }
                    }
                },
                "labelLine": {
                    "show": true,
                    "lineStyle": {
                        "color": "#05FFE5"
                    }
                },
                "itemStyle": {
                    "color": "#E75B44"
                },
            }, {
                "itemStyle": {
                    "color": "transparent"
                },
                "value": 45,
            }]
        }

    ]
}