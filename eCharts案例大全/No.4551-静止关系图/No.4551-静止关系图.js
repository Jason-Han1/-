option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['纸类快递包装', '塑料类快递包装', '瓦楞纸', '文件袋用纸', '塑料膜袋', '编织袋', '珠光袋', '泡沫箱', '胶带']
    },
    series: [        
        {
            name: '2018年快递包装各类型消耗量',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [                
                {value: 837.33, name: '纸类快递包装', selected: true},
                {value: 85.18, name: '塑料类快递包装'},
            ]
        },
        {
            name: '2018年快递包装各类型消耗量',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
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
                        fontSize: 16,
                        lineHeight: 33
               

                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [                
                {value: 825.4, name: '瓦楞纸'},
                {value: 11.93, name: '文件袋用纸'},
                {value: 69.43, name: '塑料膜袋'},
                {value: 5.47, name: '编织袋'},
                {value: 1.11, name: '珠光袋'},
                {value: 1.10, name: '泡沫箱'},
                {value: 8.07, name: '胶带'},
            ]
        }
    ]
};
