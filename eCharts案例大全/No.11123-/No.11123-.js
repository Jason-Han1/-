var uploadedDataURL = "/asset/get/s/data-1560415363200-w_pbTfCs_.json";

//绘制全国地图
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('南充市', geoJson);
    myChart.hideLoading();

    var geoCoordMap = {
        '顺庆区':[106.096345,30.95384],
        '高坪区': [106.25734, 30.803843],
        '嘉陵区':[105.93326052,30.70975852],
        '营山县':[106.6835315,31.15002952],
        '西充县':[105.847345,31.053843],
        '南部县':[105.907345,31.293843],
        '蓬安县':[106.407345,30.963843],
        '仪陇县':[106.507345,31.453843],
        '阆中市':[106.057345,31.553843],
    };


    var data = [{
            name: '顺庆区',
            value: 199
        },
        {
            name: '高坪区',
            value: 320
        },
        {
            name: '嘉陵区',
            value: 252
        },
        {
            name: '营山县',
            value: 152
        },
        {
            name: '西充县',
            value: 300
        },
        {
            name: '南部县',
            value: 200
        },
        {
            name: '蓬安县',
            value: 352
        },
        {
            name: '仪陇县',
            value: 152
        },
        {
            name: '阆中市',
            value: 189
        }
    ];

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };


    //初始化绘制全国地图配置
    option = {
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
        geo: {
            show: false,
            map: '南充市',
            layoutCenter: ['50%', '50%'],
            layoutSize: "100%",
        },
        series: [
            {
               type: 'map',
               map: '南充市',
               geoIndex: 1,
               zoom:1.2,
               label: {
                   emphasis: {
                       show: false
                   }
               },
               itemStyle: {
                   normal: {
                       areaColor: 'transparent',
                       borderColor: '#3fdaff',
                       borderWidth: 2
                   },
                   emphasis: {
                       areaColor: '#C9E6FF',
                       shadowColor: '#5AB2FE',
                       shadowBlur: 20
                   }
               },
               data: data,
           },
            {
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#25f4a6'
                    }
                }
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 5)),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#25f4a6',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            }
        ],
        animationDuration: 1000,
        animationEasing: 'cubicOut',
        animationDurationUpdate: 1000

    };


    myChart.setOption(option);
});