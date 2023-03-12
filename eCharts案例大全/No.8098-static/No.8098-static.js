option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#92b6ca'
            }
        }
    },
    grid: {
        top: '10',
        left: '10',
        right: '30',
        bottom: '16',
        containLabel: true
    },
    legend: {
        data: [
            "阿里",
            "华为"
        ]
    },
    xAxis: {
        type: "category",
        data: [
            "04月02日",
            "04月03日",
            "04月04日",
            "04月05日",
            "04月06日",
            "04月07日",
            "04月08日"
        ]
    },
    series: [{
            name: "阿里",
            type: "line",
            areaStyle: {},
            data: [
                0,
                0,
                1888,
                2300,
                1986,
                2001,
                2017
            ]
        },
        {
            name: "华为",
            type: "line",
            areaStyle: {
                color: '#f8e14f'
            },
            data: [
                7000,
                6200,
                6176,
                6000,
                7000,
                6744,
                5600
            ]
        }
    ],
    yAxis: [{
        type: 'value',
        //      name: '单位（%）',
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#e5e5e5'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#92b6ca'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#f5f5f5'
            }
        }
    }],
};