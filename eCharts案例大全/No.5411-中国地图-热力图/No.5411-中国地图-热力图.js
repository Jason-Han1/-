var uploadedDataURL = "/asset/get/s/data-1603348199465-jUA2uMD54.json";

var data = [{
    "name": "天津市",
    "value": [185, 88, 34, 20, 34]
}, {
    "name": "江苏省",
    "value": [875, 636, 659, 37, 659]
}, {
    "name": "海南省",
    "value": [134, 102, 148, 14, 148]
}, {
    "name": "湖南省",
    "value": [857, 559, 591, 47, 591]
}, {
    "name": "内蒙古自治区",
    "value": [279, 211, 192, 21, 192]
}, {
    "name": "上海市",
    "value": [282, 190, 182, 14, 182]
}, {
    "name": "山西省",
    "value": [441, 342, 321, 25, 321]
}, {
    "name": "重庆市",
    "value": [671, 441, 424, 47, 424]
}, {
    "name": "湖北省",
    "value": [1011, 771, 750, 59, 750]
}, {
    "name": "陕西省",
    "value": [323, 212, 207, 19, 207]
}, {
    "name": "西藏自治区",
    "value": [0, 0, 0, 0, 1]
}, {
    "name": "浙江省",
    "value": [312, 217, 213, 18, 213]
}, {
    "name": "山东省",
    "value": [1852, 1380, 1351, 90, 1351]
}, {
    "name": "北京市",
    "value": [183, 121, 113, 15, 113]
}, {
    "name": "安徽省",
    "value": [636, 460, 441, 33, 441]
}, {
    "name": "广东省",
    "value": [1299, 784, 819, 83, 819]
}, {
    "name": "甘肃省",
    "value": [206, 132, 132, 12, 132]
}, {
    "name": "宁夏回族自治区",
    "value": [18, 12, 13, 1, 13]
}, {
    "name": "福建省",
    "value": [577, 392, 414, 33, 414]
}, {
    "name": "青海省",
    "value": [26, 13, 11, 2, 11]
}, {
    "name": "河南省",
    "value": [1089, 813, 794, 58, 794]
}, {
    "name": "新疆维吾尔自治区",
    "value": [0, 0, 0, 0, 0]
}, {
    "name": "云南省",
    "value": [231, 151, 143, 16, 143]
}, {
    "name": "黑龙江省",
    "value": [518, 426, 401, 27, 401]
}, {
    "name": "辽宁省",
    "value": [1270, 810, 792, 52, 792]
}, {
    "name": "贵州省",
    "value": [337, 251, 266, 21, 266]
}, {
    "name": "广西壮族自治区",
    "value": [262, 154, 174, 13, 174]
}, {
    "name": "四川省",
    "value": [1046, 677, 643, 60, 643]
}, {
    "name": "河北省",
    "value": [1058, 740, 724, 50, 724]
}, {
    "name": "江西省",
    "value": [280, 191, 214, 17, 214]
}, {
    "name": "吉林省",
    "value": [155, 124, 118, 7, 118]
}]
var resp = [{
    "name": "山东省",
    "value": 1351
}, {
    "name": "广东省",
    "value": 819
}, {
    "name": "河南省",
    "value": 794
}, {
    "name": "辽宁省",
    "value": 792
}, {
    "name": "湖北省",
    "value": 750
}, {
    "name": "河北省",
    "value": 724
}, {
    "name": "江苏省",
    "value": 659
}, {
    "name": "四川省",
    "value": 643
}, {
    "name": "湖南省",
    "value": 591
}, {
    "name": "安徽省",
    "value": 441
}, {
    "name": "重庆市",
    "value": 424
}, {
    "name": "福建省",
    "value": 414
}, {
    "name": "黑龙江省",
    "value": 401
}, {
    "name": "山西省",
    "value": 321
}, {
    "name": "贵州省",
    "value": 266
}, {
    "name": "江西省",
    "value": 214
}, {
    "name": "浙江省",
    "value": 213
}, {
    "name": "陕西省",
    "value": 207
}, {
    "name": "内蒙古自治区",
    "value": 192
}, {
    "name": "上海市",
    "value": 182
}, {
    "name": "广西壮族自治区",
    "value": 174
}, {
    "name": "海南省",
    "value": 148
}, {
    "name": "云南省",
    "value": 143
}, {
    "name": "甘肃省",
    "value": 132
}, {
    "name": "吉林省",
    "value": 118
}, {
    "name": "北京市",
    "value": 113
}, {
    "name": "天津市",
    "value": 84
}, {
    "name": "宁夏回族自治区",
    "value": 13
}, {
    "name": "青海省",
    "value": 11
}, {
    "name": "西藏自治区",
    "value": 1
}, {
    "name": "新疆维吾尔自治区",
    "value": 0
}]
var provinceCoordMap = {
    '上海': [121.4648, 31.2891],
    '山西': [112.549248, 37.857014],
    '新疆': [84.738775, 40.791562],
    '甘肃': [103.5901, 36.3043],
    '内蒙古': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '广西': [108.80244, 23.776873],
    '江西': [115.278288, 27.937219],
    '合肥': [117.29, 32.0581],
    '陕西': [108.4131, 34.8706],
    '黑龙江': [128.569752, 47.108444],
    '天津': [117.4219, 39.4189],
    '安徽': [117.0123, 32.2121],
    '四川': [101.848261, 30.646339],
    '西藏': [88.786181, 30.963961],
    '云南': [101.811467, 24.956574],
    '湖南': [111.598829, 28.328652],
    '青海': [96.8038, 36.2207],
    '贵州': [106.6992, 26.7682],
    '重庆': [107.293861, 29.719279],
    '吉林': [125.8154, 43.6584],
    '香港': [115.1215, 22.1235],
    '澳门': [112.1211, 22.2111],
    '台湾省': [120.1111, 23.2435],
    '湖北': [112.077158, 30.995665],
    '河南': [113.475353, 34.233691],
    '江苏': [119.546461, 32.223755],
    '山东': [117.485964, 36.106822],
    '福建': [118.001088, 26.224563],
    '浙江': [119.693639, 29.397571],
    '河北': [114.983931, 38.168723],
    '广东': [113.144202, 22.825228],
    '辽宁': [122.82118, 41.43163],
    '海南': [109.611921, 19.093147],
    '宁夏': [105.969256, 37.497501],

    '上海市': [121.4648, 31.2891],
    '山西省': [112.549248, 37.857014],
    '新疆维吾尔自治区': [84.738775, 40.791562],
    '甘肃省': [103.5901, 36.3043],
    '内蒙古自治区': [110.3467, 41.4899],
    '北京市': [116.4551, 40.2539],
    '广西壮族自治区': [108.80244, 23.776873],
    '江西省': [115.278288, 27.937219],
    '陕西省': [108.4131, 34.8706],
    '黑龙江省': [128.569752, 47.108444],
    '天津市': [117.4219, 39.4189],
    '安徽省': [117.0123, 32.2121],
    '四川省': [101.848261, 30.646339],
    '西藏自治区': [88.786181, 30.963961],
    '云南省': [101.811467, 24.956574],
    '湖南省': [111.598829, 28.328652],
    '青海省': [96.8038, 36.2207],
    '贵州省': [106.6992, 26.7682],
    '重庆市': [107.293861, 29.719279],
    '吉林省': [125.8154, 43.6584],
    '香港特别行政区': [115.1215, 22.1235],
    '澳门特别行政区': [112.1211, 22.2111],
    '台湾': [120.1111, 23.2435],
    '湖北省': [112.077158, 30.995665],
    '河南省': [113.475353, 34.233691],
    '江苏省': [119.546461, 32.223755],
    '山东省': [117.485964, 36.106822],
    '福建省': [118.001088, 26.224563],
    '浙江省': [119.693639, 29.397571],
    '河北省': [114.983931, 38.168723],
    '广东省': [113.144202, 22.825228],
    '辽宁省': [122.82118, 41.43163],
    '海南省': [109.611921, 19.093147],
    '宁夏回族自治区': [105.969256, 37.497501]
}
var provinceNameMap = [{
        en: 'anhui',
        cn: '安徽省',
        cn_short: '安徽'
    },
    {
        en: 'aomen',
        cn: '澳门',
        cn_short: '澳门'
    },
    {
        en: 'beijing',
        cn: '北京市',
        cn_short: '北京'
    },
    {
        en: 'chongqing',
        cn: '重庆市',
        cn_short: '重庆'
    },
    {
        en: 'fujian',
        cn: '福建省',
        cn_short: '福建'
    },
    {
        en: 'gansu',
        cn: '甘肃省',
        cn_short: '甘肃'
    },
    {
        en: 'guangdong',
        cn: '广东省',
        cn_short: '广东'
    },
    {
        en: 'guangxi',
        cn: '广西壮族自治区',
        cn_short: '广西'
    },
    {
        en: 'guizhou',
        cn: '贵州省',
        cn_short: '贵州'
    },
    {
        en: 'hainan',
        cn: '海南省',
        cn_short: '海南'
    },
    {
        en: 'hebei',
        cn: '河北省',
        cn_short: '河北'
    },
    {
        en: 'heilongjiang',
        cn: '黑龙江省',
        cn_short: '黑龙江'
    },
    {
        en: 'henan',
        cn: '河南省',
        cn_short: '河南'
    },
    {
        en: 'hubei',
        cn: '湖北省',
        cn_short: '湖北'
    },
    {
        en: 'hunan',
        cn: '湖南省',
        cn_short: '湖南'
    },
    {
        en: 'jiangsu',
        cn: '江苏省',
        cn_short: '江苏'
    },
    {
        en: 'jiangxi',
        cn: '江西省',
        cn_short: '江西'
    },
    {
        en: 'jilin',
        cn: '吉林省',
        cn_short: '吉林'
    },
    {
        en: 'liaoning',
        cn: '辽宁省',
        cn_short: '辽宁'
    },
    {
        en: 'neimenggu',
        cn: '内蒙古自治区',
        cn_short: '内蒙古'
    },
    {
        en: 'ningxia',
        cn: '宁夏回族自治区',
        cn_short: '宁夏'
    },
    {
        en: 'qinghai',
        cn: '青海省',
        cn_short: '青海'
    },
    {
        en: 'shandong',
        cn: '山东省',
        cn_short: '山东'
    },
    {
        en: 'shanghai',
        cn: '上海市',
        cn_short: '上海'
    },
    {
        en: 'shaanxi',
        cn: '陕西省',
        cn_short: '陕西'
    },
    {
        en: 'shanxi',
        cn: '山西省',
        cn_short: '山西'
    },
    {
        en: 'sichuan',
        cn: '四川省',
        cn_short: '四川'
    },
    {
        en: 'taiwan',
        cn: '台湾',
        cn_short: '台湾'
    },
    {
        en: 'tianjin',
        cn: '天津市',
        cn_short: '天津'
    },
    {
        en: 'xianggang',
        cn: '香港',
        cn_short: '香港'
    },
    {
        en: 'xinjiang',
        cn: '新疆维吾尔自治区',
        cn_short: '新疆'
    },
    {
        en: 'xizang',
        cn: '西藏自治区',
        cn_short: '西藏'
    },
    {
        en: 'yunnan',
        cn: '云南省',
        cn_short: '云南'
    },
    {
        en: 'zhejiang',
        cn: '浙江省',
        cn_short: '浙江'
    }
]
var top1 = []
var res = []
var numlist = []
var max = 0
var lastMonthTop10 = []
var hotmap = []
resp.forEach(ele => {
    var obj = {}
    var name_show = provinceNameMap.filter((item) => item.cn === ele.name)[0] ? provinceNameMap.filter((item) => item.cn === ele.name)[0].cn_short : ele.name
    obj = {
        name: name_show,
        value: ele.value
    }
    numlist.push(ele.value)
    res.push(obj)
})
numlist.sort(function(a, b) {
    return a - b
}) // 排序
max = numlist[numlist.length - 1] // 最大值
lastMonthTop10 = res
hotmap = res

function convertData(data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
        var geoCoord = provinceCoordMap[data[i].name]
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value[1])
            })
        }
    }
    return res
}

function getprovinceName(type, oldname) {
    let name
    let res
    switch (type) {
        case 'cn':
            res = provinceNameMap.filter((item) => item.en === oldname)[0]
            name = res.cn
            break;
        case 'cn_short':
            res = provinceNameMap.filter((item) => item.cn === oldname)[0]
            name = res.cn_short
            break;
        case 'en':
            res = provinceNameMap.filter((item) => item.cn === oldname)[0]
            name = res.en
            break;
    }
    return name
}
var datares = data
datares = convertData(datares)
datares.sort(function(a, b) {
    return b.value[2] - a.value[2]
})
top1 = datares.slice(0, 1)
$.getJSON(uploadedDataURL, function(geoJson) {
    $('body').css({
        'background': '#2a6d87',
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'background-size': 'cover',
        '-webkit-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-position': 'center 0',
        //'writing-mode': 'vertical-rl'
    });

    echarts.registerMap('china', geoJson);
    option = {
        title: {
            text: '中国地图-热力图',
            textStyle: {
                color: '#fff',
                fontSize: 25
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.seriesType === 'map') {
                    let tooltip_show = data.filter((item) => getprovinceName('cn_short', item.name) === params.name)
                    if (tooltip_show.length > 0) {
                        tooltip_show = tooltip_show[0]
                        return '今日' + tooltip_show.name + ': <br>' + '数值1：' + tooltip_show.value[0] + '<br>' + '数值2：' + tooltip_show.value[1] + '<br>' + '数值3：' + tooltip_show.value[2] + '<br>' + '数值4：' + tooltip_show.value[3]
                    } else {
                        return '今日' + params.name + ': <br>数值1：暂无 <br>数值2：暂无<br>数值3：暂无<br>数值4：暂无'
                    }
                }
            }
        },
        geo: {
            map: 'china',
            label: {
                normal: {
                    show: false, // 是否显示对应地名
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: false, // 是否开启鼠标缩放和平移漫游
            zoom: 1.2,
            aspectScale: 0.85, // 地图长宽比例
            itemStyle: {
                normal: {
                    // areaColor: '#012a74',
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderColor: '#00ebff',
                    shadowColor: 'rgba(255, 255, 255, .5)',
                    shadowOffsetX: -2,
                    shadowOffsetY: -2,
                    shadowBlur: 15
                },
                emphasis: {
                    areaColor: '#389BB7'
                }
            }
        },
        visualMap: {
            min: 0,
            max: max || 5,
            left: 'left',
            top: 'bottom',
            itemWidth: 15,
            itemHeight: 100,
            text: ['高', '低'],
            calculable: true,
            seriesIndex: '0',
            show: true,
            inRange: {
                color: [
                    '#1488CC', '#2B32B2', '#ba00ff', '#ff0066'
                ],
                colorAlpha: 0.8
            },
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
                type: 'map',
                map: 'china',
                zoom: 1.2,
                aspectScale: 0.85,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 1,
                                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                            }, {
                                offset: 0,
                                color: 'rgba(147, 235, 248, .5)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        borderColor: 'rgba(93, 255, 249, .6)',
                        shadowColor: 'rgba(255, 255, 255, .5)',
                        shadowOffsetX: -2,
                        shadowOffsetY: -2,
                        shadowBlur: 20
                    },
                    emphasis: {
                        areaColor: '#389BB7'
                    }
                }
            },
            {
                // 区域热力值
                name: '样式',
                type: 'map',
                map: 'china',
                zoom: 1.2,
                aspectScale: 0.85, // 地图长宽比例
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(93, 255, 249, 0)',
                        borderColor: '#00ebff'
                    },
                    emphasis: {
                        areaColor: '#389BB7'
                    }
                },
                data: hotmap
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke',
                    scale: 4, // 波纹缩放比例
                    period: 3 // 速度
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#f4e925'
                    }
                },
                symbolSize: this.symbolSizeSmall || 10,
                data: data.map(function(dataItem) {
                    if (dataItem.value[1] > 0) {
                        return {
                            name: dataItem.name,
                            // 经纬度 授权码 携入申请量 完成 待携转 今日携转量
                            value: provinceCoordMap[dataItem.name].concat(dataItem.value)
                        }
                    }
                }) || []
            },
            {
                name: 'Top 1',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: top1,
                symbolSize: this.symbolSizeBig || 20,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'left',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#0cef70',
                        shadowBlur: 10,
                        shadowColor: '#0cef70'
                    }
                },
                zlevel: 2
            }
        ]
    };
    myChart.setOption(option);
});