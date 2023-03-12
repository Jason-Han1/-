option = {
    backgroundColor: '#000',
    legend: {
        data: [
            {
                name: '报警数量',
                itemStyle: {
                    color: '#40E7DC',
                },
            },
        ],
        top: 'center',
        right: '10%',
        itemGap: 30,
        orient: 'lineHeight',
        itemWidth: 8,
        show:false,
        selectedMode: false, //图例禁止点击
        itemHeight: 8,
        textStyle: {
            color: '#eee',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
    },
    series: [
        // 背景
        // {
        //     animation: true,
        //     name: '报警数量',
        //     type: 'gauge',
        //     center: ['50%', '60%'],
        //     startAngle: 180,
        //     endAngle: 0,
        //     min: 0,
        //     max: 100,
        //     splitNumber: 12,
        //     // 展示当前进度
        //     progress: {
        //         show: true,
        //         width: 30,
        //         itemStyle: {
        //             color: {
        //                 type: 'linear',
        //                 x: 0,
        //                 y: 0,
        //                 x2: 0,
        //                 y2: 1,
        //                 colorStops: [
        //                     {
        //                         offset: 0,
        //                       color: 'rgba(255,255,255,0.15)', // 0% 处的颜色
        //                     },
        //                     {
        //                         offset: 1,
        //                       color: 'rgba(255,255,255,0.15)', // 100% 处的颜色
        //                     },
        //                 ],
        //                 global: false, // 缺省为 false
        //             },
        //         },
        //     },
        //     // 仪表盘指针
        //     pointer: {
        //         show: false,
        //     },
        //     // 仪表盘轴线相关配置
        //     axisLine: {
        //         show: false,
        //         lineStyle: {
        //             color: [[1, '#304c60']],
        //             width: 30,
        //         },
        //     },
        //     // 刻度样式
        //     axisTick: {
        //         show: false,
        //         distance: -45,
        //         length: 10,
        //         lineStyle: {
        //             width: 4,
        //             miterLimit: 26,
        //             color: '#40E7DC',
        //         },
        //     },
        //     // 分隔线样式
        //     splitLine: {
        //         show: false,
        //     },
        //     // 刻度标签
        //     axisLabel: {
        //         show: false,
        //         distance: 16,
        //         formatter: function (value) {
        //             if (value === 100) {
        //                 return value + '%';
        //             }
        //             return '';
        //         },
        //         color: 'rgba(64,231,220)',
        //         fontSize: 12,
        //     },
        //     // 表盘中指针的固定点
        //     anchor: {
        //         show: false,
        //     },
        //     detail: {
        //         lineHeight: 40,
        //         borderRadius: 8,
        //         offsetCenter: ['0%', '15%'],
        //         fontSize: 20,
        //         fontWeight: 'bolder',
        //         formatter: function (value) {
        //             return '';
        //         },
        //         color: '#fff',
        //     },
        //     data: [
        //         {
        //             value: 100,
        //         },
        //     ],
        // },
        // 内容
        {
            name: '报警数量',
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            zlevel: 10,
            max: 100,
            splitNumber: 12,
            // 展示当前进度
            progress: {
                show: true,
                width: 30,
                
                itemStyle: {
                    color: {
                        
                      
                            // 设置左侧仪表盘颜色变化
                            end: 0.1,
                            color: 'rgba(65,150,247,0)',
                        },
                        // {
                        //     end: 0.8,
                        //     color: 'rgba(118,251,230,.8)',
                        // },
                        // {
                        //     end: 0.95,
                        //     color: '#83FFFF',
                        // },
                        // {
                        //     end: 1,
                        //     color: 'white',
                        // },
                        global: false,
                    },
                },
            },
            // 仪表盘指针
            pointer: {
                show: false,
            },
            // 仪表盘轴线相关配置
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[1, '#304c60']],
                    width: 30,
                },
            },
            // 刻度样式
            axisTick: {
                distance: -45,
                length: 10,
                lineStyle: {
                    width: 4,
                    miterLimit: 26,
                    color: 'transparent',
                },
            },
            // 分隔线样式
            splitLine: {
                show: false,
            },
            // 刻度标签
            axisLabel: {
                show: false,
            },
            // 表盘中指针的固定点
            anchor: {
                show: false,
            },
            detail: {
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: ['0%', '-12%'],
                fontSize: 60,
                fontWeight: 'bolder',
                formatter: function (value) {
                    return value;
                },
                color: 'pink',
            },
            data: [
                {
                    value: 89,
                },
            ],
        },
        // 左边刻度线
        {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 185,
            endAngle: -5,
            min: 0,
            zlevel: 10,
            max: 100,
            splitNumber: 12,
            // 展示当前进度
            progress: {
                show: false,
            },
            // 仪表盘指针
            pointer: {
                show: false,
            },
            // 仪表盘轴线相关配置
            axisLine: {
                show: false,
            },
            // 刻度样式
            axisTick: {
                show: false,
            },
            // 分隔线样式
            splitLine: {
                show: false,
            },
            // 刻度标签
            axisLabel: {
                show: true,
                distance: -10,
                formatter: function (value) {
                    if (value === 0) {
                        return value;
                    }
                    return '';
                },
                color: 'rgba(255,255,255,.85)',
                fontSize: 12,
            },
            // 表盘中指针的固定点
            anchor: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 20,
                },
            ],
        },
        // 又边刻度线
        {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 185,
            endAngle: -5,
            min: 0,
            zlevel: 10,
            max: 100,
            splitNumber: 12,
            // 展示当前进度
            progress: {
                show: false,
            },
            // 仪表盘指针
            pointer: {
                show: false,
            },
            // 仪表盘轴线相关配置
            axisLine: {
                show: false,
            },
            // 刻度样式
            axisTick: {
                show: false,
            },
            // 分隔线样式
            splitLine: {
                show: false,
            },
            // 刻度标签
            axisLabel: {
                show: true,
                distance: -26,
                formatter: function (value) {
                    if (value === 100) {
                        return value;
                    }
                    return '';
                },
                color: 'rgba(255,255,255,.85)',
                fontSize: 12,
            },
            // 表盘中指针的固定点
            anchor: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 20,
                },
            ],
        },
        // 中间渐变背景
        {
            type: 'gauge',
            radius: '60%', // 位置
            center: ['50%', '60%'],
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 300, // 宽度
                    color: [
                        [
                            1,
                            new echarts.graphic.RadialGradient(0.5, 1, 1, [
                                {
                                    offset: 1,
                                    color: 'transparent',
                                },
                                {
                                    offset: 0,
                                    color: 'transparent',
                                },
                            ]),
                        ],
                    ],
                },
            },
            axisTick: {
                // 刻度
                show: false,
            },
            splitLine: {
                // 分割线
                show: false,
            },
            axisLabel: {
                // 刻度标签
                show: false,
            },
            pointer: {
                // 仪表盘指针
                show: false,
            },
            detail: {
                // 仪表盘详情
                show: false,
            },
        },
    ],
};
