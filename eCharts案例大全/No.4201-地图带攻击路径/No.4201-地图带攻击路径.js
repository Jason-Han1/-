var chinaGeoCoordMap = {
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
    '上海': [121.4648, 31.2891]
};
var chinaDatas = [
    [{
        name: '黑龙江',
        value: 1
    }],
    [{
        name: '内蒙古',
        value: 1
    }],
    [{
        name: '吉林',
        value: 1
    }],
    [{
        name: '辽宁',
        value: 1
    }],
    [{
        name: '河北',
        value: 1
    }],
    [{
        name: '天津',
        value: 1
    }],
    [{
        name: '山西',
        value: 1
    }],
    [{
        name: '陕西',
        value: 1
    }],
    [{
        name: '甘肃',
        value: 1
    }],
    [{
        name: '宁夏',
        value: 1
    }],
    [{
        name: '青海',
        value: 1
    }],
    [{
        name: '新疆',
        value: 1
    }],
    [{
        name: '西藏',
        value: 1
    }],
    [{
        name: '四川',
        value: 1
    }],
    [{
        name: '上海',
        value: 1
    }]
];
var datasa = [{
        name: "北京",
        value: 177
    },
    {
        name: "天津",
        value: 42
    },
    {
        name: "河北",
        value: 102
    },
    {
        name: "山西",
        value: 81
    },
    {
        name: "内蒙古",
        value: 47
    },
    {
        name: "辽宁",
        value: 67
    },
    {
        name: "吉林",
        value: 82
    },
    {
        name: "黑龙江",
        value: 66
    },
    {
        name: "上海",
        value: 24
    },
    {
        name: "江苏",
        value: 92
    },
    {
        name: "浙江",
        value: 114
    },
    {
        name: "安徽",
        value: 109
    },
    {
        name: "福建",
        value: 116
    },
    {
        name: "江西",
        value: 91
    },
    {
        name: "山东",
        value: 119
    },
    {
        name: "河南",
        value: 137
    },
    {
        name: "湖北",
        value: 116
    },
    {
        name: "湖南",
        value: 114
    },
    {
        name: "重庆",
        value: 91
    },
    {
        name: "四川",
        value: 125
    },
    {
        name: "贵州",
        value: 62
    },
    {
        name: "云南",
        value: 83
    },
    {
        name: "西藏",
        value: 9
    },
    {
        name: "陕西",
        value: 80
    },
    {
        name: "甘肃",
        value: 56
    },
    {
        name: "青海",
        value: 10
    },
    {
        name: "宁夏",
        value: 18
    },
    {
        name: "新疆",
        value: 67
    },
    {
        name: "广东",
        value: 123
    },
    {
        name: "广西",
        value: 59
    },
    {
        name: "海南",
        value: 14
    },
    {
        name: "台湾",
        value: 14
    },
];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = [108.384366, 30.439702];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: '重庆',
                coords: [fromCoord, toCoord],
                value: dataItem[0].value,
                visualMap: false,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#f00' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#fff' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            });
        }
    }
    return res;
};
var series = [];
var color = ['#57df1c'];
[
    ['重庆', chinaDatas]
].forEach(function(item, i) {
    console.log(item)
    series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6, //箭头指向速度，值越小速度越快
                trailLength: 00, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                color: 'red', // 特效颜色
                symbolSize: 6, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1,
                    curveness: 0.3,
                    type: 'dashed',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#f00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#fff' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'middle',
                    formatter: '{b}'
                }
            },
            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                //涟漪特效
                color: '#ffdede',
                period: 6, //动画时间，值越小速度越快
                brushType: "fill", //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: "bottom", //显示位置
                    //offset: [5, 0], //偏移设置
                    formatter: "{b}", //圆环显示文字
                    textStyle: {
                        color: "#fff",
                        fontSize: '12px'
                    }
                },
            },
            symbol: "circle",
            symbolSize: 5,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#f00'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: undefined == chinaGeoCoordMap[dataItem[0].name] ? '' : chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
                    visualMap: false
                };
            }),
        },
        //被攻击点
        {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                color: '#ffdede',
                period: 6,
                brushType: "fill",
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    formatter: "{b}",
                    textStyle: {
                        color: "#fff"
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
                normal: {
                    show: true,
                    color: "#fff"
                }
            },
            data: [{
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10]),
            }],
        }, {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
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
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: datasa
        }
    );
});
option = {
    tooltip: {
        trigger: "item",
        formatter: function(params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
                return params.marker + params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
                return params.data.fromName + " -> " + params.data.toName + "<br />" + params.data.value;
            } else {
                return params.name;
            }
        },
    },
    visualMap: {
        show: true,
        min: 0,
        max: 200,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [3],
        inRange: {
            color: ['#00467F', '#A5CC82'] // 蓝绿

        }
    },
    geo: {
        map: 'china',
        roam: true, //是否允许缩放
        zoom: 1.14,
        label: {
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                show: false,
                color: "rgba(48,97,186，0)", //地图背景色
                borderColor: "rgba(0, 0, 0,0)" //省市边界线
            },
            emphasis: {
                show: false,
                color: "#2B91B7" //悬浮背景
            }
        }
    },
    series: series
};