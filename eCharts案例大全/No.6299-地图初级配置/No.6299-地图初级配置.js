var uploadedDataURL = "/asset/get/s/data-1598406021187-6roTNOQlk.json";

$.get(uploadedDataURL, function(json) {
    echarts.registerMap('js', json);
    var option = {
        visualMap: [{
            show: true,
            type: "piecewise",
            min: 800,
            max: 50000,
            // realtime: false,
            // calculable: false,
        }],
        geo: {
            id: 0,
            show: true,
            map: "js",
            regions: [{
                name: '广东省',
                itemStyle: {
                    areaColor: 'red',
                    color: 'red'
                }
            }],
            // 开启缩放和平移
            roam: true,
            // 宽高比
            aspectScale: 0.75,
            // 定义定位的左上角以及右下角分别所对应的经纬度
            // boundingCoords: [
            //     [76.327482,48.394254],
            //     [141.527502,2.782161]
            // ],
            // 当前视角的中心点，用经纬度表示
            // center: [118.801272,32.074688],
            // 当前视角的缩放比例
            zoom: 1.6,
            // 去掉傻乎乎的标识点
            // showLegendSymbol: false,
            itemStyle: {
            // 渐变色
            areaColor: {
                type: 'radial',
                x: 1,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#abcdef' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#123456' // 50% 处的颜色
                },{
                    offset: 1, color: '#abcdef' // 100% 处的颜色
                }
                ],
                global: true // 缺省为 false
            },
                // color: '#f0f000',
                borderColor: '#000',
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 100,
                shadowOffsetX: 20
            },
            // 高亮
            emphasis: {
                // item
                itemStyle: {
                    areaColor: "red",
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 10,
                    shadowOffsetX: 10
                }
            }
        },
        series: [{
            name: '散点图',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [{
                    name: "武汉",
                    value: [114.3896,30.6628, 9000]
                }]
            }
        ]
    };
    
    myChart.setOption(option);
});