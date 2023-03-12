var dataArr = 6130;
option = {
    backgroundColor: '#000',
    series: [
        // 刻度值
        {
            name: '外部刻度',
            type: 'gauge',
            radius: '90',
            min: 0,
            max: 10000,
           
            splitNumber: 5, //刻度数量
            startAngle: 186,
            endAngle: -6,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#FFF',
                fontSize: 9,
                distance: -4, // 动态
            }, //刻度标签。
            axisTick: {
                show: false,
            }, //刻度样式
            splitLine: {
                show: false,
            },
        },
        // 底层
        {
            name: '内部宽线条',
            type: 'gauge',
            radius: '94',
            startAngle: 186,
            endAngle: -6,
           
            axisLine: {
                roundCap: true,
                lineStyle: {
                    color: [[1, '#2f7194']],
                    width: 15,
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
                show: false,
            },
        },
        //   间隔条形
        {
            name: '间隔条形',
            type: 'gauge',
            radius: '90',
            min: 0,
            max: 10000,
            
            z: 4,
            splitNumber: 14,
            startAngle: 186,
            endAngle: -6,
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: true,
                length: 12,
                splitNumber: 2,
                distance: -12,
                lineStyle: {
                    color: '#2f7698',
                    width: 2,
                },
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                show: false,
            },
        },
        // 数据
        {
            name: '内层数据刻度',
            type: 'gauge',
            radius: '91',
            z: 3,
            min: 0,
            max: 10000,
           
            startAngle: 186,
            endAngle: -6,
            // 进度的颜色
            axisLine: {
                roundCap: true,
                lineStyle: {
                    width: 10,
                    // color: [[0.2, '#77D97F'],[0.8, '#4285F4'],[1, '#FF7E7F']],
                    color: [
                        // [dataArr/10000,'#fff'],
                        [1, '#1c5a73'],
                    ],
                },
            },
            progress: {
                show: true,
                roundCap: false,
                width: 11,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: dataArr / 10000 / 6,
                                color: '#ffffff',
                            },
                            {
                                offset: 0.4,
                                color: '#54cae2',
                            },
                            {
                                offset: 0.7,
                                color: '#3690a3',
                            },
                            {
                                offset: 1,
                                color: '#2d7a8b',
                            },
                        ],
                        // global: false // 缺省为 false
                    },
                    borderColor: '#1b5b76',
                    borderWidth: '2',
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
            pointer: {
                length: '68%',
                width: 2,
                offsetCenter: [0, '-30%'],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#ffffff',
                            },
                            {
                                offset: 0.7,
                                color: '#ffffff',
                            },
                            {
                                offset: 1,
                                color: '#2d7a8b',
                            },
                        ],
                        // global: false // 缺省为 false
                    },
                    // shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 7,
                    shadowColor: '#ffffff',
                },
            },
            detail: {
                offsetCenter: ['4%', '-5%'],
                formatter: function (value) {
                    return '{value|' + value.toFixed(0) + '}';
                },
                rich: {
                    value: {
                        fontSize: 28,
                        fontWeight: 'bolder',
                        color: '#ffffff',
                        textShadowBlur: '12',
                        textShadowColor: '#3ea0b5',
                    },
                    unit: {
                        fontSize: 28,
                        fontWeight: 'bolder',
                        color: '#ffffff',
                        textShadowBlur: '12',
                        textShadowColor: '#3ea0b5',
                    },
                },
            },
            data: [
                {
                    value: dataArr,
                },
            ],
        },
        // 最外层线
        {
            type: 'gauge',
            name: '外层辅助',
            radius: 102,
            startAngle: 188,
            // center: ['50%', '75%'],
            endAngle: -9,
            min: 0,
            max: 10000,
            splitNumber: 5,
            pointer: {
                show: false,
            },
            axisLine: {
                roundCap: true,
                show: true,
                lineStyle: {
                    color: [[1, '#3ea0b5']],
                    width: 3,
                    opacity: 0.5,
                    shadowColor: 'rgba(0,138,255,0.45)',
                    shadowBlur: 5,
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                },
            },

            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        // 最内层线
        {
            name: '最内层线',
            type: 'gauge',
            radius: '48',
          
            startAngle: 192,
            min: 0,
            max: 10000,
            endAngle: -12,
            splitLine: {
                show: false,
                lineStyle: {
                    opacity: 0,
                },
            },
            axisLabel: {
                show: false,
            },
            // 上面一圈
            itemStyle: {
                color: '#50cbe7',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 2,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
            },
            // 刻度指到位置
            progress: {
                roundCap: true,
                show: true,
                roundCap: true,
                width: 3,
            },
            axisLine: {
                roundCap: true,
                show: true,
                lineStyle: {
                    color: [[1, '#2e719a']],
                    width: 3,
                    opacity: 0.5,
                    shadowColor: 'rgba(0,138,255,0.45)',
                    shadowBlur: 5,
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                },
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: dataArr,
                    // value: data.value
                },
            ],
        },
    ],
};
