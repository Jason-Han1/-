option = {
    backgroundColor: '#000',
    tooltip: {
        show: true,
        backgroundColor: 'rgba(17,95,234,0.3)',
        textStyle: {
            color: '#F0F0F0',
            fontSize: 12,
        },
        trigger: 'item',
        borderWidth: 0,
        padding: 0,
        axisPointer: {
            lineStyle: {
                color: 'rgba(0, 0, 0, 0)',
            },
        },
    },
    legend: {
        show: true,
        textStyle: {
            color: '#F0F0F0',
            fontSize: 12,
        },
        position: {
            left: 'center',
            top: 'top',
        },
        left: 'right',
        top: 'top',
        data: ['预算分配', '实际开销'],
    },
    color: ['#115FEA', '#10EBE3', '#10A9EB', '#EB9C10', '#2E10EB', '#9B10EB'],
    radar: {
        shape: 'polygon',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(34,36,42, 1)',
            },
        },
        splitNumber: 7,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(34,36,42, 1)',
            },
        },
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(34,36,42, 1)',
                    'rgba(34,36,42, 1)',
                    'rgba(34,36,42, 0)',
                    'rgba(34,36,42, 0)',
                    'rgba(34,36,42, 0)',
                    'rgba(34,36,42, 0)',
                    'rgba(34,36,42, 0)',
                ],
            },
        },
        name: {
            color: '#FFF',
            padding: 0,
            formatter: (value, indicator) => {
                let value1 = 66.5
                let value2 = 32
                let dom = `{a|${value}}\n{b|}{c|${value1}}{d|}{c|${value2}}`
                return dom
            },
            rich: {
              a: {
                fontSize: 14,
                color: '#fff',
                align: 'left',
                lineHeight: 30
              },
              b: {
                width: 8,
                height: 8,
                backgroundColor: '#115FEA',
                align: 'left'
              },
              c: {
               fontSize: 14,
                color: '#fff',
                 padding: [0, 10, 0, 5],
                  align: 'left'
              },
              d: {
                width: 8,
                height: 8,
                backgroundColor: '#10EBE3',
                align: 'left'
              },
            }
        },
        axisNameGap: 10,
        indicator: [
            {
                name: '销售',
                max: 6500,
            },
            {
                name: '生均学校建筑占地面积（m²）',
                max: 16000,
            },
            {
                name: '信息技术',
                max: 30000,
            },
            {
                name: '客服',
                max: 38000,
            },
            {
                name: '研发',
                max: 52000,
            },
            {
                name: '测试',
                max: 30000,
            },
        ],
        center: ['50%', '50%'],
        radius: '75%',
    },
    series: [
        {
            type: 'radar',
            symbolSize: 3,
            animation: true,
            lineStyle: {
                color: '#115FEA',
                width: 2,
            },
            itemStyle: {
                color: '#115FEA',
            },
            data: [
                {
                    name: '预算分配',
                    value: [4300, 10000, 28000, 35000, 50000, 27000],
                },
            ],
            emphasis: {
                areaStyle: {
                    opacity: 0.3,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(17,95,234,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(17,95,234,0)',
                            },
                        ],
                    },
                },
            },
        },
        {
            type: 'radar',
            symbolSize: 3,
            animation: true,
            lineStyle: {
                color: '#10EBE3',
                width: 2,
            },
            itemStyle: {
                color: '#10EBE3',
            },
            data: [
                {
                    name: '实际开销',
                    value: [4300, 14000, 28000, 31000, 42000, 29000],
                },
            ],
            emphasis: {
                areaStyle: {
                    opacity: 0.3,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(16,235,227,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(16,235,227,0)',
                            },
                        ],
                    },
                },
            },
        },
    ],
};
