var data = [
    {
        "name": "吃饭",
        "value": 666
    },
    {
        "name": "睡觉",
        "value": 520
    },
    {
        "name": "打豆豆",
        "value": 435
    }
]

var option = {
    backgroundColor: '#F7F7F7',
    tooltip: {
        show: true
    },
    toolbox: {
        feature: {
            saveAsImage: {
                iconStyle: {
                    normal: {
                        color: '#FFFFFF'
                    }
                }
            }
        }
    },
    series: [{
        name: '热点分析',
        type: 'wordCloud',
        rotationRange: [0, 0],
        sizeRange: [24, 60],
        shape: 'square',
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 6
        },
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: []
    }]
};

var JosnList = [];

JosnList.push(...data);

option.series[0].data = JosnList;