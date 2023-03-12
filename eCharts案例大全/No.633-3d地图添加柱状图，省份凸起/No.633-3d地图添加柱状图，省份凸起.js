var dataMaps = [
    { name: '北京', value: 0 },
    { name: '天津', value: 0 },
    { name: '河北', value: 0 },
    { name: '山西', value: 0 },
    { name: '内蒙古', value: 0 },
    { name: '辽宁', value: 0 },
    { name: '吉林', value: 0 },
    { name: '黑龙江', value: 0 },
    { name: '上海', value: 0 },
    { name: '江苏', value: 0 },
    { name: '浙江', value: 0 },
    { name: '安徽', value: 0 },
    { name: '福建', value: 0 },
    { name: '江西', value: 0 },
    { name: '山东', value: 0 },
    { name: '河南', value: 0 },
    { name: '湖北', value: 0 },
    { name: '湖南', value: 0 },
    { name: '重庆', value: 0 },
    { name: '四川', value: 0 },
    { name: '贵州', value: 0 },
    { name: '云南', value: 0 },
    { name: '西藏', value: 0 },
    { name: '陕西', value: 0 },
    { name: '甘肃', value: 0 },
    { name: '青海', value: 0 },
    { name: '宁夏', value: 0 },
    { name: '新疆', value: 0 },
    { name: '广东', value: 0 },
    { name: '广西', value: 0 },
    { name: '海南', value: 0 },
    { name: '台湾', value: 0 },
];

dataMaps.forEach((item) => {
    let d = (Math.random() * 300).toFixed(0);
    item.value = d;
    item.height = d / 100;
    return item;
});
console.log(dataMaps);

let geoCoordMap = {
    海门: [121.15, 31.89],
    鄂尔多斯: [109.781327, 39.608266],
    招远: [120.38, 37.35],
    舟山: [122.207216, 29.985295],
    齐齐哈尔: [123.97, 47.33],
    盐城: [120.13, 33.38],
    赤峰: [118.87, 42.28],
    青岛: [120.33, 36.07],
    乳山: [121.52, 36.89],
    金昌: [102.188043, 38.520089],
    泉州: [118.58, 24.93],
    莱西: [120.53, 36.86],
    日照: [119.46, 35.42],
    胶南: [119.97, 35.88],
    南通: [121.05, 32.08],
    拉萨: [91.11, 29.97],
    云浮: [112.02, 22.93],
    梅州: [116.1, 24.55],
    文登: [122.05, 37.2],
    上海: [121.48, 31.22],
    攀枝花: [101.718637, 26.582347],
    威海: [122.1, 37.5],
    承德: [117.93, 40.97],
    厦门: [118.1, 24.46],
    汕尾: [115.375279, 22.786211],
    潮州: [116.63, 23.68],
    丹东: [124.37, 40.13],
    太仓: [121.1, 31.45],
    曲靖: [103.79, 25.51],
    烟台: [121.39, 37.52],
    福州: [119.3, 26.08],
    瓦房店: [121.979603, 39.627114],
    即墨: [120.45, 36.38],
    抚顺: [123.97, 41.97],
    玉溪: [102.52, 24.35],
    张家口: [114.87, 40.82],
    阳泉: [113.57, 37.85],
    莱州: [119.942327, 37.177017],
    湖州: [120.1, 30.86],
    汕头: [116.69, 23.39],
    昆山: [120.95, 31.39],
    宁波: [121.56, 29.86],
    湛江: [110.359377, 21.270708],
    揭阳: [116.35, 23.55],
    荣成: [122.41, 37.16],
    连云港: [119.16, 34.59],
    葫芦岛: [120.836932, 40.711052],
    常熟: [120.74, 31.64],
    东莞: [113.75, 23.04],
    河源: [114.68, 23.73],
    淮安: [119.15, 33.5],
    泰州: [119.9, 32.49],
    南宁: [108.33, 22.84],
    营口: [122.18, 40.65],
    惠州: [114.4, 23.09],
    江阴: [120.26, 31.91],
    蓬莱: [120.75, 37.8],
    韶关: [113.62, 24.84],
    嘉峪关: [98.289152, 39.77313],
    广州: [113.23, 23.16],
    延安: [109.47, 36.6],
    太原: [112.53, 37.87],
    清远: [113.01, 23.7],
    中山: [113.38, 22.52],
    昆明: [102.73, 25.04],
    寿光: [118.73, 36.86],
    海南: [118.73, 36.86],
};

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
    console.log(res);
    return res;
};

option = {
    tooltip: {
        show: true,
    },
    visualMap: {
        show: true,
        min: 0,
        max: 200,
        left: 'left',
        bottom: '8%',
        text: ['高', '低'], // 文本，默认为数值文本
        // calculable: true,
        // seriesIndex: [1],
        showLabel: true,
        pieces: [
            {
                gt: 200,
                label: '> 200 亿千瓦时',
                color: '#5B5A86',
            },
            {
                gt: 100,
                lte: 200,
                label: '100 - 200 亿千瓦时',
                color: '#B9D6B5',
            },
            {
                gt: 10,
                lte: 100,
                label: '10 - 100 亿千瓦时',
                color: '#CBD0D3',
            },
            {
                gt: 0,
                lte: 10,
                label: '≤10 亿千瓦时',
                color: '#EDEAD3',
            },
        ],
        // inRange: {
        //   color: ['#EDEAD3', '#5B5A86'] // 蓝绿
        // }
    },
    geo3D: {
        map: 'china',
        roam: true,
        regionHeight: 0,
        //shading: 'lambert',
        //  light: { //光照阴影
        //      main: {
        //          color: '#fff', //光照颜色
        //          intensity: 1.2, //光照强度
        //          //shadowQuality: 'high', //阴影亮度
        //          shadow: true, //是否显示阴影
        //          alpha:55,
        //          beta:10

        //      },
        //       ambient: {
        //          intensity: 0.3
        //      }
        //  }
    },
    series: [
        //柱状图
        {
            name: '发电量',
            type: 'bar3D',
            coordinateSystem: 'geo3D',
            barSize: 0.5, //柱子粗细
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.2,
            label: {
                show: false,
                formatter: '{b}',
            },
            data: [{ name: '黑龙江', value: [125.03, 46.58, 156] }],
        },
        {
            type: 'map3D',
            map: 'china',
            itemStyle: {
                  areaColor: '#374151',// 地图配色
                // areaColor: 'rgba(10, 133, 171, 0.8)',
                opacity: 1,
                borderWidth: 0.4,
                borderColor: '#00FFF8', // 地图边配色
            },

            data: dataMaps,
        },
    ],
};
