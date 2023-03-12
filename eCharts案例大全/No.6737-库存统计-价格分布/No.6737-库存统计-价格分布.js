option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable: true,
    series: [{
        name: '价格分布',
        type: 'pie',
        radius: [50, 140],

        roseType: 'area',
        data: [{
                value: 5,
                name: '>500元'
            },
            {
                value: 10,
                name: '200-500元'
            },
            {
                value: 20,
                name: '100-200元'
            },
            {
                value: 30,
                name: '50-100元'
            },
            {
                value: 35,
                name: '10-50元'
            },
            {
                value: 10,
                name: '<10元'
            }
        ]
    }]
};

myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}