option = {
    title: [{
        text: '20%',
        x: '22%',
        y: '47%',
        textStyle: {
            fontSize: 80,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#333333'
        }
    }],
    tooltip: {
        show: false,
        trigger: 'item',
        // formatter: '{a} <br/>{b}: {c} ({d}%)',
        padding: [2, 2, 2, 2]
    },
    color: ['green', 'red', 'yellow'],
    series: [{
            name: '告警统计',
            type: 'pie',
            center: ['30%', '50%'],
            radius: ['50%', '55%'],
            startAngle: 360,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 2,
                    name: '严重',

                },
                {
                    value: 2,
                    name: '主要'
                },
                {
                    value: 2,
                    name: '次要'
                }
            ]
        },
        {
            name: '告警统计',
            type: 'pie',
            center: ['30%', '50%'],
            radius: ['49%', '57%'],
            startAngle: 360,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 2,
                    name: '严重',
                    itemStyle: {
                    }
                },
                {
                    value: 2,
                    name: '主要',
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                {
                    value: 2,
                    name: '次要',
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                    }
                }
            ]
        }
    ],
    animation: false
};