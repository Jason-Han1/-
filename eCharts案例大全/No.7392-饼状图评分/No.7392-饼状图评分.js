option = {
                "color": ["#fff", 'rgba(255,255,255,.5)', 'rgba(255,255,255,.2)'],
                "series": [
                    { //内圆
                        type: 'pie',
                        radius: '78%',
                        center: ['50%', '50%'],
                        z: 0,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.RadialGradient(.5, .5, 1, [{
                                        offset: 0,
                                        color: 'rgba(0,239,255,0)'
                                    },
                                    {
                                        offset: .5,
                                        // color: '#1E2B57'
                                        color:'rgba(6,155,186,.6)'
                                    },
                                    {
                                        offset: 1,
                                        color: '#00efff',
                                        // color:'rgba(17,24,43,0)'
                                    }
                                ], false),
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                        },
                        hoverAnimation: false,
                        label: {
                            show: false,
                        },
                        tooltip: {
                            show: false
                        },
                        data: [100],
                    },
                    {
                        type: 'pie',
                        hoverAnimation: false,
                        radius: '69%',
                        label: {
                            show: false
                        },
                        "itemStyle": {
                            'normal': {
                                color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                                        offset: 0,
                                        color: '#13153E'
                                    },
                                    {
                                        offset: .5,
                                        color: '#0d1e4d'
                                    },
                                    {
                                        offset: 1,
                                        color: '#0c8cab'
                                    }
                                ], false),
                                label: {
                                    show: false
                                },
                            },
                        },
                        data: [
                            {
                                value: 100,
                            },
                        ]
                    },
                    {
                        "type": "pie",
                        "radius": ["68%", "71%"],
                        "hoverAnimation": false,
                        startAngle:'300',
                        "data": [
                            {
                                "name": "",
                                "value": 300,
                                "itemStyle": {
                                    "normal": {
                                    color:
                                        {
                                            type: 'linear',
                                            colorStops: [
                                                // !! 在此添加想要的渐变过程色 !!
                                                { offset: 0, color: '#ffffff' },
                                                { offset: 1, color: '#00efff' }
                                            ]
                                        },
                                        shadowBlur:10,
                                        shadowColor:'#ffffff'
                                    }
                                },
                                "label": {
                                    "show": true,
                                    "position": "center",
                                    "color": "#fff",
                                    "fontSize": 80,
                                    "fontWeight": "bold",
                                    "formatter": function(o) {
                                        return '良好\n80%'
                                    }
                                },
                                labelLine: {
                                    show: false,
                                    emphasis: {
                                        show: false
                                    }
                                }
                            },
                                { //画中间的图标
                                    "name": "",
                                    "value": 0,
                                    "label": {
                                        position: 'inner',
                                        backgroundColor:'#fff',
                                        borderRadius: 50,
                                        padding: 8,
                                        top:100
                                    }
                                }, 
                                { //画剩余的刻度圆环
                                    "name": "",
                                    "value": 100,
                                    "label": {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false,
                                        emphasis: {
                                            show: false
                                        }
                                    },
                                }
                            ]
                    },
                    
                ]
            }