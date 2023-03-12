/*请不要再此基础上进行修改和保存自己修改的内容，若想修改克隆一份*/


var dataArr = 80;
    if (data == undefined) {
        dataArr = 0;
    }
    var colorSet = {
        color: '#468EFD'
    };
    var text;
   
    var option = {
        backgroundColor: "#000",
        title: {
            show: true,
            text: '优',
            x: '49%',
            y: '55%',
            z: 8,
            textAlign: 'center',
            textStyle: {
                color: ' rgb(147,169,205) ',
                fontSize: 26,
            },

        },
        series: [
            {
                name: "内部进度条",
                type: "gauge",
                // center: ['20%', '50%'],
                radius: '60%',

                splitNumber: 10,
                axisLine: {
                    lineStyle: {
                        color: [
                            [dataArr / 100, colorSet.color],
                            [1, "#111F42"]
                        ],
                        width: 14
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
            },
            {
                name: '外部刻度',
                type: 'gauge',
                //  center: ['20%', '50%'],
                radius: '70%',
                min: 0, //最小刻度
                max: 100, //最大刻度
                splitNumber: 10, //刻度数量
                startAngle: 225,
                endAngle: -45,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: [
                            [1, 'rgba(0,0,0,0)']
                        ]
                    }
                },
                //仪表盘轴线
                axisLabel: {
                    show: true,
                    color: '#4d5bd1',
                    distance: 25,
                    formatter: function (v) {
                        switch (v + '') {
                            case '0':
                                return '0';
                            case '10':
                                return '10';
                            case '20':
                                return '20';
                            case '30':
                                return '30';
                            case '40':
                                return '40';
                            case '50':
                                return '50';
                            case '60':
                                return '60';
                            case '70':
                                return '70';
                            case '80':
                                return '80';
                            case '90':
                                return '90';
                            case '100':
                                return '100';
                        }
                    }
                }, //刻度标签。
                axisTick: {
                    show: true,
                    splitNumber: 7,
                    lineStyle: {
                        color: colorSet.color, //用颜色渐变函数不起作用
                        width: 1,
                    },
                    length: -8
                }, //刻度样式
                splitLine: {
                    show: true,
                    length: -20,
                    lineStyle: {
                        color: colorSet.color, //用颜色渐变函数不起作用
                    }
                }, //分隔线样式
                detail: {
                    show: false
                },
                pointer: {
                    show: false
                }
            },
            /*内部*/
            {
                type: 'pie',
                radius: ['0', '35%'],
                center: ['50%', '50%'],
                z: 8,
                hoverAnimation: false,
                data: [{
                    name: '污染程度',
                    value: '80',
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
                                    color: '#468EFD',
                                    align: 'center',
                                    fontSize: 50,
                                    fontWeight: "bold"
                                },
                            },
                            formatter: function (params) {
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
                radius: "45%",
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
                radius: "50%",
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
        ]
    };
