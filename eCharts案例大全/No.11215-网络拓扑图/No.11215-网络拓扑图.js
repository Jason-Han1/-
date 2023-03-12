var nodes = [{
        x: '480',
        y: '1000',
        nodeName: '负载均衡1',
        img: 'data-1547633192258-2EYYUDdcd.png',
    }, {
        x: '480',
        y: '890',
        nodeName: 'WEB服务器',
        img: 'data-1547632686885-o5Rfi3tyk.png'
    },
    {
        x: '100',
        y: '750',
        nodeName: '负载均衡2',
        img: 'data-1547633192258-2EYYUDdcd.png',
    },
    {
        x: '350',
        y: '750',
        nodeName: '负载均衡2',
        img: 'data-1547633192258-2EYYUDdcd.png',
        alarm: '发生警告!'
    },
    {
        x: '630',
        y: '750',
        nodeName: '负载均衡2',
        img: 'data-1547633192258-2EYYUDdcd.png',
    },
    {
        x: '850',
        y: '750',
        nodeName: '负载均衡2',
        img: 'data-1547633192258-2EYYUDdcd.png',
    },
    {
        x: '50',
        y: '550',
        nodeName: '查验网站\n微信公众号\n政务网站',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '150',
        y: '550',
        nodeName: '查验网站\n微信公众号\n政务网站',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '300',
        y: '550',
        nodeName: '电子票制作\n及存储中心',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '400',
        y: '550',
        nodeName: '电子票制作\n及存储中心',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '570',
        y: '550',
        nodeName: '票据服务器1\n(在线)',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '670',
        y: '550',
        nodeName: '票据服务器1\n(在线)',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '800',
        y: '550',
        nodeName: '电子制票\n及存储中心',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '900',
        y: '550',
        nodeName: '电子制票\n及存储中心',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '170',
        y: '300',
        nodeName: 'Inceptor1',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '270',
        y: '300',
        nodeName: 'Inceptor2',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '700',
        y: '300',
        nodeName: '票据Oracle\n数据库服务器',
        img: 'data-1547632915872-WZMUphq72.png',
    },
    {
        x: '800',
        y: '300',
        nodeName: '票据Oracle\n数据库服务器',
        img: 'data-1547632915872-WZMUphq72.png',
    }
]
var charts = {
    nodes: [],
    linesData: [{
        remark: 'WEB服务器-->左边数起第1个负载均衡',
        coords: [
            [470, 890],
            [100, 890],
            [100, 780]

        ]
    },{
        remark: 'WEB服务器-->左边数起第3个负载均衡',
        coords: [
            [510, 890],
            [620, 890],
            [620, 780]

        ]
    },{
        remark: 'WEB服务器-->左边数起第4个负载均衡',
        coords: [
            [510, 890],
            [840, 890],
            [840, 780]

        ]
    },{
        remark: '左边数起第1个负载均衡-->查验网站微信公众号政务网站1',
        coords: [
            [100, 723],
            [50, 580]

        ]
    },{
        remark: '左边数起第1个负载均衡-->查验网站微信公众号政务网站2',
        coords: [
            [100, 723],
            [150, 580]

        ]
    },{
        remark: '左边数起第2个负载均衡-->电子票制作及存储中心1',
        coords: [
            [350, 723],
            [300, 580]
        ],
        lineStyle: {
            normal: {
                color: '#DC143C'
            }
        },
        effect: {
            color: '#DC143C'
        }
    },{
        remark: '左边数起第2个负载均衡-->电子票制作及存储中心2',
        coords: [
            [350, 723],
            [400, 580]

        ],
        lineStyle: {
            normal: {
                color: '#DC143C'
            }
        },
        effect: {
            color: '#DC143C'
        }
    },{
        remark: '左边数起第3个负载均衡-->票据服务器1',
        coords: [
            [630, 723],
            [570, 580]

        ]
    },{
        remark: '左边数起第3个负载均衡-->票据服务器2',
        coords: [
            [630, 723],
            [670, 580]

        ]
    },{
        remark: '左边数起第4个负载均衡-->电子制票及存储中心1',
        coords: [
            [850, 723],
            [800, 580]

        ]
    },{
        remark: '左边数起第4个负载均衡-->电子制票及存储中心2',
        coords: [
            [850, 723],
            [900, 580]

        ]
    },{
        remark: '查验网站-->Inceptor1',
        coords: [
            [100, 450],
            [100, 300],
            [160, 300]

        ]
    },{
        remark: '电子票制作及存储中心-->Inceptor2',
        coords: [
            [350, 450],
            [350, 300],
            [280, 300]

        ]
    },{
        remark: '票据服务器-->票据Oracle数据库服务器',
        coords: [
            [620, 450],
            [620, 300],
            [690, 300]

        ]
    },{
        remark: '电子制票及储存中心-->票据Oracle数据库服务器',
        coords: [
            [850, 450],
            [850, 300],
            [810, 300]

        ]
    }]
}
for (var j = 0; j < nodes.length; j++) {
    var x = parseInt(nodes[j].x)
    var y = parseInt(nodes[j].y)
    var node = {
        nodeName: nodes[j].nodeName,
        value: [x, y],
        symbolSize: 50,
        alarm: nodes[j].alarm,
        symbol: 'image:///asset/get/s/' + nodes[j].img,
        itemStyle: {
            normal: {
                color: '#12b5d0',
            }
        }
    }
    charts.nodes.push(node)
}

option = {
    backgroundColor: "#0B1321",
    xAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value'
    },
    yAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value'
    },
    series: [{
        type: 'graph',
        coordinateSystem: 'cartesian2d',
        label: {
            normal: {
                show: true,
                position: 'bottom',
                color: '#00FFFF'
            }
        },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    formatter: function(item) {
                        return item.data.nodeName
                    }
                }
            }
        },
        data: charts.nodes,
    }, {
        type: 'lines',
        polyline: true,
        coordinateSystem: 'cartesian2d',
        lineStyle: {
            normal: {
                width: 2,
                color: '#175064',
                curveness: 0.3
            }
        },
        effect: {
            show: true,
            trailLength: 0.1,
            symbol: 'arrow',
            color: '#00FFFF',
            symbolSize: 8
        },
        data: charts.linesData
    }]
};
//用于告警的动态效果
setInterval(() => {
    var dataI = []
    for (var n = 0; n < nodes.length; n++) {
        var alarm = nodes[n].alarm
        if (alarm) {
            option.series[0].data[n].symbolSize = 60
            option.series[0].data[n].label = {
                normal: {
                    color: '#DC143C'
                }
            }
            option.series[0].itemStyle.normal.label.formatter = function(item) {
                if (item.data.alarm) {
                    return item.data.nodeName + '\n[ ' + item.data.alarm + ' ]'
                } else {
                    return item.data.nodeName
                }
            }
            dataI.push(n)
        }
    }
    myChart.setOption(option)
    setTimeout(() => {
        for (var m = 0; m < dataI.length; m++) {
            option.series[0].data[dataI[m]].symbolSize = 50
            option.series[0].data[dataI[m]].label = {
                normal: {
                    color: '#00FFFF'
                }
            }
            option.series[0].itemStyle.normal.label.formatter = function(item) {
                return item.data.nodeName
            }
        }
        myChart.setOption(option)
    }, 500)
}, 1000)