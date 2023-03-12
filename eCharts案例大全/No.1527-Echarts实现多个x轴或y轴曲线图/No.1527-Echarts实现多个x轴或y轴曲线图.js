option = {
    yAxis: [
        {
            name: '指标参数一(单位)',
            type: 'value',
            // max: 700,
            // min: 0,
            // 让表格的刻度向靠里侧显示
            axisTick: {
                inside: true,
            },
            axisLabel: {
                inside: true,
            },
            // 设置刻度线的颜色等样式
            axisLine: {
                lineStyle: {
                    color: 'red',
                    width: 3,
                },
            },
            splitLine: {
                show: true, //想要不显示网格线，改为false
                lineStyle: {
                    // 设置网格为虚线
                    type: 'dashed',
                },
            },
        },
        {
            name: '指标参数二(单位)',
            // max: 800,
            // min: 0,
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'orange',
                    width: 3,
                },
            },
            splitLine: {
                show: false, //想要不显示网格线，改为false
            },
            // 设置坐标轴偏移位置
            offset: -400,
        },
        {
            name: '指标参数三(单位)',
            // max: 900,
            // min: 0,
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'green',
                    width: 3,
                },
            },
            offset: -600,
            splitLine: {
                show: false, //想要不显示网格线，改为false
            },
        },
        {
            name: '指标参数四(单位)',
            // max: 1000,
            // min: 0,
            type: 'value',
            axisTick: {
                inside: true,
            },
            axisLabel: {
                inside: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'blue',
                    width: 3,
                },
            },
            splitLine: {
                show: false, //想要不显示网格线，改为false
            },
        },
        {
            name: '指标参数五(单位)',
            // max: 1100,
            // min: 0,
            type: 'value',
            offset: 100,
            axisTick: {
                inside: true,
            },
            axisLabel: {
                inside: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'purple',
                    width: 3,
                },
            },
            splitLine: {
                show: false, //想要不显示网格线，改为false
            },
        },
        {
            name: '指标参数六(单位)',
            // max: 700,
            // min: 0,
            type: 'value',
            offset: 200,
            axisTick: {
                inside: true,
            },
            axisLabel: {
                inside: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'pink',
                    width: 3,
                },
            },
            splitLine: {
                show: false, //想要不显示网格线，改为false
            },
        },
    ],
    xAxis: {
        name: '时间',
        type: 'time',
        // boundaryGap: false, //x下标在刻度处显示
        splitLine: {
            show: true, //想要不显示网格线，改为false
            lineStyle: {
                // 设置网格为虚线
                type: 'dashed',
            },
        },
        // splitArea: { show: true }, //保留网格区域
        // 设置刻度线的颜色等样式
        axisLine: {
            lineStyle: {
                color: 'black',
                width: 3,
            },
        },
    },
    // 调整表格两边空白的区域
    grid: {
        // 左侧
        x: '20%',
        // 上部
        // y: 25,
        // 右侧
        x2: '20%',
        // 下部
        // y2: 35
    },

    series: [
        {
            // 曲线数据配置
            data: [
                {
                    // value[0] 为时间  value[1] 为值
                    value: ['1997-10-1', 300],
                },
                {
                    value: ['1997-10-2', 200],
                },
                {
                    value: ['1997-10-3', 500],
                },
                {
                    value: ['1997-10-4', 600],
                },
                {
                    value: ['1997-10-5', 400],
                },
                {
                    value: ['1997-10-6', 200],
                },
            ],
            // 曲线名
            name: '参数1',
            // 设置参数对应的y坐标轴的索引
            type: 'line',
            // 曲线平滑设置
            smooth: true,
        },
        {
            data: [
                {
                    value: ['1997-10-1', 180],
                },
                {
                    value: ['1997-10-2', 250],
                },
                {
                    value: ['1997-10-3', 50],
                },
                {
                    value: ['1997-10-4', 450],
                },
                {
                    value: ['1997-10-5', 400],
                },
                {
                    value: ['1997-10-6', 200],
                },
            ],
            // 曲线名
            name: '参数2',
            // 设置所在曲线对应的y坐标轴的索引
            yAxisIndex: 1,
            type: 'line',
            // 曲线平滑设置
            smooth: true,
        },
        {
            data: [
                {
                    value: ['1997-10-1', 100],
                },
                {
                    value: ['1997-10-2', 800],
                },
                {
                    value: ['1997-10-3', 250],
                },
                {
                    value: ['1997-10-4', 350],
                },
                {
                    value: ['1997-10-5', 360],
                },
                {
                    value: ['1997-10-6', 500],
                },
            ],
            name: '参数3',
            // 设置参数对应的y坐标轴的索引
            yAxisIndex: 2,
            type: 'line',
            // 曲线平滑设置
            smooth: true,
        },
        {
            data: [
                {
                    value: ['1997-10-1', 200],
                },
                {
                    value: ['1997-10-2', 400],
                },
                {
                    value: ['1997-10-3', 600],
                },
                {
                    value: ['1997-10-4', 800],
                },
                {
                    value: ['1997-10-5', 1000],
                },
                {
                    value: ['1997-10-6', 1100],
                },
            ],
            name: '参数4',
            // 设置参数对应的y坐标轴的索引
            yAxisIndex: 3,
            type: 'line',
            // 曲线平滑设置
            smooth: true,
        },
        {
            data: [
                {
                    value: ['1997-10-1', 1100],
                },
                {
                    value: ['1997-10-2', 800],
                },
                {
                    value: ['1997-10-3', 600],
                },
                {
                    value: ['1997-10-4', 500],
                },
                {
                    value: ['1997-10-5', 400],
                },
                {
                    value: ['1997-10-6', 200],
                },
            ],
            name: '参数5',
            // 设置参数对应的y坐标轴的索引
            yAxisIndex: 4,
            type: 'line',
            // 曲线平滑设置
            smooth: true,
        },
        {
            data: [
                {
                    value: ['1997-10-1', 700],
                },
                {
                    value: ['1997-10-2', 600],
                },
                {
                    value: ['1997-10-3', 500],
                },
                {
                    value: ['1997-10-4', 400],
                },
                {
                    value: ['1997-10-5', 300],
                },
                {
                    value: ['1997-10-6', 200],
                },
            ],
            name: '参数6',
            // 设置参数对应的y坐标轴的索引
            yAxisIndex: 5,
            type: 'line',
            // 曲线平滑设置
            smooth: true,
        },
    ],
    tooltip: {
        trigger: 'axis', // 有3个属性值 axis   item   none
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985', //配置展示方块的背景颜色
            },
        },
    },
    legend: {
        // 调整图样文字
        data: ['参数1', '参数2', '参数3', '参数4', '参数5', '参数6'],
    },
    color: ['red', 'orange', 'green', 'blue', 'purple', 'pink'],
};
