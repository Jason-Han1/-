// http://datav.aliyun.com/tools/atlas 阿里云地图选择器 下载需要的数据包
// 左上角 导入数据 插入到代码
//var uploadedDataURL = "/asset/get/s/data-1573454139932-lW0kO573.json"
var uploadedDataURL = "/asset/get/s/data-1565258572056-CxztNlcgK.json";

// 标记点
var geoCoordMap = {
    '巴西': [-48.678945, -10.493623],
    '美国': [-118.24311, 34.052713],
    '加拿大': [-106.346771, 56.130366],
    '咸阳': [108.685117, 34.533439],
    '渭南': [109.802882, 34.499381],
    '延安': [109.49081, 36.596537],
    '汉中': [107.028621, 33.077668],
    '榆林': [109.741193, 38.290162],
    '安康': [109.029273, 32.6903],
    '商洛': [109.939776, 33.868319]
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
function convertData(data) {
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
function convertToLineData(data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
        // 起点
        var fromCoord = geoCoordMap[data[i].name]
        //  终点,这里设置的西安
        var toCoord = [108.948024, 34.263161]
        res.push([{
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
$.getJSON(uploadedDataURL, function(geoJson) {
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
                center: [108.348024, 35.463161],
                label: {
                    // 高亮文字隐藏
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'black',
                        borderWidth: 1,
                        areaColor: 'white',
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 1
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
            backgroundColor: 'white',
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
                    symbolSize: function(val) {
                        return val[2] / 100
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke' //波纹绘制方式：stroke,fill
                    },
                    label: {
                        normal: {
                            formatter: function(params) {
                                return params.data.name //节点标签文字
                            },
                            position: 'right', //显示位置
                            offset: [0, 0], //偏移设置
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FF4500',
                            //shadowBlur: 10,
                            //shadowColor: '#FF4500'
                        }
                    }
                },
                {
                    // 线条参数和样式
                    type: 'lines',
                    // 变化频率
                    data: convertToLineData(mapData),
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
                    label: {
                        normal: {
                            formatter: '11'
                            ,
                            position: 'right', //显示位置
                            offset: [0, 0], //偏移设置
                            show: true
                        }
                    },
                    symbolSize: 100,
                    lineStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 
                                //0 0 0 1代表渐变色从正上方开始
                                [{
                                    offset: 0, // 0% 处的颜色,offset的范围是0 ~ 1, 用于表示位置
                                    color: '#009e8e'
                                }, {
                                    offset: 0.9, // 90% 处的颜色
                                    color: '#ff0000'
                                }], false), //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数
                            // 尾迹线条宽度

                            width: 1,

                            //parseInt(data.value)*15,
                            // 尾迹线条透明度
                            opacity: 1,
                            // 尾迹线条曲直度
                            curveness: 0.3
                        }
                    }

                }
            ]
        }]
    }
    myChart.setOption(optionMap)
})