var list = [{
    axlesTypeRate: 10,
    axlesType: 2
}, {
    axlesTypeRate: 20,
    axlesType: 3
}, {
    axlesTypeRate: 30,
    axlesType: 4
}, {
    axlesTypeRate: 30,
    axlesType: 5
}, {
    axlesTypeRate: 10,
    axlesType: 6
}]
var colors = ['#4EDAAE', '#D84646', '#FDC444', '#188AE0', '#FB8A64']
var index = 0,
    timer = null
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [6, 0]
    }
}
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
}
var data = []
for (var i = 0; i < list.length; i++) {
    data.push({
        value: list[i].axlesTypeRate,
        name: list[i].axlesType + '轴车型',
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 10,
                color: colors[+list[i].axlesType - 2],
                borderColor: colors[+list[i].axlesType - 2],
                shadowColor: 'rgba(255, 255, 255, 0.1)'
            }
        }
    }, {
        value: 3,
        name: '',
        itemStyle: placeHolderStyle
    })
}
var series = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [180, 176],
    hoverAnimation: true,
    avoidLabelOverlap: true,
    hoverOffset: 10,
    itemStyle: {
        normal: {
            label: {
                show: false,
                position: 'outside',
                color: '#ddd',
                rich: rich
            },
            labelLine: {
                show: false
            }
        }
    },
    data: data
}]
var option = {
    backgroundColor: 'transparent',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: series
}
myChart.setOption(option)
circulation()
function circulation() {
    timer && window.clearTimeout(timer)
    if (list.length === 0) return
    const len = (list.length - 1) * 2
    // 取消高亮指定的数据图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index === 0 ? len : index - 2
    })
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index
    })
    if (index >= len) {
        index = 0
    } else {
        index = index + 2
    }
    timer = window.setTimeout(function() {
        circulation()
    }, 3000)
}
myChart.on('mouseover', function(params) {
    if (params.dataIndex % 2 !== 0) return
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index - 2
    })
    if (params.dataIndex !== index) {
        index = params.dataIndex + 2
    }
    timer && clearTimeout(timer)
})
myChart.on('mouseout', function() { // 点击事件
    circulation()
})