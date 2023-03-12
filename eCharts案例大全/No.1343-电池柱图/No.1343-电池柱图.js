chartData = [
    {
        name: 'A公司',
        value: 67,
    },
    {
        name: 'B公司',
        value: 57,
    },
    {
        name: 'C公司',
        value: 42,
    },
    {
        name: 'D公司',
        value: 35,
    },
    {
        name: 'E公司',
        value: 32,
    },
];

let yName = chartData.map((item) => item.name);
let barWidth = 9;
let max = 0;
chartData.forEach((item) => {
    max = item.value > max ? Math.ceil(item.value / 100) * 100 : max;
});
let totalArray = new Array(5).fill(max);
option = {
    backgroundColor: '#313131',
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
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
        left: 10,
        top: 20,
        right: 10,
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
                show: false,
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                },
            },
            data: yName,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '14',
                },
                align: 'right',
                padding: [0, 0, 0, 0],
                verticalAlign: 'bottom',
                lineHeight: 36,
                // 空闲车位、占比
                formatter: (value, index) => {
                    return `{a|${value}}`;
                },
                rich: {
                    a: {
                        fontSize: 14,
                        padding: [0, 10, 0, 0],
                    },
                },
            },
            data: chartData,
        },
    ],
    series: [
        {
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
                            offset: 1,
                            color: '#00abee', // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: '#62E6F6', // 100% 处的颜色
                        },
                    ],
                },
            },
            data: chartData,
            zlevel: 1,
            animationEasing: 'elasticOut',
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-23px'],
                    textStyle: {
                        fontSize: '14',
                        fontFamily: 'customFont',
                        color: '#FFFFFF',
                    },
                    // 柱图名称
                    formatter: (value) => {
                        return value.name;
                    },
                },
            },
        },
        // 背景条形图
        {
            name: '背景',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            data: totalArray,
            itemStyle: {
                normal: {
                    color: '#47515C',
                },
            },
        },
        {
            type: 'pictorialBar',
            itemStyle: {
                color: '#000',
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [1, barWidth],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: chartData,
            zlevel: 2,
            animationEasing: 'elasticOut',
        },
    ],
};
