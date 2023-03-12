var geoCoordMap = {
    成都市·2500: [103.6251223, 30.48689578],
    佛山市·15000: [112.891962, 23.27692655],
    广元市·1530: [105.8013481, 32.44590966],
    嘉兴市·1000: [120.8969907, 30.90084376],
    钦州市·520: [109.1743342, 22.36063782],
    唐山市·1000: [118.080983, 39.80509258],
    铜陵市·5000: [117.5446667, 30.87439523],
    新乡市·1000: [113.9835451, 35.05807364],
    漳州市·600: [117.1921018, 24.29526616],
    镇江市·4000: [119.852025, 32.16185649],
    清远市·3000: [112.9746744, 23.74934019],
    茂名市·8000: [111.2190283, 21.67200449],
    石家庄市·15000: [114.5199299, 38.02735555],
    呼和浩特市·15000: [111.0778047, 40.75528242],
};

var CData = [
    [{ name: '成都市·2500' }, { name: '成都市·2500', value: 50 }],
    [{ name: '佛山市·15000' }, { name: '佛山市·15000', value: 150 }],
    [{ name: '广元市·1530' }, { name: '广元市·1530', value: 30.6 }],
    [{ name: '嘉兴市·1000' }, { name: '嘉兴市·1000', value: 20 }],
    [{ name: '钦州市·520' }, { name: '钦州市·520', value: 10.4 }],
    [{ name: '唐山市·1000' }, { name: '唐山市·1000', value: 20 }],
    [{ name: '铜陵市·5000' }, { name: '铜陵市·5000', value: 100 }],
    [{ name: '新乡市·1000' }, { name: '新乡市·1000', value: 20 }],
    [{ name: '漳州市·600' }, { name: '漳州市·600', value: 12 }],
    [{ name: '镇江市·4000' }, { name: '镇江市·4000', value: 80 }],
];

var S2Data = [
    [{ name: '清远市·3000' }, { name: '清远市·3000', value: 60 }],
    [{ name: '茂名市·8000' }, { name: '茂名市·8000', value: 80 }],
    [{ name: '石家庄市·15000' }, { name: '石家庄市·15000', value: 150 }],
    [{ name: '呼和浩特市·15000' }, { name: '呼和浩特市·15000', value: 150 }],
];

var S5Data = [];

var S8Data = [];

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

var color = ['#FF8888', ' #ffa022', '#a6c84c', '#3ed4ff'];
var series = [];
[
    ['汕头', CData],
    ['昭通', S2Data],
    ['白城', S5Data],
    ['保定', S8Data],
].forEach(function (item, i) {
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
    backgroundColor: '#080a20',
    title: {
        text: '',
        left: 'center',
        textStyle: {
            color: '#fff',
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
                areaColor: '#132937',
                borderColor: '#0692a4',
            },
            emphasis: {
                areaColor: '#0b1c2d',
            },
        },
    },
    series: series,
};
