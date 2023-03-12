var data = [{
        value: 10,
        name: 'IDS',
        label: {
            color: '#fff'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    },
    {
        value: 5,
        name: 'VPN',
        label: {
            color: '#fff'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    },
    {
        value: 15,
        name: '交换机',
        label: {
            color: '#fff'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    },
    {
        value: 25,
        name: '防火墙',
        label: {
            color: '#fff'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    },
    {
        value: 20,
        name: 'WAF',
        label: {
            color: '#fff'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    },
    {
        value: 35,
        name: '堡垒机',
        label: {
            color: '#fff'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    }
]

function angleText(i, num) {
    //每个元素的角度
    var everyAngle = 360 / num;
    //文字现在所在的角度
    var currentAngle = i * everyAngle + everyAngle / 2
    //文字所在模块的所占角度
    var currentArea = (i + 1) * everyAngle
    console.log(currentAngle)
    if (currentAngle <= 90) {
        //console.log('here'+currentAngle)
        return -currentAngle
    } else if (currentAngle <= 180 && currentAngle > 90) {
        //console.log('here'+currentAngle)
        return 180 - currentAngle
    } else if (currentAngle < 270 && currentAngle > 180) {
        // console.log('here'+currentAngle)
        return 180 - currentAngle
    } else if (currentAngle < 360 && currentAngle >= 270) {
        //console.log('here'+currentAngle)
        return 360 - currentAngle
    }
}

//有值的色图的正切处理
var data3 = []
data3 = JSON.parse(JSON.stringify(data))
for (var i = 0; i < data3.length; i++) {
    if (i === 0) {
        data3[i]['label']['color'] = '#333'
        data3[i]['itemStyle']['color'] = 'rgba(25, 255, 224)'
        data3[i]['emphasis']['itemStyle']['color'] = 'rgba(25, 255, 224)'
        data3[i]['label']['rotate'] = angleText(i, data3.length)
    } else {
        data3[i]['label']['color'] = '#fff'
        data3[i]['itemStyle']['color'] = '#4169E1'
        data3[i]['emphasis']['itemStyle']['color'] = '#6A5ACD'
        data3[i]['label']['rotate'] = angleText(i, data3.length)
    }
}


//最外层大圈的数据
var data1 = []

data1 = JSON.parse(JSON.stringify(data))
for (var i = 0; i < data1.length; i++) {
    data1[i].value = 1
    data1[i]['label']['rotate'] = angleText(i, data1.length)
    if (i === 0) {
        data1[i]['label']['color'] = 'rgba(25, 255, 224)'
    }
}

//透明饼图的数据
var data2 = []

for (var i = 0; i < data.length; i++) {
    if (i === 0) {
        data2.push({
            value: 1,
            itemStyle: {
                color: 'rgba(25, 255, 224,0.05)',
            }
        })
    } else {
        data2.push({
            value: 1,
            itemStyle: {
                color: 'transparent',
            }
        })
    }
}
var option = {
    backgroundColor: "#0B1837",
    grid: {
        // left: -100,
        // top: 50,
        // bottom: 10,
        // right: 10,
        // containLabel: true
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],

    },
    //中间画圈圈的坐标轴
    radiusAxis: {
        show: false
    },
    series: [{
        type: 'pie',
        radius: ["80%", "90%"],
        hoverAnimation: false,
        itemStyle: {
            color: 'transparent'
        },
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
        },
        label: {
            normal: {
                position: 'inside',
                align: 'right'
            }
        },
        name: "",
        data: data1
    }, {
        stack: 'a',
        type: 'pie',
        radius: ['80%', '60%'],
        roseType: 'area',
        zlevel: 10,
        itemStyle: {
            color: '#4169E1',
        },
        emphasis: {
            itemStyle: {
                color: '#6A5ACD'
            }
        },
        label: {
            normal: {
                show: true,
                formatter: "{c}",
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                },
                position: 'inside',
                rotate: 30,
                align: 'right'

            },
            emphasis: {
                show: true
            }
        },
        animation: false,
        data: data3
    }, {
        type: 'pie',
        zlevel: 99,
        radius: ["20%", "90%"],
        selectedOffset: 0,
        animation: false,
        hoverAnimation: false,
        label: {
            normal: {
                show: false,
            }
        },
        data: data2
    }]
}

myChart.on('click', function(a) {
    //最外层的字体颜色重置变色
    for (var da1 = 0; da1 < option.series[0].data.length; da1++) {
        option.series[0].data[da1].label.color = '#fff'
    }

    //色圈的字体颜色和选中颜色重置
    for (var da2 = 0; da2 < option.series[1].data.length; da2++) {
        option.series[1].data[da2].itemStyle.color = '#4169E1'
        option.series[1].data[da2].label.color = '#fff'
        //hover颜色重置
        option.series[1].data[da2].emphasis.itemStyle.color = '#6A5ACD'

    }

    //背景的透明饼图的重置
    for (var da3 = 0; da3 < option.series[2].data.length; da3++) {
        option.series[2].data[da3].itemStyle.color = 'transparent'
    }

    option.series[1].data[a.dataIndex].itemStyle.color = 'rgba(25, 255, 224)'
    option.series[1].data[a.dataIndex].label.color = '#333'
    //hover 颜色改变
    option.series[1].data[a.dataIndex].emphasis.itemStyle.color = 'rgba(25, 255, 224)'
    option.series[0].data[a.dataIndex].label.color = 'rgba(25, 255, 224)'
    option.series[2].data[a.dataIndex].itemStyle.color = 'rgba(25, 255, 224,0.05)'
    //console.log(option)
    myChart.setOption(option);
})

myChart.on('mouseover', function(a) {
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: a.dataIndex
    })
})

myChart.on('mouseout', function(a) {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1,
        dataIndex: a.dataIndex
    })
})