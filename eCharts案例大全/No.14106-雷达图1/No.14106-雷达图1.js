option = {
    title: {
        text: ''
    },
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff'
            }
        },
        startAngle: 22.5,
        axisLine: {
            lineStyle: {
                width: 3,
                color: '#94b1d1'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#94b1d1',
                width: 3
            }
        },
        splitArea: {
            areaStyle: {
                color: ['#b0c8e2', '#94b1d1']
            }
        },


        indicator: [{
                name: '销售（sales）',
                max: 6500
            },
            {
                name: '管理（Administration）',
                max: 16000
            },
            {
                name: '信息技术（Information Techology）',
                max: 30000
            },
            {
                name: '客服（Customer Support）',
                max: 38000
            },
            {
                name: '研2发（Development）',
                max: 52000
            },
            {
                name: '研发3（Development）',
                max: 52000
            },
            {
                name: '研发（Development）',
                max: 52000
            },
            {
                name: '市场（Marketing）',
                max: 25000
            }
        ]

    },
    series: [{
        name: ' ',
        type: 'radar',
        itemStyle: {

        },

        lineStyle: {
            color: 'rgba(255,43,43,0.9)'
        },
        areaStyle: {
            color: 'rgba(255,43,43,0.3)'
        },
        data: [

            {
                value: [2000, 10000, 21500, 31000, 30054, 15560],
                name: '金额'
            }
        ]
    }]
};