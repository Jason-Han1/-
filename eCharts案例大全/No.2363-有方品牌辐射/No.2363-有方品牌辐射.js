var geoCoordMap = {
    合肥: [117.252413, 31.853572],
    北京: [116.402464, 39.913581],
    上海: [121.467014, 31.232353],
    重庆: [106.631319, 29.586439],
    西安: [108.949378, 34.351785],
    广州: [113.254346, 23.161361],
    成都: [104.123642, 30.512581],
    兰州: [103.86608, 36.070944],
    哈尔滨: [126.605139, 45.781564],
    乌鲁木齐: [87.60287, 43.76367],
    拉萨: [91.171945, 29.648551],
    呼和浩特: [111.813712, 40.813895],
    昆明: [102.835831, 24.849136],
};

var SHData = [
    [
        {
            name: '合肥',
        },
        {
            name: '合肥',
            value: 150,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '北京',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '上海',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '重庆',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '西安',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '广州',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '成都',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '兰州',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '哈尔滨',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '乌鲁木齐',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '拉萨',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '呼和浩特',
            value: 0,
        },
    ],
    [
        {
            name: '合肥',
        },
        {
            name: '昆明',
            value: 0,
        },
    ],
];

var planePath =
    'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([
                {
                    coord: fromCoord,
                },
                {
                    coord: toCoord,
                },
            ]);
        }
    }
    return res;
};

var color = ['#095bfb', ' #095bfb', '#095bfb', '#095bfb', '	#095bfb'];
var series = [];
[['合肥', SHData]].forEach(function (item, i) {
    series.push(
        {
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3,
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2,
                },
            },

            data: convertData(item[1]),
        },
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15,
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2,
                },
            },

            data: convertData(item[1]),
        },
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15,
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2,
                },
            },

            data: convertData(item[1]),
        },
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15,
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2,
                },
            },

            data: convertData(item[1]),
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke',
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                },
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i],
                },
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                };
            }),
        }
    );
});

var option = {
    backgroundColor: '#fff',
    title: {
        text: '有方品牌辐射',
        subtext: '-',
        left: 'center',
        top: '10%',
        textStyle: {
            color: '#095bfb',
        },
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: [],
        textStyle: {
            color: '#fff',
        },
        selectedMode: 'single',
    },
    geo: {
        map: 'china',
        zoom: 1.2,
        scaleLimit: {
            //控制滚轮缩放大小
            max: 8,
            min: 1,
        },
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#f5f5f5',
                borderColor: '#ccc',
            },
            emphasis: {
                areaColor: '#eee',
            },
        },
    },
    series: series,
};
