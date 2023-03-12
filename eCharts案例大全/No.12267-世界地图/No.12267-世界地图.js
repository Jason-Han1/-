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
    {
        name: "上海",
        value: 9100
    },
    {
        name: "尼日利亚",
        value: 9100
    },
    {
        name: "巴西",
        value: 9100
    },
    {
        name: "美国加州",
        value: 9100
    },
    {
        name: "澳大利亚墨尔本",
        value: 9100
    },
    {
        name: "加拿大温哥华",
        value: 9100
    }
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
                    value: dataItem[1].value
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
series.push(/*{
            type: "scatter",
            coordinateSystem: "geo",
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false
                }
            },
            symbol: "circle",
            symbolSize: 30,
            itemStyle: {
                normal: {
                    color: '#00a65a',
                    borderColor: '#000'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                }
            })
        },*/
        //被攻击点
        {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    position: "right",
                    color: "#111",
                    formatter: "{b}",
                    textStyle: {
                        color: '#000',
                        fontSize:16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "pin",
            symbolSize: 50,
            itemStyle: {
                normal: {
                    show: true,
                    //opacity: 0.8,
                    //shadowBlur: 10,
                    //shadowOffsetX: 0,
                    //shadowOffsetY: 0,
                    //shadowColor: 'rgba(0, 0, 0, 0.5)',
                    color:'#00a65a',
                    borderColor: '#000'
                }
            },
            onclick:function(){alert(1);},
            data: BJData.map(function(dataItem) {
                    return {
                        name: dataItem.name,
                        value: geoCoordMap[dataItem.name].concat([dataItem.value])
                    }
                })
        });

option = {
    backgroundColor: '#fff',
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
            var value = params.value;
            res =
                "<span style='color:#fff;'>" +
                name +
                "</span><br/><a hreft='www.baidu.com'>数据：" +
                value+"</a>";
            return res;
        }
    },
    /*visualMap: {
        //图例值控制
        min: 0,
        max: 10000,
        show: false,
        calculable: true,
        color: ["#fff"],
        textStyle: {
            color: "#fff"
        },

    },*/
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
                color: "rgba(210, 214, 222, 1)", //地图背景色
                borderColor: "#fff" //省市边界线
            },
            emphasis: {
                color: "rgba(210, 214, 222, 0.7)" //悬浮背景
            }
        }
    },

    series: series
};