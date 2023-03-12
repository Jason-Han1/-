  var geoCoordMap = {
        '上海': [119.1803, 31.2891],
        "福建": [119.4543, 25.9222],
        "重庆": [108.384366, 30.439702],
        '北京': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "吉林": [125.8154, 44.2584],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        '内蒙古': [110.3467, 41.4899],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '黑龙江': [127.9688, 45.368],
        '台湾': [121.4648, 25.5630]
    };
    var chinaDatas = [{
            name: '北京',
            value: 86
        },
        {
            name: '福建',
            value: 65
        },
        {
            name: '广东',
            value: 53
        },
        {
            name: '上海',
            value: 48
        },

        {
            name: '河北',
            value: 2
        },
        {
            name: '天津',
            value: 6
        },
        {
            name: '山西',
            value: 12
        },
        {
            name: '陕西',
            value: 2
        },
        {
            name: '甘肃',
            value: 4
        },
        {
            name: '宁夏',
            value: 5
        },
        {
            name: '青海',
            value: 3
        },
        {
            name: '新疆',
            value: 0.4
        },
        {
            name: '西藏',
            value: 0.3
        },
        {
            name: '四川',
            value: 22
        },
        {
            name: '重庆',
            value: 12
        },
        {
            name: '山东',
            value: 9
        },
        {
            name: '河南',
            value: 0.9
        },
        {
            name: '江苏',
            value: 24
        },
        {
            name: '安徽',
            value: 15
        },
        {
            name: '湖北',
            value: 6
        },
        {
            name: '浙江',
            value: 15
        },
        {
            name: '内蒙古',
            value: 0.3
        },
        {
            name: '江西',
            value: 34
        },
        {
            name: '湖南',
            value: 12
        },
        {
            name: '贵州',
            value: 0.8
        },
        {
            name: '广西',
            value: 16
        },
        {
            name: '海南',
            value: 37
        },
        {
            name: '辽宁',
            value: 0.2
        },
        {
            name: '吉林',
            value: 0.4
        },
        {
            name: '云南',
            value: 34
        },
        {
            name: '黑龙江',
            value: 5
        },
        {
            name: '台湾',
            value: 43
        }
    ];
    var convertData = function (data) {
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
    var option = {
        backgroundColor:'#000',
        geo: {
            show: true,
            map: 'china',
            zoom: 1,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderWidth: 3,
                    borderColor: '#00FEFF',
                    shadowColor: 'rgba(3,221,255,0.8)',
                    shadowBlur: 30
                }
            }
        },
        series: [{
                type: 'map',
                map: 'china',
                zoom: 1,
                geoIndex: 1,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#00177B',
                        borderColor: '#0073DA',
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: '#00177B'
                    }
                },
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                z: 10,
                data:convertData(chinaDatas.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(2, 3)),
                symbolSize: 20,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            return '{fline|'+' '+params.data.name+' '+'重点关注'+'}';
                        },
                        position: 'top',
                        distance:20,
                        backgroundColor: 'rgba(3,219,255,.8)',
                        padding: [0, 0],
                        borderRadius: 3,
                        lineHeight: 24,
                        verticalAlign:'middle',
                        color: '#fff',
                        z:11,
                        rich:{
                            fline:{
                                padding: [0, 10],
                                color:'#ffffff'
                            }
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(3,219,255,1)',
                        shadowBlur: 8
                    }
                },
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                z: 10,
                data:convertData(chinaDatas.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(1, 2)),
                symbolSize: 20,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            console.log(params);
                            return '{fline|'+' '+params.data.name+' '+'重点关注'+'}';
                        },
                        position: 'top',
                        distance:20,
                        backgroundColor: 'rgba(248,231,28,.7)',
                        padding: [0, 0],
                        borderRadius: 3,
                        lineHeight: 24,
                        verticalAlign:'middle',
                        color: '#fff',
                        rich:{
                            fline:{
                                padding: [0, 10],
                                color:'#ffffff'
                            }
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(248,231,28,0.9)',
                        shadowBlur: 8
                    }
                },
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                z: 10,
                data:convertData(chinaDatas.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 1)),
                symbolSize: 20,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            return '{fline|'+' '+params.data.name+' '+'重点关注'+'}';
                        },
                        position: 'top',
                        distance:20,
                        backgroundColor: 'rgba(219,90,39,.8)',
                        padding: [0, 0],
                        borderRadius: 3,
                        lineHeight: 24,
                        verticalAlign:'middle',
                        color: '#fff',
                        rich:{
                            fline:{
                                padding: [0, 10],
                                color:'#ffffff'
                            }
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(219,90,39,0.9)',
                        shadowBlur: 8
                    }
                },
            },
        ]
    };