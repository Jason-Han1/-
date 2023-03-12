var uploadedDataURL = "/asset/get/s/data-1631946943149-3XielQM5i.json";



var geoGpsMap = {
    1: [118.887168, 32.123757],
    2: [118.887168, 32.123757],
    3: [118.887168, 32.123757],
    4: [118.887168, 32.123757],
    5: [118.887168, 32.123757],
    6: [118.887168, 32.123757],
};
var geoCoordMap = {
	"栖霞区妇保所": [118.894611, 32.12831],
	"马群社区卫生服务中心": [118.907069, 32.045823],
	"仙林社区卫生服务中心": [118.914975, 32.102825],
	"燕子矶社区卫生服务中心": [118.826144, 32.137535],
	"迈皋桥社区卫生服务中心": [118.86736, 32.120344],
	"西岗社区卫生服务中心": [119.016773, 32.148921],
	"栖霞区医院": [118.887168, 32.123757],
	"八卦洲社区卫生服务中心": [118.832511, 32.180964],
	"靖安社区卫生服务中心": [119.13715, 32.226298],
	"栖霞社区卫生服务中心": [118.957792, 32.149649],
	"龙潭社区卫生服务中心": [119.079298, 32.188193],
	"尧化社区卫生服务中心": [118.901572, 32.133156],
	"其他机构": [118.886398, 32.123233]
};

var d1 = {
	"栖霞区妇保所": 589,
	"马群社区卫生服务中心": 353,
	"仙林社区卫生服务中心": 400,
	"燕子矶社区卫生服务中心": 342,
	"迈皋桥社区卫生服务中心": 407,
	"西岗社区卫生服务中心": 411,
	"栖霞区医院": 234,
	"八卦洲社区卫生服务中心": 339,
	"靖安社区卫生服务中心": 390,
	"栖霞社区卫生服务中心": 334,
	"龙潭社区卫生服务中心": 401,
	"尧化社区卫生服务中心": 401,
	"其他机构": 201
};

var d2 = {
	"栖霞区妇保所": 170,
	"马群社区卫生服务中心": 385,
	"仙林社区卫生服务中心": 316,
	"燕子矶社区卫生服务中心": 324,
	"迈皋桥社区卫生服务中心": 571,
	"西岗社区卫生服务中心": 284,
	"栖霞区医院": 107,
	"八卦洲社区卫生服务中心": 581,
	"靖安社区卫生服务中心": 486,
	"栖霞社区卫生服务中心": 586,
	"龙潭社区卫生服务中心": 373,
	"尧化社区卫生服务中心": 505,
	"其他机构": 309
};

var d3 = {
	"栖霞区妇保所": 417,
	"马群社区卫生服务中心": 176,
	"仙林社区卫生服务中心": 528,
	"燕子矶社区卫生服务中心": 510,
	"迈皋桥社区卫生服务中心": 368,
	"西岗社区卫生服务中心": 208,
	"栖霞区医院": 337,
	"八卦洲社区卫生服务中心": 462,
	"靖安社区卫生服务中心": 200,
	"栖霞社区卫生服务中心": 511,
	"龙潭社区卫生服务中心": 358,
	"尧化社区卫生服务中心": 157,
	"其他机构": 112
};

var d4 = {
	"栖霞区妇保所": 457,
	"马群社区卫生服务中心": 275,
	"仙林社区卫生服务中心": 403,
	"燕子矶社区卫生服务中心": 590,
	"迈皋桥社区卫生服务中心": 143,
	"西岗社区卫生服务中心": 345,
	"栖霞区医院": 193,
	"八卦洲社区卫生服务中心": 332,
	"靖安社区卫生服务中心": 480,
	"栖霞社区卫生服务中心": 303,
	"龙潭社区卫生服务中心": 476,
	"尧化社区卫生服务中心": 373,
	"其他机构": 334
};

var d5 = {
	"栖霞区妇保所": 514,
	"马群社区卫生服务中心": 528,
	"仙林社区卫生服务中心": 500,
	"燕子矶社区卫生服务中心": 313,
	"迈皋桥社区卫生服务中心": 466,
	"西岗社区卫生服务中心": 289,
	"栖霞区医院": 449,
	"八卦洲社区卫生服务中心": 277,
	"靖安社区卫生服务中心": 440,
	"栖霞社区卫生服务中心": 269,
	"龙潭社区卫生服务中心": 426,
	"尧化社区卫生服务中心": 223,
	"其他机构": 234
};

var d6 = {
	"栖霞区妇保所": 463,
	"马群社区卫生服务中心": 518,
	"仙林社区卫生服务中心": 102,
	"燕子矶社区卫生服务中心": 355,
	"迈皋桥社区卫生服务中心": 371,
	"西岗社区卫生服务中心": 189,
	"栖霞区医院": 232,
	"八卦洲社区卫生服务中心": 494,
	"靖安社区卫生服务中心": 174,
	"栖霞社区卫生服务中心": 286,
	"龙潭社区卫生服务中心": 307,
	"尧化社区卫生服务中心": 579,
	"其他机构": 372
};

var colors = [
    ['#1DE9B6', '#1DE9B6', '#FFDB5C', '#FFDB5C', '#04B9FF', '#04B9FF'],
    ['#1DE9B6', '#F46E36', '#04B9FF', '#5DBD32', '#FFC809', '#FB95D5', '#BDA29A', '#6E7074', '#546570', '#C4CCD3'],
    [
        '#37A2DA',
        '#67E0E3',
        '#32C5E9',
        '#9FE6B8',
        '#FFDB5C',
        '#FF9F7F',
        '#FB7293',
        '#E062AE',
        '#E690D1',
        '#E7BCF3',
        '#9D96F5',
        '#8378EA',
        '#8378EA',
    ],
    [
        '#DD6B66',
        '#759AA0',
        '#E69D87',
        '#8DC1A9',
        '#EA7E53',
        '#EEDD78',
        '#73A373',
        '#73B9BC',
        '#7289AB',
        '#91CA8C',
        '#F49F42',
    ],
];

var colorIndex = 0;
$(function () {
    var year = ['检查', '检验', '心电', '转诊', '会诊', '消毒'];
    var mapData = [[], [], [], [], [], []];
    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            year: '检查',
            name: key,
            value: d1[key] / 100,
            value1: d1[key] / 100,
        });
        mapData[1].push({
            year: '检验',
            name: key,
            value: d1[key] / 100,
            value1: d2[key] / 100,
        });
        mapData[2].push({
            year: '心电',
            name: key,
            value: d3[key] / 100,
            value1: d3[key] / 100,
        });
        mapData[3].push({
            year: '转诊',
            name: key,
            value: d3[key] / 100,
            value1: d4[key] / 100,
        });
        mapData[4].push({
            year: '会诊',
            name: key,
            value: d5[key] / 100,
            value1: d5[key] / 100,
        });
        mapData[5].push({
            year: '消毒',
            name: key,
            value: d5[key] / 100,
            value1: d6[key] / 100,
        });
    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value;
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value1);
            categoryData[i].push(mapData[i][j].name);
        }
    }

    $.getJSON(uploadedDataURL, function (geoJson) {
        console.log(geoJson)
        echarts.registerMap('320113', geoJson);
        
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };

        var convertToLineData = function (data, gps) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var toCoord = geoCoordMap[dataItem.name];
                var fromCoord = gps; //郑州
                //  var toCoord = geoGps[Math.random()*3];
                if (fromCoord && toCoord) {
                    res.push([
                        {
                            coord: fromCoord,
                            value: dataItem.value,
                        },
                        {
                            coord: toCoord,
                        },
                    ]);
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
                            color: '#ddd',
                        },
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#555',
                },
                checkpointStyle: {
                    borderColor: '#777',
                    borderWidth: 2,
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666',
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa',
                    },
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
                    width: '20%',
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(150,150,150,0.1)', //hover颜色
                        },
                    },
                },
                geo: {
                    show: true,
                    map: '320113',
                    roam: true,
                    zoom: 1,
                    label: {
                        emphasis: {
                            show: false,
                        },
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
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10,
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0,
                        },
                    },
                },
            },
            options: [],
        };

        for (var n = 0; n < year.length; n++) {
            optionXyMap01.options.push({
                backgroundColor: '#013954',
                title: [
                    {
                        id: 'statistic',
                        text: year[n] + '数据统计情况',
                        left: '80%',
                        top: '8%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 16,
                        },
                    },
                ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    boundaryGap: false,
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        margin: 2,
                        textStyle: {
                            color: '#aaa',
                        },
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd',
                        },
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd',
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#ddd',
                        },
                    },
                    data: categoryData[n],
                },
                series: [
                    //未知作用
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                            },
                            emphasis: {
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                            },
                        },
                    },
                    //地图？
                    {
                        type: 'map',
                        map: '320113',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#FFFFFF',
                            },
                            emphasis: {
                                areaColor: '#2B91B7',
                            },
                        },
                        animation: false,
                        data: mapData,
                    },
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(
                            mapData[n]
                                .sort(function (a, b) {
                                    return b.value - a.value;
                                })
                                .slice(0, 20)
                        ),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke',
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                                shadowBlur: 10,
                                shadowColor: colors[colorIndex][n],
                            },
                        },
                        zlevel: 1,
                    },
                    //地图线的动画效果
                    {
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 4, //箭头指向速度，值越小速度越快
                            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: 'arrow', //箭头图标
                            symbolSize: 3, //图标大小
                        },
                        lineStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                                width: 0.1, //尾迹线条宽度
                                opacity: 0.5, //尾迹线条透明度
                                curveness: 0.3, //尾迹线条曲直度
                            },
                        },
                        data: convertToLineData(mapData[n], geoGpsMap[n + 1]),
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                            },
                        },
                        data: barData[n],
                    },
                ],
            });
        }
        myChart.setOption(optionXyMap01);
    });
});

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}
