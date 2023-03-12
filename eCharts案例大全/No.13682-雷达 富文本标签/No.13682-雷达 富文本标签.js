var bigfonts = 24;
var nsum = 800;
var fontS = 14;
var dataAxis = [];
var radius = 120;
data = [{
        "color": "#00a9ff",
        "text": "选址",
        "num": "134",
        "percent": 10
    },
    {
        "color": "#2ced99",
        "text": "规划条件",
        "num": "230",
        "percent": 30
    },
    {
        "color": "#fedb00",
        "text": "用地",
        "num": "136",
        "percent": 12
    },
    {
        "color": "#ff7200",
        "text": "工程",
        "num": "49",
        "percent": 20
    },
    {
        "color": "#00e4fe",
        "text": "竣工",
        "num": "360",
        "percent": 30
    }
]


option = {
    radar: [{
            indicator: data,
            radius: radius,
            startAngle: 126,
            splitNumber: 4,
            shape: 'circle',
            name: {
                formatter: function(value, indicator) {
                    var npercent = indicator.num;
                    var percent = npercent / nsum * 100;
                    return '{a|' + value + '}{b|\n10}{c|%}'

                },
                rich: {
                    a: {
                        color: '#000',
                        fontSize: 12,
                    },
                    b: {
                        fontSize: bigfonts,
                        fontFamily: 'AGENCYB',
                        fontWidth: 'bold',
                        color: 'yellow'
                    },
                    c: {
                        fontSize: fontS,
                        color: '#000'
                    }
                },
                textStyle: {
                    color: '#fff'
                }
            },
            splitArea: {
                areaStyle: {
                    color: '	rgba(6,222,249,0.06)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#0095B0'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#0095B0'
                }
            }
        },

    ],
    series: [{
        name: '雷达图',
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                color: 'rgba(6, 222, 249,0.3)',
            },

            emphasis: {
                color: 'rgba(6, 222, 249,0.5)',
            }
        },
        lineStyle: {
            normal: {
                color: '#f9d400',
                type: 'solid',
                width: 3
            },
            emphasis: {}
        },
        data: [{
            value: [134, 230, 136, 49, 360],
            label: {
                show: 'true'
            }
        }]
    }, ]
}