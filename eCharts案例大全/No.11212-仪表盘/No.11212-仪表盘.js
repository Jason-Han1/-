option = {
    backgroundColor: '#FFFFFF',
    series: [{
            startAngle: 180,
            endAngle: 0,
            type: 'gauge',
            radius: '80%',
            min: 0,
            max: 100,
            splitNumber: 10,
            pointer: { //仪表盘指针
                show: false,
            },
            axisLine: { //仪表盘轴线
                lineStyle: {
                    width: 5,
                    color: [
                        [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#0BD4E8'
                            },
                            {
                                offset: 0.66,
                                color: '#A747F4'
                            },
                            {
                                offset: 1,
                                color: '#AF40F6'
                            }
                        ])]
                    ]
                },
                show: true,
            },
            splitLine: { //分割线
                show: false,
                width: 5
            },
            axisTick: { //刻度
                show: false,
                length: 8
            },
            axisLabel: { //刻度标签
                show: false,
                distance: 0
            },
            title: { //标题
                show: false
            },
            detail: {
                show: false
            }
        },
        {
            startAngle: 180,
            endAngle: 0,
            type: 'gauge',
            radius: '78%',
            min: 0,
            max: 100,
            splitNumber: 10,
            pointer: { //仪表盘指针
                show: false,
                length: "40%"
            },
            axisLine: { //仪表盘轴线
                lineStyle: {
                    width: 27,
                    color: [
                        [1, "#F0F0F0"]
                    ]
                },
                show: true,
            },
            splitLine: { //分割线
                show: false,
                width: 5
            },
            axisTick: { //刻度
                show: false,
                length: 8
            },
            axisLabel: { //刻度标签
                show: false,
                distance: -20
            },
            title: { //标题
                show: false
            },
            detail: {
                show: false
            }
        },
        {
            startAngle: 180,
            endAngle: 0,
            type: 'gauge',
            radius: '77%',
            min: 0,
            max: 100,
            splitNumber: 10,
            data: [{
                value: 60,
                name: '按时'
            }],
            pointer: { //仪表盘指针
                show: true,
                length: "89%",
                width: 50
            },
            itemStyle: {
                color: "#F14545"
            },
            axisLine: { //仪表盘轴线
                lineStyle: {
                    width: 4,
                    color: [
                        [1, "#F0F0F0"]
                    ],
                    // opacity:0
                },
                show: true,
            },
            splitLine: { //分割线
                show: false,
                width: 5
            },
            axisTick: { //刻度
                show: true,
                length: 1,
                color: "#444444",

            },
            axisLabel: { //刻度标签
                show: true,
                distance: -25,
                color: "#444444",
                fontSize: 10
            },
            title: { //标题
                show: false
            },
            detail: {
                show: false
            }
        },
        {
            backgroundColor: "#FFFFFF",
            color: "#FFFFFF",
            name: '',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [1],
        }
    ]
}