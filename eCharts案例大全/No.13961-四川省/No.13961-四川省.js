var uploadedDataURL = "/asset/get/s/data-1509086574767-r1wOrIlC-.json";

function showProvince1() {
    var name = '安全感受度';
    var data_arr = [{
        "name": "成都市",
        "value": 67.2
    }, {
        "name": "绵阳市",
        "value": 67.0
    }, {
        "name": "自贡市",
        "value": 75.8
    }, {
        "name": "攀枝花市",
        "value": 72.0
    }, {
        "name": "泸州市",
        "value": 65.1
    }, {
        "name": "德阳市",
        "value": 72.5
    }, {
        "name": "广元市",
        "value": 73.6
    }, {
        "name": "遂宁市",
        "value": 71.9
    }, {
        "name": "内江市",
        "value": 65.6
    }, {
        "name": "乐山市",
        "value": 72.4
    }, {
        "name": "资阳市",
        "value": 62.9
    }, {
        "name": "宜宾市",
        "value": 67.6
    }, {
        "name": "南充市",
        "value": 69.9
    }, {
        "name": "达州市",
        "value": 72.5
    }, {
        "name": "雅安市",
        "value": 73.1
    }, {
        "name": "阿坝藏族羌族自治州",
        "value": 68.1
    }, {
        "name": "甘孜藏族自治州",
        "value": 53.7
    }, {
        "name": "凉山彝族自治州",
        "value": 60.4
    }, {
        "name": "广安市",
        "value": 68.6
    }, {
        "name": "巴中市",
        "value": 61.7
    }, {
        "name": "眉山市",
        "value": 67.5
    }]
    $.get(uploadedDataURL, function(geoJson) {
        echarts.registerMap(name, geoJson);
        var Color = ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#FFF', '#b4c8fd', '#0048ff', '#002ea2', '#002ea2', '#002ea2', '#002ea2'];
        myChart.setOption(option = {
            backgroundColor: 'rgb(32,36,40)',
            title: {
                text: "四川省",
                subtext: '纯属虚构',
                top: '10',
                left: 'center',
                textStyle: {
                    color: '#ddeeff'
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0.8)',
                extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.6);',
            },
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                realtime: false,
                calculable: false,
                inRange: {
                    color: Color
                }
            },
            series: [{
                name: '安全感受度',
                type: 'map',
                top: 120,
                bottom: 80,
                mapType: name,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: 'rgba(0, 0, 0, 0.7)'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgba(0, 0, 0, 1)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: Color[0],
                        borderColor: '#fff',
                    },
                    emphasis: {
                        areaColor: Color[0],
                        borderColor: '#cfe1ff',
                    }
                },
                data: data_arr
            }]
        });
    });
}

var currentIdx = 0;

showProvince1();