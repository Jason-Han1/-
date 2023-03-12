var province = ['广东', '江苏', '山东', '浙江', '河南', '四川', '湖北', '福建', '湖南', '上海', '安徽', '北京', '河北', '陕西', '辽宁', '江西', '重庆', '云南', '广西', '内蒙古', '山西', '贵州', '天津', '黑龙江', '新疆', '吉林', '甘肃', '海南', '宁夏', '青海', '西藏'];
var data = [107671.07, 99631.52, 71067.5, 62352, 54259.2,46615.82 , 45828.31, 42395, 39752.12, 38155.32, 37114, 35371.3, 35104.5, 25793.17, 24909.5, 24757.5, 23605.77, 23223.75, 21237.14, 17212.5,17026.68, 16769.34, 14104.28, 13612.7, 13597.11, 11726.8, 8718.3, 5308.94, 3748.48, 2965.95, 1697.82]
var res = [];
for (var j = 0; j < data.length; j++) {
    res.push({
        name: province[j],
        value: data[j]
    });
}
res.sort(function(a, b) {
    return a.value - b.value;
});
var res1 = [];
var res2 = [];
for (var t = 0; t < 10; t++) {
    res1[t] = res[res.length - 1 - t].name;
    res2[t] = res[res.length - 1 - t].value;
}

var option = {
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.name + '：' + params.value
        },
    },
    visualMap: {
        type: 'piecewise',
        text: ['高', '低'],
        pieces: [{
                min: 100000,
                color: '#CC3333'
            },
            {
                min: 40000,
                max: 99999,
                color: '#ff9999'
            },
            {
                min: 20000,
                max: 40000,
                color: '#FFFF99'
            },
            {
                min: 10000,
                max: 20000,
                color: '#CCCCFF'
            },
            {
                min: 5000,
                max: 10000,
                color: '#CCFFFF'
            },
            {
                min: 1697.83,
                max: 5000,
                color: '#FFCCFF'
            },
            {
                value: 1697.82,
                color: 'white'
            }
        ],
        orient: 'vertical',
        itemSymbol: 'circle',
        itemWidth: 20,
        itemHeight: 20,
        showLabel: true,
        seriesIndex: [0],
        textStyle: {
            color: '#7B93A7'
        },
        bottom: '10%',
        left: "5%",
    },
    grid: {
        right: '20%',
        top: '50%',
        bottom: '10%',
        width: '10%'
    },
    xAxis: {
        min: 1600,
        max: 110000,
        show: false
    },
    yAxis: {
        inverse: true,
        offset: '2',
        'type': 'category',
        data: res1,
        nameTextStyle: {
            color: '#fff'
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#000000',
            },
            interval: 0
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    geo: {
        map: 'china',
        right: '35%',
        left: '15%',
        label: {
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            emphasis: {
                areaColor: '#99FF99'
            }
        }
    },
    series: [{
            name: 'mapSer',
            type: 'map',
            map: 'china',
            roam: false,
            geoIndex: 0,
            label: {
                show: false,
            },
            data: res
        },
        {
            'name': 'barSer',
            'type': 'bar',
            zlevel: 2,
            barWidth: '40%',
            label: {
                normal: {
                    show: true,
                    fontSize: 14,
                    position: 'right',
                    formatter: '{c}'
                }
            },
            data: res2,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [{
                                colorStops: [{
                                    offset: 0,
                                    color: '#9999FF' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3333FF' // 100% 处的颜色
                                }]
                            },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#CCCCFF' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#9999FF' // 100% 处的颜色
                                }]
                            }
                        ];
                        if (params.dataIndex < 3) {
                            return colorList[0]
                        } else {
                            return colorList[1]
                        }
                    },
                }
            }
        }
    ]
};
