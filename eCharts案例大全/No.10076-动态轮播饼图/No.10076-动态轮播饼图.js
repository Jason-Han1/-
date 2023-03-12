var name_flag = 0;
var data = [{
        "value": "1046",
        "name": "洞洞一",
        "itemStyle": {
            "normal": {
                "color": {
                    "x": 1,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                            "offset": 0,
                            "color": "#058aee"
                        },
                        {
                            "offset": 1,
                            "color": "#0ed2f9"
                        }
                    ]
                }
            }
        }
    },
    {
        "value": "903",
        "name": "洞洞二",
        "itemStyle": {
            "normal": {
                "color": {
                    "x": 1,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                            "offset": 0,
                            "color": "#0666e8"
                        },
                        {
                            "offset": 1,
                            "color": "#0486ed"
                        }
                    ]
                }
            }
        }
    },
    {
        "value": "784",
        "name": "洞洞三",
        "itemStyle": {
            "normal": {
                "color": {
                    "x": 1,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                            "offset": 0,
                            "color": "rgb(0,254,157)"
                        },
                        {
                            "offset": 1,
                            "color": "rgb(2,191,241)"
                        }
                    ]
                }
            }
        }
    },
    {
        "value": "683",
        "name": "洞洞四",
        "itemStyle": {
            "normal": {
                "color": {
                    "x": 1,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                            "offset": 0,
                            "color": "rgb(51,156,255)"
                        },
                        {
                            "offset": 1,
                            "color": "rgb(145,127,255)"
                        }
                    ]
                }
            }
        }
    },
    {
        "value": "659",
        "name": "洞洞五",
        "itemStyle": {
            "normal": {
                "color": {
                    "x": 1,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                            "offset": 0,
                            "color": "#fdc502"
                        },
                        {
                            "offset": 1,
                            "color": "#fcfa02"
                        }
                    ]
                }
            }
        }
    },
    {
        "value": 1488,
        "name": "洞洞六",
        "itemStyle": {
            "normal": {
                "color": {
                    "x": 1,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                            "offset": 0,
                            "color": "#ea7500"
                        },
                        {
                            "offset": 1,
                            "color": "#ffaf60"
                        }
                    ]
                }
            }
        }
    }
];
var option = {
    backgroundColor: '#010828',
    "title": [{
            "show": true,
            "text": "",
            "textStyle": {
                "color": "white",
                "fontSize": 18,
                "fontStyle": "normal",
                "fontWeight": "normal"
            },
            "top": "42%",
            "left": "center"
        },
        {
            "show": true,
            "text": "",
            "textStyle": {
                "color": "white",
                "fontSize": 16,
                "fontStyle": "normal",
                "fontWeight": "normal"
            },
            "top": "52%",
            "left": "center"
        },
    ],
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>数量:{c} ({d}%)",
        textStyle: {
            // fontSize: 36,
            fontWeight: 'bold',
            color: 'white',
        },
    },
    //自己设置扇形图颜色
    series: [{
            name: '洞洞',
            type: 'pie',
            //位置
            center: ['50%', '50%'],
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            selectedOffset: 25,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, 0.8)',
                    shadowBlur: 10,
                }
            },
            labelLine: {
                length: 27,
                length2: 30,
                lineStyle: {
                    width: 3
                }
            },
            label: {
                fontWeight: 'bold',
                fontSize: '20',
                color: 'white'
            },
            data: data
        },
        {
            name: '访问',
            type: 'pie',
            radius: '30%',
            z: 1,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: false,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            color: ['#0e1d7a'],
            data: [{
                value: 100,
                tooltip: {
                    show: false
                }
            }, ]
        }
    ]
};
var timeTicket = null;
timeTicket = setInterval(() => {
    if (name_flag > 5) {
        myChart.dispatchAction({
            type: 'pieUnSelect',
            seriesIndex: 0,
            dataIndex: 5
        });
        name_flag = 0;
    }
    myChart.dispatchAction({
        type: 'pieSelect',
        seriesIndex: 0,
        dataIndex: name_flag
    });
    if (name_flag !== 0) {
        myChart.dispatchAction({
            type: 'pieUnSelect',
            seriesIndex: 0,
            dataIndex: name_flag - 1
        });
    }
    option.title[0].text = option.series[0].data[name_flag].name;
    option.title[1].text = option.series[0].data[name_flag].value;
    myChart.setOption(option);
    name_flag++;
}, 2000);

//chui'zao'c会造成 
// myChart.on('mouseover', function(params) {
//     clearInterval(timeTicket);
//     myChart.dispatchAction({
//         type: 'pieUnSelect',
//         seriesIndex: 0
//     });
//     myChart.dispatchAction({
//         type: 'pieSelect',
//         seriesIndex: 0,
//         dataIndex: params.dataIndex
//     });
//     option.title[0].text = option.series[0].data[params.dataIndex].name;
//     option.title[1].text = option.series[0].data[params.dataIndex].value;
//     name_flag = params.dataIndex;
//     console.log(name_flag);
//     myChart.setOption(option);
// });
// myChart.on('mouseout', function(params) {
//     clearInterval(timeTicket);
//     timeTicket = setInterval(function() {
//         if (name_flag > 5) {
//             name_flag = 0;
//         }
//         myChart.dispatchAction({
//             type: 'pieUnSelect',
//             seriesIndex: 0,
//         });
//         myChart.dispatchAction({
//             type: 'pieSelect',
//             seriesIndex: 0,
//             dataIndex: name_flag
//         });
//         option.title[0].text = option.series[0].data[name_flag].name;
//         option.title[1].text = option.series[0].data[name_flag].value;
//         name_flag++;
//         myChart.setOption(option);
//     }, 2000);
// });