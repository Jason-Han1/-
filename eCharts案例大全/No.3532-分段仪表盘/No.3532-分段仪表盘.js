//颜色区间
var colorList = [
    {
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#7BB2FF', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#4186FF', // 100% 处的颜色
            },
        ],
    },
    {
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#00D0BF', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#05C399', // 100% 处的颜色
            },
        ],
    },
    {
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#FFD18C', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#FEAD5A', // 100% 处的颜色
            },
        ],
    },
    {
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#fc6b84', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#e43c59', // 100% 处的颜色
            },
        ],
    },
];

//数据
var data = {
    name: '信用等级',
    //0 - 100
    value: 80,
};

//文本
var textMap = {
    12: 'A',
    38: 'B',
    63: 'C',
    88: 'D',
};

option = {
    tooltip: {},
    series: [
        {
            type: 'gauge',
            splitNumber: 100,
            radius: '69%',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            pointer: {
                show: true,
                width: 7,
                length: '60%',
                borderColor: '#000',
                borderWidth: '10',
                itemStyle: {
                    color: 'auto',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 30,
                    color: [
                        [0.25, colorList[0]],
                        [0.5, colorList[1]],
                        [0.75, colorList[2]],
                        [1, colorList[3]],
                    ],
                    borderColor: '#000',
                    borderWidth: '10',
                },
            },
            axisLabel: {
                show: true,
                color: '#666',
                distance: -70,
                fontSize: 20,
                formatter: function (v) {
                    return textMap[v];
                },
            }, //刻度标签。
            axisTick: {
                show: 0,
            }, //刻度样式
            splitLine: {
                show: 0,

                lineStyle: {
                    color: '#fff',
                    width: 2,
                },
            }, //分隔线样式
            detail: {
                show: 0,
            },
            title: {
                show: false,
            },
            data: [data],
        },

        //外层
        {
            type: 'gauge',
            radius: '75%',
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            pointer: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 35,
                    color: [
                        [0.25, colorList[0]],
                        [0.5, colorList[1]],
                        [0.75, colorList[2]],
                        [1, colorList[3]],
                    ],
                    opacity: 0.15,
                    borderColor: '#000',
                    borderWidth: '10',
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
            data: [data],
        },
    ],
};
