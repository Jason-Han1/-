let categoryData = ['原煤', '天然气', '原油', '一次电力', '汽油', '柴油'];
let chartdata = [1111, 11111, 1111, 1111, 22222, 2222];
let backgroundColor = 'rgba(0,0,0,0)';
let itemcolor = {
    type: 'linear',
    colorStops: [
        {
            offset: 0,
            color: 'rgba(6, 120, 157,1)',
        },
        {
            offset: 0.5,
            color: 'rgba(6, 120, 157,0.2)',
        },
        {
            offset: 1,
            color: 'rgba(6, 120, 157,1)',
        },
    ],
};

option = {
    backgroundColor: backgroundColor,
    textStyle: {
        color: '#c0c3cd',
        fontSize: 14,
    },
    toolbox: {
        show: false,
        feature: {
            saveAsImage: {
                backgroundColor: '#031245',
            },
            restore: {},
        },
        iconStyle: {
            borderColor: '#c0c3cd',
        },
    },
    legend: {
        top: 10,
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        left: 'center',
        padding: 0,
        textStyle: {
            color: '#c0c3cd',
            fontSize: 14,
            padding: [2, 0, 0, 0],
        },
    },
    color: ['#00D7E9', 'rgba(0, 215, 233, 0.9)'],
    grid: {
        containLabel: true,
        left: 40,
        right: 20,
        bottom: 40,
        top: 40,
    },
    xAxis: {
        nameTextStyle: {
            color: '#ffffff',
            padding: [0, 0, -10, 0],
            fontSize: 14,
        },
        axisLabel: {
            color: '#ffffff',
            fontSize: 14,
            interval: 0,
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#384267',
                width: 1,
            },
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#335971',
            },
            show: true,
        },
        data: categoryData,
        type: 'category',
    },
    yAxis: {
        nameTextStyle: {
            color: '#ffffff',
            padding: [0, 0, -10, 0],
            fontSize: 14,
        },
        axisLabel: {
            color: '#ffffff',
            fontSize: 14,
        },
        axisTick: {
            lineStyle: {
                color: '#668092',
                width: 1,
            },
            show: true,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#335971',
                // "type": "dashed"
            },
        },
        axisLine: {
            lineStyle: {
                color: '#668092',
                width: 1,
                // "type": "dashed"
            },
            show: true,
        },
        name: '',
    },
    series: [
        {
            data: chartdata,
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 20,
            itemStyle: {
                color: {
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    type: 'linear',
                    colorStops: [
                        {
                            offset: 0,
                            color: '#00D7E9',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 167, 233,0.3)',
                        },
                    ],
                },
            },
            label: {
                show: true,
                position: 'top',
                distance: 10,
                color: '#fff',
            },
        },
        {
            data: [1, 1, 1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [20, 10],
        },
        {
            data: chartdata,
            type: 'pictorialBar',
            barMaxWidth: '20',

            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [20, 12],
            zlevel: 2,
        },
    ],
    tooltip: {
        show: true,
        formatter: '{b}:{c0}',
    },
};
