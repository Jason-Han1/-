option = {
    backgroundColor: '#071347',
    xAxis: {
        max: 110,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#1683F3',
            showMaxLabel: false,
            formatter: '{value}%'
        },
        axisTick: {
            show: false
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '5%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: {
        type: "category",
        inverse: false,
        data: ['客户满意度'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            color: '#ffffff'
        }
    },
    series: [{
            // 内
            type: "bar",
            barWidth: '90%',
            label: {
                show: true,
                formatter: '{c}%',
                position: 'right',
                color: '#ffffff'
            },
            data: [{
                value: 60,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(10,60,154,0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(22,131,243,1)' // 100% 处的颜色
                        }],
                        global: false
                    }
                }
            }]
        },

        {
            name: "外框",
            type: "bar",
            barGap: "-107%", // 设置外框粗细
            data: [100],
            barWidth: '100%',
            stack:'边框',
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(22,131,243,0.30)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#721526' // 100% 处的颜色
                    }],
                    global: false
                }
            },
            z: 0
        },
        {
            type: "bar",
            data: [0.1],
            stack:'边框',
            itemStyle: {
                color:'#1479E3'
            }
        },
        {
            
            type: "bar",
            data: [9.9],
            stack:'边框',
            itemStyle: {
                color:'rgba(22,131,243,0.30)'
            },
            z: 0
        }
    ]
};