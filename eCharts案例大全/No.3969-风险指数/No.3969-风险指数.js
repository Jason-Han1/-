// 数据进度值
let dataArr = 40;
let per = dataArr / 100;

var option = {
    backgroundColor: "#FFFFFF",
    title: {
        show: true,
        text: '中风险',
        x: '50%',
        y: '52%',
        z: 10,
        textAlign: 'center',
        textStyle: {
            color: '#8C8C8C',
            fontSize: 14,
            fontWeight: 'normal'
        },

    },
    series: [{
            name: "内部（环形）进度条",
            type: "gauge",
            // center: ['20%', '50%'],
            radius: '28%',
            splitNumber: 10,
            axisLine: {
                roundCap: true,
                lineStyle: {
                    color: [
                        [0, '#3EC47C'],
                        [0.28, '#3EC47C'],
                        [per, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [{
                                    offset: 0,
                                    color: 'rgba(62,196,124,1)'
                                },
                                {
                                    offset: 1,
                                    color: `rgba(255,110,0,${per})`
                                }
                            ]
                        )]
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
            radius: '31.8%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                // 仪表盘刻度线
                lineStyle: {
                    width: 2,
                    color: [
                        [1, '#FFFFFF']
                    ]
                }
            },
            //仪表盘文字
            axisLabel: {
                show: true,
                color: '#595959',
                distance: -16,
                formatter: function(v) {
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
                    color: '#D8D8D8', //用颜色渐变函数不起作用
                    width: 2,
                },
                length: -5
            }, //刻度样式
            splitLine: {
                show: true,
                length: -10,
                lineStyle: {
                    color: '#D8D8D8', //用颜色渐变函数不起作用
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
            radius: ['0', '15%'],
            center: ['50%', '50%'],
            z: 8,
            hoverAnimation: false,
            data: [{
                name: '负面风险指数',
                value: Number(dataArr).toFixed(2),
                itemStyle: {
                    normal: {
                        color: '#fff',
                        shadowColor: '0px 12px 24px 0px rgba(5,235,230,0.12)'
                    }

                },
                label: {
                    normal: {
                        formatter: function(params) {
                            return params.value;
                        },
                        color: '#FF6E00',
                        fontSize: 34,
                        fontWeight: "bold",
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
            radius: "25%",
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
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#f5f9ff',
                    },
                    emphasis: {
                        color: '#f5f9ff'
                    }, //鼠标移入颜色
                }
            }],
        }
    ]
};