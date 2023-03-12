/** 
 * 
 * 作者: GhostCat
 * 博客: https://gcat.cc
 * 描述: 地图区域颜色渐变、闪烁点大小
 * 
 */


var mapName = 'china'
var data = [{
        name: "北京",
        value: 199
    },
    {
        name: "天津",
        value: 42
    },
    {
        name: "河北",
        value: 102
    },
    {
        name: "山西",
        value: 81
    },
    {
        name: "内蒙古",
        value: 47
    },
    {
        name: "辽宁",
        value: 67
    },
    {
        name: "吉林",
        value: 82
    },
    {
        name: "黑龙江",
        value: 123
    },
    {
        name: "上海",
        value: 24
    },
    {
        name: "江苏",
        value: 92
    },
    {
        name: "浙江",
        value: 114
    },
    {
        name: "安徽",
        value: 109
    },
    {
        name: "福建",
        value: 116
    },
    {
        name: "江西",
        value: 91
    },
    {
        name: "山东",
        value: 119
    },
    {
        name: "河南",
        value: 137
    },
    {
        name: "湖北",
        value: 116
    },
    {
        name: "湖南",
        value: 114
    },
    {
        name: "重庆",
        value: 91
    },
    {
        name: "四川",
        value: 125
    },
    {
        name: "贵州",
        value: 62
    },
    {
        name: "云南",
        value: 83
    },
    {
        name: "西藏",
        value: 9
    },
    {
        name: "陕西",
        value: 80
    },
    {
        name: "甘肃",
        value: 56
    },
    {
        name: "青海",
        value: 10
    },
    {
        name: "宁夏",
        value: 18
    },
    {
        name: "新疆",
        value: 180
    },
    {
        name: "广东",
        value: 123
    },
    {
        name: "广西",
        value: 59
    },
    {
        name: "海南",
        value: 14
    },
];

var geoCoordMap = {};


/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

console.log(data)
var max = 480,
    min = 9; // todo 
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
option = {

    backgroundColor: "#333",
    // 左下角图例
    visualMap: {
        show: false,
        min: 0,
        max: 200,
        left: "10%",
        top: "bottom",
        calculable: true,
        seriesIndex: [1],
        inRange: {
            color: ["#0d0a0a", "#3a1911"], // 蓝绿
        },
    },
    legend: {
        show: true,
        left: "10%",
        bottom: "5%",
        type: "scroll",
        orient: "vertical",
        textStyle: {
            color: "#fff",
        },
    },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            },
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: "#3a1911",
                borderColor: "#6e2727", // 6e2727
                borderWidth: 2,
            },
            emphasis: {
                areaColor: "#965f53",
            },
        },
    },
    series: [{
            name: "在线上课人数",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: "{b}",
                    position: "right",
                    show: true,
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                    color: "#fff",
                },
            },
        },
        {
            type: "map",
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: "#fff",
                    },
                },
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: "red",
                    borderColor: "#6e2727",
                },
                emphasis: {
                    areaColor: "#3a1911",
                },
            },
            animation: false,
            data: data,
        },
        {
            name: "开课课程数",
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 6,
            symbol: "pin",
            symbolSize: [60, 60],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 9,
                    },
                    // formatter(value) {
                    //   return value.data.value[2];
                    // },
                },
            },
            itemStyle: {
                normal: {
                    color: "#D8BC37", //标志颜色
                },
            },
            // data: convertData(data),
            showEffectOn: "render",
            rippleEffect: {
                brushType: "stroke",
            },
            hoverAnimation: true,
        },
        {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
                data
                .sort(function(a, b) {
                    return b.value - a.value;
                })
                .slice(0, 10)
            ),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: "render",
            rippleEffect: {
                brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: "{b}",
                    position: "left",
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    color: "#325baf",
                    shadowBlur: 10,
                    shadowColor: "#325baf",
                },
            },
            zlevel: 1,
        },
    ],
};