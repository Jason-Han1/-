    option={

            backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.3, 0.2, [{
                offset: 0,
                color: '#f7f8fa'
            }, {
                offset: 1,
                color: '#cdd0d5'
            }]),
            title: {
                text: '阀值感应',
                subtext: '作者：红恋落故衣',
                left: 'center',
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: "{a}:{b}"
            },
            series: [{
                type: "gauge",
                name:'烟雾感应',
                startAngle: 190,
                endAngle: -10,
                min: 0,
                max: 2,
                radius: "80%",
                center: ["50%", "65%"],
                axisLine: {

                    show: true,
                    lineStyle: {
                        width: 100,
                        shadowBlur: 10,
                        color: [
                            [0, '#B5495B'],
                            [0.5, '#D0104C'],
                            [1, '#20604F']
                        ]
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                pointer: {
                    width: "6%",
                    length: '90%',
                    color: "black"
                },
                itemStyle: {
                    normal: {
                        color: "rgba(255, 255, 255, 0.5)",
                        shadowBlur: 20
                    }
                },

                title: {
                    show: true,
                    offsetCenter: [0, '-120%'],
                    // textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontSize: 30,
                        fontWeight: 'bolder',
                        fontStyle: 'italic',
                        color: 'auto'

                    // }

                },
                detail: {
                    show: true
                },
                data:[{value:1.5,name:'异常'}]


            }]};