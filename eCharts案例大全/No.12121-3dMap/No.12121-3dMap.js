    // 城市、国家 地理坐标
    const geoCoordMap = {
        '南宁': [108.479, 23.1152],
        '广州': [113.5107, 23.2196],
        '重庆': [107.7539, 30.1904],
        '芬兰': [24.909912, 60.169095],
        '美国': [-100.696295, 33.679979],
        '日本': [139.710164, 35.706962],
        '韩国': [126.979208, 37.53875],
        '瑞士': [7.445147, 46.956241],
        '东南亚': [117.53244, 5.300343],
        '澳大利亚': [135.193845, -25.304039],
        '德国': [13.402393, 52.518569],
        '英国': [-0.126608, 51.208425],
        '加拿大': [-102.646409, 59.994255]
    };

    // 连线起始位置
    let CQData = [
        [{
            name: '重庆'
        }, {
            name: "英国",
            value: 70
        }]
    ];

    let GZData = [
        [{
            name: '广州'
        }, {
            name: "日本",
            value: 30
        }],
    ];

    let NNData = [
        [{
            name: '南宁'
        }, {
            name: "加拿大",
            value: 80
        }],
        [{
            name: '南宁'
        }, {
            name: "美国",
            value: 100
        }],
        [{
            name: '南宁'
        }, {
            name: "澳大利亚",
            value: 95
        }],
        [{
            name: '南宁'
        }, {
            name: "瑞士",
            value: 50
        }]
    ];

    // 根据起始位置，获得线的地理位置
    function convertData(data) {

        let res = [];
        for (let i = 0; i < data.length; i++) {

            let dataItem = data[i];
            let [fromCoord, toCoord] = [geoCoordMap[dataItem[1].name], geoCoordMap[dataItem[0].name]];

            if (fromCoord && toCoord) res.push([fromCoord, toCoord]);
        }
        return res;
    }

    let [series2d, series3d] = [
        [],
        []
    ];
    [
        ['重庆', CQData],
        ['广州', GZData],
        ['南宁', NNData]
    ].forEach(function(item) {

        // 2d平面地图 + 散点
        series2d.push({
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                fontSize: 24,
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            itemStyle: {
                normal: {
                    color: '#f5f802'
                }
            },
            data: item[1].map(function(dataItem) {

                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name],
                    symbolSize: dataItem[1].value / 4
                };
            })
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                show: true,
                position: 'left',
                fontSize: 18,
                formatter: '{b}'
            },
            itemStyle: {
                normal: {
                    color: '#ff0000'
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]],
                symbolSize: parseInt(Math.random() * 20 + 10),
                label: {
                    position: 'right'
                }
            }]
        });

        // 3d连线
        series3d.push({
            type: 'lines3D',
            effect: {
                show: true,
                period: 3,
                trailLength: 0.1
            },
            lineStyle: {
                color: '#9ae5fc',
                width: 1,
                opacity: 0.6
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter() {

                    console.log(3);
                    return 'jhfjdsagfjsdgfisdgfiusagfuiasgf';
                }
            },
            data: convertData(item[1])
        }, {
            type: 'scatter3D',
            name: 'location',
            coordinateSystem: 'globe',
            blendMode: 'lighter',
            symbolSize: 10,
            itemStyle: {
                color: '#0276f3',
                opacity: 1
            },
            label: {
                show: true,
                formatter: param => param.data.name
            },
            data: [{
                name: '中国',
                value: [116.4551, 40.2539, 0]
            }]
        })
    });

    let chart = echarts.init(document.createElement('canvas'), null, {
        width: 4096,
        height: 2048
    });

    // 添加2d地图 + 散点图
    chart.setOption({
        backgroundColor: 'rgba(3, 28, 72, 0.3)',
        tooltip: {
            backgroundColor: 'red',
            alwaysShowContent: true,
            formatter(item) {

                console.log(item);
                return 'jhfjdsagfjsdgfisdgfiusagfuiasgf';
            }
        },
        geo: {
            type: 'map',
            map: 'world',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zoom: 0,
            boundingCoords: [
                [-180, 90],
                [180, -90]
            ],
            roam: false,
            itemStyle: {
                borderColor: '#000d2d',
                areaColor: '#2455ad',
                emphasis: {
                    areaColor: '#357cf8'
                }
            },
            label: {
                fontSize: 24
            }
        },
        series: series2d
    });

    // 添加地球
    let option = {
        backgroundColor: 'transparent',
        tooltip: {
            show: true,
            alwaysShowContent: true,
            formatter(item) {

                console.log(1);
                return item.name;
            }
        },
        globe: {
            baseTexture: chart,
            top: 'middle',
            left: 'center',
            displacementScale: 0,
            environment: 'examples/data-gl/asset/starfield.jpg',
            shading: 'color',
            viewControl: {
                distance: 240,
                autoRotate: false
            }
        },
        roam: true,
        series: series3d
    };

    myChart.setOption(option, true);