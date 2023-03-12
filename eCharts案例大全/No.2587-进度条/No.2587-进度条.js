let list = [
    {
        name: '',
        value: 8.76,
    },
];
let yName = list.map((item) => item.name);
let xData = list.map((item) => item.value);
let barWidth = 18;
option = {
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
        left: 0,
        top: 0,
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
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                },
            },
            data: yName,
        },
    ],
    series: [
        {
            //内
            type: 'bar',
            barWidth,
            legendHoverLink: false,
            symbolRepeat: true,
            silent: true,
            itemStyle: {
                color: '#44FFEB',
            },
            data: list,
            z: 1,
            animationEasing: 'elasticOut',
        },
        {
            // 背景
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'roundRect',
            symbolSize: [6, barWidth],
            itemStyle: {
                normal: {
                    color: '#2E4B6B',
                },
            },
            data: [100],
            z: 0,
            animationEasing: 'elasticOut',
        },
        {
            //分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#131C2A',
            },
            symbolRepeat: 'fixed',
            symbolMargin: 3,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [3, barWidth],
            symbolPosition: 'start',
            symbolOffset: [6, 0],
            data: list,
            z: 2,
            animationEasing: 'elasticOut',
        },
    ],
};
