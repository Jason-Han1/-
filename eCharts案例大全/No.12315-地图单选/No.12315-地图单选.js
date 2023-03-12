var mapName = 'china'
var data = [{
        name: "北京"
    },
    {
        name: "天津"
    },
    {
        name: "河北"
    },
    {
        name: "山西"
    },
    {
        name: "内蒙古"
    },
    {
        name: "辽宁"
    },
    {
        name: "吉林"
    },
    {
        name: "黑龙江"
    },
    {
        name: "上海"
    },
    {
        name: "江苏"
    },
    {
        name: "浙江"
    },
    {
        name: "安徽"
    },
    {
        name: "福建"
    },
    {
        name: "江西"
    },
    {
        name: "山东"
    },
    {
        name: "河南"
    },
    {
        name: "湖北"
    },
    {
        name: "湖南"
    },
    {
        name: "重庆"
    },
    {
        name: "四川"
    },
    {
        name: "贵州"
    },
    {
        name: "云南"
    },
    {
        name: "西藏"
    },
    {
        name: "陕西"
    },
    {
        name: "甘肃"
    },
    {
        name: "青海"
    },
    {
        name: "宁夏"
    },
    {
        name: "新疆",
        selected: true
    },
    {
        name: "广东"
    },
    {
        name: "广西"
    },
    {
        name: "海南"
    },
    {
        name: "台湾"
    },
    {
        name: "南海诸岛"
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
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = '';
                for (var i = 0; i < data.length; i++) {
                    if (params.name == data[i].name) {
                        toolTiphtml += data[i].name + ''
                    }
                }
                var toolTiphtml = '';
                for (var i = 0; i < data.length; i++) {
                    if (params.name == data[i].name) {
                        toolTiphtml += data[i].name + ''
                    }
                }
                return toolTiphtml;
            }
        }
    },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#7FA2DF',
                borderColor: '#fff',
            },
            emphasis: {
                areaColor: '#2C78DD',
            }
        }
    },
    series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 10,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#F3CA61'
                }
            }
        },

        {
            name: '',
            type: 'map',
            mapType: mapName,
            map: mapName,
            selectedMode: 'single', //地图省市区域单选
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    borderWidth: 1, // 省份的边框宽度
                    borderColor: '#fff', // 省份的边框颜色
                    areaColor: '#7FA2DF' // 设置地图颜色
                },
                emphasis: {
                    label: {
                        show: true
                    },
                    areaColor: '#2C78DD' //选中区域颜色
                }
            },
            data: data
        },


    ]
};
myChart.setOption(option);