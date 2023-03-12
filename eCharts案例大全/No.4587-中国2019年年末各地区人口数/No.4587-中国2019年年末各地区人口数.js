var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '台湾': [121.5135, 25.0308],
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
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
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891],

    };
  
   // 2019数据
    var data = [{
            name: "安徽",
            value: 6365.9
        },
        {
            name: "北京",
            value: 2153.6
        },
        {
            name: "福建",
            value: 3973
        },
        {
            name: "甘肃",
            value: 2647.43
        },
        {
            name: "广东",
            value: 11521
        },
        {
            name: "广西",
            value: 4960
        },
        {
            name: "贵州",
            value: 3622.95
        },
        {
            name: "海南",
            value: 944.72
        },
        {
            name: "河北",
            value: 7591.97
        },
        {
            name: "河南",
            value: 9639.75
        },
        {
            name: "黑龙江",
            value: 3751.3
        },
        {
            name: "湖北",
            value: 5927
        },
        {
            name: "湖南",
            value: 6918.38
        },
        {
            name: "吉林",
            value: 2690.73
        },
        {
            name: "江苏",
            value: 8070
        },
        {
            name: "江西",
            value: 4666.1318
        },
        {
            name: "辽宁",
            value: 4351.7
        },
        {
            name: "内蒙古",
            value: 2539.56
        },
        {
            name: "宁夏",
            value: 694.66
        },
        {
            name: "青海",
            value: 607.82
        },
        {
            name: "山东",
            value: 10070.21
        },
        {
            name: "山西",
            value: 3729
        },
        {
            name: "陕西",
            value: 3876.21
        },
        {
            name: "上海",
            value: 2428.14
        },
        {
            name: "四川",
            value: 8375
        },
        {
            name: "天津",
            value: 1561.83
        },
        {
            name: "西藏",
            value: 350.6
        },
        {
            name: "新疆",
            value: 2523.22
        },
        {
            name: "云南",
            value: 4858
        },
        {
            name: "浙江",
            value: 5850
        },
        {
            name: "重庆",
            value: 3124.32
        },


    ];
    var max = 480,
        min = 9; // todo 
    var maxSize4Pin = 100,
        minSize4Pin = 20;

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



    option = {
        backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#0f378f' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#00091b' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        title: {
            top: 20,
            text: '中国2019年年末各地区人口数',
            subtext: '单位：万人',
            x: 'center',
            textStyle: {
                color: '#ccc'
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
        /*   legend: {
               orient: 'vertical',
               y: 'bottom',
               x: 'right',
                data:['pm2.5'],
               textStyle: {
                   color: '#fff'
               }
           },*/
        
          visualMap: {
            min: 350.6,
            max: 11521,
            left: '10%',
            bottom: '5%',
            calculable: true,
            seriesIndex: [0],
            inRange: {
                color: ['#24CFF4', '#2E98CA', '#1E62AC']
            },
            textStyle: {
                color: '#24CFF4'
            }
        },

        geo: {
            map: 'china',
            show: true,
            roam: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#3a7fd5',
                    borderColor: '#0a53e9', //线
                    shadowColor: '#092f8f', //外发光
                    shadowBlur: 20
                },
                emphasis: {
                    areaColor: '#0a2dae', //悬浮区背景
                }
            }
        },
        series: [{

                symbolSize:5,
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
                        color: '#bbb'
                    }
                },
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),

            },
            {
                type: 'map',
                map: 'china',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#FFFFFF',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            {
                name: 'Top 5',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: [60, 60],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 9,
                        },
                        formatter(value) {
                            return value.data.value[2]
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#D8BC37', //标志颜色
                    }
                },
                data: convertData(data),
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                zlevel: 1
            },

        ]
    };
    myChart.setOption(option);
});