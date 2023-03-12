option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "流转测绘",
        subtext: "敏感数据流转测绘追踪",
        top: "top",
        left: "left"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['接口A']
    }],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 2000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '敏感数据',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 2400,
             edgeLength:90
        },

        data: [{
            "name": "接口A",
            "value": 85,
            "symbolSize": 140,
            "category": "接口A",
            itemStyle: {
                normal: {
                    color: '#e62820', //背景颜色
                    shadowColor: '#fb6811', //背景阴影颜色
                    shadowBlur: 20
                }
            },
            label: {
                normal: {
                    "position": [20,20],
                    show: true,
                    formatter: [
                        '{textBorder|应用A-接口A}',
                        '{hr|}',
                        ' 应用A-接口A-2 ',
                        ' 应用A-接口A-2 '
                    ].join('\n'),

                    backgroundColor: '#eee',
                    borderRadius: 10,
                    color: '#100',
                    fontSize: 12,
                    shadowBlur: 3,
                    shadowColor: '#888',
                    lineHeight: 25,
                    rich: {
                        textBorder: {
                            fontSize: 15,
                            padding: 5,
                            textBorderColor: '#000',
                            textBorderWidth: 3,
                            color: '#fff'
                        },
                        textApp: {
                            color: 'green',
                        },
                        hr: {
                            borderColor: '#777',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                    }
                }
            },
            "draggable": "true"
        }, {

            "name": "数据库",
            "value": 85,
            "symbolSize": 60,
            "category": "接口A",
            itemStyle: {
                color: "rgba(13, 97, 231, 1)"
            },
            "symbol": `image://data:image/png;base64,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`,
            "draggable": "true",
            label: {
                normal: {
                    show: true,
                    formatter: [
                        '{textBorder|数据库详情}',
                        'titan_sensitive_records',
                        'titan_app_1',
                        'titan_app_2'
                    ].join('\n'),

                    backgroundColor: '#eee',
                    borderRadius: 10,
                    padding: 5,
                    "position": "right",
                    color: '#000',
                    fontSize: 12,
                    shadowBlur: 3,
                    shadowColor: '#888',
                    lineHeight: 25,

                    rich: {
                        textBorder: {

                            fontSize: 15,
                            textBorderColor: '#000',
                            textBorderWidth: 3,
                            color: '#fff'
                        },
                    }
                }
            }
        }, {
            "name": "接口B",
            "symbolSize": 80,
            "category": "接口A",
            "draggable": "true",
            "value": 92

        }, {
            "name": "接口C",
            "symbolSize": 80,
            "category": "接口A",
            "draggable": "true",
            "value": 88,
            itemStyle: {
                normal: {
                    color: '#97c119', //背景颜色
                    shadowColor: '#b3e61b', //背景阴影颜色
                    shadowBlur: 20
                }
            },
        }, {
            "name": "接口E",
            "symbolSize": 80,
            "category": "接口A",
            "draggable": "true",
            "value": 88,
            itemStyle: {
                normal: {
                    color: '#fd710e', //背景颜色
                    shadowColor: '#f75f3c', //背景阴影颜色
                    shadowBlur: 20
                }
            },
        }, {
            "name": "接口F",
            "symbolSize": 80,
            "category": "接口A",
            "draggable": "true",
            "value": 88,
            itemStyle: {
                normal: {
                    color: '#21a0bd', //背景颜色
                    shadowColor: '#2dcbef', //背景阴影颜色
                    shadowBlur: 20
                }
            },
        }, {
            "name": "接口D",
            "symbolSize": 80,
            "category": "接口A",
            "draggable": "true",
            "value": 88,
            itemStyle: {
                normal: {
                    color: '#6c28c7', //背景颜色
                    shadowColor: '#8840e8', //背景阴影颜色
                    shadowBlur: 20
                }
            },
        }, {
            "name": "接口G",
            "symbolSize": 80,
            "category": "接口A",
            "draggable": "true",
            "value": 88,
            itemStyle: {
                normal: {
                    color: '#1bc12f', //背景颜色
                    shadowColor: '#2eef45', //背景阴影颜色
                    shadowBlur: 20
                }
            }
        }, {
            "name": "接口H",
            "symbolSize": 80,
            "category": "接口A",
            "draggable": "true",
            "value": 88,
            itemStyle: {
                normal: {
                    color: '#ab2fd4', //背景颜色
                    shadowColor: '#bd3be8', //背景阴影颜色
                    shadowBlur: 20
                }
            },
        }, {
            "name": "接口M",
            "symbolSize": 80,
            "category": "接口A",
            "draggable": "true",
            "value": 88,
            itemStyle: {
                normal: {
                    color: '#c32492', //背景颜色
                    shadowColor: '#ec3eb7', //背景阴影颜色
                    shadowBlur: 20
                }
            },
        }],
        links: [{
            "source": "数据库",
            "target": "接口A",
        }, {
            "source": "接口A",
            "target": "接口C"
        }, {
            "source": "接口A",
            "target": "接口B"
        }, {
            "source": "接口B",
            "target": "接口E"
        }, {
            "source": "接口B",
            "target": "接口F"
        }, {
            "source": "接口B",
            "target": "接口D"
        }, {
            "source": "接口D",
            "target": "接口G"
        }, {
            "source": "接口G",
            "target": "接口F"
        }, {
            "source": "接口E",
            "target": "接口C"
        }, {
            "source": "接口E",
            "target": "接口H"
        }, {
            "source": "接口A",
            "target": "接口M"
        }],
        categories: [{
            'name': '接口A',
            itemStyle: {
                color: "rgba(13, 97, 231, 1)"
            }
        }],
        edgeSymbol: ["circle", "arrow"],
        edgeSymbolSize: [14, 18],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        },
    }]
};
//添加拖拽位置固定
myChart.on('mouseup', function(params) {
    var option = myChart.getOption();
    option.series[0].data[params.dataIndex].x = params.event.offsetX;
    option.series[0].data[params.dataIndex].y = params.event.offsetY;
    option.series[0].data[params.dataIndex].fixed = true;
    myChart.setOption(option);
});