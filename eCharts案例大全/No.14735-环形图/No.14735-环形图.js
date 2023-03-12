option = {
    backgroundColor: "#fff",
    title: {
        text: ['{title1|30道}', '{title2|风控流程}'].join('\n'),
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#d2a36b',
            fontSize: 26,
            rich: {
                title1: {
                    fontSize: 28,
                    color: '#d2a36b',
                    lineHeight: 40

                },
                title2: {
                    fontSize: 20,
                    color: '#d2a36b',

                }
            }
        }
    },
    series: [{
        type: 'pie',
        radius: ['0%', '55%'],
        z: 1,
        itemStyle: {
            normal: {
                borderColor: "#fff",
                borderWidth: "10",
                color: '#dbb589',
            },
            emphasis: {
                borderColor: "#fff",
                borderWidth: "10",
                color: '#cfa36f',
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 5,
            name: '合作机构准入'
        }, {
            value: 5,
            name: '业务政策培训'
        }, {
            value: 5,
            name: '审核风控流程'
        }, {
            value: 5,
            name: '发布项目筹集资金'
        }, {
            value: 5,
            name: '贷后管理'
        }]
    }, {
        type: 'pie',
        radius: ['20%', '28%'],
        hoverAnimation: false,
        z: 2,
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            value: 100,
            itemStyle: {
                normal: {
                    color: '#d2a36b',
                },
                emphasis: {
                    color: '#d2a36b',
                }
            }
        }, {
            value: 0
        }]
    }, {
        type: 'pie',
        radius: ['0%', '20%'],
        hoverAnimation: false,
        z: 3,
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            value: 100,
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            }
        }, {
            value: 0
        }]
    }, ]
};