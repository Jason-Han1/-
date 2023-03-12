option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },

    legend: {
        right: '30',
        data: ['检查次数', '违法违规数']

    },
    yAxis: [{
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#969cd6',
            fontWeight :'bold',
            fontSize: 14,
        },

        type: 'category',
        position: 'right',
        data: ['瑶瑶缴费', '手机银行', '对公银行', '直销银行', '个人网银']

    }],

    xAxis: [{
        show: false,
        axisTick: {
            show: false
        },
        type: 'value',
        name: '检查批次数',
        min: 0,
        max: 1300,
        inverse: true,
        axisLine: {
            show: false,
        },


    }],
    series: [{

            name: '检查次数',
            align: 'left',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#50faef'
                }
            },
            barWidth: '17',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    textStyle: {
                        color: '#969cd6'
                    }
                }
            },
            data: [457, 457, 789, 1244, 946],
        },


        {
            name: '违法违规数',
            align: 'left',
            type: 'bar',
            barGap: '99%',
            barWidth: '17',
            itemStyle: {
                normal: {
                    color: '#3dd17d'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    textStyle: {
                        color: '#969cd6'
                    }
                }
            },
            data: [347, 347, 654, 789, 897],
        },

    ]
};