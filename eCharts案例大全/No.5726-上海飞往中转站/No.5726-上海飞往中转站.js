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

//飞机标签
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';


var SHData2 = [
    [{
        name: "上海",
        value: 2
    }, {
        name: "英国曼彻斯特"
    }],
    [{
        name: "英国曼彻斯特",
        value: 1
    }, {
        name: "美国洛杉矶"
    }],
    [{
        name: "上海",
        value: 2
    }, {
        name: "柬埔寨金边"
    }],
    [{
        name: "柬埔寨金边",
        value: 1
    }, {
        name: "美国洛杉矶"
    }],
    [{
        name: "美国洛杉矶",
        value: 2
    }, {
        name: "美国洛杉矶"
    }]
];
var ser = [];
var convertDataWorld = function(data) {
    var res = [];
    var dataItem = data[0];
    var dataItem2 = data[2];
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
    var fromCoord2 = geoCoordMap2[dataItem2[0].name];
    var toCoord2 = geoCoordMap2[dataItem2[1].name];
    if (fromCoord2 && toCoord2) {
        res.push([{
                coord: fromCoord2,
                value: dataItem2[0].value
            },
            {
                coord: toCoord2
            }
        ]);
    }
    ser = series;
    console.log(ser);
    return res;
};
var convertDataWorld2 = function(data) {
    var res = [];
    var dataItem = data[1];
    var dataItem3 = data[3];
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
    var fromCoord3 = geoCoordMap2[dataItem3[0].name];
    var toCoord3 = geoCoordMap2[dataItem3[1].name];
    if (fromCoord3 && toCoord3) {
        res.push([{
                coord: fromCoord3,
                value: dataItem3[0].value
            },
            {
                coord: toCoord3
            }
        ]);
    }
    ser = series;
    console.log(ser);
    return res;
};



var series = [];
[
    ["上海", SHData2]
].forEach(function(item, i) {
    series.push({
            type: "lines",
            zlevel: 2,
            effect: {
                show: true,
                color: '#55aaff',
                period: 5, //箭头指向速度，值越小速度越快
                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: planePath, //箭头图标
                symbolSize: 25 //图标大小
            },
            lineStyle: {
                normal: {
                    color: '#FF0000',
                    width: 1, //尾迹线条宽度
                    opacity: 0, //尾迹线条透明度
                    curveness: -0.3 //尾迹线条曲直度
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
        //起飞地
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
                value: geoCoordMap2[item[0]].concat([2]),
                visualMap: false
            }]
        });
});
[
    ["上海", SHData2]
].forEach(function(item, i) {
    series.push({
            type: "lines",
            zlevel: 2,
            effect: {
                show: true,
                color: '#55aaff',
                period: 5, //箭头指向速度，值越小速度越快
                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: planePath, //箭头图标
                symbolSize: 25 //图标大小
            },
            lineStyle: {
                normal: {
                    color: '#FF0000',
                    width: 1, //尾迹线条宽度
                    opacity: 0, //尾迹线条透明度
                    curveness: -0.3 //尾迹线条曲直度
                }
            },
            data: convertDataWorld2(item[1])
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
        //起飞地
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
                value: geoCoordMap2[item[0]].concat([2]),
                visualMap: false
            }]
        });
});
var year = ["上海--中转站", "中转站-洛杉矶"];
option = {
    backgroundColor: '#ffffff',
    baseOption: {
        timeline: {
            data: year,
            axisType: 'category',
            autoPlay: true,
            playInterval: 2400,
            left: '10%',
            right: '10%',
            bottom: '3%',
            width: '80%',
            //  height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#000000'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#000000'
                    }
                }
            },
            data: year,
            symbolSize: 10,
            lineStyle: {
                color: '#000000'
            },
            checkpointStyle: {
                borderColor: '#000000',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                normal: {
                    color: '#000000',
                    borderColor: '#000000'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },

        },
        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicInOut',
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        grid: {
            right: '1%',
            top: '15%',
            bottom: '10%',
            width: '20%'
        },
        tooltip: {
            trigger: "item",
            backgroundColor: 'rgba(166, 200, 76, 0.82)',
            borderColor: "#FFFFCC",
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: "z-index:100",
            formatter: function(params, ticket, callback) {
                //根据业务自己拓展要显示的内容
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
        visualMap: { //图例值控制
            min: 0,
            max: 2,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#3cfc01', '#00eaff'],
            textStyle: {
                color: '#000000'
            }
        },
        options: []
    },
    calculable: true,
    grid: {
        left: '1.5%',
        //right: '3%',
        bottom: '10%',
        containLabel: true
    },

    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: "#FF6A6A"
            },
            margin: 15
        },
        splitLine: {
            lineStyle: {
                color: "#FF6A6A"
            }
        }
    }],
    yAxis: [{
        name: '）',
        nameGap: 20,
        nameTextStyle: {
            color: '#454e72',
            fontSize: 12,
        },
        type: 'value',

        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {

            textStyle: {
                color: '#303765'
            },
            margin: 20
        },
        splitLine: {
            lineStyle: {
                color: "#1d203b"
            }
        }
    }],
    options: [{
        title: {
            "text": "上海飞往中转站"
        },
        series: [
            ser[0],
            ser[1],
            ser[2]
        ]
    }, {

        title: {
            "text": "中转站飞往洛杉矶终点站"
        },
        series: [
            ser[3],
            ser[4],
            ser[5]
        ]
    }],
    series: series
};