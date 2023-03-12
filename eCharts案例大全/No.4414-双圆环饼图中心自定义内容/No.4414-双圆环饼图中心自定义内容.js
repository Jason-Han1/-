option = {
    title: [{
            verticalAlign: 'bottom',
            text: [`{large|${416}}`].join('\n'),
            x: 'center',
            // y: 'center',
            y: '45%',
            textStyle: {
                verticalAlign: 'bottom',
                width: 200,
                height: 24,
                align: 'center',
                rich: {
                    large: {
                        color: '#000',
                        fontSize: 44,
                        lineHeight: 44,
                        fontWeight: 'bold'
                    },
                    small: {
                        fontSize: 16,
                        lineHeight: 16,
                        fontWeight: 'normal',
                        color: ['#000']
                    }
                }
            }
        },
        {
            subtext: '个',
            x: 'center',
            y: '50%',
            subtextStyle: {
                align: 'center',
                color: '#7D838D',
                fontSize: 36
            }
        }
    ],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        // orient: 'vertical',
        left: 10,
        data: ['10-20', '30-40', '50-60']
    },
    series: [{
        name: '数据',
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
        data: [{
                value: 18,
                name: '10-20'
            },
            {
                value: 251,
                name: '30-40'
            },
            {
                value: 147,
                name: '50-60'
            }
        ]
    }]
};