var data = [10, 20, 40, 60, 80, 100, 120, 100];

option = {
    title: {
        text: '单位/个',
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal',
            color: '#65aaf1' //标题颜色
        },
        left: '2%',

    },
    color: ['#004558'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
         formatter: "{b} :{c}",
    },
    grid: {
        left: '5px',
        right: '5px',
        bottom: '5px',
        top: '50px',
        containLabel: true,

    },
    xAxis: [{
        type: 'category',
        data: ['空调', '温湿度', '配电', 'UPS', '温湿度', '烟感', '漏水', '空调'],

        axisTick: {
            alignWithLabel: true,
            show: false,
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            interval: 0, // 解决x轴名称过长问题
            textStyle: {
                color: '#8fd5f3'
            }
        }
    }],
    yAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#8fd5f3'
            }
        },
        splitLine: { //保留网格线
            show: true,
            lineStyle: { //y轴网格线设置
                color: '#0f3d65',
                width: 1,
                type: 'solid'
            }
        },
    },
    series: [
         {
            name: '动环资产',
            type: 'bar',
            barWidth: '60%', //去掉这个则会显示柱状阴影
            itemStyle: {
                normal: {
                    barBorderRadius:50,//圆角
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#01abff'
                            },
                            {
                                offset: 0.5,
                                color: '#0495fc'
                            },
                            {
                                offset: 1,
                                color: '#087cf9'
                            }
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#01abff'
                            },
                            {
                                offset: 0.5,
                                color: '#0495fc'
                            },
                            {
                                offset: 1,
                                color: '#087cf9'
                            }
                        ]
                    )
                }
            },
            data: data,
        },
     
       
    ]
};