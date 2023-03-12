indicatorData = [{
        text: 'K01'
    },
    {
        text: 'K02'
    },
    {
        text: 'K03'
    },
    {
        text: 'K04'
    },
    {
        text: 'K05'
    }
];


option = {
    backgroundColor: '#091a2a',
    radar: {
        center: ['50%', '50%'],
        indicator: indicatorData,
        radius: '65%',
        splitNumber: 10,
        shape: 'circle',
        startAngle: 90,
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 18,
                fontFamily: "Microsoft YaHei"
            },

            padding: [8, 8, 8, 8]
        },
        splitArea: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: 'dotted'
            }
        },
        axisLabel: {
            show: true,
            formatter: function(value, index) {

                return value + '%';
            }
        },
    },
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
        }




    ]
};