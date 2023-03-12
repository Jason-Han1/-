var dataMap = {};

function dataFormatter(obj) {
    var pList = ['天津', '河北', '辽宁', '上海', '江苏', '浙江', '福建', '山东', '广东', '广西 ', '海 南'];
    var temp;
    for (var year = 2011; year <= 2015; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name: pList[i],
                value: temp[i]
            }
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
    }
    return obj;
}

dataMap.dataGDP = dataFormatter({
    //max : 60000,
    2015: [0, 4, 4, 1, 7, 10, 11, 5, 8, 1, 5],
    2014: [0, 6, 4, 1, 8, 10, 11, 6, 10, 1, 5],
    2013: [0, 6, 4, 1, 8, 11, 11, 6, 10, 1, 5],
    2012: [0, 6, 4, 1, 8, 11, 11, 6, 11, 1, 5],
    2011: [0, 6, 4, 1, 8, 11, 11, 6, 11, 1, 5],
});

dataMap.dataPI = dataFormatter({
    //max : 4000,
    2015: [1, 6, 12, 4, 5, 15, 14, 18, 31, 6, 7],
    2014: [0, 4, 11, 4, 3, 16, 15, 16, 40, 6, 4],
    2013: [1, 4, 11, 4, 3, 14, 15, 16, 40, 6, 4],
    2012: [0, 1, 7, 0, 4, 10, 8, 14, 6, 1, 5],
    2011: [1, 4, 11, 4, 3, 14, 15, 17, 39, 6, 3],
});

dataMap.dataSI = dataFormatter({
    //max : 26600,
    2015: [0, 1, 6, 3, 9, 8, 12, 7, 1, 0, 4],
    2014: [0, 1, 7, 0, 4, 9, 8, 13, 6, 1, 5],
    2013: [0, 1, 7, 0, 4, 10, 8, 13, 6, 1, 5],
    2012: [1, 4, 11, 4, 3, 14, 15, 17, 39, 6, 3],
    2011: [0, 1, 7, 0, 4, 10, 8, 14, 6, 1, 5],
});



dataMap.dataTI = dataFormatter({
    //max : 25000,
    2015: [0, 1, 6, 3, 9, 8, 12, 7, 1, 0, 4],
    2014: [0, 1, 7, 0, 4, 9, 8, 13, 6, 1, 5],
    2013: [0, 1, 7, 0, 4, 10, 8, 13, 6, 1, 5],
    2012: [1, 4, 11, 4, 3, 14, 15, 17, 39, 6, 3],
    2011: [0, 1, 7, 0, 4, 10, 8, 14, 6, 1, 5],

});

dataMap.dataEstate = dataFormatter({
    //max : 3600,
    2015: [1074.93, 411.46, 918.02, 224.91, 384.76, 876.12, 238.61, 492.1, 1019.68, 2747.89, 1677.13, 634.92, 911.16, 402.51, 1838.14, 987, 634.67, 518.04, 3321.31, 465.68, 208.71, 396.28, 620.62, 160.3, 222.31, 17.44, 398.03, 134.25, 29.05, 79.01, 176.22],
    2014: [1006.52, 377.59, 697.79, 192, 309.25, 733.37, 212.32, 391.89, 1002.5, 2600.95, 1618.17, 532.17, 679.03, 340.56, 1622.15, 773.23, 564.41, 464.21, 2813.95, 405.79, 188.33, 266.38, 558.56, 139.64, 223.45, 14.54, 315.95, 110.02, 25.41, 60.53, 143.44],
    2013: [1062.47, 308.73, 612.4, 173.31, 286.65, 605.27, 200.14, 301.18, 1237.56, 2025.39, 1316.84, 497.94, 656.61, 305.9, 1329.59, 622.98, 546.11, 400.11, 2470.63, 348.98, 121.76, 229.09, 548.14, 136.15, 205.14, 13.28, 239.92, 101.37, 23.05, 47.56, 115.23],
    2012: [844.59, 227.88, 513.81, 166.04, 273.3, 500.81, 182.7, 244.47, 939.34, 1626.13, 1052.03, 431.27, 506.98, 281.96, 1104.95, 512.42, 526.88, 340.07, 2057.45, 282.96, 95.6, 191.21, 453.63, 104.81, 195.48, 15.08, 193.27, 93.8, 19.96, 38.85, 89.79],
    2011: [821.5, 183.44, 467.97, 134.12, 191.01, 410.43, 153.03, 225.81, 958.06, 1365.71, 981.42, 366.57, 511.5, 225.96, 953.69, 447.44, 409.65, 301.8, 2029.77, 239.45, 67.19, 196.06, 376.84, 93.19, 193.59, 13.24, 153.98, 83.52, 16.98, 29.49, 91.28],
});

dataMap.dataFinancial = dataFormatter({
    //max : 3200,
    2015: [2215.41, 756.5, 746.01, 519.32, 447.46, 755.57, 207.65, 370.78, 2277.4, 2600.11, 2730.29, 503.85, 862.41, 357.44, 1640.41, 868.2, 674.57, 501.09, 2916.13, 445.37, 105.24, 704.66, 868.15, 297.27, 456.23, 31.7, 432.11, 145.05, 62.56, 134.18, 288.77],
    2014: [1863.61, 572.99, 615.42, 448.3, 346.44, 639.27, 190.12, 304.59, 1950.96, 2105.92, 2326.58, 396.17, 767.58, 241.49, 1361.45, 697.68, 561.27, 463.16, 2658.76, 384.53, 78.12, 496.56, 654.7, 231.51, 375.08, 27.08, 384.75, 100.54, 54.53, 97.87, 225.2],
    2013: [1603.63, 461.2, 525.67, 361.64, 291.1, 560.2, 180.83, 227.54, 1804.28, 1596.98, 1899.33, 359.6, 612.2, 165.1, 1044.9, 499.92, 479.11, 402.57, 2283.29, 336.82, 65.73, 389.97, 524.63, 194.44, 351.74, 23.17, 336.21, 88.27, 45.63, 75.54, 198.87],
    2012: [1519.19, 368.1, 420.74, 290.91, 219.09, 455.07, 147.24, 177.43, 1414.21, 1298.48, 1653.45, 313.81, 497.65, 130.57, 880.28, 413.83, 393.05, 334.32, 1972.4, 249.01, 47.33, 303.01, 411.14, 151.55, 277.66, 22.42, 287.16, 72.49, 36.54, 64.8, 171.97],
    2011: [1302.77, 288.17, 347.65, 218.73, 148.3, 386.34, 126.03, 155.48, 1209.08, 1054.25, 1251.43, 223.85, 385.84, 101.34, 734.9, 302.31, 337.27, 260.14, 1705.08, 190.73, 34.43, 247.46, 359.11, 122.25, 168.55, 11.51, 231.03, 61.6, 27.67, 51.05, 149.22],
});


option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', {
                    value: '2015-01-01',
                    tooltip: {
                        formatter: function(params) {
                            return params.name + '    注： 沿海地带中未包括广东省的东莞、中山和海南的三沙、儋州。';
                        }
                    },
                    symbol: 'diamond',
                    symbolSize: 18
                },
            ],
            label: {
                formatter: function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            subtext: '数据来自国家海洋局信息中心'
        },
        tooltip: {},
        legend: {
            x: 'right',
            data: ['县', '县级市', '区'],
            selected: {
                'GDP': false,
                '金融': false,
                '房地产': false
            }
        },
        calculable: true,
        grid: {
            top: 80,
            bottom: 100
        },
        xAxis: [{
            'type': 'category',
            'axisLabel': {
                'interval': 0
            },
            'data': [
                '天津', '河北', '辽宁', '上海', '江苏', '浙江', '福建', '山东', '广东', '广西 ', '海 南'
            ],
            splitLine: {
                show: true
            }
        }],
        yAxis: [{
            type: 'value',
            name: '单位：个',
            // max: 53500
            max: 100
        }],
        series: [{
            name: 'GDP',
            type: 'bar'
        }, {
            name: '金融',
            type: 'bar'
        }, {
            name: '房地产',
            type: 'bar'
        }, {
            name: '县',
            type: 'bar'
        }, {
            name: '县级市',
            type: 'bar'
        }, {
            name: '区',
            type: 'bar'
        }, {
            name: '合计',
            type: 'pie',
            center: ['75%', '35%'],
            radius: '28%'
        }],
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {
                    readOnly: false
                },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
    },
    options: [

        {
            title: {
                text: '2015年沿海地区行政区划'
            },
            series: [{
                data: dataMap.dataGDP['2011']
            }, {
                data: dataMap.dataFinancial['2011']
            }, {
                data: dataMap.dataEstate['2011']
            }, {
                data: dataMap.dataPI['2011']
            }, {
                data: dataMap.dataSI['2011']
            }, {
                data: dataMap.dataTI['2011']
            }, {
                data: [{
                    name: '县',
                    value: dataMap.dataPI['2011sum']
                }, {
                    name: '县级市',
                    value: dataMap.dataSI['2011sum']
                }, {
                    name: '区',
                    value: dataMap.dataTI['2011sum']
                }]
            }]
        }, {
            title: {
                text: '2014年沿海地区行政区划'
            },
            series: [{
                data: dataMap.dataGDP['2012']
            }, {
                data: dataMap.dataFinancial['2012']
            }, {
                data: dataMap.dataEstate['2012']
            }, {
                data: dataMap.dataPI['2012']
            }, {
                data: dataMap.dataSI['2012']
            }, {
                data: dataMap.dataTI['2012']
            }, {
                data: [{
                    name: '县',
                    value: dataMap.dataPI['2012sum']
                }, {
                    name: '县级市',
                    value: dataMap.dataSI['2012sum']
                }, {
                    name: '区',
                    value: dataMap.dataTI['2012sum']
                }]
            }]
        }, {
            title: {
                text: '2013年沿海地区行政区划'
            },
            series: [{
                data: dataMap.dataGDP['2013']
            }, {
                data: dataMap.dataFinancial['2013']
            }, {
                data: dataMap.dataEstate['2013']
            }, {
                data: dataMap.dataPI['2013']
            }, {
                data: dataMap.dataSI['2013']
            }, {
                data: dataMap.dataTI['2013']
            }, {
                data: [{
                    name: '县',
                    value: dataMap.dataPI['2013sum']
                }, {
                    name: '县级市',
                    value: dataMap.dataSI['2013sum']
                }, {
                    name: '区',
                    value: dataMap.dataTI['2013sum']
                }]
            }]
        }, {
            title: {
                text: '2012年沿海地区行政区划'
            },
            series: [{
                data: dataMap.dataGDP['2014']
            }, {
                data: dataMap.dataFinancial['2014']
            }, {
                data: dataMap.dataEstate['2014']
            }, {
                data: dataMap.dataPI['2014']
            }, {
                data: dataMap.dataSI['2014']
            }, {
                data: dataMap.dataTI['2014']
            }, {
                data: [{
                    name: '县',
                    value: dataMap.dataPI['2014sum']
                }, {
                    name: '县级市',
                    value: dataMap.dataSI['2014sum']
                }, {
                    name: '区',
                    value: dataMap.dataTI['2014sum']
                }]
            }]
        }, {
            title: {
                text: '2011年沿海地区行政区划'
            },
            series: [{
                data: dataMap.dataGDP['2015']
            }, {
                data: dataMap.dataFinancial['2015']
            }, {
                data: dataMap.dataEstate['2015']
            }, {
                data: dataMap.dataPI['2015']
            }, {
                data: dataMap.dataSI['2015']
            }, {
                data: dataMap.dataTI['2015']
            }, {
                data: [{
                    name: '县',
                    value: dataMap.dataPI['2015sum']
                }, {
                    name: '县级市',
                    value: dataMap.dataSI['2015sum']
                }, {
                    name: '区',
                    value: dataMap.dataTI['2015sum']
                }]
            }]
        }
    ]
};