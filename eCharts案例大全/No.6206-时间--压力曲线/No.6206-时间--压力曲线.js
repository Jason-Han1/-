option = {
    backgroundColor: 'rgba(255,255,255,1)',
    tooltip: {
        trigger: 'axis',
        show:false
    },
    title: {
        text: '时间--压力曲线',
        right: 12,
        textStyle: {
            color: '#999',
            fontSize: 14,
        },
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
                color: '#999',
                fontSize: 12
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

        data: ['12:30', '13:30', '14:23', '15:55', '16:25', '17：11', '17:48', '18:40'],
    },
    yAxis: {
        name: "压力MPa",
        nameTextStyle: {
            color: 'rgba(255,0,0,0.2)'
        },

        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#999',
                fontSize: 12
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
            data: [0, 3, 6, 18, 26, 35, 35, 35],
            lineStyle: {
                normal: {
                    color: 'rgba(255,0,0,0.2)',
                    width: 2
                }
            },
            smooth: false,

        },
        {
            // name:'实际值',
            type: 'line',
            symbol: 'none',
            data: [0, 8, 13, 22, 28, 36, 36, 36],
            lineStyle: {
                normal: {
                    color: 'rgba(0,0,255,0.2)',
                    width: 2
                }
            },
            smooth: false,

        },
        {
            name: '平行于x轴的趋势线',
            type: 'line',

            lineStyle: {
                color:'rgba(255,0,0,1)'
            },
            markLine: {
                data: [{
                    yAxis: 36
                }]
            }
        },


        {
            name: '平行于x轴的趋势线',
            type: 'line',
             lineStyle: {
                color:'rgba(0,0,255,1)'
            },
            markLine: {
                data: [{
                    yAxis: 35
                }]
            }
        }
    ]
};