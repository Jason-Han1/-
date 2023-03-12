var uploadedDataURL = "/asset/get/s/data-1482909900836-H1BC_1WHg.json";

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('', geoJson); //注册 地图

    // 各区中心点经纬度
    var geoCoordMap = {};

    // 柱状图纵坐标
    var barType = []

    var geoData = JSON.parse(JSON.stringify(geoJson))
    geoData.features.forEach(e => {
        barType.push(e.properties.name)
        geoCoordMap[e.properties.name] = e.properties.cp
    })

    // 数据梯度或类别
    var dataType = ["全部", "A", "B", "C"]
    var colorType = ['#00ffea', '#00ff8c', '#f9ff00', '#ff5500']

    option = {
        // 时间轴样式
        baseOption: {
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 5000,
                data: dataType,
                label: {
                    color: 'rgba(0,168,255,.6)'
                },
                lineStyle: {
                    color: '#666'
                },
                checkpointStyle: {
                    color: 'rgba(0,168,255,1)',
                    borderColor: 'rgba(0,168,255,0.3)'
                },
                itemStyle: {
                    opacity: 0.3
                },
                controlStyle: {
                    opacity: 0.3
                },
                emphasis: {
                    label: {
                        color: 'rgba(0,168,255,1)'
                    },
                    controlStyle: {
                        color: 'rgba(0,168,255,1)',
                        borderColor: 'rgba(0,168,255,1)',
                        opacity: 1
                    }
                }
            },
            title: {
                subtext: ''
            },
            tooltip: {},
            calculable: true,
            grid: {
                top: 80,
                bottom: 80,
                right: '2%',
                width: '30%'
            },
            geo: {
                type: 'map',
                mapType: 'shanghai',
                roam: true,
                left: "8%",
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(0,168,255,.6)',
                        borderWidth: 2,
                        areaColor: 'rgba(0,81,138,.3)',
                    },
                    emphasis: {
                        borderColor: 'rgba(0,168,255,.6)',
                        borderWidth: 2,
                        areaColor: 'rgba(0,81,138,.3)',
                    }
                },
                animation: false
            }
        },
        options: []
    }

    dataType.forEach((e, i) => {
        // 柱状图模拟数据
        var barData = [];
        // 地图撒点数据 [{name:名字,value:[lng,lat,数值]}]
        var mapData = []
        // 地图飞线数据
        var mapFlyLinesData = [];
        var endPoint = barType[_random(0, barType.length - 1)]

        barType.forEach(res => {
            var value = _random(100, 800);
            barData.push({
                'name': res,
                'value': value
            })

            var point = JSON.parse(JSON.stringify(geoCoordMap[res]));
            point.push(value)
            mapData.push({
                'name': res,
                'value': point
            })

            if (endPoint === res) return;
            mapFlyLinesData.push([{
                coord: geoCoordMap[res]
            }, {
                coord: geoCoordMap[endPoint]
            }])
        })


        // change options
        option.options.push({
            title: [{
                id: 'title1',
                text: e + "数据类型分析统计",
                right: '5%',
                top: '2%',
                textStyle: {
                    color: '#fff',
                    fontSize: 22
                }
            }],
            xAxis: {
                type: 'value',
                scale: true,
                position: 'top',
                min: 0,
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 2,
                    textStyle: {
                        color: '#aaa'
                    }
                },
            },
            yAxis: {
                type: 'category',
                nameGap: 16,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#ddd'
                    }
                },
                data: barType
            },
            series: [
                // scatter 数据映射
                {
                    name: 'point',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: mapData,
                    symbolSize: function(val) {
                        return val[2] / 30;
                    },
                    itemStyle: {
                        normal: {
                            color: colorType[i]
                        }
                    }
                },
                // effectScatter 点位动画 数据映射  此层覆盖掉scatter层 若想看上一层可把此obj注销 或提高上一层的层级
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: mapData,
                    symbolSize: function(val) {
                        return val[2] / 30;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorType[i],
                            shadowBlur: 10,
                            shadowColor: colorType[i]
                        }
                    },
                    zlevel: 1
                },
                //飞线层
                {
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 4, //箭头指向速度，值越小速度越快
                        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 3, //图标大小
                    },
                    lineStyle: {
                        normal: {
                            color: colorType[i],
                            width: 0.1, //尾迹线条宽度
                            opacity: 0.5, //尾迹线条透明度
                            curveness: .3 //尾迹线条曲直度
                        }
                    },
                    data: mapFlyLinesData
                },
                //柱状图
                {
                    zlevel: 1.5,
                    type: 'bar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: colorType[i]
                        }
                    },
                    data: barData
                }
            ]
        })
    })


    myChart.setOption(option)
})


function _random(a, b) {
    return Math.round(Math.random() * Math.abs(b - a) + a)
}