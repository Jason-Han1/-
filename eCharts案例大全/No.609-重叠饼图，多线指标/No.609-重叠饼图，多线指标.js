var uploadedDataURL = "/asset/get/s/data-1595558176318-8YG4EhgK0.png";

option = {
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['60%', '65%'],
            center: ['51%', '54%'],
            color: 'rgba(239,251,253,0.7)',
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: 1
            }],
            z: 2
        },
        {
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['51%', '54%'],
            color: ['rgba(44,215,244,0.36)', 'rgba(255,255,255,0)'],
            data: [{
                    value: 400,
                    name: '肝气郁结',
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'rgba(26,188,215,0.54)'
                    }
                },
                {
                    value: 250,
                    name: '脾肾阳虚'
                }
            ],
            labelLine: {
                show: false
            },
            label: {
                position: 'inner',
                color: '#1ABCD7',
                formatter: function(params) {
                    // console.log('????---params', params)
                    if (params.dataIndex === 0) {
                        return params.name
                    } else {
                        return ''
                    }
                }
            }
        },
        {
            name: '',
            type: 'pie',
            radius: '50%',
            center: ['50%', '54%'],
            color: ['rgba(255,255,255,0)', 'rgba(91,123,242,0.4)'],
            data: [{
                    value: 300,
                    name: '肝气郁结'
                },
                {
                    value: 400,
                    name: '脾肾阳虚',
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'rgba(89,119,245,0.62)'
                    }
                }
            ],
            labelLine: {
                show: false
            },
            label: {
                position: 'inner',
                color: '#5068C1',
                formatter: function(params) {
                    // console.log('????---params', params)
                    if (params.dataIndex === 1) {
                        return params.name
                    } else {
                        return ''
                    }
                }
            },
            itemStyle: {
                color: function(params) {
                    // console.log('---color--parmas', params)
                    if (params.dataIndex === 1) {
                        return 'rgba(91,123,242,0.4)'
                    } else {
                        return 'rgba(255,255,255,0)'
                    }
                }
            }
        },
        {
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '54%'],
            z: 5,
            data: [{
                    value: 100,
                    name: '胁肋胀或窜痛',
                    isRed: true
                },
                {
                    value: 100,
                    name: '乳房胀痛',
                    isRed: true
                },
                {
                    value: 100,
                    name: '易怒'
                },
                {
                    value: 100,
                    name: '情志抑郁'
                },
                {
                    value: 250,
                    name: '',
                    labelLine: {
                        show: false
                    }
                }
            ],
            labelLine: {
                length: 30,
                length2: 100,
                lineStyle: {
                    type: 'dashed',
                    color: '#1ABCD7'
                }
            },
            label: {
                position: 'outside',
                color: '#2F2F2F',
                formatter: function(params) {
                    let isRed = params.data.isRed
                    if (isRed) {
                        return `{a|${params.name}}{b|}`
                    } else {
                        return params.name
                    }
                },
                rich: {
                    a: {
                        color: '#2F2F2F',
                        padding: [0, 3, 0, 0]
                    },
                    b: {
                        width: 12,
                        height: 12,
                        backgroundColor: {
                            image: uploadedDataURL
                        }
                    }
                }
            },
            itemStyle: {
                color: 'transparent'
            }
        },
        {
            name: '',
            type: 'pie',
            radius: '50%',
            center: ['50%', '54%'],
            z: 5,
            data: [{
                    value: 250,
                    name: '',
                    labelLine: {
                        show: false,
                        emphasis: {
                            show: false
                        }
                    }
                },
                {
                    value: 150,
                    name: '',
                    labelLine: {
                        show: false,
                        emphasis: {
                            show: false
                        }
                    }
                },
                {
                    value: 50,
                    name: '便溏'
                },
                {
                    value: 100,
                    name: '夜尿增多',
                    isRed: true
                },
                {
                    value: 100,
                    name: '怕冷手脚凉',
                    isRed: true
                }
            ],
            labelLine: {
                length: 30,
                length2: 100,
                lineStyle: {
                    type: 'dashed',
                    color: '#5B7BF2'
                }
            },
            label: {
                position: 'outside',
                color: '#2F2F2F',
                formatter: function(params) {
                    let isRed = params.data.isRed
                    if (isRed) {
                        return `{a|${params.name}}{b|}`
                    } else {
                        return params.name
                    }
                },
                rich: {
                    a: {
                        color: '#2F2F2F',
                        padding: [0, 3, 0, 0]
                    },
                    b: {
                        width: 12,
                        height: 12,
                        backgroundColor: {
                            image: uploadedDataURL
                        }
                    }
                }
            },
            itemStyle: {
                color: 'transparent'
            }
        }
    ]
}