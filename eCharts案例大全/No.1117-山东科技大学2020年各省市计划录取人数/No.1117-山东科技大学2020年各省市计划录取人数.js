var name_title = '山东科技大学2020年各省市计划录取人数';
var subname = '及文理科收录人数';
var nameColor = ' rgb(55, 75, 113)';
var name_fontFamily = '等线';
var subname_fontSize = 15;
var name_fontSize = 18;
var mapName = 'china';
var data = [
    { name: '北京', value: 5 },
    { name: '天津', value: 14 },
    { name: '河北', value: 157 },
    { name: '山西', value: 110 },
    { name: '内蒙古', value: 40 },
    { name: '辽宁', value: 40 },
    { name: '吉林', value: 40 },
    { name: '黑龙江', value: 60 },
    { name: '上海', value: 10 },
    { name: '江苏', value: 60 },
    { name: '浙江', value: 50 },
    { name: '安徽', value: 151 },
    { name: '福建', value: 60 },
    { name: '江西', value: 74 },
    { name: '山东', value: 200 },
    { name: '河南', value: 100 },
    { name: '湖北', value: 40 },
    { name: '湖南', value: 50 },
    { name: '重庆', value: 40 },
    { name: '四川', value: 120 },
    { name: '贵州', value: 135 },
    { name: '云南', value: 90 },
    { name: '西藏', value: 25 },
    { name: '陕西', value: 100 },
    { name: '甘肃', value: 60 },
    { name: '青海', value: 20 },
    { name: '宁夏', value: 110 },
    { name: '新疆', value: 32 },
    { name: '广东', value: 10 },
    { name: '广西', value: 100 },
    { name: '海南', value: 40 },
];

var geoCoordMap = {};
var toolTipData = [
    {
        name: '北京',
        value: [
            { name: '综合改革', value: 5 },
            { name: '总人数', value: 5 },
        ],
    },
    {
        name: '天津',
        value: [
            { name: '综合改革', value: 14 },
            { name: '总人数', value: 14 },
        ],
    },
    {
        name: '河北',
        value: [
            { name: '文史', value: 11 },
            { name: '理工', value: 135 },
            { name: '中外理工', value: 5 },
            { name: '美术', value: 6 },
            { name: '总人数', value: 157 },
            
        ],
    },
    {
        name: '山西',
        value: [
            { name: '文史', value: 4 },
            { name: '理科', value: 90 },
            { name: '中外理工', value: 10 },
            { name: '美术', value: 6 },
            { name: '总人数', value: 110 },
        ],
    },
    {
        name: '内蒙古',
        value: [
            { name: '文史', value: 8 },
            { name: '理工', value: 32 },
            { name: '总人数', value: 40 },
        ],
    },
    {
        name: '辽宁',
        value: [
            { name: '文史', value: 10 },
            { name: '理工', value: 25 },
            { name: '中外理工', value: 5 },
            { name: '总人数', value: 40 },
        ],
    },
    {
        name: '吉林',
        value: [
            { name: '文史', value: 12 },
            { name: '理工', value: 28 },
            { name: '总人数', value: 30 },
        ],
    },
    {
        name: '黑龙江',
        value: [
            { name: '文史', value: 4 },
            { name: '理工', value: 56 },
            { name: '总人数', value: 60 },
        ],
    },
    {
        name: '上海',
        value: [
            { name: '综合改革', value: 10 },
            { name: '总人数', value: 10 },
        ],
    },
    {
        name: '江苏',
        value: [
            { name: '理工', value: 49 },
            { name: '中外文史', value: 5 },
            { name: '美术', value: 6 },
            { name: '总人数', value: 60 },
        ],
    },
    {
        name: '浙江',
        value: [
            { name: '综合改革（普通类）', value: 45 },
            { name: '综合改革（中外）', value: 5 },
            { name: '总人数', value: 50 },
        ],
    },
    {
        name: '安徽',
        value: [
            { name: '文史', value: 8 },
            { name: '理工', value: 66 },
            { name: '中外文史', value: 5 },
            { name: '中外理工', value: 66 },
            { name: '美术', value: 6 },
            { name: '总人数', value: 151 },
        ],
    },
    {
        name: '福建',
        value: [
            { name: '文史', value: 6 },
            { name: '理工', value: 54 },
            { name: '总人数', value: 60 },
        ],
    },
    {
        name: '江西',
        value: [
            { name: '文科', value: 14 },
            { name: '理科', value: 60 },
            { name: '中外理工', value: 10 },
            { name: '总人数', value: 74 },
        ],
    },
    {
        name: '山东',
        value: [
            { name: '综合', value: 5399 },
            { name: '总人数', value: 5399 },
        ],
    },
    {
        name: '河南',
        value: [
            { name: '文史', value: 12 },
            { name: '理工', value: 71 },
            { name: '中外文史', value: 4 },
            { name: '中外理工', value: 4 },
            { name: '美术', value: 9 },
            { name: '总人数', value: 100 },
        ],
    },
    {
        name: '湖北',
        value: [
            { name: '理工', value: 8 },
            { name: '文史', value: 12 },
            { name: '理工-国家专项', value: 20 },
            { name: '总人数', value: 40 },
        ],
    },
    {
        name: '湖南',
        value: [
            { name: '理工', value: 40 },
            { name: '理工-国家专项', value: 10 },
            { name: '总人数', value: 50 },
        ],
    },
    {
        name: '重庆',
        value: [
            { name: '文史', value: 8 },
            { name: '理工', value: 32 },
            { name: '总人数', value: 40 },
        ],
    },
    {
        name: '四川',
        value: [
            { name: '文史', value: 16 },
            { name: '理工', value: 86 },
            { name: '中外文史', value: 4 },
            { name: '中外理工', value: 4 },
            { name: '理工-国家专项', value: 10 },
            { name: '总人数', value: 120 },
        ],
    },
    {
        name: '贵州',
        value: [
            { name: '文史', value: 6 },
            { name: '理工', value: 99 },
            { name: '理工-国家专项', value: 30 },
            { name: '总人数', value: 135 },
        ],
    },
    {
        name: '云南',
        value: [
            { name: '文史', value: 8 },
            { name: '理工', value: 92 },
            { name: '总人数', value: 90 },
        ],
    },
    {
        name: '西藏',
        value: [
            { name: '理工', value: 15 },
            { name: '理工-国家专项', value: 10 },
            { name: '总人数', value: 25 },
        ],
    },
    {
        name: '陕西',
        value: [
            { name: '文史', value: 8 },
            { name: '理工', value: 89 },
            { name: '美术', value: 3 },
            { name: '总人数', value: 100 },
        ],
    },
    {
        name: '甘肃',
        value: [
            { name: '理工', value: 44 },
            { name: '理工-国家专项', value: 16 },
            { name: '总人数', value: 60 },
        ],
    },
    {
        name: '青海',
        value: [
            { name: '文史', value: 6 },
            { name: '理工', value: 14 },
            { name: '总人数', value: 20 },
        ],
    },
    {
        name: '宁夏',
        value: [
            { name: '文史', value: 8 },
            { name: '理工', value: 102 },
            { name: '总人数', value: 110 },
        ],
    },
    {
        name: '新疆',
        value: [
            { name: '文史', value: 16 },
            { name: '理工', value: 16 },
            { name: '总人数', value: 32 },
        ],
    },
    {
        name: '广东',
        value: [
            { name: '文史', value: 2 },
            { name: '理工', value: 8 },
            { name: '总人数', value: 10 },
        ],
    },
    {
        name: '广西',
        value: [
            { name: '文史', value: 20 },
            { name: '理工', value: 80 },
            { name: '总人数', value: 100 },
        ],
    },
    {
        name: '海南',
        value: [
            { name: '综合改革', value: 40 },
            { name: '总人数', value: 40 },
        ],
    },
];

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function (v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;
});

console.log(data);
console.log(toolTipData);
var max = 200,
    min = 10;
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function (data) {
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
    title: {
        text: name_title,
        subtext: subname,
        x: 'center',
        textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize,
        },
        subtextStyle: {
            fontSize: subname_fontSize,
            fontFamily: name_fontFamily,
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            if (typeof params.value[2] == 'undefined') {
                var toolTiphtml = '';
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += toolTipData[i].name + ':<br>';
                        for (var j = 0; j < toolTipData[i].value.length; j++) {
                            toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + '<br>';
                        }
                    }
                }
                console.log(toolTiphtml);
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = '';
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += toolTipData[i].name + ':<br>';
                        for (var j = 0; j < toolTipData[i].value.length; j++) {
                            toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + '<br>';
                        }
                    }
                }
                console.log(toolTiphtml);

                return toolTiphtml;
            }
        },
    },

    visualMap: {
        show: true,
        min: 5,
        max: 200,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
            color: ['#00467F', '#A5CC82'],
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
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#031525',
                borderColor: '#3B5077',
            },
            emphasis: {
                areaColor: '#2B91B7',
            },
        },
    },
    series: [
        {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9',
                },
            },
        },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false,
            label: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff',
                    },
                },
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7',
                },
            },
            animation: false,
            data: data,
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(
                data
                    .sort(function (a, b) {
                        return b.value - a.value;
                    })
                    .slice(0, 5)
            ),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow',
                },
            },
            zlevel: 1,
        },
    ],
};
myChart.setOption(option);

