var nodes = [{
        x: '0',
        y: '850',
        nodeName: '特殊成分管理',
        img: 'data-1547633192258-2EYYUDdcd.png',
    }, {
        x: '150',
        y: '850',
        nodeName: '成分确认总\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
    }, {
        x: '300',
        y: '850',
        nodeName: '外送电量调整\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
    }, 
    {
        x: '150',
        y: '450',
        nodeName: '横向数据抽取\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
    },
    {
        x: '150',
        y: '250',
        nodeName: '上报数据总\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
        //alarm: '发生警告!'
    },{
        x: '300',
        y: '450',
        nodeName: '电厂上网电量计算\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
    },
    {
        x: '300',
        y: '250',
        nodeName: '电厂上网电量校验\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
        //alarm: '发生警告!'
    },
    {
        x: '400',
        y: '650',
        nodeName: '数据准备\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
        //alarm: '发生警告!'
    },
    {
        x: '500',
        y: '650',
        nodeName: '电厂成分清分总\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
        //alarm: '发生警告!'
    },
    {
        x: '600',
        y: '650',
        nodeName: '超发电量确认\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
        //alarm: '发生警告!'
    },
    {
        x: '700',
        y: '650',
        nodeName: '日前实时共享备用\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
        //alarm: '发生警告!'
    },
    {
        x: '800',
        y: '650',
        nodeName: '电厂结算\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
        //alarm: '发生警告!'
    },
    {
        x: '900',
        y: '650',
        nodeName: '电厂结算结果校核\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
        //alarm: '发生警告!'
    },
    {
        x: '1000',
        y: '850',
        nodeName: '电厂报表发布\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
        //alarm: '发生警告!'
    },
    {
        x: '1000',
        y: '450',
        nodeName: '电厂报表确认\n完成率',
        img: 'data-1547633192258-2EYYUDdcd.png',
        //alarm: '发生警告!'
    },
    
]
var charts = {
    nodes: [],
    linesData: [{
        remark: '特殊成分管理-->成分确认',
        coords: [
            [0, 850],
            [150, 850]

        ]
    },{
        remark: '成分确认-->外送电量调整',
        coords: [
            [150, 850],
            [300, 850]

        ]
    },{
        remark: '外送电量调整-->数据准备完成率',
        coords: [
            [300, 850],
            [350, 850],
            [350, 650],
            [400, 650]

        ]
    },{
        remark: '横向数据抽取完成率-->-->上网电量',
        coords: [
            [150, 450],
            [150, 350],
            [300, 350]

        ]
    },{
        remark: '上报数据完成率-->-->上网电量',
        coords: [
            [150, 250],
            [150, 350],
            [300, 350]

        ]
    },{
        remark: '上网电量-->数据准备完成率',
        coords: [
            [300, 450],
            [300, 350]

        ]
    },{
        remark: '上网电量-->数据准备完成率',
        coords: [
            [300, 250],
            [300, 350],
            [350, 350],
            [350, 650],
            [400, 650]

        ]
    },{
        remark: '数据准备-->成分清分',
        coords: [
            [400, 650],
            [500, 650]

        ]
    },{
        remark: '成分清分-->超发电量',
        coords: [
            [500, 650],
            [600, 650]

        ]
    },{
        remark: '超发电量-->实时共享',
        coords: [
            [600, 650],
            [700, 650]
        ]
    },{
        remark: '实时共享-->电厂结算',
        coords: [
            [700, 650],
            [800, 650]

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
        remark: '电厂结算-->结果校核',
        coords: [
            [800, 650],
            [900, 650]

        ]
    },{
        remark: '结果校核-->报表发布',
        coords: [
            [900, 650],
            [1000, 650],
            [1000, 850]

        ]
    },{
        remark: '报表发布-->报表确认',
        coords: [
            [1000, 850],
            [1000, 450]

        ]
    },/*{
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
    }*/]
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
    backgroundColor: "#fff",
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
                color: '#0ca361'
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
                color: '#0ca361',
                curveness: 0.3
            }
        },
        effect: {
            show: true,
            trailLength: 0.1,
            symbol: 'arrow',
            color: '#0ca361',
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
                    color: '#0ca361'
                }
            }
            option.series[0].itemStyle.normal.label.formatter = function(item) {
                return item.data.nodeName
            }
        }
        myChart.setOption(option)
    }, 500)
}, 1000)