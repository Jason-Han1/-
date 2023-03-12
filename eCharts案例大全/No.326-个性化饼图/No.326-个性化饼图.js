//职称结构取数
var getsjjg = ['小说', '辅助教材', '期刊', '其他'];
var getsjjgrs = [300, 200, 100, 50];
var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}
var rich = {
    name: {
        color: "#666666",
        fontSize: 14,
        padding: [8, 30, 0, 30],
        fontWeight: '400',
        align: 'left'
    },
    value: {
        color: "#333",
        fontSize: 15,
        padding: [0, 30, 8, 30],
        fontWeight: '500',
        align: 'left'
    },
    percent: {
        color: "#FFF",
        align: 'right',
        fontSize: 15,
        fontWeight: '500',
        //padding: [0, 5]
    },
    hr: {
        borderColor: '#DFDFDF',
        width: '100%',
        borderWidth: 1,
        height: 0,
    },
    cir: {
        fontSize: 26,
    }
}
//职称结构图表
var colorList = ['#507AFF', '#51D9A2', '#FFC371', '#797AFF'];
option = {
    series: [{
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        radius: ['0%', '50%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                position: 'inner',
                formatter: params => {
                    return (
                        '{percent|' + params.percent.toFixed(0) + '%}'
                    );
                },
                rich: rich,
            }
        },
        data: syjgdata
    }, {
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['0%', '50%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                length: 30,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },
        label: {
            normal: {

                formatter: params => {
                    return '{name|' + params.name + '}\n{hr|}\n{value|' + params.value + '本}';
                },
                rich: rich,
                padding: [2, 25, 0, 25]
            }
        },
        data: syjgdata,
        z: -1
    }, {
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['0%', '50%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                length: 30,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return '\n{cir|●}\n';
                },
                rich: rich,
            }
        },
        data: syjgdata,
        z: -1
    }, {
        itemStyle: {
            normal: {
                color: '#F2F9F7'
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['0%', '57%'],
        center: ["50%", "50%"],
        hoverAnimation: false, //取消动画效果
        data: syjgdata,
        label: {
            normal: {
                show: false,
                position: 'inner',
                formatter: params => {
                    return (
                        '{percent|' + params.percent.toFixed(0) + '%}'
                    );
                },
                rich: rich,
            }
        },
        z: -1
    }]
};