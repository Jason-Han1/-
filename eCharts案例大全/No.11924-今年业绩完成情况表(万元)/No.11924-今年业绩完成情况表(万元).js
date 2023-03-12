option = null;
app.title = '环形图';
option = {
    backgroundColor: '#000',
    grid: {
        y: '1',
        x: '1',
        x2: '1',
        y2: '-1',
        containLabel: true
    },
    title: {
        text: '今年业绩完成情况表(万元)',
        x: 'center',
        y: 'top',
        itemGap: 20,
        textStyle: {
            color: '#d9efff',
            fontFamily: '微软雅黑',
            fontSize: 18,
            fontWeight: 'bolder'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}: ({d}%)<br/> {c}万元"
    },
    series: [
        //认购完成01
        {
            name: '认购完成率',
            center: ['30%', 'center'],
            type: 'pie',
            radius: ['40%', '60%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        distance: 0.7,
                        textStyle: {
                            color: '#d9efff',
                            fontSize: "10"
                        },
                        formatter: '{b}:({d}%)\n {a|{c}万元}',
                        rich: {
                            a: {
                                color: "#fed900",
                            },
                        }
                    },
                },
            },

            data: [{
                    value: 6000,
                    name: '已完成',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#fff600" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#fed000" // 100% 处的颜色
                            }
                        ], false),
                    },
                },
                {
                    value: 2000,
                    name: '未完成',
                    itemStyle: {
                        color: '#888f9b',
                    }
                },
            ]
        },
        //认购完成02
        {
            name: '认购完成率',
            center: ['30%', 'center'],
            type: 'pie',
            radius: ['60%', '40%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: function(argument) {
                        var html;
                        html = '认购\r\n\r\n' + '完成率';
                        return html;
                    },
                    textStyle: {
                        fontSize: 14,
                        color: '#e8ecf0'
                    },

                }
            },
            data: [{
                    value: 6000,
                    name: '已完成',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#fff600" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#fed000" // 100% 处的颜色
                            }
                        ], false),
                    },
                },
                {
                    value: 2000,
                    name: '未完成',
                    itemStyle: {
                        color: '#888f9b',
                    }
                },
            ]
        },
        //签约完成01
        {
            name: '签约完成率',
            center: ['70%', 'center'],
            type: 'pie',
            radius: ['40%', '60%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        distance: 0.7,
                        textStyle: {
                            color: '#d9efff',
                            fontSize: "10"
                        },
                        formatter: '{b}:({d}%)\n {a|{c}万元}',
                        rich: {
                            a: {
                                color: "#00deff",
                            },
                        }
                    },
                },
            },

            data: [{
                    value: 9000,
                    name: '已完成',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#00f5ff" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#00e0ff" // 100% 处的颜色
                            }
                        ], false),
                    },
                },
                {
                    value: 3000,
                    name: '未完成',
                    itemStyle: {
                        color: '#888f9b',
                    }
                },
            ]
        },
        //签约完成02
        {
            name: '签约完成率',
            center: ['70%', 'center'],
            type: 'pie',
            radius: ['60%', '40%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: function(argument) {
                        var html;
                        html = '签约\r\n\r\n' + '完成率';
                        return html;
                    },
                    textStyle: {
                        fontSize: 14,
                        color: '#e8ecf0'
                    },

                }
            },
            data: [{
                    value: 9000,
                    name: '已完成',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#00f5ff" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#00e0ff" // 100% 处的颜色
                            }
                        ], false),
                    },
                },
                {
                    value: 3000,
                    name: '未完成',
                    itemStyle: {
                        color: '#888f9b',
                    }
                },
            ]
        },
    ]
};;