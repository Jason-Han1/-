var formatUtil = echarts.format;

    function getLevelOption() {
        return [
            {
                itemStyle: {
                    borderColor: '#777',
                    borderWidth: 0,
                    gapWidth: 1
                },
                upperLabel: {
                    show: false
                }
            },
            {
                itemStyle: {
                    borderColor: '#555',
                    borderWidth: 5,
                    gapWidth: 1
                },
                emphasis: {
                    itemStyle: {
                        borderColor: '#ddd'
                    }
                }
            },
            {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                    borderWidth: 5,
                    gapWidth: 1,
                    borderColorSaturation: 0.6
                }
            }
        ];
    }

    myChart.setOption(option = {

        title: {
            text: 'Disk Usage',
            left: 'center'
        },

        tooltip: {
            formatter: function (info) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];

                for (var i = 1; i < treePathInfo.length; i++) {
                    treePath.push(treePathInfo[i].name);
                }

                return [
                    '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                    'Disk Usage: ' + formatUtil.addCommas(value) + ' KB',
                ].join('');
            }
        },

        series: [
        {
            name:'矩形图',
            type:'treemap',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}: {c}"
                    },
                    borderWidth: 1,
                    borderColor: '#ccc'
                },
                emphasis: {
                    label: {
                        show: true
                    },
                    color: '#cc99cc',
                    borderWidth: 3,
                    borderColor: '#996699'
                }
            },
            data:[
                {
                    name: '三星',
                    value: 6,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter : "{b}最多",
                                textStyle: {
                                    color: '#ccc',
                                    fontSize: 16
                                }
                            },
                            color: '#ccff99',
                            borderWidth: 1
                        },
                        emphasis: {
                            label: {
                                show: true,
                                formatter : "{b}: {c}",
                                textStyle: {
                                    color: 'red',
                                    fontSize: 18
                                }
                            },
                            color: '#cc9999',
                            borderWidth: 3,
                            borderColor: '#999999'
                        }
                    }
                },
                {
                    name: '小米',
                    value: 4,
                    itemStyle: {
                        normal: {
                            color: 'blue',
                        }
                    },
                    children: [ {
                        name: '小米',
                        value: 4,
                        itemStyle: {
                            color: 'red',
                        }
                    },
                    {
                        name: '苹果',
                        value: 4,
                        itemStyle: {
                           color: '#9999cc',
                        }
                    },]
                },
                {
                    name: '苹果',
                    value: 4,
                    itemStyle: {
                        normal: {
                            color: '#9999cc',
                        }
                    }
                },
                {
                    name: '魅族',
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: '#99cccc',
                        }
                    }
                },
                {
                    name: '华为',
                    value: 2,
                    itemStyle: {
                        normal: {
                            color: '#ccffcc',
                        }
                    }
                },
                {
                    name: '联想',
                    value: 2,
                    itemStyle: {
                        normal: {
                            color: '#ccccff',
                        }
                    }
                },
                {
                    name: '中兴',
                    value: 1,
                    itemStyle: {
                        
                            color:"red",
                        normal: {
                            color:"red",
                            label: {
                                show: true,
                                formatter: "{b}: {c}",
                            },
                            borderWidth: 3,
                            borderColor: 'red'
                        },
                        emphasis: {
                            label: {
                                show: true
                            },
                            color: '#cc9999',
                            borderWidth: 3,
                            borderColor: '#999999'
                        }
                    }
                }
            ]
        }
    ]
    });