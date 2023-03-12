var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
var option = {
    toolbox: {
        show: true,
        orient: "vertical",
        left: "right",
        top: "center",
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                type: 'png',
                show: true,
                name: '主要城市gdp',
                backgroundColor: 'auto',
                excludeComponents: 'toolbox'





            },
        },
    },
}
var geoCoordMap = {
    '北京': [116.3809433, 39.9236145],
    '天津': [117.2034988, 39.13111877],
    '石家庄': [114.4897766, 38.04512787],
    '太原': [112.5693512, 37.87111282],
    '呼和浩特': [111.6632996, 40.82094193],
    '沈阳': [123.4116821, 41.7966156],
    '大连': [121.6008377, 38.91780472],
    '长春': [125.3154297, 43.89256287],
    '哈尔滨': [126.6433411, 45.74149323],
    '上海': [121.4692688, 31.23817635],
    '南京': [118.7727814, 32.04761505],
    '杭州': [120.1592484, 30.26599503],
    '宁波': [121.5412827, 29.87066841],
    '合肥': [117.2757034, 31.86325455],
    '福州': [119.2978134, 26.07859039],
    '厦门': [118.0875168, 24.45743561],
    '南昌': [115.8999176, 28.67599106],
    '济南': [117.0056, 36.6670723],
    '青岛': [120.3581696, 36.13386154],
    '郑州': [113.6500473, 34.7570343],
    '武汉': [114.2919388, 30.56751442],
    '长沙': [112.9812698, 28.20082474],
    '广州': [113.2614288, 23.11891174],
    '深圳': [114.110672, 22.55639648],
    '南宁': [108.3117676, 22.80654335],
    '海口': [110.3465118, 20.03179359],
    '重庆': [106.5103378, 29.55817604],
    '成都': [104.0817566, 30.66105652],
    '贵阳': [106.7113724, 26.57687378],
    '昆明': [102.704567, 25.04384422],
    '拉萨': [91.1, 29.4],
    '西安': [108.949028, 34.26168442],
    '兰州': [103.7500534, 36.06803894],
    '西宁': [101.7874527, 36.60944748],
    '银川': [106.2719421, 38.46800995],
    '乌鲁木齐': [87.60611725, 43.79093933]

};

var colors = [
    ["#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["pink", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 1;
$(function() {


    var year = ["2015", "2016", "2017", "2018", "2019"];
    var mapData = [
        [],
        [],
        [],
        [],
        [],
        []
    ];
    var data1 = {

        '北京': 35371.28,
        '天津': 14104.28,
        "石家庄": 5810,
        "太原": 4029,
        "呼和浩特": 2791,
        "沈阳": 6470,
        "大连": 7002,
        "长春": 5904,
        "哈尔滨": 5249,
        "上海": 38155.32,
        "南京": 14031,
        "杭州": 15373,
        "宁波": 11985,
        "合肥": 9409,
        "福州": 9392,
        "厦门": 5995,
        "南昌": 5596,
        "济南": 9443,
        "青岛": 11741,
        "郑州": 11590,
        "武汉": 16223,
        "长沙": 11574,
        "广州": 23629,
        "深圳": 26927,
        "南宁": 4507,
        "海口": 1672,
        "重庆": 23605.77,
        "成都": 17013,
        "贵阳": 4040,
        "昆明": 6476,
        "拉萨": 618,
        "西安": 9321,
        "兰州": 2837,
        "西宁": 1328,
        "银川": 1897,
        "乌鲁木齐": 3413,
    };
    var data2 = {
        "北京": 33105.97,
        "天津": 13362.92,
        "石家庄": 6082.62,
        "太原": 3884.48,
        "呼和浩特": 2903.5,
        "沈阳": 6292.4,
        "大连": 7668.48,
        "长春": 7175.71,
        "哈尔滨": 6300.48,
        "上海": 36011.82,
        "南京": 12820.4,
        "杭州": 13509.15,
        "宁波": 10745.46,
        "合肥": 7822.91,
        "福州": 7856.81,
        "厦门": 4791.41,
        "南昌": 5274.67,
        "济南": 7856.56,
        "青岛": 12001.52,
        "郑州": 10143.32,
        "武汉": 14847.29,
        "长沙": 11003.41,
        "广州": 22859.35,
        "深圳": 24221.98,
        "南宁": 4026.91,
        "海口": 1510.51,
        "重庆": 21588.8,
        "成都": 15342.77,
        "贵阳": 3798.45,
        "昆明": 5206.9,
        "拉萨": 540.78,
        "西安": 8349.86,
        "兰州": 2732.94,
        "西宁": 1286.41,
        "银川": 1901.48,
        "乌鲁木齐": 3099.77,

    }
    var data3 = {
        "北京": 28014.94,
        "天津": 18549.19,
        "石家庄": 6460.88,
        "太原": 3382.18,
        "呼和浩特": 2743.72,
        "沈阳": 5864.97,
        "大连": 7363.92,
        "长春": 6530.03,
        "哈尔滨": 6355.05,
        "上海": 30632.99,
        "南京": 11715.1,
        "杭州": 12603.36,
        "宁波": 9842.1,
        "合肥": 7213.45,
        "福州": 7103.4,
        "厦门": 4351.7,
        "南昌": 5003.19,
        "济南": 7201.96,
        "青岛": 11037.28,
        "郑州": 9130.2,
        "武汉": 13410.34,
        "长沙": 10535.51,
        "广州": 21503.15,
        "深圳": 22490.06,
        "南宁": 4118.83,
        "海口": 1390.58,
        "重庆": 19424.73,
        "成都": 13889.39,
        "贵阳": 3537.96,
        "昆明": 4857.64,
        "拉萨": 479.25,
        "西安": 7469.85,
        "兰州": 2523.54,
        "西宁": 1284.91,
        "银川": 1803.26,
        "乌鲁木齐": 2743.82,
    }
    var data4 = {

        "北京": 25669.13,
        "天津": 17885.39,
        "石家庄": 5927.73,
        "太原": 2955.6,
        "呼和浩特": 3173.59,
        "沈阳": 5546.45,
        "大连": 6810.2,
        "长春": 5986.42,
        "哈尔滨": 6101.61,
        "上海": 28178.65,
        "南京": 10503.02,
        "杭州": 11313.72,
        "宁波": 8686.49,
        "合肥": 6274.38,
        "福州": 6197.64,
        "厦门": 3784.27,
        "南昌": 4354.99,
        "济南": 6536.12,
        "青岛": 10011.29,
        "郑州": 8113.97,
        "武汉": 11912.61,
        "长沙": 9356.91,
        "广州": 19547.44,
        "深圳": 19492.6,
        "南宁": 3703.33,
        "海口": 1257.67,
        "重庆": 17740.59,
        "成都": 12170.23,
        "贵阳": 3157.7,
        "昆明": 4300.08,
        "拉萨": 424.95,
        "西安": 6257.18,
        "兰州": 2264.23,
        "西宁": 1248.17,
        "银川": 1617.71,
        "乌鲁木齐": 2458.98,
    }
    var data5 = {


        "北京": 23014.59,
        "天津": 16538.19,
        "石家庄": 5440.6,
        "太原": 2735.34,
        "呼和浩特": 3090.52,
        "沈阳": 7272.31,
        "大连": 7731.64,
        "长春": 5530.03,
        "哈尔滨": 5751.21,
        "上海": 25123.45,
        "南京": 9720.77,
        "杭州": 10050.21,
        "宁波": 8003.61,
        "合肥": 5660.27,
        "福州": 5618.08,
        "厦门": 3466.03,
        "南昌": 4000.01,
        "济南": 6100.23,
        "青岛": 9300.07,
        "郑州": 7311.52,
        "武汉": 10905.6,
        "长沙": 8510.13,
        "广州": 18100.41,
        "深圳": 17502.86,
        "南宁": 3410.09,
        "海口": 1161.96,
        "重庆": 15717.27,
        "成都": 10801.16,
        "贵阳": 2891.16,
        "昆明": 3968.01,
        "拉萨": 376.73,
        "西安": 5801.2,
        "兰州": 2095.99,
        "西宁": 1131.62,
        "银川": 1493.86,
        "乌鲁木齐": 2631.64

            ,
    }
    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];
    for (var key in geoCoordMap) {
        categoryData.push(key);
        mapData[0].push({
            "year": '2015',
            "name": key,
            "value": data5[key] / 100
        });
        mapData[1].push({
            "year": '2016',
            "name": key,
            "value": data4[key] / 100
        });
        mapData[2].push({
            "year": '2017',
            "name": key,
            "value": data3[key] / 100
        });
        mapData[3].push({
            "year": '2018',
            "name": key,
            "value": data2[key] / 100
        });
        mapData[4].push({
            "year": '2019',
            "name": key,
            "value": data1[key] / 100
        });

    }
    for (var i = 0; i < mapData.length; i++) {
        barData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value)
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



        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
                //  height: null,
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
                    right: '1%',
                    top: '15%',
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
                    zoom: 1,
                    center: [113.83531246, 34.0267395887],
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'white',
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
                backgroundColor: '#051b4a',
                title: [{
                        text: '202083020092许建然',
                        subtext: '资源与环境硕研五班',
                        left: 'left',
                        textStyle: {
                            color: 'pink'
                        }
                    },
                    {
                        id: 'statistic',
                        text: year[n] + "年主要城市gdp(百亿元）",
                        subtext: '(暂无台北数据)',

                        left: '40%',
                        top: '1%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 28

                        }
                    }
                ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'bottom',
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
                            color: 'white'
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
                    data: categoryData
                },
                series: [
                    //未知作用
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function(val) {
                            return val[2] / 7;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'center',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][1]
                            }
                        }
                    },

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
                                    color: 'red'
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
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 10)),
                        symbolSize: function(val) {
                            return val[2] / 7;
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