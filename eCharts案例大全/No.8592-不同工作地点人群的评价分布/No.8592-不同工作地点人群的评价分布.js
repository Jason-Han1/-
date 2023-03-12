let uploadedDataURL = "/asset/get/s/data-1564648280635-lBUMhhbt2.json";

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('lol', geoJson); // 自定义地图
    let geoCoordMap = {
       '遵义市': [106.937265,27.996626],
       '六盘水市': [104.846743,26.184643],
       '黔东南苗族侗族自治州': [108.977488,26.583352],
       '铜仁市': [108.591555,27.818346],
       '黔西南布依族苗族自治州': [105.597971,25.28812],
       '贵阳市': [106.713478,26.878343],
       '黔南布依族苗族自治州': [107.27156,25.758219],
       '毕节市': [105.28501,27.01693],
       '安顺市':[105.932188,26.045544],
       };
    let data = [{
            name: '遵义市',
            value: 1183.15
        },
        {
            name: '六盘水市',
            value: 80.17
        },
        {
            name: '黔东南苗族侗族自治州',
            value: 81.78
        },
        {
            name: '铜仁市',
            value: 78.63
        },
        {
            name: '黔西南布依族苗族自治州',
            value: 76.37
        },
        {
            name: '贵阳市',
            value: 78.01
        },
        {
            name: '黔南布依族苗族自治州',
            value: 74.93
        },
        {
            name: '毕节市',
            value: 76.87
        },
        {
            name: '安顺市',
            value: 77.06
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
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}万'
            },
        },
        options: [{
            backgroundColor: "white",
            title: {
                text: '不同工作地点人群的评价分布',
                subtext: '',
                sublink: 'http://42.123.101.206:81/tjnj/2018/zk/indexch.htm',
                left: 'center',
                top: "10",
                textStyle: {
                    color: 'black',
                    fontSize: 24,
                }
            },
            visualMap: {
                min: 70,
                max: 85,
                left: '20',
                bottom: '50',
                text: ['85', '70'],
                calculable: false,
                inRange: {
                    color: ['yellow', 'orangered','red' ]
                },
                textStyle: {
                    color: 'black',
                    fontSize: 15
                },
                itemWidth: 20,
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
                        areaColor: 'black',
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
                        normal: {
                            formatter: '{b}',
                            fontSize: 10,
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            areaColor: 'transparent',
                            borderColor: 'transparent',
                            label: {
                                show: true,
                                textStyle: {
                                    color: "black",
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