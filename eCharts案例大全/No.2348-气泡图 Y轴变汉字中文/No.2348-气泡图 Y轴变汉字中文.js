var ballonData = [
    [
        [2, 1],
        [5, 2],
        [6, 3],
        [9, 4],
        [24, 5],
        [11, 6],
        [14, 7],
    ],
    [
        [3, 1],
        [15, 2],
        [25, 3],
        [2, 4],
        [4, 5],
        [14, 6],
        [9, 7],
    ],
];
var weekday = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
option = {
    backgroundColor:'black',
    grid: {
        left: '10%',
        right: '3%',
        top: '25%',
        bottom: '10%',
    },
    legend: {
        right: '5%',
        top: '0%',
        data: ['上周', '本周'],
        textStyle: {
            color: '#00dcf1',
            fontSize: 20,
            fontStyle: 'italic',
            fontWeight: 500,
            fontFamily: 'siyuan',
        },
        //图例大小
        itemHeight: 20,
    },
    yAxis: [
        {
            splitLine: {
                lineStyle: {
                    type: 'solid',
                    color: 'rgba(70,91,92,0.5)',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            scale: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#00dcf1',
                },
                formatter: function (params) {
                    switch (params) {
                        case 1:
                            return '周一';
                            break;
                        case 2:
                            return '周二';
                            break;
                        case 3:
                            return '周三';
                            break;
                        case 4:
                            return '周四';
                            break;
                        case 5:
                            return '周五';
                            break;
                        case 6:
                            return '周六';
                            break;
                        case 7:
                            return '周日';
                            break;
                    }
                },
            },
            splitNumber: weekday.length,
        },
    ],
    xAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00dcf1',
            },
        },
    },
    series: [
        {
            name: '上周',
            data: ballonData[0],
            type: 'scatter',
            symbolSize: function (data) {
                return 30;
            },
            emphasis: {
                focus: 'series',
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[0];
                    },
                    position: 'inside',
                },
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                    {
                        offset: 0,
                        color: 'rgb(129, 227, 238)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(25, 183, 207)',
                    },
                ]),
            },
        },
        {
            name: '本周',
            data: ballonData[1],
            type: 'scatter',
            symbolSize: function (data) {
                return 20;
            },
            emphasis: {
                focus: 'series',
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[1];
                    },
                    position: 'inside',
                },
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                    {
                        offset: 0,
                        color: 'rgb(238,211,129)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(158,120,6)',
                    },
                ]),
            },
        },
    ],
};
