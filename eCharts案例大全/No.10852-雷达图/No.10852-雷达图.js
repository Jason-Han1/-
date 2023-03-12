var result = {
    "radar": [{
            "name": "文化站",
            "max": 30
        },
        {
            "name": "公共图书馆",
            "max": 30
        },
        {
            "name": "博物馆",
            "max": 30
        },
        {
            "name": "标准体育馆",
            "max": 30
        }
    ],
    "data": [
        25,
        13,
        11,
        24
    ]
}
var indicator = [];
var radius = 100;
$.each(result.radar, function(index, item) {
    indicator.push({
        name: item.name,
        max: item.max,
        color: '#93d5ff'
    })
});

var option = {
    radar: [{
            indicator: indicator,
            radius: radius,
            startAngle: 180,
            splitNumber: 3,
            shape: 'circle',
            center: ['50%', '48%'],
            name: {
                fontSize: 40,
            },
            splitArea: {
                areaStyle: {
                    // color: '	rgba(6,222,249,0.2)',
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(6,222,249,0.4)' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: 'rgba(6,222,249,0.3)' // 0% 处的颜色
                            },
                            {
                                offset: 0.6,
                                color: 'rgba(6,222,249,0.2)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(6,222,249,0.1)' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(75,223,255,0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#4bdfff'
                }
            }
        }

    ],
    series: [{
        name: '雷达图',
        type: 'radar',
        symbolSize: 1,
        areaStyle: {
            normal: {
                color: 'rgba(255, 255, 0,0.2)',
            }
        },
        lineStyle: {
            normal: {
                color: '#ffff00',
                type: 'solid',
                width: 3
            },
            emphasis: {}
        },
        label: {
            show: true,
            formatter: function(param) {
                return '{a|' + param.value + '}{b| 个}'
            },

            rich: {
                a: {
                    color: '#e7f3fb',
                    fontSize: 32,
                },
                b: {
                    color: '#93d5ff',
                    fontSize: 32,
                }
            }
        },
        data: [{
            value: result.data,
            label: {
                show: 'true'
            }
        }]
    }]
};