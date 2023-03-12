const data = [{
        name: '抽检单位',
        value: 36
    },
    {
        name: '抽检数量',
        value: 48
    },
    {
        name: '抽样合格',
        value: 59
    },
    {
        name: '检验核查',
        value: 70
    },
]
const total = data.reduce((tot, num) => { //数值的总数，用来计算百分比
    return (tot.value ? tot.value : tot) + num.value
})
const colors = ['red', '#19f', '#f99', '#e0f'] //自定义颜色组
const arr = []
data.map((item, index) => {
    arr.push({
        radius: ['15%', '20%'],
        center: [(index % 6) * 25 + 15 + '%', data.length > 6 ? (index < 6 ? '25%' : '70%') : '50%'],
        hoverAnimation: false,
        clockwise: false,
        type: 'pie',
        label: {
            show: true,
            position: 'center',
            formatter: [
                '{b|{b}}',
                item.value,
                '{d|' + (item.value / total * 100).toFixed(2) + '%}'
            ].join('\n'),
            rich: {
                b: {
                    color: '#000',
                    fontSize: 20,
                    fontFamily: '楷体',
                    fontWeight: 700,
                    height: 36,
                },
                d: {
                    fontFamily: 'cursive',
                    color: '#666',
                    fontSize: 18
                }
            }
        },
        data: [{
                ...item,
                itemStyle: {
                    normal: {
                        color: colors[index]
                    },
                    emphasis: {
                        color: colors[index]
                    }
                }
            },
            {
                value: total,
                itemStyle: {
                    normal: {
                        color: '#9ef'
                    },
                    emphasis: {
                        color: '#bbb'
                    }
                }
            }
        ]
    })
})

option = {
    xAxis: {
        show: false
    },
    yAxis: {
        show: false,
    },
    series: arr
};