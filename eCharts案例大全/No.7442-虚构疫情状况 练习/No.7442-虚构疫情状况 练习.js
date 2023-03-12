
// function getOffsetDays(time1, time2) {
//     var offsetTime = Math.abs(time2 - time1);
//     return Math.floor(offsetTime / (3600 * 24 * 1e3));
// };

var geoCoordMap = {
             '郑州市': [113.665412,34.757975],
         '开封市': [114.341447,34.797049],
         '洛阳市':[112.434468,34.663041],
         '平顶山市': [113.300848978, 33.7453014565],
         '安阳市': [114.351806508, 36.1102667222],
         '鹤壁市': [114.297769838, 35.7554258742],
         '新乡市': [113.912690161, 35.3072575577],
         '焦作市': [113.211835885, 35.234607555],
         '濮阳市': [115.026627441, 35.7532978882],
         '漯河市': [114.0460614, 33.5762786885],
         '三门峡市': [111.181262093, 34.7833199411],
         '南阳市': [112.542841901, 33.0114195691],
         "商丘市": [115.641885688, 34.4385886402],
         '信阳市': [114.085490993, 32.1285823075],
         '周口市': [114.654101942, 33.6237408181],
         '许昌市': [113.83531246, 34.0267395887],
         '驻马店市': [114.049153547, 32.9831581541]
}

var data = [{
        name: "郑州市",
        value: 39000
    },
    {
        name: "开封市",
        value: 0111
    },
    {
        name: "洛阳市",
        value: 990
    },
    {
        name: "平顶山市",
        value: 3010
     },
    // {
    //     name: "香港",
    //     value: 400
    // },
    // {
    //     name: "澳门",
    //     value: 90
    // },
    // {
    //     name: "台湾",
    //     value: 18
    // },
    // {
    //     name: "武汉",
    //     value: 32994
    // },
    // {
    //     name: "黄石",
    //     value: 911
    // },
    // {
    //     name: "十堰",
    //     value: 562
    // },
    // {
    //     name: "襄阳",
    //     value: 1101
    // },
    // {
    //     name: "宜昌",
    //     value: 810
    // },
    // {
    //     name: "荆州",
    //     value: 1431
    // },
    // {
    //     name: "荆门",
    //     value: 972
    // },
    // {
    //     name: "鄂州",
    //     value: 1065
    // },
    // {
    //     name: "孝感",
    //     value: 35
    // },
    // {
    //     name: "黄冈",
    //     value: 2662
    // },
    // {
    //     name: "咸宁",
    //     value: 534
    // },
    // {
    //     name: "随州",
    //     value: 1160
    // },
    // {
    //     name: "恩施",
    //     value: 229
    // },
    // {
    //     name: "仙桃",
    //     value: 480
    // },
    // {
    //     name: "天门",
    //     value: 362
    // },
    // {
    //     name: "潜江",
    //     value: 94
    // },
    // {
    //     name: "神农架",
    //     value: 10
    // },
]

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

var convertedData = [
    convertData(data),
    convertData(data.sort(function(a, b) {
        return b.value - a.value;
    }).slice(0, 6))
];

myChart.showLoading({
    animation: 'QuarticIn',
    text: 'Loading',
});

var option = {
    baseOption: {
        

        backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#0f378f' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#00091a' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },

        animationDurationUpdate: 1000,

       
        title: {
            padding: 20,
            text: '虚构疫情状况',
            subtext: '国家卫健委测',
            sublink: 'http://www.nhc.gov.cn',
            x: 'left',
            textStyle: {
                color: '#fff'
            },
            subtextStyle: {
                fontStyle: 'italic'
            }
        },

        legend: {
            icon: 'circle',
            orient: 'vertical',
            top: '7%',
            left: 'right',
            data: [{
                    name: 'Top5',
                },
                {
                    name: '散点',
                },
                {
                    name: '热图',
                }
            ],
            textStyle: {
                color: '#fff'
            }
        },

        // brush: {     //top5 涟漪效果
        //     outOfBrush: {
        //         color: 'gray'
        //     },
        //     brushStyle: {
        //         borderWidth: 2,
        //         color: 'rgba(255,255,255,0.2)',
        //         borderColor: 'rgba(0,0,0,0.5)',
        //     },
        //     seriesIndex: [1],
        //     brushMode: 'multiple',
        //     throttleType: 'debounce',
        //     throttleDelay: 300,
        //     geoIndex: 0
        // },

        // toolbox: {   //工具栏
        //     iconStyle: {
        //         normal: {
        //             borderColor: '#fff'
        //         },
        //         emphasis: {
        //             borderColor: '#abc'
        //         }
        //     },
        //     feature: {
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },

        tooltip: {
            trigger: 'item'
        },

        grid: {
            right: '2%',
            top: '20%',
            bottom: '15%',
            width: '15%'
        },

        xAxis: {
            type: 'value',
            scale: true,
            position: 'top',
            boundaryGap: false,
            splitNumber: 4,
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
            nameGap: 95,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#fff'
                }
            },
            data: []
        },

        visualMap: {
            show: false,
            min: 0,
            max: 40000,
            pieces: [{
                    min: 2000
                },
                {
                    min: 1500,
                    max: 2000
                },
                {
                    min: 1000,
                    max: 1500
                },
                {
                    min: 500,
                    max: 1000
                },
                {
                    min: 300,
                    max: 500
                },
                {
                    min: 200,
                    max: 300
                },
                {
                    min: 5,
                    max: 200
                },
                {
                    max: 5
                }
            ],
            inRange: {
                color: ['#50a3ba', '#eac736', '#d94e5d']
            },
            textStyle: {
                color: '#fff'
            }
        },

        geo: {
            //center:[121.487899,31.249162],//视角的中心点为上海
            roam: true, //缩放平移
            scaleLimit: {
                min: 0.5,
                max: 10,
            },

            map: 'henan',
            
            // scaleLimit：{
            //     min:1
            // },
            
            // nameMap: {
            //     selectedMode:single
            // },
             label: {
                    normal: {
                        show: true,
                        color:'#00ffff',
                        fontSize:14,
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
            itemStyle: { //地图区块颜色
                normal: {
                    areaColor: '#3a7fd5',
                    borderColor: '#0a53e9', //线
                    shadowColor: '#092f8f', //外发光
                    shadowBlur: 20
                },
                emphasis: {
                    areaColor: '#0a2dae', //悬浮区背景
                }
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#123555',
                    shadowColor: '#000',
                    shadowBlur: 10
                },
                label: {
                    show: false
                }
            },

            /*regions: [{      //突出显示
                name: '南阳市',
                itemStyle: {
                    areaColor: '#222222'
                },
                emphasis: {            //鼠标悬浮背景颜色
                    itemStyle: {
                        areaColor: '#111111',
                        shadowColor: '#000',
                        shadowBlur: 10
                    },
                }
            }],*/
        },

        series: [{
                name: '热图',
                type: 'heatmap',
                coordinateSystem: 'geo',
                data: convertedData[0]
            },
            {
                name: '散点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertedData[0],
                symbolSize: function(val) {
                    return (5 + Math.log2(val[2]));
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        return params.name + ' : ' + params.value[2];
                    }
                },
            },
            // {
            //     name: 'Top5',
            //     type: 'effectScatter',
            //     coordinateSystem: 'geo',
            //     data: convertData(data.sort(function(a, b) {
            //         return b.value - a.value;
            //     }).slice(0, 5)),
            //     symbolSize: function(val) {
            //         return (6 + Math.log2(val[2]));
            //     },
            //     showEffectOn: 'render',
            //     rippleEffect: {
            //         brushType: 'stroke'
            //     },
            //     hoverAnimation: true,
            //     label: {
            //         normal: {
            //             formatter: '{b}',
            //             position: 'right',
            //             show: true
            //         }
            //     },
            //     itemStyle: {
            //         normal: {
            //             color: '#f4e925',
            //             shadowBlur: 10,
            //             shadowColor: '#333'
            //         }
            //     },
            //     tooltip: {
            //         trigger: 'item',
            //         formatter: function(params) {
            //             return params.name + ' : ' + params.value[2];
            //         }
            //     },
            //     zlevel: 1
            // },
            {
                id: 'bar',
                zlevel: 2,
                type: 'bar',
                symbol: 'none',
                itemStyle: {
                    color: '#ddd',
                },
                emphasis: {
                    color: '#fff',
                    shadowColor: 'rgba(255, 0, 0, 0.5)',
                    shadowBlur: 10
                },
                data: []
            }
        ]
    },
    options: []
}


myChart.hideLoading();
myChart.setOption(option);
// myChart.on('brushselected', renderBrushed);

// setTimeout(function() {
//     myChart.dispatchAction({
//         type: 'brush',
//         // areas: [{
//         //     geoIndex: 0,
//         //     brushType: 'polygon',
//         //     coordRange: [
//         //         [116, 29],
//         //         [116, 34],
//         //         [108, 34],
//         //         [108, 29]
//         //     ]
//         // }]
//     });
// }, 0);

// function renderBrushed(params) {
//     var mainSeries = params.batch[0].selected[0];
//     var selectedItems = [];
//     var categoryData = [];
//     var barData = [];
//     var maxBar = 30;
//     var sum = 0;
//     var count = 0;

//     for (var i = 0; i < mainSeries.dataIndex.length; i++) {
//         var rawIndex = mainSeries.dataIndex[i];
//         var dataItem = convertedData[0][rawIndex];
//         var Value = dataItem.value[2];
//         sum += Value;
//         count++;
//         selectedItems.push(dataItem);
//     }

//     selectedItems.sort(function(a, b) {
//         return a.value[2] - b.value[2];
//     });

//     for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
//         categoryData.push(selectedItems[i].name);
//         barData.push(selectedItems[i].value[2]);
//     }

//     this.setOption({
//         yAxis: {
//             data: categoryData,
//         },

//         xAxis: {
//             axisLabel: {
//                 show: !!count,
//             }
//         },

//         title: {
//             id: 'statistic',
//             right: '8%',
//             top: '10%',
//             text: count ? '区域内总和: ' + (sum) : '',
//             textStyle: {
//                 color: '#fff'
//             },
//         },

//         series: {
//             id: 'bar',
//             data: barData
//         }
//     });
// }