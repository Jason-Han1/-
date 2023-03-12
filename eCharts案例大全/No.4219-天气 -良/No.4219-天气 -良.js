var option = {
    backgroundColor:'#000',
   title: [{
        show: true,
        text: '良',
        x: '49%',
        y: '55%',
        z: 8,
        textAlign: 'center',
        textStyle: {
            color: ' #fff',
            fontWeight: "none",
            fontSize: 24,
        },

    },{
        show: true,
        text: 'AQI',
        x: '49%',
        y: '80%',
        z: 8,
        textAlign: 'center',
        textStyle: {
            color: ' #fff',
            fontWeight: "none",
            fontSize: 24,
        },

    }, ],
	grid:{
        top:'0%'
    },
    series: [{
            name: "内部进度条",
            type: "gauge",
            // center: ['20%', '50%'],
            radius: '80%',

            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [97 / 500, '#468EFD'],
                        [1, "#0e2131"]
                    ],
                    width: 10
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            pointer: {
                show: false,
            },
			  detail: {
                // show: false,
                
            }
        },
        /*内部*/
        {
            type: 'pie',
            radius: ['0', '40%'],
            center: ['50%', '50%'],
            z: 8,
            hoverAnimation: false,
            data: [{
                name: '',
                value: '97',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#4FADFD'
                        }, {
                            offset: 1,
                            color: '#28E8FA'
                        }])
                    }

                },
                label: {
                    normal: {
                        rich: {
                            a: {
                                color: ' #fff',
                                align: 'center',
                                fontSize: 60,
                                fontWeight: "none"
                            },
                        },
                        formatter: function(params) {
                            return "{a|" + params.value + "}";
                        },
                        position: 'center',
                        show: true
                    }
                },
                labelLine: {
                    show: false
                }
            }],
        },
        /*外一层*/
        {
            type: "pie",
            radius: "40%",
            startAngle: 220,
            endAngle: -40,
            hoverAnimation: false,
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 1
            }],
            itemStyle: {
                normal: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "rgba(69, 161, 255,0.8)"
                        }, {
                            offset: 1,
                            color: "rgba(69, 161, 255,0.5)"
                        }]
                    }
                }
            }
        },
        //外二层圈
        {
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            z: 0,
            hoverAnimation: false,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: [{
                "value": 1
            }],
            itemStyle: {
                normal: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "rgba(69, 161, 255,0.5)"
                        }, {
                            offset: 1,
                            color: "rgba(69, 161, 255,0.3)"
                        }]
                    }
                }
            }
        },
        //最外层圈
        {
            type: "pie",
            radius: "60%",
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            z: 0,
            hoverAnimation: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 1
            }],
            itemStyle: {
                normal: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: "rgba(69, 161, 255,0.3)"
                            },
                            {
                                offset: 1,
                                color: "rgba(69, 161, 255,0)"
                            }
                        ]
                    }
                }
            }
        }
    ,
	]
};