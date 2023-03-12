var data = [{
    name: '成都',
    value1: 59.86,
    value2: 42.65,
    value3: 76,
    value4: 41.52,
    value5: 15.72,
    value6: 37.16
}, {
    name: '福州',
    value1: 55.90,
    value2: 43.69,
    value3: 65.08,
    value4: 59.59,
    value5: 9.77,
    value6: 41.19
}, {
    name: '广州',
    value1: 33.71,
    value2: 25.37,
    value3: 42.80,
    value4: 59.94,
    value5: 10,
    value6: 37.72
}, {
    name: '杭州',
    value1: 64.97,
    value2: 68.07,
    value3: 61.20,
    value4: 62.38,
    value5: 41.47,
    value6: 49.90
}, {
    name: '南昌',
    value1: 56.12,
    value2: 22.22,
    value3: 60,
    value4: 43.06,
    value5: 15.15,
    value6: 54.82
}, {
    name: '南京',
    value1: 49.56,
    value2: 37.08,
    value3: 60.33,
    value4: 83.76,
    value5: 2.73,
    value6: 44.45
}, {
    name: '青岛',
    value1: 62.06,
    value2: 38.82,
    value3: 56.29,
    value4: 40.06,
    value5: 6.27,
    value6: 52.34
}, {
    name: '厦门',
    value1: 46.29,
    value2: 48.71,
    value3: 63.15,
    value4: 37.13,
    value5: 9,
    value6: 39.43
}, {
    name: '深圳',
    value1: 65.21,
    value2: 30.70,
    value3: 45.20,
    value4: 29.64,
    value5: 11.72,
    value6: 33.61
}, {
    name: '无锡',
    value1: 52.73,
    value2: 38.06,
    value3: 48.80,
    value4: 21.50,
    value5: 1.27,
    value6: 47.49
}, {
    name: '珠海',
    value1: 52.08,
    value2: 29.69,
    value3: 54.67,
    value4: 56.21,
    value5: 35.16,
    value6: 35.15
}];

var resultdata0 = [];
var resultdata1 = [];
var resultdata2 = [];
var resultdata3 = [];
var resultdata4 = [];
var resultdata5 = [];
var resultdata6 = [];
var sum0 = 0;
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;
var sum5 = 0;
var sum6 = 0;
var titledata = [];
for (var i = 0; i < data.length; i++) {
    var d0 = {
        name: data[i].name,
        value: data[i].value1 + data[i].value2
    };
    var d1 = {
        name: data[i].name,
        value: data[i].value1
    };
    var d2 = {
        name: data[i].name,
        value: data[i].value2
    };
    var d3 = {
        name: data[i].name,
        value: data[i].value3
    };
    var d4 = {
        name: data[i].name,
        value: data[i].value4
    };
    var d5 = {
        name: data[i].name,
        value: data[i].value5
    };
    var d6 = {
        name: data[i].name,
        value: data[i].value6
    };
    titledata.push(data[i].name)
    resultdata0.push(d0);
    resultdata1.push(d1);
    resultdata2.push(d2);
    resultdata3.push(d3);
    resultdata4.push(d4);
    resultdata5.push(d5);
    resultdata6.push(d6);

    sum1 += data[i].value1;
    sum2 += data[i].value2;

    sum3 += data[i].value3;

    sum4 += data[i].value4;

    sum5 += data[i].value5;

    sum6 += data[i].value6;
    sum0 += sum1 + sum2 + sum3 + sum4 + sum5 + sum6;
}

function NumDescSort(a, b) {
    return a.value - b.value;
}

resultdata0.sort(NumDescSort);
resultdata1.sort(NumDescSort);
resultdata2.sort(NumDescSort);
resultdata3.sort(NumDescSort);
resultdata4.sort(NumDescSort);
resultdata5.sort(NumDescSort);
resultdata6.sort(NumDescSort);

var geoCoordMap = {
    "海门": [121.15, 31.89],
    "鄂尔多斯": [109.781327, 39.608266],
    "招远": [120.38, 37.35],
    "舟山": [122.207216, 29.985295],
    "齐齐哈尔": [123.97, 47.33],
    "盐城": [120.13, 33.38],
    "赤峰": [118.87, 42.28],
    "青岛": [120.33, 36.07],
    "乳山": [121.52, 36.89],
    "金昌": [102.188043, 38.520089],
    "泉州": [118.58, 24.93],
    "莱西": [120.53, 36.86],
    "日照": [119.46, 35.42],
    "胶南": [119.97, 35.88],
    "南通": [121.05, 32.08],
    "拉萨": [91.11, 29.97],
    "云浮": [112.02, 22.93],
    "梅州": [116.1, 24.55],
    "文登": [122.05, 37.2],
    "上海": [121.48, 31.22],
    "攀枝花": [101.718637, 26.582347],
    "威海": [122.1, 37.5],
    "承德": [117.93, 40.97],
    "厦门": [118.1, 24.46],
    "汕尾": [115.375279, 22.786211],
    "潮州": [116.63, 23.68],
    "丹东": [124.37, 40.13],
    "太仓": [121.1, 31.45],
    "曲靖": [103.79, 25.51],
    "烟台": [121.39, 37.52],
    "福州": [119.3, 26.08],
    "瓦房店": [121.979603, 39.627114],
    "即墨": [120.45, 36.38],
    "抚顺": [123.97, 41.97],
    "玉溪": [102.52, 24.35],
    "张家口": [114.87, 40.82],
    "阳泉": [113.57, 37.85],
    "莱州": [119.942327, 37.177017],
    "湖州": [120.1, 30.86],
    "汕头": [116.69, 23.39],
    "昆山": [120.95, 31.39],
    "宁波": [121.56, 29.86],
    "湛江": [110.359377, 21.270708],
    "揭阳": [116.35, 23.55],
    "荣成": [122.41, 37.16],
    "连云港": [119.16, 34.59],
    "葫芦岛": [120.836932, 40.711052],
    "常熟": [120.74, 31.64],
    "东莞": [113.75, 23.04],
    "河源": [114.68, 23.73],
    "淮安": [119.15, 33.5],
    "泰州": [119.9, 32.49],
    "南宁": [108.33, 22.84],
    "营口": [122.18, 40.65],
    "惠州": [114.4, 23.09],
    "江阴": [120.26, 31.91],
    "蓬莱": [120.75, 37.8],
    "韶关": [113.62, 24.84],
    "嘉峪关": [98.289152, 39.77313],
    "广州": [113.23, 23.16],
    "延安": [109.47, 36.6],
    "太原": [112.53, 37.87],
    "清远": [113.01, 23.7],
    "中山": [113.38, 22.52],
    "昆明": [102.73, 25.04],
    "寿光": [118.73, 36.86],
    "盘锦": [122.070714, 41.119997],
    "长治": [113.08, 36.18],
    "深圳": [114.07, 22.62],
    "珠海": [113.52, 22.3],
    "宿迁": [118.3, 33.96],
    "咸阳": [108.72, 34.36],
    "铜川": [109.11, 35.09],
    "平度": [119.97, 36.77],
    "佛山": [113.11, 23.05],
    "海口": [110.35, 20.02],
    "江门": [113.06, 22.61],
    "章丘": [117.53, 36.72],
    "肇庆": [112.44, 23.05],
    "大连": [121.62, 38.92],
    "临汾": [111.5, 36.08],
    "吴江": [120.63, 31.16],
    "石嘴山": [106.39, 39.04],
    "沈阳": [123.38, 41.8],
    "苏州": [120.62, 31.32],
    "茂名": [110.88, 21.68],
    "嘉兴": [120.76, 30.77],
    "长春": [125.35, 43.88],
    "胶州": [120.03336, 36.264622],
    "银川": [106.27, 38.47],
    "张家港": [120.555821, 31.875428],
    "三门峡": [111.19, 34.76],
    "锦州": [121.15, 41.13],
    "南昌": [115.89, 28.68],
    "柳州": [109.4, 24.33],
    "三亚": [109.511909, 18.252847],
    "自贡": [104.778442, 29.33903],
    "吉林": [126.57, 43.87],
    "阳江": [111.95, 21.85],
    "泸州": [105.39, 28.91],
    "西宁": [101.74, 36.56],
    "宜宾": [104.56, 29.77],
    "呼和浩特": [111.65, 40.82],
    "成都": [104.06, 30.67],
    "大同": [113.3, 40.12],
    "镇江": [119.44, 32.2],
    "桂林": [110.28, 25.29],
    "张家界": [110.479191, 29.117096],
    "宜兴": [119.82, 31.36],
    "北海": [109.12, 21.49],
    "西安": [108.95, 34.27],
    "金坛": [119.56, 31.74],
    "东营": [118.49, 37.46],
    "牡丹江": [129.58, 44.6],
    "遵义": [106.9, 27.7],
    "绍兴": [120.58, 30.01],
    "扬州": [119.42, 32.39],
    "常州": [119.95, 31.79],
    "潍坊": [119.1, 36.62],
    "重庆": [106.54, 29.59],
    "台州": [121.420757, 28.656386],
    "南京": [118.78, 32.04],
    "滨州": [118.03, 37.36],
    "贵阳": [106.71, 26.57],
    "无锡": [120.29, 31.59],
    "本溪": [123.73, 41.3],
    "克拉玛依": [84.77, 45.59],
    "渭南": [109.5, 34.52],
    "马鞍山": [118.48, 31.56],
    "宝鸡": [107.15, 34.38],
    "焦作": [113.21, 35.24],
    "句容": [119.16, 31.95],
    "北京": [116.46, 39.92],
    "徐州": [117.2, 34.26],
    "衡水": [115.72, 37.72],
    "包头": [110, 40.58],
    "绵阳": [104.73, 31.48],
    "乌鲁木齐": [87.68, 43.77],
    "枣庄": [117.57, 34.86],
    "杭州": [120.19, 30.26],
    "淄博": [118.05, 36.78],
    "鞍山": [122.85, 41.12],
    "溧阳": [119.48, 31.43],
    "库尔勒": [86.06, 41.68],
    "安阳": [114.35, 36.1],
    "开封": [114.35, 34.79],
    "济南": [117, 36.65],
    "德阳": [104.37, 31.13],
    "温州": [120.65, 28.01],
    "九江": [115.97, 29.71],
    "邯郸": [114.47, 36.6],
    "临安": [119.72, 30.23],
    "兰州": [103.73, 36.03],
    "沧州": [116.83, 38.33],
    "临沂": [118.35, 35.05],
    "南充": [106.110698, 30.837793],
    "天津": [117.2, 39.13],
    "富阳": [119.95, 30.07],
    "泰安": [117.13, 36.18],
    "诸暨": [120.23, 29.71],
    "郑州": [113.65, 34.76],
    "哈尔滨": [126.63, 45.75],
    "聊城": [115.97, 36.45],
    "芜湖": [118.38, 31.33],
    "唐山": [118.02, 39.63],
    "平顶山": [113.29, 33.75],
    "邢台": [114.48, 37.05],
    "德州": [116.29, 37.45],
    "济宁": [116.59, 35.38],
    "荆州": [112.239741, 30.335165],
    "宜昌": [111.3, 30.7],
    "义乌": [120.06, 29.32],
    "丽水": [119.92, 28.45],
    "洛阳": [112.44, 34.7],
    "秦皇岛": [119.57, 39.95],
    "株洲": [113.16, 27.83],
    "石家庄": [114.48, 38.03],
    "莱芜": [117.67, 36.19],
    "常德": [111.69, 29.05],
    "保定": [115.48, 38.85],
    "湘潭": [112.91, 27.87],
    "金华": [119.64, 29.12],
    "岳阳": [113.09, 29.37],
    "长沙": [113, 28.21],
    "衢州": [118.88, 28.97],
    "廊坊": [116.7, 39.53],
    "菏泽": [115.480656, 35.23375],
    "合肥": [117.27, 31.86],
    "武汉": [114.31, 30.52],
    "大庆": [125.03, 46.58]
};

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



//传统业务	收入盈利	团队	现金流管理	业务均衡	用户生态
option = {
    title: [{
        text: 'TOP11城市维度排名',
        left: 'center'
    }],
     color:['red', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    geo: {
        map: 'china',
        top: 100,
        bottom: "24%",
        zoom: 0.90,
        center: [117.98561551896913, 31.205000490896193],
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#036880',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['传统业务', '收入盈利', '团队', '现金流管理', '业务均衡', '用户生态'],
        selectedMode: 'single',
    },
    visualMap: {
        min: 0,
        max: 100,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        colorLightness: [0.2, 100],
        color: ['#c05050', '#e5cf0d', '#5ab1ef'],
        dimension: 0
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    grid: {
        right: 40,
        top: 40,
        bottom: 40,
        width: '28%'
    },
    xAxis: [{
        position: 'top',
        type: 'value',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'category',
        data: [],
        axisTick: {
            alignWithLabel: true
        }
    }],
    series: [{
            z: 0,
            name: '传统业务',
            type: 'effectScatter',
            legendHoverLink: true,
            coordinateSystem: 'geo',
            data: convertData(resultdata1),
            symbolSize: function(val) {
                return Math.max(val[2] / 3, 0);
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    textStyle: {
                        color: '#43a6bf',
                        fontSize: 15
                    },

                    show: true
                },
                emphasis: {
                    formatter: '{b}',
                    show: true
                }
            },
            tooltip: {
                formatter: function(v) {
                    return "得分:" + v.data.value[2];
                }
            },
            itemStyle: {
                normal: {
                    color: '#5dde2b',
                    shadowBlur: 50,

                    shadowColor: '#43a6bf'
                }
            },
            zlevel: 1
        }, {
            type: 'effectScatter',
            name: '收入盈利',
            z: 1,
            legendHoverLink: true,
            coordinateSystem: 'geo',
            data: convertData(resultdata2),
            symbolSize: function(val) {
                return Math.max(val[2] / 3, 0);
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            tooltip: {
                formatter: function(v) {
                    return "得分:" + v.data.value[2];
                }
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    textStyle: {
                        color: '#43a6bf',
                        fontSize: 15
                    },

                    show: true
                },
                emphasis: {
                    formatter: '{b}',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#5dde2b',
                    shadowBlur: 50,

                    shadowColor: '#43a6bf'
                }
            },
            zlevel: 1
        }, {
            type: 'effectScatter',
            z: 1,
            name: '团队',
            legendHoverLink: true,
            coordinateSystem: 'geo',
            data: convertData(resultdata3),
            symbolSize: function(val) {
                return Math.max(val[2] / 3, 0);
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            tooltip: {
                formatter: function(v) {
                    return "得分:" + v.data.value[2];
                }
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    textStyle: {
                        color: '#43a6bf',
                        fontSize: 15
                    },

                    show: true
                },
                emphasis: {
                    formatter: '{b}',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#5dde2b',
                    shadowBlur: 50,

                    shadowColor: '#43a6bf'
                }
            },
            zlevel: 1
        }, {
            type: 'effectScatter',
            legendHoverLink: true,
            name: '现金流管理',
            z: 1,
            tooltip: {
                formatter: function(v) {
                    return "得分:" + v.data.value[2];
                }
            },
            coordinateSystem: 'geo',
            data: convertData(resultdata4),
            symbolSize: function(val) {
                return Math.max(val[2] / 3, 0);
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    textStyle: {
                        color: '#43a6bf',
                        fontSize: 15
                    },

                    show: true
                },
                emphasis: {
                    formatter: '{b}',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#5dde2b',
                    shadowBlur: 50,

                    shadowColor: '#43a6bf'
                }
            },
            zlevel: 1
        }, {
            type: 'effectScatter',
            legendHoverLink: true,
            z: 1,
            tooltip: {
                formatter: function(v) {
                    return "得分:" + v.data.value[2];
                }
            },
            name: '业务均衡',
            coordinateSystem: 'geo',
            data: convertData(resultdata5),
            symbolSize: function(val) {
                return Math.max(val[2] / 3, 0);
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    textStyle: {
                        color: '#43a6bf',
                        fontSize: 15
                    },

                    show: true
                },
                emphasis: {
                    formatter: '{b}',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#5dde2b',
                    shadowBlur: 50,

                    shadowColor: '#43a6bf'
                }
            },
            zlevel: 1
        }, {
            type: 'effectScatter',
            legendHoverLink: true,
            z: 1,
            name: '用户生态',
            coordinateSystem: 'geo',
            data: convertData(resultdata6),
            symbolSize: function(val) {
                return Math.max(val[2] / 3, 0);
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            tooltip: {
                formatter: function(v) {
                    return "得分:" + v.data.value[2];
                }
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    textStyle: {
                        color: '#43a6bf',
                        fontSize: 15
                    },

                    show: true
                },
                emphasis: {
                    formatter: '{b}',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#5dde2b',
                    shadowBlur: 50,

                    shadowColor: '#43a6bf'
                }
            },
            zlevel: 1
        }






        , {
            name: '传统业务',
            z: 2,
            type: 'bar',
            
            label: {
                normal: {
                    show: true,
                    formatter: '{b}     {c}',
                    position: [-40, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'none',
            itemStyle: {
                emphasis: {
                    color: "#43a6bf"
                }
            },
            data: resultdata1
        }, {
            name: '收入盈利',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}     {c}',
                    position: [-40, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata2
        }, {
            name: '团队',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}     {c}',
                    position: [-40, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata3
        }, {
            name: '现金流管理',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}     {c}',
                    position: [-40, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata4
        }, {
            name: '业务均衡',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}     {c}',
                    position: [-40, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata5
        }, {
            name: '用户生态',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}     {c}',
                    position: [-40, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata6
        },


        //'团队','现金流管理','业务均衡','用户生态'





        {
            name: '传统业务',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata1
        }, {
            name: '收入盈利',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata2
        }, {
            name: '团队',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata3
        }, {
            name: '现金流管理',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata4
        }, {
            name: '业务均衡',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            //'团队','现金流管理','业务均衡','用户生态'
            data: resultdata5
        }, {
            name: '用户生态',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata6
        }
    ]
};