var geoCoordMap = {
    北京: [116.4551, 40.2539],
    德国: [13.2, 52.31],
};
var BJData = [


    [{
        name: "德国",
        value: 150
    }, {
        name: "北京"
    }]
];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[1].name];
        var toCoord = geoCoordMap[dataItem[0].name];
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
    ["北京", BJData]
].forEach(function(item, i) {
    series.push({
            type: "lines",
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: '#3ed4ff',
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return val[2] / 8; //圆环大小
            },
            itemStyle: {
                normal: {
                    color: '#3ed4ff',
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
            type: "effectScatter",
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
                },
                emphasis: {
                    show: true
                }
            },
            symbolSize: function(val) {
                return val[2] / 8; //圆环大小
            },
            itemStyle: {
                normal: {
                    color: '#3ed4ff',
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100])
            }]
        }
    );
});

option = {
    backgroundColor: '#080a20',
    visualMap: {
        //图例值控制
        min: 0,
        max: 10000,
        show: false,
        calculable: true,
        color: ["#0bc7f3"],
        textStyle: {
            color: "#fff"
        },
    },
    geo: {
        map: "world",
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false, //是否允许缩放
        layoutCenter: ["-5%", "90%"], //地图位置
        layoutSize: "380%",
        itemStyle: {
            normal: {
                areaColor: '#132937',
                borderColor: '#0692a4'
            },
            emphasis: {
                areaColor: '#0b1c2d'
            }
        }
    },

    series: series
};