option = {
    title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
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
                    formatter: '{b}（整体）'
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}（整体）: {c}%'
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
        {
            name: '（本次）',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}（本次）: {c}%'
                }
                },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            data: [
                {value: 30, name: '参加'},
                {value: 10, name: '转化'},
                {value: 5, name: '订单'},
                {value: 50, name: '打开'},
                {value: 80, name: '展现'}
            ]
        }
    ]
};
