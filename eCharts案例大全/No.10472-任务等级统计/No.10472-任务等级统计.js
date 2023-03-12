option = {
    color: ['rgba(0,162,255,0.8)', 'rgba(0,244,255,0.8)', 'rgba(255,237,0,0.8)'],
    backgroundColor: '#012A5C',
    grid: {
        bottom: 150,
        left: 100,
        right: '10%'
    },
    tooltip: {
        formatter: "{a}：<br/>{b}: {c}"
    },
    series: [{
            radius: ['30%', '61%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: true,
                    formatter: "{b}:{c}",
                    textStyle: {
                        fontSize: 30,

                    },
                    position: 'outside'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: true
                }
            },
            name: "任务等级",
            data: [{
                'name': '中型任务',
                'value': 675
            }, {
                'name': '小型任务',
                'value': 1397
            }, {
                'name': '大型任务',
                'value': 318
            }],

        },
        {
            radius: ['30%', '40%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            data: [{
                value: 1,
                itemStyle: {
                    color: "rgba(250,250,250,0.5)",
                },
            }],
        }
    ]
};