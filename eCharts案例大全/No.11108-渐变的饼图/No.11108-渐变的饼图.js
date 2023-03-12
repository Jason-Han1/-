app.title = '环形图'

option = {
    title: {
        text: '112344',
        subtext: '测试',
        x: 'center',
        y: '55%'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right: '5%',
        bottom: '5%',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        center: [ '50%', '60%'],
        radius: ['45%', '55%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 335,
                name: '直接访问',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#E73181'
                        }, {
                            offset: 1,
                            color: '#E71956'
                        }]),
                        label: {
                            show: false
                        }
                    }
                }
            },
            {
                value: 310,
                name: '邮件营销',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#EB5323'
                        }, {
                            offset: 1,
                            color: '#E64550'
                        }]),
                        label: {
                            show: false
                        }
                    }
                }
            },
            {
                value: 234,
                name: '联盟广告',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#EA6539'
                        }, {
                            offset: 1,
                            color: '#FEA320'
                        }]),
                        label: {
                            show: false
                        }
                    }
                }
            },
            {
                value: 135,
                name: '视频广告',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#F7BE6E'
                        }, {
                            offset: 1,
                            color: '#F1A73F'
                        }]),
                        label: {
                            show: false,
                            color: '#9f3edd'
                        }
                    }
                }
            }
        ]
    }]
};