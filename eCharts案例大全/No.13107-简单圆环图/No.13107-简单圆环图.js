option = {
    title: [{
        text: '10',
        x: '26%',
        y: '45%',
        textStyle: {
            fontSize: 42,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#333333'
        }
    }, {
        text: '告警总数',
        x: '24%',
        y: '55%',
        textStyle: {
            fontSize: 24,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#666666'
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        top: '40%',
        right: '20%',
        itemGap: 40,
        // formatter: function (name) {
        //   return 'Legend ' + name;
        // },
        textStyle: {
            fontSize: 15,
            padding: [0, 0, 0, 4],
        },
        data: ['严重告警', '主要告警', '次要告警', '警告告警']
    },
    color: ['#fa4b46', '#ffc502', '#ae9fff', '#6ecdfa'],
    series: [{
        name: '告警统计',
        type: 'pie',
        center: ['30%', '50%'],
        radius: ['45%', '55%'],
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
                name: '严重告警'
            },
            {
                value: 2,
                name: '主要告警'
            },
            {
                value: 2,
                name: '次要告警'
            },
            {
                value: 2,
                name: '警告告警'
            }
        ]
    }]
};