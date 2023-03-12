option = {
     tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable: true,
    series: [{
        name: '消费场景',
        type: 'pie',
        radius: [50, 120],

        roseType: 'area',
        data: [{
                value: 10,
                name: '其它'
            },
            {
                value: 15,
                name: '门店'
            },
            {
                value: 25,
                name: '餐饮'
            },
            {
                value: 20,
                name: '酒店'
            },
            {
                value: 35,
                name: '办公'
            },
            {
                value: 30,
                name: '住宅'
            }
        ]
    }]
};

myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}