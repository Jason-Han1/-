 var geoCoordMap = {
            '瓮安变': [107.533922148438, 27.1260353828125],
            '果果坪变': [107.283922148438, 27.2135134101563],
            '山坪变': [107.383045683594, 26.9179103828125],
            '福泉变': [107.443045683594, 26.6679103828125],
            '福泉电厂': [107.483045683594, 26.6679103828125],
            '龙里变': [107.183260527344, 26.8197585273438],
            '旧治变': [107.177345, 26.1038430000001],
            '都匀变': [107.177345, 26.1038430000001],
            '湾塘变': [106.887345, 25.923843],
            '威远变': [106.217345, 26.033843],
            '剑江变': [106.887345, 25.923843],
            '甘塘变': [106.687345, 25.693843],
            '中和变': [107.603516875, 26.0112331367188],
            '麻尾变': [107.687345, 25.203843],
            '石牌变': [107.797115507813, 26.1135134101563],
            '瓮朗变': [108.597115507813, 26.1135134101563],           
            '贵阳青岩变': [108.197115507813, 26.1135134101563]
        };

        var BJData = [
        [{ name: '福泉电厂' }, { name: '福泉变', value: 5 }],
        [{ name: '福泉变' }, { name: '瓮安变', value: 5 }],
        [{ name: '福泉变' }, { name: '旧治变', value: 5 }],
        [{ name: '福泉变' }, { name: '甘塘变', value: 5 }],
        [{ name: '福泉变' }, { name: '瓮朗变', value: 5 }],
        [{ name: '福泉变' }, { name: '山坪变', value: 5 }],
        [{ name: '福泉变' }, { name: '瓮安变', value: 5 }],
        [{ name: '独山变' }, { name: '麻尾变', value: 5 }],
        [{ name: '独山变' }, { name: '都匀变', value: 5 }],
        [{ name: '石牌变' }, { name: '中和变', value: 5 }],
        [{ name: '都匀变' }, { name: '甘塘变', value: 5 }],
        [{ name: '都匀变' }, { name: '剑江变', value: 5 }],
        [{ name: '甘塘变' }, { name: '剑江变', value: 5 }],
        [{ name: '贵阳青岩变' }, { name: '湾塘变', value: 5 }],
        [{ name: '湾塘变' }, { name: '威远变', value: 5 }],
        [{ name: '瓮安变' }, { name: '果果坪变', value: 5 }]     


        ];


var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [];
[['都匀市', BJData]].forEach(function (item, i) {
    series.push({
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            //symbol: planePath,
            symbolSize: 5
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + ' Top10',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

option = {
    backgroundColor: '#404a59',
    title : {
        text: '都匀供电局负荷走向图',
        subtext: '5分钟实时数据',
        left: 'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:[],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        map: '黔南布依族苗族自治州',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series
};