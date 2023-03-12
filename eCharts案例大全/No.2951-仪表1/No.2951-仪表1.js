option = {
    background: '#999999',
    grid: {
        left: '4%',
        bottom: '10%',
        containLabel: true,
    },
    series: [
        {
            name: '',
            type: 'gauge',
            splitNumber: 4, //刻度数量
            startAngle: 180, //开始角度 左侧角度
            endAngle: 0, //结束角度 右侧
            min: 0,
            max: 100,
            radius: '100%', //图表尺寸
            center: ['50%', '50%'],
            title: {
                show: true,
                offsetCenter: [0, 0], // x, y，单位px
                textStyle: {
                    color: '#43A4F3',
                    fontSize: 34,
                },
            },
            detail: {
                show: true,
                offsetCenter: [0, -50],
                color: '#43A4F3',
                fontSize: 34,
                formatter: '{value}' + '%',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [0.2, '#43A4F3'],
                        [0.8, '#43A4F3'],
                        [1, '#43A4F3'],
                    ],
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 3,
                },
                length: 30,
                splitNumber: 6,
            },
            splitLine: {
                show: false,
                length: 30,
                lineStyle: {
                    color: 'auto',
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                //仪表盘指针
                show: 0,
                length: '70%',
                width: 2,
            },

            data: [
                {
                    name: '完成率',
                    value: 75,
                },
            ],
        },
    ],
};
