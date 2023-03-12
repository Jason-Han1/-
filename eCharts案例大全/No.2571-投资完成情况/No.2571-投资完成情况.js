var optionData = {
    title: '已投资',
    legendData: ['已投资', '年总投资'],
    progress: {
        colorStops: ['#46d7a2', '#92ffd8'],
    },
    detail: {
        color: '#43D5A0',
    },
    axisTick: {
        color: 'rgba(67, 213, 160,.25)',
    },
    axisLine: {
        color: ['rgba(67, 213, 160, 0.25)', 'rgba(67, 213, 160, 0)'],
    },
    value: 50,
};
option = {
    legend: {
        data: [
            {
                name: optionData.legendData[0],
                itemStyle: {
                    color: '#43D5A0',
                },
            },
            {
                name: optionData.legendData[1],
                itemStyle: {
                    color: 'rgba(255,255,255,.5)',
                },
            },
        ],
        bottom: '20%',
        right: '15%',
        itemGap: 20,
        orient: 'lineHeight',
        itemWidth: 8,
        selectedMode: false, // 图例禁止点击
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
        {
            animation: false,
            name: optionData.legendData[0],
            type: 'gauge',
            center: ['35%', '75%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 12,
            // 展示当前进度
            progress: {
                show: true,
                width: 12,
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
                                color: 'rgba(255,255,255,0.15)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,255,255,0.15)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
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
                show: false,
                distance: 16,
                formatter: function (value) {
                    if (value === 100) {
                        return value + '%';
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
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: ['0%', '18%'],
                fontSize: 12,
                fontWeight: 'bolder',
                formatter: function (value) {
                    return optionData.title;
                },
                color: '#fff',
            },
            data: [
                {
                    value: 100,
                },
            ],
        },
        // 内容
        {
            name: optionData.legendData[1],
            type: 'gauge',
            center: ['35%', '75%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            zlevel: 10,
            max: 100,
            splitNumber: 12,
            // 展示当前进度
            progress: {
                show: true,
                width: 12,
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
                                color: optionData.progress.colorStops[0], // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: optionData.progress.colorStops[1], // 100% 处的颜色
                            },
                        ],
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
                    width: 1,
                    color: optionData.axisTick.color,
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
                fontSize: 18,
                fontWeight: 'bolder',
                formatter: function (value) {
                    return value + '%';
                },
                color: optionData.detail.color,
            },
            data: [
                {
                    value: optionData.value,
                },
            ],
        },
        // 左边刻度线
        {
            type: 'gauge',
            center: ['35%', '75%'],
            startAngle: 190,
            endAngle: -10,
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
                distance: -19,
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
            center: ['35%', '75%'],
            startAngle: 190,
            endAngle: -10,
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
                distance: -30,
                formatter: function (value) {
                    if (value === 100) {
                        return value + '%';
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
            radius: '50%', // 位置
            center: ['35%', '75%'],
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
                                    color: optionData.axisLine.color[0],
                                },
                                {
                                    offset: 0,
                                    color: optionData.axisLine.color[1],
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
