function randomData() {
    return Math.round(Math.random() * 10);
}

var geoCoordMap2 = {
    上海: [121.4648, 31.2891, 23123, 17453, 15343, 12193, 2678.5, 3256.6, 1900.8, 141.7, 2749.5, 55919],
    尼日利亚: [-4.388361, 11.186148, 23123, 17453, 15343, 12187.9, 2075.8, 1000.1, 1774.2, 2084.7, 5987.8, 421209],
    美国洛杉矶: [-118.24311, 34.052713, 23123, 17453, 15343, 12168.1, 5323.9, 3322.3, 1488.6, 2694.3, 5701.4, 541109],
    香港邦泰: [114.195466, 22.282751, 23123, 17453, 15343, 11992.9, 1012, 192.9, 361.5, 2217, 449.7, 223109],
    美国芝加哥: [-87.801833, 41.870975, 23123, 17453, 15343, 11944.1, 4616, 2724.3, 862.2, 1279.1, 2425.2, 511109],
    加纳库马西: [-4.62829, 7.72415, 23123, 17453, 15343, 11783.8, 4417.9, 1589.9, 6144.6, 1453.5, 943.6, 422109],
    英国曼彻斯特: [-1.657222, 51.886863, 23123, 17453, 15343, 11525.9, 5370.9, 2940.6, 1185.3, 3821.3, 104, 353109],
    德国汉堡: [10.01959, 54.38474, 23123, 17453, 15343, 11320.4, 223.2, 1069.1, 6596, 936.7, 280.4, 431049],
    哈萨克斯坦阿拉木图: [45.326912, 41.101891, 23123, 17453, 15343, 11317, 2745.4, 1850.9, 3383.2, 3530.8, 727.1, 254109],
    俄罗斯伊尔库茨克: [89.116876, 67.757906, 23123, 17453, 15343, 11261.7, 4252.1, 1789.6, 2266.9, 1153.1, 5655.3, 191109],
    巴西: [-48.678945, -10.493623, 23123, 17453, 15343, 11046.1, 285.5, 683.1, 2440, 1885.7, 694, 184309],
    埃及达米埃塔: [31.815593, 31.418032, 23123, 17453, 15343, 10937.3, 2789.5, 3090.1, 1652.8, 232.9, 1776.7, 212409],
    西班牙巴塞罗纳: [2.175129, 41.385064, 23123, 17453, 15343, 10431.5, 2156.8, 1435.9, 5850.1, 3007.8, 5016.3, 288039],
    柬埔寨金边: [104.88659, 11.545469, 23123, 17453, 15343, 10431.5, 2156.8, 1435.9, 5850.1, 3007.8, 5016.3, 12909],
    意大利米兰: [9.189948, 45.46623, 23123, 17453, 15343, 9732.8, 2865.1, 3416, 4292.1, 111.8, 4563.1, 349009],
    乌拉圭蒙得维的亚: [-56.162231, -34.901113, 23123, 17453, 15343, 9309.4, 1240.4, 961.9, 1644.2, 2953.7, 1897.7, 222409],
    莫桑比克马普托: [32.608571, -25.893473, 23123, 17453, 15343, 8705.2, 1115.3, 2409.1, 2974.7, 1880.4, 3210, 157409],
    阿尔及利亚阿尔及尔: [3.054275, 36.753027, 23123, 17453, 15343, 8496.9, 2435.1, 66.3, 5730.2, 3027.7, 2178.4, 348363],
    阿联酋迪拜: [55.269441, 25.204514, 23123, 17453, 15343, 8297.1, 1678, 3438.2, 3819.8, 2544.6, 2817.4, 522409],
    匈牙利布达佩斯: [17.108519, 48.179162, 23123, 17453, 15343, 8131.1, 5166.6, 815.6, 4792.1, 2855.3, 160.2, 442309],
    澳大利亚悉尼: [150.993137, -33.675509, 23123, 17453, 15343, 7864.7, 2952.7, 234.1, 1817.7, 624.6, 5397.2, 512209],
    美国加州: [-121.910642, 41.38028, 23123, 17453, 15343, 7823, 1649.7, 2686.7, 2969.2, 1833.2, 4728.3, 516209],
    澳大利亚墨尔本: [144.999416, -37.781726, 23123, 17453, 15343, 7608.7, 3675.7, 1821.2, 2990.2, 2895.4, 5655.9, 526409],
    墨西哥: [-99.094092, 19.365711, 23123, 17453, 15343, 7250.9, 4350.9, 184.1, 6110.5, 330.8, 3529.8, 496409],
    加拿大温哥华: [-123.023921, 49.311753, 23123, 17453, 15343, 6908.1, 4805.5, 120.2, 4052.3, 2623.4, 1092.5, 486409]
};
var SHData = [
    [{
        name: "尼日利亚",
        value: randomData()
    }, {
        name: "上海",
    }],
    [{
        name: "美国洛杉矶",
        value: 2
    }, {
        name: "上海"
    }],
    [{
        name: "香港邦泰",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "美国芝加哥",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "加纳库马西",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "英国曼彻斯特",
        value: 1
    }, {
        name: "上海"
    }],
    [{
        name: "德国汉堡",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "哈萨克斯坦阿拉木图",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "俄罗斯伊尔库茨克",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "巴西",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "埃及达米埃塔",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "西班牙巴塞罗纳",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "柬埔寨金边",
        value: 1
    }, {
        name: "上海"
    }],
    [{
        name: "意大利米兰",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "乌拉圭蒙得维的亚",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "莫桑比克马普托",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "阿尔及利亚阿尔及尔",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "阿联酋迪拜",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "匈牙利布达佩斯",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "澳大利亚悉尼",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "美国加州",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "澳大利亚墨尔本",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "墨西哥",
        value: randomData()
    }, {
        name: "上海"
    }],
    [{
        name: "加拿大温哥华",
        value: randomData()
    }, {
        name: "上海"
    }]
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertDataWorld = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap2[dataItem[0].name];
        var toCoord = geoCoordMap2[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                },
                {
                    coord: toCoord
                }
            ]);
        }
    }
    return res;
};
var convertDataWorld2 = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap2[dataItem[1].name];
        var toCoord = geoCoordMap2[dataItem[0].name];
        if (fromCoord && toCoord) {
            res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                },
                {
                    coord: toCoord
                }
            ]);
        }
    }
    return res;
};

var series = [];
[
    ["上海", SHData]
].forEach(function(item, i) {
    series.push({
            type: "lines",
            zlevel: 2,
            effect: {
                show: true,
                color: "#0bc7f3",
                period: 6, //箭头指向速度，值越小速度越快
                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: planePath, //箭头图标
                symbolSize: 10 //图标大小
            },
            lineStyle: {
                normal: {
                    color: '#0bc7f3',
                    width: 1, //尾迹线条宽度
                    opacity: 0.3, //尾迹线条透明度
                    curveness: 0.3 //尾迹线条曲直度
                }
            },
            data: convertDataWorld(item[1])
        }, {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: "stroke", //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: "right", //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: "{b}" //圆环显示文字
                },
                emphasis: {
                    show: true,
                    color: "#FF6A6A"
                }
            },
            symbol: "circle",
            symbolSize: function(val) {
                return 10; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: true,
                    color: "#FF6A6A"
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap2[dataItem[0].name].concat([dataItem[0].value])
                };
            })
        },
        //被攻击点
        {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: "stroke",
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    color: "red",
                    position: "right",
                    formatter: "{b}",
                },
                emphasis: {
                    show: true,
                    color: "#FF6A6A"
                }
            },
            symbol: "pin",
            symbolSize: 30,
            itemStyle: {
                normal: {
                    show: true,
                    color: "red",
                },
                emphasis: {
                    show: true,
                    color: "#FF6A6A"
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap2[item[0]].concat([78]),
                visualMap: false
            }]
        }
    );
});
var svg = "path://M32.597,9.782 L30.475,11.904 C30.085,12.294 29.452,12.294 29.061,11.904 C28.671,11.513 28.671,10.880 29.061,10.489 L31.182,8.368 C31.573,7.978 32.206,7.978 32.597,8.368 C32.987,8.759 32.987,9.392 32.597,9.782 ZM30.000,30.500 C30.000,31.328 29.329,32.000 28.500,32.000 L5.500,32.000 C4.672,32.000 4.000,31.328 4.000,30.500 C4.000,29.672 4.672,29.000 5.500,29.000 L8.009,29.000 L8.009,18.244 C8.009,13.139 12.034,9.000 17.000,9.000 C21.966,9.000 25.992,13.139 25.992,18.244 L25.992,29.000 L28.500,29.000 C29.329,29.000 30.000,29.672 30.000,30.500 ZM17.867,14.444 L13.000,22.000 L17.000,22.000 L17.133,26.556 L21.000,20.000 L17.000,20.000 L17.867,14.444 ZM25.221,6.327 C25.033,6.846 24.459,7.113 23.940,6.924 C23.421,6.735 23.153,6.162 23.342,5.643 L24.368,2.823 C24.557,2.304 25.131,2.037 25.650,2.226 C26.169,2.415 26.436,2.989 26.248,3.508 L25.221,6.327 ZM17.000,5.000 C16.448,5.000 16.000,4.552 16.000,4.000 L16.000,1.000 C16.000,0.448 16.448,0.000 17.000,0.000 C17.552,0.000 18.000,0.448 18.000,1.000 L18.000,4.000 C18.000,4.552 17.552,5.000 17.000,5.000 ZM10.028,7.197 C9.509,7.386 8.935,7.118 8.746,6.599 L7.720,3.780 C7.532,3.261 7.799,2.687 8.318,2.498 C8.837,2.309 9.411,2.577 9.600,3.096 L10.626,5.915 C10.815,6.434 10.547,7.008 10.028,7.197 ZM3.354,12.268 L1.232,10.146 C0.842,9.756 0.842,9.123 1.232,8.732 C1.623,8.342 2.256,8.342 2.646,8.732 L4.768,10.854 C5.158,11.244 5.158,11.877 4.768,12.268 C4.377,12.658 3.744,12.658 3.354,12.268 Z"

option = {
    backgroundColor: '#ffffff',
    title: {
        text: '当日国际航线成本分摊-降落地',
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#000000'
        }
    },
    tooltip: {
        trigger: "item",
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: "z-index:100",
        formatter: function(params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
                return "地点：" + params.data.name + "，航班数：" + params.data.value[12] +
                    '<br/>' +
                    '<br/>机型：A380' +
                    '<br/>' +
                    '<br/>总成本：' + params.data.value[11] +
                    '<br/>' +
                    '<br/>变动成本:' + params.data.value[2] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp航油成本:' + params.data.value[5] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分摊机务成本:' + params.data.value[6] +
                    '<br/>' +
                    '<br/>固定成本:' + params.data.value[3] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分摊折旧费用:' + params.data.value[7] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分摊租赁费用:' + params.data.value[8] +
                    '<br/>' +
                    '<br/>期间成本:' + params.data.value[4] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分摊财务费用:' + params.data.value[9] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分摊管理费用:' + params.data.value[10];
            } else if (params.seriesType == "lines") {
                return "当前航线飞机数量: " + params.data.value;
            }
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'> 目的地:" + name + "</span><br/>航班数:" + params.data.value[12];
            return res;
        }
    },
    visualMap: { //图例值控制
        min: 0,
        max: 10,
        calculable: true,
        show: true,
        color: ['#f44336', '#fc9700', '#ffde00', '#3cfc01', '#00eaff'],
        textStyle: {
            color: '#000000'
        }
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false, //是否允许缩放
        itemStyle: {
            normal: {
                color: 'rgba(46, 63, 81, 127)', //地图背景色
                borderColor: '#445973', //省市边界线00fcff 516a89
                borderWidth: 1
            },
            emphasis: {
                color: 'rgba(35, 41, 58, 127)' //悬浮背景
            }
        },
    },
    legend: {
        orient: 'vertical',
        top: '30',
        left: 'center',
        align: 'right',
        data: [{
                name: '攻击线1',
                icon: svg,
            },
            {
                name: '攻击线2',
                icon: svg
            },
        ],
        textStyle: {
            color: '#fff',
            fontSize: 20,
        },
        itemWidth: 50,
        itemHeight: 30,
        selectedMode: 'multiple'
    },
    series: series
};