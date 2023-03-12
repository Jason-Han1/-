// 地图背景颜色
const mapBgColor = '#000000';
// 地图轮廓颜色
const mapBrColor = '#96B6FF';
// 地图区块颜色
const mapAreaColor = '#3A455F';
// 移到线上的字颜色
const tootipFontColor = '#fff';
// 移到线上的边框颜色
const tootipBrColor = '#040616';
// 区块描边
const mapAreaBrColor = '#666';
// 省高亮颜色
const regionHighLight = '#70CBFF';
// 省高亮边框颜色
const regionHighLightBr = '#000';
// 查看形式 (china or world)
const worldType = 'world'; // 改成中国就把这里换成 'china'
// 线高亮
const lineHeight = '#fff';

// --------------------- 第一条线 --------------------------

// 飞线颜色
const lineColor = '#74CAFF';
// 线渐变开始颜色
const gradientColorStart = '#70CBFF';
// 线渐变结束颜色
const gradientColorEnd = '#3D68F3';
// 点描边
const pointBrColor = '#fff';
// 散圈颜色
const pointCircleColor = 'rgba(61,104,243,0.5)';
// 散圈透明度
const pointCircleOpacity = 0.5;
// 点大小
const pointSize = 10;
// 点描边大小
const pointBrSize = 1;
// 点颜色
const pointColor = '#4172FD';

// --------------------- 第二条线 --------------------------
// 另一种线的颜色
const lineColor2 = '#ff4400';
// 线渐变开始颜色
const gradientColorStart2 = '#ff4400';
// 线渐变结束颜色
const gradientColorEnd2 = '#ffffff';
// 点描边
const pointBrColor2 = '#fff';
// 点大小
const pointSize2 = 12;
// 点描边大小
const pointBrSize2 = 1;
// 点颜色
const pointColor2 = '#ff4400';

var chinaGeoCoordMap = {
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    西藏: [91.11, 29.97],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    江苏: [118.8062, 31.9208],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
    美国: [-100.0207504, 38.691925],
    南非: [23.0207504, -30.691925],
    英国: [0.1, 51.3],
    俄罗斯: [37, 55],
};
var chinaDatas = [
    [
        {
            name: '英国',
            value: 0,
            price: 100,
            num: 2,
        },
    ],
    [
        {
            name: '俄罗斯',
            value: 0,
            price: 100,
            num: 2,
        },
    ],
];

if (worldType === 'world') {
    chinaDatas.push(
        [
            {
                name: '美国',
                value: 0,
                price: 100,
                num: 2,
            },
        ],
        [
            {
                name: '南非',
                value: 0,
                price: 100,
                num: 2,
            },
        ]
    );
}

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = [119.5313, 29.8773];
        var toCoord = chinaGeoCoordMap[dataItem[0].name];
        if (fromCoord && toCoord) {
            res.push([
                {
                    coord: fromCoord,
                    value: dataItem[0].value,
                    lineStyle: {
                        color: i % 2 ? lineColor2 : undefined,
                    },
                },
                {
                    coord: toCoord,
                    dataItem: dataItem,
                },
            ]);
        }
    }
    return res;
};

var series = [];
[['浙江', chinaDatas]].forEach(function (item, i) {
    series.push(
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'circle', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 0.1, //尾迹线条宽度
                    opacity: 0.5, //尾迹线条透明度
                    curveness: 0.2, //尾迹线条曲直度
                    color: new echarts.graphic.RadialGradient(0, 0.5, 1, [
                        {
                            offset: 0,
                            color: i % 2 ? gradientColorEnd2 : gradientColorEnd,
                        },
                        {
                            offset: 1,
                            color: i % 2 ? gradientColorStart2 : gradientColorStart,
                        },
                    ]),
                },
                emphasis: {
                    color: lineHeight,
                },
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(8, 18, 42, 0.85)',
                borderColor: tootipBrColor,
                extraCssText: 'z-index:100',
                formatter: function (params, ticket, callback) {
                    return 'S0S';
                },
            },
            data: convertData(item[1]),
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
                period: 2,
                brushType: 'fill',
                scale: 5,
            },
            symbol: 'circle',
            symbolSize: function (val) {
                return pointSize;
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: function (params) {
                        return pointColor;
                    },
                    borderWidth: pointBrSize,
                    borderColor: pointBrColor,
                    shadowColor: pointBrColor,
                },
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(8, 18, 42, 0.85)',
                borderColor: '#040616',
                showDelay: 0,
                hideDelay: 0,
                enterable: true,
                transitionDuration: 0,
                extraCssText: 'z-index:100',
                formatter: function (params, ticket, callback) {
                    return '这是tooltip';
                },
            },
            data: item[1].map(function (dataItem, i) {
                return {
                    dataItem: dataItem,
                    name: dataItem[0].name,
                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
                    symbolSize: i % 2 ? pointSize2 : pointSize,
                    itemStyle: {
                        show: false,
                        color: i % 2 ? pointColor2 : pointColor,
                        borderWidth: i % 2 ? pointBrSize2 : pointBrSize,
                        borderColor: i % 2 ? pointBrColor2 : pointBrColor,
                        shadowColor: i % 2 ? pointBrColor2 : pointBrColor,
                        rippleEffect: {
                            color: i % 2 ? pointColor2 : pointColor,
                        },
                    },
                };
            }),
        }
    );
});

option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: regionHighLight,
        borderColor: regionHighLightBr,
        extraCssText: 'z-index:100',
    },
    backgroundColor: mapBgColor,
    geo: {
        map: worldType,
        zoom: 1,
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true,
        itemStyle: {
            normal: {
                color: mapAreaColor,
                borderColor: mapBrColor,
                borderWidth: 1,
            },
            emphasis: {
                color: '#4B587A', //鼠标移入颜色
                borderColor: mapAreaBrColor,
            },
        },
    },
    series: series,
};
