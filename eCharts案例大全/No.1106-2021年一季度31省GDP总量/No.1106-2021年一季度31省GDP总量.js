
//导入数据
    var outname = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南'];
    var outvalue = [89.159, 34.040, 94.589, 59.953, 87.505, 133.067, 59.586, 58.449, 26.925, 102.240, 95.291, 180.555, 34.025, 258.784, 163.470, 65.748, 98.727, 55.251, 22.071, 44.641, 42.226, 63.529, 27.715, 107.506, 43.365, 339.855, 7.439, 4.757, 118.592, 9.525, 13.960];
    var outdata = [];
// 
        var max = 8000,
        min = 10;
    var maxSize4Pin = 150,
        minSize4Pin = 20;

    for (var i = 0; i < outname.length; i++) {
        outdata.push({
            name: outname[i],
            value: outvalue[i]
        })
    }

    var geoCoordMap = {};
    /*获取地图数据*/
    var mapFeatures = echarts.getMap('china').geoJson.features;
    //  console.log(mapFeatures)
    mapFeatures.forEach(function(v) {
        console.info(v)
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;

    });
    var convertData = function(outdata) {
        var res = [];
        for (var i = 0; i < outdata.length; i++) {
            var geoCoord = geoCoordMap[outdata[i].name];
            if (geoCoord) {
                res.push({
                    name: outdata[i].name,
                    value: geoCoord.concat(outdata[i].value),
                });
            }
        }
        return res;
    };

//背景颜色
    option = {
        backgroundColor: '#DAE4E5',
//提示框
        tooltip: {
            show: true,
            formatter: function(params) {
                if (params.value.length > 1) {
                    return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value[2] + '百亿元&nbsp;&nbsp;';
                } else {
                    return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '百亿元&nbsp;&nbsp;';
                }
            },

        },
//标题样本样式
        title: {
            top: 20,
            text: '2021年一季度31省GDP总量',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#000000'
            }
        },

        geo: {
            map: 'china',
            show: true,
            roam: false,
            label: {
                emphasis: {
                    show: false
                }
            },
            layoutSize: "100%",
            itemStyle: {
                normal: {
                    borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, 
                    [
                        {
                        offset: 0,
                        color: '#006CA7'
                    }, 
                    {
                        offset: 1,
                        color: '#F0F5F5'
                    }
                ], false),
                    borderWidth: 0.5,
                    shadowColor: 'rgba(10,76,139,1)',
                    shadowOffsetY: 0,
                    shadowBlur: 60
                }
            }
        },
        series: [{
            type: 'map',
            map: 'china',
            aspectScale: 0.75,
            //zoom:1.1,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                }
            },
            itemStyle: {
                normal: {
                    areaColor: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#3E747B' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0D5159' // 100% 处的颜色
                        }],
                    },
//地图边界颜色
                    borderColor: '#001D21',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: {

                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#073684' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#74A6AB' // 100% 处的颜色
                        }],
                    },
                }
            },
            data: outdata,
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
                brushType: 'stroke'
            },
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(5,80,151,0.2)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(5,80,151,0.8)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,108,255,0.7)'
                        }],
                        global: false // 缺省为 false
                    },
                }

            },
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                    fontWeight: 'bold',
                    position: 'inside',
                    formatter: function(para) {
                        return '{cnNum|' + para.data.name + '}'
                    },
                    rich: {
                        cnNum: {
                            fontSize: 13,
                            color: '#F0F5F5',
                        }
                    }
                },
            },
            symbol: 'circle',
            symbolSize: function(val) {
                if (val[2] === 0) {
                    return 0;
                }
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = maxSize4Pin - a * max;
                return a * val[2] + b * 1;
            },
            data: convertData(outdata),
            zlevel: 1,
        }]
    };