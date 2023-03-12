var myChart = echarts.init(document.getElementById('chart-panel'));
myChart.on('timelineplaychanged', function (params) {
   console.log(params);
    if(params.playState){
        myChart.dispatchAction({
    type: 'timelineChange',
    currentIndex: 0
})
}
});
var option = {
    "baseOption": {
        "title": {
            "textAlign": "center",
            "left": "15%",
            "top": "60%",
            "textStyle": {
                "fontSize": 60,
                "color": "rgba(0, 0, 0, 0.45)"
            }
        },
        "tooltip": {
            show: false,
            "trigger": "item",
            "backgroundColor": "rgba(0,0,0,0.85)"
        },
        "timeline": {
          //  show: true,
            "axisType": "category",
            "orient": "vertical",
            "loop": false,
            "autoPlay": true,
            "inverse": true,
            "playInterval": 1000,
            "left": null,
            "right": 0,
           // "top": 20,
            "bottom": 80,
            // "width": 55,
            "symbol": "none",
             lineStyle: {
                 show: false,
             },
             label:{
                  show: false,
             },
             checkpointStyle: {
                 symbol: 'none',
             },
            "controlStyle": {
                "showNextBtn": false,
                "showPrevBtn": false,
                "color": "#666",
                "borderColor": "#666",
                itemSize: 50,
                borderWidth: 2
            },
            "data": [
                "2月2日",
                "2月3日",
                "2月4日",
                "2月5日"
            ]
        },
        "visualMap": {
            "type": "piecewise",
            "pieces": [{
                    "min": 1,
                    "max": 9,
                    "label": "1-9 人"
                },
                {
                    "min": 10,
                    "max": 99,
                    "label": "10-99 人"
                },
                {
                    "min": 100,
                    "max": 499,
                    "label": "100-499 人"
                },
                {
                    "min": 500,
                    "max": 999,
                    "label": "500-999 人"
                },
                {
                    "gte": 1000,
                    "label": ">=1000 人"
                }
            ],
            "inRange": {
                "color": [
                    "#fed0b9",
                    "#f3ae8b",
                    "#ee826f",
                    "#af322a",
                    "#74211d"
                ]
            },
            "itemWidth": 50,
            "itemHeight": 20,
            "itemGap": 8,
            "bottom": 10,
            "textStyle": {
                "color": "#c1c1c1"
            }
        },
        "series": [{
            "type": "map",
            "map": "china",
            "zoom": 1.1,
            "top": 50,
            "itemStyle": {
                "borderColor": 'rgba(255,255,255, .95)',
                borderWidth: 3,
            },
            "label": {
                "show": false,
                // lineHeight: 16,
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: 16,
                textBorderColor: '#fff',
                "color": "rgba(0,0,0, 0.65)",
                formatter: function(params) {
                    const {
                        data,
                        name
                    } = params
                    if (data) {
                        const {
                            value
                        } = data
                        return `${name}\n${value}`
                    }
                    return `${name}`
                }
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#fff"
                }
            }
        }]
    },
    "options": [{
            "title": {
                "show": true,
                "text": "2月2日"
            },
            "series": {
                "data": [{
                    "name": "湖北",
                    "value": 19000,
                    "label": {
                        "show": true
                    }
                }]
            }
        },
        {
            "title": {
                "show": true,
                "text": "2月3日"
            },
            "series": {
                "data": [{
                        "name": "湖北",
                        "value": 19265,
                        "label": {
                            "show": true
                        }
                    },
                    {
                        "name": "海南",
                        "value": 100,
                        "label": {
                            "show": true
                        }
                    }
                ]
            }
        },
        {
            "title": {
                "show": true,
                "text": "2月4日"
            },
            "series": {
                "data": [{
                        "name": "湖北",
                        "value": 19490,
                        "label": {
                            "show": true
                        }
                    },
                    {
                        "name": "海南",
                        "value": 120,
                        "label": {
                            "show": true
                        }
                    },
                    {
                        "name": "河北",
                        "value": 157,
                        "label": {
                            "show": true
                        }
                    },
                    {
                        "name": "上海",
                        "value": 254,
                        "label": {
                            "show": true
                        }
                    }
                ]
            }
        },
        {
            "title": {
                "show": true,
                "text": "2月5日"
            },
            "series": {
                "data": [{
                        "name": "湖北",
                        "value": 20000,
                        "label": {
                            "show": true
                        }
                    },
                    {
                        "name": "海南",
                        "value": 130,
                        "label": {
                            "show": true
                        }
                    },
                    {
                        "name": "河北",
                        "value": 180,
                        "label": {
                            "show": true
                        }
                    },
                    {
                        "name": "上海",
                        "value": 300,
                        "label": {
                            "show": true
                        }
                    },
                    {
                        "name": "天津",
                        "value": 69,
                        "label": {
                            "show": true
                        }
                    },
                    {
                        "name": "重庆",
                        "value": 389,
                        "label": {
                            "show": true
                        }
                    }
                ]
            }
        }
    ]
}