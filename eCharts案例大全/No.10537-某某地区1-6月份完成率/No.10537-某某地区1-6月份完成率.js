//数据纯属虚构
var data = [{
        name: '江苏省',
        value: 0.53
    },
    {
        name: '北京市',
        value: 0.38
    },
    {
        name: '上海',
        value: 0.46
    },
    {
        name: '重庆',
        value: 0.36
    },
    {
        name: '河北',
        value: 0.34
    },
    {
        name: '河南',
        value: 0.32
    },
    {
        name: '云南',
        value: 0.16
    },
    {
        name: '辽宁',
        value: 0.43
    },
    {
        name: '黑龙江',
        value: 0.41
    },
    {
        name: '湖南',
        value: 0.24
    },
    {
        name: '安徽',
        value: 0.33
    }
];

var average = 0.3;

data = data.sort(function(a, b) {
    return b.value - a.value
})

var yData = [];
var barData = [];

for (var i = 0; i < data.length; i++) {
    barData.push(data[i]);
    if (data[i].value < average) {
        yData.push(i + ',' + data[i].name + ',' + 'lower');
    } else {
        yData.push(i + ',' + data[i].name)
    }

}

var option = {
    title: [{
        text: '某某地区1-6月份完成率',
        textStyle: {
            color: '#2D3E53',
            fontSize: 18
        },
        x: 'center',
        top: 100
    }],
    tooltip: {
        show: true,
        formatter: function(params) {
            var value = parseFloat(params.data['value']) * 100;
            return params.name + '：' + value + '%'
        },
    },
    grid: {
        top: "20%",
        bottom: "10%",
        left: "6%",
        right: "2%",
        containLabel: true,
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        inverse: true,
        nameGap: 16,
        axisLine: {
            show: false,
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
            margin: 85,
            textStyle: {
                color: '#455A74',
                align: 'left',
                fontSize: 14
            },
            rich: {
                a: {
                    color: '#fff',
                    backgroundColor: '#f36a5a',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
                    color: '#fff',
                    backgroundColor: '#4197FD',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                var paramsArr = params.split(',');
                var index = paramsArr[0];
                var name = paramsArr[1];
                if (paramsArr[2]) {
                    return [
                        '{a|' + (parseInt(index) + 1) + '}' + '  ' + name
                    ].join('\n')
                } else {
                    return [
                        '{b|' + (parseInt(index) + 1) + '}' + '  ' + name
                    ].join('\n')
                }
            }
        },
        data: yData
    },

    series: [{
        name: 'barSer',
        type: 'bar',
        roam: false,
        visualMap: false,
        zlevel: 2,
        barMaxWidth: 8,
        barGap: 0,
        itemStyle: {
            normal: {
                color: function(params) {
                    console.log(params);
                    var value = parseFloat(params.data['value']);
                    // build a color map as your need.
                    var colorList = [{
                            colorStops: [{
                                offset: 0,
                                color: '#f36a5a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#f36a5a' // 100% 处的颜色
                            }]
                        },
                        {
                            colorStops: [{
                                offset: 0,
                                color: '#00C0FA' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#2F95FA' // 100% 处的颜色
                            }]
                        }
                    ];
                    if (value < average) {
                        return colorList[0]
                    } else {
                        return colorList[1]
                    }
                },
                barBorderRadius: 15
            }
        },
        data: barData,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#455A74',
                    fontSize: 14,
                },
                position: "right",
                offset: [35, 0],
                formatter: function(params) {
                    var value = parseFloat(params.data['value']) * 100;
                    return value + '%'
                }

            }
        }
    }]
};