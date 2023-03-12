var startAngle = 280 //起始角度
var option = {
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
    // },
    legend: {
        orient: 'vertical',
        x: 'left',
        // bottom:'10%',
        // left:'10%',
        data: ['上门服务', '服装销售', '广告'],
        textStyle: { //图例的公共文本样式
            color: 'black',
            fontSize: 16
        },
    },
    series: [{
            "name": '线',
            "type": 'pie',
            "zlevel": 100,
            "radius": ['94%', '95%'],
            "avoidLabelOverlap": false,
            "startAngle": startAngle,
            "color": ["#9f8fc1"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 20,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "transparent"
                    }
                }
            }, {
                "value": 60,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#535355"
                    }
                }
            }]
        },
        {
            "name": '线',
            "type": 'pie',
            "zlevel": 100,
            "radius": ['89%', '90%'],
            "avoidLabelOverlap": false,
            "startAngle": startAngle,
            "color": ["#9f8fc1"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 20,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "transparent"
                    }
                }
            }, {
                "value": 60,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#3C3B41"
                    }
                }
            }]
        },
        {
            "name": '饼图',
            "type": 'pie',
            "radius": ['65%', '85%'],
            "avoidLabelOverlap": false,
            "startAngle": startAngle,
            "color": ["#9f8fc1"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 20,
                itemStyle: {
                    normal: {
                        color: "transparent"
                    }
                }

            }, {
                "value": 10,
                "name": '上门服务',
                itemStyle: {
                    normal: {
                        color: "#505A92"
                    }
                }
            }, {
                "value": 20,
                "name": '服装销售',
                itemStyle: {
                    normal: {
                        color: "#343C6A"
                    }
                }
            }, {
                "value": 30,
                "name": '广告',
                itemStyle: {
                    normal: {
                        color: "#6A6CAF"
                    }
                }
            }]
        },
    ]
};