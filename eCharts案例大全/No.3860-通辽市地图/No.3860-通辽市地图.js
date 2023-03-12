var uploadedDataURL = "/asset/get/s/data-1616638094708-G9hbJf2iR.json";

var center = {
    "科尔沁区": [122.264042, 43.617422],
    "科尔沁左翼中旗": [123.313873, 44.127166],
    "科尔沁左翼后旗": [122.355155, 42.954564],
    "开鲁县": [121.308797, 43.602432],
    "库伦旗": [121.774886, 42.734692],
    "奈曼旗": [120.662543, 42.84685],
    "扎鲁特旗": [120.905275, 44.555294],
    "霍林郭勒市": [119.657862, 45.532361]
}
var option = null;
$.get(uploadedDataURL, function(json) {
    echarts.registerMap('js', json);
    option = {
        backgroundColor: '#020933',
        title: {
            top: 20,
            text: '通辽市地图',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ffffff'
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (typeof(params.value)[2] == "undefined") {
                    return params.name + ' : ' + params.value;
                } else {
                    return params.name + ' : ' + params.value[2];
                }
            }
        },
        visualMap: {
            show: false,
            max: 100,
            seriesIndex: [3],
            inRange: {
                color: ['#A5DCF4', '#006edd']
            }
        },
        geo: [{
            map: 'js',
            roam: false, //是否允许缩放
            zoom: 1.1, //默认显示级别
            scaleLimit: {
                min: 0,
                max: 3
            }, //缩放级别
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            },
            tooltip: {
                show: false
            }
        }],
        series: [{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                z: 5,
                data: [],
                symbolSize: 14,
                label: {
                    normal: {
                        show: true,
                        formatter: function(params) {
                            return '{fline|地点：' + params.data.city + '}\n{tline|' + (params.data.info || '发生xx集件') + '}';
                        },
                        position: 'top',
                        backgroundColor: 'rgba(233,63,66,.9)',
                        padding: [0, 0],
                        borderRadius: 3,
                        lineHeight: 32,
                        color: '#ffffff',
                        rich: {
                            fline: {
                                padding: [0, 10, 10, 10],
                                color: '#ffffff'
                            },
                            tline: {
                                padding: [10, 10, 0, 10],
                                color: '#ffffff'
                            }
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    color: '#e93f42',
                }
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
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#2980b9',
                        borderWidth: 1,
                        areaColor: '#12235c'
                    },
                    emphasis: {
                        areaColor: '#FA8C16',
                        borderWidth: 0,
                        color: 'green'
                    }
                },
                data: Object.keys(center).map(name => {
                    return {
                        name: name,
                        value: Math.random() * 100
                    }
                })
            }
        ]
    };
    myChart.setOption(option);
});
var timer = setInterval(() => {
    //数据情况重绘，清除formatter移动效果，也可根据自身需求是否需要，删除这两行代码
    /*option.series[seriesjson[runidx].createType-1].data = [];
    myChart.setOption(option, true);*/
    for (var i = 0; i < 3; i++) {
        option.series[i].data = [];
    }
    var cityIndex = Math.floor(Math.random() * 13);
    var runidx = Math.floor(Math.random() * 3);
    var coordCity = Object.keys(center)[cityIndex];
    var coord = center[coordCity];
    option.series[runidx].data = [{
        city: coordCity,
        value: coord
    }];
    // console.log(option.series[runidx].data)
    // option.series[4].data = option.series[4].data.sort(function(a,b){
    //     return b.value-a.value;
    // });
    myChart.setOption(option, true);
}, Math.floor(Math.random() * 10000) + 3000);