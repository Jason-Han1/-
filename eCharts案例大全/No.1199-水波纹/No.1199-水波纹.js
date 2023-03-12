const dataInfo = {
    status: '正常',
    value: 48,
};
// 字和边框颜色
const color = '#0091FF';
// 水波纹渐变色浅色和深色
const colorWaterLight = 'rgba(145, 213, 255, 1)';
const colorWater = 'rgba(24, 144, 255, 1)';
const colorBg = '#F0F8FF';
option = {
    title: {
        text: '{status|' + dataInfo.status + '}\n{value|' + dataInfo.value + '%}',
        textStyle: {
            fontSize: 14,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            rich: {
                status: {
                    fontSize: 14,
                    lineHeight: 22,
                    color: '#333333',
                },
                value: {
                    fontSize: 23,
                    lineHeight: 32,
                    color: color,
                },
            },
        },
        x: 'center',
        y: '35%',
    },
    backgroundColor: 'transparent',
    series: [
        {
            type: 'liquidFill',
            radius: '80%',
            center: ['50%', '50%'],
            backgroundStyle: {
                color: '#F0F8FF',
            },
            outline: {
                borderDistance: 3,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: color,
                },
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                        offset: 1,
                        color: colorWater,
                    },
                    {
                        offset: 0,
                        color: colorWaterLight,
                    },
                ],
                globalCoord: false,
            },
            label: {
                formatter: '',
            },
            shadowBlur: 0,
            shadowColor: 'transparent',
            waveAnimation: false, // 禁止左右波动
            animationDuration: 0, // 初始动画时长
            animationDurationUpdate: 0,
            data: [dataInfo.value / 100],
        },
    ],
};
