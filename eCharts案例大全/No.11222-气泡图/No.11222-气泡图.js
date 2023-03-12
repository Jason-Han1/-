var plantCap = [{
    name: '重大项目决策',
    value: '222'
}, {
    name: '重要人事任免',
    value: '115'
}, {
    name: '大额度资金运作',
    value: '113'
}, {
    name: '重大事项安排',
    value: '95'
}, {
    name: '十九大',
    value: '92'
}, {
    name: '党建',
    value: '87'
}, {
    name: '贯彻落实',
    value: '87'
}, {
    name: '党廉',
    value: '60'
}];

var datalist = [{
    offset: [56, 48],
    symbolSize: 120,
    opacity: .95,
    color: '#f467ce'
}, {
    offset: [35, 80],
    symbolSize: 95,
    opacity: .88,
    color: '#7aabe2'
}, {
    offset: [20, 43],
    symbolSize: 90,
    opacity: .84,
    color: '#ff7123'
}, {
    offset: [83, 30],
    symbolSize: 90,
    opacity: .8,
    color: '#ffc400'
}, {
    offset: [36, 20],
    symbolSize: 65,
    opacity: .75,
    color: '#5e333f'
}, {
    offset: [64, 10],
    symbolSize: 70,
    opacity: .7,
    color: '#6b3442'
}, {
    offset: [75, 75],
    symbolSize: 60,
    opacity: .68,
    color: '#8a3647'
}, {
    offset: [88, 62],
    symbolSize: 50,
    opacity: .6,
    color: '#68333f'
}];
var datas = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        name: item.value + '\n' + item.name,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: 11
                }
            }
        },
        itemStyle: {
            normal: {
                color: itemToStyle.color,
                opacity: itemToStyle.opacity
            }
        },
    })
}
option = {
    "grid": {
        "show": false,
        "top": 10,
        "bottom": 10
    },
    "xAxis": [{
        "gridIndex": 0,
        "type": "value",
        "show": false,
        "min": 0,
        "max": 100,
        "nameLocation": "middle",
        "nameGap": 5
    }],
    "yAxis": [{
        "gridIndex": 0,
        "min": 0,
        "show": false,
        "max": 100,
        "nameLocation": "middle",
        "nameGap": 30
    }],
    "series": [{
        "type": "scatter",
        "symbol": "circle",
        "symbolSize": 120,
        "label": {
            "normal": {
                "show": true,
                "formatter": "{b}",
                "color": "#fff",
                "textStyle": {
                    "fontSize": "20"
                }
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#00acea"
            }
        },
        "data": [{
            "name": "65%\n设计服务",
            "value": [56, 50.37017229444302],
            "symbolSize": 89.05,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#5D81F2",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#5D81F2",
                    "opacity": 0.8112433699272235
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "56%\n别墅豪宅",
            "value": [35, 81.63280504693392],
            "symbolSize": 87.13,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#A69FEB",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#A69FEB",
                    "opacity": 0.7912606389539903
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "43\n中小学教育",
            "value": [20, 44.45772241144583],
            "symbolSize": 82.53,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#F08DAC",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#F08DAC",
                    "opacity": 0.7899962994942643
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "42\n别墅豪宅--83,30",
            "value": [83, 31.90602688276642],
            "symbolSize": 81.65,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#72C9EE",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#72C9EE",
                    "opacity": 0.7810842481805848
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "55%\n办公设备",
            "value": [36, 22.65526275331577],
            "symbolSize": 81.25,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#F3A162",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#F3A162",
                    "opacity": 0.823701739237696
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "40\n办公设备--64,10",
            "value": [64, 11.71850484236621],
            "symbolSize": 79.6,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#F4BBAB",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#F4BBAB",
                    "opacity": 0.8113975576662145
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "36\n学前教育--10,20",
            "value": [10, 24.252260349972666],
            "symbolSize": 76.12,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#cebf06",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#cebf06",
                    "opacity": 0.7974589860614285
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "36\n男鞋--20,30",
            "value": [20, 32.84309573437619],
            "symbolSize": 75.96000000000001,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#5D81F2",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#5D81F2",
                    "opacity": 0.8082521277907982
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "32\n水上运动--0,78",
            "value": [0, 79.88179740797752],
            "symbolSize": 72.44,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#A69FEB",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#A69FEB",
                    "opacity": 0.8654557789564574
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "30\n房屋租赁--40,40",
            "value": [40, 41.781316797682486],
            "symbolSize": 70.13,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#F08DAC",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#F08DAC",
                    "opacity": 0.8914826692981375
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "28\n大学考试--70,62",
            "value": [70, 62.98442318159977],
            "symbolSize": 67.63,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#72C9EE",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#72C9EE",
                    "opacity": 0.795701245836931
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "26\n借款/贷款--10,62",
            "value": [10, 66.95594893798351],
            "symbolSize": 65.77,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#F3A162",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#F3A162",
                    "opacity": 0.8206796595534723
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "24\n软件--30,62",
            "value": [30, 63.805379138591185],
            "symbolSize": 64.13,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#F4BBAB",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#F4BBAB",
                    "opacity": 0.8559578142346121
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "24\n落户服务--40,52",
            "value": [40, 52.13678529955903],
            "symbolSize": 64.03999999999999,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#cebf06",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#cebf06",
                    "opacity": 0.8026705316393242
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "24\n商业/办公家具--50,10",
            "value": [50, 14.404547649726732],
            "symbolSize": 63.849999999999994,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#5D81F2",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#5D81F2",
                    "opacity": 0.9076107067965956
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "22\n出国留学--90,62",
            "value": [90, 64.01032310824588],
            "symbolSize": 62.47,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#A69FEB",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#A69FEB",
                    "opacity": 1
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "22\n运动鞋--20,62",
            "value": [20, 62.99030596635759],
            "symbolSize": 62.129999999999995,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#F08DAC",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#F08DAC",
                    "opacity": 0.8960157888244727
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "20\n租车--70,85",
            "value": [70, 86.80737676288211],
            "symbolSize": 59.84,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#72C9EE",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#72C9EE",
                    "opacity": 0.8168558036264957
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "18\n自助游--95,82",
            "value": [95, 83.21918577775143],
            "symbolSize": 58.41,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#F3A162",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#F3A162",
                    "opacity": 0.7824102627359073
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }, {
            "name": "18\n商用房--30,40",
            "value": [30, 42.530178957222375],
            "symbolSize": 58.14,
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 11,
                        "color": "#fff",
                        "textShadowColor": "#F4BBAB",
                        "textShadowOffsetX": 0.5,
                        "textShadowOffsetY": 0.5,
                        "textShadowBlur": 0.1
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#F4BBAB",
                    "opacity": 0.9642901196496855
                }
            },
            "emphasis": {
                "itemStyle": {
                    "opacity": 1
                }
            }
        }]
    }]
};
