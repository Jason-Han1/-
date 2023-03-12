var fx = ['01、03',
    '02',
    '04',
    '05',
    '06',
    '07',
    '08'
]
var fxdata = []
for (var i = 0; i < fx.length; i++) {
    fxdata.push({
        name: fx[i],
        max: 20
    })
}

var data = {
    '东南大学': [
        [0, 1, 0, 0, 1, 1, 0],
        [2, 0, 1, 0, 3, 1, 0], 10
    ],
    '中南大学': [
        [2, 2, 5, 3, 21, 4, 2],
        [1, 1, 3, 1, 1, 0, 1], 47
    ],
    '中国地质大学（武汉）': [
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0], 1
    ],
    '中国矿业大学': [
        [2, 4, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0], 8
    ],
    '中国矿业大学（北京）': [
        [0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0], 3
    ],
    '中山大学': [
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0], 1
    ],
    '兰州交通大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0], 1
    ],
    '北京交通大学': [
        [0, 4, 1, 0, 0, 0, 0],
        [0, 0, 2, 1, 4, 0, 0], 12
    ],
    '北京科技大学': [
        [1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0], 1
    ],
    '华中科技大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0], 1
    ],
    '华南师范大学': [
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0], 1
    ],
    '华南理工大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0], 1
    ],
    '南京农业大学': [
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0], 1
    ],
    '南京理工大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0], 1
    ],
    '吉林大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [3, 0, 1, 0, 1, 0, 0], 5
    ],
    '同济大学': [
        [7, 9, 3, 2, 4, 4, 0],
        [22, 16, 5, 5, 21, 9, 2], 109
    ],
    '哈尔滨工业大学': [
        [1, 0, 0, 0, 2, 0, 0],
        [1, 0, 1, 0, 1, 0, 0], 6
    ],
    '哈尔滨工业大学（威海）': [
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0], 2
    ],
    '四川大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0], 2
    ],
    '大连海事大学': [
        [0, 0, 0, 0, 4, 0, 1],
        [0, 0, 0, 0, 2, 0, 0], 7
    ],
    '大连理工大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [3, 0, 0, 0, 0, 0, 0], 3
    ],
    '天津大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 0], 2
    ],
    '山东大学': [
        [1, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 1, 0, 0], 4
    ],
    '武汉理工大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0], 2
    ],
    '清华大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0], 1
    ],
    '湖南大学': [
        [2, 2, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0], 6
    ],
    '苏州大学': [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0], 1
    ],
    '西北工业大学': [
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0], 1
    ],
    '西南交通大学': [
        [0, 2, 1, 0, 5, 8, 0],
        [0, 2, 1, 1, 1, 2, 0], 23
    ],
    '郑州大学': [
        [1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0], 3
    ],
    '重庆大学': [
        [0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 1, 0, 0], 4
    ],
    '长安大学': [
        [5, 2, 2, 0, 6, 1, 0],
        [10, 0, 3, 0, 4, 0, 0], 33
    ]
}
var nodedata = []
var university = '同济大学'

for (var key in data) {
    if (key == university) {
        nodedata.push({
                name: key,
                symbolSize: Math.max(data[key][2], 5),
                value: data[key][2],
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }

            }

        )
    } else {
        nodedata.push({
                name: key,
                symbolSize: Math.max(data[key][2], 5),
                value: data[key][2],
                itemStyle: {
                    normal: {
                        color: 'rgba(18,89,147,1)'
                    }
                }

            }

        )
    }
}


option = {
    title: {
        text: '17同济交通夏令营录取情况',
        subtext: university,
        x: 'center'
    },
    backgroundColor: '#eee',
    legend: {
        data: ['没通过', '通过'],
        align: 'left',
        left: 10
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {}
        }
    },
    tooltip: {},
    yAxis: {
        data: fx,
        name: '方向',
        silent: false,
        axisLine: {
            onZero: true
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    xAxis: {
        max: 25,
        inverse: false,
        splitArea: {
            show: false
        }
    },
    grid: [{
        left: 50,
        name: '人数',
        height: '80%',
        width: '20%',

    }],
    series: [{
            name: '没通过',
            type: 'bar',
            stack: 'one',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: data[university][0],            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
        }, {
            name: '通过',
            type: 'bar',
            stack: 'one',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: data[university][1],            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
        }, {

            type: 'graph',
            layout: 'force',

            focusNodeAdjacency: true,
            roam: true,
            data: nodedata,
            label: {
                normal: {
                    position: 'top',
                    show: true,
                    textStyle: {
                        color: 'rgba(18,89,147,1)',
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 100
            },
            links: [],
            tooltip: {
                formatter: function(d) {
                    return d.name + '参加人数:' + d.data.value
                }
            }
                       
        }


    ]
};
myChart.on('click', function(p) {
    console.log(p)
    if (p.seriesType == 'graph') {
        var university = p.name
        var nodedata = []
        for (var key in data) {
            if (key == university) {
                nodedata.push({
                        name: key,
                        symbolSize: Math.max(data[key][2], 5),
                        value: data[key][2],
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        }

                    }

                )
            } else {
                nodedata.push({
                        name: key,
                        symbolSize: Math.max(data[key][2], 5),
                        value: data[key][2],
                        itemStyle: {
                            normal: {
                                color: 'rgba(18,89,147,1)'
                            }
                        }

                    }

                )
            }
        }
        myChart.setOption({
            title: {
                subtext: university
            },
            series: [{
                data: data[university][0]
            }, {
                data: data[university][1]
            }, {
                data: nodedata
            }]
        })
    }
})