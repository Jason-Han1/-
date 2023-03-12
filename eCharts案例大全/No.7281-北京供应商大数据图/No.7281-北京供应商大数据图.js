var uploadedDataURL = "/asset/get/s/data-1593671529129-u-DcAWe3h.json";

var points = [{
    name: '供应商A',
    value: [115.974519, 40.457009]
}, {
    name: '供应商B',
    value: [116.143267, 39.749144]
}, {
    name: 'BossSoft',
    value: [116.843177, 40.376834]
}]

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('beijing', geoJson);
    option = {
        backgroundColor: '#013954',
        title: {
            top: 20,
            text: '北京',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'beijing',
            aspectScale: 0.75, //长宽比
            zoom: 1.1,
            roam: true,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
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
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            }
        },
        series: [{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#1DE9B6',
                        show: true
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#1DE9B6',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: points
            }, //地图线的动画效果
            {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                },
                lineStyle: {
                    normal: {
                        color: '#1DE9B6',
                        width: 0.5, //线条宽度
                        opacity: 0.5, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: [{
                    coords: [
                        [115.974519, 40.457009],
                        [116.143267, 39.749144]
                    ]
                }, {
                    coords: [
                        [116.143267, 39.749144],
                        [115.974519, 40.457009]
                    ]
                }, {
                    coords: [
                        [115.974519, 40.457009],
                        [116.843177, 40.376834]
                    ]
                }]
            },
        ]
    };
    myChart.setOption(option);
});