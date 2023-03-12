/**
 * 图标所需数据
 */
var data = {
    value: 24.2,
    text: '-',
    color: '#FFD700', //绿圈的颜色
    color1: '#edf1f4', //灰圈的颜色
    color2: '#FF0000', //数字的颜色
    //xAxis:['活跃用户量','活跃用户占比','用户总量'],
    //values:['0','78','0'],
}

var seriesData = []
var titleData = []

titleData.push({

    text: '活跃用户量',
    left: '25%',
    top: '45%',

    textAlign: 'center',
    textStyle: {
        fontSize: '12',
        color: '#687284',
        fontWeight: '400',
    },
}, {


    text: '活跃用户占比',
    left: '50%',
    top: '45%',

    textAlign: 'center',
    textStyle: {
        fontSize: '12',
        color: '#687284',
        fontWeight: '400',
    },
}, {


    text: '用户总量',
    left: '75%',
    top: '45%',

    textAlign: 'center',
    textStyle: {
        fontSize: '12',
        color: '#687284',
        fontWeight: '400',
    },
})
seriesData.push({
    type: 'pie',
    radius: ['75', '85'],
    center: ['25%', '52%'],
    hoverAnimation: false,
    label: {
        normal: {
            position: 'center'
        },
    },
    data: [{
            value: 0,
            name: data.text,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: data.color,
                }
            },
            label: {
                normal: {
                    show: false,
                }
            }
        },
        {
            value: 78,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: data.color1, //灰圈的颜色
                }
            },
            label: {
                normal: {
                    formatter: 78 + '', //圆中心显示数据样式
                    textStyle: {
                        fontSize: 36,
                        color: data.color2 //圆圈中心数据的颜色
                    }
                },

            }

        }
    ]
}, {
    type: 'pie',
    radius: ['75', '85'],
    center: ['50%', '52%'],
    hoverAnimation: false,
    label: {
        normal: {
            position: 'center'
        },
    },
    data: [{
            value: 78,
            name: data.text,
            itemStyle: {
                normal: {
                    color: data.color,
                }
            },
            label: {
                normal: {
                    show: false,
                }
            }
        },
        {
            value: 100 - 78,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: data.color1, //灰圈的颜色
                }
            },
            label: {
                normal: {
                    formatter: 78 + '%',
                    textStyle: {
                        fontSize: 36,
                        color: data.color2
                    }
                },

            }

        }
    ]
}, {
    type: 'pie',
    radius: ['75', '85'],
    center: ['75%', '52%'],
    hoverAnimation: false,
    label: {
        normal: {
            position: 'center'
        },
    },
    data: [{
            value: 0,
            name: data.text,
            itemStyle: {
                normal: {
                    color: data.color,
                }
            },
            label: {
                normal: {
                    show: false,
                }
            }
        },
        {
            value: 100,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: data.color1,
                }
            },
            label: {
                normal: {
                    formatter: 100 + '',
                    textStyle: {
                        fontSize: 36,
                        color: data.color2
                    }
                },

            }

        }
    ]
})


////////////////////////////////////////

let value = data.value || 0
option = {
    backgroundColor: '#fff',
    title: titleData,
    series: seriesData
}