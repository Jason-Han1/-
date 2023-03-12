$.getJSON('/asset/get/s/data-1567588182028-i2QuSn-Tj.json', function(geoJson) {

    $.getJSON("/asset/get/s/data-1540540866203--zuExg59A.json", function(json) {

        let backgroundColor = 'rgba(31, 60, 69,.88)', //'#1f1a1a',
            textColor = 'whitesmoke',
            fontFamily = '仿宋',
            $body = $(myChart.getDom());
        $body.css({
            'font-family': fontFamily,
            color: textColor
        });
        const regions = json.features.map(function(feature) {
            return {
                name: feature.properties.name,
                label: {
                    show: false
                },
                itemStyle: {
                    areaColor: 'rgb(52, 66, 88)',
                    borderColor: textColor,
                    borderWidth: .521,
                    borderType: 'solid'
                }
            }
        });

        geoJson.features = geoJson.features.filter(function(feature) {
            return !['北京市', '天津市', '河北省'].find(function(province) {
                return feature.properties.name == province;
            })
        }).concat(json.features);
        echarts.registerMap('map', geoJson);

        function getColor(type, typeType) {
            var color;
            if (isNaN(type)) {
                switch (type) {
                    case '暂无':
                        color = 'gray';
                        break;
                    case '优':
                        color = '#43ce17';
                        break;
                    case '良':
                        color = '#efdc31';
                        break;
                    case '轻度污染':
                        color = '#fa0';
                        break;
                    case '中度污染':
                        color = '#ff401a';
                        break;
                    case '重度污染':
                        color = '#d20040';
                        break;
                    case '严重污染':
                        color = '#9c0a4e';
                        break;
                    case 'AQI':
                        color = 'hsl(40,100%,50%)';
                        break;
                    case '臭氧':
                        color = 'hsl(80,100%,50%)';
                        break;
                    case '二氧化硫':
                        color = 'hsl(120,100%,50%)';
                        break;
                    case '二氧化氮':
                        color = 'hsl(160,100%,50%)';
                        break;
                    case '一氧化碳':
                        color = 'hsl(200,100%,50%)';
                        break;
                    case '细颗粒物':
                        color = 'hsl(240,100%,50%)';
                        break;
                    case '可吸入颗粒物':
                        color = 'hsl(280,100%,50%)';
                        break;
                    default:
                        break;
                }
            } else {
                function getAQITYPE(aqi) {
                    if (aqi <= 50) {
                        return '优';
                    } else if (aqi <= 100) {
                        return '良';
                    } else if (aqi <= 150) {
                        return '轻度污染';
                    } else if (aqi <= 200) {
                        return '中度污染';
                    } else if (aqi <= 300) {
                        return '重度污染';
                    } else {
                        return '严重污染';
                    }
                }
                color = getColor(getAQITYPE(type));
            }
            return color;
        }


        option = {
            backgroundColor: 'rgb(33,33,33)',
            title: {
                text: '京津冀空气质量',
                subtext: '数据来源：中国环境监测总站',
                sublink: 'http://123.127.175.45:8082/',
                left: 10,
                bottom: '400',
                textStyle: {
                    color: textColor,
                }
            },
            grid: {
                backgroundColor: backgroundColor,
                show: false,
                containLabel: true,
                zlevel: '2',
                left: '10',
                bottom: '180',
                width: '30%',
                height: '30%',
                borderWidth: 0
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    show: false
                },
                show: false
            },
           /* bmap:{
                //http://lbsyun.baidu.com/apiconsole/custommap
            },*/
            geo: {
                roam: true,
                zoom: 7,
                scaleLimit: {

                    min: 4,
                    max: 9
                },
                center: [116.3985, 39.5],
                map: 'map',
                itemStyle: {
                    areaColor: backgroundColor,
                    borderColor: 'gray',
                    borderType: 'dotted'
                },
                label: {
                    show: true,
                    rotate:90,
                    backgroundColor: backgroundColor,
                    borderColor: '#ddd',
                    borderWidth: 2,
                    fontFamily: fontFamily,
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: textColor,
                    padding: 3
                },
                regions: regions,
                silent: true
            },
            visualMap: [{
                seriesIndex: 0,
                backgroundColor: 'whitesmoke',
                bottom: 2,
                left: 2,
                borderRadius: 0,
                itemWidth: 38,
                itemGap: 4,
                padding: 5,
                inverse: true,
                pieces: [{
                        value: 'NaN',
                        label: '暂无',
                        color: getColor('暂无'),
                    }, {
                        min: 0,
                        max: 50,
                        label: '优',
                        color: getColor('优')
                    },
                    {
                        min: 51,
                        max: 100,
                        label: '良',
                        color: getColor('良')
                    }, {
                        min: 101,
                        max: 150,
                        label: '轻度',
                        color: getColor('轻度污染')
                    }, {
                        min: 151,
                        max: 200,
                        label: '中度',
                        color: getColor('中度污染')
                    }, {
                        min: 201,
                        max: 300,
                        label: '重度',
                        color: getColor('重度污染')
                    }, {
                        min: 301,
                        label: '严重',
                        color: getColor('严重污染')
                    },

                ],
                textStyle: {
                    color: 'black'
                }
            }],
            tooltip: {
                trigger: 'item',
                confine: true,
                enterable: true,
                textStyle: {
                    fontFamily: fontFamily
                }
            },
            series: [{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                symbol: 'rect',
                symbolSize: function(a, p) {
                    var size = [12 * (p.name.length), 25];
                    return size;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                tooltip: {
                    formatter: function(params) {
                        const data = params.data.data;
                        var $ul = $('<ul><li><b>' + params.name + '</b></li></ul>');
                        $ul.css({
                            'font-size': 'small',
                            'border-radius': '5px',
                            'list-style': 'none',
                            padding: '10px',
                            'box-shadow': '0 1px 4px #ddd',
                            //'background-color': 'rgba(0,0,0,.21)',
                            color: params.color
                        });
                        $ul.children().first().css({
                            'font-size': 'large',
                            'border-bottom': '1px double',
                        });
                        if (data.code) {
                            $ul.data('code', data.code)
                        }
                        let option = {
                            title: {
                                text: data.name
                            },
                            grid: {
                                show: true
                            },
                            yAxis: {
                                type: 'category',
                                axisLabel: {
                                    rotate: -45,
                                    textStyle: {
                                        color: 'white'
                                    },
                                    show: false,
                                },
                                data: [],
                                show: false,
                                name: data.name,
                                nameLocation: 'end',
                                nameTextStyle: {
                                    color: 'white'
                                },
                            },
                            series: [{}, {
                                zlevel: '2',
                                type: 'bar',
                                gridIndex: 0,
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideLeft',
                                        formatter: '{b}:{c}',
                                        fontFamily: fontFamily,
                                        fontWeight: 'bold'
                                    }
                                },
                                data: []
                            }]
                        };

                        $ul.children().first().find('b').css({
                            'color': 'whitesmoke',
                            'text-shadow': '0 1px 2px black'
                        })
                        if (data.aqi) {
                            $ul.children().first().append('<b style="font-size: xx-large;float: right;">' + data.aqi + '</b>');
                            option.yAxis.data.push('AQI');
                            option.series[1].data.push({
                                value: data.aqi,
                                itemStyle: {
                                    color: getColor(data.aqi)
                                }
                            });
                        }
                        if (data.pm2_5) {
                            $('<li><b>细颗粒物：</b>' + data.pm2_5 + '<span>μg/m<sup>3</sup></span></li>').appendTo($ul);
                            option.yAxis.data.push('细颗粒物');
                            option.series[1].data.push({
                                value: data.pm2_5,
                                itemStyle: {
                                    color: getColor('细颗粒物')
                                }
                            });
                        }
                        if (data.pm10) {
                            $('<li><b>可吸入颗粒物：</b>' + data.pm10 + '<span>μg/m<sup>3</sup></span></li>').appendTo($ul);
                            option.yAxis.data.push('可吸入颗粒物');
                            option.series[1].data.push({
                                value: data.pm10,
                                itemStyle: {
                                    color: getColor('可吸入颗粒物')
                                }
                            });

                        }
                        if (data.o3) {
                            $('<li><b>臭氧：</b>' + data.o3 + '<span>μg/m<sup>3</sup></span></li>').appendTo($ul);

                            option.yAxis.data.push('臭氧');
                            option.series[1].data.push({
                                value: data.o3,
                                itemStyle: {
                                    color: getColor('臭氧')
                                }
                            });
                        }
                        if (data.co) {
                            $('<li><b>一氧化碳：</b>' + data.co + '<span>mg/m<sup>3</sup></span></li>').appendTo($ul);
                            option.yAxis.data.push('一氧化碳');
                            option.series[1].data.push({
                                value: data.co,
                                itemStyle: {
                                    color: getColor('一氧化碳')
                                }
                            });
                        }
                        if (data.so2) {
                            $('<li><b>二氧化硫：</b>' + data.so2 + '<span>μg/m<sup>3</sup></span></li>').appendTo($ul);
                            option.yAxis.data.push('二氧化硫');
                            option.series[1].data.push({
                                value: data.so2,
                                itemStyle: {
                                    color: getColor('二氧化硫')
                                }
                            });
                        }
                        /*if (data.pubtime) {
                            $('<li><b>监测时间：</b>' + new Date(data.pubtime).toLocaleString() + '</li>').appendTo($ul);
                        }*/
                        $ul.children('li').find('span').css('font-size', 'xx-small');
                        myChart.setOption(option);
                        return $ul.prop('outerHTML');
                    }
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        //position: 'right',
                        show: true,
                        backgroundColor: backgroundColor,
                        borderColor: '#ddd',
                        borderWidth: 1,
                        fontFamily: fontFamily,
                        fontWeight: 'bold',
                        fontSize: 13,
                        color: 'whitesmoke',
                        padding: 4
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                }
            }]


        };
        const $tbody = $('<table></table>');
        $tbody.css({
            position: 'fixed',
            right: '12px',
            bottom: '21px',
            'z-index': 9,
            'box-shadow': '0 1px 4px #ddd',
            'background-color': backgroundColor
        });
        $tbody.appendTo($body);


        option.series[0].data = [{
            "name": "张家口市",
            "o3": 61,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "40.812435",
            "pm2_5": 10,
            "so2": 6,
            "aqi": 23,
            "pm10": 23,
            "code": "131200",
            "co": 0.2,
            "longitude": "114.89305"
        }, {
            "name": "秦皇岛市",
            "o3": 55,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "39.9366",
            "pm2_5": 15,
            "so2": 10,
            "aqi": 28,
            "pm10": 28,
            "code": "130300",
            "co": 0.8,
            "longitude": "119.60482"
        }, {
            "name": "承德市",
            "o3": 58,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "40.96416",
            "pm2_5": 7,
            "so2": 6,
            "aqi": 31,
            "pm10": 31,
            "code": "130800",
            "co": 0.3,
            "longitude": "117.92774"
        }, {
            "name": "北京市",
            "o3": 53,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "40.045975",
            "pm2_5": 9,
            "so2": 3,
            "aqi": 32,
            "pm10": 32,
            "code": "110000",
            "co": 0.3,
            "longitude": "116.39825"
        }, {
            "name": "石家庄市",
            "o3": 57,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "38.03179861125",
            "pm2_5": 15,
            "so2": 12,
            "aqi": 34,
            "pm10": 34,
            "code": "130100",
            "co": 0.7,
            "longitude": "114.4970652875"
        }, {
            "name": "唐山市",
            "o3": 55,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "39.6449533333333",
            "pm2_5": 19,
            "so2": 8,
            "aqi": 36,
            "pm10": 36,
            "code": "130200",
            "co": 0.6,
            "longitude": "118.182916666667"
        }, {
            "name": "廊坊市",
            "o3": 58,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "39.54584",
            "pm2_5": 12,
            "so2": 4,
            "aqi": 40,
            "pm10": 40,
            "code": "131000",
            "co": 0.5,
            "longitude": "116.72406"
        }, {
            "name": "沧州市",
            "o3": 65,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "38.3157666666667",
            "pm2_5": 16,
            "so2": 12,
            "aqi": 45,
            "pm10": 45,
            "code": "130900",
            "co": 0.5,
            "longitude": "116.871566666667"
        }, {
            "name": "天津市",
            "o3": 51,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "39.0985566666667",
            "pm2_5": 8,
            "so2": 6,
            "aqi": 51,
            "pm10": 52,
            "code": "120000",
            "co": 0.4,
            "longitude": "117.319033333333"
        }, {
            "name": "保定市",
            "o3": 54,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "38.8762666666667",
            "pm2_5": 24,
            "so2": 18,
            "aqi": 52,
            "pm10": 53,
            "code": "130600",
            "co": 0.6,
            "longitude": "115.4852"
        }, {
            "name": "衡水市",
            "o3": 55,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "37.74335",
            "pm2_5": 28,
            "so2": 12,
            "aqi": 54,
            "pm10": 57,
            "code": "131100",
            "co": 0.6,
            "longitude": "115.6743"
        }, {
            "name": "邢台市",
            "o3": 52,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "37.0771",
            "pm2_5": 31,
            "so2": 14,
            "aqi": 54,
            "pm10": 58,
            "code": "130500",
            "co": 0.5,
            "longitude": "114.506675"
        }, {
            "name": "邯郸市",
            "o3": 49,
            "pubtime": "2018-12-28 14:00:00",
            "latitude": "36.60786",
            "pm2_5": 32,
            "so2": 18,
            "aqi": 64,
            "pm10": 77,
            "code": "130400",
            "co": 0.8,
            "longitude": "114.513875"
        }].filter(function(item) {
            return item.latitude && item.longitude;
        }).map(function(item, index) {
            item.value = [item.longitude, item.latitude].concat(item.aqi);
            var $tr = $('<tr><td>' + (index + 1) + '</td><td>' + item.name + '</td><td>' + (item.aqi ? item.aqi : '--') + '</td></tr>');
            $tr.appendTo($tbody);

            $tr.children().not(':eq(1)').css({
                'text-align': 'center'
            });
            $tr.children().css({
                'border-bottom': '1px dotted'
            });
            $tr.children().last().css('background-color', getColor(item.aqi));
            return {
                name: item.name,
                value: item.value,
                data: item
            };
        });
        myChart.setOption(option)

    });
})