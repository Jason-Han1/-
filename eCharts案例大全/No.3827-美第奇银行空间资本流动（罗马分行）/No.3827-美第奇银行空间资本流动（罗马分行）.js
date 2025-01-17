var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var geoCoordMap = {
    Rome: [12.496366, 41.902782],
    Toledo: [-4.02263, 39.8581],
    Pisa: [10.4036, 43.70853],
    Salerno: [14.766667, 40.683334],
    Novara: [8.616667, 45.450001],
    RomeI: [12.49636, 41.90278],
    RomeII: [12.447, 41.953],
    GenazzanoI: [12.97079, 41.82522],
    Piacenza: [9.70462, 45.04202],
    RomeIII: [12.546366, 41.852782],
    Sulmona: [13.9166667, 42.05],
    GenazzanoII: [12.92079, 41.87522],
    Venice: [12.3266667, 45.4386111],
    Winchester: [-1.308000, 51.063202],
    Naples: [14.305573, 40.853294],
    RomeIV: [12.446366, 41.852782],
    PapalStates: [12.60166, 42.819330],
    RomeV: [12.546366, 41.952782],
};
var BJData = [
    [{
        name: "Toledo",
        value: 2805
    }, {
        name: "Rome"
    }],
    [{
        name: "Pisa",
        value: 1000
    }, {
        name: "Rome"
    }],
    [{
        name: "Salerno",
        value: 15000
    }, {
        name: "Rome"
    }],
    [{
        name: "Novara",
        value: 4000
    }, {
        name: "Rome"
    }],
    [{
        name: "RomeI",
        value: 4000
    }, {
        name: "Rome"
    }],
    [{
        name: "RomeII",
        value: 4000
    }, {
        name: "Rome"
    }],
    [{
        name: "GenazzanoI",
        value: 3580
    }, {
        name: "Rome"
    }],
    [{
        name: "Piacenza",
        value: 3500
    }, {
        name: "Rome"
    }],
    [{
        name: "RomeIII",
        value: 3400
    }, {
        name: "Rome"
    }],
    [{
        name: "Sulmona",
        value: 3400
    }, {
        name: "Rome"
    }],
    [{
        name: "GenazzanoII",
        value: 3000
    }, {
        name: "Rome"
    }],
    [{
        name: "Venice",
        value: 4795
    }, {
        name: "Rome"
    }],
    [{
        name: "Winchester",
        value: 4000
    }, {
        name: "Rome"
    }],
    [{
        name: "Naples",
        value: 2199
    }, {
        name: "Rome"
    }],
    [{
        name: "RomeIV",
        value: 1116
    }, {
        name: "Rome"
    }],
    [{
        name: "PapalStates",
        value: 1185
    }, {
        name: "Rome"
    }],
    [{
        name: "RomeV",
        value: 1201
    }, {
        name: "Rome"
    }]
];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[0].value
            });
        }
    }
    return res;
};

var series = [];
[
    ["Rome", BJData]
].forEach(function(item, i) {
    series.push({
            name: item[2],
            type: "lines",
            zlevel: 2,
            effect: {
                show: true,
                // //飞机的速度  这里是s单位
                period: 6,
                trailLength: 0,
                symbol: planePath,
                // 飞机大小
                symbolSize: 8
            },
            lineStyle: {
                normal: {
                    color:"#ff8800",
                    // 线条宽度
                    width: 1,
                    opacity: 1,
                    curveness: 0.2
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
                    show: false,
                    position: "right", //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: "{b}", //圆环显示文字
                    textStyle: {
                        color: "red"
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "circle",
            symbolSize: function(val) {
                return 4 + val[2] / 1000; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
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
                    position: "right",
                    color: "#00ffff",
                    formatter: "{b}",
                    textStyle: {
                        color: "#0bc7f3"
                    }
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
                    color: "#9966cc"
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([10])
            }]
        }
    );
});


option = {
    backgroundColor: '#1B2631',
    tooltip: {
        trigger: "item",
        formatter: function(params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
                return params.marker+params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
                return params.data.fromName + " -> " + params.data.toName + "<br />" + params.data.value;
            } else {
                return params.name;
            }
        },
    },
    geo: {
        map: "world",
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "130%",
        itemStyle: {
            normal: {
                color: "rgba(48,97,186,0.3)", //地图背景色
                borderColor: "rgba(0, 0, 0, 0)" //省市边界线
            },
            emphasis: {
                color: "rgba(48,97,186,0.3)" //悬浮背景
            }
        }
    },

    series: series
};