const list1 = [30, 150, 140, 100];
const list2 = [25, 80, 70, 30];
const list3 = [30, 30, 40, 50];
const theme = {
    // 基础样式
    color: [
        {
            direction: 0, // 用角度值指定渐变的方向(或角度)
            color: ['rgba(242, 229, 147, 1)'], // 颜色
        },
        {
            direction: 0,
            color: ['rgba(244, 150, 115, 1)'],
        },
        {
            direction: 0, // 用角度值指定渐变的方向(或角度)
            color: ['rgba(229, 101, 113, 1)'], // 颜色
        },
        {
            direction: 0,
            color: ['rgba(182, 74, 207, 1)'],
        },
        {
            direction: 0, // 用角度值指定渐变的方向(或角度)
            color: ['rgba(103, 84, 189, 1)'], // 颜色
        },
        {
            direction: 0,
            color: ['rgba(129, 141, 212, 1)'],
        },
    ],
    // 最大值颜色
    max: {
        direction: 0, // 用角度值指定渐变的方向(或角度)
        color: ['rgba(79,141,255,1)', 'rgba(138,173,214,1)'], // 颜色
    },
};
option = {
    title: {},
    calculable: true,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    xAxis: {
        nameTextStyle: {
            color: '#ffffff',
            fontSize: 14,
        },
        axisLabel: {
            show: true,
            color: '#ffffff',
            fontSize: 16,
            fontFamily: 'Microsoft YaHei',
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#dadada',
                width: 1,
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,1)',
            },
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
                type: 'dashed',
            },
        },
        axisTick: {
            show: false,
        },
        data: ["系列1","系列2","系列3","系列4"],
        type: 'category',
    },
    yAxis: {
        axisLabel: {
            show: true,
            color: '#ffffff',
            fontSize: 14,
            fontFamily: 'Microsoft YaHei',
        },
        axisTick: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
                width: 1,
            },
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
                type: 'dashed',
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,1)',
                width: 1,
                // "type": "dashed"
            },
            show: false,
        },
        name: '',
    },
    series: [
        {
            name: '类别1',
            type: 'bar',
            stack: '1',
            data: list1,
            // 设置柱子的宽度
            barWidth: '25%',
            label: {
                show: true,
                position: 'top',
                color: '#333',
                formatter: function (param) {
                    return '';
                },
            },
            // 配置样式
            itemStyle: {
                // 通常情况下：
                normal: {
                    // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params) {
                        return theme.color[0].color[0];
                    },
                },
            },
        },
        {
            name: '类别2',
            type: 'bar',
            stack: '1',
            data: list2,
            // 设置柱子的宽度
            barWidth: '25%',
            label: {
                show: true,
                position: 'top',
                color: '#333',
                formatter: function (param) {
                    return '';
                },
            },
            // 配置样式
            itemStyle: {
                // 通常情况下：
                normal: {
                    // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params) {
                        return theme.color[1].color[0];
                    },
                },
            },
        },
        {
            name: '类别3',
            type: 'bar',
            stack: '1',
            data: list3,
            // 设置柱子的宽度
            barWidth: '25%',
            label: {
                show: true,
                position: 'top',
                color: '#333',
                formatter: function (param) {
                    if (param.name === '张三') {
                        return 50;
                    } else if (param.name === '李四') {
                        return 100;
                    } else if (param.name === '王五') {
                        return 80;
                    } else if (param.name === '陈六') {
                        return 70;
                    } else {
                        return '';
                    }
                },
            },
            // 配置样式
            itemStyle: {
                // 通常情况下：
                normal: {
                    // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params) {
                        return theme.color[2].color[0];
                    },
                },
            },
        },
    ],
};
