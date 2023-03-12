option = {
    xAxis: {
        type: 'category',
        axisTick: { //y轴刻度线
            "show": false
        },
        boundaryGap: false,
        axisLine: {
            onZero: false
        },
        data: ['1', '2', '3', '4', '5', '6']
    },
    yAxis: {
        type: 'value',
        axisTick: { //y轴刻度线
            "show": false
        },
        splitLine: { //网格线
            "show": false
        },
        axisLabel: {
            formatter: ' '
        },
        mix: -3,
        max: 15
    },
    series: [{
            data: [

            ],
            type: 'line',
            markLine: {
                symbol: ['none', 'none'], //去掉箭头
                itemStyle: {
                    normal: {
                        lineStyle: {},
                        label: {
                            show: true,
                            position: 'start'
                        }
                    }
                },
                data: [{
                        name: 'sd值',
                        yAxis: 1.62,
                        type: 'dotted',
                        color: 'blue',
                        label: {
                            formatter: '-3sd: 1.62'
                        }
                    },
                    {
                        name: 'sd值',
                        yAxis: 3.03,
                        label: {
                            formatter: '-2sd: 3.03'
                        }
                    },
                    {
                        name: 'sd值',
                        yAxis: 4.44,
                        label: {
                            formatter: '-s: 4.44'
                        },
                        lineStyle: {
                            color: '#369B9B'
                        }
                    },
                    {
                        name: 'sd值',
                        yAxis: 5.85,
                        label: {
                            formatter: 'k: 5.85'
                        }
                    },
                    {
                        name: 'sd值',
                        yAxis: 7.26,
                        label: {
                            formatter: '+sd: 7.26'
                        },
                        lineStyle: {
                            color: '#369B9B'
                        }
                    },
                    {
                        name: 'sd值',
                        yAxis: 8.67,
                        label: {
                            formatter: '+2sd: 8.67'
                        }
                    },
                    {
                        name: 'sd值',
                        yAxis: 10.08,
                        label: {
                            formatter: '+3sd: 10.08'
                        }
                    }
                ]
            }
        },
        {
            type: 'line',
            symbolSize: 10,
            data: [
                ['1', 7.2],
                ['2', 5.1],
                ['3', 12.5],
                ['4', 3.1],
                ['5', 3.2],
                ['6', -1.2]
            ]

        },
        {
            type: 'line',
            symbolSize: 10,
            data: [
                ['1', 2.5],
                ['2', 1.51],
                ['3', 10.1],
                ['4', 4.1],
                ['5', 5.2],
                ['6', -3.2]
            ]

        }
    ]
};