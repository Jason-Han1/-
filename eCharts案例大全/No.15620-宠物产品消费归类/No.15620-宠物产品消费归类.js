//颜色:坐标柚，柱1，线1,柱/轴标文字
var colors = ['#6c6c6c', '#44b7d3', '#e42b6d', '#393939'];
var fontFamilys = ['微软雅黑'];
options = [{
    backgroundColor: '#fff',
    title: {
        text: '宠物产品消费归类',
        x: 'center',
        textStyle: {
            fontSize: 14
        }
    },
    series: [{
        type: 'pie',
        radius: [10, 80],
        label: {
            normal: {
                textStyle: {
                    color: '#484848',
                    fontSize: 12
                },
                formatter: function(param) {
                    return param.name + ': \n' + param.value + '%';
                }
            }
        },
        color: ['#44b7d3', '#69b4c6', '#45fb9f', '#7cdcac', '#999795', '#e2503d', '#e06656'],
        data: [{
            value: 22.02,
            name: '医疗'
        }, {
            value: 12.08,
            name: '保健品'

        }, {
            value: 10.04,
            name: '零食'
        }, {
            value: 7.57,
            name: '智能设备'
        }, {
            value: 5.8,
            name: '日用品'
        }, {
            value: 7.33,
            name: '其它服务'
        }, {
            value: 35.16,
            name: '主粮'
        }]

    }]
}, {
    title: {
        text: '用户对智能用户的消费态度',
        x: 'center',
        textStyle: {
            fontSize: 14
        }
    },
    backgroundColor: '#fff',
    xAxis: [{
        type: "category",
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            show: true,
            textStyle: {
                fontFamily: fontFamilys[0],
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        },
        data: ['定位器', '玩具', '项圈', '监测器', '碗', '喂食器', '电子围栏']
    }],
    yAxis: [{
        type: 'category',
        data: ['没买过/\n不感兴趣', '已买过', '没买过/\n但感兴趣'],
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        },
    }, {
        type: "value",
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    }],
    series: [{
        name: "Y2",
        type: "bar",
        stack: "占比",
        barMaxWidth: 50,
        barGap: "10%",
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#e06656',
                label: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    },
                    position: "insideTop",
                    formatter: function(p) {
                        return p.value + '%';
                    }
                }
            }
        },
        data: [
            15.5,
            17.4,
            30.9,
            21.4,
            29.3,
            27.6,
            39.8
        ],
    }, {
        name: "Y1",
        type: "bar",
        stack: "占比",
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#44b7d3',
                label: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    },
                    position: "insideTop",
                    formatter: function(p) {
                        return p.value + '%';
                    }
                }
            }
        },
        data: [
            14.8,
            27.8,
            15.2,
            11.5,
            17.5,
            19.6,
            10.5
        ]
    }, {
        name: "Y0",
        type: "bar",
        stack: "占比",
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#45fb9f',
                label: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    },
                    position: "insideTop",
                    formatter: function(p) {
                        return p.value + '%';
                    }
                }
            }
        },
        data: [
            69.7,
            54.8,
            53.9,
            67.1,
            53.2,
            52.8,
            49.7
        ]
    }]
}];