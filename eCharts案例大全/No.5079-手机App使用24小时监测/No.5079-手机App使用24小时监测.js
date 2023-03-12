function generateTimes() {
    const times = []
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            const str = (i >= 10 ? i : ('0' + i)) + ':' + (j > 10 ? j : ('0' + j))
            times.push(str)
        }
    }
    return times
}

let useTimes = [
    [{
            name: '微博',
            xAxis: '00:00'
        },
        {
            xAxis: '02:00'
        }
    ],
    [{
            name: '爱奇艺',
            xAxis: '03:00'
        },
        {
            xAxis: '04:00'
        }
    ],
    [{
            name: '微信',
            xAxis: '08:00'
        },
        {
            xAxis: '08:30'
        }
    ],
    [{
            name: '王者荣耀',
            xAxis: '11:00'
        },
        {
            xAxis: '15:30'
        }
    ],
    [{
            name: '微信',
            xAxis: '16:00'
        },
        {
            xAxis: '17:30'
        }
    ]
]

option = {
    title: {
        text: '手机App使用24小时监测'
    },
    grid: {
        left: '50',
        right: '50',
        top: '50',
        bottom: '50',
        containLabel: true,
        backgroundColor: '#fafafa',
        show: true,
        borderColor: '#fafafa',
        borderWidth: 1
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#333333'
            }
        },
        axisTick: {
            length: 3
        },
        axisLabel: {
            fontSize: 14,
            align: 'center'
        },
        data: generateTimes()
    },
    yAxis: {
        show: false
    },
    series: [{
        type: 'line',
        markArea: {
            label: {
                position: 'inside'
            },
            itemStyle: {
                color: '#F56C6C'
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'inside'
                }
            },
            data: useTimes
        }
    }],
    dataZoom: [{
        type: 'inside'
    }, {
        type: 'slider',
        show: true,
        backgroundColor: '#fafafa',
        fillerColor: 'rgb(253, 226, 226)'
    }]
};