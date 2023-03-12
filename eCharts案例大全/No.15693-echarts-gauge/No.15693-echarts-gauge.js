option = {
    title: {
        text: '米类月累(%)',
        subtext: '',
        left: 'center',
        padding: [140, 0],
        link: 'http://www.baidu.com'
    },
    backgroundColor: '',
    tooltip: {
        formatter: '<div style="text-align: center;">业务指标</div>{b} : {c}'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [0.166, '#c23531'],
                    [0.5, '#EFC631'],
                    [0.835, '#63869e'],
                    [1, '#91c7ae']
                ],
                width: 30
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            distance: 6,
            textStyle: {
                color: 'auto'
            }
        },
        itemStyle: {
            normal: {
                color: 'auto'
            }
        },
        radius: '45%',
        pointer: {
            width: 10
        },
        title: {
            offsetCenter: [0, '90%']
        },
        detail: {
            textStyle: {
                fontWeight: 'bolder',
                fontSize: 23,
                color: 'black'
            },
            offsetCenter: [0, '58%'],
            formatter: '{value}万\n(5048人)'
        },
        min: 0,
        max: 120,
        name: '米类仪表盘',
        type: 'gauge',
        show: false,
        splitNumber: 12,

        data: [{
            value: '33',
            name: '月目标900吨，月累环比下降20%'
        }]
    }]
};