var lishui = '/asset/get/s/data-1540377628167-ud3UjK0aB.json';

$.get(lishui, function (geoJson) {
    echarts.registerMap('ls', geoJson);
    var geoCoordMap = {
        缙云县: [120.27, 28.65],
        青田县: [120.11, 28.15],
    };
    var data = [
        { name: '缙云县', value: 250 },
        { name: '青田县', value: 330 },
    ];
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        return res;
    };
    myChart.setOption(
        (option = {
            title: {
                text: '丽水市地图',
                left: 'center',
                top: '2%',
                textStyle: {
                    color: '#fff',
                },
            },
            backgroundColor: '#070d18',

            geo: {
                map: 'ls',
                show: true,
                roam: false,
                label: {
                    emphasis: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#1773c3',
                        shadowColor: '#031525',
                        shadowBlur: 20,
                    },
                },
                zoom: 1.2,
            },
            series: [
                {
                    type: 'map',
                    map: 'ls',
                    geoIndex: 1,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: true, // 存在legend时显示
                    zoom: 1.2,
                    label: {
                        normal: {
                            formatter: '{b}',
                            show: true,
                            textStyle: {
                                color: '#fff',
                            },
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#05C3F9',
                            },
                        },
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: 'transparent',
                            borderColor: '#3B5077',
                            borderWidth: 1,
                        },
                        emphasis: {
                            areaColor: '#070d18',
                            shadowColor: '#1773c3',
                            shadowBlur: 20,
                        },
                    },
                },

                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin',
                    symbolSize: function (val) {
                        return val[2] / 4;
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: function (value) {
                                return value.value[2];
                            },
                            textStyle: {
                                color: '#fff',
                                fontSize: 12,
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#F62157', //标志颜色
                        },
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
                {
                    name: '',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function (val) {
                        return val[2] / 20;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke',
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            formatter: function (value) {
                                return value.name + ':' + value.value[2];
                            },
                            position: 'right',
                            show: true,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#05C3F9',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9',
                        },
                    },
                    zlevel: 1,
                },
            ],
        })
    );
}).error(function () {
    alert('地图的geoJSON获取失败，请运行服务器');
});
