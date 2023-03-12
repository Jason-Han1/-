$('<div class="back">返 回</div>').appendTo(
    $('#chart-panel')
);

$('.back').css({
    'position': 'absolute',
    'left': '25px',
    'top': '25px',
    'color': 'rgb(179, 239, 255)',
    'font-size': '16px',
    cursor: 'pointer',
    'z-index': '100'
})

$('.back').click(function() {
    if (parentInfo.length === 1) {
        return;
    }
    myChart.showLoading()
    parentInfo.pop()
    getGeoJson(parentInfo[parentInfo.length - 1].code)
})



var geoJson = {
    features: []
}

var parentInfo = [{
    cityName: '全国',
    level: 'china',
    code: 100000
}]

var timeTitle = ['10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8']
getGeoJson(100000)


function getGeoJson(adcode) {
    AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {
        var districtExplorer = new DistrictExplorer()
        districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
            if (error) {javascript:;
                console.error(error);
                return;
            }
            let Json = areaNode.getSubFeatures()
            if (Json.length > 0) {
                geoJson.features = Json
            } else if (Json.length === 0) {
                geoJson.features = geoJson.features.filter(item => item.properties.adcode == adcode)
                if (geoJson.features.length === 0) return
            }
            getMapData()
        });
    })
}

//获取数据    拼接，获取近五年的数据
function getMapData() {
     const mapData = [
        {
            "name": "青海省",
            "value": 2983.3048524592427,
            "level": "province",
            "cityCode": 630000
        }, {
            "name": "吉林省",
            "value": 2959.2463688315747,
            "level": "province",
            "cityCode": 220000
        }, {
            "name": "黑龙江省",
            "value": 2959.178718812589,
            "level": "province",
            "cityCode": 230000
        }, {
            "name": "贵州省",
            "value": 2858.6789806023394,
            "level": "province",
            "cityCode": 520000
        }, {
            "name": "上海市",
            "value": 2843.096833606342,
            "level": "province",
            "cityCode": 310000
        }, {
            "name": "江西省",
            "value": 2751.6483389204977,
            "level": "province",
            "cityCode": 360000
        }, {
            "name": "山东省",
            "value": 2718.7679846534443,
            "level": "province",
            "cityCode": 370000
        }, {
            "name": "湖南省",
            "value": 2532.564233676725,
            "level": "province",
            "cityCode": 430000
        }, {
            "name": "安徽省",
            "value": 2409.668140637018,
            "level": "province",
            "cityCode": 340000
        }, {
            "name": "北京市",
            "value": 2255.462183846231,
            "level": "province",
            "cityCode": 110000
        }, {
            "name": "海南省",
            "value": 2173.1543156242155,
            "level": "province",
            "cityCode": 460000
        }, {
            "name": "浙江省",
            "value": 2097.5994824633253,
            "level": "province",
            "cityCode": 330000
        }, {
            "name": "天津市",
            "value": 1580.3501393263246,
            "level": "province",
            "cityCode": 120000
        }, {
            "name": "新疆维吾尔自治区",
            "value": 1554.4750533682477,
            "level": "province",
            "cityCode": 650000
        }, {
            "name": "西藏自治区",
            "value": 1551.4412913554345,
            "level": "province",
            "cityCode": 540000
        }, {
            "name": "辽宁省",
            "value": 1274.1176670000025,
            "level": "province",
            "cityCode": 210000
        }, {
            "name": "台湾省",
            "value": 1238.0339612705866,
            "level": "province",
            "cityCode": 710000
        }, {
            "name": "湖北省",
            "value": 1096.4835151753957,
            "level": "province",
            "cityCode": 420000
        }, {
            "name": "山西省",
            "value": 1091.9852147176646,
            "level": "province",
            "cityCode": 140000
        }, {
            "name": "广东省",
            "value": 1080.453819241357,
            "level": "province",
            "cityCode": 440000
        }, {
            "name": "河南省",
            "value": 1037.9121531812843,
            "level": "province",
            "cityCode": 410000
        }, {
            "name": "福建省",
            "value": 880.5542725330653,
            "level": "province",
            "cityCode": 350000
        }, {
            "name": "四川省",
            "value": 680.1758456201347,
            "level": "province",
            "cityCode": 510000
        }, {
            "name": "云南省",
            "value": 577.1151680087661,
            "level": "province",
            "cityCode": 530000
        }, {
            "name": "宁夏回族自治区",
            "value": 564.3971876251948,
            "level": "province",
            "cityCode": 640000
        }, {
            "name": "甘肃省",
            "value": 439.0259400077368,
            "level": "province",
            "cityCode": 620000
        }, {
            "name": "河北省",
            "value": 419.7815882423199,
            "level": "province",
            "cityCode": 130000
        }, {
            "name": "陕西省",
            "value": 375.3413856375156,
            "level": "province",
            "cityCode": 610000
        }, {
            "name": "澳门特别行政区",
            "value": 155.79857787302132,
            "level": "province",
            "cityCode": 820000
        }, {
            "name": "内蒙古自治区",
            "value": 73.30315291206003,
            "level": "province",
            "cityCode": 150000
        }, {
            "name": "江苏省",
            "value": 50.730242810774094,
            "level": "province",
            "cityCode": 320000
        }, {
            "name": "香港特别行政区",
            "value": 34.46993969299128,
            "level": "province",
            "cityCode": 810000
        }, {
            "name": "广西壮族自治区",
            "value": 14.17476652327565,
            "level": "province",
            "cityCode": 450000
        }, {
            "name": "重庆市",
            "value": 0.8685779809038952,
            "level": "province",
            "cityCode": 500000
        }
    ]
    const sum = 111111
    const pointData = [{
        "name": "北京市",
        "value": [116.405285, 39.904989, 1286.2885765930978],
        "cityCode": 110000
    }, {
        "name": "天津市",
        "value": [117.190182, 39.125596, 1438.1524781957098],
        "cityCode": 120000
    }, {
        "name": "河北省",
        "value": [114.502461, 38.045474, 1616.412384315042],
        "cityCode": 130000
    }, {
        "name": "山西省",
        "value": [112.549248, 37.857014, 871.2879620328589],
        "cityCode": 140000
    }, {
        "name": "内蒙古自治区",
        "value": [111.670801, 40.818311, 2408.624788163257],
        "cityCode": 150000
    }, {
        "name": "辽宁省",
        "value": [123.429096, 41.796767, 2900.75270134033],
        "cityCode": 210000
    }, {
        "name": "吉林省",
        "value": [125.3245, 43.886841, 1437.095494033697],
        "cityCode": 220000
    }, {
        "name": "黑龙江省",
        "value": [126.642464, 45.756967, 2142.2714831906674],
        "cityCode": 230000
    }, {
        "name": "上海市",
        "value": [121.472644, 31.231706, 2690.8121695012296],
        "cityCode": 310000
    }, {
        "name": "江苏省",
        "value": [118.767413, 32.041544, 90.1037448387092],
        "cityCode": 320000
    }, {
        "name": "浙江省",
        "value": [120.153576, 30.287459, 2805.927176075527],
        "cityCode": 330000
    }, {
        "name": "安徽省",
        "value": [117.283042, 31.86119, 1033.9567749510265],
        "cityCode": 340000
    }, {
        "name": "福建省",
        "value": [119.306239, 26.075302, 2661.944864907178],
        "cityCode": 350000
    }, {
        "name": "江西省",
        "value": [115.892151, 28.676493, 1884.3595178046317],
        "cityCode": 360000
    }, {
        "name": "山东省",
        "value": [117.000923, 36.675807, 2354.2444264349806],
        "cityCode": 370000
    }, {
        "name": "河南省",
        "value": [113.665412, 34.757975, 2561.0729188262058],
        "cityCode": 410000
    }, {
        "name": "湖北省",
        "value": [114.298572, 30.584355, 2020.0464532115154],
        "cityCode": 420000
    }, {
        "name": "湖南省",
        "value": [112.982279, 28.19409, 393.0939464512297],
        "cityCode": 430000
    }, {
        "name": "广东省",
        "value": [113.280637, 23.125178, 2341.8961608335626],
        "cityCode": 440000
    }, {
        "name": "广西壮族自治区",
        "value": [108.320004, 22.82402, 1971.3160894719774],
        "cityCode": 450000
    }, {
        "name": "海南省",
        "value": [110.33119, 20.031971, 667.9173732191856],
        "cityCode": 460000
    }, {
        "name": "重庆市",
        "value": [106.504962, 29.533155, 424.91008227581204],
        "cityCode": 500000
    }, {
        "name": "四川省",
        "value": [104.065735, 30.659462, 488.9481808365865],
        "cityCode": 510000
    }, {
        "name": "贵州省",
        "value": [106.713478, 26.578343, 2410.221845388686],
        "cityCode": 520000
    }, {
        "name": "云南省",
        "value": [102.712251, 25.040609, 726.5999979582824],
        "cityCode": 530000
    }, {
        "name": "西藏自治区",
        "value": [91.132212, 29.660361, 2208.6740655369986],
        "cityCode": 540000
    }, {
        "name": "陕西省",
        "value": [108.948024, 34.263161, 1736.7350174435087],
        "cityCode": 610000
    }, {
        "name": "甘肃省",
        "value": [103.823557, 36.058039, 896.2127177839492],
        "cityCode": 620000
    }, {
        "name": "青海省",
        "value": [101.778916, 36.623178, 2729.7735894888438],
        "cityCode": 630000
    }, {
        "name": "宁夏回族自治区",
        "value": [106.278179, 38.46637, 1146.2827101631633],
        "cityCode": 640000
    }, {
        "name": "新疆维吾尔自治区",
        "value": [87.617733, 43.792818, 1204.9773707295383],
        "cityCode": 650000
    }, {
        "name": "台湾省",
        "value": [121.509062, 25.044332, 2016.1856418414018],
        "cityCode": 710000
    }, {
        "name": "香港特别行政区",
        "value": [114.173355, 22.320048, 1152.1638602322766],
        "cityCode": 810000
    }, {
        "name": "澳门特别行政区",
        "value": [113.54909, 22.198951, 16.545942804256477],
        "cityCode": 820000
    }
    ]
    initEchartMap(mapData, pointData)
}


//渲染echarts
function initEchartMap(mapData, pointData) {

    //这里做个切换，全国的时候才显示南海诸岛  只有当注册的名字为china的时候才会显示南海诸岛
    if (parentInfo.length === 1) {
        echarts.registerMap('china', geoJson); //注册
    } else {
        echarts.registerMap('map', geoJson); //注册
    }
    const xData = [],
        yData = []
    var min = 1
    var max = 10000
    if (mapData.length === 1) {
        min = 0
    }
    mapData.forEach(c => {
        xData.unshift(c.name)
        yData.unshift(c.value)
    })
    var options = {
        backgroundColor: '#012248',
        title: [{
            left: 'center',
            top: 10,
            text: parentInfo[parentInfo.length - 1].cityName + '游客来源',
            textStyle: {
                color: 'rgb(179, 239, 255)',
                fontSize: 16
            },
        },

        ],

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        grid: {
            right: '2%',
            top: '12%',
            bottom: '8%',
            width: '20%'
        },

        geo: {
            map: parentInfo.length === 1 ? 'china' : 'map',
            zoom: 1.1,
            roam: true,
            center: parentInfo.length === 1 ? ['118.83531246', '32.0267395887'] : false,
            tooltip: {
                trigger: 'item',
                formatter: (p) => {
                    let val = p.value[2];
                    if (window.isNaN(val)) {
                        val = 0;
                    }
                    let txtCon =
                        "<div style='text-align:left'>" + p.name + ":<br />销售额：" + val + '万</div>';
                    return txtCon;
                }
            },
            label: {
                normal: {
                    show: true,
                    color: "rgb(249, 249, 249)", //省份标签字体颜色
                    formatter: p => {
                        switch (p.name) {
                            case '内蒙古自治区':
                                p.name = "内蒙古"
                                break;
                            case '西藏自治区':
                                p.name = "西藏"
                                break;
                            case '新疆维吾尔自治区':
                                p.name = "新疆"
                                break;
                            case '宁夏回族自治区':
                                p.name = "宁夏"
                                break;
                            case '广西壮族自治区':
                                p.name = "广西"
                                break;
                            case '香港特别行政区':
                                p.name = "香港"
                                break;
                            case '澳门特别行政区':
                                p.name = "澳门"
                                break;
                            default:
                                break;
                        }
                        return p.name;
                    }
                },
                emphasis: {
                    show: true,
                    color: '#f75a00',
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#24CFF4',
                    borderColor: '#53D9FF',
                    borderWidth: 1.3,
                    shadowBlur: 15,
                    shadowColor: 'rgb(58,115,192)',
                    shadowOffsetX: 7,
                    shadowOffsetY: 6,
                },
                emphasis: {
                    areaColor: '#8dd7fc',
                    borderWidth: 1.6,
                    shadowBlur: 25,
                }

            },
        },
        visualMap: {
            min: min,
            max: max,
            left: '3%',
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
        xAxis: {
            type: 'value',
            scale: true,
            position: 'top',
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#455B77'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 2,
                textStyle: {
                    color: '#c0e6f9'
                }
            },
        },
        yAxis: {
            type: 'category',
            nameGap: 16,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#455B77'
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#c0e6f9'
                }
            },
            data: xData
        },
        series: [{
            name: '游客来源',
            type: 'map',
            geoIndex: 0,
            map: parentInfo.length === 1 ? 'china' : 'map',
            roam: true,
            zoom: 1.3,
            tooltip: {
                trigger: "item",
                formatter: p => {
                    let val = p.value;
                    if (p.name == '南海诸岛') return
                    if (window.isNaN(val)) {
                        val = 0;
                    }
                    let txtCon =
                        "<div style='text-align:left'>" + p.name + ":" + val + '人</div>';
                    return txtCon;
                }
            },
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                }
            },
            data: mapData,

        }, {
            name: '散点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
                brushType: 'fill'
            },
            itemStyle: {
                normal: {
                    color: '#F4E925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            // data: pointData[item],
            // symbolSize: 8,
            symbolSize: function (val) {
                let value = val[2]
                if (value == max) {
                    return 27
                }
                return 10
            },
            showEffectOn: 'render', //加载完毕显示特效
        },
            {
                type: 'bar',
                barGap: '-100%',
                barCategoryGap: '60%',
                itemStyle: {
                    normal: {
                        color: '#11AAFE'
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: yData
            }

        ]
    }

    myChart.setOption(options , true)

    myChart.hideLoading()
    //点击前解绑，防止点击事件触发多次
    myChart.off('click');
    myChart.on('click', echartsMapClick);
}

//echarts点击事件
function echartsMapClick(params) {
    if (!params.data) {
        return
    } else {
        //如果当前是最后一级，那就直接return
        if (parentInfo[parentInfo.length - 1].code == params.data.cityCode) {
            return
        }
        myChart.showLoading()
        let data = params.data
        parentInfo.push({
            cityName: data.name,
            level: data.level,
            code: data.cityCode
        })
        getGeoJson(data.cityCode)
    }
}