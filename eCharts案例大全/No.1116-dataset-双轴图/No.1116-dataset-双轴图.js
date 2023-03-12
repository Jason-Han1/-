option = {
   legend:{},
   tooltip:{trigger:'axis'},
   dataset: {
        source: [
            ['日期','乘客补贴金额','乘客补贴率'],
            ['2021','10','10'],
            ['2022','10','10.1'],
            ['2023','10','10.2'],
            ['2024','9','10.3'],
        ]
    },
    xAxis: {type: 'category'},
    yAxis: [
        {
            type: 'value',
            name: '(单位:万元)',
            interval: 50,
        },
        {
            type: 'value',
            name:'(单位:%)',
            min: 0,
            max: 50,
            interval: 5,
        }
    ],
    series: [
        {
            type: 'bar',
            barWidth:20,
        },
        {
            type: 'bar',
            barWidth:20,
        },
    ]
};