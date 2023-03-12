option = {
    backgroundColor: 'transparent',
    title: [
        {
            text: '11',
            x: 'center',
            top: '46%',
            textStyle: {
                fontSize: '26',
                color: '#333',
                foontWeight: '600',
            },
        },
    ],
    polar: {
        radius: ['100%', '30%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 30,
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
    series: [
        {
            radius: '100%',
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: 'transparent',
            },
            data: [10],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: '#0077FF',
                },
            },
        },
        {
            name: '灰色内圈', //刻度背景
            type: 'gauge',
            z: 2,
            radius: '70%',
            startAngle: '0',
            endAngle: '-359.99',
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [[1, '#769ace']],
                    width: 2,
                    opacity: 1, //刻度背景宽度
                },
            },
            splitLine: {
                show: false,
            },
            data: [
                {
                    show: false,
                    value: '100',
                },
            ], //作用不清楚
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: 0,
            },
        },
    ],
};
