var line2 = [8796, 6201, 4323, 6421, 8245, 6321, 5536];
var line3 = [4796, 1021, 1323, 3321, 3345, 2331, 4356];
var option = {
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        // boundaryGap: false,
        min: function(value) {
            return value.min;
        },
        axisLine: {
            lineStyle: {
                color: '#859bbd'
            }
        },
        //网格样式
        splitLine: {
            show: true,
            lineStyle: {
                color: ['white'],
                shadowOffsetX: 0,
                opacity: 0.5,
                width: 70,
                type: 'solid'
            }
        },
        offset: 1,
        axisTick: {
            show: false
        },
        data: ['2015', '2016', '2017', '2018', '2019']
    }, ],
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#859bbd'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dotted'
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
            name: '在建',
            type: 'line',
            data: line3,
            itemStyle: {
                color: '#859bbd'
            },
            // symbol: 'image://https://dev.cloudiip.com/ht135/assets/%E6%88%91%E7%9A%84%E8%B5%84%E6%BA%90%E5%BA%93/%E5%B7%A5%E4%B8%9A%E6%9C%80%E5%B0%8F%E9%9B%86-BKG-KTOOL-677530320/point1.png',
            symbolSize: 10,
            label: {
                normal: {
                    show: true,
                    formatter: function(data) {
                        // return '{a|hello}';
                        return '{a|' + line3[data.dataIndex] + '}';
                    },
                    rich: {
                        a: {
                            backgroundColor: {
                                // image: 'https://dev.cloudiip.com/ht135/assets/我的资源库/工业最小集-BKG-KTOOL-677530320/0c4d2fab7c6fd421fae852b8c626468.png'
                            },
                            height: 30,
                            align: 'center',
                            fontFamily: 'Microsoft YaHei',
                            fontSize: 13,
                            color: 'black'
                        }
                    }
                }
            }

        },

        {
            name: '完工',
            type: 'line',
            data: line2,
            itemStyle: {
                color: '#1ed8ee'
            },
            // symbol: 'image://https://dev.cloudiip.com/ht135/assets/%E6%88%91%E7%9A%84%E8%B5%84%E6%BA%90%E5%BA%93/%E5%B7%A5%E4%B8%9A%E6%9C%80%E5%B0%8F%E9%9B%86-BKG-KTOOL-677530320/point1.png',
            symbolSize: 10,
            label: {
                normal: {
                    show: true,
                    formatter: function(data) {
                        // return '{a|hello}';
                        return '{a|' + line2[data.dataIndex] + '}';
                    },
                    rich: {
                        a: {
                            backgroundColor: {
                                // image: 'https://dev.cloudiip.com/ht135/assets/我的资源库/工业最小集-BKG-KTOOL-677530320/0c4d2fab7c6fd421fae852b8c626468.png'
                            },
                            height: 30,
                            align: 'center',
                            fontFamily: 'Microsoft YaHei',
                            fontSize: 13,
                            color: 'black'
                        }
                    }
                }
            }

        }
    ]
};