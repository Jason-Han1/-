//固定点的位置
var geoCoordMap = {
    "1": [114.622534, 33.641938],
    "2": [114.649555, 33.642419],
    "3": [114.637194, 33.6429],
    "4": [114.638632, 33.61741],
    "5": [114.661628, 33.618853],
    "6": [114.661628, 33.637851],
    "7": [114.609311, 33.612118],
    "8": [114.652142, 33.622701],
    "9": [114.673989, 33.610194],
    "10": [114.676289, 33.656845],
    "11": [114.645531, 33.656364],
    "12": [114.639207, 33.609232]
};
//三个数据，相当于三个出发点/终点
var oneData = [
    //从1点开始到2点，小飞机轨迹
    [{
            name: "1"
        },
        {
            name: "2",
            value: 20
        }
    ],



    [{
            name: "1"
        },
        {
            name: "7",
            value: 20
        }
    ],
    [{
            name: "1"
        },
        {
            name: "11",
            value: 20
        }
    ],
    [{
            name: "1"
        },
        {
            name: "4",
            value: 20
        }
    ]
];
var twoData = [
    [{
            name: "5"
        },
        {
            name: "6",
            value: 20
        }
    ],
    [{
            name: "5"
        },
        {
            name: "7",
            value: 20
        }
    ],
    [{
            name: "5"
        },
        {
            name: "11",
            value: 20
        }
    ],
    [{
            name: "5"
        },
        {
            name: "8",
            value: 20
        }
    ]
];
var threeData = [
    [{
            name: "9"
        },
        {
            name: "10",
            value: 20
        }
    ],
    [{
            name: "9"
        },
        {
            name: "1",
            value: 20
        }
    ],
    [{
            name: "9"
        },
        {
            name: "11",
            value: 20
        }
    ],
    [{
            name: "9"
        },
        {
            name: "12",
            value: 20
        }
    ]
];

//小飞机的环境
var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[1].name];
        var toCoord = geoCoordMap[dataItem[0].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[1].name,
                toName: dataItem[0].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

//三个出发点/终点的颜色
var color = ["#a6c84c", "#ffa022", "#46bee9"];

//系列列表。每个系列通过 type 决定自己的图表类型，这里相当于三个出发点/终点的三个配置，用下标表示（例如：name: item[0],）
var series = [];
[
    ["1", oneData],
    ["5", twoData],
    ["9", threeData]
].forEach(function(
    item,
    i
) {
    series.push({
        //第一个点
        name: item[0],
        //涟漪特效类型
        type: "effectScatter",
        //地理坐标系采用bmap里配置的百度地图
        coordinateSystem: "bmap",
        //用于 Canvas 分层（相当于z-index），z相比zlevel优先级更低，而且不会创建新的 Canvas,为了使点位于底图（bmap配置的百度地图）之上
        zlevel: 2,
        //涟漪特效相关配置
        rippleEffect: {
            //波纹的绘制方式可选 'stroke' 和 'fill'。 相当于丢石头那个涟漪效果，一个类似圆环，一个类似圆饼
            brushType: "stroke"
        },
        //配置线条样式
        label: {

            normal: {
                show: true,
                position: "right",
                //采用 rich 中定义样式。
                formatter: "{b}"
            }
        },

        symbolSize: function(val) {
            return val[2] / 4;
        },

        //配置何时显示特效。'render' 绘制完成后显示特效  'emphasis' 高亮（hover）的时候显示特效。
        showEffectOn: "render",


        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: [{
            name: item[0],
            value: geoCoordMap[item[0]].concat([100])
        }]
    }, {
        name: item[0] + " Top10",
        type: "lines",
        coordinateSystem: "bmap",
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: "#fff",
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + " Top10",
        type: "lines",
        coordinateSystem: "bmap",
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + " Top10",
        type: "effectScatter",
        coordinateSystem: "bmap",
        zlevel: 2,
        rippleEffect: {
            brushType: "stroke"
        },
        label: {
            normal: {
                show: true,
                position: "right",
                formatter: "{b}"
            }
        },
        symbolSize: function(val) {
            return val[2] / 4;
        },
        showEffectOn: "render",
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
var option = {
    bmap: {
        center: [114.659329, 33.62703],
        zoom: 14,
        roam: true,
        mapStyle: {
            styleJson: [{
                    featureType: "water",
                    elementType: "all",
                    stylers: {
                        color: "#021019"
                    }
                },
                {
                    featureType: "highway",
                    elementType: "geometry.fill",
                    stylers: {
                        color: "#000000"
                    }
                },
                {
                    featureType: "highway",
                    elementType: "geometry.stroke",
                    stylers: {
                        color: "#147a92"
                    }
                },
                {
                    featureType: "arterial",
                    elementType: "geometry.fill",
                    stylers: {
                        color: "#000000"
                    }
                },
                {
                    featureType: "arterial",
                    elementType: "geometry.stroke",
                    stylers: {
                        color: "#0b3d51"
                    }
                },
                {
                    featureType: "local",
                    elementType: "geometry",
                    stylers: {
                        color: "#000000"
                    }
                },
                {
                    featureType: "land",
                    elementType: "all",
                    stylers: {
                        color: "#08304b"
                    }
                },
                {
                    featureType: "railway",
                    elementType: "geometry.fill",
                    stylers: {
                        color: "#000000"
                    }
                },
                {
                    featureType: "railway",
                    elementType: "geometry.stroke",
                    stylers: {
                        color: "#08304b"
                    }
                },
                {
                    featureType: "subway",
                    elementType: "geometry",
                    stylers: {
                        lightness: -70
                    }
                },
                {
                    featureType: "building",
                    elementType: "geometry.fill",
                    stylers: {
                        color: "#000000"
                    }
                },
                {
                    featureType: "all",
                    elementType: "labels.text.fill",
                    stylers: {
                        color: "#857f7f"
                    }
                },
                {
                    featureType: "all",
                    elementType: "labels.text.stroke",
                    stylers: {
                        color: "#000000"
                    }
                },
                {
                    featureType: "building",
                    elementType: "geometry",
                    stylers: {
                        color: "#022338"
                    }
                },
                {
                    featureType: "green",
                    elementType: "geometry",
                    stylers: {
                        color: "#062032"
                    }
                },
                {
                    featureType: "boundary",
                    elementType: "all",
                    stylers: {
                        color: "#1e1c1c"
                    }
                },
                {
                    featureType: "manmade",
                    elementType: "geometry",
                    stylers: {
                        color: "#022338"
                    }
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: {
                        visibility: "off"
                    }
                },
                {
                    featureType: "all",
                    elementType: "labels.icon",
                    stylers: {
                        visibility: "off"
                    }
                },
                {
                    featureType: "all",
                    elementType: "labels.text.fill",
                    stylers: {
                        color: "#2da0c6",
                        visibility: "on"
                    }
                },
                {
                    featureType: "background",
                    elementType: "all",
                    stylers: {
                        color: "#0e1054ff"
                    }
                }
            ]
        }
    },
    series: series
};