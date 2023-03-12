option = {
    backgroundColor: '#080b30',
    angleAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
    },
    radiusAxis: {
        max: 100,
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    polar: {
        radius: ['0', '60%']
    },
    series: [
        {
            type: 'pie',
            radius: ['60%', '60%'],
            labelLine: {
                show: false,
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: '#fff',
                borderType: 'dotted',
            },
            data: [{value: 0}],
        },
        {
            type: 'pie',
            radius: ['60%', '80%'],
            roseType: 'area',
            labelLine: {
                show: false,
            },
            data: [{
                    value: 50,
                    max: 50,
                    itemStyle: {
                        color: 'rgba(50, 200, 232, 0.5)',
                    }
                },
                {
                    value: 40,
                    max: 50,
                    itemStyle: {
                        color: 'rgba(0, 228, 132, 0.5)',
                    }
                },
                {
                    value: 50,
                    max: 50,
                    itemStyle: {
                        color: 'rgba(255, 253, 0, 0.5)',
                    }
                },
                {
                    value: 30,
                    max: 50,
                    itemStyle: {
                        color: 'rgba(255, 161, 11, 0.5)',
                    }
                },
                {
                    value: 25,
                    max: 50,
                    itemStyle: {
                        color: 'rgba(255, 95, 92, 0.5)',
                    }
                }
            ]
        },
        {
            type: 'bar',
            name: '智慧',
            max: 100, // 100 的比例
            data: [100], // 控制半径占比
            barWidth: '20%', // 控制和饼图角度一致
            barGap: 0,
            itemStyle: {
                color: '#32C8E8',
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '劳动',
            data: [90],
            max: 100,
            barWidth: '20%',
            barGap: 0,
            itemStyle: {
                color: '#00E484',
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '悦美',
            data: [100],
            max: 100,
            barWidth:  '20%',
            barGap: 0,
            itemStyle: {
                color: '#FFD100',
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '活力',
            data: [70],
            max: 100,
            barWidth: '20%',
            barGap: 0,
            itemStyle: {
                color: '#FFA10B',
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '品德',
            data: [60],
            max: 100,
            barWidth: '20%',
            barGap: 0,
            itemStyle: {
                color: '#FF5F5C',
            },
            coordinateSystem: 'polar',
        }
    ],
};