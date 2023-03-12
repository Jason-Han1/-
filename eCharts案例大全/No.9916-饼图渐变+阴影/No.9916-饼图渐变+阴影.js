option = {
    backgroundColor: '#fff',
    legend: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: [0, '20%'],
        selectedOffset: 13,
        selectedMode: 'single',
        center: ['50%', '50%'],
        data: [{
                value: 3333,
                name: '',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#39BDAB" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#5ED99D" // 100% 处的颜色
                        }
                    ], false),
                    shadowBlur: 12,
                    shadowColor: 'rgba(57,189,171,0.50)',
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                },
            },
            {
                value: 10777,
                name: '低压用户',
                selected: true,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#469DF4" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#3377FF" // 100% 处的颜色
                        }
                    ], false),
                    // 设置扇形的阴影
                    shadowBlur: 12,
                    shadowColor: 'rgba(51,119,255,0.4)',
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                }
            }

        ],
        label: {
            normal: {
                position: 'inner',
                textStyle: {
                    color: '#fff'
                }
            },
        },
        labelLine: {
            show: false
        }
    }]
};