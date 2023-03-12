var colorLeft = '#00FCF7';
var colorRight = '#5098ed';
var colorLeftAlpha = ['#00FCF788', '#00FCF70c'];
var colorRightAlpha = ['#5098ed88', '#5098ed08'];
var value = 88;
var data = {
    value: value,
    percent: (value / 100).toFixed(2),
};
option = {
    backgroundColor: '#040d2e',
    series: [
        // 外侧灰色轴线
        {
            type: 'gauge',
            radius: '98%', // 位置
            center: ['50%', '70%'],
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 4, // 宽度
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
            radius: '90%', // 位置
            center: ['50%', '70%'],
            min: 0,
            max: 200,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 40, // 宽度
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
            radius: '85%', // 位置
            center: ['50%', '70%'],
            min: 0, 
            max: 200,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    // 轴线样式
                    width: 40, // 宽度
                    color: [[1, '#515E66']], // 颜色
                },
            },
            axisTick: {
                // 刻度
                show: true,
                splitNumber: 4,
                length: 20,
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
        // 数据
        {
            type: 'gauge',
            radius: '93%', // 位置
            center: ['50%', '70%'],
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 60, // 宽度
                    color: [[0.4, '#4D62FF']], // 颜色
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
                show: false,
            },
        },
    ],
};
