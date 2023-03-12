const _colorList = [
    'rgba(193,46,52,0.7)',
    'rgba(230,182,0,0.7)',
    'rgba(0,152,217,0.7)',
    'rgba(43,130,29,0.7)',
    'rgba(0,94,170,0.7)',
    'rgba(51,156,168,0.7)',
    'rgba(205,168,25,0.7)',
    'rgba(50,164,135,0.7)',
    'rgba(79,129,189,0.7)',
    'rgba(192,80,77,0.7)',
    'rgba(155,187,89,0.7)',
    'rgba(96,74,123,0.7)',
    'rgba(148,138,84,0.7)',
    'rgba(228,108,11,0.7)'
]

var data = []
var oneDay = 24 * 3600 * 1000
var fiveMinutes = 1800 * 1000
var count = oneDay / fiveMinutes
var timestr = '2019/6/1 00:00:00'
var startTime = +new Date(timestr) - fiveMinutes

function randomData(now) {
    var value = Math.floor(Math.random() * 10)

    return {
        name: now.toString(),
        value: [now.toLocaleDateString() + ' ' + now.getHours() + now.toLocaleTimeString().substr(-6, 6), value]
    }
}
//
// var now = +new Date(2020, 6, 29)
// var oneDay = 24 * 3600 * 1000

for (var i = 0; i <= count; i++) {
    startTime = new Date(+startTime + fiveMinutes)
    data.push(randomData(startTime))
}

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    // tooltip: {
    //   trigger: 'axis',
    //   formatter: function(params) {
    //     params = params[0]
    //     var date = new Date(params.name)
    //     return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
    //   },
    //   axisPointer: {
    //     animation: false
    //   }
    // },
    grid: [{
            top: 80,
            left: 50,
            bottom: 30,
            right: 50
        },
        {
            top: 80,
            left: 50,
            right: 50,
            height: 150
        }
    ],
    dataZoom: [{
            top: 230,
            left: 50,
            type: 'slider', // 数据滑块
            xAxisIndex: 0,
            start: 0,
            minSpan: 8, // 5min
            // minSpan:16,   //10min
            // minSpan:24,   //15min
            // minSpan:50,   //30min
            dataBackground: {
                lineStyle: {
                    color: '#95BC2F'
                },
                areaStyle: {
                    color: '#95BC2F',
                    opacity: 1
                }
            },
            fillerColor: 'rgba(255,255,255,.6)'
        },
        {
            type: 'inside', // 使鼠标在图表中时滚轮可用
            xAxisIndex: 0
        }
    ],
    xAxis: {
        type: 'time',
        position: 'top',
        gridIndex: 1,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        gridIndex: 1,
        inverse: true,
        show: false,
        min: 0,
        max: 10
    },
    series: [{
        name: '模拟数据',
        type: 'custom',
        renderItem: (params, api) => {
            var color = _colorList[api.value(1)]
            var xStart = api.value(0)
            var xEnd = api.value(0)
            if (params.dataIndex + 1 !== data.length) {
                xEnd = new Date(data[params.dataIndex + 1].value[0]).getTime()
            }
            var scaleStart = api.coord([xStart, 0])
            var scaleSize = api.size([xEnd - xStart, 10])

            return {
                type: 'rect',
                shape: {
                    x: scaleStart[0],
                    y: scaleStart[1],
                    width: scaleSize[0],
                    height: scaleSize[1]
                },
                style: api.style({
                    fill: color
                })
            }
        },
        data: data
    }]
}