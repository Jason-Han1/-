option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable: true,
    series: [{
        name: '年龄分布',
        type: 'pie',
        radius: [50, 140],

        roseType: 'area',
        data: [{
                value: 10,
                name: '<20'
            },
            {
                value: 15,
                name: '>60岁'
            },
            {
                value: 25,
                name: '50-60岁'
            },
            {
                value: 20,
                name: '40-50岁'
            },
            {
                value: 35,
                name: '30-40岁'
            },
            {
                value: 30,
                name: '20-30岁'
            }
        ]
    }]
};

myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}