var uploadedDataURL = "/asset/get/s/data-1508742650101-Skf-IMjab.json";

var geoCoordMap = {
    "延边朝鲜族自治州": [129.397, 43.2587],
    "吉林市": [126.8372, 43.6047],
    "白城市": [123.0029, 45.2637],
    "松原市": [124.0906, 44.7198],
    "长春市": [125.8154, 44.2584],
    "白山市": [127.2217, 42.0941],
    "通化市": [125.9583, 41.8579],
    "四平市": [124.541, 43.4894],
    "辽源市": [125.343, 42.7643],
    "梅河口市": [125.68, 42.53],
    "公主岭市": [124.93, 43.72],
    "长白山": [127.9417, 42.1441]
};

var data = [{
    name: '延边朝鲜族自治州',
    code: '222400',
    value: 9
}, {
    name: '吉林市',
    code: '220200',
    value: 9
}, {
    name: '白城市',
    code: '220800',
    value: 9
}, {
    name: '松原市',
    code: '220700',
    value: 9
}, {
    name: '长春市',
    code: '220100',
    value: 9
}, {
    name: '白山市',
    code: '220600',
    value: 9
}, {
    name: '通化市',
    code: '220500',
    value: 9
}, {
    name: '四平市',
    code: '220300',
    value: 9
}, {
    name: '辽源市',
    code: '220400',
    value: 9
}, {
    name: '梅河口市',
    code: '220581',
    value: 9
}, {
    name: '公主岭市',
    code: '220381',
    value: 9
}, {
    name: '长白山',
    code: '222500',
    value: 9
}];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                code: data[i].code
            });
        }
    }
    return res;
};

$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap('FeatureCollection', geoJson);
    option = {
        backgroundColor: 'rgba(0, 68, 183, 1)',
        title: {
            text: ''
        },
        visualMap: {
            min: 0,
            max: 200,
            calculable: true,
            inRange: {
                color: ['#ffe400']
            },
            textStyle: {
                color: '#fff'
            },
            show: false
        },
        geo: {
            map: 'FeatureCollection',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(255,255,255,0)',
                    borderColor: '#00b4ff'
                },
                emphasis: {
                    areaColor: 'rgba(255,255,255,0)'
                }
            }
        },
        series: [{
            name: '',
            type: 'scatter',
            roam: false,
            coordinateSystem: 'geo',
            data: convertData(data),
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    color: '#fff',
                    fontSize: 13,
                    show: true
                }
            },itemStyle: {
             normal: {
               borderColor: {
                 type: 'radial',
                 x: 0.5,
                 y: 0.5,
                 r: 0.5,
                 colorStops: [{
                   offset: 0, color: 'rgba(255,255,255,0)' // 0% 处的颜色
                 },
                 {
                   offset: 0.8, color: 'rgba(255,255,255,0)' // 100% 处的颜色
                 }, {
                   offset: 1, color: 'rgba(255,255,255,1)' // 100% 处的颜色
                 }],
                 globalCoord: false // 缺省为 false
               },
               borderWidth: 5
             },
             emphasis: {
               borderColor: {
                 type: 'radial',
                 x: 0.5,
                 y: 0.5,
                 r: 0.5,
                 colorStops: [{
                   offset: 0, color: 'rgba(255,255,255,0)' // 0% 处的颜色
                 },
                 {
                   offset: 0.8, color: 'rgba(255,255,255,0)' // 100% 处的颜色
                 }, {
                   offset: 1, color: 'rgba(255,255,255,1)' // 100% 处的颜色
                 }],
                 globalCoord: false // 缺省为 false
               },
               borderWidth: 5
             }
           },
            // 文本位置修正
            textFixed: {
                Alaska: [20, -20]
            }
        }]
    };
    myChart.setOption(option);
    myChart.on('click', function(param) {
        console.log(param);
    });
});