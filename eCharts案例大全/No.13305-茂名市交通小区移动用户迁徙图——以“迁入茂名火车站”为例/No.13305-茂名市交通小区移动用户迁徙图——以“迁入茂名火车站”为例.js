//var uploadedDataURL = "/asset/get/s/data-1530863617806-Hy5bejnMX.json";//规划区

//var uploadedDataURL = "/asset/get/s/data-1530802138825-HJXkghjzX.json";//茂名市

var uploadedDataURL = "/asset/get/s/data-1530799116666-r1rM4jsGm.json"; //广东省


$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('茂名市', geoJson);
   

    var allData = {
        "citys": [{
                "name": "茂名火车站\n42506",
                "value": [110.935278,21.648779, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#FF0000"
                    }
                }
            }, 
            {
                "name": "主城区\n30586",
                "value": [110.937898,21.674967, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#FF4500"
                    }
                }
            },
            {
                "name": "高新区\n524",
                "value": [111.059028, 21.534912, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "中国第一滩\n155",
                "value": [111.043506, 21.470883, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "博贺港\n107",
                "value": [111.309117, 21.490794, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "鳌头镇\n385",
                "value": [110.871606, 21.56073, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "旦场镇\n19",
                "value": [111.106172, 21.528456, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "公馆镇\n917",
                "value": [110.848897, 21.685455, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "观珠镇\n102",
                "value": [111.188097, 21.701575, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "黄岭镇\n19",
                "value": [111.1651, 21.84067, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "金塘镇\n276",
                "value": [110.846597, 21.75261, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "林头镇\n104",
                "value": [111.06564, 21.668795, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "岭门镇\n25",
                "value": [111.390467, 21.578478, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "罗坑镇\n224",
                "value": [111.262261, 21.830471, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "麻岗镇\n28",
                "value": [111.192696, 21.539753, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "马踏镇\n170",
                "value": [111.347924, 21.620418, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "放鸡岛\n1",
                "value": [111.194421, 21.386903, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "袂花镇\n4927",
                "value": [110.943758, 21.588157, 1],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#FF4500"
                    }
                }
            },
            {
                "name": "那霍镇\n258",
                "value": [111.245589, 21.894338, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "坡心镇\n556",
                "value": [111.007717, 21.637554, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "七迳镇\n366",
                "value": [111.002687, 21.569335, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "沙琅镇\n46",
                "value": [111.21095, 21.809197, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "沙院镇\n84",
                "value": [110.966755, 21.49678, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "山阁镇\n705",
                "value": [110.942896, 21.728438, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "树仔镇\n11",
                "value": [111.241564, 21.543048, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "望夫镇\n59",
                "value": [111.386712,21.7364, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "霞洞镇\n74",
                "value": [111.124856, 21.746769, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "小良镇\n124",
                "value": [110.905239, 21.495704, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "羊角镇\n785",
                "value": [110.992051, 21.676924, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            },
            {
                "name": "镇盛镇\n869",
                "value": [110.85867, 21.612421, 1],
                "symbolSize": 1,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }
        ],
         "moveLines": [{
                "fromName": "主城区",
                "toName": "茂名火车站",
                "coords": [
                    [110.937898,21.674967],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "中国第一滩",
                "toName": "茂名火车站",
                "coords": [
                    [111.043506,21.470883],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "高新区",
                "toName": "茂名火车站",
                "coords": [
                    [111.059028, 21.534912],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "博贺",
                "toName": "茂名火车站",
                "coords": [
                    [111.309117, 21.490794],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "鳌头镇",
                "toName": "茂名火车站",
                "coords": [
                    [110.871606, 21.56073],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "旦场镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.106172, 21.528456],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "公馆镇",
                "toName": "茂名火车站",
                "coords": [
                    [110.848897, 21.685455],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "观珠镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.188097, 21.701575],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "黄岭镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.1651, 21.84067],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "金塘镇",
                "toName": "茂名火车站",
                "coords": [
                    [110.846597, 21.75261],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "林头镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.06564, 21.668795],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "岭门镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.390467, 21.578478],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "罗坑镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.262261, 21.830471],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "麻岗镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.192696, 21.539753],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "放鸡岛",
                "toName": "茂名火车站",
                "coords": [
                    [111.194421, 21.386903],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "马踏镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.347924, 21.620418],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "袂花镇",
                "toName": "茂名火车站",
                "coords": [
                    [110.943758, 21.588157],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "那霍镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.245589, 21.894338],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "坡心镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.007717, 21.637554],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "七迳镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.002687, 21.569335],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "沙琅镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.21095, 21.809197],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "沙院镇",
                "toName": "茂名火车站",
                "coords": [
                    [110.966755, 21.49678],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "山阁镇",
                "toName": "茂名火车站",
                "coords": [
                    [110.942896, 21.728438],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "树仔镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.241564, 21.543048],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "望夫镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.386712,21.7364],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "霞洞镇",
                "toName": "茂名火车站",
                "coords": [
                    [111.124856, 21.746769],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "小良镇",
                "toName": "茂名火车站",
                "coords": [
                    [110.905239, 21.495704],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "羊角镇",
                "toName": "茂名火车站",
                "coords": [
                    [110.992051, 21.676924],
                    [110.935278,21.648779]
                ]
            },
            {
                "fromName": "镇盛镇",
                "toName": "茂名火车站",
                "coords": [
                    [110.85867, 21.612421],
                    [110.935278,21.648779]
                ]
            }
        ]
    };

    option = {
        backgroundColor: '#404a59',
        title: {
            text: '茂名市交通小区移动用户迁徙图——以“迁入茂名火车站”为例',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        legend: {
            show: true,
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['地点', '线路'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: '茂名市',
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
        series: [{
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'fill',
                period: 7,
                scale: 26
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance:15,
                    formatter: '{b}',
                    fontSize:15
                }
            },
            symbolSize: 2,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9'
                }
            },
            data: allData.citys
        }, {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 3,
            large: true,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'arrow', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 6,
                trailLength: 0,
            },
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#58B3CC'
                    }, {
                        offset: 1,
                        color: '#F58158'
                    }], false),
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: allData.moveLines
        }]
    };
    myChart.setOption(option);
});