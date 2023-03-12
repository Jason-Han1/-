dataList = [{
        name: "南海诸岛",
        value: 0
    },
    {
        name: '北京',
        value: 54
    },
    {
        name: '天津',
        value: 13
    },
    {
        name: '上海',
        value: 40
    },
    {
        name: '重庆',
        value: 75
    },
    {
        name: '河北',
        value: 13
    },
    {
        name: '河南',
        value: 83
    },
    {
        name: '云南',
        value: 11
    },
    {
        name: '辽宁',
        value: 19
    },
    {
        name: '黑龙江',
        value: 15
    },
    {
        name: '湖南',
        value: 69
    },
    {
        name: '安徽',
        value: 60
    },
    {
        name: '山东',
        value: 39
    },
    {
        name: '新疆',
        value: 4
    },
    {
        name: '江苏',
        value: 31
    },
    {
        name: '浙江',
        value: 104
    },
    {
        name: '江西',
        value: 36
    },
    {
        name: '湖北',
        value: 1052
    },
    {
        name: '广西',
        value: 33
    },
    {
        name: '甘肃',
        value: 7
    },
    {
        name: '山西',
        value: 9
    },
    {
        name: '内蒙古',
        value: 7
    },
    {
        name: '陕西',
        value: 22
    },
    {
        name: '吉林',
        value: 4
    },
    {
        name: '福建',
        value: 18
    },
    {
        name: '贵州',
        value: 5
    },
    {
        name: '广东',
        value: 98
    },
    {
        name: '青海',
        value: 1
    },
    {
        name: '西藏',
        value: 0
    },
    {
        name: '四川',
        value: 44
    },
    {
        name: '宁夏',
        value: 4
    },
    {
        name: '海南',
        value: 22
    },
    {
        name: '台湾',
        value: 3
    },
    {
        name: '香港',
        value: 5
    },
    {
        name: '澳门',
        value: 5
    }
];

option = {
    geo: [
        {
            map: 'china',
            selectedMode: 'single',
            zoom: 1.2,
            label: {
                show: true,
            }
        }
    ],
    visualMap: {
        show: false,
        left: 'left',
        top: 'bottom',
        min: 0,
        max: 50,
        inRange: {
            color: ['#74add1', '#ffd768', '#ff8c71']
        }
    },
    tooltip: {
        padding: 0,
        formatter: function(param) {
            var content = "<div style='text-align:left;width:75px;height:53px;background-color: black ;border:2px solid rgba(0, 0, 0, 1);border-radius:6px;'>"
            content +=param.seriesName + '<br/>' + param.name + ": " + param.value
            content += "</div>"
            return content
        }
    },
    series: [
        {
            name: '系列1',
            type: 'map',
            geoIndex: 0,
            data: dataList
        }
    ]
}
// 轮播函数
function tooltipLoop() {
    var dataIndex = 0
    return setInterval(function() {
        if (dataIndex >= dataList.length) {
            dataIndex = 0
        }
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
        })
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: dataIndex
        })
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: dataIndex
        })
        dataIndex += 1
    }, 1000)
}

// 首次开启轮播
var loopTaskId = tooltipLoop()
// 鼠标进入停止轮播
myChart.on('mouseover', function(param) {
    if (loopTaskId) {
        clearInterval(loopTaskId)
        loopTaskId = null
    }
    myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
    })
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: param.dataIndex
    })
})
// 鼠标离开重新开启轮播
myChart.on('mouseout', function(param) {
    if (loopTaskId) {
        clearInterval(loopTaskId)
        loopTaskId = null
    }
    loopTaskId = tooltipLoop()
})

