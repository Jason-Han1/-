let bgColor = '#051234';
// let echartData = [{
//         name: 'A类',
//         value: 30
//     },
//     {
//         name: 'B类',
//         value: 20
//     }, {
//         name: 'C类',
//         value: 30
//     }
// ];


option = {
    backgroundColor: bgColor,
    title: {
        text: '机器故障情况',
        left: 'center',
        top: 40,
        textStyle: {
            color: '#fff',
            fontSize: 24
        }
    },
    tooltip: {
        show: false
    },
    series: [{
            type: 'pie',
            name: 'TypeB', // 最外层细圆环
            hoverAnimation: false,
            clockWise: false,
            radius: ['60%', '61%'],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#66CCFF'
                    }, {
                        offset: 0.5,
                        color: 'rgba(102, 204, 255, 0)'
                    }, {
                        offset: 1,
                        color: '#66CCFF'
                    }]),
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            name: '饼图内容区',
            type: 'pie',
            // clockWise: false,
            radius: [0, '56%'],
            hoverAnimation: false,
            label: {
                normal: {
                    formatter: '{b}: {c}',
                    color: '#fff',
                    fontSize: 18

                }
            },
            labelLine: {
                length: 30,
                length2: 30
            },
            data: [{
                    name: '机器故障',
                    value: 50,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                            offset: 0,
                            color: '#46D9FF'
                        }, {
                            offset: 1,
                            color: '#C8FEFF'
                        }])
                    },
                },
                {
                    name: '维修中',
                    value: 0,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                            offset: 0,
                            color: '#FFA800'
                        }, {
                            offset: 1,
                            color: '#C8FEFF'
                        }])
                    },
                }, {
                    name: '正常运行',
                    value: 40,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                            offset: 0,
                            color: '#E7FF01'
                        }, {
                            offset: 1,
                            color: '#86F028'
                        }])
                    },
                }
            ]
        }
    ]
};