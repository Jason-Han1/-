var data = [{
        name: "北京",
        value: 177
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
        value: 66
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
        value: 67
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
var data2 = [{
        name: "北京",
        value: 17
    },
    {
        name: "天津",
        value: 42
    },
    {
        name: "河北",
        value: 12
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
        value: 66
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
        value: 14
    },
    {
        name: "安徽",
        value: 19
    },
    {
        name: "福建",
        value: 16
    },
    {
        name: "江西",
        value: 91
    },
    {
        name: "山东",
        value: 19
    },
    {
        name: "河南",
        value: 17
    },
    {
        name: "湖北",
        value: 56
    },
    {
        name: "湖南",
        value: 64
    },
    {
        name: "重庆",
        value: 91
    },
    {
        name: "四川",
        value: 15
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
        value: 67
    },
    {
        name: "广东",
        value: 23
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
var mapFeatures = echarts.getMap("china").geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    var name = v.properties.name;
    geoCoordMap[name] = v.properties.cp;
});


var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
    return res;
};

option = {
    visualMap: {
        min: 0,
        max: 150,
        splitNumber: 5,
        inRange: {
            color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        show: true,
        map: 'china',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#f5f5f5',
                borderColor: '#666'
            },
            emphasis: {
                areaColor: '#ccc'
            }
        }
    },
    series: [{
         name: '热力图',
            type: 'heatmap',
            coordinateSystem: 'geo',
            data: convertData(data)
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: 50,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', 
                }
            },
            zlevel: 6,
            data: convertData(data2),
        },


    ]
};