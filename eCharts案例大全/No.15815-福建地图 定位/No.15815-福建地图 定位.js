var uploadedDataURL = "/asset/get/s/data-1478782908884-B1H6yezWe.json";


$.get(uploadedDataURL, function(as) {
    echarts.registerMap('ch', as);
    var data = [{
        name: '福州',
        value: 0
    }, {
        name: '宁德',
        value: 50
    }, {
        name: '三明',
        value: 50
    }, {
        name: '厦门',
        value: 30
    }, {
        name: '龙岩',
        value: 30
    }, {
        name: '泉州',
        value: 35
    }, {
        name: '漳州',
        value: 30
    }, {
        name: '莆田',
        value: 55
    }];
    var geoCoordMap = {
        '南平': [118, 27.3],
        '宁德': [119.5, 27.2],
        '三明': [117.85, 26.2],
        '福州': [119.48, 26.1],
        '厦门': [118.04, 24.7],
        '龙岩': [117.00, 25.3],
        '泉州': [118.14, 25.2],
        '漳州': [117.50, 24.3],
        '莆田': [119.00, 25.3]
    }; 
    var dt = [{
        name: '南平市',
        value: 33
    }, {
        name: '宁德市',
        value: 2123
    }, {
        name: '三明市',
        value: 5383
    }, {
        name: '福州市',
        value: 0
    }, {
        name: '莆田市',
        value: 15283
    }, {
        name: '泉州市',
        value: 33
    }, {
        name: '龙岩市',
        value: 15000
    }, {
        name: '漳州市',
        value: 15283
    }, {
        name: '厦门市',
        value: 3003
    }];
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
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
    var color = ['#a6c84c'];
    var series = [];
    [
        ['福州', data]
    ].forEach(function(item, i) {
        series.push({
            name: '定位',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function(val) {
                return val[2] / 2;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true, 
            itemStyle: {
                normal: {
                    color: '#0ce928', 
                    shadowBlur: 20,
                    shadowColor: '#0ce928', 
                }
            },
            zlevel: 1
        }, 
        {
            type: 'map',
            map: 'ch',
            zlevel: 0, 
            itemStyle: {
                normal: {
                    borderColor: 'transparent',
                    color: '#555'
                }
            },
            data: dt
        }, {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: function(val) {
                return val[2] / 1;
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000',

                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff', //标志颜色
                    borderColor: "#fff",
                    borderWidth: 2,
                },
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            zlevel: 6,
            data: convertData(item[1])
        });
    });

    option = {
        visualMap: { //视觉映射组件
            type: 'piecewise', //分段型。
            splitNumber: 6,
            inverse: true,
            pieces: [{
                min: 1,
                max: 1000,
                color: '#799a1f'
            }, {
                min: 1000,
                max: 3000,
                color: '#149c9c'
            }, {
                min: 3000,
                max: 8000,
                color: '#ff84ff'
            }, {
                min: 8000,
                max: 15000,
                color: '#997cbe'
            }, {
                min: 15000,
                color: '#6eb5ed'
            }, {
                value: 0,
                label: '正在入库',
                color: '#0ce928'
            }],
            left: 'left',
            top: 'bottom',
            textStyle: {
                color: '#000'
            }
        },
        geo: {
            map: 'ch',
            itemStyle: {
                normal: {
                    areaColor: '#ddd',
                    borderColor: 'transparent'
                },
                emphasis: {
                    areaColor: '#ccc'
                }
            },
        },
        series: series
    };

    myChart.setOption(option);

});