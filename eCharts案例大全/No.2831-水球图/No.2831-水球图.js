const payload = { id: 'liquid-fill-5', color: ['#F37826', '#F39F26'], data: { data: '0.55' } };

data = payload.data.data
const color = payload.color

option = {
    backgroundColor: 'transparent',
    series: [
        {
            name: '水球图',
            type: 'liquidFill',
            radius: '95%',
            center: ['50%', '50%'],
            waveAnimation: 10, // 动画时长
            amplitude: 5, // 振幅
            // 注释上面2行, 并开启下面三行, 则关闭动画
            // waveAnimation: false,
            // animationDuration: 0,
            // animationDurationUpdate: 0,
            data: [data, data - 1 / 10],
            itemStyle: {
                //渐变色设置
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: color[0]
                    },
                    {
                        offset: 1,
                        color: color[1]
                    }
                ])
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                    {
                        offset: 1,
                        color: color[0]
                    },
                    {
                        offset: 0,
                        color: color[1]
                    }
                ],
                globalCoord: false
            },
            outline: {
                show: true,
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: color[0]
                            },
                            {
                                offset: 1,
                                color: color[1]
                            }
                        ],
                        globalCoord: false
                    }
                }
            },
            backgroundStyle: {
                color: '#58A0AD'
            },
            label: {
                color: '#ffffff',
                insideColor: '#ffffff',
                fontSize: 14,
                formatter: params => {
                    //console.log(params)
                    const newValue = params.value * 100
                    return '' + newValue.toFixed(0) + '分'
                }
            }
        }
    ]
}