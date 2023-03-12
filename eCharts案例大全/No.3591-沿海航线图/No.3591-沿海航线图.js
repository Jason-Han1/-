var uploadedDataURL = "/asset/get/s/data-1620283760694-EeGYo1A3_.json";

$.getJSON(uploadedDataURL, function(data) {
    echarts.registerMap('china', data);
    
    routes = [{'coords':[[130.175, 0.6351], [116.857, 38.3106], [100.857, 38.3106]]},{'coords':[[116.857, 38.3106], [100.857, 38.3106]]}]

    var option = {
        tooltip: {
            show: false,
            trigger: 'item'
        },
        geo: {
            map: 'china',
            shading: 'color',
            silent: true,
            environment: '#ADD8E6',
            realisticMaterial: {
                roughness: 0.8,
                metalness: 0
            },
            postEffect: {
                enable: false
            },
            groundPlane: {
                show: false,
                color: '#000000'
            },
            light: {
                main: {
                    intensity: 1,
                    alpha: 0
                },
                ambient: {
                    intensity: 0
                }
            },
            viewControl: {
                minDistance: 0,
                distance: 10,
                alpha: 89,

                panMouseButton: 'left',
                rotateMouseButton: 'right'
            },

            itemStyle: {
                areaColor: '#3366FF',
                borderWidth: 0.5
            },

            regionHeight: 0.1
        },
        series: [{
            name: '航线',
            type: 'lines',
            polyline: true,
            zlevel: 2,
            effect: {
                show: true,
                period: 3, //箭头指向速度，值越小速度越快
                trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'circle', //箭头图标
                symbolSize: 4, //图标大小
            },
            lineStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,

                        colorStops: [{
                            offset: 0,
                            color: 'rgba(33,168,230,0.1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(33,168,230,1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    width: 1.5, //线条宽度
                    opacity: 0.2, //尾迹线条透明度
                    curveness: 0.3 //尾迹线条曲直度
                },
                emphasis: {
                    width: 3,
                    opacity: 0.5,
                }
            },
            data: [{'coords':[[130.175, 0.6351], [116.857, 38.3106], [100.857, 38.3106]]}]
        }]
    }

    myChart.setOption(option);
    
    console.log(JSON.stringify(option))
});
