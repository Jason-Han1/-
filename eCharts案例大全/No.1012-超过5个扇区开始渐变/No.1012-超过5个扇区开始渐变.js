const __CONFIG_A__ = {
    colorList: ['#F8C96D', '#62E9F5', '#6BD9BC', '#1CBBD2' , '#088AD5' ],     // 前五个扇区的颜色
    labelColor: '#088AD5',  // 扇区间引导线颜色
    borderColor: '#fff',    // 扇区间隔线颜色
    opacityColor: '2, 51, 153',    // 透明起始色
    insideBorderColor: 'rgba(250,250,250,0.6)',   // 内圆透明边框颜色
}

const _original_ = {
    "legend": {
        "show": false,
        "type": "scroll",
        "orient": "vertical",
        "top": "center",
        "right": 20,
        "data": [
            {
                "code": "ZB001603010117",
                "dw": "亿元",
                "name": "汽车类",
                "value": 1149
            },
            {
                "code": "ZB001603010115",
                "dw": "亿元",
                "name": "石油及制品类",
                "value": 413.4
            },
            {
                "code": "ZB001603010101",
                "dw": "亿元",
                "name": "粮油食品类",
                "value": 297.9
            },
            {
                "code": "ZB001603010104",
                "dw": "亿元",
                "name": "服装鞋帽、针、纺织品类",
                "value": 195.8
            },
            {
                "code": "ZB001603010111",
                "dw": "亿元",
                "name": "中西药品类",
                "value": 162.8
            },
            {
                "code": "ZB001603010110",
                "dw": "亿元",
                "name": "家用电器和音像器材类",
                "value": 145.7
            },
            {
                "code": "ZB001603010103",
                "dw": "亿元",
                "name": "烟酒类",
                "value": 124.7
            },
            {
                "code": "ZB001603010107",
                "dw": "亿元",
                "name": "日用品类",
                "value": 117.2
            },
            {
                "code": "ZB001603010102",
                "dw": "亿元",
                "name": "饮料类 ",
                "value": 68.4
            },
            {
                "code": "ZB001603010112",
                "dw": "亿元",
                "name": "文化办公用品类",
                "value": 52.5
            },
            {
                "code": "ZB001603010114",
                "dw": "亿元",
                "name": "通讯器材类",
                "value": 46.4
            },
            {
                "code": "ZB001603010105",
                "dw": "亿元",
                "name": "化妆品类",
                "value": 44.7
            },
            {
                "code": "ZB001603010106",
                "dw": "亿元",
                "name": "金银珠宝类",
                "value": 40.5
            },
            {
                "code": "ZB001603010116",
                "dw": "亿元",
                "name": "建筑及装潢材料类",
                "value": 31.3
            },
            {
                "code": "ZB001603010113",
                "dw": "亿元",
                "name": "家具类",
                "value": 28.5
            }
        ]
    },
    "borderColor": "#fff",
    "opacityColor": "8, 138, 213",
    "title": {
        "text": "",
        "x": "center",
        "y": "center",
        "textStyle": {}
    },
    "tooltip": {
        "show": true,
        "trigger": "item"
    },
    "series": [
        {
            "type": "pie",
            "center": [
                "50%",
                "50%"
            ],
            "left": 0,
            "width": "100%",
            "radius": [
                "25%",
                "45%"
            ],
            "label": {
                "show": true,
                "position": "outside",
                "formatter": "{a|{b}\n{d}%}",
                "rich": {
                    "a": {
                        "align": "left",
                        "lineHeight": 20
                    }
                }
            },
            "tooltip": {
                "show": true
            },
            "labelLine": {
                "normal": {
                    "length": 15,
                    "length2": 30,
                    "lineStyle": {
                        "width": 1
                    }
                }
            },
            "itemStyle": {
                "borderColor": "rgba(255, 255, 255, 1)",
                "borderWidth": 1
            },
            "data": [
                {
                    "code": "ZB001603010117",
                    "dw": "亿元",
                    "name": "汽车类",
                    "value": 1149
                },
                {
                    "code": "ZB001603010115",
                    "dw": "亿元",
                    "name": "石油及制品类",
                    "value": 413.4
                },
                {
                    "code": "ZB001603010101",
                    "dw": "亿元",
                    "name": "粮油食品类",
                    "value": 297.9
                },
                {
                    "code": "ZB001603010104",
                    "dw": "亿元",
                    "name": "服装鞋帽、针、纺织品类",
                    "value": 195.8
                },
                {
                    "code": "ZB001603010111",
                    "dw": "亿元",
                    "name": "中西药品类",
                    "value": 162.8
                },
                {
                    "code": "ZB001603010110",
                    "dw": "亿元",
                    "name": "家用电器和音像器材类",
                    "value": 145.7
                },
                {
                    "code": "ZB001603010103",
                    "dw": "亿元",
                    "name": "烟酒类",
                    "value": 124.7
                },
                {
                    "code": "ZB001603010107",
                    "dw": "亿元",
                    "name": "日用品类",
                    "value": 117.2
                },
                {
                    "code": "ZB001603010102",
                    "dw": "亿元",
                    "name": "饮料类 ",
                    "value": 68.4
                },
                {
                    "code": "ZB001603010112",
                    "dw": "亿元",
                    "name": "文化办公用品类",
                    "value": 52.5
                },
                {
                    "code": "ZB001603010114",
                    "dw": "亿元",
                    "name": "通讯器材类",
                    "value": 46.4
                },
                {
                    "code": "ZB001603010105",
                    "dw": "亿元",
                    "name": "化妆品类",
                    "value": 44.7
                },
                {
                    "code": "ZB001603010106",
                    "dw": "亿元",
                    "name": "金银珠宝类",
                    "value": 40.5
                },
                {
                    "code": "ZB001603010116",
                    "dw": "亿元",
                    "name": "建筑及装潢材料类",
                    "value": 31.3
                },
                {
                    "code": "ZB001603010113",
                    "dw": "亿元",
                    "name": "家具类",
                    "value": 28.5
                }
            ]
        },
        {
            "center": [
                "50%",
                "50%"
            ],
            "left": 0,
            "width": "100%",
            "radius": [
                "20%",
                "35%"
            ],
            "type": "pie",
            "label": {
                "normal": {
                    "show": false
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                },
                "emphasis": {
                    "show": false
                }
            },
            "animation": false,
            "tooltip": {
                "show": false
            },
            "hoverOffset": 0,
            "itemStyle": {
                "normal": {
                    "color": "rgba(250,250,250,0.5)"
                }
            },
            "data": [
                {
                    "value": 1
                }
            ]
        }
    ]
}

function getEchartGradientPie (option, apiData, customOption) {

    if (!apiData) return option    
    
    option.labelLine = { lineStyle: { color: __CONFIG_A__.labelColor } }
    option.label = { color: __CONFIG_A__.labelColor }

    let _series_ = {
        color: __CONFIG_A__.colorList,
        radius: ['25%', '52%'],
        labelLine: { length: 12, length2: 12 },
        itemStyle: { borderColor: __CONFIG_A__.borderColor }
    }

    option.series[0] = Object.assign(option.series[0], _series_);
    option.series[1].itemStyle.normal.color = __CONFIG_A__.insideBorderColor;

    // 对条件成立的数据进行处理(从第五个扇区开始渐变，并取消label)
    option.series[0].data = apiData.map((e, index) => {

        if (index > 4) {
            
            e.itemStyle = e.labelLine = {}

            if (index == 5) {

                e.itemStyle.color = 'rgba(' + __CONFIG_A__.opacityColor + ', 1)'
                e.label = e.labelLine = {show: false}

            } else {
                // console.log(( 1 - ( index - 5 ) * 0.12 ));
                e.label = e.labelLine = {show: false}
                e.itemStyle.color = 'rgba(' + __CONFIG_A__.opacityColor + ', '+ ( 1 - ( index - 5 ) * 0.12 ) + ')'
            }
        }
        
        return e
    })

    return option;

}

option = {
    "legend": {
        "show": false,
        "type": "scroll",
        "orient": "vertical",
        "top": "center",
        "right": 20,
        "data": [
            {
                "code": "ZB001603010117",
                "dw": "亿元",
                "name": "汽车类",
                "value": 1149
            },
            {
                "code": "ZB001603010115",
                "dw": "亿元",
                "name": "石油及制品类",
                "value": 413.4
            },
            {
                "code": "ZB001603010101",
                "dw": "亿元",
                "name": "粮油食品类",
                "value": 297.9
            },
            {
                "code": "ZB001603010104",
                "dw": "亿元",
                "name": "服装鞋帽、针、纺织品类",
                "value": 195.8
            },
            {
                "code": "ZB001603010111",
                "dw": "亿元",
                "name": "中西药品类",
                "value": 162.8
            },
            {
                "code": "ZB001603010110",
                "dw": "亿元",
                "name": "家用电器和音像器材类",
                "value": 145.7
            },
            {
                "code": "ZB001603010103",
                "dw": "亿元",
                "name": "烟酒类",
                "value": 124.7
            },
            {
                "code": "ZB001603010107",
                "dw": "亿元",
                "name": "日用品类",
                "value": 117.2
            },
            {
                "code": "ZB001603010102",
                "dw": "亿元",
                "name": "饮料类 ",
                "value": 68.4
            },
            {
                "code": "ZB001603010112",
                "dw": "亿元",
                "name": "文化办公用品类",
                "value": 52.5
            },
            {
                "code": "ZB001603010114",
                "dw": "亿元",
                "name": "通讯器材类",
                "value": 46.4
            },
            {
                "code": "ZB001603010105",
                "dw": "亿元",
                "name": "化妆品类",
                "value": 44.7
            },
            {
                "code": "ZB001603010106",
                "dw": "亿元",
                "name": "金银珠宝类",
                "value": 40.5
            },
            {
                "code": "ZB001603010116",
                "dw": "亿元",
                "name": "建筑及装潢材料类",
                "value": 31.3
            },
            {
                "code": "ZB001603010113",
                "dw": "亿元",
                "name": "家具类",
                "value": 28.5
            }
        ]
    },
    "borderColor": "#fff",
    "opacityColor": "8, 138, 213",
    "title": {
        "text": "",
        "x": "center",
        "y": "center",
        "textStyle": {}
    },
    "tooltip": {
        "show": true,
        "trigger": "item"
    },
    "series": [
        {
            "color": [
                "#F8C96D",
                "#62E9F5",
                "#6BD9BC",
                "#1CBBD2",
                "#088AD5"
            ],
            "radius": [
                "25%",
                "52%"
            ],
            "labelLine": {
                "length": 12,
                "length2": 12,
                "normal": {
                    "length": 15,
                    "length2": 30,
                    "lineStyle": {
                        "width": 1
                    }
                }
            },
            "itemStyle": {
                "borderColor": "#fff",
                "borderWidth": 1
            },
            "type": "pie",
            "center": [
                "50%",
                "50%"
            ],
            "left": 0,
            "width": "100%",
            "label": {
                "show": true,
                "position": "outside",
                "formatter": "{a|{b}\n{d}%}",
                "rich": {
                    "a": {
                        "align": "left",
                        "lineHeight": 20
                    }
                }
            },
            "tooltip": {
                "show": true
            },
            "data": [
                {
                    "code": "ZB001603010117",
                    "dw": "亿元",
                    "name": "汽车类",
                    "value": 1149
                },
                {
                    "code": "ZB001603010115",
                    "dw": "亿元",
                    "name": "石油及制品类",
                    "value": 413.4
                },
                {
                    "code": "ZB001603010101",
                    "dw": "亿元",
                    "name": "粮油食品类",
                    "value": 297.9
                },
                {
                    "code": "ZB001603010104",
                    "dw": "亿元",
                    "name": "服装鞋帽、针、纺织品类",
                    "value": 195.8
                },
                {
                    "code": "ZB001603010111",
                    "dw": "亿元",
                    "name": "中西药品类",
                    "value": 162.8
                },
                {
                    "code": "ZB001603010110",
                    "dw": "亿元",
                    "name": "家用电器和音像器材类",
                    "value": 145.7,
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "color": "rgba(2, 51, 153, 1)"
                    },
                    "label": {
                        "show": false
                    }
                },
                {
                    "code": "ZB001603010103",
                    "dw": "亿元",
                    "name": "烟酒类",
                    "value": 124.7,
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "color": "rgba(2, 51, 153, 0.88)"
                    },
                    "label": {
                        "show": false
                    }
                },
                {
                    "code": "ZB001603010107",
                    "dw": "亿元",
                    "name": "日用品类",
                    "value": 117.2,
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "color": "rgba(2, 51, 153, 0.76)"
                    },
                    "label": {
                        "show": false
                    }
                },
                {
                    "code": "ZB001603010102",
                    "dw": "亿元",
                    "name": "饮料类 ",
                    "value": 68.4,
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "color": "rgba(2, 51, 153, 0.64)"
                    },
                    "label": {
                        "show": false
                    }
                },
                {
                    "code": "ZB001603010112",
                    "dw": "亿元",
                    "name": "文化办公用品类",
                    "value": 52.5,
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "color": "rgba(2, 51, 153, 0.52)"
                    },
                    "label": {
                        "show": false
                    }
                },
                {
                    "code": "ZB001603010114",
                    "dw": "亿元",
                    "name": "通讯器材类",
                    "value": 46.4,
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "color": "rgba(2, 51, 153, 0.4)"
                    },
                    "label": {
                        "show": false
                    }
                },
                {
                    "code": "ZB001603010105",
                    "dw": "亿元",
                    "name": "化妆品类",
                    "value": 44.7,
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "color": "rgba(2, 51, 153, 0.28)"
                    },
                    "label": {
                        "show": false
                    }
                },
                {
                    "code": "ZB001603010106",
                    "dw": "亿元",
                    "name": "金银珠宝类",
                    "value": 40.5,
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "color": "rgba(2, 51, 153, 0.16000000000000003)"
                    },
                    "label": {
                        "show": false
                    }
                },
                {
                    "code": "ZB001603010116",
                    "dw": "亿元",
                    "name": "建筑及装潢材料类",
                    "value": 31.3,
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "color": "rgba(2, 51, 153, 0.040000000000000036)"
                    },
                    "label": {
                        "show": false
                    }
                },
                {
                    "code": "ZB001603010113",
                    "dw": "亿元",
                    "name": "家具类",
                    "value": 28.5,
                    "labelLine": {
                        "show": false
                    },
                    "itemStyle": {
                        "color": "rgba(2, 51, 153, -0.08000000000000007)"
                    },
                    "label": {
                        "show": false
                    }
                }
            ]
        },
        {
            "center": [
                "50%",
                "50%"
            ],
            "left": 0,
            "width": "100%",
            "radius": [
                "25%",
                "35%"
            ],
            "type": "pie",
            "label": {
                "normal": {
                    "show": false
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                },
                "emphasis": {
                    "show": false
                }
            },
            "animation": false,
            "tooltip": {
                "show": false
            },
            "hoverOffset": 0,
            "itemStyle": {
                "normal": {
                    "color": "rgba(250,250,250,0.6)"
                }
            },
            "data": [
                {
                    "value": 1
                }
            ]
        }
    ],
    "labelLine": {
        "lineStyle": {
            "color": "#088AD5"
        }
    },
    "label": {
        "color": "#088AD5"
    }
}