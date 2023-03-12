option = {
      title: {
        text: '健康评估趋势',
        textStyle: {
            align: 'center',
            color: '#505769',
            fontSize: 20,
        },
        top: '0',
        left: 'left',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['绿码', '黄码', '红码'],
        left: 'right',
         textStyle: {
             color: ['#11C9C7', '#D3BF16', '#FF3301'],
         },
        top: 'top'
    },
    grid: {
        top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '3%',
        height: '80%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['20日','30日','31日','01日','02日','03日','04日','05日','06日'],
        axisTick: {
            show: false
        },
        axisLine: {
             lineStyle: {
                color: '#DDD'
            }
        },
         axisLabel: {
             margin: 20,
                textStyle: {
                    color: '#000',
                },
            },   
    },
    yAxis: {
        type: 'value',
        splitNumber:3,
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
    },
    series: [{
            name: '绿码',
            type: 'line',
            symbol: 'circle',
            data: [50,55,50,45,50,55,57,54,50],
            color: "#11C9C7",
            lineStyle: {
                normal: {
                    width: 5,
                }
            },
            smooth: true
        },
        {
            name: '黄码',
            type: 'line',
            symbol: 'circle',
            data: [30,32,35,35,30,37,39,32,30],
            color: '#D3BF16',
            lineStyle: {
                normal: {
                    width: 5,
                }
            },
            smooth: true
        },
        {
            name: '红码',
            type: 'line',
            symbol: 'circle',
           data: [25,21,23,26,28,25,20,22,28],
            color: '#FF3301',
            lineStyle: {
                normal: {
                    width: 5,
                }
            },
            smooth: true
        }
    ]
};