

var uploadedDataURL = "/asset/get/s/data-1509940365453-SkScnUTCW.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('jiangxi', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '赣州市': [114.940278, 25.85097],
        '吉安市': [114.986373, 27.111699],
        '上饶市': [117.971185, 28.44442],
        '九江市': [115.992811, 29.712034],
        '抚州市': [116.358351, 27.98385],
        '宜春市': [114.391136, 27.8043],
        '南昌市': [115.892151, 28.676493],
        '景德镇市': [117.214664, 29.29256],
        '萍乡市': [113.852186, 27.622946],
        '鹰潭市': [117.033838, 28.238638],
        '新余市': [114.930835, 27.810834],
    };
    var SXData = [
        [{
            name: '赣州市'
        }, {
            name: '吉安市',
            value: 1
        }],
        [{
            name: '南昌市'
        }, {
            name: '上饶市',
            value: 90
        }],
        [{
            name: '九江市'
        }, {
            name: '赣州市',
            value: 80
        }],
        [{
            name: '赣州市'
        }, {
            name: '抚州市',
            value: 70
        }],
        [{
            name: '赣州市'
        }, {
            name: '宜春市',
            value: 60
        }],
        [{
            name: '赣州市'
        }, {
            name: '九江市',
            value: 50
        }],
        [{
            name: '赣州市'
        }, {
            name: '南昌市',
            value: 50
        }],
        [{
            name: '赣州市'
        }, {
            name: '景德镇市',
            value: 40
        }],
        [{
            name: '赣州市'
        }, {
            name: '萍乡市',
            value: 30
        }],
        [{
            name: '赣州市'
        }, {
            name: '鹰潭市',
            value: 20
        }],
        [{
            name: '赣州市'
        }, {
            name: '新余市',
            value: 10
        }]
    ];

    var HMData = [
        [{
            name: '南昌市'
        }, {
            name: '吉安市',
            value: 95
        }],
        [{
            name: '南昌市'
        }, {
            name: '上饶市',
            value: 90
        }],
        [{
            name: '南昌市'
        }, {
            name: '九江市',
            value: 80
        }],
        [{
            name: '南昌市'
        }, {
            name: '抚州市',
            value: 70
        }],
        [{
            name: '南昌市'
        }, {
            name: '宜春市',
            value: 60
        }],
        [{
            name: '南昌市'
        }, {
            name: '赣州市',
            value: 50
        }],
        [{
            name: '南昌市'
        }, {
            name: '景德镇市',
            value: 40
        }],
        [{
            name: '鹰潭市'
        }, {
            name: '南昌市',
            value: 10
        }],
        [{
            name: '南昌市'
        }, {
            name: '鹰潭市',
            value: 20
        }],
        [{
            name: '南昌市'
        }, {
            name: '新余市',
            value: 10
        }]
    ];

    var ZLData = [
        [{
            name: '吉安市'
        }, {
            name: '南昌市',
            value: 100
        }],
        [{
            name: '吉安市'
        }, {
            name: '上饶市',
            value: 90
        }],
        [{
            name: '吉安市'
        }, {
            name: '九江市',
            value: 80
        }],
        [{
            name: '吉安市'
        }, {
            name: '抚州市',
            value: 70
        }],
        [{
            name: ''
        }, {
            name: '宜春市',
            value: 60
        }],
        [{
            name: '赣州市'
        }, {
            name: '吉安市',
            value: 50
        }],
        [{
            name: '吉安市'
        }, {
            name: '景德镇市',
            value: 40
        }],
        [{
            name: '吉安市'
        }, {
            name: '萍乡市',
            value: 30
        }],
        [{
            name: '吉安市'
        }, {
            name: '鹰潭市',
            value: 20
        }],
        [{
            name: '吉安市'
        }, {
            name: '赣州市',
            value: 20
        }],
        [{
            name: '吉安市'
        }, {
            name: '新余市',
            value: 10
        }]
    ];

    var convertData = function(data) {
        console.log(data);
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };
    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [
        ['双喜(软经典)', SXData],
        ['真龙(巴马天成)', ZLData],
        ['红梅(软黄)', HMData]
    ].forEach(function(item, i) {
        //console.log(item,i);
        series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });
    console.log(series)
    option = {
        backgroundColor: '#404a59',
        title: {
            text: '烟草省内外流',
            subtext: '数据流向',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params, ticket, callback) {
                console.log(params);
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                    return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value + '条';
                } else {
                    return params.name;
                }
            }
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['双喜(软经典)', '真龙(巴马天成)', '红梅(软黄)'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single',
        },
        geo: {
            show: true,
            map: 'jiangxi',
            label: {
                emphasis: {
                    show: true,
                    color: '#fff'
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },

        series: series

    };
    myChart.setOption(option);
});