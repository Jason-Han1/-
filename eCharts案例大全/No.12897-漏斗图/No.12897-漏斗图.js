option = {
    title: {
        text: '漏斗图',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}"
    },
    legend: {
        data: ['展现','打开','参加','转化','订单']
    },
    series: [
        {
            name: '（整体）',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}: {c}'
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}: {c}'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [
                {value: 60, name: '参加'},
                {value: 40, name: '转化'},
                {value: 20, name: '订单'},
                {value: 80, name: '打开'},
                {value: 100, name: '展现'}
            ]
        },
    ]
};
