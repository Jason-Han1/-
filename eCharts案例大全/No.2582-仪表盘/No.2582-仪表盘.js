  var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#FF442D'
    },
        {
            offset: 0.62,
            color: '#F4FD51'
        },
        {
            offset: 1,
            color: '#1EFD9D'
        }
    ]);
 option = {
        title: {
            text: "健康度",
            textStyle: {
                color:'#fff',
                fontSize: 14,
            },
            orient: 'vertical',
            bottom: '25%',
            left: 'center',
        },
        tooltip: {
            formatter: "{a} : {c}%"
        },
        series: [
            {
                name: '健康度',
                type: 'gauge',
                z: 3,
                min: 0,
                max: 100,
                radius: '85%',
                itemStyle: {
                    color: '#ccc'
                },
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 10,
                        color: [
                            [1, axislineColor]
                        ],
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    distance: -5,
                    textStyle: {
                        color: '#ccc',
                        fontSize: 12,
                    }
                },
                splitLine: { // 分隔线
                    show: false
                },
                pointer: {
                    show: true,
                    length: '65%',
                    width: 5, //指针粗细
                    color: '#ccc'
                },
                data: [50],
                detail: {
                    show: true,
                    offsetCenter: [0, "80%"],
                    formatter:function (e) {
                        return (
                            (e+'%')
                        )
                    },
                    fontWeight:'bold',
                    color: '#000',
                    fontSize:20
                }
            },
            {
                name: "内外圆",
                type: "pie",
                radius: "2%",
                z: 5,
                itemStyle: {
                    color: "#ccc",
                },
                hoverAnimation: false,
                label: {
                    show: false,
                },
                tooltip: {
                    show: false,
                },
                data: [100],
                animationType: "scale",
            },
            {
                name: '',
                type: 'gauge',
                z: 2,
                min: 0,
                max: 100,
                radius: '78%',
                axisLine: { // 坐标轴线
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 0,
                        color: [
                            [1, axislineColor]
                        ],
                    }
                },
                title: {
                    show: false
                },
                detail: {
                    show: false
                },
                axisTick: {
                    show: true,
                    length: 10,
                    lineStyle: {
                        width: 1,
                        color: '#ccc'
                    }
                },
                axisLabel: {
                    show: false
                },
                splitLine: { // 分隔线
                    show: false
                },

            }
        ]
    };

    myChart.setOption(option);