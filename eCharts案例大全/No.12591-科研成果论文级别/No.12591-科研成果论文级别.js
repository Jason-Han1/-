option = {
    backgroundColor: '#141845',
    title: {
        text: '科研成果论文级别',
        textStyle: {
            color: '#fff',
        },
    },

    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    grid: {
        y2: 50,
        y: 20
    },
    legend: {
        bottom: 'bottom',
        data: [{
                name: 'SCI源刊',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: 'EI源刊',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '国内中文核心',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: 'CSCD',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: 'EI会议',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: 'SCCSI（南大核心)',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '科技核心和一般行业核心',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '普刊',
                textStyle: {
                    color: '#fff'
                }
            }
        ],
    },
    series: [{
        name: '论文数量',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        label: {
            show: true,
            formatter: '{b}\n{d}%'
        },
        data: [{
                value: 123,
                name: 'SCI源刊'
            },
            {
                value: 234,
                name: 'EI源刊'
            },
            {
                value: 589,
                name: '国内中文核心'
            },
            {
                value: 478,
                name: 'CSCD'
            },
            {
                value: 135,
                name: 'EI会议'
            },
            {
                value: 86,
                name: 'SCCSI（南大核心)'
            },
            {
                value: 56,
                name: '科技核心和一般行业核心'
            },
            {
                value: 156,
                name: '普刊'
            }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};