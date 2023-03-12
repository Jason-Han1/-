var option = {
    title: {
        "text": 'CPU使用率',
        "x": '50%',
        "y": '45%',
        textAlign: "center",
        "textStyle": {
            "fontWeight": 'normal',
            "fontSize": 24
        },
        "subtextStyle": {
            "fontWeight": 'bold',
            "fontSize": 32,
            "color": '#3ea1ff'
        }
    },
    series: [ 
        {
            "name": ' ',
            "type": 'pie',
            "radius": ['50%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 225,
            "color": ["#9f8fc1", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": '30',
                        "fontWeight": 'bold'
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 75,
                "name": '1'
            }, {
                "value": 25,
                "name": '2'
            }]
        }, 
      {
            "name": '',
            "type": 'pie',
            "radius": ['52%', '68%'],
            "avoidLabelOverlap": false,
            "startAngle": 317,
            "color": ["#fff", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "clockwise": false,
            "itemStyle":{
                "normal":{
                    "borderColor":"transparent",
                    "borderWidth":"20"
                },
                "emphasis":{
                    "borderColor":"transparent",
                    "borderWidth":"20"
                }
            }
            ,
            "z":10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": '30',
                        "fontWeight": 'bold'
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                // "value": (100 - value1) * 266 / 360,
                "name": ''
            }, {
                // "value": 100 - (100 - value1) * 266 / 360,
                "name": ''
            }
            ]
        }

    ]
};



app.timeTicket = setInterval(function() {
    var value = parseInt(Math.random() * 55) + 30,
        value_ = (100 - value) * 266 / 360;
    option.title.subtext = value + "%";
    option.series[1].data[0].value = value_;
    option.series[1].data[1].value = 100 - value_;
    myChart.setOption(option, true);
}, 1000);