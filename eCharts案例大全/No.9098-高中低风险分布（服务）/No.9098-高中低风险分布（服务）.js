let data = ['Kernel', '其他', 'SSH']
option = {
    title: {
        text: '高中低风险分布（服务）',
        top: 10,
        left: 'center',
        textStyle: {
            fontSize: 16
        }
    },
    legend: {
        // orient: 'vertical',
        // y: 260,
        // x: 650,
        // icon: 'circle',
        data: ['Kernel', '其他', 'SSH'],
        // textStyle: {
        //     color: '#049BD4',
        //     fontSize: 20
        // }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '13%',
        right: '14%',
        bottom: '15%',
        top:'10%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false,
            color: '#707070'
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#4D4D4D'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#707070'
            }
        },
        data: ['Kernel', '其他', 'SSH'],
    }],
    yAxis: 
    {
        gridIndex:0,
        type:'value',
        nameLocation:'center',
        nameGap:28,
        name: '风险数（个）',
        nameTextStyle: {
            fontSize: 14,
            color: '#4D4D4D'
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#4D4D4D'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#707070'
            }
        }
    },
    series: [{
        // name: '直接访问',
        type: 'bar',
        barWidth: '60%',
         itemStyle: {
                    color: '#32b168'
                },
        data: [{
                name: 'Kernel',
                value: '1'
               
            },
            {
                name: '其他',
                value: '1'
               
            },
            {
                name: 'SSH',
                value: '1'
            }
        ]
    }]
};