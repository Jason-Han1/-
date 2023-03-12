let getvalue = ['40'];
option = {
    angleAxis: {
        max: '100',
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
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
        center: ['50%', '50%'],
        radius: '146%', //图形大小
    },
    series: [
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['71%', '75%'],
            startAngle: 0,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                color: 'rgba(122, 189, 255, 1)',
            },
            label: {
                show: false,
            },
            data: [0],
            z: 99,
        },
        {
            type: 'bar',
            data: getvalue,
            showBackground: false,
            backgroundStyle: {
                color: '#BDEBFF',
            },
            coordinateSystem: 'polar',
            roundCap: false,
            barWidth: 30,
            z: 999,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: 'rgba(106, 222, 203, 1)',
                },
            },
        },
    ],
};
