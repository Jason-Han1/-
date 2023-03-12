var color = [
    '#0CD2E6',
    '#3751E6',
    '#FFC722'
];

var legend = [
    'A需求类型',
    'B需求类型',
    'C需求类型',
];

var seriesData = [
    { "name": "A需求类型", "value": 30 },
    { "name": "B需求类型", "value": 10 },
    { "name": "C需求类型", "value": 15 },
]

var option = {
    color: color,
    legend: {
        top: 20,
        right: 'center',
        textStyle: {
            
        },
        data: legend,
    },
    series: [{
        name: '需求类型占比',
        type: 'pie',
        center: ['50%', '55%'],
        radius: '80%',
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            show: false,
            length: 0,
            length2: 0,
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{value|{c}}',
                rich: {
                    value: {
                        fontSize: 20,
                        color:'#ffffff',
                    },
                },
            }
        },
        data: seriesData,
    }],
};

myChart.setOption(option);

