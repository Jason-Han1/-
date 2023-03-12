option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['高校在读博士', '高校在职科研人员', '非高校在读博士', '非高校在职科研人员', '国外/港澳台机构在读博士', '国外/港澳台机构在职科研人员', '省内', '澳门', '香港', '省外','爱尔兰','韩国','加拿大','未知']
    },
    series: [{
            name: '特派员分类',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 100,
                    name: '高校在读博士',
                    selected: true
                },
                {
                    value: 1463,
                    name: '高校在职科研人员'
                },
                {
                    value: 3,
                    name: '非高校在读博士'
                },
                {
                    value: 643,
                    name: '非高校在职科研人员'
                },
                {
                    value: 7,
                    name: '国外/港澳台机构在读博士'
                },
                {
                    value: 3,
                    name: '国外/港澳台机构在职科研人员'
                }
            ]
        },
        {
            name: '地域分类',
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
                    value: 1,
                    name: '香港'
            },
                {
                    value: 1843,
                    name: '省内'
                },
                {
                    value: 6,
                    name: '澳门'
              
                },
                {
                    value: 316,
                    name: '省外'
                
                },
                {
                    value: 1,
                    name: '爱尔兰'
                },
                {
                    value: 1,
                    name: '韩国'
             
                },
                {
                    value: 1,
                    name: '加拿大'
                },
                {
                    value: 50,
                    name: '未知'
                }
            ]
        }
    ]
};