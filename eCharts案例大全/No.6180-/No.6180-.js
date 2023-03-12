var dataxy = {};

function dataFormatter(obj) {
    var pList = ['机电工程学院', '自动化学院', '计算机学院', '轻工化工学院', '材料与能源学院', '信息工程学院', '管理学院', ''];
    var temp;
    for (var year = 2002; year <= 2020; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name: pList[i],
                value: temp[i]
            };
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
        year = year + 2
    }
    return obj;
}
var time = ['2002', '2005', '2008', '2011', '2014', '2017', '2020']
dataxy.dataGJJ = dataFormatter({
    2020: [6, 8, 6, 5, 8, 7, 9, 0, 0],
    2017: [8, 6, 2, 6, 9, 7, 8, 0, 0],
    2014: [3, 5, 8, 1, 5, 9, 5, 0, 0],
    2011: [5, 9, 7, 4, 2, 8, 1, 0, 0],
    2008: [9, 6, 2, 5, 8, 3, 9, 0, 0],
    2005: [8, 4, 6, 1, 5, 2, 2, 0, 0],
    2002: [4, 6, 8, 8, 9, 2, 4, 0, 0]
});

dataxy.dataSBJ = dataFormatter({
    2020: [5, 4, 5, 4, 5, 4, 6, 0, 0],
    2017: [4, 5, 2, 4, 6, 5, 5, 0, 0],
    2014: [6, 2, 2, 9, 5, 4, 7, 0, 0],
    2011: [7, 7, 3, 2, 8, 6, 7, 0, 0],
    2008: [8, 4, 1, 5, 7, 5, 8, 0, 0],
    2005: [5, 5, 1, 5, 8, 5, 8, 0, 0],
    2002: [5, 3, 1, 6, 5, 2, 5, 0, 0]
});

dataxy.dataSTJ = dataFormatter({
    2020: [3, 2, 6, 5, 2, 3, 9, 0, 0],
    2017: [2, 3, 2, 6, 2, 7, 8, 0, 0],
    2014: [1, 2, 8, 5, 6, 9, 5, 0, 0],
    2011: [2, 2, 2, 4, 2, 8, 2, 0, 0],
    2008: [7, 8, 5, 6, 8, 3, 3, 0, 0],
    2005: [5, 4, 6, 1, 5, 2, 1, 0, 0],
    2002: [6, 6, 8, 8, 4, 2, 2, 0, 0]
});

dataxy.dataXJ = dataFormatter({
    2020: [7, 5, 5, 9, 5, 4, 3, 0, 0],
    2017: [5, 2, 1, 5, 1, 4, 5, 0, 0],
    2014: [6, 3, 3, 4, 5, 4, 2, 0, 0],
    2011: [8, 6, 5, 6, 2, 2, 2, 0, 0],
    2008: [2, 9, 2, 2, 6, 5, 6, 0, 0],
    2005: [1, 9, 6, 7, 7, 5, 5, 0, 0],
    2002: [1, 2, 6, 8, 8, 8, 8, 0, 0]
});


option = {
    baseOption: {
        timeline: {
            tooltip: {
                show: false
            },
            playInterval: '3000',
            axisType: 'category',
            autoPlay: true,
            symbol: 'circle',
            symbolSize: 14,
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#4B96F3',
                    borderWidth: 2
                },
                emphasis: {
                    color: '#fff',
                    borderColor: '#4B96F3',
                    borderWidth: 2
                }

            },
            label: {
                normal: {
                    textStyle: {
                        fontSize: 13,
                        color: '#777777'
                    }
                },
                emphasis: {
                    textStyle: {
                        fontSize: 14,
                        color: '#4B96F3'
                    }
                }
            },
            lineStyle: {
                color: '#C9C9C9',
                width: 1
            },
            checkpointStyle: {

                symbolSize: 8,
                color: '#4B96F3',
                borderColor: '#4B96F3',
                borderWidth: 2
            },
            controlStyle: {
                itemGap: 20,
                stopIcon: 'M85.333333 103.466667m86.186667 0l680.96 0q86.186667 0 86.186667 86.186666l0 680.96q0 86.186667-86.186667 86.186667l-680.96 0q-86.186667 0-86.186667-86.186667l0-680.96q0-86.186667 86.186667-86.186666Z,M379.093333 728.533333a32 32 0 0 1-32-32V370.986667a32 32 0 0 1 64 0v325.546666a32 32 0 0 1-32 32zM644.906667 728.533333a32 32 0 0 1-32-32V370.986667a32 32 0 0 1 64 0v325.546666a32 32 0 0 1-32 32z',
                playIcon: 'M85.333333 103.466667m86.186667 0l680.96 0q86.186667 0 86.186667 86.186666l0 680.96q0 86.186667-86.186667 86.186667l-680.96 0q-86.186667 0-86.186667-86.186667l0-680.96q0-86.186667 86.186667-86.186666Z,M687.786667 526.293333l-263.893334-170.666666a8.746667 8.746667 0 0 0-13.653333 7.253333v342.4a8.746667 8.746667 0 0 0 13.653333 7.466667l263.893334-170.666667a8.96 8.96 0 0 0 0-15.786667z,M418.986667 746.666667a39.68 39.68 0 0 1-19.413334-4.906667 40.533333 40.533333 0 0 1-21.333333-35.84V362.666667a40.746667 40.746667 0 0 1 21.333333-35.84 41.386667 41.386667 0 0 1 42.666667 1.706666l263.68 170.666667a40.106667 40.106667 0 0 1 18.56 34.133333 40.533333 40.533333 0 0 1-18.346667 34.346667l-263.893333 170.666667a40.32 40.32 0 0 1-23.253333 8.32z m23.253333-341.333334v257.28L640 533.333333z m228.053333 148.053334z',
                prevIcon: 'M76.586667 93.226667m86.186666 0l680.96 0q86.186667 0 86.186667 86.186666l0 680.96q0 86.186667-86.186667 86.186667l-680.96 0q-86.186667 0-86.186666-86.186667l0-680.96q0-86.186667 86.186666-86.186666Z,M568.533333 746.666667a32.426667 32.426667 0 0 1-21.333333-8.106667L342.613333 554.666667a32.213333 32.213333 0 0 1 0-47.573334l204.586667-183.68a32 32 0 1 1 42.666667 47.786667l-177.92 159.573333 177.92 159.786667a32 32 0 0 1-21.333334 55.893333z',
                nextIcon: 'M85.333333 93.226667m86.186667 0l680.96 0q86.186667 0 86.186667 86.186666l0 680.96q0 86.186667-86.186667 86.186667l-680.96 0q-86.186667 0-86.186667-86.186667l0-680.96q0-86.186667 86.186667-86.186666Z,M436.906667 746.666667a32 32 0 0 1-21.333334-55.893334l177.92-159.786666-177.92-159.573334a32 32 0 1 1 42.666667-47.786666l204.586667 183.68a31.786667 31.786667 0 0 1 0 47.573333l-204.586667 183.68a32 32 0 0 1-21.333333 8.106667z',
				normal: {
                    color: '#D9EEFF',
                    borderColor: '#4B96F3',
                    borderWidth: 1
                },
                emphasis: {
                    color: '#D9EEFF',
                    borderColor: '#4B96F3',
                    borderWidth: 1
                }
            },
            data: time
        },
        tooltip: {},
        legend: {
            data: ['国家级', '省部级', '市厅级', '校级'],
            height: '88%',
            right: '20',
            top: '5',
            itemGap: 20,
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                fontSize: '13',
                color: '#666666',
            },
        },
        calculable: true,
        grid: {
            top: 65,
            bottom: 90,
            left: 40,
            right: 20
        },
        xAxis: [{
            type: 'category',
            data: ['机电工程学院', '自动化学院', '计算机学院', '轻工化工学院', '材料与能源学院', '信息工程学院', '管理学院', ''],
            axisLabel: {
                color: '#777777',
                textStyle: {
                    fontSize: '13'
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#333333',
                }
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            name: '个数（个）',
            nameTextStyle: {
                color: '#777777',
                fontSize: 13,
                padding: [0, 0, 0, 60]
            },
            axisLabel: {
                color: '#777777',
                textStyle: {
                    fontSize: '13'
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#333333',
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#D1D1D1',
                },
            }
        }],
        series: [{
                name: '国家级',
                type: 'bar',
                barWidth: '15px',
                itemStyle: {
                    normal: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#5CC0FF' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#5998FF' // 100% 处的颜色
                            }]
                        },
                        barBorderRadius: [4, 4, 0, 0],
                    }
                }
            },
            {
                name: '省部级',
                type: 'bar',
                barWidth: '15px',
                itemStyle: {
                    normal: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#00D0BF' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#05C399' // 100% 处的颜色
                            }]
                        },
                        barBorderRadius: [4, 4, 0, 0],
                    }
                }
            },
            {
                name: '市厅级',
                type: 'bar',
                barWidth: '15px',
                itemStyle: {
                    normal: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#FFD18C' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FEAD5A' // 100% 处的颜色
                            }]
                        },
                        barBorderRadius: [4, 4, 0, 0],
                    }
                }
            },
            {
                name: '校级',
                type: 'bar',
                barWidth: '15px',
                itemStyle: {
                    normal: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#899BF9' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#7A7AE9' // 100% 处的颜色
                            }]
                        },
                        barBorderRadius: [4, 4, 0, 0],
                    }
                }
            },
            {
                name: '全校',
                type: 'pie',
                center: ['92%', '45%'],
                radius: '28%',
                z: 100,
                color: [{
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#81BEFF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#3295FF' // 100% 处的颜色
                    }],
                }, {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#48D69E' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#70F3C2' // 100% 处的颜色
                    }],
                }, {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#FEAE5C' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FECC84' // 100% 处的颜色
                    }],
                }, {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#A1AEFF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#9686F3' // 100% 处的颜色
                    }],
                }],
                itemStyle: {
                    normal: {
                        show: false,
                    }
                },
                label: {
                    normal: {
                        show: false
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
            }
        ]
    },
    options: [{
            series: [{
                    data: dataxy.dataGJJ['2002']
                },
                {
                    data: dataxy.dataXJ['2002']
                },
                {
                    data: dataxy.dataSTJ['2002']
                },
                {
                    data: dataxy.dataSBJ['2002']
                },
                {
                    data: [{
                            name: '国家级',
                            value: dataxy.dataGJJ['2002sum']
                        },
                        {
                            name: '省部级',
                            value: dataxy.dataXJ['2002sum']
                        },
                        {
                            name: '市厅级',
                            value: dataxy.dataSTJ['2002sum']
                        },
                        {
                            name: '校级',
                            value: dataxy.dataSBJ['2002sum']
                        }
                    ]
                }
            ]
        },
        {
            series: [{
                    data: dataxy.dataGJJ['2005']
                },
                {
                    data: dataxy.dataXJ['2005']
                },
                {
                    data: dataxy.dataSTJ['2005']
                },
                {
                    data: dataxy.dataSBJ['2005']
                },
                {
                    data: [{
                            name: '国家级',
                            value: dataxy.dataGJJ['2005sum']
                        },
                        {
                            name: '省部级',
                            value: dataxy.dataXJ['2005sum']
                        },
                        {
                            name: '市厅级',
                            value: dataxy.dataSTJ['2005sum']
                        },
                        {
                            name: '校级',
                            value: dataxy.dataSBJ['2005sum']
                        }
                    ]
                }
            ]
        },
        {
            series: [{
                    data: dataxy.dataGJJ['2008']
                },
                {
                    data: dataxy.dataXJ['2008']
                },
                {
                    data: dataxy.dataSTJ['2008']
                },
                {
                    data: dataxy.dataSBJ['2008']
                },
                {
                    data: [{
                            name: '国家级',
                            value: dataxy.dataGJJ['2008sum']
                        },
                        {
                            name: '省部级',
                            value: dataxy.dataXJ['2008sum']
                        },
                        {
                            name: '市厅级',
                            value: dataxy.dataSTJ['2008sum']
                        },
                        {
                            name: '校级',
                            value: dataxy.dataSBJ['2008sum']
                        }
                    ]
                }
            ]
        },
        {
            series: [{
                    data: dataxy.dataGJJ['2011']
                },
                {
                    data: dataxy.dataXJ['2011']
                },
                {
                    data: dataxy.dataSTJ['2011']
                },
                {
                    data: dataxy.dataSBJ['2011']
                },
                {
                    data: [{
                            name: '国家级',
                            value: dataxy.dataGJJ['2011sum']
                        },
                        {
                            name: '省部级',
                            value: dataxy.dataXJ['2011sum']
                        },
                        {
                            name: '市厅级',
                            value: dataxy.dataSTJ['2011sum']
                        },
                        {
                            name: '校级',
                            value: dataxy.dataSBJ['2011sum']
                        }
                    ]
                }
            ]
        },
        {
            series: [{
                    data: dataxy.dataGJJ['2014']
                },
                {
                    data: dataxy.dataXJ['2014']
                },
                {
                    data: dataxy.dataSTJ['2014']
                },
                {
                    data: dataxy.dataSBJ['2014']
                },
                {
                    data: [{
                            name: '国家级',
                            value: dataxy.dataGJJ['2014sum']
                        },
                        {
                            name: '省部级',
                            value: dataxy.dataXJ['2014sum']
                        },
                        {
                            name: '市厅级',
                            value: dataxy.dataSTJ['2014sum']
                        },
                        {
                            name: '校级',
                            value: dataxy.dataSBJ['2014sum']
                        }
                    ]
                }
            ]
        },
        {
            series: [{
                    data: dataxy.dataGJJ['2017']
                },
                {
                    data: dataxy.dataXJ['2017']
                },
                {
                    data: dataxy.dataSTJ['2017']
                },
                {
                    data: dataxy.dataSBJ['2017']
                },
                {
                    data: [{
                            name: '国家级',
                            value: dataxy.dataGJJ['2017sum']
                        },
                        {
                            name: '省部级',
                            value: dataxy.dataXJ['2017sum']
                        },
                        {
                            name: '市厅级',
                            value: dataxy.dataSTJ['2017sum']
                        },
                        {
                            name: '校级',
                            value: dataxy.dataSBJ['2017sum']
                        }
                    ]
                }
            ]
        },
        {
            series: [{
                    data: dataxy.dataGJJ['2020']
                },
                {
                    data: dataxy.dataXJ['2020']
                },
                {
                    data: dataxy.dataSTJ['2020']
                },
                {
                    data: dataxy.dataSBJ['2020']
                },
                {
                    data: [{
                            name: '国家级',
                            value: dataxy.dataGJJ['2020sum']
                        },
                        {
                            name: '省部级',
                            value: dataxy.dataXJ['2020sum']
                        },
                        {
                            name: '市厅级',
                            value: dataxy.dataSTJ['2020sum']
                        },
                        {
                            name: '校级',
                            value: dataxy.dataSBJ['2020sum']
                        }
                    ]
                }
            ]
        }
    ]
};