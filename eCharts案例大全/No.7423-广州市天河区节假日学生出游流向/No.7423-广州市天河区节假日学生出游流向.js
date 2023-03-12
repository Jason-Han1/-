// http://datav.aliyun.com/tools/atlas 阿里云地图选择器 下载需要的数据包
// 左上角 导入数据 插入到代码
var uploadedDataURL = "/asset/get/s/data-1576821068997-HGlupX6J.json"

// 标记点
var geoCoordMap = {
     '从化区': [113.587386,23.545283],
    '花都区': [113.22033,23.40358],
    '增城区': [113.829579,23.290497],
    '白云区': [	113.27307,23.15787],
    '萝岗区': [113.447353,23.182565],
    '天河区': [113.36112,23.12467],
    '越秀区': [113.26683,23.12897],
    '荔湾区': [113.2442,23.12592],
    '海珠区': [113.26197,23.10379],
    '黄浦区': [	113.45895,23.10642],
    '番禺区': [113.38397,22.93599],
    '增城区': [113.687386,23.40358],
    "南沙区": [113.53845,22.77144]

}
//  给value一个随机值
var mapData = []
for (var key in geoCoordMap) {
    mapData.push({
        'name': key,
        'value': parseInt((Math.random() + 1) * 150)
    })
}

// 输出json对象数组,value里包含坐标值和随机值
function convertData (data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name]
        res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
        })
    }
    return res
}

//  设置目标点, 配置线条指向
function convertToLineData (data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
        // 起点
        var toCoord = geoCoordMap[data[i].name]
        //  终点,这里设置的西安
        var fromCoord = [113.36112,23.12467]
        res.push([
            {
                coord: fromCoord,
                value: data[i].value
            },
            {
                coord: toCoord
            }
        ])
    }
    return res
}

// 解析地图数据包
$.getJSON(uploadedDataURL, function (geoJson) {
    // 注册地图,传入数据
    echarts.registerMap('echarts', geoJson)
    
    optionMap = {
        timeline: {
            show: false
        },
        baseOption: {
            // 设置地图参数和样式
            geo: {
                show: true,
                map: 'echarts',
                roam: true,
                zoom: 1,
                // 地图中心点, 可调节显示的偏移量
                center: [113.36112,23.12467],
                label: {
                    // 高亮文字隐藏
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                // 0% 处的颜色
                               color: 'rgba(147, 235, 248, 0)'
                            },
                            {
                                offset: 1,
                                // 100% 处的颜色
                               color: 'rgba(147, 235, 248, .2)' 
                            }]
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        // 鼠标悬浮高亮
                        areaColor: 'gray',
                        borderWidth: 0
                    }
                }
            }
        },
        options: [{
              title : {
        text: '广州市天河区节假日学生出游流向',
        // subtext: '数据纯属虚构',
        left: 'left',
        textStyle : {
            color: '#fff'
        }
    },
           backgroundColor: '#404a59', // 背景
            xAxis: {
                show: false
            },
            yAxis: {
                show: false
            },
            series: [{
                // 坐标点参数和样式
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(mapData),
                symbolSize: function (val) {
                    return val[2] / 20
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#a6c84c',
                        shadowBlur: 10,
                        shadowColor: '#a6c84c'
                    }
                }
            },
            {
                // 线条参数和样式
                type: 'lines',
                // 变化频率
                zlevel: 2,
                effect: {
                    show: true,
                    // 箭头指向速度，值越小速度越快
                    period: 4,
                    // 特效尾迹长度,取值0到1,值越大,尾迹越长
                    trailLength: 0.05,
                    symbol: 'arrow',
                    // 图标大小
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        color: '#a6c84c',
                        // 尾迹线条宽度
                        width: 1,
                        // 尾迹线条透明度
                        opacity: 1,
                        // 尾迹线条曲直度
                        curveness: 0.3
                    }
                },
                data: convertToLineData(mapData)
            }]
        }]
    }
    myChart.setOption(optionMap)
})
