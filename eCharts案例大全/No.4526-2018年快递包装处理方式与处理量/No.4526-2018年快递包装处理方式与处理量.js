
option = {
    title: {
        text: '2018年快递包装处理方式与处理量',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['纸类快递包装', '塑料类快递包装', '', '再生利用', '填埋', '焚烧', '其他']
    },
    series: [        {
            name: '2018年快递包装处理方式及处理量',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [                {value: 837.33, name: '纸类快递包装', selected: true},
                {value: 85.18, name: '塑料类快递包装'},
            ]
        },
        {
            name: '2018年快递包装处理方式及处理量',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 14,
                        lineHeight: 25
                    },                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [                {value: 688.89, name: '再生利用'},
                {value: 91.91, name: '填埋'},
                {value: 47.55, name: '焚烧'},
                {value: 8.98, name: '其他'},
                {value: 1.77, name: '再生利用'},
                {value: 50.036, name: '填埋'},
                {value: 31.695, name: '焚烧'},
                {value: 1.679, name: '其他'},
            ]
        }
    ]
};