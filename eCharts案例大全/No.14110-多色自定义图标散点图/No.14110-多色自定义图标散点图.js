app.title = '气泡图';

var pathSymbols = {
    reindeer: 'path://M164.8,41.6c-2.4-4.3-8.3-4.8-11.4-1c-10.3,12.3-33.7,13.8-45.4,13.7c-9.4-0.1-18.8,1.2-27.7,4.2C28.7,75.8,39.9,128,39.9,128c-2.5,1.4-6.4,6-9.5,9.9c-2.8,3.6-2.9,8.6-0.2,12.2c1.1,1.5,2.3,3.1,3.4,4.6c2.2,2.8,6.4,2.7,8.5-0.2c5.1-7.1,12.8-14.1,12.8-14.1c31.5,33,86-3.5,86-4C187.1,98.3,174.7,59.7,164.8,41.6z M131.5,89.8c-0.3,2.5-2.5,4.2-5,4c-38.5-4.3-59.8,29.4-60.7,30.8c-0.9,1.4-2.3,2.1-3.8,2.1c-0.8,0-1.6-0.2-2.4-0.7c-2.1-1.3-2.8-4.1-1.5-6.2c1-1.6,25.1-40,69.3-35C130,85.1,131.7,87.4,131.5,89.8z',
    plane: 'path://M180.6,153.8L111.1,33.4c-4.9-8.5-17.2-8.5-22.2,0L19.4,153.8c-4.9,8.5,1.2,19.2,11.1,19.2h139C179.3,173,185.5,162.3,180.6,153.8z M106.6,154H93.4c-2.2,0-3.9-1.8-3.9-3.9v-13.2c0-2.2,1.8-3.9,3.9-3.9h13.2c2.2,0,3.9,1.8,3.9,3.9v13.2C110.5,152.2,108.7,154,106.6,154z M106.6,121.6H93.4c-2.2,0-3.9-1.7-3.9-3.9V77.4c0-2.2,1.7-3.9,3.9-3.9h13.2c2.2,0,3.9,1.7,3.9,3.9v40.3C110.5,119.9,108.8,121.6,106.6,121.6z',
    rocket: 'path://M51.6,140 83.5,108.1 104.5,129.1 148.8,84.8 163,99 163,55 119,55 133.2,69.2 104.5,97.9 83.5,76.9 36,124.4 36,43 12,43 12,164 31,164 36,164 188,164 188,140',
    train:'path://M106.6,18.3L121.8,33l20.9-3c5-0.7,9.7,2.7,10.6,7.7l3.7,20.8l18.7,9.9c4.5,2.4,6.3,7.9,4.1,12.5l-9.3,19l9.3,19c2.2,4.6,0.4,10.1-4.1,12.5l-18.7,9.9l-3.7,20.8c-0.9,5-5.6,8.4-10.6,7.7l-20.9-3l-15.2,14.7c-3.7,3.5-9.5,3.5-13.1,0L78.2,167l-20.9,3c-5,0.7-9.7-2.7-10.6-7.7L43,141.4l-18.7-9.9c-4.5-2.4-6.3-7.9-4.1-12.5l9.3-19l-9.3-19c-2.2-4.6-0.4-10.1,4.1-12.5L43,58.6l3.7-20.8c0.9-5,5.6-8.4,10.6-7.7l20.9,3l15.2-14.7C97.1,14.8,102.9,14.8,106.6,18.3z',
    walk: 'path://M140.5,47.7c-5.7-3.4-13.1-1.6-16.5,4.1c-3.4,5.7-1.6,13.1,4.1,16.5c16.4,10,26.2,27.3,26.2,46.5 c0,30-24.4,54.3-54.3,54.3c-30,0-54.3-24.4-54.3-54.3c0-19.2,9.8-36.6,26.2-46.5c5.7-3.5,7.5-10.8,4.1-16.5 c-3.5-5.7-10.8-7.5-16.5-4.1c-23.7,14.3-37.8,39.4-37.8,67c0,43.2,35.2,78.3,78.3,78.3c43.1,0,78.3-35.1,78.3-78.3 C178.3,87.1,164.2,62,140.5,47.7zM100,92c6.3,0,11.5-5.2,11.5-11.5v-64c0-6.3-5.2-11.5-11.5-11.5s-11.5,5.2-11.5,11.5v64 C88.5,86.8,93.7,92,100,92z'
};





var data = [
    [
        ['2015', 264, 71096869, '工商营业执照', '许可备案'],
        ['2016', 130, 110582082, '公安刻章许可', '许可备案'],
        ['2017', 120, 2110582082, '对外贸易许可备案', '许可备案'],
        ['2014', 170, 310582082, '一般进出口收发货人备案', '许可备案']

    ],
    [
        ['2015', 194, 135939927, '双随机检查', '双随机检查']
    ],
    [
        ['2016', 194, 135939927, '2015企业年报', '企业年报'],
        ['2017', 44, 135939927, '2016企业年报', '企业年报'],
        ['2018', 134, 135939927, '2017企业年报', '企业年报']
    ],
    [
        ['2014', 44, 135939927, '行政处罚A', '行政处罚']
    ],
    [
        ['2013', 14, 135939927, '企业设立', '基本时间节点']
    ]
];

option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        //text: '1990 与 2015 年各国家人均寿命与 GDP'
    },
    legend: {
        right: 10,
        data: ['许可备案', '双随机检查', '企业年报', '行政处罚']
    },
    xAxis: {
        type: 'time',
        //data:['2013','2014','2015','2016','2017','2018'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            // formatter: '{value}'
            formatter: function(value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var da = new Date(value);
                var year = da.getFullYear();
                var month = da.getMonth() + 1;
                // var date = da.getDate()+'日';
                return [year, month];
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: '许可备案',
        data: data[0],
        type: 'scatter',
        symbol: pathSymbols.reindeer,
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'right'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgba(51, 203, 0, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(51, 203, 0, 1)'
                }])
            }
        }
    }, {
        name: '双随机检查',
        data: data[1],
        type: 'scatter',
        symbol: pathSymbols.plane,
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'right'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgba(203, 51, 0, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(203, 51, 0, 1)'
                }])
            }
        }
    }, {
        name: '企业年报',
        data: data[2],
        type: 'scatter',
        symbol: pathSymbols.rocket,
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'right'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgba(51, 152, 203, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(51, 152, 203, 1)'
                }])
            }
        }
    }, {
        name: '行政处罚',
        data: data[3],
        type: 'scatter',
        symbol: pathSymbols.train,
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'right'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgba(51, 51, 51, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(51, 51, 51, 1)'
                }])
            }
        }
    }, {
        // name: '2015',
        data: data[4],
        type: 'scatter',
        symbol: pathSymbols.walk,
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'right'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgba(51, 51, 51, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(51, 51, 51, 1)'
                }])
            }
        }
    }]
};