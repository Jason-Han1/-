option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [{
            name: '托数',
            type: 'pie',
            selectedMode: 'single',
            radius: ['15%', '30%'],

            label: {
                normal: {
                    show: true,
                    formatter: "{b}-{a} \n {c} ({d}%)",
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 335,
                    name: '货类1'
                },
                {
                    value: 679,
                    name: '货类2'
                },
                {
                    value: 1548,
                    name: '货类3'
                }
            ]
        },
        {
            name: '一级箱数',
            type: 'pie',
            radius: ['35%', '50%'],

            label: {
                normal: {
                    show: true,
                    formatter: "{b}-{a} \n {c} ({d}%)",
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 335,
                    name: '货类1'
                },
                {
                    value: 310,
                    name: '货类2'
                },
                {
                    value: 234,
                    name: '货类3'
                }
            ]
        },
        {
            name: '二级箱数',
            type: 'pie',
            radius: ['55%', '70%'],

            label: {
                normal: {
                    show: true,
                    formatter: "{b}-{a} \n {c} ({d}%)",
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 135,
                    name: '货类1'
                },
                {
                    value: 148,
                    name: '货类2'
                },
                {
                    value: 251,
                    name: '货类3'
                }
            ]
        },
        {
            name: '零件数',
            type: 'pie',
            radius: ['75%', '90%'],

            label: {
                normal: {
                    show: true,
                    formatter: "{b}-{a} \n {c} ({d}%)",
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 147,
                    name: '货类1'
                },
                {
                    value: 102,
                    name: '货类2'
                }, {
                    value: 135,
                    name: '货类3'
                }
            ]
        }
    ]
};