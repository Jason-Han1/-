var value = 0.25;
var option = {
    backgroundColor: '#191F27',
    title: {
        text: '',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: 'rgb(97, 142, 205)',
        },
    },
    angleAxis: {
        polarIndex: 0,
        min: 0,
        max: 100,
        show: false,
        // startAngle:90,
        clockwise:false
    },
    radiusAxis: {
        type: 'category',
        min: 10,
        max: 10,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    polar: {
        center: ['50%', '50%'], //中心点位置
        radius: '500', //图形大小
    },

    series: [
        {
            type: 'liquidFill',
            radius: '60%',
            center: ['50%', '50%'],
            data: [value, value / 1.1, value / 1.2], // data个数代表波浪数
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            label: {
                formatter: ['{a|220}{b| 辆}', `{c|完成率   ${(value * 100).toFixed(2)}%}`].join('\n'),

                rich: {
                    a: {
                       fontSize: 34,
                        fontFamily: 'DS',
                        color: '#03F0FF',
                    },
                    b: {
                        
                        fontSize:14,
                        color: '#1279A9'
                    },
                    c: {
                        fontSize: 11,
                       color:'#B7C9E3',
                       height:30
                    },
                },
            },
            outline: {
                show: false,
            },
        },
        {
            type: 'bar',
            z: 10,
            name: '外环',
            data: [value * 100],
            showBackground: true,
            backgroundStyle: {
                color: '#282C31',
            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: {
                        // 完成的圆环的颜色
                        colorStops: [
                            {
                                offset: 0,
                                color: '#A098FC', // 0% 处的颜色
                            },
                            {
                                offset: 0.3,
                                color: '#4386FA', // 0% 处的颜色
                            },
                            {
                                offset: 0.6,
                                color: '#4FADFD', // 0% 处的颜色
                            },
                            {
                                offset: 0.8,
                                color: '#0CD3DB', // 100% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#646CF9', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
        },
    ],
};
