var option = {
    tooltip: {
        formatter: "{a} :{c}"
    },
    series: [{
        name: '金额',
        type: 'gauge',
        animation: true, //动画效果
        detail: {
            color: '#fff',
            fontSize: '14px'

        },
        min: 0, //最小的数据值
        max: 1000, //最大的数据值
        //仪表盘轴线相关配置。
        axisLine: {
            show: true,
            lineStyle: {
                width: 70,
                color: [
                    [
                        1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#70f8ba'
                                },
                                {
                                    offset: 0.5,
                                    color: '#5be68d'
                                },
                                {
                                    offset: 1,
                                    color: '#40ce53'
                                }
                            ]
                        )
                    ]
                ]
            }
        },
        //刻度样式。
        axisTick: {
            show: true
        },
        //刻度标签。
        axisLabel: {
            show: false
        },
        //分隔线样式。
        splitLine: {
            show: true
        },
        //仪表盘指针。
        pointer: {
            width: "6%",
            length: '100%',
            color: "red"
        },
        //仪表盘指针样式。
        itemStyle: {
            normal: {
                // color: "rgba(255, 255, 255, 0.5)",
                color: 'red',
                shadowBlur: 20
            }
        },
        data: [{
            value: 527,
            name: '单位（万元）'
        }]
    }]
};