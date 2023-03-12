var uploadedDataURL = "/asset/get/s/data-1621233061320-EE4u68dTg.json";

$.get(uploadedDataURL, (res) => {
    var mapData = JSON.parse(res);
    echarts.registerMap('hedi', mapData);

    var centerMap = {};
    if (mapData && mapData.features && mapData.features.length > 0) {
        for (var i = 0; i < mapData.features.length; i++) {
            var feature = mapData.features[i];
            var properties = feature.properties || {};
            if (properties && properties.name) {
                centerMap[properties.name] = properties.center || [];
            }
        }
    }

    var option = {
        title: {
            text: '河地市',
        },
        visualMap: {
            show: false,
            max: 100,
            seriesIndex: [3],
            inRange: {
                color: ['#A5DCF4', '#006edd'],
            },
        },
        geo: [
            {
                //如果在vue里effectScatter没生效，一定要看一下有没有引入geo插件
                map: 'hedi',
                roam: false, // 是否允许缩放
                zoom: 1.1, // 默认显示级别
                scaleLimit: {
                    min: 0,
                    max: 3,
                }, // 缩放级别
                itemStyle: {
                    normal: {
                        areaColor: '#013C62',
                        shadowColor: '#013C62',
                        shadowBlur: 20,
                        shadowOffsetX: -5,
                        shadowOffsetY: 15,
                    },
                },
                tooltip: {
                    show: false,
                },
            },
        ],
        series: [
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                z: 5,
                data: [
                    {
                        city: '吉安',
                        value: [114.986373, 27.111699],
                    },
                ],
                symbolSize: 14,
                label: {
                    normal: {
                        show: true,
                        formatter(params) {
                            return `{fline|地点：${params.data.city}}\n{tline|${params.data.info || '发生xx集件'}}`;
                        },
                        position: 'top',
                        backgroundColor: 'rgba(254,174,33,.8)',
                        padding: [0, 0],
                        borderRadius: 3,
                        lineHeight: 32,
                        color: '#f7fafb',
                        rich: {
                            fline: {
                                padding: [0, 10, 10, 10],
                                color: '#ffffff',
                            },
                            tline: {
                                padding: [10, 10, 0, 10],
                                color: '#ffffff',
                            },
                        },
                    },
                    emphasis: {
                        show: true,
                    },
                },
                itemStyle: {
                    color: '#feae21',
                },
            },
            {
                name: '河地市人口密度',
                type: 'map',
                zoom: '1.1',
                mapType: 'hedi', // 自定义扩展图表类型
                legend: {
                    show: true,
                },
                label: {
                    show: true,
                    emphasis: {
                        //高亮时文字样式
                        color: '#fff',
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#fff',
                        color: '#fff',
                    },
                    emphasis: {
                        areaColor: 'rgb(0, 102, 255)',
                    },
                },
                data: [
                ],
                tooltip: {
                    show: false,
                }
            },
        ],
    };

    myChart.setOption(option);
    myChart.on('click', function (event) {
        console.log(event);
        if (event.componentType === 'series' && event.seriesIndex === 1) {
            var codeCity = event.name;
            var coord = centerMap[codeCity];
            option.series[0].data = [
                {
                    city: codeCity,
                    value: coord,
                },
            ];
            myChart.setOption(option, true);
            //由于绑定了mouseover事件，地图默认的高亮事件不触发了
            //所以手动高亮一下
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: event.seriesIndex,
                dataIndex: event.dataIndex,
            });
        }
    });
});
