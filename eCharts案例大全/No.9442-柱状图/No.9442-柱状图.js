var sourceBar = {
    "itemData": ['测试1', '测试2', '测试3', '测试4', '测试5', '测试6'],
    "seriesData": [980, 302, 150, 57, 231, 300]
}
var itemData = sourceBar.itemData;
var seriesData = sourceBar.seriesData;
var tooltip = sourceBar.tooltip
var color = ['#4ddd89', '#33b76a', '#7ac8ff', '#379ef5', '#ffdc88', '#ffc63c', '#ff9c9c', '#ff7c7c', '#ffb08a', '#ff9764', '#c2b1fe', '#a48df7']
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
    backgroundColor: '#fff',
    grid: {
        top: '25%',
        left: '5%',
        right: '10%',
        bottom: '8%',
        containLabel: true
    },
    tooltip: { //提示信息
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
    xAxis: [{ //x轴相关设置
        show: true,
        name: '',
        nameTextStyle: {
            fontSize: 14,
            fontFamily: 'Microsoft YaHei',
            color: '#333'
        },
        type: 'category',
        nameLocation: 'end',
        nameGap: 8,
        axisLabel: {
            show: true,
            fontSize: 16,
            fontFamily: 'Microsoft YaHei',
            color: "#333",
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
            symbol: ['none', 'none'],
            lineStyle: {
                color: '#ccc'
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
            show: false,
            fontSize: 106,
            fontFamily: 'Microsoft YaHei',
            color: "#fff",

        },

        data: xAxisData
    }],
    yAxis: {
        type: 'value',
        nameTextStyle: {
            fontSize: 14,
            fontFamily: 'Microsoft YaHei',
            color: '#333'
        },
        minInterval: 1,
        nameLocation: 'end',
        nameGap: 10,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            fontSize: 14,
            fontFamily: 'Arial',
            color: "#333"
        },
        axisLine: {
            show: true,
            symbol: ['none', 'none'],
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{ //中间的细柱条
        type: 'bar',
        stack: 1,
        xAxisIndex: 0,
        barWidth: 40,
        barGap: 5,
        z: 2,
        data: function() {
            var itemArr = [];
            for (var i = 1; i < (dataArr.length + 1); i++) {
                var item = {
                    value: dataArr[i - 1],
                    itemStyle: {
                        normal: {
                            barBorderRadius: [50, 50, 50, 50],
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
    }]
};

function translateColor(index) {
    if (index > 6) {
        return translateColor(index - 6)
    }
    return index
}