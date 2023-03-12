var mapData = [{
        name: '北京',
        value: 53
    },
    {
        name: '天津',
        value: 38
    },
    {
        name: '上海',
        value: 46
    },
    {
        name: '重庆',
        value: 36
    },
    {
        name: '河北',
        value: 34
    },
    {
        name: '河南',
        value: 32
    },
    {
        name: '云南',
        value: 16
    },
    {
        name: '辽宁',
        value: 43
    },
    {
        name: '黑龙江',
        value: 41
    },
    {
        name: '湖南',
        value: 24
    },
    {
        name: '安徽',
        value: 33
    },
    {
        name: '山东',
        value: 30
    },
    {
        name: '新疆',
        value: 10
    },
    {
        name: '江苏',
        value: 39
    },
    {
        name: '浙江',
        value: 35
    },
    {
        name: '江西',
        value: 20
    },
    {
        name: '湖北',
        value: 21
    },
    {
        name: '广西',
        value: 30
    },
    {
        name: '甘肃',
        value: 12
    },
    {
        name: '山西',
        value: 32
    },
    {
        name: '内蒙古',
        value: 35
    },
    {
        name: '陕西',
        value: 25
    },
    {
        name: '吉林',
        value: 45
    },
    {
        name: '福建',
        value: 28
    },
    {
        name: '贵州',
        value: 18
    },
    {
        name: '广东',
        value: 37
    },
    {
        name: '青海',
        value: 6
    },
    {
        name: '西藏',
        value: 4
    },
    {
        name: '四川',
        value: 33
    },
    {
        name: '宁夏',
        value: 8
    },
    {
        name: '海南',
        value: 19
    },
];
var mapYData = [];
var valueList = [];
var min = 0;
var max = 0;
for (var i = 0; i < mapData.length; i++) {
    mapYData.push(mapData[i].name);
    valueList.push(mapData[i].value);
}
valueList = valueList.sort(function(a, b) {
    return a - b;
});
min = valueList[0];
max = valueList[valueList.length - 1];
var geoCoordMap = []
var mapFeatures = echarts.getMap("china").geoJson.features;
mapFeatures.forEach(function(v) {
    var name = v.properties.name;
    geoCoordMap[name] = v.properties.cp;
})
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            })
        }
    }
    return res;
}
option = {
    color:['green','#F8B44F'],
    legend: {
        show: true,
        bottom: '6%',
        left: '14%',
        orient: 'vertical',
        padding: 20,
        backgroundColor: 'rgba(236,246,255,0.30)',
        borderWidth: 1,
        borderColor: '#e9f3fb',
        itemGap: 0,
        itemWidth: 20,
        itemHeight: 20,
        symbolKeepAspect: false,
        inactiveColor: '#999999',
        textStyle: {
            fontSize: 16,
        },
        data: [{
            name: '高新区',
            icon: 'pin'
        }, {
            name: '赛区',
            icon: 'pin'
        }],
    },
    visualMap: {
        type: 'continuous',
        text: ['高', '低'],
        showLabel: true,
        seriesIndex: [0],
        min: min,
        max: max,
        inRange: {
            color: ['#93D1FF', '#005CC1']
        },
        textStyle: {
            color: '#333',
            fontSize: 12
        },
        bottom: '0',
        left: '2%'
    },
    geo: {
        roam: true,
        map: 'china',
        left: 'left',
        right: '20%',
        aspectScale: 0.75,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: '125%',
        label: {
            normal: {
                show: true,
                color: '#FFFFFF',
                fontSize: 14
            }
        },
        itemStyle: {
            normal: {
                color: '#999999',
                borderWidth: 0.5,
                borderColor: '#FFFFFF'
            }
        },
        regions: [{
            name: '南海诸岛',
            value: 0,
            label: {
                normal: {
                    color: '#333333'
                }
            },
            itemStyle: {
                normal: {
                    color: '#999999',
                    borderWidth: 0.1,
                    borderColor: '#999999'
                }
            }
        }],
    },
    series: [{
        type: 'map',
        name: 'map',
        aspectScale: 0.75,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: '125%',
        roam: true,
        geoIndex: 0,
        label: {
            show: false,
        },
        showLegendSymbol:false,
        data: mapData
    }, {
        name: '高新区',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(mapData),
        symbol: 'pin',
        symbolSize: function(val) {
            return val[2];
        },
        symbolOffset: [-10, -10],
        label: {
            show:true,
            position: 'inside',
            color:'#333',
            formatter: function(params) {
                return params.value[2];
            },
        }
    }, {
        name: '赛区',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(mapData),
        symbol: 'pin',
        symbolSize: function(val) {
            return val[2];
        },
        symbolOffset: [10,10],
        label: {
            show:true,
            position: 'inside',
            color:'#333',
            formatter: function(params) {
                return params.value[2];
            },
        }
    }]
};