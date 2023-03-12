var mapName = 'china';
var data = [
    { name: '北京', value: 0 },
    { name: '天津', value: 42 },
    { name: '河北', value: 102 },
    { name: '山西', value: 81 },
    { name: '内蒙古', value: 147 },
];

var geoCoordMap = {};
var toolTipData = [
    {
        name: '北京',
        value: [
            { name: '科技人才总数', value: 95 },
            { name: '理科', value: 82 },
        ],
    },
    {
        name: '天津',
        value: [
            { name: '文科', value: 22 },
            { name: '理科', value: 20 },
        ],
    },
    {
        name: '河北',
        value: [
            { name: '文科', value: 60 },
            { name: '理科', value: 42 },
        ],
    },
    {
        name: '山西',
        value: [
            { name: '文科', value: 40 },
            { name: '理科', value: 41 },
        ],
    },
    {
        name: '内蒙古',
        value: [
            { name: '文科', value: 23 },
            { name: '理科', value: 24 },
        ],
    },
];

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
console.log(mapFeatures);
myChart.hideLoading();
mapFeatures.forEach(function (v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;
});

console.log(data);
console.log(toolTipData);
var max = 480,
    min = 9; // todo
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
var planePath =
    'path://M683.436973 788.16173H317.495351c-28.86573 0-52.279351-23.164541-52.279351-51.753514V296.627892c0-28.575135 23.413622-51.739676 52.279351-51.739676h39.202595v12.938379c0 35.715459 29.267027 64.678054 65.356108 64.678054h156.824216c36.075243 0 65.34227-28.962595 65.342271-64.678054v-12.938379h39.216432c28.86573 0 52.265514 23.164541 52.265513 51.753514v439.794162c0 28.575135-23.399784 51.739676-52.265513 51.739676zM631.143784 425.970162H369.747027a26.015135 26.015135 0 0 0-26.125838 25.876757 26.015135 26.015135 0 0 0 26.139676 25.876757H631.143784a26.015135 26.015135 0 0 0 26.139675-25.876757 26.015135 26.015135 0 0 0-26.153513-25.876757z m0 90.554811H369.747027a26.015135 26.015135 0 0 0-26.125838 25.876757 26.015135 26.015135 0 0 0 26.139676 25.862919H631.143784a26.015135 26.015135 0 0 0 26.139675-25.876757 26.015135 26.015135 0 0 0-26.153513-25.876757z m0 90.540973H369.747027a26.015135 26.015135 0 0 0-26.125838 25.876757 26.015135 26.015135 0 0 0 26.139676 25.876756H631.143784a26.015135 26.015135 0 0 0 26.139675-25.876756 26.015135 26.015135 0 0 0-26.153513-25.876757z m-78.419027-310.451892H448.207568c-28.879568 0-52.279351-23.164541-52.279352-51.739676s23.399784-51.739676 52.279352-51.739675h104.544864c28.86573 0 52.279351 23.164541 52.279352 51.753513 0 28.561297-23.413622 51.725838-52.279352 51.725838z';

option = {
    backgroundColor: '#070827',
    visualMap: {
        show: true,
        min: 0,
        max: 200,
        left: '10%',
        top: 'bottom',
        calculable: true,
        seriesIndex: [1],
        inRange: {
            color: ['rgba(0, 107, 255, 0.2)', 'rgba(0, 107, 255, 0.8)'], // 蓝绿
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
                areaColor: 'rgba(0, 107, 255, 0.3)',
                borderColor: '#006BFF',
                borderWidth: 2,
            },
            emphasis: {
                areaColor: '#4499d0',
            },
        },
    },
    series: [
        {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbol: planePath,
            // symbol:'path://M505.468541 505.468541m-505.468541 0a505.468541 505.468541 0 1 0 1010.937081 0 505.468541 505.468541 0 1 0-1010.937081 0Z',
            symbolSize: function (val) {
                return val[2] / 10;
            },
            symbolKeepAspect: true,

            itemStyle: {
                normal: {
                    color: '#FFFFFF',
                },
            },
            zlevel: 6,
        },
        {
            type: 'map',
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
                        color: '#fff',
                    },
                },
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#006BFF',
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
            // type: 'effectScatter',
            // coordinateSystem: 'geo',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 6;
            },
            symbolKeepAspect: true,
            itemStyle: {
                normal: {
                    color: '#E26851',
                },
            },

            zlevel: 5,
        },
    ],
};
