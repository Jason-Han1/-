var worldgeoCoordMap = {
    '美国蒙特里': [-121.874729,36.541478],
    '荷兰奥特芬': [5.057415,52.735095],
    '澳大利亚墨尔本': [144.753581,-37.841211],
    '中国上海': [121.061824,31.305304],
    '中国香港（SAR）': [114.127647,22.391850],
    '俄罗斯莫斯科': [37.028350,55.642798],
    '最优地点':[179.9087,28.6479]

};

var chinaDatas = [
    [{name:'最优地点'}, {name:'美国蒙特里',value:95}],
    [{name:'最优地点'}, {name:'荷兰奥特芬',value:90}],
    [{name:'最优地点'}, {name:'澳大利亚墨尔本',value:80}],
    [{name:'最优地点'}, {name:'中国上海',value:70}],
    [{name:'最优地点'}, {name:'中国香港（SAR）',value:60}],
    [{name:'最优地点'}, {name:'俄罗斯莫斯科',value:50}],
];


var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = worldgeoCoordMap[dataItem[0].name];
        var toCoord = worldgeoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: toCoord
            }, {
                coord: fromCoord
            }]);
        }
    }
    return res;
};

var color = ['#a6c84c'];
var series = [];
[['中国北京', chinaDatas]].forEach(function (item, i) {
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
      
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
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
                value: worldgeoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

option = {
    backgroundColor: '#404a59',
    title : {
        text: '模拟迁徙',
        subtext: '数据纯属虚构',
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
        data:['中国北京'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'world',
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