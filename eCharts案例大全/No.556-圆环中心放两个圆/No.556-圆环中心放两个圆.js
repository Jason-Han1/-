var data = 40
option = {
    backgroundColor: 'rgb(0 2 69)',
    "series": [{
            type: 'pie',
            "center": ["50%", "50%"],
            "radius": ["60%", "80%"],
            "hoverAnimation": false,
            startAngle: -180,
            clockwise: false,
            labelLine: {
                show: false
            },
            "data": [{
                    "name": "",
                    "value": data > 100 ? 100 : data,
                    "label": {
                        "show": false,
                        "position": "center",
                        "formatter": function(o) {
                            return ['{a|' + data + '}{b|%}',
                                '{c|完成比}'
                            ].join('\n')
                        },
                        rich: {
                            a: {
                                color: '#5841F3',
                                fontSize: 16,
                                // fontWeight: 'bold',
                                fontFamily: 'mission'
                            },
                            b: {
                                color: '#5841F3',
                                fontSize: 12,
                                // fontWeight: 'bold'
                            },
                            c: {
                                color: '#263039',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        color: '#0077FF '
                    },

                },
                // { //画中间的图标
                //     "name": "",
                //     "value": 0,
                //     itemStyle: {
                //         color: 'rgb(0 2 69)'
                //     },
                // },
                // { //画剩余的刻度圆环
                //     "name": "",
                //     "value": 100 - (data > 100 ? 100 : data),
                //     itemStyle: {
                //         color: 'rgba(0,0,0,0)'
                //     },
                //     "label": {
                //         show: false
                //     }
                // }
            ]
        },
        {
            type: 'pie',
            "center": ["50%", "50%"],
            "radius": ["60%", "95%"],
            "hoverAnimation": false,
            startAngle: -180,
            clockwise: false,
            labelLine: {
                show: false
            },
            itemStyle: {
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                label: {
                    // color: "rgb(0 2 69);" ,
                    borderColor: 'rgb(0 2 69)'

                }
            },
            data: [{
                    name: '',
                    value: data / 2,
                },
                { //画中间的图标
                    "name": "",
                    "value": 0,
                    itemStyle: {
                        color: '#fff'
                    },
                    "label": {
                        position: 'inside',
                        formatter: function() {
                            return '{a|干}'
                        },
                        rich: {
                            a: {
                                color: '#fff',
                                fontSize: 14,
                                width: 42,
                                height: 42,
                                borderRadius: 21,
                                borderWidth: 4,
                                borderColor: 'rgb(0 2 69)',
                                fontWeight: 100,
                                // lineHeight:100,
                                backgroundColor: '#0077FF',
                            }
                        }
                    },

                },
                { //画剩余的刻度圆环
                    "name": "",
                    "value": 100 - data / 2,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                    "label": {
                        show: false
                    }
                }
            ]
        },
        //支de 半圆的线
        {
            type: 'pie',
            "center": ["50%", "50%"],
            "radius": ["55%", "85%"],
            "hoverAnimation": false,
            startAngle: -180,
            clockwise: false,
            labelLine: {
                show: false
            },
            data: [{
                    name: '',
                    value: data * 1,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                },
                {
                    name: '',
                    value: (100 - data) * .5,
                    itemStyle: {
                        color: '#00FFF6'
                    },
                },
                { //画中间的图标
                    "name": "",
                    "value": 0,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                },
                { //画剩余的刻度圆环
                    "name": "",
                    "value": 100 - data - (100 - data) * .5,
                    itemStyle: {
                        color: '#00FFF6'
                    },
                    "label": {
                        show: false
                    }
                }
            ]
        },
        //支的中心圆
        {
            type: 'pie',
            "center": ["50%", "50%"],
            "radius": ["80%", "90%"],
            "hoverAnimation": false,
            startAngle: -180,
            clockwise: false,
            labelLine: {
                show: false
            },
            data: [{
                    name: '',
                    value: data,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                },
                {
                    name: '',
                    value: (100 - data) * .5,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                },
                { //画中间的图标
                    "name": "",
                    "value": 0,
                    itemStyle: {
                        color: '#fff'
                    },
                    "label": {
                        position: 'inside',
                        fontWeight: 'normal',
                        formatter: function() {
                            return '{a|支}'
                        },
                        rich: {
                            a: {
                                color: '#fff',
                                fontSize: 14,
                                width: 42,
                                height: 42,
                                borderRadius: 21,
                                fontWeight: 100,
                                borderWidth: 4,
                                borderColor: 'rgb(0 2 69)',
                                fontFamily: 'Microsoft YaHei',
                                // lineHeight:100,
                                backgroundColor: '#00FFF6',
                            }
                        }
                    }
                },
                { //画剩余的刻度圆环
                    "name": "",
                    "value": 100 - data - (100 - data) * .5,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                    "label": {
                        show: false
                    }
                }
            ]
        },
        //支的label线
        {
            type: 'pie',
            "center": ["50%", "50%"],
            "radius": ["90%", "90%"],
            "hoverAnimation": false,
            startAngle: -180,
            clockwise: false,
            labelLine: {
                show: false
            },
            data: [{
                    name: '',
                    value: data,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                },
                {
                    name: '',
                    value: (100 - data) * .5,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                },
                { //画中间的图标
                    "name": "",
                    "value": 0,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                    "label": {
                        // position: 'inside',
                        fontWeight: 'normal',
                        color: '#fff',
                        formatter: function() {
                            return (100 - data) + '%'
                        }
                    },
                    labelLine: {
                        show: true,
                        length: 0,
                        length2: 40,
                        lineStyle: {
                            color: '#152379'
                        }
                    }
                },
                { //画剩余的刻度圆环
                    "name": "",
                    "value": 100 - data - (100 - data) * .5,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                    "label": {
                        show: false
                    }
                }
            ]
        },
        //干的label线
        {
            type: 'pie',
            "center": ["50%", "50%"],
            "radius": ["90%", "90%"],
            "hoverAnimation": false,
            startAngle: -180,
            clockwise: false,
            labelLine: {
                show: false
            },
            itemStyle: {
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                label: {
                    // color: "rgb(0 2 69);" ,
                    borderColor: 'rgb(0 2 69)'

                }
            },
            data: [{
                    name: '',
                    value: data / 2,
                },
                { //画中间的图标
                    "name": "",
                    "value": 0,
                    itemStyle: {
                        color: '#fff'
                    },
                    "label": {
                        // position: 'inside',
                        fontWeight: 'normal',
                        color: '#fff',
                        formatter: function() {
                            return (data) + '%'
                        }
                    },
                    labelLine: {
                        show: true,
                        length: 0,
                        length2: 40,
                        lineStyle: {
                            color: '#152379'
                        }
                    }

                },
                { //画剩余的刻度圆环
                    "name": "",
                    "value": 100 - data / 2,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                    "label": {
                        show: false
                    }
                }
            ]
        },
    ]
}