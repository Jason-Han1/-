 
/**
 本例主要需要引入对应省份json数据，
 后通过registerMap()注册对应地图。
*/

//json 改成内蒙古json地址
//let uploadedDataURL = "/asset/get/s/data-1564210925940-PVXI0w9yW.json";
let uploadedDataURL = "/asset/get/s/data-1564375233846-b1zVh02uj.geoJson";

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('lol', geoJson); // 自定义地图
    let geoCoordMap = {
        '呼和浩特市': [111.50328,40.597159],
        '包头市': [110.166038,42.000669],
        '乌海市': [106.325563,39.573734],
        '赤峰市': [118.956806,43.275317],
        '通辽市': [122.263119,43.617429],
        '鄂尔多斯市': [108.99029,39.717179],
        '呼伦贝尔市': [120.758168,49.215333],
        '巴彦淖尔市': [107.416959,41.457402],
        '乌兰察布市': [112.694543,41.734126],
        '兴安盟': [121.070317,46.476268],
        '锡林郭勒盟': [115.090996,43.944018],
        '阿拉善盟': [103.306422,40.544814],
    };
    let data = [{
            name: '呼和浩特市',
            value: 300
        },
        {
            name: '包头市',
            value: 100
        },
        {
            name: '乌海市',
            value: 100
        },
        {
            name: '赤峰市',
            value: 490
        },
        {
            name: '通辽市',
            value: 290
        },
        {
            name: '鄂尔多斯市',
            value: 500
        },
        {
            name: '呼伦贝尔市',
            value: 200
        },
        {
            name: '巴彦淖尔市',
            value: 300
        },
        {
            name: '乌兰察布市',
            value: 500
        },
        {
            name: '兴安盟',
            value: 500
        },
        {
            name: '锡林郭勒盟',
            value: 300
        },
        {
            name: '阿拉善盟',
            value: 500
        },
    ];

    let handleData = function(data) {
        let list = [];
        for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                list.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return list;
    };


    let option = {
        baseOption: {
            timeline: {
                show: false,
            },
        },
        options: [{
            backgroundColor: "#051835",
            title: {
                text: '内蒙古地图分布图-demo',
                left: 'center',
                top: "10",
                textStyle: {
                    color: '#ffffff',
                    fontSize: 24,
                }
            },
            visualMap: {
                min: 0,
                max: 500,
                left: '20',
                bottom: '50',
                text: ['500', '0'],
                calculable: false,
                inRange: {
                    color: ['#bbdaf5', '#76b1e5', '#3f83c7']
                },
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                },
                itemWidth: 30,
                itemHeight: 150,
            },
            geo: {
                show: true,
                map: 'lol',
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
                        borderColor: 'transparent',
                        shadowColor: 'transparent',
                        shadowBlur: 30
                    },
                    emphasis: {
                        areaColor: '#000',
                    }
                }
            },
            "series": [{
                    name: 'light',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: handleData(data),
                    symbolSize: 1,
                    label: {
                            color: '#666666',
                        normal: {
                            formatter: '{b}',
                            color: '#666666',
                            fontSize: 8,
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#666666',
                            areaColor: 'transparent',
                            borderColor: 'transparent',
                            label: {
                                show: true,
                                textStyle: {
                                    color: "#000000",
                                    fontSize: 16
                                }
                            }
                        },
                    }
                },
                {
                    center: "center",
                    "data": data,
                    "label": {
                        "emphasis": {
                            "show": false
                        },
                        "normal": {
                            "show": false
                        }
                    },
                    "mapType": "lol",
                    "roam": false,
                    "type": "map"
                }
            ]
        }]
    }
    myChart.setOption(option);
});