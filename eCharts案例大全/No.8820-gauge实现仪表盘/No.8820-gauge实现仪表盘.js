option = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}"
        },
        series: [{
            //类型
            type: 'gauge',
            //半径
            radius: 80,
            //起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            startAngle: 180,
            //结束角度。
            endAngle: 0,
            center: ['50%', '70%'],
            //仪表盘轴线相关配置。
            axisLine: {
                show: true,
                // 属性lineStyle控制线条样式
                lineStyle: {
                    width: 10,
                    color: [
                        [0.23, '#2f808f'],
                        [1, '#d8e8f2']
                    ]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            //刻度样式。
            axisTick: {
                show: false,
            },
            //刻度标签。
            axisLabel: {
                show: false,
            },
            //仪表盘指针。
            pointer: {
                //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
                show: false,
                //指针长度
                length: '90%',
                width: 0,
            },
            //仪表盘标题。
            title: {
                show: true,
                offsetCenter: [0, '25%'], // x, y，单位px
                textStyle: {
                    color: '#36ce9b',
                }
            },

            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, '-25%'],
                formatter: '{value}'+'%',
            },
            data: [{
                value: 23,
                name: '仪表盘总数'+'58',
            },
            ]
        }]
    };