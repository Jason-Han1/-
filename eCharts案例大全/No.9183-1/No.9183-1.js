var geoCoordMap = {};
var features = echarts.getMap('china').geoJson.features;
features.map(function(f) {
    var prop = f.properties;
    geoCoordMap[prop.name] = prop.cp;
});


    var data=[[108.59530449,35.05142975,
108.59530449,35.04974339,
108.60114098,35.04988392,
108.59667778,35.05550497,
108.60114098,35.04988392,
108.60157013,35.04742460,
108.60783577,35.04749486,
108.61925125,35.04912857,
108.61957312,35.04817997,
108.61925125,35.04912857,
108.62603188,35.05086764,
108.62131119,35.05452132,
108.62925053,35.05936922,
108.62093031,35.05494288,
108.61745685,35.05801895,
108.61676216,35.05733173,
108.61745954,35.05801895,
108.61411482,35.06097634,
108.61255646,35.05943947,
108.61019611,35.06098512,
108.61255646,35.05943947,
108.61929417,35.06607852,
108.61411482,35.06097853,
108.62093031,35.05494288,
108.62925589,35.05936922,
108.62425625,35.05631736,
108.63294125,35.05287015,
108.63444328,35.05346739,
108.64508629,35.05079737,
108.64276886,35.05494288,
108.64452839,35.05575088,
108.63853097,35.06424317,
108.61547470,35.07524583,
108.62327993,35.07152283,
108.62433672,35.08248061,
108.62328029,35.07152083,
108.63853097,35.06424317,
108.63819838,35.06771185,
108.63853097,35.06424317,
108.64226460,35.06790064,
108.64161015,35.06909928,
108.64226460,35.06790064,
108.64580512,35.07114525,
108.64671707,35.06966127,
108.64580512,35.07114525,
108.65142703,35.07212871,
108.65100861,35.07278726,
108.65142703,35.07212871,
108.65535378,35.07406924,
108.65358353,35.07594826,
108.65535378,35.07406924,
108.66022736,35.07600753,
108.65465909,35.08326461,
108.64710331,35.07988178,
108.65465909,35.08326461,
108.64989281,35.08947137,
108.65166843,35.08715785,
108.64869281,35.08608020,
108.65167111,35.08715785,
108.66022736,35.07600753,
108.66946220,35.07931986,
108.67111444,35.08235769,
108.66916180,35.08219966,
108.67111444,35.08235769,
108.66920071,35.09319211,
108.66538525,35.09273463,
108.66920071,35.09319211,
108.66750151,35.10277231,
108.66285592,35.10210961,
108.66048217,35.10368956,
108.66285324,35.10210961,
108.66750151,35.10277231,
108.66662979,35.10772706,
108.67111444,35.08235769,
108.66946220,35.07931986,
108.67293835,35.07917938,
108.67216587,35.07538632,
108.67293835,35.07917938,
108.67453694,35.07916401,
108.67389321,35.07589558,
108.67453694,35.07916401,
108.67617846,35.07915304,
108.67643595,35.08023298,
108.67617846,35.07915304,
108.67858171,35.07910914,
108.68240082,35.07914426]];
    var hStep =  (data.length - 1);
    var busLines = [].concat.apply([], data.map(function (busLine, idx) {
        var prevPt;
        var points = [];
        for (var i = 0; i < busLine.length; i += 2) {
            var pt = [busLine[i], busLine[i + 1]];
            if (i > 0) {
                pt = [
                    pt[0],
                    pt[1]
                ];
            }
            prevPt = pt;
            points.push([pt[0] , pt[1] ]);
        }
        return {
            coords: points,
            lineStyle: {
                normal: {
                    color: echarts.color.modifyHSL('#8eb9f5')
                }
            }
        };
    }));
console.log(geoCoordMap);
var BJData = [
    [{
        name: '北京'
    }, {
        name: '上海',
        value: 95
    }],
    [{
        name: '北京'
    }, {
        name: '广州',
        value: 90
    }],
    [{
        name: '北京'
    }, {
        name: '大连',
        value: 80
    }],
    [{
        name: '北京'
    }, {
        name: '南宁',
        value: 70
    }],
    [{
        name: '北京'
    }, {
        name: '南昌',
        value: 60
    }],
    [{
        name: '北京'
    }, {
        name: '拉萨',
        value: 50
    }],
    [{
        name: '北京'
    }, {
        name: '长春',
        value: 40
    }],
    [{
        name: '北京'
    }, {
        name: '包头',
        value: 30
    }],
    [{
        name: '北京'
    }, {
        name: '重庆',
        value: 20
    }],
    [{
        name: '北京'
    }, {
        name: '常州',
        value: 10
    }]
];

var SHData = [
    [{
        name: '上海'
    }, {
        name: '包头',
        value: 95
    }],
    [{
        name: '上海'
    }, {
        name: '昆明',
        value: 90
    }],
    [{
        name: '上海'
    }, {
        name: '广州',
        value: 80
    }],
    [{
        name: '上海'
    }, {
        name: '郑州',
        value: 70
    }],
    [{
        name: '上海'
    }, {
        name: '长春',
        value: 60
    }],
    [{
        name: '上海'
    }, {
        name: '重庆',
        value: 50
    }],
    [{
        name: '上海'
    }, {
        name: '长沙',
        value: 40
    }],
    [{
        name: '上海'
    }, {
        name: '北京',
        value: 30
    }],
    [{
        name: '上海'
    }, {
        name: '丹东',
        value: 20
    }],
    [{
        name: '上海'
    }, {
        name: '大连',
        value: 10
    }]
];

var GZData = [
    [{
        name: '广州'
    }, {
        name: '福州',
        value: 95
    }],
    [{
        name: '广州'
    }, {
        name: '太原',
        value: 90
    }],
    [{
        name: '广州'
    }, {
        name: '长春',
        value: 80
    }],
    [{
        name: '广州'
    }, {
        name: '重庆',
        value: 70
    }],
    [{
        name: '广州'
    }, {
        name: '西安',
        value: 60
    }],
    [{
        name: '广州'
    }, {
        name: '成都',
        value: 50
    }],
    [{
        name: '广州'
    }, {
        name: '常州',
        value: 40
    }],
    [{
        name: '广州'
    }, {
        name: '北京',
        value: 30
    }],
    [{
        name: '广州'
    }, {
        name: '北海',
        value: 20
    }],
    [{
        name: '广州'
    }, {
        name: '海口',
        value: 10
    }]
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function(data) {
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
[

    ['176田玉线',BJData]
].forEach(function(item, i) {
    var points = [];
    item[1].map(function(dataItem) {
        var cp = geoCoordMap[dataItem[1].name];
        if (cp) {
            points.push({
                name: dataItem[1].name,
                value: cp.concat([dataItem[1].value])
            })
        }
    });

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
    }, {
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
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
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
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
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: points
    },
    {
        name:'176田玉线',
            type: 'lines',
            coordinateSystem: 'geo',
            polyline: true,
            data: busLines,
            silent: true,
            lineStyle: {
                normal: {
                    // color: '#c23531',
                    // color: 'rgb(200, 35, 45)',
                    opacity: 0.2,
                    width: 1
                }
            },
            progressiveThreshold: 500,
            progressive: 200
        },{
            type: 'lines',
            coordinateSystem: 'geo',
            polyline: true,
            data: busLines,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            effect: {
                constantSpeed: 20,
                show: true,
                trailLength: 0.1,
                symbolSize: 1.5
            },
            zlevel: 1
        }
    );
});
// series = [];
option = {
    backgroundColor: '#404a59',
    title: {
        text: '模拟迁徙',
        subtext: '数据纯属虚构',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['北京 Top10', '上海 Top10', '广州 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        center: [108.66022736,35.07600753],
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