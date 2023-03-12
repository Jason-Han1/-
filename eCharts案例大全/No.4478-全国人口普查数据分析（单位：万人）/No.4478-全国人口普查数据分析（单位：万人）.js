var uploadedDataURL = "/asset/get/s/data-1609135835510-Lyo_tvYNB.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '甘肃省': [103.855472,36.144781],
        '新疆维吾尔自治区': [81.484359,41.522164],
        "青海省": [95.024769,36.055196],
        '西藏自治区': [87.040342,31.35228],
        "四川省": [102.825223,30.718583],
        "重庆市": [107.019807,29.728002],
        "云南省": [99.992039,24.764258],
        "贵州省": [105.84238,26.96133],
        "山西省": [111.950282,37.870982],
        "陕西省": [108.234028,34.012487],
        "河南省": [113.53245,33.674746],
        "湖南省": [111.324774,27.831665],
        "湖北省": [111.987077,31.051805],
        "广西壮族自治区": [107.240574,23.870695],
        '内蒙古自治区': [110.257731,41.452994],
        '黑龙江省': [127.07286,47.92609],
        "吉林省": [125.343514,43.709587],
        '辽宁省': [121.406493,41.563631],
        "河北省": [114.378725,38.452026],
        "北京市": [116.31964,40.167],
        "天津市": [117.257902,39.085768],
        "山东省": [117.920205,36.368295],
        "江苏省": [119.097632,33.505371],
        "安徽省": [116.853162,31.856156],
        "浙江省": [119.759935,29.115927],
        "上海市": [121.415691,31.115143],
        "江西省": [115.160611,27.175448],
        "福建省": [117.515464,26.183787],
        '广东省': [113.284086,23.12409],
        '海南省': [109.715011,19.190074],
        "台湾省": [120.808581,23.718329],
        '宁夏回族自治区': [106.164332,37.461479]
    }
    var data = [
        {name: '甘肃省', value: 2557.52},
        {name: '新疆维吾尔自治区', value: 2181.58},
        {name: '青海省', value: 562.67},
        {name: '西藏自治区', value: 300.21},
        {name: '四川省', value: 8041.75},
        {name: '重庆市', value: 2884.61},
        {name: '云南省', value: 4596.68},
        {name: '贵州省', value: 3474.86},
        {name: '山西省', value: 3571.21},
        {name: '陕西省', value: 3732.73},
        {name: '河南省', value: 9403.00},
        {name: '湖南省', value: 6570.08},
        {name: '湖北省', value: 5723.77},
        {name: '广西壮族自治区', value: 4602.38},
        {name: '内蒙古自治区', value: 2470.63},
        {name: '黑龙江省', value: 3831.40},
        {name: '吉林省', value: 2745.28},
        {name: '辽宁省', value: 4374.63},
        {name: '河北省', value: 7185.42},
        {name: '北京市', value: 1961.23},
        {name: '天津市', value: 1293.86},
        {name: '山东省', value: 9579.27},
        {name: '江苏省', value: 7866.10},
        {name: '安徽省', value: 5950.05},
        {name: '浙江省', value: 5442.69},
        {name: '上海市', value: 2301.92},
        {name: '江西省', value: 4456.78},
        {name: '福建省', value: 3689.42},
        {name: '广东省', value: 10432.05},
        {name: '海南省', value: 867.15},
        {name: '宁夏回族自治区', value: 630.13}
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


    option = {
        toolbox:{
            show: true,
            feature:{
                saveAsImage:{
                show:true,
                excludeComponents:['toolboxl'],
                pixelRatio:2
                }
            }
        },
        backgroundColor: '#020933',
        title: {
            text: '全国人口普查数据分析（单位：万人）',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            show: false,
            min: 500,
            max: 10000,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            seriesIndex: [1],
            inRange: {
                color: ['#3B5077', '#031525'] 
            }
        },
        geo: {
            show: true,
            map: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'thansparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(173, 200, 185, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series : [
      {
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 230;
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
                    color: '#F4E925'
                }
            }
        },
         {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.80, 
            showLegendSymbol: false,
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
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 230;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#F4E925',
                    shadowBlur: 10,
                    shadowColor: '#05C3F9'
                }
            },
            zlevel: 1
        },
         
    ]
    };
    myChart.setOption(option);
});

