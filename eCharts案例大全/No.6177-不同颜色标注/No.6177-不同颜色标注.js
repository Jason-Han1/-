var warningType = [{
    "name": '陌生人',
    "value": 8
}, {
    "name": '帽子',
    "value": 30
}, {
    "name": '玩手机',
    "value": 4
}, {
    "name": '手套',
    "value": 29
}, {
    "name": '口罩',
    "value": 27
}, {
    "name": '老鼠',
    "value": 2
}];

var data = [];
var color = ['#C24E7C', '#6464EE', '#48AEE4', '#7AD082', '#FFD854', '#EF7640']
for (var i = 0; i < warningType.length; i++) {
    data.push({
        value: warningType[i].value,
        name: warningType[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i],
                opacity: 0.5
            }
        }
    }, {
        value: 1,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        }
    });
}


option = {
    backgroundColor: '#162020',
    color: color,
    tooltip: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [105, 112],
        hoverAnimation: false,
        labelLine: {
            normal: {
                length: 30,
                length2: 145,
                lineStyle: {
                    type: 'solid'
                }
            }

        },
        label: {
            normal: {
                formatter: function(params) {
                    var result = '';
                    if (params.name) {
                        result += "{blue|" + params.value + "%" + "}" + params.name;


                    }
                    return result;
                },
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -90],
                margin: [0, 20],
                height: 40,
                fontSize: 14,
                align: 'center',
                color: '#DEDEDE',
                rich: {
                    blue: {
                        fontSize: 14,
                        lineHeight: 5,
                        color: '#62E6F6',
                        padding: [0, 20]
                    }

                }
            }
        },
        data: data
    }]
}