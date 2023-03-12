const list = [
    { value: 10, name: '针叶林' },
    { value: 5, name: '阔叶林' },
    { value: 8, name: '针阔混交林' },
];
const yName = list.map((item) => item.name);
const xData = list.map((item) => item.value);
const barWidth = 18;
option = {
    backgroundColor: '#fff',
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            margin: 10,
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    grid: {
        containLabel: true,
        left: 16,
        top: 13,
        right: 16,
        bottom: 0,
    },
    yAxis: [
        {
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: 0,
                inside: true,
                verticalAlign: 'bottom',
                padding: [0, 0, 20, 0],
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#606266',
                },
            },
            data: yName,
        },
    ],
    series: [
        {
            // 内
            type: 'bar',
            barWidth,
            legendHoverLink: false,
            symbolRepeat: true,
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#31CDC3', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#31B4CD', // 100% 处的颜色
                        },
                    ],
                },
            },
            data: list,
            z: 2,
            animationEasing: 'elasticOut',
        },
        {
            // 背景
            type: 'pictorialBar',
            symbolRepeat: true,
            symbol: 'rect',
            symbolSize: [8, 18],
            silent: true,
            itemStyle: {
                color: '#EAF0FF',
            },
            data: [100, 100, 100],
            z: 2,
            animationEasing: 'elasticOut',
            label: {
                normal: {
                    show: true,
                    position: 'insideTopRight',
                    offset: [0, -16],
                    textStyle: {
                        color: '#31B4CD',
                        fontSize: 14,
                    },
                    formatter: function (a) {
                        for (let i = 0; i < xData.length; i++) {
                            if (a.name === yName[i]) {
                                return xData[i] + '%';
                            }
                        }
                    },
                },
            },
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#fff',
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [2, barWidth],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: list,
            z: 3,
            animationEasing: 'elasticOut',
        },
    ],
};
