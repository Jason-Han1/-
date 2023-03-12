var data = 40;
option = {
    backgroundColor: '#040d2e',
    series: [
        {
            name: '外部刻度',
            type: 'gauge',
            radius: '160%',
            center: ['50%', '90%'],
            min: 0, //最小刻度
            max: 200, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#424859',
                fontSize: 10,
                distance: -24,
            }, //刻度标签。
            axisTick: {
                show: false,
            }, //刻度样式
            splitLine: {
                show: false,
            },
        },
        // 外侧灰色轴线
        {
            type: 'gauge',
            radius: '140%', // 位置
            center: ['50%', '90%'],
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 2, // 宽度
                    color: [[1, 'rgba(229,229,229,0.3)']], // 颜色
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
        // 中间灰色轴线
        {
            type: 'gauge',
            radius: '130%', // 位置
            center: ['50%', '90%'],
            min: 0,
            max: 200,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 20, // 宽度
                    color: [[1, '#515E66']], // 颜色
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
        // 内侧刻度
        {
            type: 'gauge',
            radius: '133%', // 位置
            center: ['50%', '90%'],
            min: 0,
            max: 200,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    // 轴线样式
                    width: 20, // 宽度
                    color: [[1, '#515E66']], // 颜色
                },
            },
            axisTick: {
                // 刻度
                show: true,
                splitNumber: 4,
                length: 8,
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
                show: true,
                length: '30%',
            },
            itemStyle: {
                //仪表盘指针样式
                normal: {
                    color: '#424859',
                },
            },
            detail: {
                // 仪表盘详情
                show: false,
            },
            data: [{ value:data }],
        },
        // 数据
        {
            type: 'gauge',
            radius: '133%', // 位置
            center: ['50%', '90%'],
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 26, // 宽度
                    color: [[data / 200, '#4D62FF']], // 颜色
                },
            },
            pointer: {
                // 仪表盘指针
                show: false,
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
            detail: {
                // 仪表盘详情
                show: true,
                width: '60%',
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, '-45%'],
                fontSize: 20,
                fontWeight: 'bolder',
                formatter: '{value}',
                color: '#C3BDD0',
            },
            data: [
                {
                    value: data,
                },
            ],
        },
    ],
};
