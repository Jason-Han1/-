var data = [{
        "name": "消费品行业",
        "value": 2281.10,
        "periodIncrease": 14.6,
        "symbolSize": 60
    },
    {
        "name": "电子制造业",
        "value": 3425.55,
        "periodIncrease": 31.6,
        "symbolSize": 80
    },
    {
        "name": "装备制造业",
        "value": 2187.51,
        "periodIncrease": 13.5,
        "symbolSize": 55
    },
    {
        "name": "材料行业",
        "value": 1926.98,
        "periodIncrease": 16.4,
        "symbolSize": 50
    },
    {
        "name": "能源工业",
        "value": 757.09,
        "periodIncrease": -3.3,
        "symbolSize": 30
    },
    {
        "name": "化医行业",
        "value": 1166.53,
        "periodIncrease": 18.4,
        "symbolSize": 40
    },
    {
        "name": "汽车制造业",
        "value": 3233.13,
        "periodIncrease": 8.9,
        "symbolSize": 70
    }
]

var datalist = [{
        offset: [10, 15],
        opacity: .95,
        color: 'rgba(255,218,149,0.75)'
    }, {
        offset: [20, 60],
        opacity: .88,
        color: 'rgba(255,192,203,0.75)'
    }, {
        offset: [30, 20],
        opacity: .84,
        color: 'rgba(127,255,170,0.75)'
    }, {
        offset: [40, 60],
        opacity: .8,
        color: 'rgba(135,206,250,0.75)'
    }, {
        offset: [50, 30],
        opacity: .75,
        color: 'rgba(255,250,205,0.75)'
    }, {
        offset: [60, 60],
        opacity: .7,
        color: 'rgba(236,216,48,0.75)'
    }, {
        offset: [70, 20],
        opacity: .68,
        color: 'rgba(204,204,204,0.75)'
    }, {
        offset: [80, 50],
        opacity: .6,
        color: 'rgba(70,172,154,0.75)'
    },
    {
        offset: [90, 30],
        opacity: .6,
        color: 'rgba(103,255,242,0.75)'
    }, {
        offset: [100, 65],
        opacity: .6,
        color: 'rgba(255,234,0,1)'
    }, {
        offset: [110, 30],
        opacity: .6,
        color: '#68333f'
    }, {
        offset: [120, 62],
        opacity: .6,
        color: '#68333f'
    }
];

var seriesData = [];
for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var itemToStyle = datalist[i];
    seriesData.push({
        name: item.value + '\n' + item.name,
        value: [itemToStyle.offset[0], Number(item.periodIncrease) + 5],
        symbolSize: item.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: 11
                }
            }
        },
        itemStyle: {
            normal: {
                color: itemToStyle.color,
                opacity: itemToStyle.opacity
            }
        },
    })
}

var option = {
    title: {
        // text: '(纳税：亿元)  ',
        textStyle: {
            fontWeight: '600', // 标题颜色
            fontSize: 14,
            color: '#999999'
        },
        top: 30
    },
    tooltip: {
        show: true,
        textStyle: {
            fontSize: 20
        },
        formatter: function(param) {
            var name = param.name.replace(/(\n|\r\n)+/g, "-");
            return name.split('-')[1] + '：' + name.split('-')[0] + '万';
        }
    },
    grid: {
        left: 30,
        right: 80,
        bottom: '7%',
        top: 60,
        padding: '0 0 10 0',
        containLabel: true
    },
    xAxis: {
        // show:false,
        name: '',
        nameTextStyle: {},
        // min:0,
        // max:2500,
        axisLine: {
            show: true,
            lineStyle: {
                fontSize: 16,
                color: '#999999'
            }
        },
        // 控制网格线是否显示
        splitLine: {
            show: false
        }, // 去除x轴上的刻度线
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {},
        }
    },
    yAxis: {
        // 控制y轴线是否显示
        min: 0,
        // splitNumber:4,
        name: '   同比增长（%）',
        nameTextStyle: {
            color: '#fff'
        },
        axisLine: {
            show: true,
            onZero: false,
            lineStyle: {
                color: '#999999'
            }
        },
        // 控制网格线是否显示
        splitLine: {
            show: false
        }, // 去除x轴上的刻度线
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
            formatter: function(v) {
                return v - 5;
            }
        },
        scale: true
    },
    series: [{
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: '20'
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#00acea'
            }
        },
        data: seriesData
    }]
}