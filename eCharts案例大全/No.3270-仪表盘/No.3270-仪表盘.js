option = {
    series: [
        {
            name: '信用评分',
            type: 'gauge',
            axisLine: {
                //轴线分成不同颜色的多段,每段的结束位置和颜色通过数组来表示
                show: true,
                lineStyle: {
                    width: 50,
                    color: [
                        [0.39, '#444444'],
                        [0.64, '#FF0000'],
                        [0.79, '#EAEC3D'],
                        [0.94, '#058DE7'],
                        [1, '#10FD10'],
                    ],
                },
            },
            axisTick: {
                show: true,
                length: 12,
                lineStyle: {
                    width: 2,
                },
            },
            axisLabel: {
                show: true,
                fontSize: 23,
                distance: 12,
            },
            splitLine: {
                show: true,
                length: 50,
                lineStyle: {
                    color: '#fff',
                },
            },
            pointer: {
                show: true,
                length: '50%',
                width: '6',
            },
            itemStyle: {
                color: '#058DE7',
            },
            detail: {//显示详情
                fontSize: 70,
                color: 'auto',//默认取数值所在的区间的颜色
            },
            title: {//显示标题
                show: true,
                fontSize: 30,
                color: '#444444',
            },
            data: [
                {
                    value: 90,
                    name: '信用评分',
                },
            ],
        },
    ],
};
