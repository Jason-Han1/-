option = {
    tooltip: {},
    legend: {
        data: ['大型汽车', '小型汽车', '其他']
    },
    xAxis: {
        data: ["大型汽车", "小型汽车", "其他"],
    },
    yAxis: {},
    series: [{
            name: '大型汽车',
            type: 'bar',
            barGap: '-100%',
            barWidth: '30',
            itemStyle: {
                normal: {
                    color: '#C1232B'
                }
            },
            data: [5, 0, 0]
        },
        {
            name: '小型汽车',
            type: 'bar',
            barGap: '-100%',
            barWidth: '30',
            itemStyle: {
                normal: {
                    color: '#B5C334'
                }
            },
            data: [0, 20, 0]
        },
        {
            name: '其他',
            type: 'bar',
            barGap: '-100%',
            barWidth: '30',
            itemStyle: {
                normal: {
                    color: '#FCCE10'
                }
            },
            data: [0, 0, 36]
        },
        {
            name: '车辆信息',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['75%', '35%'],
            data: [{
                    value: 5,
                    name: '大型汽车',
                    itemStyle: {
                        color: '#C1232B'
                    }
                },
                {
                    value: 20,
                    name: '小型汽车',
                    itemStyle: {
                        color: '#B5C334'
                    }
                },
                {
                    value: 36,
                    name: '其他',
                    itemStyle: {
                        color: '#FCCE10'
                    }
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};