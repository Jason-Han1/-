var option = {
    series: [{
            type: 'liquidFill',
            radius: '45%',
            center: ['50%', '50%'],
            amplitude: '10%',
            data: [0.5, 0.5], // data个数代表波浪数
            itemStyle: {
                shadowBlur: 0,
                shadowColor: "rgba(0,0,0,0)"
            },
            backgroundStyle: {
                borderWidth: 1,
                color: '#fff',
                borderColor: '#FFD591',
            },
            color: ['#FA8C16', new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#FAD126"
                },
                {
                    offset: 1,
                    color: "#FF544F"
                }
            ])],
            label: {
                normal: {
                    formatter: (0.5 * 100).toFixed(2) + '%',
                    textStyle: {
                        fontSize: 50,
                        shadowBlur: 0
                    },
                }
            },
            outline: {
                show: true,
                borderDistance: 5,
                itemStyle: {
                    borderColor: '#FA8C16',
                    borderWidth: 2,
                    shadowBlur: 0
                }
            },
        }

    ]
}