option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis'
    },
    title: {
        text: '时间--压力曲线',
        color: '#ddd',
        fontSize: 10,
        right: 0
    },
    legend: {

        show: false
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#666',
                fontSize: 14
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.1)'
            }
        },
        axisTick: {
            show: false
        },

        data: ['0', '10', '20', '30', '40', '50', '60', '70'],
    },
    yAxis: {
        name: "压力MPa",
        nameTextStyle: {
            color: 'red'
        },

        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#666',
                fontSize: 14
            }
        },
        axisTick: {
            show: false
        },
        min: 0,
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.1)'
            }
        },
        splitLine: {
            show: false,
        }
    },
    series: [{
            // name:'实际值',
            type: 'line',
            symbol: 'none',
            data: [0, 10, 14, 20, 26, 35, 35, 35],
            lineStyle: {
                normal: {
                    color: 'red',
                    width: 2
                }
            },
            smooth: false,

        },


        {
            name: '平行于x轴的趋势线',
            type: 'line',
            markLine: {
                data: [{
                    yAxis: 35
                }]
            }
        }
    ]
};