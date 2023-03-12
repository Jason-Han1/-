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
            value: 274
        },
        {
            name: '六盘水市',
            value: 165
        },
        {
            name: '黔东南苗族侗族自治州',
            value: 199
        },
        {
            name: '铜仁市',
            value: 124
        },
        {
            name: '黔西南布依族苗族自治州',
            value: 119
        },
        {
            name: '贵阳市',
            value: 268
        },
        {
            name: '黔南布依族苗族自治州',
            value: 138
        },
        {
            name: '毕节市',
            value: 225
        },
        {
            name: '安顺市',
            value: 174
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
                formatter: '{b}: {c}份'
            },
        },
        options: [{
            backgroundColor: "white",
            title: {
                text: '调查问卷的地区分布',
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
                min: 100,
                max: 275,
                left: '20',
                bottom: '50',
                text: ['275', '0'],
                calculable: false,
                inRange: {
                    color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
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