option = {
    color: ['#CCE6FF', '#7AB4FF', '#1858D9'],

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}'
    },
    series: [{
        type: 'pie',
        radius: '55%',
        data: [{
                value: 274,
                name: '联盟广告'
            },
            {
                value: 310,
                name: '邮件营销'
            },
            {
                value: 335,
                name: '直接访问'
            },
        ],
        roseType: 'radius',
        label: {
            color: '#748393',
            formatter: '{b}: {c}'
        },
        labelLine: {
            lineStyle: {
                color: '#748393'
            },
            smooth: 0.4,
            length: 20,
            length2: 20
        },
        emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(12, 12, 12, 0.5)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
            return Math.random() * 200;
        }
    }]
};