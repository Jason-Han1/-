var dataArr = 44;
option = {
    backgroundColor: '#000f22',
    title: {
        text: "时间稼动率",
        bottom: '28%',
        left: '43%',
        textStyle: {
            fontSize: 20,
            color: '#fff'
        }
    },
    series: [
        {
            name: '内部进度条',
            type: 'gauge',
            radius: '58%',
            splitNumber: 10,
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            data: [
                {
                    value: 44,
                },
            ],
            pointer: {
                show: true,
                length: '55%',
                radius: '20%',
                width: 3, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            name: '外部刻度',
            type: 'gauge',
            radius: '54%',
            z: 4,
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: 'rgba(255,255,255,.5)',
                distance: 5,
                formatter: function (v) {
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '10':
                            return '10';
                        case '20':
                            return '20';
                        case '30':
                            return '30';
                        case '40':
                            return '40';
                        case '50':
                            return '50';
                        case '60':
                            return '60';
                        case '70':
                            return '70';
                        case '80':
                            return '80';
                        case '90':
                            return '90';
                        case '100':
                            return '100';
                    }
                },
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: '#42E5FB',
                },
                length: 8,
            }, //刻度样式
            splitLine: {
                show: true,
                length: 30,
                lineStyle: {
                    color: '#42E5FB',
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: true,
            },
        },
    ],
};
