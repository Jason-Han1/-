option = {
    title: {
        text: '2014年至2017年泛珠三角九省普通高等学校招生人数统计',
        subtext: '数据来源：国家统计局',
        sublink: 'http://www.stats.gov.cn/'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        right: true,
        data: ['2014年', '2015年', '2016年', '2017年']
    },
    toolbox: {
        left: true,
        bottom: true,
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar', 'stack', 'tiled']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['广东省', '广西壮族自治区', '海南省', '江西省', '湖南省', '福建省', '四川省', '贵州省', '云南省']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '2014年',
            type: 'bar',
            data: [53.54, 22, 5.45, 28.32, 32.66, 20.84, 38.62, 13.94, 16.82],
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        },
        {
            name: '2015年',
            type: 'bar',
            data: [55.06, 23.42, 5.24, 28.68, 33.63, 20.67, 41.33, 15.42, 17.66],
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        },
        {
            name: '2016年',
            type: 'bar',
            data: [53.98, 24.84, 5.32, 29.6, 34.94, 19.77, 41.47, 18.7, 17.99, ],
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        },
        {
            name: '2017年',
            type: 'bar',
            data: [55.84, 26.69, 5.22, 28.85, 35.79, 20, 43.3, 19.97, 20.21],
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }
    ]
};