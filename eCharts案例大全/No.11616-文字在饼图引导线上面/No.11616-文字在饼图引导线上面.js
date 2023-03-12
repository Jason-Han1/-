var data = [{
        value: 335,
        name: '性能隐患'
    },
    {
        value: 310,
        name: '容量隐患'
    },
    {
        value: 234,
        name: '配置隐患'
    },
];


option = {
    color: ['#FBD332', '#4CC970', '#2EADFF'],
    series: [{
        name: '',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        roseType: 'radius',
        label: {
            normal: {
                // formatter: '{b|{b}}\n{d|{d}% {c}条}\n{hr|}',
                padding: [0, 0, 40, 0],
                formatter: function(params) {
                    console.log(params)
                    var total = 0;
                    var percent = 0;

                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{b|' + params.name + '}\n{d|{d}% {c}条}\n{hr|}';
                },
                rich: {
                    b: {
                        fontSize: 12,
                        align: 'left',
                        padding: 4,
                        borderWidth: 1,
                    },
                    hr: {
                        borderColor: '#0F2075',
                        width: '100%',
                        borderWidth: 1,
                        height: 0,
                    },
                    d: {
                        fontSize: 10,
                        align: 'left',
                        padding: 4,
                    },
                }
            }
        },
        labelLine: {
            // length:-10,
            length2: 0,
            lineStyle: {
                color: '#0F2075'
            }
        },
        data,
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};