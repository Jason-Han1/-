var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

var geoCoordMap = {
    "北京":[116.4551,40.2539],
    "天津":[117.4219,39.4189],
    "河北":[114.4995,38.1006],
    "山西":[112.3352,37.9413],
    "内蒙古":[111.4124,40.4901],
    "辽宁":[123.1238,42.1216],
    "长春":[125.8154,44.2584],
    "黑龙江":[127.9688,45.368],
    "上海":[121.4648,31.2891],
    "江苏":[118.8062,31.9208],
    "浙江":[119.5313,29.8773],
    "安徽":[117.29,32.0581],
    "福建":[119.4543,25.9222],
    "江西":[116.0046,28.6633],
    "山东":[117.1582,36.8701],
    "河南":[113.4668,34.6234],
    "湖北":[114.3896,30.6628],
    "湖南":[113.0823,28.2568],
    "广东":[113.5107,23.2196],
    "广西":[108.479,23.1152],
    "海南":[110.3893,19.8516],
    "重庆":[107.7539,30.1904],
    "四川":[103.9526,30.7617],
    "贵州":[106.6992,26.7682],
    "云南":[102.9199,25.4663],
    "西藏":[91.1865,30.1465],
    "陕西":[109.1162,34.2004],
    "甘肃":[103.5901,36.3043],
    "青海":[101.4038,36.8207],
    "宁夏":[106.3586,38.1775],
    "新疆":[87.9236,43.5883],
    "香港":[114.2784,22.3057],
    "澳门":[113.5715,22.1583],
    "台湾":[121.0295,23.6082],
};

//1995年数据
var d1 = {
    "北京":	262	,
    "天津":	179	,
    "河北":	603	,
    "山西":	399	,
    "内蒙古":	187	,
    "辽宁":	623	,
    "长春":	268	,
    "黑龙江":	409	,
    "上海":	403	,
    "江苏":	685	,
    "浙江":	440	,
    "安徽":	289	,
    "福建":	261	,
    "江西":	181	,
    "山东":	741	,
    "河南":	571	,
    "湖北":	415	,
    "湖南":	375	,
    "广东":	788	,
    "广西":	221	,
    "海南":	32	,
    "重庆":	0	,
    "四川":	583	,
    "贵州":	204	,
    "云南":	224	,
    "西藏":	0	,
    "陕西":	240	,
    "甘肃":	241	,
    "青海":	69	,
    "宁夏":	92	,
    "新疆":	120	,
    "香港":	0	,
    "澳门":	0	,
    "台湾":	0	,
};

//2000年数据
var d2 = {
    "北京":	384	,
    "天津":	234	,
    "河北":	809	,
    "山西":	502	,
    "内蒙古":	254	,
    "辽宁":	749	,
    "长春":	291	,
    "黑龙江":	442	,
    "上海":	559	,
    "江苏":	971	,
    "浙江":	738	,
    "安徽":	339	,
    "福建":	402	,
    "江西":	208	,
    "山东":	1001	,
    "河南":	719	,
    "湖北":	503	,
    "湖南":	406	,
    "广东":	1335	,
    "广西":	314	,
    "海南":	38	,
    "重庆":	308	,
    "四川":	521	,
    "贵州":	288	,
    "云南":	274	,
    "西藏":	0	,
    "陕西":	293	,
    "甘肃":	295	,
    "青海":	109	,
    "宁夏":	136	,
    "新疆":	183	,
    "香港":	0	,
    "澳门":	0	,
    "台湾":	0	,
};
//2005年数据
var d3 = {
    "北京":	571	,
    "天津":	385	,
    "河北":	1502	,
    "山西":	946	,
    "内蒙古":	668	,
    "辽宁":	1111	,
    "长春":	378	,
    "黑龙江":	556	,
    "上海":	922	,
    "江苏":	2193	,
    "浙江":	1642	,
    "安徽":	582	,
    "福建":	757	,
    "江西":	392	,
    "山东":	1912	,
    "河南":	1353	,
    "湖北":	789	,
    "湖南":	674	,
    "广东":	2674	,
    "广西":	510	,
    "海南":	82	,
    "重庆":	348	,
    "四川":	943	,
    "贵州":	487	,
    "云南":	557	,
    "西藏":	0	,
    "陕西":	516	,
    "甘肃":	489	,
    "青海":	207	,
    "宁夏":	303	,
    "新疆":	310	,
    "香港":	0	,
    "澳门":	0	,
    "台湾":	0	,
};
//2010年数据
var d4 = {
    "北京":	810	,
    "天津":	646	,
    "河北":	2692	,
    "山西":	1460	,
    "内蒙古":	1537	,
    "辽宁":	1715	,
    "长春":	577	,
    "黑龙江":	748	,
    "上海":	1296	,
    "江苏":	3864	,
    "浙江":	2821	,
    "安徽":	1078	,
    "福建":	1315	,
    "江西":	701	,
    "山东":	3298	,
    "河南":	2354	,
    "湖北":	1330	,
    "湖南":	1172	,
    "广东":	4060	,
    "广西":	993	,
    "海南":	159	,
    "重庆":	626	,
    "四川":	1549	,
    "贵州":	835	,
    "云南":	1004	,
    "西藏":	20	,
    "陕西":	859	,
    "甘肃":	804	,
    "青海":	465	,
    "宁夏":	547	,
    "新疆":	662	,
    "香港":	0	,
    "澳门":	0	,
    "台湾":	0	,
};
//2015年数据
var d5 = {
    "北京":	953	,
    "天津":	801	,
    "河北":	3176	,
    "山西":	1737	,
    "内蒙古":	2543	,
    "辽宁":	1985	,
    "长春":	652	,
    "黑龙江":	869	,
    "上海":	1406	,
    "江苏":	5115	,
    "浙江":	3554	,
    "安徽":	1640	,
    "福建":	1852	,
    "江西":	1087	,
    "山东":	5117	,
    "河南":	2880	,
    "湖北":	1665	,
    "湖南":	1448	,
    "广东":	5311	,
    "广西":	1334	,
    "海南":	272	,
    "重庆":	875	,
    "四川":	1992	,
    "贵州":	1174	,
    "云南":	1439	,
    "西藏":	41	,
    "陕西":	1222	,
    "甘肃":	1099	,
    "青海":	658	,
    "宁夏":	878	,
    "新疆":	2160	,
    "香港":	0	,
    "澳门":	0	,
    "台湾":	0	,
};
//2018年数据
var d6 = {
    "北京":	1142	,
    "天津":	861	,
    "河北":	3666	,
    "山西":	2161	,
    "内蒙古":	3353	,
    "辽宁":	2302	,
    "长春":	751	,
    "黑龙江":	974	,
    "上海":	1567	,
    "江苏":	6128	,
    "浙江":	4533	,
    "安徽":	2135	,
    "福建":	2314	,
    "江西":	1429	,
    "山东":	5917	,
    "河南":	3418	,
    "湖北":	2071	,
    "湖南":	1745	,
    "广东":	6323	,
    "广西":	1703	,
    "海南":	327	,
    "重庆":	1119	,
    "四川":	2459	,
    "贵州":	1482	,
    "云南":	1679	,
    "西藏":	69	,
    "陕西":	1594	,
    "甘肃":	1290	,
    "青海":	738	,
    "宁夏":	1065	,
    "新疆":	2686	,
    "香港":	0	,
    "澳门":	0	,
    "台湾":	0	,
};
//2019年数据
var d7 = {
    "北京":	1166	,
    "天津":	878	,
    "河北":	3856	,
    "山西":	2262	,
    "内蒙古":	3653	,
    "辽宁":	2401	,
    "长春":	780	,
    "黑龙江":	996	,
    "上海":	1569	,
    "江苏":	6264	,
    "浙江":	4706	,
    "安徽":	2301	,
    "福建":	2402	,
    "江西":	1536	,
    "山东":	6219	,
    "河南":	3364	,
    "湖北":	2214	,
    "湖南":	1864	,
    "广东":	6696	,
    "广西":	1907	,
    "海南":	355	,
    "重庆":	1160	,
    "四川":	2636	,
    "贵州":	1541	,
    "云南":	1812	,
    "西藏":	78	,
    "陕西":	1912	,
    "甘肃":	1288	,
    "青海":	716	,
    "宁夏":	1084	,
    "新疆":	2868	,
    "香港":	0	,
    "澳门":	0	,
    "台湾":	0	,
};

var colors = [
    ["#1DE9B6", "#ffb6c1", "#87cefa", "#e0ffff", "#ffff4d", "#FB95D5", "#afeeee", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
    var year = ["1995", "2000", "2005", "2010", "2015", "2018","2019"];
    var mapData = [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            "year": '1995',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '2000',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '2005',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "year": '2010',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "year": '2015',
            "name": key,
            "value": d5[key],
        });
        mapData[5].push({
            "year": '2018',
            "name": key,
            "value": d6[key],
        });
          mapData[6].push({
            "year": '2019',
            "name": key,
            "value": d7[key],
        });
    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value);
            categoryData[i].push(mapData[i][j].name);
        }
    }

    $.getJSON(uploadedDataURL, function(geoJson) {

        echarts.registerMap('china', geoJson);
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        
        //底部时间轴的属性
        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
                left: '8%',
                right: '8%',
                bottom: '3%',
                width: '60%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },

            },
            baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                    right: '5%',
                    top: '19%',
                    bottom: '10%',
                    width: '20%'
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(150,150,150,0.1)' //hover颜色
                        }
                    }
                },
                geo: {
                    show: true,
                    map: 'china',
                    roam: true,
                    zoom: 0.82,
                    center: [116.83531246, 35.0267395887],
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    }
                },
            },
            options: []

        };

        for (var n = 0; n < year.length; n++) {
            optionXyMap01.options.push({
                backgroundColor: '#013954',
                title:
                    [{
                            text: '中国各省电力消费量（1995-2019年）',
                            left: '5%',
                            top: '5%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 25
                            }
                        },
                        {
                            id: 'statistic',
                            text: year[n] + "年数据统计情况",
                            right: '9%',
                            top: '8%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 20
                            }
                        },
                        {
                            id: 'datasource',
                            text: '数据来源：《中国统计年鉴》，作者自行整理',
                            left: '5%',
                            top:'11%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 13
                            }
                        },
                        {
                            id: 'data tips',
                            text: '( 港澳台地区缺乏数据；1995年未设立重庆 )',
                            left: '5%',
                            top:'15%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 10
                            }
                        },
                         {
                            id: 'data unit',
                            text: '( 单位：亿千瓦小时 )',
                            right: '9%',
                            top:'12.5%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 10
                            }
                        }
                    ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 2,
                        textStyle: {
                            color: '#aaa'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    data: categoryData[n]
                },

                series: [
                    //地图
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#FFFFFF',
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                        animation: false,
                        data: mapData
                    },
                    //地图中闪烁的点
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 10000)),
                        symbolSize: function(val) {
                            return val[2] / 100;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                                shadowBlur: 10,
                                shadowColor: colors[colorIndex][n]
                            }
                        },
                        zlevel: 1
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n]
                            }
                        },
                        data: barData[n]
                    }
                ]
            })
        }
        myChart.setOption(optionXyMap01);
    });
});
