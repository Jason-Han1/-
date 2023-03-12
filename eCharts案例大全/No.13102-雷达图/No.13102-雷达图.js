option = {
    legend: {
        data: ['同层次', '个人']
    },
    tooltip: {
        // formatter:function(res){
        // 	console.log(res)
        // }
    },
    // angleAxis: {
    //     min: 0,
    //     max: 360,
    //     interval: 30,
    //     startAngle: 45
    // },
    // radiusAxis: {
    //     min: 0,
    //     max: 10,
    //     interval: 2
    // },
    radar: [{
        indicator: (function() {
            var res = [];
            for (var i = 1; i <= 5; i++) {
                i = i > 9 ? i : '0' + i;
                res.push({
                    text: 'K' + i
                });
            }
            return res;
        })(),
        radius: 120,
        startAngle: 90,
        splitNumber: 10,
        shape: 'circle',
        name: {
            formatter: '{value}',
            textStyle: {
                color: '#72ACD1'
            }
        },
        axisLabel: {
            show: true,
            formatter: function(value, index) {
                return value + '%';
            }
        },
    }],
    series: [{
        name: '雷达图',
        type: 'radar',
        tooltip: {},
        data: [{
                value: [100, 8, 40, 80, 200],
                name: '同层次',
                symbol: 'rect',
                symbolSize: 5,
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                }
            },
            {
                value: [60, 5, 30, 100, 150],
                name: '个人',
                areaStyle: {
                    normal: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            }
        ]
    }]
}