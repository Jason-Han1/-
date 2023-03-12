var blueCol = function (n) {
    //0-1,1-0.8,2-0.6,3-0.4,4-0.2
    switch (n) {
        case 0:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#2274ed',
                },
                {
                    offset: 1,
                    color: '#4cbbf0',
                },
            ]);
        case 1:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#4e90f1',
                },
                {
                    offset: 1,
                    color: '#70c9f3',
                },
            ]);
        case 2:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#7aacf4',
                },
                {
                    offset: 1,
                    color: '#5ab8d4',
                },
            ]);
        case 3:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#a7c7f8',
                },
                {
                    offset: 1,
                    color: '#b7e4f9',
                },
            ]);
        default:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#d3e3fb',
                },
                {
                    offset: 1,
                    color: '#dbf1fc',
                },
            ]);
    }
};
var orangeCol = function () {
    //0-1,1-0.8,2-0.6,3-0.4,4-0.2
    switch (n) {
        case 0:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#ff5501',
                },
                {
                    offset: 1,
                    color: '#ffc472',
                },
            ]);
        case 1:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#ff7734',
                },
                {
                    offset: 1,
                    color: '#ffd08e',
                },
            ]);
        case 2:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#ff9967',
                },
                {
                    offset: 1,
                    color: '#ffdcaa',
                },
            ]);
        case 3:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#ffbb99',
                },
                {
                    offset: 1,
                    color: '#ffe7c7',
                },
            ]);
        default:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#ffddcc',
                },
                {
                    offset: 1,
                    color: '#fff3e3',
                },
            ]);
    }
};
option = {
    series: [
        {
            hoverAnimation: false,
            avoidLabelOverlap: false,
            center: ['30%', '50%'],
            cursor: 'default',
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 5,
            },
            label: {
                show: false,
                position: 'center',
            },

            data: [
                {
                    value: 1048,
                    name: '选项A',
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 5,
                            color: blueCol(0),
                        },
                    },
                },
                {
                    value: 735,
                    name: '选项B',
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 5,
                            color: blueCol(1),
                        },
                    },
                },
                {
                    value: 580,
                    name: '选项C',
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 5,
                            color: blueCol(2),
                        },
                    },
                },
                {
                    value: 484,
                    name: '选项D',
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 5,
                            color: blueCol(3),
                        },
                    },
                },
                {
                    value: 300,
                    name: '选项E',
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 5,
                            color: blueCol(4),
                        },
                    },
                },
            ],
        },
    ],
};
