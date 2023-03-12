var dataArr = 328;
let highlight = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#fe1440', // 0% 处的颜色
    },
    {
        offset: 0.17,
        color: '#fd9d35', // 100% 处的颜色
    },
    {
        offset: 0.9,
        color: '#b6fd62', // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#09fe44', // 100% 处的颜色
    },
]);

option = {
    backgroundColor: '#fff',
    tooltip: {
        show: false,
    },

    series: [
        {
            name: '内部进度条',
            type: 'gauge',
            radius: '40%',
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [[1, highlight]],
                    width: 8,
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
            itemStyle: {
                show: false,
            },
            detail: {
                formatter: function () {
                    return '空气良';
                },
                offsetCenter: [0, 130],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 20,
                    fontWeight: '500',
                    color: '#324063',
                },
            },
            title: {
                //标题
                show: true,
                offsetCenter: [0, 50], // x, y，单位px
                textStyle: {
                    color: '#59ab82',
                    fontSize: 30, //表盘上的标题文字大小
                    fontWeight: 700,
                    fontFamily: 'PingFangSC',
                },
            },
            itemStyle: {
                normal: {
                    color: '#209366',
                },
            },
            data: [
                {
                    name: dataArr,
                    value: dataArr / 10,
                },
            ],
            pointer: {
                show: true,
                length: '75%',
                radius: '20%',
                width: 10, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            name: '外部刻度',
            type: 'gauge',
            radius: '50%',
            min: 0,
            max: 1000,
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: 0,
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                // color: '#4d5bd1',
                distance: 30,
                formatter: function (v) {
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '100':
                            return '100';
                        case '200':
                            return '200';
                        case '300':
                            return '300';
                        case '400':
                            return '400';
                        case '500':
                            return '500';
                        case '600':
                            return '600';
                        case '700':
                            return '700';
                        case '800':
                            return '800';
                        case '900':
                            return '900';
                        case '1000':
                            return '1000';
                    }
                },
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: highlight,
                    width: 1,
                },
                length: -8,
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: highlight,
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
    ],
};
