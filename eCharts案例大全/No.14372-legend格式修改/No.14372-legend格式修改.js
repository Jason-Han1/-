var lableNormal = {};
lableNormal.offset = [-5, 0];
lableNormal.show = true;
lableNormal.formatter = '{a}';
lableNormal.position = 'left';
lableNormal.fontSize = 13;
lableNormal.color = '#777';

option = {
    'mchartType': '2106',
    'id': '10033',
    'xAxis': {
        'show': false,
        'type': 'value'
    },
    legend: {
        show: true,
        top: 15,
        itemWidth: 80,
        itemHeight: 5,
        itemGap: -5,
        align: 'right',
        formatter: '{a|{name}}',
        textStyle: {
            width: 80,
            padding: [-35, -80, 0, 0],
            rich: {
                a: {
                    align: 'center',
                    fontSize: 10,
                    color: '#a0a1a5'
                }
            }
        },
        'data': ['cd', 'ef', 'lm', 'gh', 'jk', 'ab']
    },
    'yAxis': {
        'type': 'category',
        offset: 5,
        'data': [],
        'axisTick': {
            'show': false
        },
        'axisLine': {
            'show': false
        },
        axisLabel: {
            color: '#777',
            fontSize: 14
        }
    },
    color: ['#08cca2', '#fac46e', '#64ccf3', '#fb9996', '#f6eee1', '#eafaf7'],
    'series': [{
        'type': 'bar',
        name: 'cd',
        'barWidth': '30',
        itemStyle: {
            normal: {
                barBorderRadius: 20,
            }
        },
        label: {
            normal: lableNormal
        },
        'data': [1.0]
    }, {
        'type': 'bar',
        name: 'ef',
        'barWidth': '30',
        itemStyle: {
            normal: {
                barBorderRadius: 20,
            }
        },
        label: {
            normal: lableNormal
        },
        'data': [2.0]
    }, {
        'type': 'bar',
        name: 'lm',
        'barWidth': '30',
        itemStyle: {
            normal: {
                barBorderRadius: 20,
            }
        },
        label: {
            normal: lableNormal
        },
        'data': [3.0]
    }, {
        'type': 'bar',
        name: 'gh',
        'barWidth': '30',
        itemStyle: {
            normal: {
                barBorderRadius: 20,
            }
        },
        label: {
            normal: lableNormal
        },
        'data': [4.0]
    }, {
        'type': 'bar',
        name: 'jk',
        'barWidth': '30',
        itemStyle: {
            normal: {
                barBorderRadius: 20,
            }
        },
        label: {
            normal: lableNormal
        },
        'data': [5.0]
    }, {
        'type': 'bar',
        name: 'ab',
        'barWidth': '30',
        barGap: '50%',
        itemStyle: {
            normal: {
                barBorderRadius: 20,
            }
        },
        label: {
            normal: lableNormal
        },
        'data': [6.0]
    }]
}