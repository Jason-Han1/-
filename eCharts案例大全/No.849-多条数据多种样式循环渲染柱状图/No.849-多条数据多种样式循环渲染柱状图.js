var sourceBar = {
    "itemData": ["正面表彰类", "中性类", "弄虚作假类", "公平公正类", "突发事件类", "测试类"],
    "seriesData": [980, 302, 150, 57, 231, 300]
}
var itemData = sourceBar.itemData;
var seriesData = sourceBar.seriesData;
var tooltip = sourceBar.tooltip
// var backgroundList = ['#0068b7', '#8c97cb', '#aa89bd', '#f6b37f', '#e27e34'];
var color = ['#00b9f6', '#38a97d', '#004eff', '#17c7e7', '#4e85ea', '#e49be9', '#078d9d', '#eca52a', '#ef9544', '#ea3b3b']
// var colorArray = [
//     [{
//         "offset": 0,
//         "color": "#078d9d"
//     }, {
//         "offset": 1,
//         "color": "#ea3b3b"
//     }],
//     [{
//         "offset": 0,
//         "color": "#078d9d"
//     }, {
//         "offset": 1,
//         "color": "#078d9d"
//     }],
//     [{
//         "offset": 0,
//         "color": "#4e85ea"
//     }, {
//         "offset": 1,
//         "color": "#4e85ea"
//     }],
//     [{
//         "offset": 0,
//         "color": "#004eff"
//     }, {
//         "offset": 1,
//         "color": "#17c7e7"
//     }],
//     [{
//         "offset": 0,
//         "color": "#00b9f6"
//     }, {
//         "offset": 1,
//         "color": "#38a97d"
//     }]
// ];

var data = {};
for (var k in itemData) {
    data[itemData[k]] = seriesData[k];
}

var xAxisData = [];
var dataArr = [];
for (var i in data) {
    xAxisData.push(i);
    dataArr.push(data[i]);
}

option = {
    backgroundColor: '#142058',
    grid: {
        top: '25%',
        left: '5%',
        right: '10%',
        bottom: '8%',
        containLabel: true
    },
    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                color: 'rgba(112,112,112,0)',
            },
        },
        formatter: function(params) {
            var unit = params[0].name.substring(params[0].name.indexOf('(') + 1, params[0].name.indexOf(')'));
            return params[0].name + '：' + params[0].value + '条数据';
        },
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    xAxis: [{
        show: true,
        name: '来源',
        nameTextStyle: {
            fontSize: 14,
            fontFamily: 'Microsoft YaHei',
            color: '#fff'
        },
        type: 'category',
        nameLocation: 'end',
        nameGap: 8,
        axisLabel: {
            fontSize: 16,
            fontFamily: 'Microsoft YaHei',
            color: "#fff",
            interval: 0,
            margin: 16,
            formatter: function(params) {
                if (params.length > 6) {
                    params = params.substr(0, 6) + "...";
                } else {
                    params = params;

                }
                return params;
            }
        },
        axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            lineStyle: {
                color: '#05edfc'
            }
        },
        data: xAxisData
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: xAxisData
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: xAxisData
    }],
    yAxis: {
        type: 'value',
        name: '数量',
        nameTextStyle: {
            fontSize: 14,
            fontFamily: 'Microsoft YaHei',
            color: '#fff'
        },
        minInterval: 1,
        nameLocation: 'end',
        nameGap: 10,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            fontSize: 12,
            fontFamily: 'Arial',
            color: "#fff"
        },
        axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            lineStyle: {
                color: '#05edfc'
            }
        }
    },
    series: [{
            type: 'bar',
            stack: 1,
            xAxisIndex: 0,
            barWidth: 10,
            barGap: 5,
            z: 2,
            data: function() {
                var itemArr = [];
                for (var i = 1; i < (dataArr.length + 1); i++) {
                    var item = {
                        value: dataArr[i - 1],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 50,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: color[translateColor(i) * 2 - 2]
                                }, {
                                    offset: 1,
                                    color: color[translateColor(i) * 2 - 1]
                                }]),
                            }
                        }
                    };
                    itemArr.push(item);
                }
                return itemArr;
            }()
        },
        {
            type: 'scatter',
            stack: 1,
            symbolOffset: [0, 0], //相对于原本位置的偏移量
            label: {
                normal: {
                    show: false,
                }
            },
            xAxisIndex: 2,
            symbolSize: 10,
            z: 2,
            data: function() {
                var itemArr = [];
                for (var i = 1; i < (dataArr.length + 1); i++) {
                    var item = {
                        value: 0,
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 2,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: color[translateColor(i) * 2 - 2]
                                }, {
                                    offset: 1,
                                    color: color[translateColor(i) * 2 - 1]
                                }]),
                            }
                        }
                    };
                    itemArr.push(item);
                }
                return itemArr;
            }()
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '140%',
            data: dataArr,
            barWidth: 22,
            itemStyle: {
                normal: {
                    barBorderRadius: 50,
                    color: '#0e2147'
                }
            },
            z: 1
        },
        {
            type: 'bar',
            xAxisIndex: 2,
            barWidth: 30,
            barGap: 1,
            z: 0,
            data: function() {
                var itemArr = [];
                for (var i = 1; i < (dataArr.length + 1); i++) {
                    var item = {
                        value: dataArr[i - 1],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 50,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: color[translateColor(i) * 2 - 2]
                                }, {
                                    offset: 1,
                                    color: color[translateColor(i) * 2 - 1]
                                }]),
                            }
                        }
                    };
                    itemArr.push(item);
                }
                return itemArr;
            }()
        },
        {
            type: 'scatter',
            hoverAnimation: false,
            xAxisIndex: 2,
            symbolOffset: [0, 0], //相对于原本位置的偏移量
            symbolSize: 30,
            z: 2,
            data: function() {
                var itemArr = [];
                for (var i = 1; i < (dataArr.length + 1); i++) {
                    var item = {
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: color[translateColor(i) * 2 - 2]
                                }, {
                                    offset: 1,
                                    color: color[translateColor(i) * 2 - 1]
                                }]),
                            }
                        }
                    };
                    itemArr.push(item);
                }
                return itemArr;
            }()
        }
    ]
};

function translateColor(index) {
    if (index > 5) {
        return translateColor(index - 5)
    }
    return index
}