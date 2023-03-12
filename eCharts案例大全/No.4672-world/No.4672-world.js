// 飞线颜色  
var flyLineColor="yellow";
//线条颜色
var lineColor="rgba(31,20,252,1)";
//高亮地图填充色
var lightColor ="red";
// 散点图默认颜色
var ScatterColor="yellow"
// 地图默认状态填充色
var  mapAreaColor ="#06265c"

//字体颜色
var  textColor="#fff";


var geoCoordMap = {
    上海: [121.4648, 31.2891],
    尼日利亚: [-4.388361, 11.186148],
    美国洛杉矶: [-118.24311, 34.052713],
    香港邦泰: [114.195466, 22.282751],
    美国芝加哥: [-87.801833, 41.870975],
    加纳库马西: [-4.62829, 7.72415],
    英国曼彻斯特: [-1.657222, 51.886863],
    德国汉堡: [10.01959, 54.38474],
    哈萨克斯坦阿拉木图: [45.326912, 41.101891],
    俄罗斯伊尔库茨克: [89.116876, 67.757906],
    巴西: [-48.678945, -10.493623],
    埃及达米埃塔: [31.815593, 31.418032],
    西班牙巴塞罗纳: [2.175129, 41.385064],
    柬埔寨金边: [104.88659, 11.545469],
    意大利米兰: [9.189948, 45.46623],
    乌拉圭蒙得维的亚: [-56.162231, -34.901113],
    莫桑比克马普托: [32.608571, -25.893473],
    阿尔及利亚阿尔及尔: [3.054275, 36.753027],
    阿联酋迪拜: [55.269441, 25.204514],
    匈牙利布达佩斯: [17.108519, 48.179162],
    澳大利亚悉尼: [150.993137, -33.675509],
    美国加州: [-121.910642, 41.38028],
    澳大利亚墨尔本: [144.999416, -37.781726],
    墨西哥: [-99.094092, 19.365711],
    加拿大温哥华: [-123.023921, 49.311753]
};
var BJData = [
    [{
        name: "尼日利亚",
        value: 9100
    }, {
        name: "香港邦泰"
    }],
    [{
        name: "美国洛杉矶",
        value: 2370
    }, {
        name: "香港邦泰"
    }],
    [{
        name: "香港邦泰",
        value: 3130
    }, {
        name: "香港邦泰"
    }],
    [{
        name: "美国芝加哥",
        value: 2350
    }, {
        name: "香港邦泰"
    }],
    [{
        name: "加纳库马西",
        value: 5120
    }, {
        name: "香港邦泰"
    }],
    [{
        name: "英国曼彻斯特",
        value: 3110
    }, {
        name: "香港邦泰"
    }],
    [{
        name: "德国汉堡",
        value: 6280
    }, {
        name: "上海"
    }],
    [{
        name: "哈萨克斯坦阿拉木图",
        value: 7255
    }, {
        name: "上海"
    }],
    [{
        name: "俄罗斯伊尔库茨克",
        value: 8125
    }, {
        name: "上海"
    }],
    [{
        name: "巴西",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "埃及达米埃塔",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "西班牙巴塞罗纳",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "柬埔寨金边",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "意大利米兰",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "乌拉圭蒙得维的亚",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "莫桑比克马普托",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "阿尔及利亚阿尔及尔",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "阿联酋迪拜",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "匈牙利布达佩斯",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "澳大利亚悉尼",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "美国加州",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "澳大利亚墨尔本",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "墨西哥",
        value: 3590
    }, {
        name: "上海"
    }],
    [{
        name: "加拿大温哥华",
        value: 3590
    }, {
        name: "上海"
    }]
];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
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
    ["上海", BJData]
].forEach(function(item, i) {
    series.push(
           {
        "type": "lines",
        "zlevel": 3,
        "effect": {
            "show": true,
            "period": 4,
            "trailLength": 0.7,
            "symbol": "arrow",
            "symbolSize": 3,
            "color": flyLineColor
        },
        "lineStyle": {
            "normal": {
                "width": 0,
                "curveness": 0.2
            }
        },
        "data":convertData(item[1])
    }, {
        "type": "lines",
        "zlevel": 2,
        "symbolSize": 10,
        "effect": {
            "show": false,
            "period": 6,
            "trailLength": 0
        },
        "lineStyle": {
            "color": lineColor,
            "width": 1,
            "opacity": 0.8,
            "curveness": 0.2
        },
        "data":convertData(item[1])
    },
        {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 1,
            rippleEffect: {
                //涟漪特效
                period: 6, //动画时间，值越小速度越快
                brushType: "stroke", //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: "right", //显示位置
                    offset: [8, 0], //偏移设置
                    formatter: "{b}", //圆环显示文字
                    color:textColor,
                    fontSize:10,
                    lineHeight:14,
                    borderWidth:1,
                    backgroundColor:"#061a4c",
                    borderColor:"#97b5f0",
                    padding:3,
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "circle",
            symbolSize:12,
            itemStyle: {
                normal: {
                show: true,
                "color": ScatterColor,
                "shadowBlur": 10,
                "shadowColor":ScatterColor
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            })
        },
        //被攻击点 大头针
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
                    position: "right",
                    formatter: "{b}",
                    color:textColor,
                    
                    fontSize:10,
                    lineHeight:14,
                    borderWidth:1,
                    backgroundColor:"#061a4c",
                    borderColor:"#97b5f0",
                    padding:3,
                    
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "pin",
            symbolSize: 30,
            itemStyle: {
                normal: {
                    show: true,
                    color:ScatterColor
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100])
            }]
        },
        // 被攻击点 散点
        {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            symbol: "circle",
            symbolSize:12,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: "fill", //波纹绘制方式 stroke, fill
                scale: 12 //波纹圆环最大限制，值越大波纹越大
            },
            itemStyle: {
                normal: {
                show: true,
                "shadowBlur": 12,
                "shadowColor":"red",
                "color":  {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: 'red' // 0% 处的颜色
                        }, {
                            offset: 0.8, color: 'transparent' 
                        },
                        {
                            offset: 1, color: 'red' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                }
            },
            label: {
                normal: {
                    show: false
                },
            },
            data:  [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100])
            }]
        },
        // 高亮显示中国
        {
            type: 'map',
            roam: true,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: "180%",
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
                areaColor:mapAreaColor,
                borderColor: '#8F98A6'
            },
            emphasis: {
                areaColor: lightColor
            }
        },
            map: 'world', //使用
            data: [
            {"selected": true,
            "name": "China"}]
          },
    );
});

option = {
    backgroundColor: '#000',
    title: {
        text: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: "item",
        backgroundColor: "#1540a1",
        borderColor: "#FFFFCC",
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: "z-index:100",
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res =
                "<span style='color:#fff;'>" +
                name +
                "</span><br/>数据：" +
                value;
            return res;
        }
    },
    // visualMap: {
    //     //图例值控制
    //     min: 0,
    //     max: 10000,
    //     // show: false,
    //     calculable: true,
    //     // color: ["#0bc7f3"],
    //     textStyle: {
    //         color: "#fff"
    //     },

    // },
    geo: {
        show:false,
        map: "world",
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "180%",
        itemStyle: {
            normal: {
                areaColor:mapAreaColor,
                borderColor: '#8F98A6'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },

    series: series
};