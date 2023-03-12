var scaleData = [{
        'name': '工程建设',
        'value': 10
    },
    {
        'name': '产权交易',
        'value': 10
    },
    {
        'name': '土地交易',
        'value': 10
    },
    {
        'name': '其他交易',
        'value': 10
    },
    {
        'name': '土地交易',
        'value': 10
    },
    {
        'name': '其他交易',
        'value': 10
    },
    {
        'name': 'aaa',
        'value': 10
    },
    {
        'name': 'aaa',
        'value': 10
    }, {
        'name': 'aaa',
        'value': 10
    }, {
        'name': 'aaa',
        'value': 10
    }, {
        'name': 'aaa',
        'value': 10
    }, {
        'name': 'aaa',
        'value': 10
    },
];
var rich = {
    white: {
        color: '#fff',
        align: 'center',
        fontWeight: 'bold',
        padding: [3, 0]
    }
};
var placeHolderStyle = {
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
};
var data = [];


for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 4,
                // shadowBlur: 30,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: '#af6c8b'
                }, {
                    offset: 1,
                    color: '#4b4b84'
                }]),
                // shadowColor: color1[i],
                color: 'rgba(255, 153, 153,0)',
                opacity: 0.75,
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [110, 200],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'inner',
                fontWeight: 'bold',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                        total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== '') {
                        return params.name + '\n{white|' + '占比' + percent + '%}';
                    } else {
                        return '';
                    }
                },
                rich: rich
            },
            labelLine: {
                show: false,
            }
        }
    },
    data: data
}];
option = {
    backgroundColor: '#2b0303',
    title: {
        text: '炫彩科技风圆环图',
        x: 'center',
        y: '10%',
        textStyle: {
            color: '#fff',
            fontSize: '30',
        }
    },
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}