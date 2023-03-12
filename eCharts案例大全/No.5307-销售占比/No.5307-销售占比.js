option = {
    "color": [
            "#516b91",
            "#59c4e6",
            "#edafda",
            "#93b7e3",
            "#a5e7f0",
            "#cbb0e3"
        ],
        tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 400, name: '门店'},
                {value: 335, name: '外卖'},
                {value: 310, name: '电商'},
                {value: 274, name: '自营'},
                {value: 235, name: '第三方'}
            ].sort(function (a, b) { return b.value - a.value; }),
            roseType: 'radius',
            label: {
                color: '#004ea1'
            },
            labelLine: {
                lineStyle: {
                    color: '#004ea1'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};