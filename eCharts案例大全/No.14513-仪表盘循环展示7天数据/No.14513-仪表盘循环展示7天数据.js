var timedata = [{
    name: '11-15',
    value: '60.56%'
}, {
    name: '11-16',
    value: '70.50%'
}, {
    name: '11-17',
    value: '30%'
}, {
    name: '11-18',
    value: '20%'
}, {
    name: '11-19',
    value: '80%'
}, {
    name: '11-20',
    value: '40%'
}, {
    name: '11-21',
    value: '60%'
}];

option = {
    title: {
        "x": '50%',
        "y": '45%',
        textAlign: "center",
        "textStyle": {
            "fontWeight": 'normal',
            "color": '#666666',
            "fontSize": 14
        },
        "subtextStyle": {
            "fontWeight": 'bold',
            "fontSize": 18,
            "color": '#3ea1ff'
        }
    },
    series: [{
            "name": ' ',
            "type": 'pie',
            "radius": ['50%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 225,
            "color": ["#00b7ee", "transparent"],
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
        }, {
            "name": '',
            "type": 'pie',
            "radius": ['52%', '68%'],
            "avoidLabelOverlap": false,
            "startAngle": 317,
            "color": ["#fff", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "clockwise": false,
            "itemStyle": {
                "normal": {
                    "borderColor": "transparent",
                    "borderWidth": "20"
                },
                "emphasis": {
                    "borderColor": "transparent",
                    "borderWidth": "20"
                }
            },
            "z": 10,
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
            }]
        }

    ]
};



var i = 0;

timeTicket = setInterval(function() {
    if (i == timedata.length) {
        i = 0;
    }
    var value = parseFloat(timedata[i].value);
    value_ = (100 - value) * 266 / 360;
    option.title.text = timedata[i].name;
    option.title.subtext = value + "%";
    option.series[1].data[0].value = value_;
    option.series[1].data[1].value = 100 - value_;
    myChart.setOption(option, true);
    i++;
}, 2000);