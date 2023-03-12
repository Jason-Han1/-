let bgColor = "#20263f";
let fillColor = '#2c6cc4';
let emptyColor = '#24375c';
let echartData = [{
        value: 2154,
        name: "正常用户",
        unit: "个"
    },
    {
        value: 3854,
        name: "僵尸用户",
        unit: "个"
    }
]

option = {
    backgroundColor: bgColor,
    series: [{
        name: '',
        type: 'pie',
        radius: [70, 80],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 0,
                shadowColor: '#203665'
            }
        },
        hoverAnimation: false,
        data: [{
            value: echartData[0].value,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: fillColor,
                            align: 'center',
                            fontSize: 20,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function(params) {
                        return "{b|在线统计}\n\n" + "{a|" + params.value + "}" + "\n\n{b|" + echartData[0].unit + "}";
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: fillColor,
                    shadowColor: fillColor,
                    shadowBlur: 0
                }
            }
        }, {
            value: echartData[1].value,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: emptyColor
                },
                emphasis: {
                    color: emptyColor
                }
            }
        }]
    }]
}