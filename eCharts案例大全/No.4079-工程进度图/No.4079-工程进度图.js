var data = [{
        value: 70,
        full: 100,
        name: '工程1'
    },
    {
        value: 60.5,
        full: 100,
        name: '工程2'
    },
    {
        value: 98.89,
        full: 100,
        name: '工程3'
    },
    {
        value: 80,
        full: 100,
        name: '工程4'
    },
    {
        value: 30,
        full: 100,
        name: '工程5'
    },
    {
        value: 50,
        full: 100,
        name: '工程6'
    },
    {
        value: 33.33,
        full: 100,
        name: '工程7'
    }
];

option = {
     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#142354'
    }, {
        offset: 1,
        color: '#1C244D'
    }]),
    legend: {
        data: ['当前完成进度'],
        top: '15%',
        right:'20%',
        textStyle: {
            color: '#fff'
        }
    },
    color: [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 1,
        color: '#37B2FF'
    }, {
        offset: 0,
        color: '#4FEEFC'
    }]), 'rgba(255,255,255,0.2)'],
    grid: {
        left: '20%',
        right: '20%',
        bottom: '30%',
        top: '20%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgba(101,198,231,0.5)',
                fontSize: 10
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(101,198,231,1)'
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: 'rgba(101,198,231,1)'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: '{value} ',
            textStyle: {
                color: 'rgba(101,198,231,0.5)',
                fontSize: 12
            }
        }
    },
    dataset: {
        dimensions: ['name', 'value', 'full'],
        source: data
    },
    series: [{
            name: '当前完成进度',
            type: 'bar',
            barGap: '-100%',
            z: 10,
            label: {
                show: true,
                position: ['95%', -20],
                color: 'rgba(255,255,255,0.5)',
                formatter: '{@[1]}%'
            },
            itemStyle: {
                barBorderRadius: [0, 4, 4, 0]
            },
            barWidth: '40%'
        },
        {
            name: '默认',
            type: 'bar',
            label: {
                show: false
            },
            z: 9,
            itemStyle: {
                barBorderRadius: [0, 4, 4, 0]
            },
            barWidth: '40%'
        }
    ]
};