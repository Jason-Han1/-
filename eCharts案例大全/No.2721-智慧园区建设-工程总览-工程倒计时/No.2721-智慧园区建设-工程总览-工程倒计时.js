option = {
    backgroundColor: '#000',
    legend: {
        show: false,
    },
    series: [
        // 背景
        {
            animation: false,
            name: '累计完成投资',
            type: 'gauge',
            center: ['50%', '75%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            radius: '85%',
            max: 100,
            zlevel: 6,
            splitNumber: 10,

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
                distance: 0,
                color: '#3ad7fd',
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
                    value: 100,
                },
            ],
        },
        // 背景
        {
            animation: false,
            name: '累计完成投资',
            type: 'gauge',
            center: ['50%', '75%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            zlevel: 6,
            splitNumber: 10,
            // 展示当前进度
            progress: {
                show: true,
                width: 16,
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
                distance: 0,
                formatter: function (value) {
                    return parseInt(value);
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
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: ['0%', '18%'],
                fontSize: 12,
                fontWeight: 'bolder',
                formatter: function (value) {
                    return '累计完成投资';
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
            name: '投资',
            type: 'gauge',
            center: ['50%', '75%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            zlevel: 10,
            max: 100,
            splitNumber: 16,
            // 展示当前进度
            progress: {
                show: true,
                width: 16,
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
                                color: '#59a4f7', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#35dffe', // 100% 处的颜色
                            },
                        ],
                        global: false,
                    },
                },
            },
            // 仪表盘指针
            pointer: {
                show: true,
                itemStyle: {
                    color: '#39d9fd',
                },
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
                show: false,
                distance: -45,
                length: 10,
                lineStyle: {
                    width: 1,
                    color: 'rgba(27, 133, 190,.25)',
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
                show: false,
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: ['0%', '-12%'],
                fontSize: 18,
                fontWeight: 'bolder',
                formatter: function (value) {
                    return value + '%';
                },
                color: '#64D6F5',
            },
            data: [
                {
                    value: 50,
                },
            ],
        },
        // 左边刻度线
        {
            type: 'gauge',
            center: ['50%', '75%'],
            startAngle: 180,
            endAngle: 0,
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
                show: false,
            },
            // 表盘中指针的固定点
            anchor: {
                show: false,
            },
            detail: {
                show: true,
                offsetCenter: ['-100%', '20%'],
                formatter: ['{a|754天}','{b|总工期}'].join('\n'),
                color: '#64D6F5',
                rich: {
                    a: {
                        color: '#36defe',
                        fontSize: 16,
                    },
                    b: {
                        color: '#f6f7fb',
                        fontSize: 12,
                    },
                    
                },
            },
            data: [
                {
                    value: 20,
                },
            ],
        },
        // 左边刻度线
        {
            type: 'gauge',
            center: ['50%', '75%'],
            startAngle: 180,
            endAngle: 0,
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
                show: false,
            },
            // 表盘中指针的固定点
            anchor: {
                show: false,
            },
            detail: {
                show: true,
                offsetCenter: ['100%', '20%'],
                formatter: ['{a|186天}','{b|总工期}'].join('\n'),
                color: '#64D6F5',
                lineHeight: 16,
                rich: {
                    a: {
                        color: '#ff7889',
                        fontSize: 16,
                    },
                    b: {
                        color: '#f6f7fb',
                        fontSize: 12,
                    },
                    
                },
            },
            data: [
                {
                    value: 20,
                },
            ],
        },
    ],
};
