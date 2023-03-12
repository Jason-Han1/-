var uploadedDataURL = '/asset/get/s/data-1592366734603-Z-iQwIHJk.json';
var center = {
    南京市: [118.767413, 32.041544],
    无锡市: [120.301663, 31.574729],
    徐州市: [117.184811, 34.261792],
    常州市: [119.946973, 31.772752],
    苏州市: [120.619585, 31.299379],
    南通市: [120.864608, 32.016212],
    连云港市: [119.178821, 34.600018],
    淮安市: [119.021265, 33.597506],
    盐城市: [120.139998, 33.377631],
    扬州市: [119.421003, 32.393159],
    镇江市: [119.452753, 32.204402],
    泰州市: [119.915176, 32.484882],
    宿迁市: [118.275162, 33.963008],
};
var option = null;
$.get(uploadedDataURL, function (res) {
    var mapData = JSON.parse(res);
    echarts.registerMap('js', mapData);
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
        color: ['#ED7C30'], //圆点图例颜色
        legend: {
            //圆点
            show: false,
        },
        visualMap: {
            show: false,
            max: 100,
            inRange: {
                color: ['#A5DCF4', '#006edd'],
            },
        },
        geo: [
            {
                map: 'js',
                roam: false, //是否允许缩放
                zoom: 1.1, //默认显示级别
                scaleLimit: {
                    min: 0,
                    max: 3,
                }, //缩放级别
                itemStyle: {
                    //阴影
                    normal: {
                        borderColor: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: '#00F6FF',
                                },
                                {
                                    offset: 1,
                                    color: '#53D9FF',
                                },
                            ],
                            false
                        ),
                        borderWidth: 3,
                        shadowColor: 'rgba(10,76,139,1)',
                        shadowOffsetY: 0,
                        shadowBlur: 60,
                    },
                },
                tooltip: {
                    show: true,
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
                        city: '盐城市',
                        value: [120.139998, 33.377631],
                    },
                ],
                symbolSize: 14,
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            return (
                                '{fline|地点：' +
                                params.data.city +
                                '}\n{tline|' +
                                (params.data.info || '发生xx集件') +
                                '}'
                            );
                        },
                        position: 'top',
                        backgroundColor: '#6EB7EC',
                        padding: [0, 0],
                        borderRadius: 3,
                        lineHeight: 32,
                        color: '#f7fafb',
                        rich: {
                            //tooltip文字颜色
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
            //地图
            {
                type: 'map',
                mapType: 'js',
                geoIndex: -1,
                zoom: 1.1, //默认显示级别
                label: {
                    show: true,
                    color: '#ffffff',
                    emphasis: {
                        color: 'white',
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        borderColor: '#2980b9',
                        borderWidth: 1,
                        areaColor: '#12235c',
                    },
                    emphasis: {
                        areaColor: '#FA8C16',
                        borderWidth: 0,
                        color: 'green',
                    },
                },
                data: Object.keys(center).map((name) => {
                    return {
                        name: name,
                        value: Math.random() * 100,
                    };
                }),
            },
        ],
    };
    myChart.setOption(option);
    myChart.on('mouseover', function (event) {
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
        }
    });
});
