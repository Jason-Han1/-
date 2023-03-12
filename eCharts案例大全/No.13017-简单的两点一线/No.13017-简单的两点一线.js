option = {
    backgroundColor: '#404a59',
    geo: {
        map: 'china',
    },
    series: [
        // 常规地图
        {
            type: 'map',
            mapType: 'china',
            itemStyle: {
                normal: {
                    areaColor: '#999',
                    borderColor: '#666'
                },
                emphasis: {
                    areaColor: '#333'
                }
            }
        },
        // 区域散点图
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            data: [{
                    name: "新疆",
                    value: [87.36, 43.45, 100]
                },
                {
                    name: "北京",
                    value: [116.24, 39.55, 100]
                },
            ]
        },
        // 线 和 点
        {
            type: 'lines',
            zlevel: 6,
            effect: {
                show: true,
                period: 10,
                color: 'green',
            },
            lineStyle: {
                normal: {
                    color: 'red',
                    width: 0.1,
                    curveness: 0.2
                }
            },
            data: [{
                fromName: 1,
                toName: 1,
                coords: [
                    [116.24, 39.55],
                    [87.36, 43.45]
                ]
            }],
        }
    ]
};

myChart.setOption(option, true);