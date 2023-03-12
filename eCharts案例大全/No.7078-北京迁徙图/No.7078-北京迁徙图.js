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
let colors = ['#FF8C00', '#00acea', '#1DE9B6'];
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('beijing', geoJson);
    option = {
        backgroundColor: '#1b1b1b',
        color: ['#FF8C00', '#00acea', '#1DE9B6'],
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['供应商A', '供应商B'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            type: 'continuous',
            seriesIndex: [2, 3],
            min: 0,
            max: 100,
            calculable: true,
            color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'beijing',
            show: false
        },
        series: [{
            type: 'map',
            map: 'beijing',
            aspectScale: 0.75,
            itemStyle: {
                borderColor: 'rgba(100,149,237,1)',
                borderWidth: 0.5,
                areaColor: 'rgba(0,0,0,0)',
            },
            label: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            emphasis: {
                label: {
                    show: false
                },
                itemStyle: {
                    areaColor: 'rgba(0,0,0,0)',
                }
            }

        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
                period: 5,
                scale: 5,
                brushType: 'fill'
            },
            hoverAnimation: true,
            label: {
                formatter: '{b}',
                position: 'right',
                offset: [15, 0],
                color: param => colors[param.dataIndex % colors.length],
                show: true
            },
            itemStyle: {
                color: (param) => {
                    return colors[param.dataIndex % colors.length];
                },
                shadowBlur: 10,
                shadowColor: '#333',
                opacity: 0.75
            },
            emphasis: {
                itemStyle: {
                    opacity: 1, //线条宽度
                }
            },
            data: points
        }, {
            name: '供应商A',
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 7,
            effect: {
                show: true,
                period: 4,
                trailLength: 0.02,
                symbol: 'circle',
                symbolSize: 4,
                color: '#fff'
            },
            lineStyle: {
                width: 0.5, //线条宽度
                opacity: 0.5, //尾迹线条透明度
                curveness: .3, //尾迹线条曲直度
                shadowBlur: 10,
            },
            emphasis: {
                lineStyle: {
                    width: 2, //线条宽度
                }
            },
            data: [{
                name: '供应商A->BossSoft',
                value: 40,
                coords: [
                    [115.974519, 40.457009],
                    [116.843177, 40.376834]
                ],
            }]
        }, {
            name: '供应商B',
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 7,
            effect: {
                show: true,
                period: 4,
                trailLength: 0.02,
                symbol: 'circle',
                symbolSize: 4,
                color: '#fff'
            },
            lineStyle: {
                width: 0.5, //线条宽度
                opacity: 0.5, //尾迹线条透明度
                curveness: 0.3, //尾迹线条曲直度
                shadowBlur: 10,
            },
            emphasis: {
                lineStyle: {
                    width: 2, //线条宽度
                }
            },
            data: [{
                name: '供应商B->BossSoft',
                value: 80,
                coords: [
                    [116.143267, 39.749144],
                    [116.843177, 40.376834]
                ]
            }]
        }]
    };
    myChart.setOption(option);
});