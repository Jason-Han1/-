option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: [
                {
                    name:'直接访问',
                    value: 120,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#51AEDF'
                        }, {
                            offset: 1,
                            color: '#9DD3F0'
                        }])
                    },
                    labelLine: {
                      show: true,
                      length: 50,
                      length2: 80
                    },
                    label: {
                        color: "rgba(0,0,0,.45)",
                        fontSize: 14,
                        show: true,
                        position: 'outside',
                        formatter: [
                                '{title|{b}}',
                                '{rate|{d}%}'
                            ].join('\n'),
                        rich: {
                            title: {
                                color: "#f00",
                                fontSize: 14,
                                lineHeight: 30
                            },
                            rate: {
                                color: "orange",
                                fontSize: 20,
                            }
                        }
                    }
                },
                {
                    name:'邮件营销',
                    value: 438,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#DE6F6A'
                        }, {
                            offset: 1,
                            color: '#EEB5B2'
                        }])
                    },
                    labelLine: {
                      show: true,
                      // 角度
                      length: 30,
                      // 长度
                      length2: 120
                    },
                    label: {
                        color: "rgba(0,0,0,.45)",
                        fontSize: 14,
                        show: true,
                        position: 'outside',
                        formatter: [
                                '{title|{b}}',
                                '{rate|{d}%}'
                            ].join('\n'),
                        rich: {
                            title: {
                                color: "#f00",
                                fontSize: 14,
                                lineHeight: 30
                            },
                            rate: {
                                color: "orange",
                                fontSize: 20,
                            }
                        }
                    }
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
