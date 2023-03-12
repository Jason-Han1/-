data = [{
    value: 80,
    name: 'js'
}, {
    value: 60,
    name: 'c++'
}, {
    value: 55,
    name: 'php'
}, {
    value: 40,
    name: '.net'
}, {
    value: 20,
    name: 'java'
}, {
    value: 47,
    name: 'python'
}, {
    value:61,
    name: 'go'
}, {
    value: 50,
    name: 'ruby'
}]
max = 0
data.forEach(item => {
    max = max > item.value ? max : item.value
})

option = {
    backgroundColor: '#293c55',
    polar: {
        center: ['50%', '50%'],
        radius: '80%'
    },
    radiusAxis: {
    },
    angleAxis: {
        type: 'category'
    },
    series: [{
        name: '底色',
        type: 'pie',
        clockwise: false,
        radius: '80%',
        center: ['50%', '50%'],
        hoverOffset: 0,
        silent: true,
        itemStyle: {
            color: '#FFD200'
        },
        label: {
            show: true,
            fontSize: 18,
            color: '#fff',
            formatter: (params) => {
                return '{l|' + data[params.seriesIndex].name + '}\n' +
                    '{g|能力指数}  {s|' + data[params.seriesIndex].value + '}\n' +
                    '{y|欠缺指数}  {s|' + (100 - data[params.seriesIndex].value) + '}'
            },
            rich: {
                l: {
                    color: '#FFFFFF',
                    align: 'left',
                    fontSize: 20
                },
                s: {
                    color: '#FFFFFF',
                    align: 'left',
                    fontSize: 13
                },
                y: {
                    color: '#FFD200',
                    align: 'left',
                    fontSize: 13
                },
                g: {
                    color: '#4affb9',
                    align: 'left',
                    fontSize: 13
                }
            }
        },
        labelLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        data: data.map(() => 100)
    }, {
        name: '编程能力',
        type: 'pie',
        clockwise: false,
        radius: max * 0.8 + '%',
        center: ['50%', '50%'],
        roseType: 'area',
        hoverOffset: 0,
        silent: true,
        label: {
            show: false
        },
        itemStyle: {
            color: params => {
                return ['#00a8ff', '#84d5ff', '#d8f2ff', '#003db8', '#0052c2', '#0084ff'][params.dataIndex]
            }
        },
        data: data
    }]
};