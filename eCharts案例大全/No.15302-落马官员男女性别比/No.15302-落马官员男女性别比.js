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
        data: ['10年以下','10-15年','16-20年','21-25年','26-30年','30年以上']
    },
    series: [
        {
            name: '',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}'
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}: {c}%'
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
                {value: 37, name: '16-20年'},
                {value: 11, name: '26-30年'},
                {value: 1, name: '30年以上'},
                {value: 28, name: '10-15年'},
                {value: 36, name: '21-25年'},
                {value: 4, name: '10年以下'}
            ]
        },
        {
            name: '实际',
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
                    formatter: '{b}实际: {c}%'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
           
        }
    ]
};
