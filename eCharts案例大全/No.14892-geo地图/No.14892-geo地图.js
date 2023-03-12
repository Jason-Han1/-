var geoCoordMap = {
'福州': [119.4543,25.9222],
'太原': [112.3352,37.9413],
'长春': [125.8154,44.2584],
'重庆': [107.7539,30.1904],
'西安': [109.1162,34.2004],
'成都': [103.9526,30.7617],
'常州': [119.4543,31.5582],
'北京': [116.4551,40.2539],
'北海': [109.314,21.6211],
'海口': [110.3893,19.8516],
'广州': [113.5107,23.2196]
};

var GZData = [
    [{name:'广州'},{name:'福州',value:95}],
    [{name:'广州'},{name:'太原',value:90}],
    [{name:'广州'},{name:'长春',value:80}],
    [{name:'广州'},{name:'重庆',value:70}],
    [{name:'广州'},{name:'西安',value:60}],
    [{name:'广州'},{name:'成都',value:50}],
    [{name:'广州'},{name:'常州',value:40}],
    [{name:'广州'},{name:'北京',value:30}],
    [{name:'广州'},{name:'北海',value:20}],
    [{name:'广州'},{name:'海口',value:10}]
];

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

var color = ['#46bee9'];
var series = [];
[['广州', GZData]].forEach(function (item, i) {
    series.push(
    {
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'arrow',
            symbolSize: 5
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
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
    tooltip : {
        trigger: 'item'
    },
    geo: {
        map: 'china',
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