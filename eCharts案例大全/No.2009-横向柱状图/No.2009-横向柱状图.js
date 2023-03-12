option = {
    backgroundColor: 'rgba(10,70,128,0.9)',
    title: {
        text: '横向柱状图',
        textStyle: {
            color: '#fff',
        },
        left:'center',
        top:"30"
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: '{a}<br />{b}{c}',
    },
    xAxis: {
        name: '11',
        type: 'value',//将柱状图横过来x轴设置value
        show: false,
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'category',//将柱状图横过来y轴设置category
        axisLabel: {
            textStyle: {
                color: '#fff',//设置轴上标签颜色
            },
        },
        label: {
            show: true,
            position: 'right',
        },
        axisTick: {
            show: false,
        },

        axisLine: {
            show: false,
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        
    },
    series: [
        {
            label: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#fff',//设置每一个标签颜色
                },
            },
            name: '卖出的水果',
            type: 'bar',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                borderRadius: [0, 12, 12, 0],
                //new echarts.graphic.LinearGradient(右,下,左,上,渐变值)
                //彩色渐变
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                        {offset: 0, color: '#04c7ff'},
                        {offset: 0.5, color: '#f8ff43'},
                        {offset: 1, color: '#04c7ff'}
                    ]
                )
                //底部透明渐变
                // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                //     { offset: 0, color: 'rgba(7,25,41,0)' },
                //     { offset: 0.5, color: 'rgba(8,229,255,0.8)' },
                //     { offset: 1, color: '#00cafc' },
                // ]),
            },
            barWidth: 24,
        },
    ],
};
