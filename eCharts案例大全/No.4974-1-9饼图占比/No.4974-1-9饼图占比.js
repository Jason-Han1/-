const data = [{
        name: '匿名1',
        value: 100
    },
    {
        name: '匿名2',
        value: 125
    },
    {
        name: '匿名3',
        value: 137
    },
    {
        name: '匿名4',
        value: 148
    },
    {
        name: '匿名5',
        value: 155
    },
    {
        name: '匿名6',
        value: 162
    },
    {
        name: '匿名7',
        value: 121
    },
    {
        name: '匿名8',
        value: 138
    },
    {
        name: '匿名9',
        value: 111
    }
]
const total = data.reduce((tot, num) => {
    return (tot.value ? tot.value : tot) + num.value
})
const colors = ['#af0', '#0fe', '#9ef', '#19f', '#99f', '#194', '#9bf', '#f99', '#e0f'] //颜色
const arr = []
data.map((item, index) => {
    arr.push({
        radius: ['17%', '22%'],
        center: [(index % 3) * 30 + 20 + '%', data.length > 3 ? data.length > 3 && data.length <= 6 ? (index < 3 ? '30%' : '70%') : (index < 3 ? '20%' : index < 6 ? '50%' : '80%') : '50%'],
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
    xAxis: {
        show: false
    },
    yAxis: {
        show: false,
    },
    series: arr
};