option = {
    backgroundColor: '#101010',
    grid: {
        top: 100,
        left: 10,
        right: 10,
        bottom: 100
    },


    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        data: ['16:08', '16:09', '16:10', '16:11', '16:12', '16:13', '16:14', '16:15', '16:16', '16:17', '16:18', '16:19'],

    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
    },
    series: [

        {
            name: '拆线',
            type: 'line',
            stack: '总量',
            symbolSize: 20,
            symbol: 'circle',
            label: {
                normal: {
                    show: false,
                }
            },
            itemStyle: {
                normal: {
                    color: '#0496FF',
                },
                emphasis: {
                    color: "#71D432"
                }
            },
            lineStyle: {
                normal: {
                    color: '#52c1ee',
                    width: 0,

                }
            },
            data: [34, 35, 45, 65, 67, 43, 24, 46, 34, 23, 23, 63]
        },
        {
            name: '柱子',
            type: 'bar',
            barGap: '-100%',
            barWidth: 6,
            label: {
                normal: {
                    color: '#00f3fb'
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#0D121F',
                    borderWidth: '1',
                    color: '#282828',
                }
            },
            z: -12,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
        }
    ]
};