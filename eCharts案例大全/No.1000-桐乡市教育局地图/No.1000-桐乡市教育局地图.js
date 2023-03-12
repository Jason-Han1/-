var lishui = '/asset/get/s/data-1544543852082-h3S1-o9zM.json';

var lishui = '/asset/get/s/data-1636440084599-yMQrV2I-i.json';
$.get(lishui, function (geoJson) {
    echarts.registerMap('ls', geoJson);
    var geoCoordMap = {
        桐乡高级中学: [120.551085, 30.629065],
        河山中学: [120.460179, 30.497779],
    };
    var data = [
        { name: '桐乡高级中学', value: 250 },
        { name: '河山中学', value: 330 },
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
                text: '桐乡市地图',
                left: 'center',
                top: '2%',
                textStyle: {
                    color: '#fff',
                },
            },
            backgroundColor: '#070d18',
            //地图板块
            geo: {
                map: 'ls',
                zoom: 1,
                aspectScale: 1, //长宽比
            },
            series: [
                //地图板块样式
                {
                    type: 'map',
                    map: 'ls',
                    geoIndex: 1,
                    aspectScale: 1, //长宽比
                    showLegendSymbol: true, // 存在legend时显示
                    zoom: 1,
                    label: {
                        normal: {
                            formatter: '{b}',
                            show: true,
                            textStyle: {
                                color: '#fff',
                            },
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#05C3F9',
                            },
                        },
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
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
//地图自定义绘制网址：http://geojson.io/#map=14/29.9307/121.8544
//中国地图选择器：http://datav.aliyun.com/tools/atlas/index.html#&lat=33.797408767572485&lng=104.2822265625&zoom=4
