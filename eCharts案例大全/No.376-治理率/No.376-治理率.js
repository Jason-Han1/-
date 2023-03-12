var scaleData = [{
        'name': '总户数',
        'value': 1234
    },
    {
        'name': '总人口数',
        'value': 4700
    },
    {
        'name': '已覆盖户数',
        'value': 1200
    },
    {
        'name': '已覆盖人口数',
        'value': 3687
    }

];
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
var color = ['rgb(255, 153, 153)', 'rgb(255, 176, 63)', 'rgb(61, 186, 45)', 'rgb(43, 166, 254)'];
var colorBorder = ['rgba(255, 153, 153, 0.4)', 'rgba(255, 176, 63, 0.4)', 'rgba(61, 186, 45, 0.4)', 'rgba(43, 166, 254, 0.4)'];
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        data: scaleData[i].value,
        value: 20,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                color: color[i],
                borderWidth: 20,
                borderColor: colorBorder[i]
            }
        }
    }, {
        value: 8,
        name: '',
        itemStyle: placeHolderStyle
    });
}
data.push({
    value: 40,
    name: '',
    itemStyle: placeHolderStyle
})
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [100, 200],
    hoverAnimation: false,
    startAngle: -30,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'inner',
                fontSize: 14,
                lineHeight: 15,
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                        total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== '') {
                        // return params.name + '\n' + params.data.data;
                        if (params.name.length > 4) {
                            return params.name.slice(0, 3) + '\n' + params.name.slice(3);
                        } else {
                            return params.name;
                        }

                    } else {
                        return '';
                    }
                }
            },
            labelLine: {
                length: 30,
                length2: 60,
                show: true
            }
        }
    },
    data: data
}, {
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [100, 200],
    hoverAnimation: false,
    startAngle: -30,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                fontSize: 18,
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                        total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== '') {
                        return params.data.data;
                    } else {
                        return '';
                    }
                }
            },
            labelLine: {
                length: 30,
                length2: 60,
                show: true
            }
        }
    },
    data: data
}];
option = {
    backgroundColor: '#fff',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj,
    graphic: [{
        type: 'group',
        left: 'center',
        top: 'middle',
        children: [{
                type: 'text',
                z: 100,
                left: 'center',
                top: '0',
                style: {
                    fill: '#333',
                    text: [
                        '治理率(以户数计算)'
                    ],
                    font: '16px Microsoft YaHei'
                }
            },
            {
                type: 'text',
                z: 100,
                left: 'center',
                top: '32',
                style: {
                    fill: 'red',
                    text: [
                        '80%'
                    ],
                    font: '26px Microsoft YaHei'
                }
            }
        ]
    }]
}