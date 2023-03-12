var geoCoordMap = {
    上海: [121.4648, 31.2891],
    美国洛杉矶: [-118.24311, 34.052713],
    香港邦泰: [114.195466, 22.282751],
    美国芝加哥: [-87.801833, 41.870975],
    美国加州: [-121.910642, 41.38028],
    澳大利亚墨尔本: [144.999416, -37.781726],
    墨西哥: [-99.094092, 19.365711],
    加拿大温哥华: [-123.023921, 49.311753]
};
var BJData = [
    [{name:"美国洛杉矶",value:2370}, {name: "上海"}],
    [{name: "香港邦泰",value: 7000}, {name: "上海"}],
    [{name: "美国芝加哥",value: 2350}, {name: "上海"}],
    [{name: "美国加州",value: 3590}, {name: "上海"}],
    [{name: "澳大利亚墨尔本",value: 3590}, {name: "上海"}],
    [{name: "墨西哥",value: 4000}, {name: "上海"}],
    [{name: "加拿大温哥华",value: 5000}, {name: "上海"}]
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
    ["上海", BJData]
].forEach(function(item, i) {
    series.push({
            name: item[2],
            type: "lines",
            zlevel: 2,
            effect: {
                show: true,
                // color: "#ffffff",
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.05, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: "arrow", //箭头图标
                symbolSize: 5 //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 0.05, //尾迹线条透明度
                    curveness: 0.3 //尾迹线条曲直度
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
                    show: true,
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
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 3,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: "stroke", //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    color: "#00ffff",
                    formatter: "{b}",
                    textStyle: {
                        color: "#00ffff"
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "circle",
            symbolSize: 15,
            itemStyle: {
                normal: {
                    show: false,
                }
            },
            data: [{
                name: item[0],
                // concat([10000])决定图例的颜色
                value: geoCoordMap[item[0]].concat([10000])
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
        }
        // backgroundColor: "#1540a1",
        // borderColor: "#FFFFCC",
        // showDelay: 0,
        // hideDelay: 0,
        // enterable: true,
        // transitionDuration: 0,
        // extraCssText: "z-index:100",
        // formatter: function(params, ticket, callback) {
        //     //根据业务自己拓展要显示的内容
        //     var res = "";
        //     var name = params.name;
        //     var value = params.value[params.seriesIndex + 1];
        //     res =
        //         "<span style='color:#fff;'>" +
        //         name +
        //         "</span><br/>数据：" +
        //         value;
        //     return res;
        // }
    },
    legend: {
        show: true,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['北京 Top10', '上海 Top10', '广州 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    visualMap: {
        //图例值控制
        min: 0,
        max: 10000,
        show: true,
        calculable: true,
        // 图例颜色
        color: ["#0bc7f3", "red", "#FFFF00"],
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
        roam: true, //是否允许缩放
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "180%",
        itemStyle: {
            normal: {
                color: "#000", //地图背景色
                borderColor: "#5bc1c9" //省市边界线
            },
            emphasis: {
                color: "rgba(37, 43, 61, .5)" //悬浮背景
            }
        }
    },

    series: series
};