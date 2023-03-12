option = {
    backgroundColor: '#142058',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['金额', '人次'],
        textStyle: {
            color: '#fff',
        },
        bottom: 10
    },
    grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#363e83',
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },

    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#363e83',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
        data: ['银联云闪付', '支付宝支付', '微信支付', '社保卡金融账户支付']
    },
    series: [{
            name: '金额',
            type: 'bar',
            barWidth: '10%',
            label: {
                show: true,
                position: 'right',
                formatter: '{c}',
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: '#c57aeb',
                    barBorderRadius: 50,
                    borderWidth: 0
                }
            },
            data: [18203, 23489, 29034, 104970]
        },
        {
            name: '人次',
            type: 'bar',
            barWidth: '10%',
            label: {
                show: true,
                position: 'right',
                formatter: '{c}',
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: '#ffb42b',
                    barBorderRadius: 50,
                    borderWidth: 0
                }
            },
            data: [19325, 23438, 31000, 121594]
        }
    ]
};