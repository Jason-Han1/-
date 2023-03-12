// var uploadedDataURL = "/asset/get/s/data-1519004377467-ByWkioPwf.json";
//参考秋枫雁飞的《虚拟地图区域饼图数据统计一图》
//数据定义区
var typeArr = ["男性", "女性", "城镇人口", "农村人口"];
var typeIndex = 1;
var selectedRange = null;
var option = null;
var str = "";
var data = [];
var mapdata1 = [];
var geoCoordMap = {
    '冷水江市': [111.47, 27.68],
    '涟源市': [111.79, 27.74],
    '娄星区': [112, 27.78],
    '双峰县': [112.2, 27.46],
    '新化县': [111.23, 27.88]
};
var name = "定制地图区域饼图数据统计";
var mapName = 'loudi'
// 地图特征
$.get('/asset/get/s/data-1519004377467-ByWkioPwf.json', function(geoJson) {
    // myChart.hideLoading();
    echarts.registerMap('loudi', geoJson);
    var mapFeatures = echarts.getMap(mapName).geoJson.features;
    // console.log('==========mapFeatures==============')
    // console.log(mapFeatures)
    mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        // console.log('===========name=============')
        // console.log(name)
        // 地区经纬度
        // geoCoordMap[name] = v.properties.cp;
        var s1 = Math.round(Math.random() * 100 + 10);
        var s2 = Math.round(Math.random() * 100 + 10);
        // var s3 = Math.round(Math.random() * 100 + 10);
        data.push({
            // 需要挨个处理各地区数据（不使用随机产生的数）：另外需要构造的数据是柱图数据
            "name": name,
            "value": [{
                    name: "男性",
                    value: s1,
                },
                {
                    name: "女性",
                    value: s2,
                },
                // {
                //     name: "城镇人口",
                //     value: s3
                // },
                // {
                //     name: "农村人口",
                //     value: s1 + s2 - s3
                // }
            ]
        })
        mapdata1.push({
            name: name,
            value: s1 + s2
        })
    });
    // 地理坐标图(打印出来方便查看)
    console.log("===========geoCoordMap===============");
    for (var i in geoCoordMap) {
        console.log(geoCoordMap[i]);
    }
    console.log(geoCoordMap);
    console.log("==============data===============");
    console.log(data);
    // var mapdata1=[{name:"冷水江市",value:data[0]},{},{},{},{},{}]
    /*变换地图数据（格式）：pie*/
    function convertMapDta(type, data) {
        var mapData = [];
        data.forEach(function(v) {
            v.value.forEach(function(v1) {
                if (String(v1.name) === String(type)) {
                    // 数据格式：data: [120, 200, 150, 80]
                    mapData.push({
                        "name": v.name,
                        "value": v1.value
                    })
                }
            })
        });
        return mapData;
    }

    console.log("================mapData==================")
    // console.log(convertMapDta_bar(typeArr[typeIndex],data))
    console.log(convertMapDta(typeArr[typeIndex], data))
    console.log("=========================================")

    /*resetPie*/
    function resetPie(myChart, params, geoCoordMap, typeIndex) {
        var op = myChart.getOption();
        var ops = op.series;
        ops.forEach(function(v, i) {
            if (i > 0) {
                var geoCoord = geoCoordMap[v.name];
                var p = myChart.convertToPixel({
                    seriesIndex: 0
                }, geoCoord);
                v.center = p;
                if (params != 0 && params.zoom) {
                    v.radius = v.radius * params.zoom;
                }
                if (params != 0 && params.selected) {
                    var rangeFirstNumber = params.selected[0];
                    var rangeSecondNumber = params.selected[1];
                    var pd = v.data[typeIndex].value;
                    if (pd < rangeFirstNumber || pd > rangeSecondNumber) {
                        v.itemStyle.normal.opacity = 0;
                    } else {
                        v.itemStyle.normal.opacity = 1;
                    }
                }
            }
        });
        myChart.setOption(op, true);
    }

    /*addPie*/
    function addPie(chart, data) {
        var op = chart.getOption();
        var sd = option.series;
        for (var i = 0; i < data.length; i++) {
            var randomValue = Math.round(Math.random() * 30) * 2;
            var radius = randomValue <= 10 ? 10 : randomValue;
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                var vr = [];
                (data[i].value).map(function(v, j) {
                    vr.push({
                        name: v.name,
                        value: v.value,
                        visualMap:false
                    });
                });
                var p = chart.convertToPixel({
                    seriesIndex: 0
                }, geoCoord);
                sd.push({
                    name: data[i].name,
                    type: 'pie',
                    tooltip: {
                        formatter: function(params) {
                            return params.seriesName + "<br/>" + params.name + " : " + params.value+'万人';
                        }
                    },
                    radius: radius,
                    center: p,
                    data: vr,
                    // zlevel:1,
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        mormal: {
                            opacity: 0.1
                        }
                    }
                });
            }
        }
        return sd;
    };


    /* 指定图表的配置项和数据:pie*/
    var option = {
        // backgroundColor:'#666666',
        title: {
            text: name,
            left: 'center',
            textStyle: {
                color: 'black'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.value) {
                    return params.name + "<br/>" + '总人口' +
                        ": " + params.value + '万人';
                }
            }
        },
        visualMap: {
            type: 'continuous',
            show: true,
            min: 0,
            max: 200,
            left: 'left',
            top: 'bottom',
            text: ['高    (亿元)', '低    (亿元)'], // 文本，默认为数值文本
            calculable: true,
            // seriesIndex: [0],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                // color:['#3C3B3F','#EE2C2C']//黑红
                // color:['lightskyblue','yellow','orangered']
                // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                color: ['#00467F', '#A5CC82'] // 蓝绿
            }
        },
        series: [{
            name: 'chinaMap',
            type: 'map',
            mapType: mapName,
            roam: true,
            label: {
                normal: {
                    show: true,
                    color: 'black',
                    fontSize: 13
                },
                emphasis: {
                    show: true
                }
            },
            // itemStyle: {
            //     normal: {
            //         borderColor: '#CD4F39',
            //         areaColor: '#54FF9F',
            //         borderWidth: 4,
            //         opacity: 0.2
            //     }
            // },
            data: mapdata1 //convertMapDta(typeArr[typeIndex],data),
            /*zlevel:3*/
        }]
    };



    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    /*pie*/
    addPie(myChart, data);

    myChart.setOption(option, true);

    /*饼图跟着地图移动:pie*/
    myChart.on('georoam', function(params) {
        resetPie(myChart, params, geoCoordMap, typeIndex);
    });
    myChart.on('datarangeselected', function(params) {
        resetPie(myChart, params, geoCoordMap, typeIndex);
    });
    window.addEventListener("resize", function() {
        myChart.resize();
        resetPie(myChart, 0, geoCoordMap);
    })
})


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);