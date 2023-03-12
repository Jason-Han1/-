const data = [{
        name: '周一',
        value: 36
    },
    {
        name: '周二',
        value: 48
    },
    {
        name: '周三',
        value: 59
    },
    {
        name: '周四',
        value: 70
    },
    {
        name: '周五',
        value: 55
    },
    {
        name: '周六',
        value: 52
    }
]
const total = data.reduce((tot, num) => { //数值的总数，用来计算百分比
    return (tot.value ? tot.value : tot) + num.value
})
const colors = ['#af0', '#0fe', '#9ef', '#19f', '#f99', '#e0f'] //自定义颜色组
const arr = []
data.map((item, index) => {
    arr.push({
        radius: ['20%', '25%'],
        center: [(index % 3) * 30 + 20 + '%', data.length > 3 ? (index < 3 ? '30%' : '70%') : '50%'],
        hoverAnimation: false,
        clockwise: false,
        type: 'pie',
        label: {
            show: true,
            position: 'center',
            formatter: [
                '{b|{b}}',
                '{d|' + (item.value / total * 100).toFixed(2) + '%}'
            ].join('\n'),
            rich: {
                b: {
                    color: '#333',
                    fontSize: 16,
                    fontFamily: '楷体',
                    fontWeight: 700,
                    height: 36
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
                        color: '#bbb'
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
    backgroundColor: 'rgba(0,0,0,0)',
    xAxis: {
        show: false
    },
    yAxis: {
        show: false,
    },
    series: arr
};