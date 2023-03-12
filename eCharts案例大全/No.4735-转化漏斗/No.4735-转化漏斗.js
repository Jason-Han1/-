option = {
    series: [{
        name: '漏斗图',
        color: ['#23a4f5', '#8084d9', '#3cd1c0', '#ebd352'],
        type: 'funnel',
        left: '0',
        top: 0,
        bottom: 0,
        width: '96',
        min: 0,
        max: 100,
        minSize: '100%',
        maxSize: '100%',
        sort: 'descending',
        legendHoverLink: false,
        label: {
            show: true,
            position: 'inside',
            fontSize: 10,
            formatter: function(params) {
                let text = '';
                switch (params.dataIndex) {
                    case 0:
                        text = `{value1|${params.data.data}辆}`;
                        break;
                    case 1:
                        text = `{value2|${params.data.data}辆}`;
                        break;
                    case 2:
                        text = `{value3|${params.data.data}辆}`;
                        break;
                    case 3:
                        text = `{value4|${params.data.data}辆}`;
                        break;
                }
                return text;
            },
            rich: {
                value1: {
                    color: '#333',
                    fontWeight: 700,
                    fontFamily: 'Camar'
                },
                value2: {
                    color: '#333',
                    fontWeight: 700,
                    fontFamily: 'Camar'
                },
                value3: {
                    color: '#333',
                    fontWeight: 700,
                    fontFamily: 'Camar'
                },
                value4: {
                    color: '#333',
                    fontWeight: 700,
                    fontFamily: 'Camar'
                }
            }
        },
        labelLine: {
            length: 10,
            lineStyle: {
                width: 0,
                type: 'solid'
            }
        },
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 0
        },
        emphasis: {
            itemStyle: {
                color: '#999'
            }
        },
        markLine: {
            data: [
                [{
                        x: '106',
                        y: '12.5%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none',
                    },
                    {
                        x: '90%',
                        y: '12.5%',
                        symbol: 'none'
                    }
                ],
                [{
                        x: '90%',
                        y: '12.5%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '25%',
                        label: {
                            formatter: () => {
                                return '123%'
                            }
                        }
                    }
                ],
                [{
                        x: '106',
                        y: '38%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '38%',
                        symbol: 'none'
                    }
                ],
                [{
                        x: '90%',
                        y: '38%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '29%',
                    }
                ],
                [{
                        x: '90%',
                        y: '38%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '50%',
                        label: {
                            formatter: () => {
                                return "23%"
                            },
                        },
                    }
                ],

                [{
                        x: '106',
                        y: '62.5%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '62.5%',
                        symbol: 'none'
                    }
                ],
                [{
                        x: '90%',
                        y: '62.5%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '55%',
                    }
                ],
                [{
                        x: '90%',
                        y: '62.5%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '75%',
                        label: {
                            formatter: () => {
                                return "23%"
                            },
                        },
                    }
                ],
                [{
                        x: '106',
                        y: '88%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '88%',
                        symbol: 'none'
                    }
                ],
                [{
                        x: '90%',
                        y: '88%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '79%',
                    }
                ],

                [{
                        x: '106',
                        y: '8%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid',
                            position: 'start'
                        },

                        symbol: 'none'
                    },
                    {
                        x: '95%',
                        y: '8%',
                        symbol: 'none'
                    }
                ],
                [{
                        x: '95%',
                        y: '8%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid',
                            position: 'start'
                        },

                        symbol: 'none'
                    },
                    {
                        x: '95%',
                        y: '52%'
                    }
                ],
                [{
                    x: '95%',
                    y: '95%',
                    lineStyle: {
                        color: '#999',
                        type: 'solid',
                    },

                    label: {
                        formatter: () => {
                            return "23%"
                        },
                    },
                    symbol: 'none'
                }, {
                    x: '95%',
                    y: '55%',
                }],
                [{
                    x: '106',
                    y: '95%',
                    lineStyle: {
                        color: '#999',
                        type: 'solid',
                        position: 'start'
                    },
                    symbol: 'none'
                }, {
                    x: '95%',
                    y: '95%',
                    symbol: 'none'
                }, ],

            ]
        },
        data: [{
                "data": 411833,
                "name": "满足策略策略数"
            },
            {
                "data": 196625,
                "name": "检查升级数"
            },
            {
                "data": 191061,
                "name": "下载成功数"
            },
            {
                "data": 106227,
                "name": "升级成功车辆数"
            }
        ]
    }]
};