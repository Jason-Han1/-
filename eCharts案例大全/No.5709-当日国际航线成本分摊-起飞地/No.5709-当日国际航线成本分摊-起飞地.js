function randomData() {
    return Math.round(Math.random() * 10);
}
var geoCoordMap2 = {
    武汉: [114.298572, 30.584355],
    尼日利亚: [-4.388361, 11.186148],
    美国: [-118.24311, 34.052713],
    香港: [114.195466, 22.282751],
    加纳库: [-4.62829, 7.72415, 23123],
    英国: [-1.657222, 51.886863],
    德国: [10.01959, 54.38474],
    哈萨克斯坦: [45.326912, 41.101891],
    俄罗斯: [89.116876, 67.757906],
    巴西: [-48.678945, -10.493623],
    埃及: [31.815593, 31.418032],
    西班牙: [2.175129, 41.385064],
    柬埔寨: [104.88659, 11.545469],
    意大利: [9.189948, 45.46623],
    乌拉圭: [-56.162231, -34.901113],
    莫桑比克: [32.608571, -25.893473],
    阿尔及利亚: [3.054275, 36.753027],
    阿联酋: [55.269441, 25.204514],
    匈牙利: [17.108519, 48.179162],
    澳大利亚: [150.993137, -33.675509],
    墨西哥: [-99.094092, 19.365711, 23123],
    加拿大: [-123.023921, 49.311753],
    日本: [139.4428,35.3929],
    韩国: [127.03,37.35],
    法国: [2.2,48.51]
};

//飞机标签
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

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


var SHData = [
    [{
        name: "武汉",
        value: 4731
    }, {
        name: "武汉",
    }],
    [{
        name: "美国",
        value: 1241
    }, {
        name: "武汉"
    }],
    [{
        name: "英国",
        value: 1254
    }, {
        name: "武汉"
    }],
    [{
        name: "俄罗斯",
        value: 325
    }, {
        name: "武汉"
    }],
    [{
        name: "澳大利亚",
        value: 652
    }, {
        name: "武汉"
    }],
    [{
        name: "法国",
        value: 352
    }, {
        name: "武汉"
    }],
    [{
        name: "日本",
        value: 352
    }, {
        name: "武汉"
    }],
    [{
        name: "韩国",
        value: 421
    }, {
        name: "武汉"
    }]
];

var series = [];
[
    ["武汉", SHData]
].forEach(function(item, i) {
    series.push({
            type: "lines",
            zlevel: 2,
            effect: {
                show: true,
                color: '#55aaff',
                period: 6, //箭头指向速度，值越小速度越快
                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: planePath, //箭头图标
                symbolSize: 10 //图标大小
            },
            lineStyle: {
                normal: {
                    color: '#FF0000',
                    width: 1, //尾迹线条宽度
                    opacity: 0.6, //尾迹线条透明度
                    curveness: -0.4 //尾迹线条曲直度
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
                    show: false,
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
                value: geoCoordMap2[item[0]].concat([4731]),//标记点数值
                visualMap: false
            }]
        }
    );
});
var svg = "path://M32.597,9.782 L30.475,11.904 C30.085,12.294 29.452,12.294 29.061,11.904 C28.671,11.513 28.671,10.880 29.061,10.489 L31.182,8.368 C31.573,7.978 32.206,7.978 32.597,8.368 C32.987,8.759 32.987,9.392 32.597,9.782 ZM30.000,30.500 C30.000,31.328 29.329,32.000 28.500,32.000 L5.500,32.000 C4.672,32.000 4.000,31.328 4.000,30.500 C4.000,29.672 4.672,29.000 5.500,29.000 L8.009,29.000 L8.009,18.244 C8.009,13.139 12.034,9.000 17.000,9.000 C21.966,9.000 25.992,13.139 25.992,18.244 L25.992,29.000 L28.500,29.000 C29.329,29.000 30.000,29.672 30.000,30.500 ZM17.867,14.444 L13.000,22.000 L17.000,22.000 L17.133,26.556 L21.000,20.000 L17.000,20.000 L17.867,14.444 ZM25.221,6.327 C25.033,6.846 24.459,7.113 23.940,6.924 C23.421,6.735 23.153,6.162 23.342,5.643 L24.368,2.823 C24.557,2.304 25.131,2.037 25.650,2.226 C26.169,2.415 26.436,2.989 26.248,3.508 L25.221,6.327 ZM17.000,5.000 C16.448,5.000 16.000,4.552 16.000,4.000 L16.000,1.000 C16.000,0.448 16.448,0.000 17.000,0.000 C17.552,0.000 18.000,0.448 18.000,1.000 L18.000,4.000 C18.000,4.552 17.552,5.000 17.000,5.000 ZM10.028,7.197 C9.509,7.386 8.935,7.118 8.746,6.599 L7.720,3.780 C7.532,3.261 7.799,2.687 8.318,2.498 C8.837,2.309 9.411,2.577 9.600,3.096 L10.626,5.915 C10.815,6.434 10.547,7.008 10.028,7.197 ZM3.354,12.268 L1.232,10.146 C0.842,9.756 0.842,9.123 1.232,8.732 C1.623,8.342 2.256,8.342 2.646,8.732 L4.768,10.854 C5.158,11.244 5.158,11.877 4.768,12.268 C4.377,12.658 3.744,12.658 3.354,12.268 Z"


option = {
    backgroundColor: '#ffffff',
    title: {
        text: '国外人力流动-出汉人口流向',
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#000000'
        }
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
                return "地点：" + params.data.name +
                    '<br/>' +
                    "出汉人数：" + params.data.value[2]
            } else if (params.seriesType == "lines") {
                return "当前出汉人数: " + params.data.value;
            }
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'> 出发地:" + name + "</span><br/>出汉人数:" + params.data.value[2];
            return res;
        }
    },
    visualMap: { //图例值控制
        min: 0,
        max: 1500,
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