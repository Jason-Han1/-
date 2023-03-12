option = {
    backgroundColor: '#0E1327',
    title: [{
            text: 'CPU利用率',
            left: '3%',
            top: '5%',
            textStyle: {
                color: '#fff',
                fontSize:18,
                fontFamily: 'cuhei',
                fontWeight: 300,

            }
        },{
            text: 'CPU利用率',
            left: 'center',
            top: '65%',
            textStyle: {
                color: '#3488db',
                fontSize:22,
                fontFamily: 'cuhei',
                fontWeight: 600,

            }
        }],
    series: [
        {
        type: 'gauge',
        axisLine: {
            lineStyle: {
                width: 15,
                color: [
                            [
                                0.2, '#42e4fb'
                            ],
                            [
                                0.8, '#3488db'
                            ],
                            [
                                1, '#f9387f'
                            ]
                        ],
            }
        },
        radius: '50%',
        markPoint: {
            // 仪表盘指针圆
            animation: false,
            silent: true,
            data: [{
                x: '50%',
                y: '50%',
                symbol: 'circle',
                symbolSize: 40,
                 itemStyle: {
                     color: 'auto',
                 },
            }, {
                x: '50%',
                y: '50%',
                symbol: 'circle',
                symbolSize: 20,
                itemStyle: {
                    color: '#fff'
                },
            }],
        },
        pointer: {
            // 仪表盘指针
            //icon:'none',
            width: 10,
            length: "60%",
            itemStyle: {
                color: 'auto'
            },
        },
        axisTick: {
            distance: 0,
            length: 5,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        splitLine: {
            distance: 0,
            length: 15,
            lineStyle: {
                color: 'auto',
                width: 4
            }
        },
        axisLabel: {
            color: '#3488db',
            distance: 30,
            fontSize: 20
        },
        detail: {
            //valueAnimation: true,
            formatter: '{value} %',
            color: 'white'
        },
        data: [{
            value: 85
        }]
    },
    ]
};

