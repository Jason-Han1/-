var scale = 1;
var colors = ["#0044A9", "#016FCE", '#3E9FEE', '#51E0FF'];
var radiusData = [{
        value: 57,
        name: '紧急出口'
    },
    {
        value: 72,
        name: '消防设施'
    },
    {
        value: 96,
        name: '医疗用品'
    },
    {
        value: 75,
        name: '应急车辆'
    }
];
var dataArr = [{
        mx: "种类",
        value: 48,
        name: '可用',
        itemStyle: {
            color: colors[0]
        }
    },
    {
        value: 9,
        name: '不可用',
        itemStyle: {
            color: '#01245A'
        }
    },
    {
        value: 57,
        name: '可用',
        itemStyle: {
            color: colors[1]
        }
    },
    {
        value: 15,
        name: '不可用',
        itemStyle: {
            color: '#003A6C'
        }
    },
    {
        value: 61,
        name: '可用',
        itemStyle: {
            color: colors[2]
        }
    },
    {
        value: 35,
        name: '不可用',
        itemStyle: {
            color: '#204F79'
        }
    },
    {
        value: 64,
        name: '可用',
        itemStyle: {
            color: colors[3]
        }
    },
    {
        value: 11,
        name: '不可用',
        itemStyle: {
            color: '#297180'
        }
    },
];
var rich = {
    yellow: {
        color: "#fff",
        fontSize: 30 * scale,
        padding: [8, 4],
        align: 'center'
    },
    white: {
        color: "#00B9FC",
        align: 'center',
        fontSize: 18 * scale,
        padding: [22, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 16 * scale,
        align: 'center'
    },
    hr: {
        borderColor: 'rgba(255,255,255,.1)',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
};
var colorSet = '#1E527A';
option = {
    backgroundColor: '#000',
    tooltip: {
        show: false
    },
    legend: {
        orient: 'vertical',
        y: 'center',
        x: 1050,
        icon: 'circle',
        data: radiusData,
        textStyle: {
            color: '#fff',
            fontSize: 25
        },
        // formatter: radiusData[j].value
        formatter: function(params) {
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (option.series[0].data[i].name == params) {
                    return params + ":" + option.series[0].data[i].value + "处";
                }
            }

        }
    },
    series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['10%', '45%'],
            center: ['40%', '50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            hoverAnimation: false,
            color: colors,
            label: {
                show: false
            },
            data: radiusData
        },
        {
            //   name: '访问来源',
            type: 'pie',
            radius: ['54%', '65%'],
            center: ['40%', '50%'],
            color: colors,
            hoverAnimation: false,
            itemStyle: {
                color: colorSet
            },
            labelLine: {
                normal: {
                    length: 55 * scale,
                    length2: 0,
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    },
                    smooth: 0.2,

                }
            },
            label: {
                normal: {
                    formatter: function(params) {
                        return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '处' + '}\n{blue|' + '}';
                    },
                    rich: rich
                }
            },
            data: dataArr
        }
    ]
};