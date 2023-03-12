var dataArr = 1.5;
option = {
    backgroundColor: '#000',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
        {
            name: '外部线',
            type: 'gauge',
            radius: '85%', // 动态
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#135554'], // 动态
                    ],
                    width: 1,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                //标题
                show: false,
            },
        },
        {
            name: '外部刻度',
            type: 'gauge',
            radius: '78%',
            min: 0, //最小刻度
            max: 10, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#31F3FF',
                fontSize: 30,
                distance: -18,
            }, //刻度标签。
            axisTick: {
                show: false,
            }, //刻度样式
            splitLine: {
                show: false,
            },
        },
        {
            type: 'pie',
            radius: ['30%', '32%'],
            name: '',
            hoverAnimation: false,
            clockWise: true,
            showEmptyCircle: true,
            itemStyle: {
                color: '#2A9390',
            },
            label: {
                show: false,
            },
            silent: true,
            data: [0],
        },
        {
            name: '数据',
            type: 'gauge',
            radius: '65%',
            z: 3,
            startAngle: 225,
            max: 10,
            endAngle: -45,
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / 10, '#31F3FF'], // 动态
                        [1, 'rgba(81,255,253,.1)'],
                    ],
                    width: 80,
                },
            },
            tooltip: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: true,
                fontSize: 60,
                color: '#fff',
                offsetCenter: [0, '8%'],
                fontWeight: 'bold',
            },
            pointer: {
                show: false,
                width: 3,
            },
            data: [
                {
                    name: '',
                    value: dataArr,
                },
            ],
        },
    ],
};
