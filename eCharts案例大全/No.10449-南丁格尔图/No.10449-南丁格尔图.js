option = {
    backgroundColor: "#344b58",
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },

    // calculable : true,
    series: [{
        name: '案件来源',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [{
                value: 1211,
                name: '电话'
            },
            {
                value: 3211,
                name: '书记信箱'
            },
            {
                value: 2000,
                name: '江苏郑行风'
            },
            {
                value: 1700,
                name: '县长信箱'
            },
            {
                value: 3211,
                name: '市民论坛'
            },
            {
                value: 1300,
                name: '其他'
            },
        ],
        color: ['rgba(35,85,181,0.8)', 'rgba(22,105,180,0.8)', 'rgba(44,77,182,0.8)', 'rgba(48,115,182,0.8)', 'rgba(17,92,159,0.8)', 'rgba(46,113,179,0.8)'],
        label: {
            show: true,
            color: 'rgba(255,255,255,1)',
            fontSize: 20,
            formatter: '{b|{b}}\n{c|{c}}',
            rich: {
                b: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: 22
                },
                c: {
                    fontSize: 24,
                    color: 'rgba(255,255,255,1)',
                },
            }

        },
        itemStyle: {
            borderColor: '#51ACDF'
        }
    }]
};