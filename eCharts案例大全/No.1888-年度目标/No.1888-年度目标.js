option = {
    title: {
        text: '123213',
        x: '34%',
        y: '10%',
        textAlign: 'center',
        textStyle: {
            color: '#2E374D',
            fontSize: 14,
        },
    },
    backgroundColor: '#fff',
    legend: {
        data: [
            {
                name: '总数',
                itemStyle: {
                    color: 'rgba(208, 215, 227, 1)',
                },
            },
            {
                name: '开工',
                itemStyle: {
                    color: '#5C68BC',
                },
            },
        ],
        bottom: 'center',
        right: '15%',
        itemGap: 20,
        orient: 'lineHeight',
        itemWidth: 8,
        selectedMode: true, // 图例禁止点击
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
            name: '总数',
            type: 'gauge',
            center: ['35%', '60%'],
            startAngle: 180,
            endAngle: 0,
            splitNumber: 12,
            // 展示当前进度
            progress: {
                show: true,
                width: 20,
                itemStyle: {
                    color: 'rgba(208, 215, 227, 1)',
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
        // 内容
        {
            name: '开工',
            type: 'gauge',
            center: ['35%', '60%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 3,
            zlevel: 10,
            splitNumber: 12,
            // 展示当前进度
            progress: {
                show: true,
                width: 20,
                itemStyle: {
                    color: '#5C68BC',
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
            },
            // 表盘中指针的固定点
            anchor: {
                show: false,
            },
            detail: {
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: ['0%', '-2%'],
                fontSize: 30,
                fontWeight: 'bolder',
                formatter: function (value) {
                    return parseInt((2 / 3) * 100) + '%';
                },
                color: 'rgba(0,0,0,.65)',
            },
            data: [
                {
                    value: 2,
                },
            ],
        },
    ],
};
