let list = [
    {
        name: '正负压设备改造项目',
        value: 36,
    },
    {
        name: '电力扩容设备改造项目',
        value: 25,
    },
    {
        name: '电力扩容设备改造项目2',
        value: 39,
    },
    {
        name: '电力扩容设备改造项目3',
        value: 24,
    },
    {
        name: '电力扩容设备改造项目4',
        value: 27,
    },
];
let yName = list.map((item) => item.name);
let xData = list.map((item) => item.value);
let barWidth = 10;
let max = 40;
let maxList = [max, max, max, max, max];
option = {
    backgroundColor: '#fff',
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
        max: max,
    },
    grid: {
        containLabel: true,
        left: 30,
        top: 0,
        right: 100,
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
                    color: '#6A6A6B',
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
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#75ADFA', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#56DDF5', // 100% 处的颜色
                        },
                    ],
                },
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
            symbolMargin: 1,
            symbol: 'rect',
            symbolSize: [50, barWidth],
            symbolPosition: 'start',
            itemStyle: {
                normal: {
                    color: '#D2E4FA',
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            data: xData,
            z: 0,
            animationEasing: 'elasticOut',
        },
        {
            //分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#fff',
            },
            symbolRepeat: 'fixed',
            symbolMargin: 25,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [2, barWidth],
            symbolPosition: 'start',
            data: maxList,
            z: 2,
            animationEasing: 'elasticOut',
        },
    ],
};
