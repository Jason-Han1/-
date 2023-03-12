/*
 * 仪表盘所需数据
 */
option = {
    series: [
        // 进度条
        {
            name: "仪表盘",
            type: "gauge",
            radius: '85%', // 半径
            startAngle: 180, //开始角度 左侧角度
            endAngle: 0, //结束角度 右侧
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [0.7, 'rgba(80,126,245,1)'], //外环基础色
                        [1, "transparent"] // 阴影色
                    ],
                    width: 50
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                formatter: function(value) {
                    return `${value*100}%`
                },
                offsetCenter: [0, '-20%'],
                textStyle: {
                    fontSize: '32',
                    fontWeight: '600',
                    color: '#c9c9c9'
                }
            },
            title: {
                offsetCenter: [0, "100%"],
            },
            pointer: {
                show: false,
                length: '75%',
                width: 20, //指针粗细
            },
            data: [{
                "name": "",
                "value": 0.7,
            }]
        },
        // 外圈
        {
            name: "仪表盘",
            type: "gauge",
            radius: '100%', // 半径
            startAngle: 180, //开始角度 左侧角度
            endAngle: 0, //结束角度 右侧
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, 'rgba(80,126,245,1)'], //外环基础色
                        [1, "rgba(80,126,245,1)"]
                    ],
                    width: 1 // 线条宽度
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
                formatter: function(value) {
                    return `${value*100}%`
                },
                offsetCenter: [0, 0],
                textStyle: {
                    fontSize: '32',
                    fontWeight: '600',
                    color: '#c9c9c9'
                }
            },
            title: {
                offsetCenter: [0, "100%"],
            },
            pointer: {
                show: false,
                length: '75%',
                width: 20, //指针粗细
            }
        },
        // 内圈
        {
            name: "仪表盘",
            type: "gauge",
            radius: '50%', // 半径
            startAngle: 180, //开始角度 左侧角度
            endAngle: 0, //结束角度 右侧
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, 'rgba(80,126,245,1)'], //外环基础色
                        [1, "rgba(80,126,245,1)"]
                    ],
                    width: 10 // 线条宽度
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
                formatter: function(value) {
                    return `${value*100}%`
                },
                offsetCenter: [0, 0],
                textStyle: {
                    fontSize: '32',
                    fontWeight: '600',
                    color: '#c9c9c9'
                }
            },
            title: {
                offsetCenter: [0, "100%"],
            },
            pointer: {
                show: false,
                length: '75%',
                width: 20, //指针粗细
            }
        }
    ]
}